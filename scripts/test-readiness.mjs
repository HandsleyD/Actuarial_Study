#!/usr/bin/env node
// Unit tests for the readiness estimate and daily pace in docs/readiness.js.
// Run: node scripts/test-readiness.mjs   (also runs in CI — validate-content.yml)

import { createRequire } from "node:module";
import assert from "node:assert/strict";

const require = createRequire(import.meta.url);
const Readiness = require("../docs/readiness.js");

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
const mod = (total, seen = 0, mastered = 0, due = 0) => ({ total, seen, mastered, due });

test("no cards: no readiness", () => {
  assert.equal(Readiness.score([], null), null);
  assert.equal(Readiness.score([mod(0)], null), null);
});

test("nothing studied scores 0, not the reviews weight", () => {
  const r = Readiness.score([mod(10), mod(10)], null);
  assert.equal(r.pct, 0);
  assert.equal(r.parts.reviews, 0);
  assert.equal(r.parts.drills, null);
});

test("everything seen, starred and up to date scores 100", () => {
  const r = Readiness.score([mod(10, 10, 10), mod(5, 5, 5)], { attempts: 4, correct: 4 });
  assert.equal(r.pct, 100);
});

test("a module is covered once half its cards are scored", () => {
  const r = Readiness.score([mod(10, 5), mod(10, 4), mod(0)], null);
  assert.equal(r.counts.modules, 2); // the card-less module doesn't count
  assert.equal(r.counts.covered, 1);
  assert.equal(r.parts.coverage, 0.5);
});

test("weights without drills: coverage, mastery and reviews scaled to fill the drills share", () => {
  // coverage 1/2, mastery 5/20, reviews (9-3)/20 => (35*.5 + 35*.25 + 15*.3) / 85
  const r = Readiness.score([mod(10, 6, 5, 3), mod(10, 3)], null);
  assert.equal(r.parts.reviews, 0.3);
  assert.equal(r.pct, 36);
});

test("drill accuracy joins the blend once a drill is answered", () => {
  const without = Readiness.score([mod(10, 10, 5)], { attempts: 0, correct: 0 });
  const withDrills = Readiness.score([mod(10, 10, 5)], { attempts: 10, correct: 2 });
  assert.equal(without.parts.drills, null);
  assert.equal(withDrills.parts.drills, 0.2);
  assert.ok(withDrills.pct < without.pct);
  // coverage 1, mastery .5, drills .2, reviews 1 => (35 + 17.5 + 3 + 15) / 100
  assert.equal(withDrills.pct, 71);
});

test("a few cards kept up to date don't make a subject look part-ready", () => {
  const r = Readiness.score([mod(100, 4, 4, 0)], null);
  assert.equal(r.parts.reviews, 0.04);
  assert.equal(r.pct, 2); // (35*.04 + 15*.04) / 85
});

test("an overdue backlog pulls readiness down", () => {
  const clear = Readiness.score([mod(10, 10, 5, 0)], null);
  const backlog = Readiness.score([mod(10, 10, 5, 10)], null);
  // coverage 1, mastery .5 => clear (35 + 17.5 + 15) / 85, backlog (35 + 17.5) / 85
  assert.equal(clear.pct, 79);
  assert.equal(backlog.pct, 62);
});

test("a sitting's readiness is the mean of its subjects with cards", () => {
  assert.equal(Readiness.sitting([40, 61, null]), 51);
  assert.equal(Readiness.sitting([null]), null);
  assert.equal(Readiness.sitting([]), null);
});

test("pace: cards spread over the days up to two weeks before the paper", () => {
  // CB2 paper 16 Apr 2027; from 27 Sep 2026 the target is 2 Apr 2027, 187 days away.
  const p = Readiness.pace({ today: "2026-09-27", paper: "2027-04-16", cardsLeft: 400 });
  assert.equal(p.target, "2027-04-02");
  assert.equal(p.daysToTarget, 187);
  assert.equal(p.perDay, 3); // ceil(400 / 187)
  assert.equal(p.inRevision, false);
});

test("pace: nothing left means nothing new today", () => {
  assert.equal(Readiness.pace({ today: "2026-09-27", paper: "2027-04-16", cardsLeft: 0 }).perDay, 0);
});

test("pace: inside the revision fortnight, what's left is spread up to the paper", () => {
  const p = Readiness.pace({ today: "2027-04-06", paper: "2027-04-16", cardsLeft: 25 });
  assert.equal(p.inRevision, true);
  assert.equal(p.daysToPaper, 10);
  assert.equal(p.perDay, 3);
  const last = Readiness.pace({ today: "2027-04-16", paper: "2027-04-16", cardsLeft: 7 });
  assert.equal(last.perDay, 7);
});

test("pace crosses the clocks changing without losing a day", () => {
  assert.equal(Readiness.pace({ today: "2027-03-20", paper: "2027-04-14", cardsLeft: 0 }).daysToTarget, 11);
});

console.log(`${passed} readiness test(s) passed.`);
