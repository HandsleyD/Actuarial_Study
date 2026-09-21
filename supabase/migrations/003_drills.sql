-- Migration 003 — objectively-graded drills (multiple choice, select-all, cloze)
--
-- Run this ONCE in the Supabase SQL editor (Project → SQL Editor → New query →
-- paste → Run), AFTER supabase/schema.sql and 002_spaced_repetition.sql.
-- This file only ADDS a table, it doesn't touch any existing one, so it's safe
-- on a project that already has data. Safe to re-run: every statement is guarded.
--
-- Until this has been run, drills still work — results just stay on the device
-- (queued for upload) instead of syncing across devices, exactly as flashcard
-- schedules did before 002.
--
-- drill_progress: one row per (user, exam, drill item) the user has attempted.
--
-- WHY item_id text AND NOT (module_id, card_idx) LIKE flashcard_srs:
--   flashcard_mastery and flashcard_srs key on card_idx — the ARRAY INDEX of
--   the card in docs/data.js. That works only because cards are append-only:
--   inserting one mid-array would silently reassign every later card's
--   identity. Drills in docs/drills.js are expected to be reordered, split and
--   deleted as the content is reviewed, so they carry their own stable string
--   id ("cb2-m06-d01") and are keyed on that instead. Ids are never reused.
--
-- The scheduling columns mirror docs/srs.js exactly, so SRS.next() drives
-- drills and flashcards alike without a second implementation:
--   reps           correct attempts in a row since the last miss
--   interval_days  current gap between reviews (0 = relearning, due today)
--   ease           multiplier applied to the gap after each correct attempt
--   due_date       local calendar date the item is next due
--   lapses         lifetime count of wrong attempts
--   reviews        lifetime count of graded attempts
--   last_reviewed  date of the most recent graded attempt
--
-- attempts/correct are the extra pair drills need and flashcards don't:
-- because a drill is marked by the machine rather than by the user, lifetime
-- accuracy is a meaningful number, and it's what the separate drill track
-- reports instead of a mastery star. Drill results deliberately never write
-- to flashcard_mastery, so they can't move the star total or the
-- Associate/Fellow rank — those stay earned by self-graded flashcard review.

create table if not exists public.drill_progress (
  user_id        uuid not null references auth.users(id) on delete cascade,
  exam_code      text not null,
  item_id        text not null,
  reps           integer not null default 0,
  interval_days  integer not null default 0,
  ease           numeric(4,2) not null default 2.5,
  due_date       date not null,
  lapses         integer not null default 0,
  reviews        integer not null default 0,
  last_reviewed  date,
  attempts       integer not null default 0,
  correct        integer not null default 0,
  updated_at     timestamptz not null default now(),
  primary key (user_id, exam_code, item_id)
);

alter table public.drill_progress enable row level security;

drop policy if exists "drill_progress: owner full access" on public.drill_progress;
create policy "drill_progress: owner full access"
  on public.drill_progress
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create index if not exists drill_progress_user_exam_idx on public.drill_progress (user_id, exam_code);
create index if not exists drill_progress_user_due_idx on public.drill_progress (user_id, due_date);
