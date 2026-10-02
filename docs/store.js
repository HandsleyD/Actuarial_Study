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
  const NOTE_TABLE = "card_note"; // added by supabase/migrations/006_card_notes.sql
  // Longest note kept, matching the check constraint in 006_card_notes.sql.
  const NOTE_MAX = 2000;
  const SCORE_TABLE = "question_score"; // added by supabase/migrations/007_question_scores.sql
  const MOCK_TABLE = "mock_result"; // likewise
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
  let noteTableMissing = false; // and for flashcard notes and flags (006_card_notes.sql)
  let scoreTableMissing = false; // and for self-marks and mock papers (007_question_scores.sql)

  function looksLikeMissingTable(error, table) {
    const code = error && error.code;
    const msg = (error && error.message) || "";
    return code === "42P01" || code === "PGRST205" || (!!table && msg.includes(table));
  }
  const authListeners = [];
  const syncListeners = [];
  const recoveryListeners = [];
  // True from arriving via a password-reset email until a new password is set.
  let passwordRecovery = false;
  // Accounts deleted this page load: their queued changes are dropped, even
  // ones a flush that was in flight at the time puts back (see flushPending).
  const deletedUsers = new Set();

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

  // Keys of this account's changes still waiting in the upload queue, for one
  // type and subject: a load must not replace them with the server's older
  // copy. keyOf(op) picks the key (module id, "module|card", ...).
  function pendingKeys(type, examCode, keyOf) {
    const uid = currentUser ? currentUser.id : null;
    return new Set(
      readPending()
        .filter((op) => op.type === type && op.examCode === examCode && (!op.userId || op.userId === uid))
        .map(keyOf)
    );
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
    // supabase-js is loaded with defer from a CDN; if it never arrived
    // (offline with nothing cached), run local-only like an unconfigured site.
    if (!isConfigured() || typeof supabase === "undefined") {
      readyPromise = Promise.resolve();
      return readyPromise;
    }
    client = supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
    // Arriving from a password-reset email: supabase-js reads the link's
    // token from the URL while it starts up and reports PASSWORD_RECOVERY.
    // Listen before getSession(), which waits for that start-up, or the
    // event has already gone by.
    client.auth.onAuthStateChange((event) => {
      if (event !== "PASSWORD_RECOVERY") return;
      passwordRecovery = true;
      notifyListeners(recoveryListeners);
    });
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

  // Emails a link back to this page (without its #/route) that signs the
  // user in for long enough to choose a new password. The page's address
  // must be in the project's Redirect URLs list: see supabase/SETUP.md.
  async function requestPasswordReset(email) {
    if (!client) throw new Error("Cloud sync isn't set up on this site yet.");
    const { error } = await client.auth.resetPasswordForEmail(email, { redirectTo: location.origin + location.pathname });
    if (error) throw error;
  }

  async function updatePassword(password) {
    if (!client || !currentUser) throw new Error("Open the link in your password-reset email again, then choose a new password.");
    const { error } = await client.auth.updateUser({ password });
    if (error) throw error;
    passwordRecovery = false;
  }

  function isPasswordRecovery() {
    return passwordRecovery;
  }

  function onPasswordRecovery(cb) {
    recoveryListeners.push(cb);
  }

  // Deletes the signed-in account and every row it owns, via the
  // delete-account Edge Function (the browser's key can't delete users),
  // then forgets this device's copy of that account's progress. Progress
  // kept on this device without an account (the "anon" namespace) stays.
  async function deleteAccount() {
    if (!client) throw new Error("Cloud sync isn't set up on this site yet.");
    if (!currentUser) throw new Error("Sign in to delete your account.");
    const uid = currentUser.id;
    const { data, error } = await client.functions.invoke("delete-account", { method: "POST" });
    if (error || !data || !data.deleted) {
      let detail = data && data.error;
      try {
        // A non-2xx reply arrives as an error whose context is the Response.
        if (!detail && error && error.context && error.context.json) detail = (await error.context.json()).error;
      } catch {
        /* no JSON body */
      }
      throw new Error(detail || "Couldn't reach the server to delete your account. Try again later.");
    }
    clearLocalData(uid);
    // The account no longer exists, so there's no server session to end:
    // just forget this one. That fires the usual signed-out auth change.
    try {
      await client.auth.signOut({ scope: "local" });
    } catch {
      /* already gone */
    }
  }

  function clearLocalData(uid) {
    deletedUsers.add(uid);
    allKeys().forEach((key) => {
      if (key.startsWith(`${LS_PREFIX}:`) && (key.endsWith(`:${uid}`) || key.includes(`:${uid}:`))) {
        try {
          localStorage.removeItem(key);
        } catch {
          /* localStorage unavailable */
        }
      }
    });
    writePending(readPending().filter((op) => op.userId !== uid));
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
  // note / streak entry for the current user as a pending write (enqueue() itself
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
      } else if (key.startsWith(`${LS_PREFIX}:note:${uKey}:`)) {
        const examCode = key.split(":").pop();
        const map = readLS(key, {});
        Object.keys(map).forEach((moduleId) => {
          Object.keys(map[moduleId] || {}).forEach((cardIdx) =>
            enqueue({ type: "note", examCode, moduleId, cardIdx: Number(cardIdx), value: map[moduleId][cardIdx] })
          );
        });
      } else if (key.startsWith(`${LS_PREFIX}:score:${uKey}:`)) {
        const examCode = key.split(":").pop();
        const map = readLS(key, {});
        Object.keys(map).forEach((questionId) =>
          (map[questionId] || []).forEach((value) => enqueue({ type: "score", examCode, questionId, value }))
        );
      } else if (key.startsWith(`${LS_PREFIX}:mock:${uKey}:`)) {
        const examCode = key.split(":").pop();
        readLS(key, []).forEach((value) => enqueue({ type: "mock", examCode, value }));
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
    const before = getModuleStatusCache(examCode);
    if (!client || !currentUser) return before;
    try {
      const { data, error } = await client.from(STATUS_TABLE).select("module_id, status").eq("exam_code", examCode);
      if (error) throw error;
      // Server values win, except for a module changed on this device that
      // the server doesn't have yet: still queued, or changed while this
      // request was in flight (re-read the cache, don't reuse the snapshot).
      const cache = getModuleStatusCache(examCode);
      const pending = pendingKeys("status", examCode, (op) => op.moduleId);
      const merged = { ...cache };
      (data || []).forEach((row) => {
        const id = row.module_id;
        if (pending.has(id) || cache[id] !== before[id]) return;
        merged[id] = row.status;
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
    const before = getMasteryCache(examCode);
    if (!client || !currentUser) return before;
    try {
      const { data, error } = await client
        .from(MASTERY_TABLE)
        .select("module_id, card_idx, mastered")
        .eq("exam_code", examCode);
      if (error) throw error;
      // As for module status: a card scored on this device that the server
      // doesn't have yet keeps its local mark.
      const cache = getMasteryCache(examCode);
      const pending = pendingKeys("mastery", examCode, (op) => `${op.moduleId}|${op.cardIdx}`);
      const at = (m, id, idx) => (m[id] ? m[id][idx] : undefined);
      const merged = JSON.parse(JSON.stringify(cache));
      (data || []).forEach((row) => {
        const id = row.module_id;
        const idx = row.card_idx;
        if (pending.has(`${id}|${idx}`) || at(cache, id, idx) !== at(before, id, idx)) return;
        if (!merged[id]) merged[id] = {};
        merged[id][idx] = row.mastered;
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

  // true only if schedule a reflects a strictly later review than b: used on
  // upload, where a tie means the server already has this exact review.
  function isStrictlyNewer(a, b) {
    const la = a.last || "";
    const lb = b.last || "";
    if (la !== lb) return la > lb;
    return (a.reviews || 0) > (b.reviews || 0);
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

  /* ---------- flashcard notes and flags ---------- */
  //
  // The user's own note on a card, and whether they've flagged it to come
  // back to. Keyed like mastery (module id, card index), merged last-write-
  // wins on updatedAt (ms since epoch) like exam results.
  //
  // Shape: { moduleId: { cardIdx: { note, flagged, updatedAt } } }
  // A cleared note and a removed flag stay as an entry (note "", flagged
  // false) rather than being deleted, so the clear syncs like any change.

  function getNotesCache(examCode) {
    return readLS(lsKey("note", examCode), {});
  }

  function noteFromRow(row) {
    return { note: row.note || "", flagged: !!row.flagged, updatedAt: Date.parse(row.updated_at) || 0 };
  }

  // One request for every subject: notes are sparse, so fetching them per
  // subject (as mastery is) would be dozens of requests for a handful of rows.
  // Resolves to { examCode: notesCache } for the subjects that changed.
  async function loadNotes() {
    if (!client || !currentUser) return {};
    try {
      const { data, error } = await client.from(NOTE_TABLE).select("exam_code, module_id, card_idx, note, flagged, updated_at");
      if (error) {
        noteTableMissing = looksLikeMissingTable(error, NOTE_TABLE);
        throw error;
      }
      noteTableMissing = false;
      // Caches are read after the fetch, so a note saved while it was in
      // flight is never rolled back by an older server copy.
      const changed = {};
      (data || []).forEach((row) => {
        const code = row.exam_code;
        const cache = changed[code] || getNotesCache(code);
        const remote = noteFromRow(row);
        const local = cache[row.module_id] && cache[row.module_id][row.card_idx];
        if (local && remote.updatedAt <= (local.updatedAt || 0)) return;
        if (!cache[row.module_id]) cache[row.module_id] = {};
        cache[row.module_id][row.card_idx] = remote;
        changed[code] = cache;
      });
      Object.keys(changed).forEach((code) => writeLS(lsKey("note", code), changed[code]));
      return changed;
    } catch {
      return {}; // table missing (007 not run yet) or offline — the local notes still work
    }
  }

  // patch: { note } and/or { flagged }; whatever's left out keeps its value.
  function setCardNote(examCode, moduleId, cardIdx, patch) {
    const cache = getNotesCache(examCode);
    const prev = (cache[moduleId] && cache[moduleId][cardIdx]) || { note: "", flagged: false };
    const value = {
      note: patch.note !== undefined ? String(patch.note).slice(0, NOTE_MAX) : prev.note || "",
      flagged: patch.flagged !== undefined ? !!patch.flagged : !!prev.flagged,
      updatedAt: Date.now(),
    };
    if (!cache[moduleId]) cache[moduleId] = {};
    cache[moduleId][cardIdx] = value;
    writeLS(lsKey("note", examCode), cache);
    enqueue({ type: "note", examCode, moduleId, cardIdx, value });
    return value;
  }

  function isNoteTableMissing() {
    return noteTableMissing;
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
      // Keep whichever copy saw the later study day (or, on the same day, the
      // longer run): this device may have studied since its last upload.
      const local = getStreakCache();
      if (data && (!local.lastDate || data.last_date > local.lastDate || (data.last_date === local.lastDate && data.count > local.count))) {
        const merged = { lastDate: data.last_date, count: data.count };
        writeLS(lsKey("streak"), merged);
        return merged;
      }
      return local;
    } catch {
      return cache;
    }
  }

  // Local calendar dates, like the review schedule and the activity strip, so
  // a late-night review counts towards the same day everywhere.
  function yesterdayOf(now) {
    const y = new Date(now);
    y.setDate(y.getDate() - 1); // calendar arithmetic, so clock changes don't skip a day
    return localDate(y.getTime());
  }

  // Called on study actions (a card scored, a drill answered, a practice
  // answer revealed), not on page load, so opening the site isn't studying.
  function bumpStreak() {
    const now = new Date();
    const today = localDate(now.getTime());
    const cache = getStreakCache();
    if (cache.lastDate === today) return cache;
    const yesterday = yesterdayOf(now);
    const next = { count: cache.lastDate === yesterday ? cache.count + 1 : 1, lastDate: today };
    writeLS(lsKey("streak"), next);
    enqueue({ type: "streak", value: next });
    return next;
  }

  // The run as it stands today: still alive if the last study day was today
  // or yesterday (today's study may not have happened yet), otherwise broken.
  function currentStreak() {
    const now = new Date();
    const { lastDate, count } = getStreakCache();
    return lastDate === localDate(now.getTime()) || lastDate === yesterdayOf(now) ? count : 0;
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
      // The server has every device's finished, uploaded sessions (this
      // device's included). Add what it can't know yet: this device's open
      // session and finished ones still queued. Local-only counts stay as a
      // floor, for days from before session logging reached the server.
      const unsent = {};
      const add = (s) => {
        if (!s || !s.cardsReviewed) return;
        const day = localDate(s.startedAt);
        unsent[day] = (unsent[day] || 0) + s.cardsReviewed;
      };
      add(getCurrentSession());
      readPending()
        .filter((op) => op.type === "session" && (!op.userId || op.userId === currentUser.id))
        .forEach((op) => add(op.value));
      const merged = { ...local };
      new Set([...Object.keys(remote), ...Object.keys(unsent)]).forEach((day) => {
        merged[day] = Math.max(local[day] || 0, (remote[day] || 0) + (unsent[day] || 0));
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

  // And for flashcard notes: called with the subject codes whose notes an
  // upload replaced with a newer copy from another device.
  const noteListeners = [];
  function onNotesChange(cb) {
    noteListeners.push(cb);
  }

  function notifyListeners(list, arg) {
    list.forEach((cb) => {
      try {
        cb(arg);
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

  /* ---------- self-marked practice questions and mock papers ---------- */
  //
  // Every time the user marks their own answer to a practice question, the
  // attempt is kept (see docs/mock.js for its shape), so the history survives
  // and the subject average can use the latest one. Attempts are keyed by
  // their timestamp and only ever added, so merging is a union: no device can
  // overwrite another's marks. Finished mock papers are kept the same way.
  //
  // Shapes: score  { questionId: [attempt, ...] }   per subject, oldest first
  //         mock   [{ at, questionIds, score, max, pct, passMark, passSitting, usedMs }]
  // The mock paper in progress (mockActive) stays on this device: it's a
  // countdown running in one browser, not a record worth syncing.

  function getScoreCache(examCode) {
    return readLS(lsKey("score", examCode), {});
  }

  function getMockCache(examCode) {
    return readLS(lsKey("mock", examCode), []);
  }

  // One request per table for every subject: the dashboard shows them all.
  function scoreFromRow(row) {
    return {
      at: Date.parse(row.attempted_at),
      parts: (row.part_marks || []).map(Number),
      score: Number(row.score),
      max: row.max_marks,
      src: row.source,
      updatedAt: Date.parse(row.updated_at) || 0,
    };
  }

  async function loadScores() {
    if (!client || !currentUser) return;
    const uid = currentUser.id;
    try {
      const { data, error } = await client
        .from(SCORE_TABLE)
        .select("exam_code, question_id, attempted_at, part_marks, score, max_marks, source, updated_at")
        .eq("user_id", uid);
      // Auth may change during the fetch; its response belongs only to uid.
      if (!currentUser || currentUser.id !== uid) return;
      if (error) {
        scoreTableMissing = looksLikeMissingTable(error, SCORE_TABLE);
        throw error;
      }
      scoreTableMissing = false;
      const byExam = {};
      (data || []).forEach((row) => (byExam[row.exam_code] = byExam[row.exam_code] || []).push(row));
      Object.keys(byExam).forEach((examCode) => {
        // Re-read after the fetch. An attempt re-marked on another device
        // replaces this device's copy if the server's is newer, unless this
        // device's own re-mark is still waiting to upload.
        const cache = getScoreCache(examCode);
        const pending = pendingKeys("score", examCode, (op) => `${op.questionId}|${op.value.at}`);
        byExam[examCode].forEach((row) => {
          const remote = scoreFromRow(row);
          const list = cache[row.question_id] || (cache[row.question_id] = []);
          const i = list.findIndex((a) => a.at === remote.at);
          if (i < 0) list.push(remote);
          else if (!pending.has(`${row.question_id}|${remote.at}`) && remote.updatedAt > (list[i].updatedAt || 0)) list[i] = remote;
          list.sort((a, b) => a.at - b.at);
        });
        writeLS(lsKey("score", examCode), cache);
      });
    } catch {
      /* table missing (007 not run yet) or offline — the local marks still count */
    }
  }

  async function loadMocks() {
    if (!client || !currentUser) return;
    const uid = currentUser.id;
    try {
      const { data, error } = await client
        .from(MOCK_TABLE)
        .select("exam_code, taken_at, question_ids, score, max_marks, pct, pass_mark, pass_sitting, used_ms")
        .eq("user_id", uid);
      if (!currentUser || currentUser.id !== uid) return;
      if (error) {
        scoreTableMissing = looksLikeMissingTable(error, MOCK_TABLE);
        throw error;
      }
      const byExam = {};
      (data || []).forEach((row) => (byExam[row.exam_code] = byExam[row.exam_code] || []).push(row));
      Object.keys(byExam).forEach((examCode) => {
        const cache = getMockCache(examCode);
        byExam[examCode].forEach((row) => {
          const at = Date.parse(row.taken_at);
          if (cache.some((m) => m.at === at)) return;
          cache.push({
            at,
            questionIds: row.question_ids || [],
            score: Number(row.score),
            max: row.max_marks,
            pct: Number(row.pct),
            passMark: row.pass_mark,
            passSitting: row.pass_sitting,
            usedMs: Number(row.used_ms) || 0,
          });
        });
        cache.sort((a, b) => a.at - b.at);
        writeLS(lsKey("mock", examCode), cache);
      });
    } catch {
      /* as above */
    }
  }

  // Adds an attempt, or replaces the one with the same timestamp (the user
  // changed a mark before moving on).
  function saveScore(examCode, questionId, attempt) {
    attempt = { ...attempt, updatedAt: Date.now() }; // which copy of a re-marked attempt is newest
    const cache = getScoreCache(examCode);
    const list = (cache[questionId] || []).filter((a) => a.at !== attempt.at);
    list.push(attempt);
    list.sort((a, b) => a.at - b.at);
    cache[questionId] = list;
    writeLS(lsKey("score", examCode), cache);
    enqueue({ type: "score", examCode, questionId, value: attempt });
    return cache;
  }

  function addMockResult(examCode, result) {
    const cache = getMockCache(examCode);
    cache.push(result);
    writeLS(lsKey("mock", examCode), cache);
    enqueue({ type: "mock", examCode, value: result });
    return cache;
  }

  function getActiveMock(examCode) {
    return readLS(lsKey("mockActive", examCode), null);
  }

  function setActiveMock(examCode, mock) {
    writeLS(lsKey("mockActive", examCode), mock);
  }

  function isScoreTableMissing() {
    return scoreTableMissing;
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

  /* ---------- export / import ---------- */
  //
  // Everything above, for the current user (or the signed-out "anon"
  // namespace), as one JSON document the user can keep as a backup or carry
  // to another device without an account. Importing merges entry by entry,
  // keeping whichever copy is newer by the same rules a load from the server
  // uses, and queues what it adopts for upload like any other change.

  const EXPORT_APP = "fellow";
  const EXPORT_FORMAT = 1;
  const PER_EXAM_KINDS = ["status", "mastery", "srs", "drill", "score", "mock"];
  // Statuses only move forward in practice: studying starts a module, and a
  // Done module stays Done.
  const STATUS_ORDER = ["Not started", "In progress", "Done"];

  function exportData() {
    checkStaleSession(); // so a session that has finished counts as the last one
    const uKey = userKey();
    const data = {};
    PER_EXAM_KINDS.forEach((kind) => {
      const prefix = `${LS_PREFIX}:${kind}:${uKey}:`;
      data[kind] = {};
      allKeys()
        .filter((key) => key.startsWith(prefix))
        .forEach((key) => {
          const value = readLS(key, null);
          if (value && Object.keys(value).length) data[kind][key.slice(prefix.length)] = value;
        });
    });
    data.result = getResultsCache();
    data.plan = readLS(lsKey("plan"), null);
    data.streak = readLS(lsKey("streak"), null);
    data.activity = getActivityCache();
    data.lastSession = getLastSessionCache();
    data.pace = getPaceLog();
    return { app: EXPORT_APP, format: EXPORT_FORMAT, exportedAt: new Date().toISOString(), data };
  }

  const isObj = (v) => !!v && typeof v === "object" && !Array.isArray(v);
  const PLAIN_CODE = /^[A-Za-z0-9_-]+$/; // exam codes from a file become part of a storage key
  const examCodesIn = (m) => (isObj(m) ? Object.keys(m).filter((c) => PLAIN_CODE.test(c) && isObj(m[c])) : []);

  // Merges an exportData() document into this device's progress and returns
  // how many entries it took from the file. Throws if it isn't one.
  function importData(file) {
    if (!isObj(file) || file.app !== EXPORT_APP || !isObj(file.data)) {
      throw new Error("That file isn't a Fellow progress download.");
    }
    if (!(file.format <= EXPORT_FORMAT)) {
      throw new Error("That file was saved by a newer version of this site. Reload the page and try again.");
    }
    const d = file.data;
    let adopted = 0;

    // Module status has no timestamp, so the further-along status wins.
    examCodesIn(d.status).forEach((code) => {
      const cache = getModuleStatusCache(code);
      Object.entries(d.status[code]).forEach(([moduleId, value]) => {
        const rank = STATUS_ORDER.indexOf(value);
        if (rank < 0 || (moduleId in cache && rank <= STATUS_ORDER.indexOf(cache[moduleId]))) return;
        cache[moduleId] = value;
        enqueue({ type: "status", examCode: code, moduleId, value });
        adopted++;
      });
      writeLS(lsKey("status", code), cache);
    });

    // A mastery mark is set by the same review that updates the card's
    // schedule, so it's as new as that schedule: take the file's mark where
    // this device has none, or where the file reviewed the card later. This
    // runs before the schedules themselves merge, below.
    examCodesIn(d.mastery).forEach((code) => {
      const cache = getMasteryCache(code);
      const localSrs = getSrsCache(code);
      const fileSrs = isObj(d.srs) && isObj(d.srs[code]) ? d.srs[code] : {};
      Object.entries(d.mastery[code]).forEach(([moduleId, cards]) => {
        if (!isObj(cards)) return;
        Object.entries(cards).forEach(([idx, value]) => {
          if (typeof value !== "boolean" || !/^\d+$/.test(idx)) return;
          const local = cache[moduleId] ? cache[moduleId][idx] : undefined;
          if (local === value) return;
          if (local !== undefined) {
            const theirs = isObj(fileSrs[moduleId]) ? fileSrs[moduleId][idx] : null;
            const ours = localSrs[moduleId] ? localSrs[moduleId][idx] : null;
            if (!isObj(theirs) || (ours && !isStrictlyNewer(theirs, ours))) return;
          }
          if (!cache[moduleId]) cache[moduleId] = {};
          cache[moduleId][idx] = value;
          enqueue({ type: "mastery", examCode: code, moduleId, cardIdx: Number(idx), value });
          adopted++;
        });
      });
      writeLS(lsKey("mastery", code), cache);
    });

    // Schedules and drills: the later review wins, as on load and upload.
    examCodesIn(d.srs).forEach((code) => {
      const cache = getSrsCache(code);
      Object.entries(d.srs[code]).forEach(([moduleId, cards]) => {
        if (!isObj(cards)) return;
        Object.entries(cards).forEach(([idx, value]) => {
          if (!isObj(value) || !/^\d+$/.test(idx)) return;
          const local = cache[moduleId] ? cache[moduleId][idx] : null;
          if (local && !isStrictlyNewer(value, local)) return;
          if (!cache[moduleId]) cache[moduleId] = {};
          cache[moduleId][idx] = value;
          enqueue({ type: "srs", examCode: code, moduleId, cardIdx: Number(idx), value });
          adopted++;
        });
      });
      writeLS(lsKey("srs", code), cache);
    });

    examCodesIn(d.drill).forEach((code) => {
      const cache = getDrillCache(code);
      Object.entries(d.drill[code]).forEach(([itemId, value]) => {
        if (!isObj(value) || (cache[itemId] && !isStrictlyNewer(value, cache[itemId]))) return;
        cache[itemId] = value;
        enqueue({ type: "drill", examCode: code, itemId, value });
        adopted++;
      });
      writeLS(lsKey("drill", code), cache);
    });

    // Self-marks: attempts the device doesn't have are added, and a
    // re-marked one is taken if the file's copy was marked later. Mock
    // results never change, so only new ones are added. Both as on load.
    const isAttempt = (a) => isObj(a) && Number.isFinite(a.at) && Array.isArray(a.parts) && Number.isFinite(a.score) && a.max > 0;
    const scoreCodes = isObj(d.score) ? Object.keys(d.score).filter((c) => PLAIN_CODE.test(c) && isObj(d.score[c])) : [];
    scoreCodes.forEach((code) => {
      const cache = getScoreCache(code);
      Object.entries(d.score[code]).forEach(([questionId, attempts]) => {
        if (!Array.isArray(attempts)) return;
        attempts.filter(isAttempt).forEach((value) => {
          const list = cache[questionId] || (cache[questionId] = []);
          const i = list.findIndex((a) => a.at === value.at);
          if (i >= 0 && (value.updatedAt || 0) <= (list[i].updatedAt || 0)) return;
          if (i >= 0) list[i] = value;
          else list.push(value);
          list.sort((a, b) => a.at - b.at);
          enqueue({ type: "score", examCode: code, questionId, value });
          adopted++;
        });
      });
      writeLS(lsKey("score", code), cache);
    });

    const isMock = (m) => isObj(m) && Number.isFinite(m.at) && Array.isArray(m.questionIds) && Number.isFinite(m.score) && m.max > 0;
    const mockCodes = isObj(d.mock) ? Object.keys(d.mock).filter((c) => PLAIN_CODE.test(c) && Array.isArray(d.mock[c])) : [];
    mockCodes.forEach((code) => {
      const cache = getMockCache(code);
      d.mock[code].filter(isMock).forEach((value) => {
        if (cache.some((m) => m.at === value.at)) return;
        cache.push(value);
        enqueue({ type: "mock", examCode: code, value });
        adopted++;
      });
      cache.sort((a, b) => a.at - b.at);
      writeLS(lsKey("mock", code), cache);
    });

    // Results and the plan: last write wins on updatedAt.
    if (isObj(d.result)) {
      const cache = getResultsCache();
      Object.entries(d.result).forEach(([code, value]) => {
        if (!PLAIN_CODE.test(code) || !isObj(value)) return;
        if (cache[code] && (value.updatedAt || 0) <= (cache[code].updatedAt || 0)) return;
        cache[code] = value;
        enqueue({ type: "result", examCode: code, value });
        adopted++;
      });
      writeLS(lsKey("result"), cache);
    }

    if (isObj(d.plan) && isObj(d.plan.sittings) && (d.plan.updatedAt || 0) > (getExamPlanCache().updatedAt || 0)) {
      writeLS(lsKey("plan"), d.plan);
      enqueue({ type: "plan", value: d.plan });
      adopted++;
    }

    // Streak: the later study day, or on the same day the longer run.
    if (isObj(d.streak) && typeof d.streak.lastDate === "string") {
      const local = getStreakCache();
      const s = d.streak;
      if (!local.lastDate || s.lastDate > local.lastDate || (s.lastDate === local.lastDate && s.count > local.count)) {
        const next = { lastDate: s.lastDate, count: s.count };
        writeLS(lsKey("streak"), next);
        enqueue({ type: "streak", value: next });
        adopted++;
      }
    }

    // Daily activity: the higher count for each day, the way loadActivity()
    // keeps local counts as a floor under the server's.
    if (isObj(d.activity)) {
      const activity = getActivityCache();
      Object.entries(d.activity).forEach(([day, n]) => {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(day) || typeof n !== "number" || n <= (activity[day] || 0)) return;
        activity[day] = n;
        adopted++;
      });
      writeLS(lsKey("activity"), activity);
    }

    // The last finished session: whichever ended later. Uploading it is
    // harmless if the server already has it (session_log is keyed on start).
    if (isObj(d.lastSession) && typeof d.lastSession.endedAt === "number") {
      const local = getLastSessionCache();
      if (!local || d.lastSession.endedAt > local.endedAt) {
        writeLS(lsKey("lastSession"), d.lastSession);
        enqueue({ type: "session", value: d.lastSession });
        adopted++;
      }
    }

    // Pace log: every entry from both, without duplicates, oldest first.
    if (Array.isArray(d.pace)) {
      const log = getPaceLog();
      const seen = new Set(log.map((e) => JSON.stringify(e)));
      d.pace.forEach((e) => {
        if (!isObj(e) || seen.has(JSON.stringify(e))) return;
        seen.add(JSON.stringify(e));
        log.push(e);
        adopted++;
      });
      log.sort((a, b) => String(a.date || "").localeCompare(String(b.date || "")));
      writeLS(lsKey("pace"), log.slice(-300));
    }

    return adopted;
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
        try {
          // Newer-wins on upload too: a card another device has since
          // reviewed more recently keeps the server's schedule, which this
          // device adopts, rather than being rolled back by a stale queue.
          const codes = [...new Set([...latest.values()].map((op) => op.examCode))];
          const { data, error } = await client
            .from(SRS_TABLE)
            .select("exam_code, module_id, card_idx, reps, interval_days, ease, due_date, lapses, reviews, last_reviewed")
            .in("exam_code", codes);
          if (error) throw error;
          (data || []).forEach((row) => {
            const key = `${row.exam_code}|${row.module_id}|${row.card_idx}`;
            const op = latest.get(key);
            const remote = {
              reps: row.reps,
              interval: row.interval_days,
              ease: Number(row.ease),
              due: row.due_date,
              lapses: row.lapses,
              reviews: row.reviews,
              last: row.last_reviewed,
            };
            if (!op || !isStrictlyNewer(remote, op.value)) return;
            latest.delete(key);
            const cache = getSrsCache(row.exam_code);
            const local = cache[row.module_id] && cache[row.module_id][row.card_idx];
            if (!local || isStrictlyNewer(remote, local)) {
              if (!cache[row.module_id]) cache[row.module_id] = {};
              cache[row.module_id][row.card_idx] = remote;
              writeLS(lsKey("srs", row.exam_code), cache);
            }
          });
        } catch {
          // Couldn't read the server's copies (offline, table missing): the
          // upsert below fails the same way and everything stays queued.
        }
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
          if (rows.length) {
            const { error } = await client.from(SRS_TABLE).upsert(rows, { onConflict: "user_id,exam_code,module_id,card_idx" });
            if (error) {
              srsTableMissing = looksLikeMissingTable(error, SRS_TABLE);
              throw error;
            }
            srsTableMissing = false;
          }
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
        try {
          // Same newer-wins check as flashcard schedules above.
          const codes = [...new Set([...latest.values()].map((op) => op.examCode))];
          const { data, error } = await client
            .from(DRILL_TABLE)
            .select("exam_code, item_id, reps, interval_days, ease, due_date, lapses, reviews, last_reviewed, attempts, correct")
            .in("exam_code", codes);
          if (error) throw error;
          (data || []).forEach((row) => {
            const key = `${row.exam_code}|${row.item_id}`;
            const op = latest.get(key);
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
            if (!op || !isStrictlyNewer(remote, op.value)) return;
            latest.delete(key);
            const cache = getDrillCache(row.exam_code);
            if (!cache[row.item_id] || isStrictlyNewer(remote, cache[row.item_id])) {
              cache[row.item_id] = remote;
              writeLS(lsKey("drill", row.exam_code), cache);
            }
          });
        } catch {
          // As above: the upsert fails the same way and nothing is lost.
        }
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
          if (rows.length) {
            const { error } = await client.from(DRILL_TABLE).upsert(rows, { onConflict: "user_id,exam_code,item_id" });
            if (error) {
              drillTableMissing = looksLikeMissingTable(error, DRILL_TABLE);
              throw error;
            }
            drillTableMissing = false;
          }
        } catch {
          remaining.push(...latest.values());
        }
      }

      // Notes and flags upload in bulk too, keeping only the latest value per
      // card, and skip (and adopt) any card another device has changed since.
      const noteOps = list.filter((op) => op.type === "note" && (!op.userId || op.userId === currentUser.id));
      if (noteOps.length) {
        const latest = new Map();
        noteOps.forEach((op) => latest.set(`${op.examCode}|${op.moduleId}|${op.cardIdx}`, op));
        const adopted = new Set(); // subjects whose cache took a newer server copy
        try {
          const codes = [...new Set([...latest.values()].map((op) => op.examCode))];
          const { data, error } = await client
            .from(NOTE_TABLE)
            .select("exam_code, module_id, card_idx, note, flagged, updated_at")
            .in("exam_code", codes);
          if (error) throw error;
          (data || []).forEach((row) => {
            const key = `${row.exam_code}|${row.module_id}|${row.card_idx}`;
            const op = latest.get(key);
            const remote = noteFromRow(row);
            if (!op || remote.updatedAt < (op.value.updatedAt || 0)) return;
            latest.delete(key);
            const cache = getNotesCache(row.exam_code);
            const local = cache[row.module_id] && cache[row.module_id][row.card_idx];
            if (!local || (local.updatedAt || 0) < remote.updatedAt) {
              if (!cache[row.module_id]) cache[row.module_id] = {};
              cache[row.module_id][row.card_idx] = remote;
              writeLS(lsKey("note", row.exam_code), cache);
              adopted.add(row.exam_code);
            }
          });
        } catch {
          // As above: the upsert fails the same way and nothing is lost.
        }
        // The page keeps its own copy of the notes it shows: tell it, so it
        // doesn't keep showing (and then re-save) the stale value.
        if (adopted.size) notifyListeners(noteListeners, [...adopted]);
        const rows = [...latest.values()].map((op) => ({
          user_id: currentUser.id,
          exam_code: op.examCode,
          module_id: op.moduleId,
          card_idx: op.cardIdx,
          note: op.value.note || "",
          flagged: !!op.value.flagged,
          updated_at: new Date(op.value.updatedAt || Date.now()).toISOString(),
        }));
        try {
          if (rows.length) {
            const { error } = await client.from(NOTE_TABLE).upsert(rows, { onConflict: "user_id,exam_code,module_id,card_idx" });
            if (error) {
              noteTableMissing = looksLikeMissingTable(error, NOTE_TABLE);
              throw error;
            }
            noteTableMissing = false;
          }
        } catch {
          // Offline, or 006_card_notes.sql hasn't been run yet — keep only
          // the latest op per card queued so it uploads once it can.
          remaining.push(...latest.values());
        }
      }

      // Self-marks and mock results upload in bulk too: marking a mock paper
      // queues one attempt per question at once. Only the latest copy of each
      // attempt is sent (it may have been re-marked while queued).
      const scoreOps = list.filter((op) => op.type === "score" && (!op.userId || op.userId === currentUser.id));
      if (scoreOps.length) {
        const latest = new Map();
        scoreOps.forEach((op) => latest.set(`${op.examCode}|${op.questionId}|${op.value.at}`, op));
        const now = new Date().toISOString();
        try {
          // Newer-wins on upload too: an attempt re-marked since on another
          // device keeps the server's copy, which this device adopts.
          const codes = [...new Set([...latest.values()].map((op) => op.examCode))];
          const { data, error } = await client
            .from(SCORE_TABLE)
            .select("exam_code, question_id, attempted_at, part_marks, score, max_marks, source, updated_at")
            .in("exam_code", codes);
          if (error) throw error;
          (data || []).forEach((row) => {
            const remote = scoreFromRow(row);
            const key = `${row.exam_code}|${row.question_id}|${remote.at}`;
            const op = latest.get(key);
            if (!op || remote.updatedAt <= (op.value.updatedAt || 0)) return;
            latest.delete(key);
            const cache = getScoreCache(row.exam_code);
            const list = cache[row.question_id] || [];
            const i = list.findIndex((a) => a.at === remote.at);
            if (i >= 0 && (list[i].updatedAt || 0) < remote.updatedAt) {
              list[i] = remote;
              writeLS(lsKey("score", row.exam_code), cache);
            }
          });
        } catch {
          // Offline or table missing: the upsert below fails the same way.
        }
        const rows = [...latest.values()].map((op) => ({
          user_id: currentUser.id,
          exam_code: op.examCode,
          question_id: op.questionId,
          attempted_at: new Date(op.value.at).toISOString(),
          part_marks: op.value.parts,
          score: op.value.score,
          max_marks: op.value.max,
          source: op.value.src,
          updated_at: op.value.updatedAt ? new Date(op.value.updatedAt).toISOString() : now,
        }));
        try {
          const { error } = await client.from(SCORE_TABLE).upsert(rows, { onConflict: "user_id,exam_code,question_id,attempted_at" });
          if (error) {
            scoreTableMissing = looksLikeMissingTable(error, SCORE_TABLE);
            throw error;
          }
          scoreTableMissing = false;
        } catch {
          // Offline, or 007_question_scores.sql hasn't been run yet — keep
          // the latest copy of each attempt queued.
          remaining.push(...latest.values());
        }
      }

      const mockOps = list.filter((op) => op.type === "mock" && (!op.userId || op.userId === currentUser.id));
      if (mockOps.length) {
        const latest = new Map();
        mockOps.forEach((op) => latest.set(`${op.examCode}|${op.value.at}`, op));
        const now = new Date().toISOString();
        const rows = [...latest.values()].map((op) => ({
          user_id: currentUser.id,
          exam_code: op.examCode,
          taken_at: new Date(op.value.at).toISOString(),
          question_ids: op.value.questionIds,
          score: op.value.score,
          max_marks: op.value.max,
          pct: Math.round(op.value.pct * 100) / 100,
          pass_mark: op.value.passMark,
          pass_sitting: op.value.passSitting,
          used_ms: Math.round(op.value.usedMs || 0),
          updated_at: now,
        }));
        try {
          const { error } = await client.from(MOCK_TABLE).upsert(rows, { onConflict: "user_id,exam_code,taken_at" });
          if (error) {
            scoreTableMissing = looksLikeMissingTable(error, MOCK_TABLE);
            throw error;
          }
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
        if (["srs", "drill", "note", "plan", "score", "mock"].includes(op.type)) continue; // handled in bulk above
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
      writePending([...remaining, ...addedMeanwhile].filter((op) => !deletedUsers.has(op.userId)));
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
    requestPasswordReset,
    updatePassword,
    isPasswordRecovery,
    onPasswordRecovery,
    deleteAccount,
    exportData,
    importData,
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
    loadNotes,
    setCardNote,
    getNotesCache,
    isNoteTableMissing,
    loadExamPlan,
    setExamPlan,
    getExamPlanCache,
    isPlanTableMissing,
    onPlanChange,
    onResultsChange,
    onNotesChange,
    loadResults,
    setResult,
    getResultsCache,
    isResultTableMissing,
    loadScores,
    loadMocks,
    getScoreCache,
    getMockCache,
    saveScore,
    addMockResult,
    getActiveMock,
    setActiveMock,
    isScoreTableMissing,
    isWelcomed,
    setWelcomed,
    loadStreak,
    bumpStreak,
    getStreakCache,
    currentStreak,
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
