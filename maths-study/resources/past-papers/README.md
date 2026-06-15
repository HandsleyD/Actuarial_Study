# Past Papers Data Layer

This folder stores both original papers and processed derivatives used for study, indexing, and future mock-generation workflows.

## Layout

```text
resources/past-papers/
├── raw/                # Canonical originals copied from local archive
├── processed/          # Extracted markdown and normalized derivatives
├── index/              # Master metadata tables
└── generated-mocks/    # AI-generated questions and full mock papers
```

## Index Files

- `index/master-index.csv`: one row per source document.
- `index/question-index.csv`: one row per extracted question.
- `index/source-inventory.csv`: ingest audit log from local archive to repo raw layer.

## Scripts

Scripts are located in `../../tools/past-papers/`:

1. `Import-PastPapers.ps1`
2. `Build-PastPapersIndex.ps1`
3. `Convert-PastPapersToMarkdown.ps1`

Typical flow:

1. Import source files into `raw/`.
2. Rebuild `master-index.csv` and per-exam study files.
3. Convert selected files into markdown under `processed/`.
4. Populate `question-index.csv` during question-level QA/tagging.

## Notes

- Original binaries are kept to preserve layout fidelity and permit reprocessing.
- Markdown derivatives are for search, tagging, and AI retrieval.
- Keep generated mock content in `generated-mocks/` so source and synthetic content stay distinct.
