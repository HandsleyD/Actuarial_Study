#!/usr/bin/env node
// Sync tests for the exam plan and exam results in docs/store.js, run against
// a fake Supabase client and an in-memory localStorage.
// Run: node scripts/test-plan-sync.mjs   (also runs in CI — validate-content.yml)

import { readFileSync } from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";

const mem = {};
let server = null; // the user's exam_plan row's plan column, or null
let fetchDelay = 0;
let upserts = 0;
const resultRows = {}; // exam_code -> { status, sitting, updated_at }
let resultUpserts = 0;

const ctx = {
  console,
  Date,
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
      from: (table) =>
        table === "subject_result"
          ? {
              select: () => ({
                eq: (_col, code) => ({
                  maybeSingle: async () => ({ data: resultRows[code] || null, error: null }),
                }),
                then: (res, rej) =>
                  Promise.resolve({
                    data: Object.entries(resultRows).map(([exam_code, r]) => ({ exam_code, ...r })),
                    error: null,
                  }).then(res, rej),
              }),
              upsert: async (row) => {
                resultUpserts++;
                resultRows[row.exam_code] = { status: row.status, sitting: row.sitting, updated_at: row.updated_at };
                return { error: null };
              },
            }
          : {
        select: () => ({
          // Returns the row as it was when the request was sent, like a real
          // round trip, so edits made while it's in flight aren't in it.
          maybeSingle: async () => {
            const snap = server;
            await new Promise((r) => setTimeout(r, fetchDelay));
            return { data: snap ? { plan: snap } : null, error: null };
          },
          eq: async () => ({ data: [], error: null }),
        }),
        upsert: async (row) => {
          if (table === "exam_plan") {
            upserts++;
            server = row.plan;
          }
          return { error: null };
        },
      },
    }),
  },
};
vm.createContext(ctx);
vm.runInContext(`${readFileSync(new URL("../docs/store.js", import.meta.url), "utf8")};this.Store = Store;`, ctx);
const Store = ctx.Store;
const settle = () => new Promise((r) => setTimeout(r, 80));

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

await test("an edit made while a load is in flight is not rolled back", async () => {
  server = { sittings: { "2027-04": ["CS1"] }, updatedAt: 1000 };
  fetchDelay = 20;
  const loading = Store.loadExamPlan();
  Store.setExamPlan({ "2027-04": ["CS1", "CM1"] });
  const loaded = await loading;
  await settle();
  assert.deepEqual(loaded.sittings["2027-04"], ["CS1", "CM1"]);
  assert.deepEqual(Store.getExamPlanCache().sittings["2027-04"], ["CS1", "CM1"]);
  assert.deepEqual(server.sittings["2027-04"], ["CS1", "CM1"]);
});

await test("a stale queued plan doesn't overwrite a newer one from another device", async () => {
  fetchDelay = 0;
  const stale = Date.now() - 60000;
  server = { sittings: { "2027-09": ["CS2"] }, updatedAt: Date.now() };
  mem["actuarialStudy:pending"] = JSON.stringify([
    { type: "plan", value: { sittings: { "2027-04": ["CM1"] }, updatedAt: stale }, userId: "u1", ts: stale },
  ]);
  let notified = 0;
  Store.onPlanChange(() => notified++);
  const before = upserts;
  Store.setModuleStatus("CB1", "m01", "Done"); // any write kicks off a flush
  await settle();
  assert.equal(upserts, before, "stale plan was uploaded");
  assert.deepEqual(server.sittings, { "2027-09": ["CS2"] });
  assert.deepEqual(Store.getExamPlanCache().sittings, { "2027-09": ["CS2"] });
  assert.equal(notified, 1);
  assert.ok(!JSON.parse(mem["actuarialStudy:pending"]).some((op) => op.type === "plan"), "stale op left queued");
});

await test("a result uploads with the time it was made, and a newer server result wins on load", async () => {
  Store.setResult("CB1", "exempt", null);
  await settle();
  assert.equal(resultRows.CB1.status, "exempt");
  const madeAt = Store.getResultsCache().CB1.updatedAt;
  assert.equal(Date.parse(resultRows.CB1.updated_at), madeAt);
  resultRows.CB2 = { status: "passed", sitting: "2026-09", updated_at: new Date(Date.now() + 1000).toISOString() };
  resultRows.CB1 = { status: "none", sitting: null, updated_at: new Date(madeAt - 5000).toISOString() };
  const loaded = await Store.loadResults();
  assert.equal(loaded.CB2.status, "passed");
  assert.equal(loaded.CB1.status, "exempt", "older server row overwrote a newer local result");
});

await test("a stale queued result doesn't overwrite a newer one from another device", async () => {
  const stale = Date.now() - 60000;
  resultRows.CM1 = { status: "passed", sitting: "2026-09", updated_at: new Date().toISOString() };
  mem["actuarialStudy:pending"] = JSON.stringify([
    { type: "result", examCode: "CM1", value: { status: "none", sitting: null, updatedAt: stale }, userId: "u1", ts: stale },
  ]);
  let notified = 0;
  Store.onResultsChange(() => notified++);
  const before = resultUpserts;
  Store.setModuleStatus("CB1", "m02", "Done");
  await settle();
  assert.equal(resultUpserts, before, "stale result was uploaded");
  assert.equal(resultRows.CM1.status, "passed");
  assert.equal(Store.getResultsCache().CM1.status, "passed");
  assert.equal(notified, 1);
  assert.ok(!JSON.parse(mem["actuarialStudy:pending"]).some((op) => op.type === "result"), "stale op left queued");
});

console.log(`${passed} sync test(s) passed.`);
