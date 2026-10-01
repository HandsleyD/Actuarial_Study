#!/usr/bin/env node
// Sync tests for study progress in docs/store.js (module status, flashcard
// mastery, review schedules, drills, streak, daily activity), run against a
// fake Supabase client and an in-memory localStorage.
// Run: node scripts/test-progress-sync.mjs   (also runs in CI — validate-content.yml)
//
// Each test covers a way a change made on one device could be undone: by a
// load that replaces a change still queued for upload, by a stale queued
// change overwriting a newer one from another device, or by two parts of
// the site disagreeing about which day it is. Then the progress file
// (export, and import's newer-wins merge) and account deletion.

process.env.TZ = "Europe/London"; // BST in the date tests: local and UTC dates differ after 23:00 UTC

import { readFileSync } from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";

const mem = {};
const tables = {}; // table -> array of rows
let offline = false; // upserts fail while true, so changes stay queued
let fetchDelay = 0;
let fakeNow = null; // ms since epoch, or null for the real clock
const invoked = []; // Edge Function names called
let deleteReply = { data: { deleted: true }, error: null }; // what delete-account answers
const signOuts = [];

const rowsOf = (t) => (tables[t] = tables[t] || []);

function query(table) {
  const filters = [];
  const run = async () => {
    const snap = rowsOf(table).filter((r) => filters.every((f) => f(r))).map((r) => ({ ...r }));
    await new Promise((r) => setTimeout(r, fetchDelay));
    return { data: snap, error: null };
  };
  const q = {
    eq: (col, v) => (filters.push((r) => r[col] === v), q),
    in: (col, vs) => (filters.push((r) => vs.includes(r[col])), q),
    gte: (col, v) => (filters.push((r) => r[col] >= v), q),
    maybeSingle: async () => {
      const { data } = await run();
      return { data: data[0] || null, error: null };
    },
    then: (res, rej) => run().then(res, rej),
  };
  return q;
}

function upsert(table, rows, opts) {
  if (offline) return Promise.resolve({ error: { message: "offline" } });
  const keys = ((opts && opts.onConflict) || "user_id").split(",");
  [].concat(rows).forEach((row) => {
    const list = rowsOf(table);
    const i = list.findIndex((r) => keys.every((k) => r[k] === row[k]));
    if (i >= 0) list[i] = { ...list[i], ...row };
    else list.push({ ...row });
  });
  return Promise.resolve({ error: null });
}

class FakeDate extends Date {
  constructor(...args) {
    if (args.length === 0 && fakeNow !== null) super(fakeNow);
    else super(...args);
  }
  static now() {
    return fakeNow !== null ? fakeNow : Date.now();
  }
}

const ctx = {
  console,
  Date: FakeDate,
  JSON,
  Promise,
  setTimeout,
  window: { addEventListener() {} },
  SUPABASE_URL: "https://example.invalid",
  SUPABASE_PUBLISHABLE_KEY: "test",
  localStorage: {
    getItem: (k) => (k in mem ? mem[k] : null),
    setItem: (k, v) => (mem[k] = String(v)),
    get length() {
      return Object.keys(mem).length;
    },
    key: (i) => Object.keys(mem)[i],
    removeItem: (k) => delete mem[k],
  },
  supabase: {
    createClient: () => ({
      auth: {
        getSession: async () => ({ data: { session: { user: { id: "u1" } } } }),
        onAuthStateChange() {},
        signOut: async (opts) => (signOuts.push(opts), { error: null }),
      },
      from: (table) => ({
        select: () => query(table),
        upsert: (rows, opts) => upsert(table, rows, opts),
      }),
      functions: {
        invoke: async (name) => (invoked.push(name), deleteReply),
      },
    }),
  },
};
vm.createContext(ctx);
vm.runInContext(`${readFileSync(new URL("../docs/store.js", import.meta.url), "utf8")};this.Store = Store;`, ctx);
const Store = ctx.Store;
const settle = () => new Promise((r) => setTimeout(r, 80));
const queued = (type) => JSON.parse(mem["actuarialStudy:pending"] || "[]").filter((op) => op.type === type);

let passed = 0;
async function test(name, fn) {
  try {
    await fn();
    passed++;
  } catch (e) {
    console.error(`FAIL: ${name}\n  ${e.message}`);
    process.exitCode = 1;
  }
}

await Store.init();
await settle();

await test("a module status still queued for upload survives a load", async () => {
  rowsOf("module_status").push({ user_id: "u1", exam_code: "CS1", module_id: "m01", status: "Not started" });
  offline = true;
  Store.setModuleStatus("CS1", "m01", "Done");
  await settle();
  assert.equal(queued("status").length, 1, "change should still be queued while offline");
  const loaded = await Store.loadModuleStatus("CS1");
  assert.equal(loaded.m01, "Done", "load replaced a queued change with the server's older value");
  assert.equal(Store.getModuleStatusCache("CS1").m01, "Done");
  offline = false;
  await Store.flushPending();
  assert.equal(rowsOf("module_status")[0].status, "Done");
  assert.equal((await Store.loadModuleStatus("CS1")).m01, "Done");
});

await test("a module status changed while a load is in flight is kept", async () => {
  rowsOf("module_status").push({ user_id: "u1", exam_code: "CS1", module_id: "m02", status: "Not started" });
  fetchDelay = 30;
  const loading = Store.loadModuleStatus("CS1");
  Store.setModuleStatus("CS1", "m02", "In progress");
  await settle(); // the upload finishes before the load returns
  const loaded = await loading;
  fetchDelay = 0;
  assert.equal(loaded.m02, "In progress");
  assert.equal(Store.getModuleStatusCache("CS1").m02, "In progress");
});

await test("server module statuses still win when nothing local is pending", async () => {
  rowsOf("module_status").push({ user_id: "u1", exam_code: "CS1", module_id: "m03", status: "Done" });
  assert.equal((await Store.loadModuleStatus("CS1")).m03, "Done");
});

await test("a mastery mark still queued for upload survives a load", async () => {
  rowsOf("flashcard_mastery").push({ user_id: "u1", exam_code: "CS1", module_id: "m01", card_idx: 0, mastered: false });
  offline = true;
  Store.setMastery("CS1", "m01", 0, true);
  const loaded = await Store.loadMastery("CS1");
  assert.equal(loaded.m01[0], true, "load replaced a queued mastery mark");
  offline = false;
  await Store.flushPending();
  assert.equal(rowsOf("flashcard_mastery")[0].mastered, true);
});

const sched = (last, reviews) => ({ reps: reviews, interval: 3, ease: 2.5, due: "2026-10-01", lapses: 0, reviews, last });
const srsRow = (s) => ({
  user_id: "u1",
  exam_code: "CM1",
  module_id: "m01",
  card_idx: 4,
  reps: s.reps,
  interval_days: s.interval,
  ease: s.ease,
  due_date: s.due,
  lapses: s.lapses,
  reviews: s.reviews,
  last_reviewed: s.last,
});

await test("a stale queued review schedule doesn't overwrite a newer one from another device", async () => {
  offline = true;
  Store.setSrs("CM1", "m01", 4, sched("2026-09-20", 2)); // reviewed on this device, not yet uploaded
  await settle(); // let the offline upload attempt finish
  rowsOf("flashcard_srs").push(srsRow(sched("2026-09-25", 3))); // another device reviewed it later
  offline = false;
  await Store.flushPending();
  const row = rowsOf("flashcard_srs")[0];
  assert.equal(row.last_reviewed, "2026-09-25", "stale schedule overwrote the newer server row");
  assert.equal(row.reviews, 3);
  assert.equal(Store.getSrsCache("CM1").m01[4].last, "2026-09-25", "newer server schedule not adopted locally");
  assert.equal(queued("srs").length, 0, "skipped op left queued");
});

await test("a newer queued review schedule still uploads", async () => {
  Store.setSrs("CM1", "m01", 4, sched("2026-09-27", 4));
  await settle();
  assert.equal(rowsOf("flashcard_srs")[0].last_reviewed, "2026-09-27");
  assert.equal(rowsOf("flashcard_srs")[0].reviews, 4);
});

await test("a stale queued drill result doesn't overwrite a newer one from another device", async () => {
  offline = true;
  Store.setDrill("CM1", "cm1-m01-d01", { ...sched("2026-09-20", 1), attempts: 1, correct: 0 });
  await settle(); // let the offline upload attempt finish
  rowsOf("drill_progress").push({
    user_id: "u1",
    exam_code: "CM1",
    item_id: "cm1-m01-d01",
    reps: 2,
    interval_days: 6,
    ease: 2.6,
    due_date: "2026-10-03",
    lapses: 0,
    reviews: 2,
    last_reviewed: "2026-09-26",
    attempts: 2,
    correct: 2,
  });
  offline = false;
  await Store.flushPending();
  const row = rowsOf("drill_progress")[0];
  assert.equal(row.last_reviewed, "2026-09-26");
  assert.equal(row.correct, 2, "stale drill result overwrote the newer server row");
  assert.equal(Store.getDrillCache("CM1")["cm1-m01-d01"].correct, 2);
});

await test("the streak uses the local date, not UTC", async () => {
  mem["actuarialStudy:streak:u1"] = JSON.stringify({ lastDate: "2026-09-27", count: 4 });
  fakeNow = Date.parse("2026-09-27T23:30:00Z"); // 00:30 on 28 September in London (BST)
  const s = Store.bumpStreak();
  assert.equal(s.lastDate, "2026-09-28", "a review after midnight local time counted towards the previous day");
  assert.equal(s.count, 5, "consecutive local days should extend the streak");
  fakeNow = null;
  await settle();
});

await test("loading the streak keeps a newer local run", async () => {
  tables.study_streak = [{ user_id: "u1", last_date: "2026-09-20", count: 2 }];
  const s = await Store.loadStreak();
  assert.equal(s.lastDate, "2026-09-28");
  assert.equal(s.count, 5);
  tables.study_streak = [{ user_id: "u1", last_date: "2026-09-29", count: 6 }];
  assert.equal((await Store.loadStreak()).lastDate, "2026-09-29", "a newer server streak should still win");
});

await test("daily activity adds this device's unsent reviews to every device's uploaded ones", async () => {
  fakeNow = Date.parse("2026-09-30T09:00:00Z");
  const day = "2026-09-30";
  // This device: 5 reviews in a session it has already uploaded, then 5 in
  // one still open. Another device: 20 reviews, uploaded.
  tables.session_log = [
    { user_id: "u1", started_at: "2026-09-30T07:00:00.000Z", cards_reviewed: 5 },
    { user_id: "u1", started_at: "2026-09-30T08:00:00.000Z", cards_reviewed: 20 },
  ];
  mem["actuarialStudy:activity:u1"] = JSON.stringify({ [day]: 5 });
  for (let i = 0; i < 5; i++) Store.recordCardReview(false);
  const activity = await Store.loadActivity();
  assert.equal(activity[day], 30, `expected 5 + 20 uploaded + 5 unsent, got ${activity[day]}`);
  fakeNow = null;
});

/* ---------- export / import ---------- */

// Objects made inside the vm context have that context's prototypes, which
// deepEqual would count as a difference: compare them as plain JSON.
const plain = (v) => JSON.parse(JSON.stringify(v));
const userKeys = (uid) => Object.keys(mem).filter((k) => k.endsWith(`:${uid}`) || k.includes(`:${uid}:`));

await test("export then import onto an empty device restores everything", async () => {
  Store.setExamPlan({ "2027-04": ["CM1", "CS1"] }, { sp: ["SP2"], sa: [] });
  Store.setResult("CB1", "passed", "2026-04");
  Store.addPaceEntry({ code: "CM1", qid: "q1", marks: 10, usedMs: 900000, allowedMs: 1080000, rate: 1.8, date: "2026-09-29" });
  await settle();
  const file = plain(Store.exportData());
  assert.equal(file.app, "fellow");
  assert.equal(file.format, 1);
  for (const kind of ["status", "mastery", "srs", "drill", "result", "plan", "streak", "activity", "lastSession", "pace"]) {
    assert.ok(file.data[kind] !== null && file.data[kind] !== undefined, `export is missing ${kind}`);
  }
  assert.equal(file.data.status.CS1.m01, "Done");
  assert.equal(file.data.srs.CM1.m01[4].last, "2026-09-27");

  userKeys("u1").forEach((k) => delete mem[k]); // a new device, same account
  assert.equal(Store.getModuleStatusCache("CS1").m01, undefined);
  const adopted = Store.importData(file);
  assert.ok(adopted > 0);
  assert.deepEqual(plain(Store.exportData()).data, file.data, "a round trip changed the data");
  assert.equal(Store.importData(file), 0, "importing the same file twice should change nothing");
});

await test("import keeps whichever copy of each entry is newer", async () => {
  const before = plain(Store.exportData()).data;
  Store.setMastery("CM1", "m01", 4, true); // its schedule says 2026-09-27
  Store.setMastery("CM1", "m01", 6, false);
  Store.setSrs("CM1", "m01", 6, sched("2026-09-01", 1));
  await settle();
  const file = {
    app: "fellow",
    format: 1,
    data: {
      status: { CS1: { m01: "In progress", m02: "Done", m04: "In progress" } },
      mastery: { CM1: { m01: { 4: false, 6: true } } },
      srs: { CM1: { m01: { 4: sched("2026-09-21", 1), 5: sched("2026-09-28", 2), 6: sched("2026-09-29", 3) } } },
      drill: {
        CM1: {
          "cm1-m01-d01": { ...sched("2026-09-21", 1), attempts: 1, correct: 0 },
          "cm1-m01-d02": { ...sched("2026-09-28", 1), attempts: 1, correct: 1 },
        },
      },
      result: {
        CB1: { status: "none", sitting: null, updatedAt: before.result.CB1.updatedAt - 1 },
        CM1: { status: "passed", sitting: "2026-09", updatedAt: Date.now() + 1000 },
      },
      plan: { sittings: { "2028-04": ["SP2"] }, specialists: { sp: [], sa: [] }, updatedAt: 1 },
      streak: { lastDate: "2026-09-30", count: 7 },
      activity: { "2026-09-30": 1, "2026-09-15": 12 },
      lastSession: { startedAt: 1, endedAt: 2, cardsReviewed: 3, cardsMastered: 1 },
      pace: [before.pace[0], { code: "CS1", qid: "q9", marks: 8, usedMs: 1, allowedMs: 2, rate: 1.8, date: "2026-09-10" }],
      "../../evil": {},
    },
  };
  const adopted = Store.importData(file);

  const status = Store.getModuleStatusCache("CS1");
  assert.equal(status.m01, "Done", "an older status replaced one further along");
  assert.equal(status.m02, "Done", "a further-along status from the file wasn't taken");
  assert.equal(status.m04, "In progress", "a status missing locally wasn't taken");

  const srs = Store.getSrsCache("CM1").m01;
  assert.equal(srs[4].last, "2026-09-27", "an older schedule from the file replaced a newer local one");
  assert.equal(srs[5].last, "2026-09-28");
  assert.equal(srs[6].last, "2026-09-29");
  const mastery = Store.getMasteryCache("CM1").m01;
  assert.equal(mastery[4], true, "a mark from an older review replaced a newer one");
  assert.equal(mastery[6], true, "a mark from a newer review wasn't taken");

  const drills = Store.getDrillCache("CM1");
  assert.equal(drills["cm1-m01-d01"].correct, 2, "an older drill result replaced a newer one");
  assert.equal(drills["cm1-m01-d02"].correct, 1);

  const results = Store.getResultsCache();
  assert.equal(results.CB1.status, "passed", "an older result replaced a newer one");
  assert.equal(results.CM1.status, "passed");
  assert.deepEqual(plain(Store.getExamPlanCache().sittings), { "2027-04": ["CM1", "CS1"] }, "an older plan replaced a newer one");
  assert.equal(Store.getStreakCache().count, 7);
  assert.equal(Store.getActivityCache()["2026-09-30"], before.activity["2026-09-30"], "activity should keep the higher count");
  assert.equal(Store.getActivityCache()["2026-09-15"], 12);
  assert.equal(Store.getLastSessionCache().endedAt, before.lastSession.endedAt, "an older last session replaced a newer one");
  assert.equal(Store.getPaceLog().length, 2, "pace entries should be merged without duplicates");
  assert.equal(Store.getPaceLog()[0].qid, "q9", "pace log should stay in date order");
  assert.ok(!Object.keys(mem).some((k) => k.includes("evil")));
  // status m02 + m04, mastery 6, srs 5 + 6, drill d02, result CM1, streak, activity 09-15, pace q9
  assert.equal(adopted, 10);

  await settle(); // what was adopted uploads like any other change
  assert.ok(rowsOf("flashcard_srs").some((r) => r.card_idx === 5 && r.last_reviewed === "2026-09-28"));
  assert.ok(rowsOf("drill_progress").some((r) => r.item_id === "cm1-m01-d02"));
  assert.ok(rowsOf("module_status").some((r) => r.module_id === "m04" && r.status === "In progress"));
});

await test("import rejects a file that isn't a progress download", async () => {
  assert.throws(() => Store.importData({ hello: "world" }), /isn't a Fellow progress download/);
  assert.throws(() => Store.importData(null), /isn't a Fellow progress download/);
  assert.throws(() => Store.importData({ app: "fellow", format: 99, data: {} }), /newer version/);
});

/* ---------- account deletion ---------- */

await test("a failed account deletion keeps everything", async () => {
  deleteReply = { data: { error: "Couldn't delete all of your data just now." }, error: null };
  const keys = userKeys("u1").length;
  await assert.rejects(Store.deleteAccount(), /Couldn't delete all of your data/);
  assert.equal(userKeys("u1").length, keys);
  assert.equal(signOuts.length, 0);
  deleteReply = { data: { deleted: true }, error: null };
});

await test("deleting the account clears that user's local data and signs out", async () => {
  mem["actuarialStudy:status:anon:CS1"] = JSON.stringify({ m01: "Done" }); // made before signing in
  mem["actuarialStudy:status:u2:CS1"] = JSON.stringify({ m01: "Done" }); // another account on this device
  offline = true;
  Store.setModuleStatus("CS1", "m05", "Done"); // still queued when the account goes
  await settle();
  assert.ok(queued("status").some((op) => op.userId === "u1"));
  await Store.deleteAccount();
  offline = false;
  assert.deepEqual(invoked.slice(-1), ["delete-account"]);
  assert.equal(userKeys("u1").length, 0, `left behind: ${userKeys("u1").join(", ")}`);
  assert.ok(mem["actuarialStudy:status:anon:CS1"], "signed-out progress on this device should stay");
  assert.ok(mem["actuarialStudy:status:u2:CS1"], "another account's progress should stay");
  assert.ok(!JSON.parse(mem["actuarialStudy:pending"] || "[]").some((op) => op.userId === "u1"), "the deleted user's queue should go");
  assert.equal(signOuts.length, 1);
  assert.equal(signOuts[0].scope, "local");
});

console.log(`${passed} progress sync test(s) passed.`);
