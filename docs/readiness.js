// Readiness and daily pace for a planned subject: the figures behind the
// readiness % on subject pages, the route map and the exam plan, and the
// home page's "Today" card.
//
// Pure functions only: no DOM, no storage. Kept separate so the rules can be
// unit-tested in Node (scripts/test-readiness.mjs).
//
// Readiness is a study-progress gauge, NOT a pass probability. It's a
// weighted average of up to four parts, each 0..1:
//   - coverage: modules covered / modules with cards. A module counts as
//     covered once at least half its cards have been scored at least once.
//   - mastery:  cards currently starred (last marked Sufficient) / all cards.
//   - drills:   drill answers correct / drill answers given. Left out (and the
//     other weights scaled up to fill its place) until a drill is answered,
//     or for subjects with no drills.
//   - reviews:  cards scored and not overdue / all cards — so an overdue
//     backlog pulls readiness down, and a few cards kept up to date early on
//     don't make a subject look part-ready.
// Weights: coverage 35, mastery 35, drills 15, reviews 15.
//
// Daily pace: new cards to learn today so the remaining cards are all met
// REVISION_DAYS before the first paper, leaving those last two weeks for
// revision and past papers. Once inside that window, whatever's left is
// spread over the days up to the paper instead.

const Readiness = (function () {
  const WEIGHTS = { coverage: 35, mastery: 35, drills: 15, reviews: 15 };
  const COVERED_SHARE = 0.5;
  const REVISION_DAYS = 14;

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function parse(dateStr) {
    const [y, m, d] = dateStr.split("-").map(Number);
    return new Date(y, m - 1, d, 12);
  }

  function addDays(dateStr, n) {
    const d = parse(dateStr);
    d.setDate(d.getDate() + n);
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  }

  function daysBetween(fromStr, toStr) {
    return Math.round((parse(toStr) - parse(fromStr)) / 86400000);
  }

  function isCovered(mod) {
    return mod.total > 0 && mod.seen >= mod.total * COVERED_SHARE;
  }

  // modules: [{ total, seen, mastered, due }] — card counts per module.
  // drills:  { attempts, correct } or null.
  // Returns null for a subject with no cards; otherwise
  // { pct, parts: { coverage, mastery, drills, reviews }, counts }, where each
  // part is 0..1 (drills null when left out).
  function score(modules, drills) {
    const withCards = (modules || []).filter((m) => m.total > 0);
    if (!withCards.length) return null;
    const sum = (k) => withCards.reduce((a, m) => a + (m[k] || 0), 0);
    const total = sum("total");
    const seen = sum("seen");
    const due = Math.min(sum("due"), seen);
    const covered = withCards.filter(isCovered).length;
    const attempts = (drills && drills.attempts) || 0;

    const parts = {
      coverage: covered / withCards.length,
      mastery: sum("mastered") / total,
      drills: attempts ? Math.min(1, (drills.correct || 0) / attempts) : null,
      reviews: (seen - due) / total,
    };
    let weight = 0;
    let acc = 0;
    Object.keys(WEIGHTS).forEach((k) => {
      if (parts[k] === null) return;
      weight += WEIGHTS[k];
      acc += WEIGHTS[k] * parts[k];
    });
    return {
      pct: Math.round((acc / weight) * 100),
      parts,
      counts: { modules: withCards.length, covered, cards: total, seen, mastered: sum("mastered"), due, drillAttempts: attempts },
    };
  }

  // Readiness for a sitting: the mean of its subjects' readiness, ignoring
  // subjects with no cards. null if none has cards.
  function sitting(pcts) {
    const known = (pcts || []).filter((p) => typeof p === "number");
    return known.length ? Math.round(known.reduce((a, p) => a + p, 0) / known.length) : null;
  }

  // opts: { today, paper: first paper "YYYY-MM-DD", cardsLeft, revisionDays }
  // Returns { target, daysToTarget, daysToPaper, perDay, inRevision }.
  function pace(opts) {
    const revision = opts.revisionDays === undefined ? REVISION_DAYS : opts.revisionDays;
    const target = addDays(opts.paper, -revision);
    const daysToTarget = daysBetween(opts.today, target);
    const daysToPaper = daysBetween(opts.today, opts.paper);
    const inRevision = daysToTarget <= 0;
    const left = Math.max(0, opts.cardsLeft || 0);
    // Days to spread over, counting today.
    const span = inRevision ? Math.max(1, daysToPaper) : daysToTarget;
    return { target, daysToTarget, daysToPaper, perDay: left ? Math.ceil(left / span) : 0, inRevision };
  }

  return { WEIGHTS, COVERED_SHARE, REVISION_DAYS, score, sitting, pace, isCovered };
})();

if (typeof module !== "undefined" && module.exports) module.exports = Readiness;
