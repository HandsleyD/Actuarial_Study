# Browser tests

These tests drive the real site in Chromium with [Playwright](https://playwright.dev), clicking through it as a person would. They run in CI on every pull request (`.github/workflows/browser-tests.yml`), as a required check for merging into `main`.

## Running them

```sh
npm ci                                  # once: installs Playwright and KaTeX
npx playwright install chromium         # once: the browser itself
npm run test:e2e                        # or: npx playwright test
npx playwright test drills              # one file
npx playwright test --headed --debug    # watch and step through
```

`npm test` runs the Node unit tests (`scripts/`) and then these.

## How they're set up

- **The site as deployed.** `serve.mjs` serves `docs/` exactly as GitHub Pages does, with no build step.
- **No network.** `fixtures.mjs` replaces Supabase with a signed-out stub (`signedIn(page)` signs a test user in instead, with every table empty), serves KaTeX from `node_modules`, reads each subject's `progress.md` from this checkout and skips web fonts. Sync with an account is covered by the unit tests (`scripts/test-*-sync.mjs`) instead.
- **A fixed date.** Every test runs at 10:00 on 27 September 2026, London time. That's after the September 2026 papers and before their results, with April 2027 next. A test can move the clock with `page.clock.setFixedTime(...)`, as the results-day and timed-question tests do.
- **Starting state.** `seed(page, {...})` fills localStorage before the site loads, the way the site stores a signed-out visitor's progress. For example, `seed(page, { welcomed: true, result: {...}, "status:CS1": {...} })`. `readStore(page, "plan")` reads it back.
- **No silent errors.** Any uncaught error on the page fails the test.

## What's covered

| File | Covers |
|---|---|
| `home.spec.mjs` | Subject groups, cards, ribbons, rank, streak, welcome banner |
| `subjects.spec.mjs` | Module list and status, mark all, exam results, Exam Hub link, prerequisites, Foundations pages |
| `flashcards.spec.mjs` | Reveal, grading, keyboard shortcuts, full deck, session summary, mixed sessions, due and weak-card reviews, Foundations lessons and their maths |
| `drills.spec.mjs` | Multiple choice, select-all, fill-the-gap and diagram questions, right and wrong answers, run summary |
| `questions-search.spec.mjs` | Practice questions and timed mode; search and its subject filter |
| `self-marking.spec.mjs` | Self-marking practice questions (validation, re-marking, history), the subject and dashboard averages against the pass mark; mock papers (paper size, clock, hidden answers, reload, marking, results, time running out, abandoning) |
| `planning.spec.mjs` | Welcome questions, exam planner (clashes, moves, awaiting results), results day, route map and specialists, Exam Hub, dashboard |
| `readiness.spec.mjs` | The home page Today card (due reviews, new cards paced to the plan, the no-plan nudge, the revision fortnight) and readiness on subject pages, the route map and the exam plan |
| `progress-status.spec.mjs` | Studying a module starts it; subjects awaiting results or passed pause their reviews, with a badge and a note; results day and resits |
| `account.spec.mjs` | Downloading and restoring the progress file, forgot password and the reset link, account deletion |
| `site.spec.mjs` | Header navigation, back/forward, theme, account panel, phone widths (390px and 320px), dark mode |

When you add a feature, add a test for it to the file that fits, or a new `*.spec.mjs`.
