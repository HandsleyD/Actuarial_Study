// Spaced-repetition scheduling for flashcards — a simplified SM-2.
//
// Pure functions only: no DOM, no storage, no Supabase. store.js persists the
// per-card state this produces; app.js decides which cards to show. Kept
// separate so the rules can be unit-tested in Node (scripts/test-srs.mjs).
//
// The rules, in plain English:
//   - A card you've never scored is "new" — it isn't due, you meet it by
//     studying its module.
//   - Sufficient on a card that's due (or new) pushes it further out. The
//     gaps go 1 day, then 3 days, then each gap is the previous one times the
//     card's "ease" (2.5 to start): 1, 3, 8, 20, 50 days... capped at
//     MAX_INTERVAL_DAYS.
//   - Sufficient on a card that ISN'T due yet (re-reading ahead of schedule)
//     leaves the schedule alone — cramming a card twice in one evening
//     shouldn't earn it a two-month holiday.
//   - Insufficient always resets the card: it's due again today, starts back
//     at the 1-day gap, and its ease drops by 0.2 (never below MIN_EASE), so a
//     card you keep missing comes back more often from then on. Each miss
//     also adds to the card's lapse count, which feeds the dashboard's
//     weak-area view.
//
// Per-card state:
//   { reps, interval, ease, due, lapses, reviews, last }
//   reps     — correct reviews in a row since the last miss
//   interval — current gap in days (0 = relearning, due today)
//   ease     — interval multiplier, MIN_EASE..DEFAULT_EASE
//   due      — "YYYY-MM-DD" (local date) the card is next due
//   lapses   — lifetime count of Insufficient marks
//   reviews  — lifetime count of scored reviews
//   last     — "YYYY-MM-DD" of the last scored review (null if seeded)

const SRS = (function () {
  const DEFAULT_EASE = 2.5;
  const MIN_EASE = 1.3;
  const EASE_PENALTY = 0.2;
  const MAX_INTERVAL_DAYS = 180;
  // How many days to spread cards that were already starred before
  // scheduling existed across, so they don't all fall due on day one.
  const SEED_SPREAD_DAYS = 7;

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  // Local calendar date, not UTC — "due today" should flip at the user's
  // midnight, not at 1am BST.
  function today(now) {
    const d = now ? new Date(now) : new Date();
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  }

  function parse(dateStr) {
    const [y, m, d] = dateStr.split("-").map(Number);
    return new Date(y, m - 1, d, 12); // noon avoids DST edge cases
  }

  function addDays(dateStr, n) {
    const d = parse(dateStr);
    d.setDate(d.getDate() + n);
    return today(d);
  }

  function daysBetween(fromStr, toStr) {
    return Math.round((parse(toStr) - parse(fromStr)) / 86400000);
  }

  function isDue(state, todayStr) {
    return !!state && !!state.due && state.due <= todayStr;
  }

  function next(prev, sufficient, todayStr) {
    const s = prev
      ? { ...prev }
      : { reps: 0, interval: 0, ease: DEFAULT_EASE, due: todayStr, lapses: 0, reviews: 0, last: null };
    s.reviews = (s.reviews || 0) + 1;
    s.last = todayStr;

    if (!sufficient) {
      s.reps = 0;
      s.interval = 0;
      s.ease = Math.max(MIN_EASE, Math.round(((s.ease || DEFAULT_EASE) - EASE_PENALTY) * 100) / 100);
      s.lapses = (s.lapses || 0) + 1;
      s.due = todayStr;
      return s;
    }

    // Reviewed early and got it right: counts as a review, schedule unchanged.
    if (prev && prev.due && prev.due > todayStr) return s;

    s.reps = (s.reps || 0) + 1;
    if (s.reps === 1) s.interval = 1;
    else if (s.reps === 2) s.interval = 3;
    else s.interval = Math.round(Math.max(s.interval || 1, 1) * (s.ease || DEFAULT_EASE));
    s.interval = Math.min(MAX_INTERVAL_DAYS, s.interval);
    s.due = addDays(todayStr, s.interval);
    return s;
  }

  // Starting state for a card that was scored before scheduling existed.
  // `mastered` is its current star; `k` is its position among such cards,
  // used to stagger the first review over SEED_SPREAD_DAYS days.
  function seed(mastered, k, todayStr) {
    if (mastered) {
      return {
        reps: 2,
        interval: 3,
        ease: DEFAULT_EASE,
        due: addDays(todayStr, 1 + (k % SEED_SPREAD_DAYS)),
        lapses: 0,
        reviews: 1,
        last: null,
      };
    }
    return { reps: 0, interval: 0, ease: DEFAULT_EASE - EASE_PENALTY, due: todayStr, lapses: 1, reviews: 1, last: null };
  }

  function describeDue(state, todayStr) {
    if (!state || !state.due) return "New card";
    const d = daysBetween(todayStr, state.due);
    if (d < 0) return `Overdue by ${-d} day${d === -1 ? "" : "s"}`;
    if (d === 0) return "Due today";
    if (d === 1) return "Next review tomorrow";
    return `Next review in ${d} days`;
  }

  return { DEFAULT_EASE, MIN_EASE, MAX_INTERVAL_DAYS, today, addDays, daysBetween, isDue, next, seed, describeDue };
})();

if (typeof module !== "undefined" && module.exports) module.exports = SRS;
