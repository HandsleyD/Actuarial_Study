#!/usr/bin/env node
// Regenerates docs/catalog.js from docs/content/*.js and docs/data.js, and
// points docs/index.html at the new catalog (catalog.js?v=<hash>).
//
// Run it after editing any content file:
//   node scripts/build-catalog.mjs
//
// With --check it writes nothing and exits 1 if either file is out of date,
// which is how CI (and scripts/validate-content.mjs) catches a content edit
// that wasn't followed by a rebuild. See docs/content/README.md.

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { buildCatalog } from "./content-lib.mjs";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const check = process.argv.includes("--check");
const lf = (s) => s.replace(/\r\n/g, "\n");

const { errors, catalog, index, indexOut } = buildCatalog(repoRoot);
if (errors.length) {
  console.log(errors.map((e) => `  - ${e}`).join("\n"));
  process.exit(1);
}

const catalogFile = path.join(repoRoot, "docs/catalog.js");
let current = "";
try {
  current = readFileSync(catalogFile, "utf8");
} catch {
  /* first run */
}
const stale = [];
if (lf(current) !== catalog) stale.push("docs/catalog.js");
if (lf(index) !== lf(indexOut)) stale.push("docs/index.html");

if (check) {
  if (stale.length) {
    console.log(`Out of date: ${stale.join(", ")}. Run: node scripts/build-catalog.mjs`);
    process.exit(1);
  }
  console.log("docs/catalog.js is up to date.");
} else {
  if (stale.includes("docs/catalog.js")) writeFileSync(catalogFile, catalog);
  if (stale.includes("docs/index.html")) writeFileSync(path.join(repoRoot, "docs/index.html"), indexOut);
  console.log(stale.length ? `Updated ${stale.join(" and ")}.` : "Already up to date.");
}
