#!/usr/bin/env node
// Proves the content split lost nothing: compares the old single-file data
// (docs/data.js, questions.js, drills.js and foundations.js as they were at
// the commit before the split) with the new layout (docs/data.js,
// docs/content/<CODE>.js and the generated docs/catalog.js), subject by
// subject.
//
// Card progress is keyed on (subject, module id, card index), so for every
// subject this checks that the modules come out in the same order with the
// same ids, and every card at the same index with identical fields. Questions
// and drills are compared the same way, and the catalog's titles,
// descriptions and counts are checked against the old data too.
//
//   node scripts/check-content-split.mjs            # against the pre-split commit
//   node scripts/check-content-split.mjs --ref=<git ref>
//
// Needs the git history (a shallow CI checkout won't have the old commit).

import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { runBrowserScript, loadSubjects, loadContentFiles } from "./content-lib.mjs";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
// main just before the split (the last commit with docs/questions.js)
const SPLIT_BASE = "6ddb339";
const ref = (process.argv.find((a) => a.startsWith("--ref=")) || `--ref=${SPLIT_BASE}`).slice(6);

const gitShow = (file) => execFileSync("git", ["show", `${ref}:${file}`], { cwd: repoRoot, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
const old = {
  ...runBrowserScript(gitShow("docs/data.js"), "old/data.js", ["SUBJECTS", "MODULES"]),
  ...runBrowserScript(gitShow("docs/questions.js"), "old/questions.js", ["QUESTIONS"]),
  ...runBrowserScript(gitShow("docs/drills.js"), "old/drills.js", ["DRILLS"]),
  ...runBrowserScript(gitShow("docs/foundations.js"), "old/foundations.js", [
    "FOUNDATIONS",
    "FOUNDATION_SUBJECTS",
    "FOUNDATION_MODULES",
    "FOUNDATION_DRILLS",
  ]),
};
// The site merged foundations into the exam globals at start-up; do the same.
const oldSubjects = { ...old.SUBJECTS, ...old.FOUNDATION_SUBJECTS };
const oldModules = { ...old.MODULES, ...old.FOUNDATION_MODULES };
const oldDrills = { ...old.DRILLS, ...old.FOUNDATION_DRILLS };

const neu = loadSubjects(repoRoot);
const { content, errors } = loadContentFiles(repoRoot);
const { CATALOG } = runBrowserScript(readFileSync(path.join(repoRoot, "docs/catalog.js"), "utf8"), "catalog.js", ["CATALOG"]);

const problems = [...errors];

// Structural equality that ignores which realm (vm context) an object came
// from. Returns the path of the first difference, or null.
function diff(a, b, at) {
  if (Array.isArray(a) || Array.isArray(b)) {
    if (!Array.isArray(a) || !Array.isArray(b)) return `${at}: array vs non-array`;
    if (a.length !== b.length) return `${at}: length ${a.length} vs ${b.length}`;
    for (let i = 0; i < a.length; i++) {
      const d = diff(a[i], b[i], `${at}[${i}]`);
      if (d) return d;
    }
    return null;
  }
  if (a && b && typeof a === "object" && typeof b === "object") {
    const ka = Object.keys(a);
    const kb = Object.keys(b);
    if (ka.join() !== kb.join()) return `${at}: keys [${ka}] vs [${kb}]`;
    for (const k of ka) {
      const d = diff(a[k], b[k], `${at}.${k}`);
      if (d) return d;
    }
    return null;
  }
  return Object.is(a, b) ? null : `${at}: ${JSON.stringify(a)?.slice(0, 80)} vs ${JSON.stringify(b)?.slice(0, 80)}`;
}
const expectSame = (a, b, at) => {
  const d = diff(a, b, at);
  if (d) problems.push(d);
  return !d;
};

expectSame(oldSubjects, neu.SUBJECTS, "SUBJECTS");
expectSame(old.FOUNDATIONS, neu.FOUNDATIONS, "FOUNDATIONS");

const oldCodes = Object.keys(oldModules).sort();
const newCodes = Object.keys(content).sort();
expectSame(oldCodes, newCodes, "subjects with content");
for (const code of [...Object.keys(old.QUESTIONS), ...Object.keys(oldDrills)]) {
  if (!oldModules[code]) problems.push(`${code}: old data had questions/drills but no modules`);
}

const rows = [];
for (const code of oldCodes) {
  const c = content[code];
  if (!c) continue;
  const oldMods = oldModules[code];
  const oldQs = old.QUESTIONS[code] || [];
  const oldDs = oldDrills[code] || [];
  const ok = [
    expectSame(oldMods, c.modules, `${code} modules`),
    expectSame(oldQs, c.questions, `${code} questions`),
    expectSame(oldDs, c.drills, `${code} drills`),
  ].every(Boolean);

  // the catalog must describe the old data exactly
  const cat = CATALOG[code];
  let catOk = !!cat;
  if (!cat) problems.push(`${code}: missing from docs/catalog.js`);
  else {
    const drillsBy = {};
    oldDs.forEach((d) => (drillsBy[d.module] = (drillsBy[d.module] || 0) + 1));
    catOk =
      expectSame(
        oldMods.map((m) => ({ id: m.id, title: m.title, description: m.description || "", cards: m.cards.length, drills: drillsBy[m.id] || 0 })),
        cat.modules,
        `${code} catalog modules`
      ) &&
      expectSame(oldQs.length, cat.questions, `${code} catalog question count`) &&
      expectSame(oldDs.length, cat.drills, `${code} catalog drill count`);
  }
  const cards = oldMods.reduce((n, m) => n + m.cards.length, 0);
  rows.push([code, oldMods.length, cards, oldQs.length, oldDs.length, ok && catOk ? "identical" : "DIFFERENT"]);
}

const pad = (s, n) => String(s).padEnd(n);
console.log(`Old data at ${ref} vs docs/content + docs/catalog.js:\n`);
console.log(`${pad("subject", 8)}${pad("modules", 9)}${pad("cards", 7)}${pad("questions", 11)}${pad("drills", 8)}result`);
for (const r of rows) console.log(`${pad(r[0], 8)}${pad(r[1], 9)}${pad(r[2], 7)}${pad(r[3], 11)}${pad(r[4], 8)}${r[5]}`);
const tot = rows.reduce((t, r) => [t[0] + r[1], t[1] + r[2], t[2] + r[3], t[3] + r[4]], [0, 0, 0, 0]);
console.log(`${pad("total", 8)}${pad(tot[0], 9)}${pad(tot[1], 7)}${pad(tot[2], 11)}${pad(tot[3], 8)}`);

if (problems.length) {
  console.log(`\n${problems.length} difference(s):`);
  problems.forEach((p) => console.log(`  - ${p}`));
  process.exit(1);
}
console.log(`\nAll ${rows.length} subjects identical: every module, card (in order), question and drill, plus SUBJECTS and the catalog.`);
