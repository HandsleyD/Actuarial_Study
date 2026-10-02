#!/usr/bin/env node
// Sync tests for study progress in docs/store.js (module status, flashcard
// mastery, review schedules, drills, card notes and flags, streak, daily
// activity), run against a
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
const missingTables = new Set(); // tables whose migration "hasn't been run": every request errors

const MISSING = (t) => ({ code: "PGRST205", message: `Could not find the table 'public.${t}' in the schema cache` });
const invoked = []; // Edge Function names called
let deleteReply = { data: { deleted: true }, error: null }; // what delete-account answers
const signOuts = [];


const rowsOf = (t) => (tables[t] = tables[t] || []);

function query(table) {
  const filters = [];
  const run = async () => {
    if (missingTables.has(table)) return { data: null, error: MISSING(table) };
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
  if (missingTables.has(table)) return Promise.resolve({ error: MISSING(table) });
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

await test("a card note and flag upload, and a later edit only changes what it touches", async () => {
  Store.setCardNote("CB2", "m03", 4, { note: "elasticity <1 means inelastic" });
  await settle();
  Store.setCardNote("CB2", "m03", 4, { flagged: true });
  await settle();
  const row = rowsOf("card_note").find((r) => r.exam_code === "CB2" && r.module_id === "m03" && r.card_idx === 4);
  assert.ok(row, "note wasn't uploaded");
  assert.equal(row.note, "elasticity <1 means inelastic");
  assert.equal(row.flagged, true);
  assert.equal(queued("note").length, 0);
  assert.deepEqual(
    { note: Store.getNotesCache("CB2").m03[4].note, flagged: Store.getNotesCache("CB2").m03[4].flagged },
    { note: "elasticity <1 means inelastic", flagged: true }
  );
});

await test("a note still queued for upload survives a load; a newer one from another device wins", async () => {
  offline = true;
  Store.setCardNote("CB2", "m01", 0, { note: "local, unsent" });
  await settle();
  const localAt = Store.getNotesCache("CB2").m01[0].updatedAt;
  // Another device: an older edit of the same card, and a newer edit of another.
  rowsOf("card_note").push(
    { user_id: "u1", exam_code: "CB2", module_id: "m01", card_idx: 0, note: "older", flagged: true, updated_at: new Date(localAt - 60000).toISOString() },
    { user_id: "u1", exam_code: "CS1", module_id: "m02", card_idx: 7, note: "from my phone", flagged: true, updated_at: new Date(localAt + 60000).toISOString() }
  );
  const changed = await Store.loadNotes();
  assert.equal(Store.getNotesCache("CB2").m01[0].note, "local, unsent", "load replaced a newer local note");
  assert.equal(Store.getNotesCache("CS1").m02[7].note, "from my phone");
  assert.ok(changed.CS1 && !changed.CB2, "loadNotes should report only the subjects it changed");
  offline = false;
  await Store.flushPending();
  const row = rowsOf("card_note").find((r) => r.exam_code === "CB2" && r.module_id === "m01" && r.card_idx === 0);
  assert.equal(row.note, "local, unsent");
});

await test("a stale queued note doesn't overwrite a newer one from another device", async () => {
  offline = true;
  Store.setCardNote("CM1", "m02", 1, { note: "stale", flagged: true });
  await settle();
  const at = Store.getNotesCache("CM1").m02[1].updatedAt;
  rowsOf("card_note").push({ user_id: "u1", exam_code: "CM1", module_id: "m02", card_idx: 1, note: "", flagged: false, updated_at: new Date(at + 5000).toISOString() });
  const told = [];
  Store.onNotesChange((codes) => told.push(...codes));
  offline = false;
  await Store.flushPending();
  const row = rowsOf("card_note").find((r) => r.exam_code === "CM1" && r.module_id === "m02" && r.card_idx === 1);
  assert.equal(row.flagged, false, "stale queued flag overwrote the newer server row");
  assert.equal(Store.getNotesCache("CM1").m02[1].flagged, false, "the newer server copy wasn't adopted");
  assert.deepEqual([...told], ["CM1"], "the page wasn't told its copy of CM1's notes is stale");
  assert.equal(queued("note").length, 0);
});

await test("notes keep working on the device when card_note doesn't exist yet, and upload once it does", async () => {
  missingTables.add("card_note");
  Store.setCardNote("CS2", "m05", 2, { note: "first draft" });
  Store.setCardNote("CS2", "m05", 2, { note: "second draft", flagged: true });
  await settle();
  assert.equal(Store.isNoteTableMissing(), true);
  assert.equal(Store.getNotesCache("CS2").m05[2].note, "second draft");
  assert.equal(Object.keys(await Store.loadNotes()).length, 0, "a missing table should load nothing, not throw");
  assert.equal(queued("note").length, 1, "only the latest value per card should stay queued");
  missingTables.delete("card_note");
  await Store.flushPending();
  assert.equal(Store.isNoteTableMissing(), false);
  const row = rowsOf("card_note").find((r) => r.exam_code === "CS2");
  assert.equal(row.note, "second draft");
  assert.equal(row.flagged, true);
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

/* ---------- self-marked questions and mock papers ---------- */

const attempt = (at, parts, max, src) => ({ at, parts, score: parts.reduce((a, n) => a + n, 0), max, src: src || "practice" });

await test("self-marks: attempts from two devices are kept side by side, and a queued one survives a load", async () => {
  tables.question_score = [
    { user_id: "u1", exam_code: "CB2", question_id: "cb2-q1", attempted_at: "2026-09-20T09:00:00.000Z", part_marks: [2, 3], score: 5, max_marks: 12, source: "practice" },
  ];
  offline = true;
  Store.saveScore("CB2", "cb2-q1", attempt(Date.parse("2026-09-25T09:00:00Z"), [4, 4.5], 12));
  await settle();
  await Store.loadScores();
  const list = Store.getScoreCache("CB2")["cb2-q1"];
  assert.deepEqual(list.map((a) => a.score), [5, 8.5], "history should hold both attempts, oldest first");
  assert.equal(queued("score").length, 1);
  offline = false;
  await Store.flushPending();
  assert.equal(rowsOf("question_score").length, 2);
  assert.equal(queued("score").length, 0);
});

await test("self-marks: re-marking an attempt replaces it rather than adding another", async () => {
  const at = Date.parse("2026-09-26T09:00:00Z");
  Store.saveScore("CB2", "cb2-q2", attempt(at, [1, 1], 12));
  Store.saveScore("CB2", "cb2-q2", attempt(at, [6, 5], 12));
  await settle();
  assert.equal(Store.getScoreCache("CB2")["cb2-q2"].length, 1);
  const rows = rowsOf("question_score").filter((r) => r.question_id === "cb2-q2");
  assert.equal(rows.length, 1);
  assert.equal(rows[0].score, 11);
});

await test("self-marks and mocks stay queued, and say so, until migration 007 is run", async () => {
  missingTables.add("question_score");
  missingTables.add("mock_result");
  Store.saveScore("CM1", "cm1-q1", attempt(Date.parse("2026-09-27T09:00:00Z"), [3], 11, "mock"));
  Store.addMockResult("CM1", { at: Date.parse("2026-09-27T12:15:00Z"), questionIds: ["cm1-q1"], score: 3, max: 11, pct: 27.27, passMark: 60, passSitting: "2026-04", usedMs: 1000 });
  await settle();
  assert.equal(Store.isScoreTableMissing(), true);
  assert.equal(queued("score").length, 1);
  assert.equal(queued("mock").length, 1);
  await Store.loadScores(); // a failed load leaves the local copies alone
  assert.equal(Store.getScoreCache("CM1")["cm1-q1"].length, 1);
  assert.equal(Store.getMockCache("CM1").length, 1);
  missingTables.delete("question_score");
  missingTables.delete("mock_result");
  await Store.flushPending();
  assert.equal(Store.isScoreTableMissing(), false);
  assert.equal(queued("score").length + queued("mock").length, 0);
  assert.equal(rowsOf("mock_result")[0].pass_mark, 60);
});

await test("self-marks: an attempt re-marked on another device replaces this device's older copy", async () => {
  const at = Date.parse("2026-09-28T09:00:00Z");
  fakeNow = Date.parse("2026-09-28T09:05:00Z");
  Store.saveScore("CS1", "cs1-q1", attempt(at, [2], 12));
  await settle(); // uploaded
  // Device A re-marks the same attempt later.
  const row = rowsOf("question_score").find((r) => r.question_id === "cs1-q1");
  Object.assign(row, { part_marks: [9], score: 9, updated_at: "2026-09-28T10:00:00.000Z" });
  await Store.loadScores();
  const list = Store.getScoreCache("CS1")["cs1-q1"];
  assert.equal(list.length, 1);
  assert.equal(list[0].score, 9, "kept the stale copy of a re-marked attempt");
  fakeNow = null;
});

await test("self-marks: a re-mark still queued here isn't undone by a load, and isn't overwritten by an older server copy", async () => {
  const at = Date.parse("2026-09-28T09:00:00Z");
  offline = true;
  fakeNow = Date.parse("2026-09-28T11:00:00Z");
  Store.saveScore("CS1", "cs1-q1", attempt(at, [11], 12)); // newer than the server's 10:00 copy
  await settle();
  await Store.loadScores();
  assert.equal(Store.getScoreCache("CS1")["cs1-q1"][0].score, 11, "load undid a queued re-mark");
  offline = false;
  await Store.flushPending();
  assert.equal(rowsOf("question_score").find((r) => r.question_id === "cs1-q1").score, 11);
  // A stale queued copy loses to a newer one from another device.
  offline = true;
  fakeNow = Date.parse("2026-09-28T12:00:00Z");
  Store.saveScore("CS1", "cs1-q1", attempt(at, [3], 12));
  await settle();
  Object.assign(rowsOf("question_score").find((r) => r.question_id === "cs1-q1"), { score: 7, part_marks: [7], updated_at: "2026-09-28T13:00:00.000Z" });
  offline = false;
  await Store.flushPending();
  assert.equal(rowsOf("question_score").find((r) => r.question_id === "cs1-q1").score, 7, "stale queued re-mark overwrote a newer one");
  assert.equal(Store.getScoreCache("CS1")["cs1-q1"][0].score, 7, "newer server copy not adopted");
  assert.equal(queued("score").length, 0);
  fakeNow = null;
});

await test("mock results from another device are merged in", async () => {
  rowsOf("mock_result").push({ user_id: "u1", exam_code: "CM1", taken_at: "2026-09-10T12:00:00.000Z", question_ids: ["cm1-q2"], score: 70, max_marks: 100, pct: 70, pass_mark: 60, pass_sitting: "2026-04", used_ms: 5 });
  await Store.loadMocks();
  const mocks = Store.getMockCache("CM1");
  assert.equal(mocks.length, 2);
  assert.equal(mocks[0].pct, 70, "mocks should be oldest first");
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
  for (const kind of ["status", "mastery", "srs", "drill", "note", "score", "mock", "result", "plan", "streak", "activity", "lastSession", "pace"]) {
    assert.ok(file.data[kind] !== null && file.data[kind] !== undefined, `export is missing ${kind}`);
  }
  assert.equal(file.data.status.CS1.m01, "Done");
  assert.equal(file.data.note.CB2.m03[4].note, "elasticity <1 means inelastic", "export should keep flashcard notes");
  assert.equal(file.data.note.CB2.m03[4].flagged, true, "export should keep flags");
  assert.equal(file.data.score.CB2["cb2-q1"].length, 2, "export should keep every self-mark attempt");
  assert.equal(file.data.mock.CM1.length, 2);
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
  Store.setCardNote("CM1", "m03", 0, { note: "local, newer" });
  await settle();
  const noteAt = Store.getNotesCache("CM1").m03[0].updatedAt;
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
      note: {
        CM1: {
          m03: {
            0: { note: "file, older", flagged: true, updatedAt: noteAt - 1000 },
            1: { note: "from the file", flagged: true, updatedAt: noteAt },
            2: { note: 42, flagged: true, updatedAt: noteAt }, // malformed: skipped
          },
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

  const notes = Store.getNotesCache("CM1").m03;
  assert.equal(notes[0].note, "local, newer", "an older note from the file replaced a newer local one");
  assert.equal(notes[1].note, "from the file", "a note missing locally wasn't taken");
  assert.equal(notes[1].flagged, true);
  assert.equal(notes[2], undefined, "a malformed note was taken");

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
  // status m02 + m04, mastery 6, srs 5 + 6, drill d02, note m03/1, result CM1, streak, activity 09-15, pace q9
  assert.equal(adopted, 11);

  await settle(); // what was adopted uploads like any other change
  assert.ok(rowsOf("flashcard_srs").some((r) => r.card_idx === 5 && r.last_reviewed === "2026-09-28"));
  assert.ok(rowsOf("drill_progress").some((r) => r.item_id === "cm1-m01-d02"));
  assert.ok(rowsOf("module_status").some((r) => r.module_id === "m04" && r.status === "In progress"));
  assert.ok(rowsOf("card_note").some((r) => r.exam_code === "CM1" && r.module_id === "m03" && r.card_idx === 1 && r.note === "from the file"));
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
  // A review whose upload is still in flight when the account goes: that
  // flush must not put the deleted user's changes back in the queue.
  fetchDelay = 40;
  Store.setSrs("CM1", "m02", 0, sched("2026-09-30", 1));
  await Store.deleteAccount();
  await settle();
  fetchDelay = 0;
  offline = false;
  assert.deepEqual(invoked.slice(-1), ["delete-account"]);
  assert.equal(userKeys("u1").length, 0, `left behind: ${userKeys("u1").join(", ")}`);
  assert.ok(mem["actuarialStudy:status:anon:CS1"], "signed-out progress on this device should stay");
  assert.ok(mem["actuarialStudy:status:u2:CS1"], "another account's progress should stay");
  assert.ok(!JSON.parse(mem["actuarialStudy:pending"] || "[]").some((op) => op.userId === "u1"), "the deleted user's queue should go");
  assert.equal(signOuts.length, 1);
  assert.equal(signOuts[0].scope, "local");
});

// Isolated stores let us switch accounts without disturbing the shared fixture.
for (const [loader, table, kind, row] of [
  ["loadScores", "question_score", "score", { exam_code: "CB2", question_id: "private-q", attempted_at: "2026-09-30T12:00:00Z", part_marks: [7], score: 7, max_marks: 10, source: "practice" }],
  ["loadMocks", "mock_result", "mock", { exam_code: "CB2", taken_at: "2026-09-30T12:00:00Z", question_ids: ["private-q"], score: 7, max_marks: 10, pct: 70 }],
]) {
  for (const nextUser of [null, { id: "u2" }]) {
    for (const fails of [false, true]) {
      await test(`${loader} discards a late ${fails ? "error" : "response"} after ${nextUser ? "an account switch" : "sign-out"}`, async () => {
        const storage = {};
        const listeners = [];
        const filters = [];
        let resolveFetch;
        const response = new Promise((resolve) => { resolveFetch = resolve; });
        response.eq = (col, value) => (filters.push([col, value]), response);
        const isolated = {
          ...ctx,
          localStorage: {
            getItem: (k) => storage[k] ?? null,
            setItem: (k, v) => { storage[k] = String(v); },
            removeItem: (k) => { delete storage[k]; },
            get length() { return Object.keys(storage).length; },
            key: (i) => Object.keys(storage)[i],
          },
          supabase: {
            createClient: () => ({
              auth: {
                getSession: async () => ({ data: { session: { user: { id: "u1" } } } }),
                onAuthStateChange: (cb) => listeners.push(cb),
              },
              from: (name) => {
                assert.equal(name, table);
                return { select: () => response };
              },
            }),
          },
        };
        vm.createContext(isolated);
        vm.runInContext(`${readFileSync(new URL("../docs/store.js", import.meta.url), "utf8")};this.Store = Store;`, isolated);
        const store = isolated.Store;
        await store.init();
        const loading = store[loader]();
        listeners.forEach((cb) => cb(nextUser ? "SIGNED_IN" : "SIGNED_OUT", nextUser ? { user: nextUser } : null));
        const before = { ...storage };
        resolveFetch(fails ? { data: null, error: MISSING(table) } : { data: [row], error: null });
        await loading;
        assert.deepEqual(storage, before, "a stale response changed local storage");
        assert.equal(storage[`actuarialStudy:${kind}:${nextUser ? "u2" : "anon"}:CB2`], undefined);
        assert.equal(store.isScoreTableMissing(), false, "a stale error changed the current account's sync status");
        assert.deepEqual(filters, [["user_id", "u1"]], "fetch must be scoped to its initiating account");
      });
    }
  }
}

console.log(`${passed} progress sync test(s) passed.`);
