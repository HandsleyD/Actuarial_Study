#!/usr/bin/env node
// Unit tests for the route to Associate and Fellow in docs/route.js, against
// the real exam timetable in docs/exam-dates.js.
// Run: node scripts/test-route.mjs   (also runs in CI — validate-content.yml)

import { createRequire } from "node:module";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";

const require = createRequire(import.meta.url);
const Route = require("../docs/route.js");
const ctx = {};
vm.createContext(ctx);
vm.runInContext(`${readFileSync(new URL("../docs/exam-dates.js", import.meta.url), "utf8")};this.EXAM_DATES = EXAM_DATES;`, ctx);
const cal = Route.calendar(ctx.EXAM_DATES);
const today = "2026-09-24";

let passed = 0;
function test(name, fn) {
  try {
    fn();
    passed++;
  } catch (e) {
    console.error(`FAIL: ${name}\n  ${e.message}`);
    process.exitCode = 1;
  }
}
const shape = (r) => r.groups.map((g) => `${g.id} ${g.kind[0]} ${g.codes.join("+")}`);

test("new candidate: planned sittings, then two suggestions a sitting in syllabus order", () => {
  const r = Route.build({ today, calendar: cal, passed: [], sittings: { "2027-04": ["CB1", "CM1"], "2027-09": ["CB2", "CM2"] } });
  assert.deepEqual(shape(r), [
    "2027-04 p CB1+CM1",
    "2027-09 p CB2+CM2",
    "2028-04 s CS1+CS2",
    "2028-09 s CP1+CP2",
    "2029-04 s CP3",
  ]);
  assert.deepEqual(r.associate, { at: "2029-04", needsCB3: true });
  assert.deepEqual(r.fork, { sp: 2, sa: 1 });
  assert.equal(r.fellow.at, null);
});

test("a planned clash is reported (CB2 and CM2B share 16 Sep 2027)", () => {
  const r = Route.build({ today, calendar: cal, passed: [], sittings: { "2027-09": ["CB2", "CM2"] } });
  assert.deepEqual(r.groups[0].clashes, [{ date: "2027-09-16", codes: ["CB2", "CM2"] }]);
});

test("returning candidate: passed subjects lead, suggestions follow the plan", () => {
  const r = Route.build({
    today,
    calendar: cal,
    passed: ["CM1", "CB1", "CB2"],
    sittings: { "2027-04": ["CS1", "CM2"], "2027-09": ["CS2"] },
  });
  assert.deepEqual(r.passed, ["CB1", "CB2", "CM1"]);
  assert.deepEqual(shape(r), ["2027-04 p CS1+CM2", "2027-09 p CS2", "2028-04 s CP1+CP2", "2028-09 s CP3"]);
  assert.equal(r.associate.at, "2028-09");
});

test("choosing specialists closes the fork and dates Fellow", () => {
  const r = Route.build({
    today,
    calendar: cal,
    passed: ["CB1", "CB2", "CM1"],
    sittings: { "2027-04": ["CS1", "CM2"], "2027-09": ["CS2"] },
    specialists: { sp: ["SP2", "SP4"], sa: ["SA2"] },
  });
  assert.deepEqual(r.fork, { sp: 0, sa: 0 });
  assert.deepEqual(shape(r).slice(2), ["2028-04 s CP1+CP2", "2028-09 s CP3+SP2", "2029-04 s SP4+SA2"]);
  assert.equal(r.fellow.at, "2029-04");
});

test("planned or passed specialists count as chosen; saved picks only fill what's left", () => {
  const r = Route.build({
    today,
    calendar: cal,
    passed: ["SP1"],
    sittings: { "2027-04": ["SP2"] },
    specialists: { sp: ["SP9", "SP8"], sa: [] },
  });
  assert.deepEqual(r.specialists.sp, ["SP1", "SP2"]);
  assert.deepEqual(r.fork, { sp: 0, sa: 1 });
});

test("suggestions skip published sittings that don't offer a subject, and same-day papers", () => {
  // April 2027: CS1A and SP1 are both on 13 Apr, so they can't be suggested together.
  const r = Route.build({
    today,
    calendar: cal,
    passed: ["CB1", "CB2", "CM1", "CM2", "CS2", "CP1", "CP2", "CP3"],
    sittings: {},
    specialists: { sp: ["SP1"], sa: [] },
  });
  assert.equal(r.groups[0].id, "2027-04");
  assert.deepEqual(r.groups[0].codes, ["CS1"]);
  assert.deepEqual(r.groups[1].codes, ["SP1"]);
});

test("a past sitting still awaiting results stays on the route, marked past", () => {
  const r = Route.build({ today, calendar: cal, passed: [], sittings: { "2026-04": ["CS2"] } });
  assert.equal(r.groups[0].id, "2026-04");
  assert.equal(r.groups[0].past, true);
  assert.equal(r.groups[1].id, "2027-04"); // suggestions start at the first sitting not yet under way
});

test("already qualified", () => {
  const all = ["CB1", "CB2", "CB3", "CM1", "CM2", "CS1", "CS2", "CP1", "CP2", "CP3", "SP1", "SP2", "SA1"];
  const r = Route.build({ today, calendar: cal, passed: all, sittings: {} });
  assert.equal(r.associate.at, "now");
  assert.equal(r.associate.needsCB3, false);
  assert.equal(r.fellow.at, "now");
  assert.deepEqual(r.groups, []);
});

console.log(`${passed} route test(s) passed.`);
