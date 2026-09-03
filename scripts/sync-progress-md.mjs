#!/usr/bin/env node
// One-directional sync: Supabase (module_status table) -> progress.md files.
//
// Once a user is signed in on the study site, Supabase is the live source of
// truth for module status — the site never reads status back out of git.
// This script mirrors that status into each exam's maths-study/exams/<CODE>/
// progress.md so the repo stays a readable, greppable record of it.
//
// Only the Status column of the "Module Progress" table is touched. The
// Session Log section and the Notes column are left exactly as they are —
// neither is tracked in Supabase, so there's nothing there for this script
// to overwrite or reconcile.
//
// This is deliberately one-directional. If someone hand-edits a Status cell
// in progress.md (directly, or via a study-session chat), the next run of
// this script overwrites it back to whatever Supabase says — silently, by
// design, so there's never a "which one wins" conflict. Each file carries a
// generated-content notice saying so; see upsertTopNote() below.
//
// Requires two environment variables (never commit either of these):
//   SUPABASE_URL
//   SUPABASE_SERVICE_ROLE_KEY
//
// The service_role key bypasses Row Level Security, which is exactly why it
// must never appear in the site's client-side code (docs/config.js uses the
// separate, RLS-restricted anon key instead). This script only ever runs
// server-side: as a GitHub Action (see .github/workflows/sync-progress.yml,
// key stored in repo secrets) or locally on demand. It must never be ported
// into docs/ or run from a browser.
//
// Usage:
//   SUPABASE_URL=https://xxxx.supabase.co \
//   SUPABASE_SERVICE_ROLE_KEY=eyJ... \
//   node scripts/sync-progress-md.mjs

import { readFile, writeFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error("Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY before running this script.");
  process.exit(1);
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const EXAMS_ROOT = path.resolve(__dirname, "..", "maths-study", "exams");

const NOTE_MARKER = "AUTO-GENERATED STATUS";
const GENERATED_NOTE = [
  `<!-- ${NOTE_MARKER}: the Status column in the Module Progress table below`,
  "     is mirrored from Supabase by scripts/sync-progress-md.mjs, run on a",
  "     schedule by .github/workflows/sync-progress.yml. It is overwritten on",
  "     every sync -- change module status on the study site, not here; a",
  "     hand-edit to Status here will be silently replaced next sync.",
  "     Session Log entries and the Notes column are untouched by the sync",
  "     and safe to edit normally. -->",
].join("\n");

async function fetchAllStatuses() {
  const url = `${SUPABASE_URL.replace(/\/$/, "")}/rest/v1/module_status?select=exam_code,module_id,status`;
  const res = await fetch(url, {
    headers: { apikey: SERVICE_KEY, Authorization: `Bearer ${SERVICE_KEY}` },
  });
  if (!res.ok) {
    throw new Error(`Supabase fetch failed (${res.status}): ${await res.text()}`);
  }
  const rows = await res.json();
  const byExam = {};
  for (const row of rows) {
    if (!byExam[row.exam_code]) byExam[row.exam_code] = {};
    byExam[row.exam_code][row.module_id] = row.status;
  }
  return byExam;
}

function upsertTopNote(text) {
  if (text.includes(NOTE_MARKER)) return text;
  const lines = text.split("\n");
  const h1Index = lines.findIndex((l) => l.startsWith("# "));
  const insertAt = h1Index === -1 ? 0 : h1Index + 1;
  lines.splice(insertAt, 0, "", GENERATED_NOTE);
  return lines.join("\n");
}

function applyStatuses(text, statuses) {
  const rowRe = /^\|\s*(m\d+)\s*\|([^|]*)\|([^|]*)\|?\s*$/i;
  const lines = text.split("\n").map((line) => {
    const m = line.match(rowRe);
    if (!m) return line;
    const moduleId = m[1].toLowerCase();
    if (!(moduleId in statuses)) return line;
    const newStatus = statuses[moduleId];
    if (m[2].trim() === newStatus) return line;
    return `|${m[1]}|${newStatus}|${m[3]}|`;
  });
  return lines.join("\n");
}

async function main() {
  const statusesByExam = await fetchAllStatuses();
  const entries = await readdir(EXAMS_ROOT, { withFileTypes: true });
  let updated = 0;

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const code = entry.name;
    const filePath = path.join(EXAMS_ROOT, code, "progress.md");

    let original;
    try {
      original = await readFile(filePath, "utf8");
    } catch {
      continue; // no progress.md here — nothing to sync
    }

    const withNote = upsertTopNote(original);
    const final = applyStatuses(withNote, statusesByExam[code] || {});

    if (final !== original) {
      await writeFile(filePath, final, "utf8");
      updated++;
      console.log(`Updated ${code}/progress.md`);
    }
  }

  console.log(`Done. ${updated} file(s) updated.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
