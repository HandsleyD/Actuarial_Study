#!/usr/bin/env node
// Validates docs/data.js and docs/questions.js against the class of content
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

// --- flashcard content (docs/data.js) ---
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
