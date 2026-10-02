#!/usr/bin/env node
// Unit tests for the "Add to calendar" .ics builder in docs/ics.js, against
// the real exam timetable in docs/exam-dates.js.
// Run: node scripts/test-ics.mjs   (also runs in CI — validate-content.yml)

import { createRequire } from "node:module";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";

const require = createRequire(import.meta.url);
const Ics = require("../docs/ics.js");
const Route = require("../docs/route.js");
const ctx = {};
vm.createContext(ctx);
vm.runInContext(`${readFileSync(new URL("../docs/exam-dates.js", import.meta.url), "utf8")};this.EXAM_DATES = EXAM_DATES;`, ctx);
const cal = Route.calendar(ctx.EXAM_DATES);
const today = "2026-10-01";
const now = new Date("2026-10-01T08:30:00Z");

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

const octets = (s) => Buffer.byteLength(s, "utf8");
// Undo line folding (RFC 5545 3.1): CRLF followed by one space or tab.
const unfold = (text) => text.replace(/\r\n[ \t]/g, "");
const vevents = (text) => unfold(text).split("BEGIN:VEVENT").slice(1).map((v) => v.split("END:VEVENT")[0]);
const prop = (block, name) => {
  const m = block.match(new RegExp(`\\r\\n${name}[;:]([^\\r]*)`));
  return m ? m[1] : null;
};

test("escapes backslash, semicolon, comma and line breaks in TEXT", () => {
  assert.equal(Ics.escapeText("a\\b;c,d\ne\r\nf"), "a\\\\b\\;c\\,d\\ne\\nf");
  assert.equal(Ics.escapeText("Exam entry closes (12:00 midday UK)"), "Exam entry closes (12:00 midday UK)");
  const text = Ics.build([{ uid: "x@y", date: "2027-04-12", summary: "CS1, CM1; and \\ more" }], { now });
  assert.ok(text.includes("SUMMARY:CS1\\, CM1\\; and \\\\ more\r\n"));
});

test("folds lines at 75 octets with a leading space, never splitting a character", () => {
  const ascii = "D".repeat(200);
  const folded = Ics.fold(`DESCRIPTION:${ascii}`);
  const lines = folded.split("\r\n");
  assert.equal(octets(lines[0]), 75);
  lines.slice(1).forEach((l) => {
    assert.ok(l.startsWith(" "));
    assert.ok(octets(l) <= 75);
  });
  assert.equal(unfold(folded), `DESCRIPTION:${ascii}`);

  // Multi-byte characters: "é" is 2 octets, "€" 3, "𝔼" 4.
  const wide = "é€𝔼".repeat(40);
  const wideFolded = Ics.fold(`SUMMARY:${wide}`);
  wideFolded.split("\r\n").forEach((l) => {
    assert.ok(octets(l) <= 75, `line of ${octets(l)} octets`);
    assert.ok(!l.includes("�"));
  });
  assert.equal(unfold(wideFolded), `SUMMARY:${wide}`);

  assert.equal(Ics.fold("X".repeat(75)), "X".repeat(75)); // exactly 75: no fold
  assert.equal(Ics.fold("X".repeat(76)), `${"X".repeat(75)}\r\n X`);
});

test("every line ends CRLF and none is over 75 octets", () => {
  const { events } = Ics.examEvents({ calendar: cal, sittings: { "2027-04": ["CS1", "CP1", "SP2"] }, today, source: ctx.EXAM_DATES.source });
  const text = Ics.build(events, { now, name: "IFoA exams" });
  assert.ok(text.endsWith("\r\n"));
  assert.ok(!/[^\r]\n/.test(text), "bare LF");
  assert.ok(!/\r[^\n]/.test(text), "bare CR");
  text
    .split("\r\n")
    .slice(0, -1)
    .forEach((l) => assert.ok(octets(l) <= 75, `line of ${octets(l)} octets: ${l}`));
  assert.ok(text.startsWith("BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:"));
  assert.ok(text.endsWith("END:VCALENDAR\r\n"));
  assert.equal(text.match(/BEGIN:VEVENT/g).length, text.match(/END:VEVENT/g).length);
});

test("a plan's sitting: each paper, entry opens/closes with a week's reminder, results day", () => {
  const { events, unpublished } = Ics.examEvents({ calendar: cal, sittings: { "2027-04": ["CM1", "CP1"] }, today });
  assert.deepEqual(unpublished, []);
  assert.deepEqual(
    events.map((e) => e.uid.split("@")[0]),
    [
      "2027-04-entry-opens",
      "2027-04-entry-closes",
      "2027-04-CM1-paper-cm1a",
      "2027-04-CP1-paper-cp1-paper-1",
      "2027-04-CM1-paper-cm1b",
      "2027-04-CP1-paper-cp1-paper-2",
      "2027-04-results-core",
      "2027-04-results-advanced",
    ]
  );
  const text = Ics.build(events, { now });
  const blocks = vevents(text);
  const byUid = Object.fromEntries(blocks.map((b) => [prop(b, "UID").split("@")[0], b]));

  const cm1a = byUid["2027-04-CM1-paper-cm1a"];
  assert.equal(prop(cm1a, "DTSTART"), "VALUE=DATE:20270412");
  assert.equal(prop(cm1a, "DTEND"), "VALUE=DATE:20270413");
  assert.equal(prop(cm1a, "SUMMARY"), "IFoA exam: CM1A");
  assert.equal(prop(cm1a, "TRANSP"), "OPAQUE");
  assert.ok(!cm1a.includes("BEGIN:VALARM"));

  const closes = byUid["2027-04-entry-closes"];
  assert.equal(prop(closes, "DTSTART"), "VALUE=DATE:20270205");
  assert.ok(closes.includes("BEGIN:VALARM\r\nACTION:DISPLAY\r\nTRIGGER:-P7D\r\n"));
  assert.equal(prop(closes, "SUMMARY"), "IFoA exam entry closes: April 2027 (CM1\\, CP1)");
  assert.ok(byUid["2027-04-entry-opens"].includes("TRIGGER:-P7D"));

  assert.equal(prop(byUid["2027-04-results-core"], "DTSTART"), "VALUE=DATE:20270706");
  assert.equal(prop(byUid["2027-04-results-core"], "SUMMARY"), "IFoA results: CM1 (April 2027)");
  assert.equal(prop(byUid["2027-04-results-advanced"], "DTSTART"), "VALUE=DATE:20270708");
  // No timed events, so no time zone block.
  assert.ok(!text.includes("VTIMEZONE"));
});

test("UIDs are stable: the same plan downloaded later gives the same UIDs and a higher SEQUENCE", () => {
  const sittings = { "2027-04": ["CS1", "SP2"], "2027-09": ["CS2"] };
  const a = Ics.build(Ics.examEvents({ calendar: cal, sittings, today }).events, { now });
  const b = Ics.build(Ics.examEvents({ calendar: cal, sittings, today }).events, { now: new Date(now.getTime() + 86400000) });
  const uids = (t) => vevents(t).map((v) => prop(v, "UID"));
  assert.deepEqual(uids(a), uids(b));
  assert.equal(new Set(uids(a)).size, uids(a).length, "duplicate UID");
  assert.ok(Number(prop(vevents(b)[0], "SEQUENCE")) > Number(prop(vevents(a)[0], "SEQUENCE")));
  assert.equal(prop(vevents(a)[0], "DTSTAMP"), "20261001T083000Z");
  // Adding a subject to a sitting keeps the shared deadline's UID.
  const c = Ics.examEvents({ calendar: cal, sittings: { "2027-04": ["CS1"] }, today }).events;
  assert.ok(c.some((e) => e.uid === "2027-04-entry-closes@handsleyd.github.io"));
});

test("past events are left out; unpublished sittings are reported, CB3 ignored", () => {
  const { events, unpublished } = Ics.examEvents({
    calendar: cal,
    sittings: { "2026-09": ["CB2"], "2028-04": ["CP3"], "2027-04": ["CB3"] },
    today,
  });
  // September 2026: papers and entry are past, results (8 Dec) still to come.
  assert.deepEqual(events.map((e) => e.uid.split("@")[0]), ["2026-09-results-core"]);
  assert.deepEqual(unpublished, ["2028-04"]);
});

test("timed papers when a session gives a start time, with Europe/London", () => {
  const session = { ...ctx.EXAM_DATES.sessions[1], paperStart: "09:00", paperMinutes: 195 };
  const timedCal = Route.calendar({ sessions: [session] });
  const { events } = Ics.examEvents({ calendar: timedCal, sittings: { "2027-04": ["CS1"] }, today });
  const text = Ics.build(events, { now });
  assert.ok(text.includes("BEGIN:VTIMEZONE\r\nTZID:Europe/London\r\n"));
  const paper = vevents(text).find((v) => prop(v, "UID").startsWith("2027-04-CS1-paper-cs1a"));
  assert.equal(prop(paper, "DTSTART"), "TZID=Europe/London:20270413T090000");
  assert.equal(prop(paper, "DTEND"), "TZID=Europe/London:20270413T121500");
});

console.log(`${passed} ics tests passed${process.exitCode ? ", some FAILED" : ""}`);
