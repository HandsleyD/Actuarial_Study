#!/usr/bin/env node
// Unit tests for the spaced-repetition rules in docs/srs.js.
// Run: node scripts/test-srs.mjs   (also runs in CI — validate-content.yml)

import { createRequire } from "node:module";
import assert from "node:assert/strict";

const require = createRequire(import.meta.url);
const SRS = require("../docs/srs.js");

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

const T = "2026-09-19";

test("date helpers", () => {
  assert.equal(SRS.addDays(T, 1), "2026-09-20");
  assert.equal(SRS.addDays(T, 12), "2026-10-01");
  assert.equal(SRS.addDays("2026-03-28", 2), "2026-03-30"); // across UK DST change
  assert.equal(SRS.addDays("2026-12-31", 1), "2027-01-01");
  assert.equal(SRS.daysBetween(T, "2026-10-01"), 12);
  assert.equal(SRS.daysBetween("2026-10-24", "2026-10-26"), 2); // across DST end
  assert.equal(SRS.today(new Date(2026, 8, 19, 0, 30)), "2026-09-19"); // local, not UTC
});

test("new card, Sufficient -> 1 day", () => {
  const s = SRS.next(null, true, T);
  assert.equal(s.reps, 1);
  assert.equal(s.interval, 1);
  assert.equal(s.due, "2026-09-20");
  assert.equal(s.reviews, 1);
  assert.equal(s.lapses, 0);
  assert.equal(s.last, T);
});

test("interval ladder 1, 3, 8, 20, 50 when reviewed on the due date", () => {
  let s = null;
  let day = T;
  const gaps = [];
  for (let i = 0; i < 5; i++) {
    s = SRS.next(s, true, day);
    gaps.push(s.interval);
    day = s.due;
  }
  assert.deepEqual(gaps, [1, 3, 8, 20, 50]);
});

test("interval is capped", () => {
  let s = { reps: 9, interval: 150, ease: 2.5, due: T, lapses: 0, reviews: 9, last: "2026-01-01" };
  s = SRS.next(s, true, T);
  assert.equal(s.interval, SRS.MAX_INTERVAL_DAYS);
});

test("Insufficient resets to due today, drops ease, counts a lapse", () => {
  let s = SRS.next(null, true, T);
  s = SRS.next(s, true, s.due); // interval 3
  s = SRS.next(s, false, "2026-09-23");
  assert.equal(s.reps, 0);
  assert.equal(s.interval, 0);
  assert.equal(s.due, "2026-09-23");
  assert.equal(s.lapses, 1);
  assert.equal(s.ease, 2.3);
  assert.equal(s.reviews, 3);
  // relearn: next Sufficient goes back onto the ladder at 1 day
  s = SRS.next(s, true, "2026-09-23");
  assert.equal(s.interval, 1);
});

test("Insufficient even when not yet due still resets", () => {
  let s = SRS.next(null, true, T); // due tomorrow
  s = SRS.next(s, false, T);
  assert.equal(s.due, T);
  assert.equal(s.lapses, 1);
});

test("ease never drops below the floor", () => {
  let s = null;
  for (let i = 0; i < 20; i++) s = SRS.next(s, false, T);
  assert.equal(s.ease, SRS.MIN_EASE);
  assert.equal(s.lapses, 20);
});

test("Sufficient ahead of schedule leaves the schedule alone", () => {
  const s1 = SRS.next(null, true, T); // due 20th
  const s2 = SRS.next(s1, true, T); // same day again
  assert.equal(s2.due, s1.due);
  assert.equal(s2.interval, s1.interval);
  assert.equal(s2.reps, s1.reps);
  assert.equal(s2.reviews, 2);
});

test("overdue card reviewed late grows from its interval, due counted from review day", () => {
  let s = { reps: 2, interval: 3, ease: 2.5, due: "2026-09-10", lapses: 0, reviews: 2, last: "2026-09-07" };
  s = SRS.next(s, true, T);
  assert.equal(s.interval, 8);
  assert.equal(s.due, "2026-09-27");
});

test("isDue", () => {
  assert.equal(SRS.isDue(null, T), false);
  assert.equal(SRS.isDue({ due: T }, T), true);
  assert.equal(SRS.isDue({ due: "2026-09-18" }, T), true);
  assert.equal(SRS.isDue({ due: "2026-09-20" }, T), false);
});

test("seed: starred cards spread over the next 7 days, unstarred due today", () => {
  const dues = Array.from({ length: 14 }, (_, k) => SRS.seed(true, k, T).due);
  assert.equal(new Set(dues).size, 7);
  assert.ok(dues.every((d) => d > T && d <= SRS.addDays(T, 7)));
  const bad = SRS.seed(false, 0, T);
  assert.equal(bad.due, T);
  assert.equal(bad.lapses, 1);
  // a seeded star reviewed on time continues the ladder (3 * 2.5 -> 8)
  const s = SRS.next(SRS.seed(true, 0, T), true, SRS.addDays(T, 1));
  assert.equal(s.interval, 8);
});

test("describeDue", () => {
  assert.equal(SRS.describeDue(null, T), "New card");
  assert.equal(SRS.describeDue({ due: T }, T), "Due today");
  assert.equal(SRS.describeDue({ due: "2026-09-20" }, T), "Next review tomorrow");
  assert.equal(SRS.describeDue({ due: "2026-09-24" }, T), "Next review in 5 days");
  assert.equal(SRS.describeDue({ due: "2026-09-18" }, T), "Overdue by 1 day");
  assert.equal(SRS.describeDue({ due: "2026-09-16" }, T), "Overdue by 3 days");
});

test("next() does not mutate its input", () => {
  const s1 = SRS.next(null, true, T);
  const copy = JSON.stringify(s1);
  SRS.next(s1, false, T);
  assert.equal(JSON.stringify(s1), copy);
});

console.log(`${passed} SRS test(s) passed${process.exitCode ? ", some FAILED" : ""}.`);
