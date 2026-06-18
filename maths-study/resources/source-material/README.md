# Source Material Library

Use this folder for study references that the assistant should search before falling back to general knowledge.

## Purpose

- Keep open-licensed or self-authored study material close to the notes repo.
- Make answers more syllabus-aligned and consistent.
- Give each exam a local source of truth for terminology, notation, and worked explanations.

## Structure

```text
source-material/
├── README.md
├── shared/
│   └── README.md
└── exams/
    ├── README.md
    └── <EXAM_CODE>/
        └── index.md
```

## What To Store Here

- Open-licensed textbooks
- Self-authored summaries
- Formula sheets
- Glossaries
- Worked examples
- Reading indexes that point to files elsewhere in the repo

## What Not To Store Here

- Copyright-restricted commercial textbooks unless you have the right to store them here
- Large raw files with no index or description
- Duplicate copies of notes that already live in the active exam workspace

## Usage Notes

- Put cross-exam material in `shared/`.
- Put exam-specific material in `exams/<EXAM_CODE>/`.
- Add or update an `index.md` for each exam so the assistant can find the right source quickly.
- If a source uses unusual notation or assumptions, note that in the index.

## Import And Conversion Tools

For bulk updates, use the scripts in `maths-study/tools/materials/`.

From repository root:

```powershell
git lfs install
powershell -ExecutionPolicy Bypass -File .\maths-study\tools\materials\Import-Materials.ps1
powershell -ExecutionPolicy Bypass -File .\maths-study\tools\materials\Build-MaterialsIndex.ps1
powershell -ExecutionPolicy Bypass -File .\maths-study\tools\materials\Convert-MaterialsToMarkdown.ps1
```

For large imports where you want guaranteed completion first, generate metadata-first markdown:

```powershell
powershell -ExecutionPolicy Bypass -File .\maths-study\tools\materials\Convert-MaterialsToMarkdown.ps1 -ExtractContent false
```

This will produce:

- `source-material/index/source-inventory.csv`
- `source-material/index/master-index.csv`
- `source-material/processed/` markdown derivatives for retrieval/search.
