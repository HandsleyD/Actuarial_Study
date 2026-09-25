#!/usr/bin/env node
// Validates docs/data.js, docs/questions.js, docs/drills.js and
// docs/foundations.js against the class of content
// bugs that have actually shipped to main before this existed:
//   - a syntax error in either file
//   - a flashcard missing its "explain" field (the reveal-then-explain
//     pattern this site is built around requires every card to have one)
//   - a LaTeX command inside a $...$ span missing its escaping backslash --
//     source needs TWO backslashes (\\frac) so the runtime string ends up
//     with ONE (\frac), which KaTeX needs; under-escaping either drops the
//     backslash silently or, worse, turns the next letter into a real JS
//     escape sequence (\t becomes a literal tab, quietly eating text) --
//     this exact bug shipped in the SP7 and SP8 question banks and was only
//     caught by hand afterwards
//   - a question bank entry whose declared "marks" doesn't equal the sum of
//     its parts' marks
//   - a maths-study/exams/<CODE>/progress.md missing a row for a module
//     data.js knows about (the "module-count bug" that silently hid modules
//     on the site until progress.md was hand-expanded)
//   - duplicate module ids within a subject, or duplicate question ids
//
// Run locally: node scripts/validate-content.mjs
// Runs automatically in CI on any push/PR touching the files above -- see
// .github/workflows/validate-content.yml.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import Module from "node:module";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");

const errors = [];
const warnings = [];
const fail = (msg) => errors.push(msg);
const warn = (msg) => warnings.push(msg);

// data.js/questions.js are plain browser scripts (const SUBJECTS = {...}),
// not modules -- compile them the same way this repo's scratch-verification
// scripts have all along: append a module.exports line and run through
// Module._compile so a real syntax/runtime error surfaces clearly.
function loadBrowserScript(relPath, exportNames) {
  const file = path.join(repoRoot, relPath);
  const src = readFileSync(file, "utf8");
  const m = new Module(file);
  m.filename = file;
  m.paths = Module._nodeModulePaths(path.dirname(file));
  m._compile(`${src}\nmodule.exports = { ${exportNames.join(",")} };`, file);
  return m.exports;
}

let SUBJECTS = {};
let MODULES = {};
let QUESTIONS = {};
let DRILLS = {};
let DIAGRAMS = {};

try {
  ({ SUBJECTS, MODULES } = loadBrowserScript("docs/data.js", ["SUBJECTS", "MODULES"]));
} catch (e) {
  fail(`docs/data.js: failed to parse/execute -- ${e.message}`);
}
try {
  ({ QUESTIONS } = loadBrowserScript("docs/questions.js", ["QUESTIONS"]));
} catch (e) {
  fail(`docs/questions.js: failed to parse/execute -- ${e.message}`);
}
try {
  ({ DIAGRAMS } = loadBrowserScript("docs/diagrams.js", ["DIAGRAMS"]));
} catch (e) {
  fail(`docs/diagrams.js: failed to parse/execute -- ${e.message}`);
}
try {
  ({ DRILLS } = loadBrowserScript("docs/drills.js", ["DRILLS"]));
} catch (e) {
  fail(`docs/drills.js: failed to parse/execute -- ${e.message}`);
}

// Foundations (FM, FS) have the same shapes as data.js and drills.js, and
// the site merges them in the same way, so every check below covers them
// too. Their modules also carry a `lesson`, checked on its own below.
try {
  const F = loadBrowserScript("docs/foundations.js", [
    "FOUNDATIONS",
    "FOUNDATION_SUBJECTS",
    "FOUNDATION_MODULES",
    "FOUNDATION_DRILLS",
  ]);
  for (const code of F.FOUNDATIONS) {
    if (!F.FOUNDATION_SUBJECTS[code]) fail(`foundations.js: ${code} is in FOUNDATIONS but has no FOUNDATION_SUBJECTS entry`);
    if (SUBJECTS[code]) fail(`foundations.js: ${code} clashes with an exam subject in data.js`);
  }
  Object.assign(SUBJECTS, F.FOUNDATION_SUBJECTS);
  Object.assign(MODULES, F.FOUNDATION_MODULES);
  Object.assign(DRILLS, F.FOUNDATION_DRILLS);
} catch (e) {
  fail(`docs/foundations.js: failed to parse/execute -- ${e.message}`);
}

// A syntax error means nothing below can run meaningfully -- stop here.
if (errors.length) {
  report();
  process.exit(1);
}

const LATEX_COMMANDS = [
  "text", "frac", "dfrac", "partial", "times", "sum", "sqrt", "le", "ge",
  "leq", "geq", "neq", "mid", "inf", "cdot", "cdots", "ldots", "int",
  "left", "right", "approx", "alpha", "beta", "gamma", "delta", "Delta",
  "rho", "sigma", "mu", "lambda", "pi",
];
const latexCommandRe = new RegExp(`(?<!\\\\)\\b(${LATEX_COMMANDS.join("|")})\\b`);

function checkLatexSpans(text, where, field) {
  const spans = text.match(/\$[^$]*\$/g) || [];
  for (const span of spans) {
    // \text{...} legitimately embeds free-form English prose inside a math
    // span (e.g. \text{sum assured}) -- strip correctly-escaped \text{}
    // blocks before scanning, so ordinary English words inside them (which
    // can coincidentally match a command name, like "sum" in "sum assured")
    // aren't mistaken for a missing backslash. A genuinely unescaped
    // "text{...}" has no backslash to match here, so it survives the strip
    // and still gets caught by the scan below.
    const scanned = span.replace(/\\text\{[^}]*\}/g, "");
    const m = scanned.match(latexCommandRe);
    if (m) fail(`${where}: possible unescaped LaTeX command "${m[1]}" in "${field}": ${span}`);
  }
}

// Lessons are longer HTML with display maths ($$...$$) as well as inline
// ($...$): check each kind of span, and that the $ signs pair up (an odd
// count would swallow the rest of the lesson into one broken formula).
function checkLesson(html, where) {
  const display = html.match(/\$\$[\s\S]*?\$\$/g) || [];
  display.forEach((span) => checkLatexSpans(span.slice(1, -1), where, "lesson"));
  const inline = html.replace(/\$\$[\s\S]*?\$\$/g, "");
  if ((inline.match(/\$/g) || []).length % 2) fail(`${where}: unbalanced $ signs`);
  checkLatexSpans(inline, where, "lesson");
  const open = (html.match(/<(p|h4|ul|li|div|strong|em)\b/g) || []).length;
  const close = (html.match(/<\/(p|h4|ul|li|div|strong|em)>/g) || []).length;
  if (open !== close) fail(`${where}: ${open} opening tags but ${close} closing tags`);
}

// --- flashcard content (docs/data.js, docs/foundations.js) ---
for (const [code, modules] of Object.entries(MODULES)) {
  if (!SUBJECTS[code]) warn(`${code}: has a MODULES entry but no SUBJECTS metadata`);

  const seenModuleIds = new Set();
  for (const mod of modules) {
    if (seenModuleIds.has(mod.id)) fail(`${code}/${mod.id}: duplicate module id`);
    seenModuleIds.add(mod.id);

    if (!mod.title || !mod.title.trim()) fail(`${code}/${mod.id}: missing title`);
    if (!Array.isArray(mod.cards) || !mod.cards.length) {
      warn(`${code}/${mod.id}: no flashcards`);
      continue;
    }

    if (mod.lesson !== undefined) {
      if (!String(mod.lesson).trim()) fail(`${code}/${mod.id}: empty "lesson"`);
      else checkLesson(mod.lesson, `${code}/${mod.id} lesson`);
    }

    mod.cards.forEach((card, idx) => {
      const where = `${code}/${mod.id} card #${idx + 1}`;
      if (!card.q || !card.q.trim()) fail(`${where}: missing/empty "q"`);
      if (!card.a || !card.a.trim()) fail(`${where}: missing/empty "a"`);
      if (!card.explain || !card.explain.trim()) fail(`${where}: missing/empty "explain"`);
      for (const field of ["q", "a", "explain"]) {
        if (card[field]) checkLatexSpans(card[field], where, field);
      }
    });
  }
}

// --- progress.md alignment (every module.js module needs a matching row) ---
for (const code of Object.keys(MODULES)) {
  const progressPath = path.join(repoRoot, "maths-study", "exams", code, "progress.md");
  let text;
  try {
    text = readFileSync(progressPath, "utf8");
  } catch {
    warn(`${code}: no progress.md found at maths-study/exams/${code}/progress.md`);
    continue;
  }
  const rowIds = [...text.matchAll(/^\|\s*(m\d+)\s*\|/gim)].map((m) => m[1].toLowerCase());
  const modIds = MODULES[code].map((m) => m.id);
  const missing = modIds.filter((id) => !rowIds.includes(id));
  if (missing.length) {
    fail(
      `${code}: progress.md is missing row(s) for ${missing.join(", ")} ` +
        `(data.js has ${modIds.length} modules, progress.md has ${rowIds.length} rows)`
    );
  }
}

// --- question banks (docs/questions.js) ---
for (const [code, questions] of Object.entries(QUESTIONS)) {
  const seenQuestionIds = new Set();
  for (const q of questions) {
    if (seenQuestionIds.has(q.id)) fail(`${code}/${q.id}: duplicate question id`);
    seenQuestionIds.add(q.id);

    const summed = (q.parts || []).reduce((s, p) => s + (p.marks || 0), 0);
    if (summed !== q.marks) {
      fail(`${code}/${q.id}: declared marks (${q.marks}) != summed part marks (${summed})`);
    }

    for (const part of q.parts || []) {
      for (const field of ["question", "answer"]) {
        if (part[field]) checkLatexSpans(part[field], `${code}/${q.id} ${part.label || ""}`.trim(), field);
      }
    }
  }
}

// --- diagram library (docs/diagrams.js) ---
//
// A hotspot question is unanswerable if the region it asks for isn't in the
// diagram, and that failure is invisible until someone actually opens the
// question -- exactly the class of content bug this script exists for. The
// region names are indexed here so the drill checks below can verify every
// "answer" and every "why" key against the real SVG.

const diagramRegions = {};
for (const [id, dg] of Object.entries(DIAGRAMS)) {
  const where = `diagram "${id}"`;
  if (!dg.title || !dg.title.trim()) fail(`${where}: missing title`);
  if (!dg.svg || !dg.svg.trim()) {
    fail(`${where}: missing svg`);
    continue;
  }
  const svg = dg.svg;
  if (!/^\s*<svg[\s>]/.test(svg)) fail(`${where}: svg must start with an <svg> element`);
  if (!/viewBox="/.test(svg)) fail(`${where}: svg has no viewBox, so it cannot scale responsively`);
  if (!/role="img"/.test(svg) || !/aria-label="/.test(svg)) {
    warn(`${where}: svg should carry role="img" and an aria-label describing it`);
  }

  // Hard-coded colours would survive the light/dark toggle in only one theme.
  const literalColour = svg.match(/(?:fill|stroke)="(#[0-9a-f]{3,8}|rgba?\([^)]*\))"/i);
  if (literalColour) {
    fail(`${where}: hard-coded colour ${literalColour[1]} -- use a var(--...) theme token so the diagram works in both themes`);
  }

  const regions = [...svg.matchAll(/data-region="([^"]+)"/g)].map((m) => m[1]);
  const dupe = regions.find((r, i) => regions.indexOf(r) !== i);
  if (dupe) fail(`${where}: two regions share data-region="${dupe}"`);
  if (regions.length < 2) fail(`${where}: needs at least 2 clickable regions to be worth a question`);
  diagramRegions[id] = new Set(regions);

  // Every region needs a fat transparent hit shape and a highlight, or it is
  // either untappable on a phone or gives no feedback when marked.
  const groups = svg.split(/<g class="hot"/).slice(1);
  groups.forEach((g) => {
    const name = (g.match(/data-region="([^"]+)"/) || [])[1] || "?";
    if (!/class="hot-hit/.test(g)) fail(`${where}, region "${name}": no .hot-hit target shape`);
    if (!/class="hot-mark/.test(g)) fail(`${where}, region "${name}": no .hot-mark highlight shape`);
    if (!/aria-label="/.test(g)) warn(`${where}, region "${name}": no aria-label`);
    if (!/tabindex="0"/.test(g)) warn(`${where}, region "${name}": not keyboard-focusable (needs tabindex="0")`);
  });
}

// --- drill banks (docs/drills.js) ---
//
// Beyond the structural checks (ids, ranges, required fields), these encode
// the failure modes that actually came out of the first generated batch, so
// they get caught in CI rather than by eye:
//
//   - a cloze whose blanks are interchangeable, e.g. "marginal social {{0}}
//     equals marginal social {{1}}" -- true whichever way round it is filled,
//     so it grades a coin flip
//   - an answer that leaks through its own shape: if the right option is far
//     longer than every distractor, it can be picked without being read
//   - two options that mean the same thing, so there isn't one right answer
//
// The length heuristic is a warning rather than an error: a long correct
// answer is sometimes genuinely unavoidable.

const stripTags = (s) => String(s).replace(/<[^>]+>/g, "").replace(/&[a-z]+;/gi, " ").trim();

for (const [code, items] of Object.entries(DRILLS)) {
  if (!SUBJECTS[code]) warn(`${code}: has a DRILLS entry but no SUBJECTS metadata`);
  const knownModules = new Set((MODULES[code] || []).map((m) => m.id));
  const seenIds = new Set();

  items.forEach((item, i) => {
    const where = `${code} drill ${item.id || "#" + (i + 1)}`;

    if (!item.id || !/^[a-z0-9-]+$/.test(item.id)) fail(`${where}: missing or non-slug "id"`);
    if (seenIds.has(item.id)) fail(`${where}: duplicate drill id (ids are storage keys and must never be reused)`);
    seenIds.add(item.id);

    if (!item.module) fail(`${where}: missing "module"`);
    else if (knownModules.size && !knownModules.has(item.module)) fail(`${where}: module "${item.module}" is not in data.js`);

    if (!item.explain || !stripTags(item.explain)) fail(`${where}: missing/empty "explain"`);
    if (!["mcq", "multi", "cloze", "hotspot"].includes(item.type)) {
      fail(`${where}: unknown type "${item.type}"`);
      return;
    }

    for (const field of ["q", "text", "explain"]) {
      if (item[field]) checkLatexSpans(item[field], where, field);
    }

    if (item.type === "mcq" || item.type === "multi") {
      if (!Array.isArray(item.options) || item.options.length < 3) {
        fail(`${where}: needs at least 3 options`);
        return;
      }
      if (!item.q || !stripTags(item.q)) fail(`${where}: missing/empty "q"`);

      const texts = item.options.map(stripTags);
      const dupe = texts.find((t, j) => texts.indexOf(t) !== j);
      if (dupe) fail(`${where}: two options have identical text ("${dupe.slice(0, 60)}")`);

      if (item.type === "mcq" && !(Number.isInteger(item.correct) && item.correct >= 0 && item.correct < item.options.length)) {
        fail(`${where}: "correct" must be an option index`);
        return;
      }
      if (item.type === "multi") {
        if (!Array.isArray(item.correct) || !item.correct.length) {
          fail(`${where}: "correct" must be a non-empty array of option indices`);
          return;
        }
        if (item.correct.some((c) => !Number.isInteger(c) || c < 0 || c >= item.options.length)) {
          fail(`${where}: "correct" contains an out-of-range option index`);
          return;
        }
        if (new Set(item.correct).size !== item.correct.length) fail(`${where}: "correct" repeats an index`);
        if (item.correct.length === item.options.length) fail(`${where}: every option is correct, so the item tests nothing`);
      }
      const correctIdx = item.type === "mcq" ? [item.correct] : item.correct;

      // every wrong option in an mcq needs its "why" -- that explanation is
      // the reason to prefer this format over a flashcard
      if (item.type === "mcq") {
        const missing = item.options.map((_, j) => j).filter((j) => j !== item.correct && !(item.why && item.why[j]));
        if (missing.length) fail(`${where}: no "why" for distractor(s) ${missing.join(", ")}`);
        Object.keys(item.why || {}).forEach((k) => {
          if (Number(k) === item.correct) fail(`${where}: "why" has an entry for the CORRECT option ${k}`);
          if (!item.options[Number(k)]) fail(`${where}: "why" references a non-existent option ${k}`);
        });
      }

      // shape leak: is the right answer conspicuously longer than the rest?
      const rightLens = correctIdx.map((c) => texts[c].length);
      const wrongLens = texts.filter((_, j) => !correctIdx.includes(j)).map((t) => t.length);
      if (wrongLens.length && rightLens.length) {
        const meanWrong = wrongLens.reduce((a, b) => a + b, 0) / wrongLens.length;
        const meanRight = rightLens.reduce((a, b) => a + b, 0) / rightLens.length;
        if (meanRight > meanWrong * 1.7 && meanRight - meanWrong > 25) {
          warn(
            `${where}: correct option averages ${Math.round(meanRight)} chars vs ${Math.round(meanWrong)} for the distractors -- may be guessable from length alone`
          );
        }
      }
    }

    if (item.type === "hotspot") {
      if (!item.q || !stripTags(item.q)) fail(`${where}: missing/empty "q"`);
      const regions = diagramRegions[item.diagram];
      if (!regions) {
        fail(`${where}: diagram "${item.diagram}" is not in docs/diagrams.js`);
        return;
      }
      if (!item.answer) fail(`${where}: missing "answer"`);
      else if (!regions.has(item.answer)) {
        fail(`${where}: answer "${item.answer}" is not a region of diagram "${item.diagram}" (has: ${[...regions].join(", ")})`);
      }
      Object.keys(item.why || {}).forEach((k) => {
        if (k === item.answer) fail(`${where}: "why" has an entry for the CORRECT region "${k}"`);
        else if (!regions.has(k)) fail(`${where}: "why" references region "${k}", which diagram "${item.diagram}" does not have`);
      });
      // Not every region needs a why -- some are far-fetched for a given
      // question -- but with none at all a wrong click teaches nothing.
      if (!item.why || !Object.keys(item.why).length) {
        warn(`${where}: no "why" entries, so a wrong click gets no explanation`);
      }
    }

    if (item.type === "cloze") {
      if (!item.text || !stripTags(item.text)) fail(`${where}: missing/empty "text"`);
      const marks = [...String(item.text).matchAll(/\{\{(\d+)\}\}/g)].map((m) => Number(m[1]));
      if (!Array.isArray(item.blanks) || !item.blanks.length) {
        fail(`${where}: missing "blanks"`);
        return;
      }
      if (marks.length !== item.blanks.length) {
        fail(`${where}: text has ${marks.length} {{n}} marker(s) but ${item.blanks.length} blank(s)`);
      }
      const wantMarks = item.blanks.map((_, j) => j).join(",");
      if ([...marks].sort((a, b) => a - b).join(",") !== wantMarks) {
        fail(`${where}: {{n}} markers must be 0..${item.blanks.length - 1}, each exactly once`);
      }

      item.blanks.forEach((b, j) => {
        if (!Array.isArray(b.options) || b.options.length < 3) fail(`${where} blank ${j}: needs at least 3 token options`);
        if (!b.answer) fail(`${where} blank ${j}: missing "answer"`);
        else if (!(b.options || []).includes(b.answer)) fail(`${where} blank ${j}: "answer" is not one of its options`);
        if (b.options && new Set(b.options).size !== b.options.length) fail(`${where} blank ${j}: repeated token option`);
      });

      // interchangeable blanks: each one's answer also sits in the other's
      // tray, so swapping them still reads as correct
      for (let x = 0; x < item.blanks.length; x++) {
        for (let y = x + 1; y < item.blanks.length; y++) {
          const bx = item.blanks[x];
          const by = item.blanks[y];
          if ((bx.options || []).includes(by.answer) && (by.options || []).includes(bx.answer)) {
            fail(
              `${where}: blanks ${x} and ${y} are interchangeable -- each one's answer appears in the other's options, so the item can be satisfied both ways round`
            );
          }
        }
      }
    }
  });
}

function report() {
  if (warnings.length) {
    console.log(`${warnings.length} warning(s):`);
    for (const w of warnings) console.log(`  - ${w}`);
  }
  if (errors.length) {
    console.log(`\n${errors.length} error(s):`);
    for (const e of errors) console.log(`  - ${e}`);
  } else {
    console.log(`\nAll content checks passed${warnings.length ? ` (${warnings.length} warning(s) above)` : ""}.`);
  }
}

report();
process.exit(errors.length ? 1 : 0);
