-- Migration 004 — exam plan (which subjects the user intends to sit when)
--
-- Run this ONCE in the Supabase SQL editor (Project → SQL Editor → New query →
-- paste → Run), AFTER supabase/schema.sql and the earlier migrations.
-- This file only ADDS a table, it doesn't touch any existing one, so it's safe
-- on a project that already has data. Safe to re-run: every statement is guarded.
--
-- Until this has been run, the planner still works — the plan just stays on
-- the device (queued for upload) instead of syncing across devices.
--
-- exam_plan: one row per user holding their whole plan as JSON:
--   { "sittings": { "2027-04": ["CS1", "CM1"], "2027-09": ["CS2"] },
--     "updatedAt": 1790000000000 }
-- Sitting ids are "YYYY-MM" (April = 04, September = 09). The plan is small
-- and always edited as a whole on one screen, so it's stored as one document
-- and merged last-write-wins on updatedAt rather than row by row.

create table if not exists public.exam_plan (
  user_id     uuid primary key references auth.users(id) on delete cascade,
  plan        jsonb not null default '{}'::jsonb,
  updated_at  timestamptz not null default now()
);

alter table public.exam_plan enable row level security;

drop policy if exists "exam_plan: owner full access" on public.exam_plan;
create policy "exam_plan: owner full access"
  on public.exam_plan
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
