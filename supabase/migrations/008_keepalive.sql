-- Migration 008 — keep-alive heartbeat table
--
-- Run this ONCE in the Supabase SQL editor (Project → SQL Editor → New query →
-- paste → Run), AFTER supabase/schema.sql and the earlier migrations.
-- This file only ADDS a table, it doesn't touch any existing one, so it's safe
-- on a project that already has data. Safe to re-run: every statement is guarded.
--
-- Supabase pauses free-tier projects after about a week without activity, and
-- the daily read in sync-progress.yml isn't enough to stop the warning emails.
-- .github/workflows/supabase-keepalive.yml runs scripts/supabase-keepalive.mjs
-- every couple of days, which overwrites the one row here with the current
-- time, so the database always sees a real write.
--
-- keepalive: a single row (id = 1).
--   pinged_at  when the keep-alive job last ran
--   source     what wrote it (e.g. "github-actions"), for the curious
--
-- RLS is on with no policies, so the site's publishable key can neither read
-- nor write this table; only the Secret key the workflow uses (which bypasses
-- RLS) can.

create table if not exists public.keepalive (
  id         smallint primary key default 1 check (id = 1),
  pinged_at  timestamptz not null default now(),
  source     text not null default ''
);

alter table public.keepalive enable row level security;
