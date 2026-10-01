// Self-marked practice questions and mock papers: the rules, as pure
// functions (no DOM, no storage), so they can be unit-tested in Node
// (scripts/test-mock.mjs). app.js draws the views; store.js keeps the scores.
//
// A self-mark attempt is { at, parts: [marks per part], score, max, src },
// where at is ms since epoch (also the attempt's identity), score is the sum
// of parts, max the question's marks, and src "practice" or "mock".

const Mock = (function () {
  // A real IFoA paper: 100 marks in 3 hours 15 minutes (reading time included).
  const TARGET_MARKS = 100;
  const DURATION_MS = (3 * 60 + 15) * 60000;

  function shuffled(arr, rng) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Picks questions from a bank whose marks add up to as close to `target`
  // as possible (on a tie, under rather than over, as a paper is never longer
  // than the time allows). Which of the equally-close papers you get depends
  // on rng, so each mock is different. A bank with no more than `target`
  // marks in total is used whole, and the result scaled up to `target`.
  // Returns { questions (in bank order), marks, scaled }.
  function pickPaper(bank, target, rng) {
    target = target || TARGET_MARKS;
    rng = rng || Math.random;
    const total = bank.reduce((a, q) => a + q.marks, 0);
    if (total <= target) return { questions: bank.slice(), marks: total, scaled: total < target };
    // 0/1 subset sum over a shuffled bank: from[s] records the question that
    // first reached sum s (and the sum it was added to), so following the
    // trail back from the best sum rebuilds one paper.
    const order = shuffled(bank, rng);
    const from = new Array(total + 1).fill(null);
    from[0] = { prev: -1, q: null };
    order.forEach((q) => {
      const m = Math.round(q.marks);
      for (let s = total; s >= m; s--) {
        if (!from[s] && from[s - m]) from[s] = { prev: s - m, q };
      }
    });
    let best = -1;
    for (let s = 1; s <= total; s++) {
      if (!from[s]) continue;
      if (best < 0 || Math.abs(s - target) < Math.abs(best - target) || (Math.abs(s - target) === Math.abs(best - target) && s < best)) best = s;
    }
    const picked = new Set();
    for (let s = best; s > 0; s = from[s].prev) picked.add(from[s].q);
    const questions = bank.filter((q) => picked.has(q));
    return { questions, marks: best, scaled: false };
  }

  function attemptOf(parts, max, src, at) {
    const score = parts.reduce((a, n) => a + n, 0);
    return { at, parts, score, max, src };
  }

  // A typed mark for a part: a number from 0 to the part's marks, in steps of
  // a half (examiners award half marks). Anything else is null.
  function parseMark(raw, max) {
    const s = String(raw === undefined || raw === null ? "" : raw).trim();
    if (!/^\d+(\.\d+)?$/.test(s)) return null;
    const n = Math.round(Number(s) * 2) / 2;
    return n >= 0 && n <= max ? n : null;
  }

  function latestAttempt(history) {
    return history && history.length ? history.reduce((a, b) => (b.at > a.at ? b : a)) : null;
  }

  // A subject's self-marked average: the latest attempt at each question still
  // in the bank, weighted by marks. { attempted, questions, score, max, pct }
  // with pct null until something has been marked.
  function subjectAverage(bank, scores) {
    let score = 0;
    let max = 0;
    let attempted = 0;
    bank.forEach((q) => {
      const last = latestAttempt(scores && scores[q.id]);
      if (!last || !last.max) return;
      attempted++;
      score += last.score;
      max += last.max;
    });
    return { attempted, questions: bank.length, score, max, pct: max ? (score / max) * 100 : null };
  }

  // The most recent pass mark from PASS_STATS rows ({ sitting, mark }), or null.
  function latestPassMark(rows) {
    const withMark = (rows || []).filter((r) => r.mark !== null && r.mark !== undefined);
    if (!withMark.length) return null;
    const last = withMark.reduce((a, b) => (b.sitting > a.sitting ? b : a));
    return { mark: last.mark, sitting: last.sitting };
  }

  // A finished mock: total marks, the percentage (scaled to 100 when the
  // paper was short), and how it compares with the pass mark. Pass marks are
  // whole numbers, so the comparison is with the percentage as shown, rounded.
  function mockResult(score, max, pass) {
    const pct = max ? (score / max) * 100 : 0;
    return { score, max, pct, passMark: pass ? pass.mark : null, passSitting: pass ? pass.sitting : null, passed: pass ? Math.round(pct) >= pass.mark : null };
  }

  return { TARGET_MARKS, DURATION_MS, pickPaper, attemptOf, parseMark, latestAttempt, subjectAverage, latestPassMark, mockResult };
})();

if (typeof module !== "undefined" && module.exports) module.exports = Mock;
