#!/usr/bin/env node
// Keep-alive write for the Supabase project.
//
// Supabase pauses free-tier projects that go about a week without activity
// and emails a warning first. The daily read in sync-progress.yml doesn't
// count, so this script makes a real write: it upserts the single row of the
// keepalive table (supabase/migrations/008_keepalive.sql) with the current
// time. Run on a schedule by .github/workflows/supabase-keepalive.yml.
//
// Requires the same two environment variables as sync-progress-md.mjs (never
// commit either of these):
//   SUPABASE_URL
//   SUPABASE_SECRET_KEY
// The keepalive table has RLS on and no policies, so only the Secret key can
// write it. Like the sync script, this only ever runs server-side.
//
// Usage:
//   SUPABASE_URL=https://xxxx.supabase.co \
//   SUPABASE_SECRET_KEY=sb_secret_... \
//   node scripts/supabase-keepalive.mjs

const SUPABASE_URL = process.env.SUPABASE_URL;
const SECRET_KEY = process.env.SUPABASE_SECRET_KEY;

if (!SUPABASE_URL || !SECRET_KEY) {
  console.error("Set SUPABASE_URL and SUPABASE_SECRET_KEY before running this script.");
  process.exit(1);
}

const pingedAt = new Date().toISOString();
const url = `${SUPABASE_URL.replace(/\/$/, "")}/rest/v1/keepalive?on_conflict=id`;
// apikey header only, for the same reason as in sync-progress-md.mjs: a
// sb_secret_... key sent as `Authorization: Bearer` is rejected as an
// invalid JWT.
const res = await fetch(url, {
  method: "POST",
  headers: {
    apikey: SECRET_KEY,
    "Content-Type": "application/json",
    Prefer: "resolution=merge-duplicates,return=minimal",
  },
  body: JSON.stringify({ id: 1, pinged_at: pingedAt, source: "github-actions" }),
});

if (!res.ok) {
  const body = await res.text();
  // PostgREST answers 404 / PGRST205 when the table doesn't exist yet.
  if (res.status === 404 || body.includes("PGRST205")) {
    console.error(
      "The keepalive table doesn't exist yet: run supabase/migrations/008_keepalive.sql " +
        "in the Supabase SQL editor (see supabase/SETUP.md, step 2b).",
    );
  }
  console.error(`Supabase keep-alive write failed (${res.status}): ${body}`);
  process.exit(1);
}

console.log(`Keep-alive written at ${pingedAt}.`);
