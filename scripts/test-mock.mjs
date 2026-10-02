#!/usr/bin/env node
// Unit tests for mock-paper selection and self-mark summaries in docs/mock.js,
// including a paper for every subject in the real question bank.
// Run: node scripts/test-mock.mjs   (also runs in CI — validate-content.yml)

import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { loadContentFiles } from "./content-lib.mjs";
import assert from "node:assert/strict";

const require = createRequire(import.meta.url);
const Mock = require("../docs/mock.js");
const { content, errors } = loadContentFiles(fileURLToPath(new URL("../", import.meta.url)));
assert.deepEqual(errors, []);
const ctx = { QUESTIONS: Object.fromEntries(Object.entries(content).filter(([, c]) => c.questions.length).map(([code, c]) => [code, c.questions])) };

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

// Small seeded generator, so "random" papers are repeatable here.
function rng(seed) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 2 ** 32);
}
const bank = (marks) => marks.map((m, i) => ({ id: `q${i + 1}`, marks: m }));
const sum = (qs) => qs.reduce((a, q) => a + q.marks, 0);

test("twelve-mark questions: eight of them (96) beats nine (108)", () => {
  const p = Mock.pickPaper(bank(Array(10).fill(12)), 100, rng(1));
  assert.equal(p.marks, 96);
  assert.equal(p.questions.length, 8);
  assert.equal(p.scaled, false);
});

test("hits 100 exactly when some subset does", () => {
  const p = Mock.pickPaper(bank([30, 25, 20, 15, 10, 40, 7]), 100, rng(2));
  assert.equal(p.marks, 100);
  assert.equal(sum(p.questions), 100);
});

test("a tie goes under 100, not over", () => {
  // 49+49 = 98 and 49+53 = 102 are equally close
  for (const seed of [1, 2, 3, 4, 5]) assert.equal(Mock.pickPaper(bank([49, 53, 49, 53]), 100, rng(seed)).marks, 98);
  // but a closer paper over 100 still wins: 52+49 = 101 beats 98
  assert.equal(Mock.pickPaper(bank([52, 52, 49, 49]), 100, rng(3)).marks, 101);
});

test("questions come back in bank order, each once", () => {
  const b = bank([12, 14, 12, 12, 12, 12, 12, 12, 13, 12]);
  const p = Mock.pickPaper(b, 100, rng(4));
  const idx = p.questions.map((q) => b.indexOf(q));
  assert.deepEqual(idx, [...idx].sort((a, c) => a - c));
  assert.equal(new Set(idx).size, idx.length);
  assert.equal(sum(p.questions), p.marks);
});

test("different seeds can give different papers of the same length", () => {
  const b = bank(Array(12).fill(12));
  const papers = new Set([1, 2, 3, 4, 5, 6].map((s) => Mock.pickPaper(b, 100, rng(s)).questions.map((q) => q.id).join()));
  assert.ok(papers.size > 1);
});

test("a bank of 100 marks or fewer is used whole and scaled", () => {
  const p = Mock.pickPaper(bank([12, 12, 12]), 100, rng(5));
  assert.equal(p.questions.length, 3);
  assert.equal(p.marks, 36);
  assert.equal(p.scaled, true);
  assert.equal(Mock.pickPaper(bank([50, 50]), 100, rng(5)).scaled, false);
  const r = Mock.mockResult(27, 36, { mark: 60, sitting: "2026-04" });
  assert.equal(r.pct, 75);
  assert.equal(r.passed, true);
});

test("every subject in the question bank gets a paper within 10 marks of 100", () => {
  for (const [code, qs] of Object.entries(ctx.QUESTIONS)) {
    const p = Mock.pickPaper(qs, 100, rng(7));
    assert.ok(Math.abs(p.marks - 100) <= 10 || p.scaled, `${code}: ${p.marks}`);
    assert.equal(sum(p.questions), p.marks, code);
  }
});

test("typed marks: 0 to the part's marks, halves allowed", () => {
  assert.equal(Mock.parseMark("3", 4), 3);
  assert.equal(Mock.parseMark(" 2.5 ", 4), 2.5);
  assert.equal(Mock.parseMark("2.3", 4), 2.5);
  assert.equal(Mock.parseMark("0", 4), 0);
  assert.equal(Mock.parseMark("5", 4), null);
  assert.equal(Mock.parseMark("-1", 4), null);
  assert.equal(Mock.parseMark("", 4), null);
  assert.equal(Mock.parseMark("abc", 4), null);
});

test("subject average: latest attempt per question, weighted by marks", () => {
  const qs = [{ id: "a", marks: 10 }, { id: "b", marks: 20 }, { id: "c", marks: 10 }];
  const scores = {
    a: [Mock.attemptOf([2, 2], 10, "practice", 1), Mock.attemptOf([5, 5], 10, "practice", 3)],
    b: [Mock.attemptOf([5], 20, "mock", 2)],
    gone: [Mock.attemptOf([10], 10, "practice", 4)], // removed from the bank: ignored
  };
  const avg = Mock.subjectAverage(qs, scores);
  assert.equal(avg.attempted, 2);
  assert.equal(avg.questions, 3);
  assert.equal(avg.score, 15);
  assert.equal(avg.max, 30);
  assert.equal(avg.pct, 50);
  assert.equal(Mock.subjectAverage(qs, {}).pct, null);
});

test("latest pass mark skips sittings without one", () => {
  const rows = [
    { sitting: "2025-09", mark: 58 },
    { sitting: "2026-04", mark: 61 },
    { sitting: "2026-09", mark: null },
  ];
  assert.deepEqual(Mock.latestPassMark(rows), { mark: 61, sitting: "2026-04" });
  assert.equal(Mock.latestPassMark([]), null);
  assert.equal(Mock.mockResult(50, 100, null).passed, null);
});

test("a 3h15m paper", () => {
  assert.equal(Mock.DURATION_MS, 195 * 60 * 1000);
});

console.log(`${passed} mock-paper tests passed${process.exitCode ? ", some FAILED" : ""}`);
