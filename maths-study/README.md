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
├── modules/m01/{notes.md,exercises.md,solutions.md,gaps.md}
├── concepts/{concept-index.md,definitions/}
├── flashcards/deck.md
├── review/{weekly-review.md,cumulative-gaps.md}
└── notebooks/
```

## Quick Start

If you are new to Obsidian:

- **Obsidian** is a notes app that works directly on local Markdown files (`.md`).
- A **vault** is just a folder on your computer that Obsidian treats as one workspace.
- In this repo, `maths-study/` is the vault folder.

1. Install Obsidian from [obsidian.md](https://obsidian.md/) and open the app.
2. In Obsidian, choose **Open folder as vault**.
3. Select this folder: `c:\Users\Danha\source\repos\Actuarial_Study\maths-study`.
4. Once it opens, use the left file pane to browse notes in `exams/`.
5. Pick your current exam folder in `exams/`.
6. Update `CLAUDE.md` with the exam/session context.
7. Study chapter-by-chapter inside that exam folder.
8. Update both the exam `progress.md` and root `progress.md` after each session.

## Past Papers Workflow

Past papers are now handled as a two-layer data system:

1. `resources/past-papers/raw/` keeps canonical source files.
2. `resources/past-papers/processed/` keeps markdown derivatives for search and retrieval.
3. `resources/past-papers/index/` stores metadata and audit indexes.

### One-Time Setup

Run these commands from the repository root:

```powershell
git lfs install
powershell -ExecutionPolicy Bypass -File .\maths-study\tools\past-papers\Import-PastPapers.ps1
powershell -ExecutionPolicy Bypass -File .\maths-study\tools\past-papers\Build-PastPapersIndex.ps1
```

### Optional Conversion Pass

To build markdown derivatives from indexed sources:

```powershell
powershell -ExecutionPolicy Bypass -File .\maths-study\tools\past-papers\Convert-PastPapersToMarkdown.ps1
```

If conversion tools are not installed, stub markdown files are created with metadata so QA can proceed incrementally.
