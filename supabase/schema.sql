-- Actuarial Study Progress — Supabase schema
--
-- Run this once in the Supabase SQL editor (Project → SQL Editor → New query)
-- on a fresh project. Safe to re-run: every statement is guarded so it won't
-- error on a table/policy that already exists.
--
-- Three tables, one per kind of progress the site tracks, all keyed by the
-- signed-in user (auth.uid()) plus an exam code:
--   module_status      — "Not started" / "In progress" / "Done" per module
--   flashcard_mastery   — per-card Sufficient/Insufficient mark
--   study_streak        — daily study-streak counter
--
-- Row Level Security is what actually protects this data — the app talks to
-- Supabase using the public anon key, which by itself grants no special
-- access. Each policy below restricts a user to rows where user_id matches
-- their own auth.uid(), so one signed-in user can never read or write
-- another's progress, however the request is crafted.

create table if not exists public.module_status (
  user_id     uuid not null references auth.users(id) on delete cascade,
  exam_code   text not null,
  module_id   text not null,
  status      text not null,
  updated_at  timestamptz not null default now(),
  primary key (user_id, exam_code, module_id)
);

create table if not exists public.flashcard_mastery (
  user_id     uuid not null references auth.users(id) on delete cascade,
  exam_code   text not null,
  module_id   text not null,
  card_idx    integer not null,
  mastered    boolean not null,
  updated_at  timestamptz not null default now(),
  primary key (user_id, exam_code, module_id, card_idx)
);

create table if not exists public.study_streak (
  user_id     uuid primary key references auth.users(id) on delete cascade,
  last_date   date,
  count       integer not null default 0,
  updated_at  timestamptz not null default now()
);

alter table public.module_status enable row level security;
alter table public.flashcard_mastery enable row level security;
alter table public.study_streak enable row level security;

drop policy if exists "module_status: owner full access" on public.module_status;
create policy "module_status: owner full access"
  on public.module_status
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "flashcard_mastery: owner full access" on public.flashcard_mastery;
create policy "flashcard_mastery: owner full access"
  on public.flashcard_mastery
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "study_streak: owner full access" on public.study_streak;
create policy "study_streak: owner full access"
  on public.study_streak
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Helpful for the "load everything for this exam" queries the site makes on
-- every subject/module page view.
create index if not exists module_status_user_exam_idx on public.module_status (user_id, exam_code);
create index if not exists flashcard_mastery_user_exam_idx on public.flashcard_mastery (user_id, exam_code);
