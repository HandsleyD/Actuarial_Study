-- Migration 006 — self-marked practice questions and mock papers
--
-- Run this ONCE in the Supabase SQL editor (Project → SQL Editor → New query →
-- paste → Run), AFTER supabase/schema.sql and the earlier migrations.
-- This file only ADDS tables, it doesn't touch any existing one, so it's safe
-- on a project that already has data. Safe to re-run: every statement is guarded.
--
-- Until this has been run, self-marking and mock papers still work — scores
-- just stay on the device (queued for upload) instead of syncing across devices.
--
-- question_score: one row per ATTEMPT at a practice question (docs/questions.js)
-- that the user has marked themselves, so the history is kept, not just the
-- latest mark. Attempts are only ever added, never merged, which is why the
-- key includes attempted_at: two devices can't overwrite each other's rows.
--   question_id   the question's stable string id ("cb2-q01"), as for drills
--   attempted_at  when the answers were revealed and marked, on the device
--   part_marks    the mark given for each part, in the question's part order;
--                 numeric, since examiners award half marks
--   score         sum of part_marks
--   max_marks     the question's marks when it was attempted
--   source        'practice' (the question bank) or 'mock' (a mock paper)
--
-- mock_result: one row per finished mock paper.
--   question_ids  the questions on the paper, in paper order
--   score / max_marks / pct   pct is score / max_marks x 100, so a short
--                 paper (a bank under 100 marks) is scaled to 100
--   pass_mark / pass_sitting  the latest pass mark from the examiners'
--                 reports at the time, kept so the comparison doesn't shift
--                 when a new report comes out
--   used_ms       time taken, up to the 3h15m allowance

create table if not exists public.question_score (
  user_id       uuid not null references auth.users(id) on delete cascade,
  exam_code     text not null,
  question_id   text not null,
  attempted_at  timestamptz not null,
  part_marks    numeric(5,1)[] not null,
  score         numeric(5,1) not null check (score >= 0),
  max_marks     integer not null check (max_marks > 0),
  source        text not null default 'practice' check (source in ('practice', 'mock')),
  updated_at    timestamptz not null default now(),
  primary key (user_id, exam_code, question_id, attempted_at)
);

alter table public.question_score enable row level security;

drop policy if exists "question_score: owner full access" on public.question_score;
create policy "question_score: owner full access"
  on public.question_score
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create index if not exists question_score_user_exam_idx on public.question_score (user_id, exam_code);

create table if not exists public.mock_result (
  user_id       uuid not null references auth.users(id) on delete cascade,
  exam_code     text not null,
  taken_at      timestamptz not null,
  question_ids  text[] not null,
  score         numeric(5,1) not null check (score >= 0),
  max_marks     integer not null check (max_marks > 0),
  pct           numeric(5,2) not null,
  pass_mark     integer,
  pass_sitting  text check (pass_sitting is null or pass_sitting ~ '^[0-9]{4}-[0-9]{2}$'),
  used_ms       bigint not null default 0,
  updated_at    timestamptz not null default now(),
  primary key (user_id, exam_code, taken_at)
);

alter table public.mock_result enable row level security;

drop policy if exists "mock_result: owner full access" on public.mock_result;
create policy "mock_result: owner full access"
  on public.mock_result
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
