# Fellow

**Fellow** is a free study companion for the IFoA actuarial exams, live at:

**👉 https://handsleyd.github.io/Actuarial_Study/**

No install, no sign-up required — just open the link.

![The home page: a transit-map route from three passed subjects through planned and suggested sittings to Associate, with a fork to Fellow waiting on the choice of specialist subjects, and below it the Foundations group with Foundation Mathematics and Foundation Statistics in progress](.github/readme-assets/progress-screenshot.png)

## What's here

- **Foundations: maths and statistics from zero** — two from-scratch courses for anyone whose maths is rusty or who never studied it: *Foundation Mathematics* (arithmetic and algebra through logs, series, differentiation, integration, the gamma function, differential equations and matrices) and *Foundation Statistics* (describing data and probability through distributions, generating functions, the central limit theorem, estimation, hypothesis tests and regression). 16 modules each, and every module opens with a short lesson and worked examples before its flashcards and drills. They aren't IFoA exams, so they never appear in your route or exam plan; instead CM1, CM2, CS1 and CS2 each link to the foundation modules they lean on.
- **Flashcards** for every module of each subject, with a reveal-then-explain format: see the question, try to answer it (optionally typing your answer out), then reveal the answer alongside a short "why this matters" note that connects it to the wider syllabus.
- **Spaced repetition** — every card you score is rescheduled: ones you got right come back after longer and longer gaps, ones you missed come back soon. A daily "due today" review pulls due cards from every subject into one session, and a "weak cards" drill targets the ones you keep missing.
- **AI feedback on typed answers** (optional, needs an account) — type your answer to a flashcard and get a Strong / Partial / Weak rating against the model answer, with one sentence on what was missing or good.
- **Drills** — machine-marked questions in four formats: multiple choice, select-all, fill-the-gap, and *click the diagram* (find the deadweight loss, the marginal revenue curve, the natural rate of unemployment). Each one explains why the answer you picked was tempting, not just what the right answer was. Scored separately from the flashcard stars, since these are marked for you rather than self-assessed. Currently CB2 and the two Foundations courses.
- **Practice exams** — original, IFoA-style question banks (multi-part questions, command verbs like *Calculate*, *Explain*, *Discuss*, mark allocations that add up) for exam-condition practice. An optional timed mode gives each question a countdown based on its marks (1.5–2 minutes per mark), and logs how your pace compares with the allowance.
- **Search** — find any flashcard or practice question across every subject (press <kbd>/</kbd> from anywhere).
- **Progress tracking** — a mastery star for every flashcard you've nailed, a study streak, and real Associate/Fellow tracking based on the actual IFoA qualification structure (not a made-up point scale). Progress towards Associate and Fellow counts your exam results — each subject is Not yet, Passed or Exempt — while module ticks track your revision separately. A two-question welcome (what you've passed, what you're sitting next) sets this up, and once a sitting's results are out the site asks whether you passed, recording it or moving the subject to the next sitting.
- **Your route** — the home page draws your path to Associate and Fellow as a transit line: subjects you've passed behind you, the sittings you've planned, and suggested sittings (two subjects each, in syllabus order, avoiding same-day papers) for everything you haven't planned yet. Pick your Specialist Principles and Advanced subjects and the line runs on to a Fellow date. Suggestions are never saved; they give way as soon as you plan those subjects yourself.
- **Study dashboard** — cards due today, a 14-day review forecast, a 12-week activity heatmap, the modules and cards you miss most, your exam pacing, and mastery by subject and module.
- **Exam Hub** — for each subject: the dates of the next sitting (papers, entry deadlines and results day), and historical pass marks and pass rates from the examiners' reports. Exam dates are refreshed weekly from the IFoA website.
- **Exam planner** — on the study dashboard, place your remaining subjects into the April and September sittings. It flags papers that clash on the same day, subjects not on a sitting's timetable, and sittings with more than three exams; shows the modules-per-week pace each sitting needs; and projects when you'd reach Associate and Fellow if you pass as planned.
- **Works offline** — after one visit the site (cards, questions, maths rendering) is cached, so you can review on a train with no signal; scores are saved on the device and upload when you're back online. On a phone, use "Add to Home Screen" to install it like an app.
- **Keyboard shortcuts** — Space to reveal, 1/2 to grade, arrow keys to move, <kbd>/</kbd> to search.
- **Light/dark theme** — cream paper by day, deep navy by night — and a mobile-friendly layout.

Subjects currently covered span the Core Principles (CB, CM, CS), Core Practice (CP), Specialist Principles (SP) and Specialist Advanced (SA) parts of the IFoA syllabus — see the subject grid on the site for the full, current list.

## Your progress, your account (optional)

By default, your progress (mastery stars, review schedules, drill results, streak, module status, exam results and exam plan) is saved only in your browser on that one device — nothing is sent anywhere. Everyone starts from a clean slate: the site never shows anyone else's progress. If you'd like it to follow you across devices, click the account icon (⚙) in the top right and create a free account. That's it — no personal data is collected beyond your login email, and your study data is private to your account (row-level security enforced at the database). If you use AI feedback, the question, model answer and your typed answer are sent to Google's Gemini API to be marked; nothing else is.

Skipping the account is completely fine too — the site works fully without one.

## About this project

Fellow is a personal, self-study project — original content written to mirror the structure and topic weighting of the official IFoA syllabus, not a reproduction of any copyrighted IFoA past paper or study material. It isn't affiliated with, endorsed by, or produced by the Institute and Faculty of Actuaries, and shouldn't be treated as a substitute for the official Core Reading or a qualified tutor. Corrections and suggestions are welcome via [issues](https://github.com/HandsleyD/Actuarial_Study/issues).

## Repo structure

- [`docs/`](docs/) — the study site itself (published via GitHub Pages from this folder)
- [`maths-study/`](maths-study/) — the underlying study workspace (notes, concept indexes, past-paper work) that feeds the site's content
- [`supabase/`](supabase/) — optional cloud-sync setup (schema, numbered migrations, and the AI-feedback edge function), see [`supabase/SETUP.md`](supabase/SETUP.md) if you're running your own fork
- [`scripts/`](scripts/) — content validation, tests, and the generators behind the Exam Hub data; [`.github/workflows/`](.github/workflows/) runs them in CI and on a schedule

## License

Released under the [MIT License](LICENSE) — reuse and adapt freely, with attribution.
