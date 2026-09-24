-- Migration 005 — exam results (passed / exempt) per subject
--
-- Run this ONCE in the Supabase SQL editor (Project → SQL Editor → New query →
-- paste → Run), AFTER supabase/schema.sql and the earlier migrations.
-- This file only ADDS a table, it doesn't touch any existing one, so it's safe
-- on a project that already has data. Safe to re-run: every statement is guarded.
--
-- Until this has been run, results still work — they just stay on the device
-- (queued for upload) instead of syncing across devices.
--
-- subject_result: one row per (user, subject) the user has recorded a result
-- for. Separate from module_status on purpose: module status tracks
-- revision, this tracks the exam, and only this counts towards Associate and
-- Fellow.
--   status      'passed' | 'exempt' | 'none' ('none' = cleared; kept as a row
--               so clearing a result syncs to other devices)
--   sitting     'YYYY-MM' of the sitting it was passed at, when known
--   updated_at  when the user made the change on their device; uploads only
--               overwrite a row with an older updated_at

create table if not exists public.subject_result (
  user_id     uuid not null references auth.users(id) on delete cascade,
  exam_code   text not null,
  status      text not null check (status in ('passed', 'exempt', 'none')),
  sitting     text check (sitting is null or sitting ~ '^[0-9]{4}-(04|09)$'),
  updated_at  timestamptz not null default now(),
  primary key (user_id, exam_code)
);

alter table public.subject_result enable row level security;

drop policy if exists "subject_result: owner full access" on public.subject_result;
create policy "subject_result: owner full access"
  on public.subject_result
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
