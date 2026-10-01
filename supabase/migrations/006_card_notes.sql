-- Migration 006 — personal notes and flags on flashcards
--
-- Run this ONCE in the Supabase SQL editor (Project → SQL Editor → New query →
-- paste → Run), AFTER supabase/schema.sql and the earlier migrations.
-- This file only ADDS a table, it doesn't touch any existing one, so it's safe
-- on a project that already has data. Safe to re-run: every statement is guarded.
--
-- Until this has been run, notes and flags still work — they just stay on the
-- device (queued for upload) instead of syncing across devices, exactly as
-- drills did before 003.
--
-- card_note: one row per (user, exam, module, card) the user has written a
-- note on or flagged. Keyed on card_idx like flashcard_mastery and
-- flashcard_srs: the array index of the card in docs/data.js /
-- docs/foundations.js, which is stable because cards are only ever appended.
--   note        the user's own text, shown under the answer (empty = no note)
--   flagged     true = in the "Flagged cards" review deck
--   updated_at  when the user made the change on their device; uploads only
--               overwrite a row with an older updated_at
-- Clearing a note and unflagging keeps the row (empty note, flagged false)
-- rather than deleting it, so the clear syncs to other devices like any
-- other change.

create table if not exists public.card_note (
  user_id     uuid not null references auth.users(id) on delete cascade,
  exam_code   text not null,
  module_id   text not null,
  card_idx    integer not null check (card_idx >= 0),
  note        text not null default '' check (char_length(note) <= 2000),
  flagged     boolean not null default false,
  updated_at  timestamptz not null default now(),
  primary key (user_id, exam_code, module_id, card_idx)
);

alter table public.card_note enable row level security;

drop policy if exists "card_note: owner full access" on public.card_note;
create policy "card_note: owner full access"
  on public.card_note
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create index if not exists card_note_user_exam_idx on public.card_note (user_id, exam_code);
