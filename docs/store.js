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

  let client = null;
  let currentUser = null;
  let readyPromise = null;
  let flushing = false;
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

  // Re-enqueues every cached module-status / mastery / streak entry for the
  // current user as a pending write (enqueue() itself kicks off the upload).
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

  /* ---------- sync queue ---------- */

  async function flushPending() {
    if (!client || !currentUser || flushing) return;
    let list = readPending();
    if (!list.length) return;
    flushing = true;
    const remaining = [];
    try {
      for (const op of list) {
        if (op.userId && op.userId !== currentUser.id) {
          remaining.push(op); // belongs to a different (now signed-out) account — leave it queued
          continue;
        }
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
          }
        } catch {
          remaining.push(op); // network/transient error — keep for retry
        }
      }
    } finally {
      writePending(remaining);
      flushing = false;
      notifySync();
    }
  }

  function pendingCount() {
    if (!currentUser) return readPending().length;
    return readPending().filter((op) => !op.userId || op.userId === currentUser.id).length;
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
    loadStreak,
    bumpStreak,
    getStreakCache,
    flushPending,
    pendingCount,
  };
})();
