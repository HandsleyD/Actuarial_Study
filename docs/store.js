// Data layer: Supabase (when configured) backed by a localStorage cache and
// offline write queue. This is the ONLY file that talks to Supabase — app.js
// calls Store.* and never touches the Supabase client directly, so moving to
// a different backend later (e.g. a real API on Cloudflare) means rewriting
// this file, not the UI code.
//
// Behaviour:
//   - No SUPABASE_URL/SUPABASE_PUBLISHABLE_KEY configured (see config.js): everything
//     is read/written to localStorage only. No login, no cross-device sync,
//     but the site is fully usable.
//   - Configured but signed out: same as above (local-only), plus the option
//     to sign in/up.
//   - Configured and signed in: reads merge server state into the local
//     cache; writes update the local cache (and the UI) immediately — the
//     app never waits on the network — and are queued for upload in the
//     background, retried on the next write, auth change, or "online" event
//     until they succeed.

const Store = (function () {
  const LS_PREFIX = "actuarialStudy";
  const PENDING_KEY = `${LS_PREFIX}:pending`;
  const STATUS_TABLE = "module_status";
  const MASTERY_TABLE = "flashcard_mastery";
  const STREAK_TABLE = "study_streak";
  const SESSION_TABLE = "session_log";
  const SRS_TABLE = "flashcard_srs"; // added by supabase/migrations/002_spaced_repetition.sql
  const DRILL_TABLE = "drill_progress"; // added by supabase/migrations/003_drills.sql
  const PLAN_TABLE = "exam_plan"; // added by supabase/migrations/004_exam_plan.sql
  const RESULT_TABLE = "subject_result"; // added by supabase/migrations/005_subject_results.sql
  // Reviews with more than this much idle time between them belong to separate sessions.
  const SESSION_GAP_MS = 30 * 60 * 1000;

  let client = null;
  let currentUser = null;
  let readyPromise = null;
  let flushing = false;
  // Exams whose spaced-repetition rows have been fetched from the server this
  // page load (or that don't need fetching: signed out / unconfigured). Seeding
  // schedules for pre-existing stars waits for this, so a signed-in device that
  // happens to be offline can't overwrite real server-side schedules with seeds.
  const srsAuthoritative = new Set();
  // Set when Supabase says flashcard_srs doesn't exist — i.e. the account's
  // project hasn't had supabase/migrations/002_spaced_repetition.sql run yet.
  let srsTableMissing = false;
  // Same pair again for drills (supabase/migrations/003_drills.sql). Kept
  // separate from the flashcard flag so a project that has run 002 but not
  // 003 degrades on drills alone, rather than looking broken everywhere.
  let drillTableMissing = false;
  let planTableMissing = false; // and again for the exam plan (004_exam_plan.sql)
  let resultTableMissing = false; // and for exam results (005_subject_results.sql)

  function looksLikeMissingTable(error, table) {
    const code = error && error.code;
    const msg = (error && error.message) || "";
    return code === "42P01" || code === "PGRST205" || (!!table && msg.includes(table));
  }
  const authListeners = [];
  const syncListeners = [];

  function isConfigured() {
    return typeof SUPABASE_URL === "string" && SUPABASE_URL.length > 0 &&
      typeof SUPABASE_PUBLISHABLE_KEY === "string" && SUPABASE_PUBLISHABLE_KEY.length > 0;
  }

  function userKey() {
    return currentUser ? currentUser.id : "anon";
  }

  function lsKey(kind, examCode) {
    return examCode ? `${LS_PREFIX}:${kind}:${userKey()}:${examCode}` : `${LS_PREFIX}:${kind}:${userKey()}`;
  }

  function readLS(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }

  function writeLS(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* localStorage unavailable (private browsing, quota, etc) — in-memory only for this page load */
    }
  }

  function allKeys() {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k) keys.push(k);
    }
    return keys;
  }

  function readPending() {
    return readLS(PENDING_KEY, []);
  }

  function writePending(list) {
    writeLS(PENDING_KEY, list);
  }

  function enqueue(op) {
    const list = readPending();
    list.push({ ...op, userId: currentUser ? currentUser.id : null, ts: Date.now() });
    writePending(list);
    notifySync();
    flushPending(); // fire and forget — never block the caller on the network
  }

  function onSyncChange(cb) {
    syncListeners.push(cb);
  }

  function notifySync() {
    syncListeners.forEach((cb) => {
      try {
        cb();
      } catch {
        /* a listener throwing shouldn't break sync */
      }
    });
  }

  /* ---------- init & auth ---------- */

  function init() {
    if (readyPromise) return readyPromise;
    if (!isConfigured()) {
      readyPromise = Promise.resolve();
      return readyPromise;
    }
    client = supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
    readyPromise = client.auth
      .getSession()
      .then(({ data }) => {
        currentUser = data.session ? data.session.user : null;
        client.auth.onAuthStateChange((_event, session) => {
          const wasSignedOut = !currentUser;
          currentUser = session ? session.user : null;
          srsAuthoritative.clear(); // a different account's schedules must be re-fetched before seeding
          if (wasSignedOut && currentUser) adoptAnonymousData();
          authListeners.forEach((cb) => cb(currentUser));
          notifySync();
          flushPending();
        });
        if (currentUser) flushPending();
      })
      .catch(() => {
        /* couldn't reach Supabase (offline, misconfigured) — fall back to local-only for this session */
      });
    return readyPromise;
  }

  function getUser() {
    return currentUser;
  }

  function onAuthChange(cb) {
    authListeners.push(cb);
  }

  async function signUp(email, password) {
    if (!client) throw new Error("Cloud sync isn't set up on this site yet.");
    const { error } = await client.auth.signUp({ email, password });
    if (error) throw error;
  }

  async function signIn(email, password) {
    if (!client) throw new Error("Cloud sync isn't set up on this site yet.");
    const { error } = await client.auth.signInWithPassword({ email, password });
    if (error) throw error;
  }

  async function signOut() {
    if (!client) return;
    await client.auth.signOut();
  }

  // Progress made before signing in (stored under the "anon" cache namespace)
  // gets copied into the newly-signed-in user's namespace and queued for
  // upload, so trying the site out before creating an account isn't wasted.
  function adoptAnonymousData() {
    const uKey = userKey();
    const anonMid = ":anon:";
    const anonEnd = ":anon";
    allKeys().forEach((key) => {
      if (!key.startsWith(`${LS_PREFIX}:`) || key === PENDING_KEY) return;
      let newKey = null;
      if (key.includes(anonMid)) newKey = key.replace(anonMid, `:${uKey}:`);
      else if (key.endsWith(anonEnd)) newKey = key.slice(0, -anonEnd.length) + `:${uKey}`;
      if (!newKey || newKey === key || localStorage.getItem(newKey)) return; // don't clobber existing account data
      const value = localStorage.getItem(key);
      if (value) writeLS(newKey, JSON.parse(value));
    });
    requeueAllLocalData();
  }

  // Re-enqueues every cached module-status / mastery / schedule / drill /
  // streak entry for the current user as a pending write (enqueue() itself
  // kicks off the upload).
  function requeueAllLocalData() {
    const uKey = userKey();
    allKeys().forEach((key) => {
      if (key.startsWith(`${LS_PREFIX}:status:${uKey}:`)) {
        const examCode = key.split(":").pop();
        const map = readLS(key, {});
        Object.keys(map).forEach((moduleId) => enqueue({ type: "status", examCode, moduleId, value: map[moduleId] }));
      } else if (key.startsWith(`${LS_PREFIX}:mastery:${uKey}:`)) {
        const examCode = key.split(":").pop();
        const map = readLS(key, {});
        Object.keys(map).forEach((moduleId) => {
          Object.keys(map[moduleId] || {}).forEach((cardIdx) =>
            enqueue({ type: "mastery", examCode, moduleId, cardIdx: Number(cardIdx), value: map[moduleId][cardIdx] })
          );
        });
      } else if (key.startsWith(`${LS_PREFIX}:srs:${uKey}:`)) {
        const examCode = key.split(":").pop();
        const map = readLS(key, {});
        Object.keys(map).forEach((moduleId) => {
          Object.keys(map[moduleId] || {}).forEach((cardIdx) =>
            enqueue({ type: "srs", examCode, moduleId, cardIdx: Number(cardIdx), value: map[moduleId][cardIdx] })
          );
        });
      } else if (key.startsWith(`${LS_PREFIX}:drill:${uKey}:`)) {
        const examCode = key.split(":").pop();
        const map = readLS(key, {});
        Object.keys(map).forEach((itemId) => enqueue({ type: "drill", examCode, itemId, value: map[itemId] }));
      } else if (key === `${LS_PREFIX}:result:${uKey}`) {
        const map = readLS(key, {});
        Object.keys(map).forEach((examCode) => enqueue({ type: "result", examCode, value: map[examCode] }));
      } else if (key === `${LS_PREFIX}:plan:${uKey}`) {
        const plan = readLS(key, null);
        if (plan) enqueue({ type: "plan", value: plan });
      } else if (key === `${LS_PREFIX}:streak:${uKey}`) {
        const streak = readLS(key, null);
        if (streak) enqueue({ type: "streak", value: streak });
      }
    });
  }

  /* ---------- module status ---------- */

  function getModuleStatusCache(examCode) {
    return readLS(lsKey("status", examCode), {});
  }

  async function loadModuleStatus(examCode) {
    const cache = getModuleStatusCache(examCode);
    if (!client || !currentUser) return cache;
    try {
      const { data, error } = await client.from(STATUS_TABLE).select("module_id, status").eq("exam_code", examCode);
      if (error) throw error;
      const merged = { ...cache };
      (data || []).forEach((row) => {
        merged[row.module_id] = row.status;
      });
      writeLS(lsKey("status", examCode), merged);
      return merged;
    } catch {
      return cache; // offline or request failed — local cache is still valid
    }
  }

  function setModuleStatus(examCode, moduleId, status) {
    const cache = getModuleStatusCache(examCode);
    cache[moduleId] = status;
    writeLS(lsKey("status", examCode), cache);
    enqueue({ type: "status", examCode, moduleId, value: status });
  }

  /* ---------- flashcard mastery ---------- */

  function getMasteryCache(examCode) {
    return readLS(lsKey("mastery", examCode), {});
  }

  async function loadMastery(examCode) {
    const cache = getMasteryCache(examCode);
    if (!client || !currentUser) return cache;
    try {
      const { data, error } = await client
        .from(MASTERY_TABLE)
        .select("module_id, card_idx, mastered")
        .eq("exam_code", examCode);
      if (error) throw error;
      const merged = { ...cache };
      (data || []).forEach((row) => {
        if (!merged[row.module_id]) merged[row.module_id] = {};
        merged[row.module_id][row.card_idx] = row.mastered;
      });
      writeLS(lsKey("mastery", examCode), merged);
      return merged;
    } catch {
      return cache;
    }
  }

  function setMastery(examCode, moduleId, cardIdx, value) {
    const cache = getMasteryCache(examCode);
    if (!cache[moduleId]) cache[moduleId] = {};
    cache[moduleId][cardIdx] = value;
    writeLS(lsKey("mastery", examCode), cache);
    enqueue({ type: "mastery", examCode, moduleId, cardIdx, value });
  }

  /* ---------- spaced repetition (per-card review schedule) ---------- */
  //
  // One entry per card that has ever been scored — see docs/srs.js for the
  // scheduling rules and the shape of each entry. Stored and synced exactly
  // like mastery, except that merging keeps whichever copy of a card was
  // reviewed more recently, so an offline review isn't undone by a stale
  // server row when the page reloads before the queue has flushed.

  function getSrsCache(examCode) {
    return readLS(lsKey("srs", examCode), {});
  }

  function isNewer(a, b) {
    // true if schedule a reflects a later review than schedule b
    if (!b) return true;
    const la = a.last || "";
    const lb = b.last || "";
    if (la !== lb) return la > lb;
    return (a.reviews || 0) >= (b.reviews || 0);
  }

  async function loadSrs(examCode) {
    const cache = getSrsCache(examCode);
    if (!client || !currentUser) {
      srsAuthoritative.add(examCode);
      return cache;
    }
    try {
      const { data, error } = await client
        .from(SRS_TABLE)
        .select("module_id, card_idx, reps, interval_days, ease, due_date, lapses, reviews, last_reviewed")
        .eq("exam_code", examCode);
      if (error) {
        srsTableMissing = looksLikeMissingTable(error, SRS_TABLE);
        throw error;
      }
      srsTableMissing = false;
      const merged = { ...cache };
      (data || []).forEach((row) => {
        const remote = {
          reps: row.reps,
          interval: row.interval_days,
          ease: Number(row.ease),
          due: row.due_date,
          lapses: row.lapses,
          reviews: row.reviews,
          last: row.last_reviewed,
        };
        if (!merged[row.module_id]) merged[row.module_id] = {};
        const local = merged[row.module_id][row.card_idx];
        if (!local || isNewer(remote, local)) merged[row.module_id][row.card_idx] = remote;
      });
      writeLS(lsKey("srs", examCode), merged);
      srsAuthoritative.add(examCode);
      return merged;
    } catch {
      // Table missing (migration not run yet) or offline: scheduling still
      // works locally; seeding is skipped until a load succeeds.
      return cache;
    }
  }

  function setSrs(examCode, moduleId, cardIdx, value) {
    const cache = getSrsCache(examCode);
    if (!cache[moduleId]) cache[moduleId] = {};
    cache[moduleId][cardIdx] = value;
    writeLS(lsKey("srs", examCode), cache);
    enqueue({ type: "srs", examCode, moduleId, cardIdx, value });
  }

  // Gives every card that has a mastery mark but no schedule yet (i.e. it was
  // scored before spaced repetition existed) a starting schedule via
  // makeSeed(mastered, k). Returns how many were seeded.
  function seedSrsFromMastery(examCode, mastery, makeSeed) {
    if (!srsAuthoritative.has(examCode)) return 0;
    const cache = getSrsCache(examCode);
    let k = 0;
    Object.keys(mastery || {})
      .sort()
      .forEach((moduleId) => {
        Object.keys(mastery[moduleId] || {})
          .map(Number)
          .sort((a, b) => a - b)
          .forEach((cardIdx) => {
            if (cache[moduleId] && cache[moduleId][cardIdx]) return;
            const value = makeSeed(!!mastery[moduleId][cardIdx], k++);
            if (!cache[moduleId]) cache[moduleId] = {};
            cache[moduleId][cardIdx] = value;
            enqueue({ type: "srs", examCode, moduleId, cardIdx, value });
          });
      });
    if (k) writeLS(lsKey("srs", examCode), cache);
    return k;
  }

  /* ---------- drills ---------- */
  //
  // Drills are their own track: nothing here writes to flashcard_mastery, so a
  // drill result can never move the star total or the Associate/Fellow rank.
  // Per-item state is the srs.js schedule plus lifetime attempts/correct — see
  // supabase/migrations/003_drills.sql for why the key is a stable string id
  // rather than the positional (module_id, card_idx) flashcards use.
  //
  // Shape: { itemId: { reps, interval, ease, due, lapses, reviews, last, attempts, correct } }

  function getDrillCache(examCode) {
    return readLS(lsKey("drill", examCode), {});
  }

  async function loadDrills(examCode) {
    const cache = getDrillCache(examCode);
    if (!client || !currentUser) return cache;
    try {
      const { data, error } = await client
        .from(DRILL_TABLE)
        .select("item_id, reps, interval_days, ease, due_date, lapses, reviews, last_reviewed, attempts, correct")
        .eq("exam_code", examCode);
      if (error) {
        drillTableMissing = looksLikeMissingTable(error, DRILL_TABLE);
        throw error;
      }
      drillTableMissing = false;
      const merged = { ...cache };
      (data || []).forEach((row) => {
        const remote = {
          reps: row.reps,
          interval: row.interval_days,
          ease: Number(row.ease),
          due: row.due_date,
          lapses: row.lapses,
          reviews: row.reviews,
          last: row.last_reviewed,
          attempts: row.attempts,
          correct: row.correct,
        };
        const local = merged[row.item_id];
        // isNewer() compares last-reviewed date then review count — the same
        // rule flashcard schedules merge by, so a device that was offline for
        // a while can't roll back a newer attempt made elsewhere.
        if (!local || isNewer(remote, local)) merged[row.item_id] = remote;
      });
      writeLS(lsKey("drill", examCode), merged);
      return merged;
    } catch {
      // Table missing (003 not run yet) or offline — drills still grade and
      // schedule locally, and upload once they can.
      return cache;
    }
  }

  function setDrill(examCode, itemId, value) {
    const cache = getDrillCache(examCode);
    cache[itemId] = value;
    writeLS(lsKey("drill", examCode), cache);
    enqueue({ type: "drill", examCode, itemId, value });
  }

  function isDrillTableMissing() {
    return drillTableMissing;
  }

  /* ---------- streak ---------- */

  function getStreakCache() {
    return readLS(lsKey("streak"), { lastDate: null, count: 0 });
  }

  async function loadStreak() {
    const cache = getStreakCache();
    if (!client || !currentUser) return cache;
    try {
      const { data, error } = await client
        .from(STREAK_TABLE)
        .select("last_date, count")
        .eq("user_id", currentUser.id)
        .maybeSingle();
      if (error) throw error;
      if (data) {
        const merged = { lastDate: data.last_date, count: data.count };
        writeLS(lsKey("streak"), merged);
        return merged;
      }
      return cache;
    } catch {
      return cache;
    }
  }

  function bumpStreak() {
    const today = new Date().toISOString().slice(0, 10);
    const cache = getStreakCache();
    if (cache.lastDate === today) return cache;
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    const next = { count: cache.lastDate === yesterday ? cache.count + 1 : 1, lastDate: today };
    writeLS(lsKey("streak"), next);
    enqueue({ type: "streak", value: next });
    return next;
  }

  /* ---------- session log ---------- */
  //
  // A "session" is a run of flashcard reviews with no gap longer than
  // SESSION_GAP_MS between cards. There's no reliable "the user left the
  // site" event (tab close / phone lock don't fire anything we can count
  // on), so instead the current session just accumulates in localStorage
  // and gets closed out the next time a card is reviewed (or the site is
  // reopened) after the gap has passed — see recordCardReview() and
  // checkStaleSession().

  function getCurrentSession() {
    return readLS(lsKey("session"), null);
  }

  function getLastSessionCache() {
    return readLS(lsKey("lastSession"), null);
  }

  function finalizeSession(session) {
    if (!session || session.cardsReviewed <= 0) return;
    const finished = { ...session, endedAt: session.lastActivity };
    writeLS(lsKey("lastSession"), finished);
    enqueue({ type: "session", value: finished });
  }

  // Closes out a session left open from a previous visit, if it's gone stale.
  function checkStaleSession() {
    const session = getCurrentSession();
    if (session && Date.now() - session.lastActivity > SESSION_GAP_MS) {
      finalizeSession(session);
      writeLS(lsKey("session"), null);
    }
  }

  function localDate(ts) {
    const d = new Date(ts);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }

  // Cards reviewed per local calendar day, on this device — the dashboard's
  // activity strip and study streak. Merged with session_log from the server
  // by loadActivity(), so other devices' study days show up once synced.
  function getActivityCache() {
    return readLS(lsKey("activity"), {});
  }

  async function loadActivity() {
    const local = getActivityCache();
    if (!client || !currentUser) return local;
    try {
      const since = new Date(Date.now() - 400 * 86400000).toISOString();
      const { data, error } = await client
        .from(SESSION_TABLE)
        .select("started_at, cards_reviewed")
        .eq("user_id", currentUser.id)
        .gte("started_at", since);
      if (error) throw error;
      const remote = {};
      (data || []).forEach((row) => {
        const day = localDate(new Date(row.started_at).getTime());
        remote[day] = (remote[day] || 0) + row.cards_reviewed;
      });
      // Per day, take whichever source saw more reviews: local knows about
      // this device's unfinished session, remote knows about other devices.
      const merged = { ...local };
      Object.keys(remote).forEach((day) => {
        merged[day] = Math.max(merged[day] || 0, remote[day]);
      });
      return merged;
    } catch {
      return local;
    }
  }

  function recordCardReview(mastered) {
    const now = Date.now();
    const activity = getActivityCache();
    const day = localDate(now);
    activity[day] = (activity[day] || 0) + 1;
    writeLS(lsKey("activity"), activity);
    let session = getCurrentSession();
    if (session && now - session.lastActivity > SESSION_GAP_MS) {
      finalizeSession(session);
      session = null;
    }
    if (!session) session = { startedAt: now, lastActivity: now, cardsReviewed: 0, cardsMastered: 0 };
    session.cardsReviewed += 1;
    if (mastered) session.cardsMastered += 1;
    session.lastActivity = now;
    writeLS(lsKey("session"), session);
  }

  async function loadLastSession() {
    checkStaleSession();
    const cache = getLastSessionCache();
    if (!client || !currentUser) return cache;
    try {
      const { data, error } = await client
        .from(SESSION_TABLE)
        .select("started_at, ended_at, cards_reviewed, cards_mastered")
        .eq("user_id", currentUser.id)
        .order("ended_at", { ascending: false })
        .limit(1)
        .maybeSingle();
      if (error) throw error;
      if (data) {
        const remote = {
          startedAt: new Date(data.started_at).getTime(),
          endedAt: new Date(data.ended_at).getTime(),
          cardsReviewed: data.cards_reviewed,
          cardsMastered: data.cards_mastered,
        };
        if (!cache || remote.endedAt > cache.endedAt) {
          writeLS(lsKey("lastSession"), remote);
          return remote;
        }
      }
      return cache;
    } catch {
      return cache;
    }
  }

  /* ---------- exam pacing log (device-local) ---------- */
  //
  // One entry per timed practice question: how long it took against the
  // allowance (marks x minutes-per-mark). Kept on this device only — it's a
  // practice aid, not a study record worth a server table.

  function getPaceLog() {
    return readLS(lsKey("pace"), []);
  }

  function addPaceEntry(entry) {
    const log = getPaceLog();
    log.push(entry);
    writeLS(lsKey("pace"), log.slice(-300));
  }

  /* ---------- AI answer feedback (optional Supabase Edge Function) ---------- */

  /* ---------- exam plan ---------- */
  //
  // Which subjects the user intends to sit at which sitting. One small
  // document per user, merged last-write-wins on updatedAt (ms since epoch).
  //
  // Shape: { sittings: { "2027-04": ["CS1", "CM1"], ... },
  //         specialists: { sp: ["SP2", "SP4"], sa: ["SA2"] }, updatedAt }
  // specialists are the Specialist subjects the user means to take but
  // hasn't placed in a sitting yet (the route map suggests sittings for them).

  function getExamPlanCache() {
    const plan = readLS(lsKey("plan"), { sittings: {}, updatedAt: 0 });
    return { ...plan, specialists: plan.specialists || { sp: [], sa: [] } };
  }

  // Server copy of the plan, or null if there's no row yet. Throws on error.
  async function fetchRemotePlan() {
    const { data, error } = await client.from(PLAN_TABLE).select("plan").maybeSingle();
    if (error) {
      planTableMissing = looksLikeMissingTable(error, PLAN_TABLE);
      throw error;
    }
    planTableMissing = false;
    const remote = data && data.plan;
    return remote && remote.sittings ? remote : null;
  }

  // Adopts the server copy only if it's newer than what's cached NOW -- the
  // cache is re-read after the network call, so an edit made while the fetch
  // was in flight is never rolled back by an older server copy.
  function adoptRemotePlanIfNewer(remote) {
    const cache = getExamPlanCache();
    if (remote && (remote.updatedAt || 0) > (cache.updatedAt || 0)) {
      writeLS(lsKey("plan"), remote);
      return remote;
    }
    return cache;
  }

  async function loadExamPlan() {
    if (!client || !currentUser) return getExamPlanCache();
    try {
      return adoptRemotePlanIfNewer(await fetchRemotePlan());
    } catch {
      return getExamPlanCache(); // table missing (004 not run yet) or offline — the local plan still works
    }
  }

  // Leaving out specialists keeps the ones already saved.
  function setExamPlan(sittings, specialists) {
    const plan = { sittings, specialists: specialists || getExamPlanCache().specialists, updatedAt: Date.now() };
    writeLS(lsKey("plan"), plan);
    enqueue({ type: "plan", value: plan });
    return plan;
  }

  // Called when a sync brings in a newer plan saved on another device.
  const planListeners = [];
  function onPlanChange(cb) {
    planListeners.push(cb);
  }

  // Likewise for exam results.
  const resultListeners = [];
  function onResultsChange(cb) {
    resultListeners.push(cb);
  }

  function notifyListeners(list) {
    list.forEach((cb) => {
      try {
        cb();
      } catch {
        /* a listener throwing shouldn't requeue anything */
      }
    });
  }

  function isPlanTableMissing() {
    return planTableMissing;
  }

  /* ---------- exam results ---------- */
  //
  // Whether the user has passed, or been exempted from, each subject. This is
  // separate from module status: modules track revision, results track the
  // exam itself, and only results count towards Associate and Fellow.
  //
  // Shape: { examCode: { status: "passed" | "exempt" | "none", sitting, updatedAt } }
  // "none" is kept rather than deleting the entry, so clearing a result on
  // one device syncs to the others like any other change.

  function getResultsCache() {
    return readLS(lsKey("result"), {});
  }

  async function loadResults() {
    if (!client || !currentUser) return getResultsCache();
    try {
      const { data, error } = await client.from(RESULT_TABLE).select("exam_code, status, sitting, updated_at");
      if (error) {
        resultTableMissing = looksLikeMissingTable(error, RESULT_TABLE);
        throw error;
      }
      resultTableMissing = false;
      // Re-read after the fetch so a result set while it was in flight wins.
      const merged = getResultsCache();
      (data || []).forEach((row) => {
        const remote = { status: row.status, sitting: row.sitting, updatedAt: Date.parse(row.updated_at) || 0 };
        const local = merged[row.exam_code];
        if (!local || remote.updatedAt > (local.updatedAt || 0)) merged[row.exam_code] = remote;
      });
      writeLS(lsKey("result"), merged);
      return merged;
    } catch {
      return getResultsCache(); // table missing (005 not run yet) or offline
    }
  }

  function setResult(examCode, status, sitting) {
    const cache = getResultsCache();
    const value = { status, sitting: sitting || null, updatedAt: Date.now() };
    cache[examCode] = value;
    writeLS(lsKey("result"), cache);
    enqueue({ type: "result", examCode, value });
    return cache;
  }

  function isResultTableMissing() {
    return resultTableMissing;
  }

  // Per-device "don't show the welcome banner again".
  function isWelcomed() {
    return !!readLS(lsKey("welcomed"), false);
  }

  function setWelcomed() {
    writeLS(lsKey("welcomed"), true);
  }

  // Grades a typed flashcard answer against the model answer using a
  // serverless proxy (supabase/functions/grade-answer) so the LLM API key
  // never has to live in the browser. Requires the user to be signed in —
  // this endpoint calls an external AI API, so it's gated the same way
  // cloud sync is, rather than left open to anonymous callers of the public
  // anon key.
  async function gradeAnswer({ question, modelAnswer, userAnswer }) {
    if (!client) throw new Error("Cloud sync isn't set up on this site yet.");
    if (!currentUser) throw new Error("Sign in to get AI feedback on your answers.");
    const { data, error } = await client.functions.invoke("grade-answer", {
      body: { question, modelAnswer, userAnswer },
    });
    if (error) throw error;
    if (!data || !data.verdict) throw new Error((data && data.error) || "AI grading is temporarily unavailable.");
    return data;
  }

  /* ---------- sync queue ---------- */

  async function flushPending() {
    if (!client || !currentUser || flushing) return;
    let list = readPending();
    if (!list.length) return;
    flushing = true;
    const remaining = [];
    try {
      // Review schedules are written in bulk (seeding pre-existing stars can
      // queue hundreds at once), as one upsert with only the latest value per
      // card, instead of one request per op like the rest.
      const srsOps = list.filter((op) => op.type === "srs" && (!op.userId || op.userId === currentUser.id));
      if (srsOps.length) {
        const latest = new Map();
        srsOps.forEach((op) => latest.set(`${op.examCode}|${op.moduleId}|${op.cardIdx}`, op));
        const now = new Date().toISOString();
        const rows = [...latest.values()].map((op) => ({
          user_id: currentUser.id,
          exam_code: op.examCode,
          module_id: op.moduleId,
          card_idx: op.cardIdx,
          reps: op.value.reps,
          interval_days: op.value.interval,
          ease: op.value.ease,
          due_date: op.value.due,
          lapses: op.value.lapses,
          reviews: op.value.reviews,
          last_reviewed: op.value.last,
          updated_at: now,
        }));
        try {
          const { error } = await client.from(SRS_TABLE).upsert(rows, { onConflict: "user_id,exam_code,module_id,card_idx" });
          if (error) {
            srsTableMissing = looksLikeMissingTable(error, SRS_TABLE);
            throw error;
          }
          srsTableMissing = false;
        } catch {
          // Offline, or the table doesn't exist yet because
          // 002_spaced_repetition.sql hasn't been run — keep only the latest
          // op per card queued so it uploads once it can.
          remaining.push(...latest.values());
        }
      }

      // Drill results upload in bulk for the same reason schedules do: a
      // finished run queues a dozen or more at once.
      const drillOps = list.filter((op) => op.type === "drill" && (!op.userId || op.userId === currentUser.id));
      if (drillOps.length) {
        const latest = new Map();
        drillOps.forEach((op) => latest.set(`${op.examCode}|${op.itemId}`, op));
        const now = new Date().toISOString();
        const rows = [...latest.values()].map((op) => ({
          user_id: currentUser.id,
          exam_code: op.examCode,
          item_id: op.itemId,
          reps: op.value.reps,
          interval_days: op.value.interval,
          ease: op.value.ease,
          due_date: op.value.due,
          lapses: op.value.lapses,
          reviews: op.value.reviews,
          last_reviewed: op.value.last,
          attempts: op.value.attempts,
          correct: op.value.correct,
          updated_at: now,
        }));
        try {
          const { error } = await client.from(DRILL_TABLE).upsert(rows, { onConflict: "user_id,exam_code,item_id" });
          if (error) {
            drillTableMissing = looksLikeMissingTable(error, DRILL_TABLE);
            throw error;
          }
          drillTableMissing = false;
        } catch {
          remaining.push(...latest.values());
        }
      }

      // The plan is one whole document, so only the latest queued copy matters.
      const planOps = list.filter((op) => op.type === "plan" && (!op.userId || op.userId === currentUser.id));
      if (planOps.length) {
        const op = planOps[planOps.length - 1];
        try {
          // Last-write-wins applies on upload too: if another device has
          // since saved a newer plan, this queued copy is dropped and the
          // newer one adopted, rather than overwriting it.
          const remote = await fetchRemotePlan();
          if (remote && (remote.updatedAt || 0) >= (op.value.updatedAt || 0)) {
            adoptRemotePlanIfNewer(remote);
            notifyListeners(planListeners);
          } else {
            const { error } = await client
              .from(PLAN_TABLE)
              .upsert({ user_id: currentUser.id, plan: op.value, updated_at: new Date().toISOString() }, { onConflict: "user_id" });
            if (error) {
              planTableMissing = looksLikeMissingTable(error, PLAN_TABLE);
              throw error;
            }
            planTableMissing = false;
          }
        } catch {
          remaining.push(op);
        }
      }

      let resultsChanged = false;
      for (const op of list) {
        if (op.userId && op.userId !== currentUser.id) {
          remaining.push(op); // belongs to a different (now signed-out) account — leave it queued
          continue;
        }
        if (op.type === "srs" || op.type === "drill" || op.type === "plan") continue; // handled in bulk above
        try {
          if (op.type === "status") {
            const { error } = await client.from(STATUS_TABLE).upsert(
              {
                user_id: currentUser.id,
                exam_code: op.examCode,
                module_id: op.moduleId,
                status: op.value,
                updated_at: new Date().toISOString(),
              },
              { onConflict: "user_id,exam_code,module_id" }
            );
            if (error) throw error;
          } else if (op.type === "result") {
            // Newer-wins on upload too: skip (and adopt) a server row that
            // another device saved after this queued change was made.
            const { data: existing, error: readError } = await client
              .from(RESULT_TABLE)
              .select("status, sitting, updated_at")
              .eq("exam_code", op.examCode)
              .maybeSingle();
            if (readError) {
              resultTableMissing = looksLikeMissingTable(readError, RESULT_TABLE);
              throw readError;
            }
            const serverAt = existing ? Date.parse(existing.updated_at) || 0 : 0;
            if (existing && serverAt >= op.value.updatedAt) {
              const cache = getResultsCache();
              if (!cache[op.examCode] || (cache[op.examCode].updatedAt || 0) < serverAt) {
                cache[op.examCode] = { status: existing.status, sitting: existing.sitting, updatedAt: serverAt };
                writeLS(lsKey("result"), cache);
                resultsChanged = true;
              }
              continue;
            }
            const { error } = await client.from(RESULT_TABLE).upsert(
              {
                user_id: currentUser.id,
                exam_code: op.examCode,
                status: op.value.status,
                sitting: op.value.sitting,
                updated_at: new Date(op.value.updatedAt).toISOString(),
              },
              { onConflict: "user_id,exam_code" }
            );
            if (error) {
              resultTableMissing = looksLikeMissingTable(error, RESULT_TABLE);
              throw error;
            }
            resultTableMissing = false;
          } else if (op.type === "mastery") {
            const { error } = await client.from(MASTERY_TABLE).upsert(
              {
                user_id: currentUser.id,
                exam_code: op.examCode,
                module_id: op.moduleId,
                card_idx: op.cardIdx,
                mastered: op.value,
                updated_at: new Date().toISOString(),
              },
              { onConflict: "user_id,exam_code,module_id,card_idx" }
            );
            if (error) throw error;
          } else if (op.type === "streak") {
            const { error } = await client.from(STREAK_TABLE).upsert(
              {
                user_id: currentUser.id,
                last_date: op.value.lastDate,
                count: op.value.count,
                updated_at: new Date().toISOString(),
              },
              { onConflict: "user_id" }
            );
            if (error) throw error;
          } else if (op.type === "session") {
            const { error } = await client.from(SESSION_TABLE).upsert(
              {
                user_id: currentUser.id,
                started_at: new Date(op.value.startedAt).toISOString(),
                ended_at: new Date(op.value.endedAt).toISOString(),
                cards_reviewed: op.value.cardsReviewed,
                cards_mastered: op.value.cardsMastered,
              },
              { onConflict: "user_id,started_at" }
            );
            if (error) throw error;
          }
        } catch {
          remaining.push(op); // network/transient error — keep for retry
        }
      }
      if (resultsChanged) notifyListeners(resultListeners);
    } finally {
      // Anything enqueued while this flush was awaiting the network was
      // appended after the snapshot we started from — keep it, don't clobber it.
      const addedMeanwhile = readPending().slice(list.length);
      writePending([...remaining, ...addedMeanwhile]);
      flushing = false;
      notifySync();
      if (addedMeanwhile.length) flushPending();
    }
  }

  function pendingCount() {
    if (!currentUser) return readPending().length;
    return readPending().filter((op) => !op.userId || op.userId === currentUser.id).length;
  }

  function isSrsTableMissing() {
    return srsTableMissing;
  }

  window.addEventListener("online", () => flushPending());

  return {
    init,
    isConfigured,
    getUser,
    onAuthChange,
    onSyncChange,
    signUp,
    signIn,
    signOut,
    loadModuleStatus,
    setModuleStatus,
    getModuleStatusCache,
    loadMastery,
    setMastery,
    getMasteryCache,
    loadSrs,
    setSrs,
    getSrsCache,
    seedSrsFromMastery,
    isSrsTableMissing,
    loadDrills,
    setDrill,
    getDrillCache,
    isDrillTableMissing,
    loadExamPlan,
    setExamPlan,
    getExamPlanCache,
    isPlanTableMissing,
    onPlanChange,
    onResultsChange,
    loadResults,
    setResult,
    getResultsCache,
    isResultTableMissing,
    isWelcomed,
    setWelcomed,
    loadStreak,
    bumpStreak,
    getStreakCache,
    recordCardReview,
    loadLastSession,
    getLastSessionCache,
    getActivityCache,
    getPaceLog,
    addPaceEntry,
    loadActivity,
    gradeAnswer,
    flushPending,
    pendingCount,
  };
})();
