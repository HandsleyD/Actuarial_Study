#!/usr/bin/env node
// Sync tests for study progress in docs/store.js (module status, flashcard
// mastery, review schedules, drills, streak, daily activity), run against a
// fake Supabase client and an in-memory localStorage.
// Run: node scripts/test-progress-sync.mjs   (also runs in CI — validate-content.yml)
//
// Each test covers a way a change made on one device could be undone: by a
// load that replaces a change still queued for upload, by a stale queued
// change overwriting a newer one from another device, or by two parts of
// the site disagreeing about which day it is.

process.env.TZ = "Europe/London"; // BST in the date tests: local and UTC dates differ after 23:00 UTC

import { readFileSync } from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";

const mem = {};
const tables = {}; // table -> array of rows
let offline = false; // upserts fail while true, so changes stay queued
let fetchDelay = 0;
let fakeNow = null; // ms since epoch, or null for the real clock

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
  },
  supabase: {
    createClient: () => ({
      auth: {
        getSession: async () => ({ data: { session: { user: { id: "u1" } } } }),
        onAuthStateChange() {},
      },
      from: (table) => ({
        select: () => query(table),
        upsert: (rows, opts) => upsert(table, rows, opts),
      }),
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

console.log(`${passed} progress sync test(s) passed.`);
