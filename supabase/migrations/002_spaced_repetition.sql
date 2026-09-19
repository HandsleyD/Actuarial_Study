-- Migration 002 — spaced-repetition review schedule for flashcards
--
-- Run this ONCE in the Supabase SQL editor (Project → SQL Editor → New query →
-- paste → Run), AFTER supabase/schema.sql. schema.sql is effectively
-- migration 001 and is already live; this file only ADDS a table, it doesn't
-- touch any existing one, so it's safe on a project that already has data.
-- Safe to re-run: every statement is guarded.
--
-- Until this has been run, the site still schedules reviews — they just stay
-- on the device (queued for upload) instead of syncing across devices.
--
-- flashcard_srs: one row per (user, exam, module, card) the user has ever
-- scored, holding that card's review schedule. The scheduling rules live in
-- docs/srs.js; the columns mirror its per-card state:
--   reps           correct reviews in a row since the last miss
--   interval_days  current gap between reviews (0 = relearning, due today)
--   ease           multiplier applied to the gap after each correct review
--   due_date       local calendar date the card is next due
--   lapses         lifetime count of "Insufficient" marks (drives the
--                  dashboard's weak-areas view)
--   reviews        lifetime count of scored reviews
--   last_reviewed  date of the most recent scored review (null for cards
--                  whose schedule was seeded from a pre-existing star)
--
-- flashcard_mastery (the star) is unchanged and still written alongside this.

create table if not exists public.flashcard_srs (
  user_id        uuid not null references auth.users(id) on delete cascade,
  exam_code      text not null,
  module_id      text not null,
  card_idx       integer not null,
  reps           integer not null default 0,
  interval_days  integer not null default 0,
  ease           numeric(4,2) not null default 2.5,
  due_date       date not null,
  lapses         integer not null default 0,
  reviews        integer not null default 0,
  last_reviewed  date,
  updated_at     timestamptz not null default now(),
  primary key (user_id, exam_code, module_id, card_idx)
);

alter table public.flashcard_srs enable row level security;

drop policy if exists "flashcard_srs: owner full access" on public.flashcard_srs;
create policy "flashcard_srs: owner full access"
  on public.flashcard_srs
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create index if not exists flashcard_srs_user_exam_idx on public.flashcard_srs (user_id, exam_code);
create index if not exists flashcard_srs_user_due_idx on public.flashcard_srs (user_id, due_date);
