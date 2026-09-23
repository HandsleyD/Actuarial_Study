#!/usr/bin/env node
// Rebuilds docs/exam-dates.js from the IFoA's key exam dates page
// (https://actuaries.org.uk/exam-dates/). Run weekly by
// .github/workflows/update-exam-dates.yml, which opens a PR when the output
// changes; it can also be run locally:
//
//   node scripts/update-exam-dates.mjs            # fetch the live page
//   node scripts/update-exam-dates.mjs page.html  # parse a saved copy
//
// The page has one section per session, headed "<Month> <Year> exams", each
// holding:
//   - a table whose rows alternate between day headings ("Monday 12 April")
//     and the papers sat that day, one <p> per paper;
//   - a "Key dates" list of "<label>: <date>" lines.
//
// Exits non-zero, without writing anything, if the page no longer looks like
// that (no sessions, a session with no papers, a date it can't read), so a
// redesign of the page shows up as a failed run rather than a PR that empties
// the timetable. Key-date lines it doesn't recognise are kept with the
// IFoA's own wording and reported as warnings.
//
// The file is only rewritten when the dates themselves change, so "updated"
// is the day the timetable last changed, not the day of the last check.

import { readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const SOURCE = "https://actuaries.org.uk/exam-dates/";
const OUT = join(dirname(fileURLToPath(import.meta.url)), "..", "docs/exam-dates.js");

const MONTHS = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
const PAPER = /^(C[BMPS]|S[AP])\d/;

// Key-date lines, matched in order. null = deliberately left out (the exam
// days themselves are already in the table; fees aren't an exam date).
const KEY_DATES = [
  [/results released:\s*CS, CM, CB/i, { results: "core" }],
  [/results released:\s*CP, SP, SA/i, { results: "advanced" }],
  [/breakdown released:\s*CS, CM, CB/i, { breakdown: "core" }],
  [/breakdown released:\s*CP, SP, SA/i, { breakdown: "advanced" }],
  [/membership or reinstatement/i, { label: "Last day to apply for membership or reinstate lapsed membership" }],
  [/reinstatement of lapsed membership/i, { label: "Last day to reinstate lapsed membership" }],
  [/student membership/i, { label: "Last day to apply for student membership" }],
  [/exam entry available/i, { label: "Exam entry opens" }],
  [/exam entry clos/i, { label: "Exam entry closes (12:00 midday UK)" }],
  [/mitigating circumstances/i, { label: "Mitigating circumstances applications close" }],
  [/^exams (start|end)\b|subscription fees/i, null],
];

const warnings = [];

function text(html) {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

// Matched on the first three letters, so the page's own typos
// ("Feburary") still read correctly.
const monthIndex = (name) => (name.length >= 3 ? MONTHS.findIndex((m) => m.startsWith(name.slice(0, 3).toLowerCase())) : -1);

function iso(day, monthName, year) {
  const m = monthIndex(monthName);
  if (m < 0) throw new Error(`unknown month "${monthName}"`);
  return `${year}-${String(m + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function parsePapers(tableHtml, year, session) {
  const papers = {};
  let days = null;
  for (const [, row] of tableHtml.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)) {
    const cells = [...row.matchAll(/<t([hd])[^>]*>([\s\S]*?)<\/t[hd]>/gi)];
    const dayCells = cells.map(([, , c]) => text(c).match(/^[A-Za-z]+day (\d{1,2}) ([A-Za-z]+)$/));
    if (dayCells.length && dayCells.every(Boolean)) {
      days = dayCells.map(([, d, m]) => iso(d, m, year));
      continue;
    }
    if (!days) throw new Error(`${session}: paper row before any day headings`);
    cells.forEach(([, , c], i) => {
      const items = [...c.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map(([, p]) => text(p));
      const found = (items.length ? items : [text(c)]).filter((p) => PAPER.test(p));
      if (found.length && days[i]) papers[days[i]] = (papers[days[i]] || []).concat(found);
    });
  }
  return papers;
}

function parseKeyDates(listHtml, year, session) {
  const out = { deadlines: [], results: {}, breakdown: {} };
  for (const [, li] of listHtml.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)) {
    const line = text(li);
    const dm = [...line.matchAll(/(\d{1,2}) ([A-Z][a-z]+)(?: (\d{4}))?/g)].filter((x) => monthIndex(x[2]) >= 0).pop();
    if (!dm || monthIndex(dm[2]) < 0) {
      warnings.push(`${session}: no date in key-date line "${line}"`);
      continue;
    }
    const date = iso(dm[1], dm[2], dm[3] || year);
    const rule = KEY_DATES.find(([re]) => re.test(line));
    if (!rule) {
      warnings.push(`${session}: unrecognised key date kept as-is: "${line}"`);
      out.deadlines.push({ date, label: line.split(":")[0].trim() });
      continue;
    }
    const action = rule[1];
    if (!action) continue;
    if (action.results) out.results[action.results] = date;
    else if (action.breakdown) out.breakdown[action.breakdown] = date;
    else if (!out.deadlines.some((d) => d.date === date && d.label === action.label)) {
      out.deadlines.push({ date, label: action.label });
    }
  }
  out.deadlines.sort((a, b) => a.date.localeCompare(b.date));
  return out;
}

function parsePage(html) {
  const heads = [...html.matchAll(/<h2[^>]*>(?:\s*<a[^>]*><\/a>)?\s*([A-Z][a-z]+) (\d{4}) exams\s*<\/h2>/g)];
  if (!heads.length) throw new Error('no "<Month> <Year> exams" sections found: has the page layout changed?');
  return heads.map((h, i) => {
    const name = `${h[1]} ${h[2]}`;
    const chunk = html.slice(h.index, i + 1 < heads.length ? heads[i + 1].index : undefined);
    const table = chunk.match(/<table[\s\S]*?<\/table>/i);
    if (!table) throw new Error(`${name}: no timetable found`);
    const papers = parsePapers(table[0], h[2], name);
    if (!Object.keys(papers).length) throw new Error(`${name}: timetable has no papers`);
    const list = chunk.match(/Key dates\s*<\/h3>\s*<ul[^>]*>([\s\S]*?)<\/ul>/i);
    const keys = list ? parseKeyDates(list[1], h[2], name) : { deadlines: [], results: {}, breakdown: {} };
    if (!list) warnings.push(`${name}: no key dates list`);
    if (!keys.results.core || !keys.results.advanced) warnings.push(`${name}: results dates not published yet`);
    const session = { name, deadlines: keys.deadlines, results: keys.results };
    if (keys.breakdown.core || keys.breakdown.advanced) session.breakdown = keys.breakdown;
    session.papers = Object.fromEntries(Object.entries(papers).sort(([a], [b]) => a.localeCompare(b)));
    return session;
  });
}

const q = (s) => JSON.stringify(s);

function render(sessions, updated) {
  const body = sessions
    .map((s) => {
      const obj = (o) => `{ ${Object.entries(o).map(([k, v]) => `${k}: ${q(v)}`).join(", ")} }`;
      const lines = [
        `    {`,
        `      name: ${q(s.name)},`,
        `      deadlines: [`,
        ...s.deadlines.map((d) => `        { date: ${q(d.date)}, label: ${q(d.label)} },`),
        `      ],`,
        `      results: ${obj(s.results)},`,
      ];
      if (s.breakdown) lines.push(`      breakdown: ${obj(s.breakdown)},`);
      lines.push(`      papers: {`, ...Object.entries(s.papers).map(([d, p]) => `        ${q(d)}: [${p.map(q).join(", ")}],`), `      },`, `    },`);
      return lines.join("\n");
    })
    .join("\n");
  return `// GENERATED by scripts/update-exam-dates.mjs from ${SOURCE}
// -- don't edit by hand. A weekly GitHub Action re-runs it and opens a PR
// when the IFoA changes anything. updated is the day the dates last changed.
// Dates are UK dates, "YYYY-MM-DD"; every paper starts at 09:00 UK time.
//
// results: "core" covers CS, CM and CB subjects; "advanced" covers CP, SP and
// SA. breakdown (the per-question mark breakdown) is only listed for some
// sessions. Papers are matched to a subject by their first three characters,
// so "CM1A" and "CP1 paper 2" belong to CM1 and CP1.
const EXAM_DATES = {
  updated: ${q(updated)},
  source: ${q(SOURCE)},
  sessions: [
${body}
  ],
};
`;
}

async function currentSessions() {
  try {
    const src = await readFile(OUT, "utf8");
    return new Function(`${src}; return EXAM_DATES.sessions;`)();
  } catch {
    return null;
  }
}

const file = process.argv[2];
const html = file
  ? await readFile(file, "utf8")
  : await fetch(SOURCE, { headers: { "User-Agent": "actuarial-study-exam-dates (github.com/HandsleyD/Actuarial_Study)" } }).then((r) => {
      if (!r.ok) throw new Error(`fetching ${SOURCE}: HTTP ${r.status}`);
      return r.text();
    });

const sessions = parsePage(html);
warnings.forEach((w) => console.warn(`warning: ${w}`));

if (JSON.stringify(sessions) === JSON.stringify(await currentSessions())) {
  console.log(`No changes: ${sessions.map((s) => s.name).join(", ")}.`);
} else {
  const today = new Date().toLocaleDateString("en-CA", { timeZone: "Europe/London" });
  await writeFile(OUT, render(sessions, today));
  console.log(`Updated docs/exam-dates.js: ${sessions.map((s) => s.name).join(", ")}.`);
}
