# Study content

Every subject's flashcards, practice questions and drills live here, one file per subject: `CB2.js`, `CM1.js`, … `FM.js`, `FS.js`. The site fetches a subject's file only when a page needs its text (a module, a mixed session, a review run, drills, practice questions, search), so the first page load doesn't download all ~4 MB of it.

| File | What it holds | Edited by |
|---|---|---|
| `docs/data.js` | `SUBJECTS` (name and blurb for every exam and the two Foundations courses) and `FOUNDATIONS` | hand |
| `docs/content/<CODE>.js` | one subject's modules, cards, questions and drills | hand |
| `docs/catalog.js` | module titles, descriptions and card/drill/question counts for every subject, plus each content file's version | **generated** |
| `docs/diagrams.js` | SVG diagrams for hotspot drills (loaded with any subject that uses them) | hand |

The home page, route map, dashboard, planner and due-card counts run entirely from `data.js` and `catalog.js`, which load up front.

## Editing content

1. Edit `docs/content/<CODE>.js`.
2. Rebuild the catalog:

   ```sh
   node scripts/build-catalog.mjs
   ```

   This rewrites `docs/catalog.js` (titles, counts, and a hash of each content file) and bumps `catalog.js?v=` in `docs/index.html`. The hash in each file's URL is what busts browser and offline caches, so there's no `?v=` to bump by hand for content.
3. Check it:

   ```sh
   node scripts/validate-content.mjs
   ```

   CI runs the same check, and fails if the catalog is out of date (`node scripts/build-catalog.mjs --check`).

Commit the content file, `catalog.js` and `index.html` together.

To add a subject: give it a `SUBJECTS` entry in `data.js`, create `docs/content/<CODE>.js`, add its `maths-study/exams/<CODE>/progress.md`, and rebuild. The catalog lists subjects in `SUBJECTS` order.

## File format

Each file is a plain script that hands its subject's content to the site:

```js
registerContent("CB2", {
  modules: [ /* ... */ ],
  questions: [ /* ... */ ], // optional
  drills: [ /* ... */ ],    // optional
});
```

The code must match the file name. Text fields are HTML; maths goes in `$...$` (inline) or `$$...$$` (display), with LaTeX backslashes doubled in the source (`\\frac`), so the string the browser sees has one.

### Modules and flashcards

```js
{
  id: "m01",            // must match a row in maths-study/exams/<CODE>/progress.md
  title: "...",
  description: "...",   // shown on the subject page
  lesson: "<p>...</p>", // Foundations only: an HTML explainer shown above the cards
  cards: [
    { q: "question", a: "answer", explain: "why, shown after the reveal" },
  ],
}
```

**Cards are append-only.** A card's identity is its position: progress (mastery stars and review schedules) is stored against (subject, module id, index in `cards`). Inserting, deleting or reordering cards silently moves every later card's progress onto a different card. To change a card, edit its text in place; to add one, add it to the end of the module. Module ids are permanent for the same reason.

### Practice questions

```js
{ id: "cb2-q1", title: "...", modules: "Modules 2, 3, 8", marks: 12,
  parts: [{ label: "(i)", command: "Define", marks: 2, question: "...", answer: "...", note: "examiner's-eye comment" }] }
```

`marks` must equal the sum of the parts' marks.

These are original questions, not IFoA past papers with the numbers changed. They're written from scratch to the same syllabus objectives, depth, command verbs ("Define", "Calculate", "Discuss", "Comment on") and mix of bookwork and application marks a real paper uses, but the scenarios, numbers and wording are new. Syllabus content and technique aren't copyrightable; a real paper's text is, and this site is public, so real questions are referred to by paper and question number, never reproduced. Real past papers and examiners' reports are on the IFoA's Virtual Learning Environment (student/member login).

### Drills

Objectively marked items (multiple choice, select-all, fill-the-gap, click-the-diagram), rendered by `renderDrillView()` in `app.js` at `#/<CODE>/drill` or `#/<CODE>/drill/<module>`.

Drills are a separate track from flashcards: a result never touches flashcard mastery, the star total or the Associate/Fellow rank, which are earned by self-graded review. They share the scheduler (`srs.js`) but report accuracy separately. Results are stored per item `id` (see `supabase/migrations/003_drills.sql`), which is why drills have stable string ids rather than positions, and can be reordered freely.

Every item has:

| Field | |
|---|---|
| `id` | stable, never reused or renumbered: the storage key |
| `type` | `"mcq"`, `"multi"`, `"cloze"` or `"hotspot"` |
| `module` | the module it drills |
| `explain` | why the right answer is right; required |

Then, by type:

- `mcq`: `q`, `options[]`, `correct` (index into options), `why{}` keyed by the index of each wrong option. Explaining why a distractor is wrong is the value of the format, so every distractor needs one.
- `multi`: `q`, `options[]`, `correct[]` (indices).
- `cloze`: `text` with `{{0}}`, `{{1}}` placeholders, and `blanks[]` giving each blank's `answer` and the `options` offered for it. Tokens are picked from a tray rather than typed, so marking is exact and it works on a phone.
- `hotspot`: `q`, `diagram` (an id in `docs/diagrams.js`), `answer` (a `data-region` of that diagram), `why{}` keyed by region.

Distractors should be real confusions (most come from the `explain` notes on the flashcards), not filler. `validate-content.mjs` catches interchangeable cloze blanks, duplicate options, and correct answers that give themselves away by length.

## Offline

`sw.js` caches the app shell on install. Once the first page is up, `app.js` asks it to fetch every content file in the background, so the whole site works offline after one visit. A rebuilt catalog gives an edited file a new `?v=` URL, which the service worker fetches and uses in place of the old copy.
# Calculation drills

`docs/calc-drills.js` holds the numerical drill templates and calculation helpers.
It loads with the app shell; its items join a subject's drills when that subject
loads. The generated catalog includes these items in its drill counts. After
editing calculation drills, also run `node scripts/build-catalog.mjs`.
