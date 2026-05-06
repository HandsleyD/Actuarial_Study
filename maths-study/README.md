# AI-Assisted Actuarial Study Repo

This folder is structured for **multi-exam IFoA study** (UK route), with a complete study workspace per exam.

## Structure

```text
maths-study/
├── CLAUDE.md
├── README.md
├── progress.md
├── exams/
│   ├── CM1/
│   ├── CM2/
│   ├── CS1/
│   ├── CS2/
│   ├── CB1/
│   ├── CB2/
│   ├── CB3/
│   ├── CP1/
│   ├── CP2/
│   ├── CP3/
│   ├── SP2/
│   ├── SP4/
│   └── SA4/
└── ifoa-exam-overview.md
```

Each exam folder contains the same study scaffold:

```text
EXAM/
├── README.md
├── progress.md
├── chapters/ch01/{notes.md,exercises.md,solutions.md,gaps.md}
├── concepts/{concept-index.md,definitions/}
├── flashcards/deck.md
├── review/{weekly-review.md,cumulative-gaps.md}
└── notebooks/
```

## Quick Start
1. Open `maths-study` in Obsidian as a vault.
2. Pick your current exam folder in `exams/`.
3. Update `CLAUDE.md` with the exam/session context.
4. Study chapter-by-chapter inside that exam folder.
5. Update both the exam `progress.md` and root `progress.md` after each session.
