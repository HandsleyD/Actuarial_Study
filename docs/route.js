// The route to Associate and Fellow, worked out from a user's exam results
// and exam plan — the model the home page's route map draws.
//
// Pure functions only: no DOM, no storage. Kept separate so the rules can be
// unit-tested in Node (scripts/test-route.mjs).
//
// The route, in order:
//   1. subjects already passed or exempted;
//   2. each sitting in the user's plan, as they planned it;
//   3. suggestions for every required subject not yet passed or planned,
//      two a sitting in syllabus order, starting after the last planned
//      sitting. A suggestion never lands in a published sitting that doesn't
//      offer the subject, or next to a subject whose paper is on the same day.
//      Suggestions are never saved: they only fill the gap until the user
//      plans those subjects themselves.
//
// Associate needs every Core Principles and Core Practice subject; Fellow
// also needs any two Specialist Principles and any one Specialist Advanced.
// CB3 is an online assessment booked outside the sittings, so it is never
// placed in one: the route notes when Associate still waits on it.

const Route = (function () {
  const CORE = ["CB1", "CB2", "CB3", "CM1", "CM2", "CS1", "CS2", "CP1", "CP2", "CP3"];
  const SP = ["SP1", "SP2", "SP4", "SP5", "SP6", "SP7", "SP8", "SP9"];
  const SA = ["SA1", "SA2", "SA3", "SA4", "SA7"];
  const SP_NEEDED = 2;
  const SA_NEEDED = 1;
  // Syllabus order for suggestions (CB3 is never suggested: see above).
  const SUGGEST_ORDER = CORE.filter((c) => c !== "CB3");
  const MONTH_NUM = { april: "04", september: "09" };

  function stage(code) {
    if (/^C[BMS]/.test(code)) return "principles";
    if (code.startsWith("CP")) return "practice";
    if (code.startsWith("SP")) return "sp";
    return "sa";
  }

  // Sittings are "YYYY-04" or "YYYY-09". Dates come from exam-dates.js where
  // the IFoA has published them, else an estimate (the 15th of the month).
  function calendar(examDates) {
    const sessions = (examDates && examDates.sessions) || [];

    function sessionId(session) {
      const [month, year] = session.name.toLowerCase().split(" ");
      return MONTH_NUM[month] ? `${year}-${MONTH_NUM[month]}` : null;
    }

    function info(id) {
      const session = sessions.find((s) => sessionId(s) === id) || null;
      if (session) {
        const dates = Object.keys(session.papers).sort();
        const entry = session.deadlines.find((d) => /entry closes/i.test(d.label));
        return { id, session, first: dates[0], last: dates[dates.length - 1], entryCloses: entry ? entry.date : null };
      }
      const approx = `${id}-15`;
      return { id, session: null, first: approx, last: approx, entryCloses: null };
    }

    function next(id) {
      const [y, m] = id.split("-");
      return m === "04" ? `${y}-09` : `${Number(y) + 1}-04`;
    }

    function name(id) {
      const [y, m] = id.split("-");
      return `${m === "04" ? "April" : "September"} ${y}`;
    }

    // The first sitting that hasn't started by `today`.
    function firstUpcoming(today) {
      let id = "2026-04";
      while (info(id).first <= today) id = next(id);
      return id;
    }

    // A subject's papers in a session: "CM1A" and "CP1 paper 2" both start
    // with their subject code.
    function papers(session, code) {
      return Object.entries(session.papers)
        .flatMap(([date, list]) => list.filter((p) => p.slice(0, 3) === code).map((p) => ({ date, paper: p })))
        .sort((a, b) => a.date.localeCompare(b.date));
    }

    // Pairs of subjects with a paper on the same day (every paper starts at
    // 09:00). Only published sittings have dates to clash on.
    function clashes(inf, codes) {
      if (!inf.session) return [];
      const byDate = {};
      codes.forEach((c) => new Set(papers(inf.session, c).map((p) => p.date)).forEach((d) => (byDate[d] = [...(byDate[d] || []), c])));
      return Object.keys(byDate)
        .sort()
        .filter((d) => byDate[d].length > 1)
        .map((d) => ({ date: d, codes: byDate[d] }));
    }

    function offers(inf, code) {
      return !inf.session || papers(inf.session, code).length > 0;
    }

    return { info, next, name, firstUpcoming, papers, clashes, offers };
  }

  function associateReady(done) {
    return CORE.every((c) => c === "CB3" || done.has(c));
  }

  function fellowReady(done) {
    return (
      associateReady(done) &&
      SP.filter((c) => done.has(c)).length >= SP_NEEDED &&
      SA.filter((c) => done.has(c)).length >= SA_NEEDED
    );
  }

  // opts: { today, calendar, passed: [codes], sittings: { id: [codes] },
  //         specialists: { sp: [codes], sa: [codes] }, perSitting }
  function build(opts) {
    const cal = opts.calendar;
    const perSitting = opts.perSitting || 2;
    const passedSet = new Set(opts.passed || []);
    const sittings = opts.sittings || {};
    const specialists = opts.specialists || {};

    const passed = [...CORE, ...SP, ...SA].filter((c) => passedSet.has(c));

    const plannedIds = Object.keys(sittings)
      .filter((id) => (sittings[id] || []).some((c) => !passedSet.has(c)))
      .sort();
    const groups = plannedIds.map((id) => {
      const inf = cal.info(id);
      const codes = sittings[id].filter((c) => !passedSet.has(c));
      return { id, codes, kind: "planned", past: inf.first <= opts.today, clashes: cal.clashes(inf, codes) };
    });
    const planned = new Set(groups.flatMap((g) => g.codes));

    // Specialist subjects on the route: passed or planned count as chosen;
    // the user's saved picks fill any places left, up to what's needed.
    const pick = (list, needed, saved) => {
      const chosen = list.filter((c) => passedSet.has(c) || planned.has(c));
      (saved || []).forEach((c) => {
        if (list.includes(c) && !chosen.includes(c) && chosen.length < needed) chosen.push(c);
      });
      return chosen;
    };
    const spChosen = pick(SP, SP_NEEDED, specialists.sp);
    const saChosen = pick(SA, SA_NEEDED, specialists.sa);
    const fork = { sp: Math.max(0, SP_NEEDED - spChosen.length), sa: Math.max(0, SA_NEEDED - saChosen.length) };

    let remaining = [
      ...SUGGEST_ORDER.filter((c) => !passedSet.has(c) && !planned.has(c)),
      ...spChosen.filter((c) => !passedSet.has(c) && !planned.has(c)),
      ...saChosen.filter((c) => !passedSet.has(c) && !planned.has(c)),
    ];

    const upcoming = cal.firstUpcoming(opts.today);
    const lastPlanned = plannedIds[plannedIds.length - 1];
    let id = lastPlanned && cal.next(lastPlanned) > upcoming ? cal.next(lastPlanned) : upcoming;
    for (let guard = 0; remaining.length && guard < 40; guard++) {
      const inf = cal.info(id);
      const chosen = [];
      for (const code of remaining) {
        if (chosen.length >= perSitting) break;
        if (!cal.offers(inf, code)) continue;
        if (cal.clashes(inf, [...chosen, code]).length) continue;
        chosen.push(code);
      }
      if (chosen.length) {
        groups.push({ id, codes: chosen, kind: "suggested", past: false, clashes: [] });
        remaining = remaining.filter((c) => !chosen.includes(c));
      }
      id = cal.next(id);
    }

    // Walk the route, assuming every exam on it is passed, to find where
    // each qualification is reached.
    const done = new Set(passed);
    let associateAt = associateReady(done) ? "now" : null;
    let fellowAt = fellowReady(done) ? "now" : null;
    for (const g of groups) {
      g.codes.forEach((c) => done.add(c));
      if (!associateAt && associateReady(done)) associateAt = g.id;
      if (!fellowAt && fellowReady(done)) fellowAt = g.id;
    }

    return {
      passed,
      groups,
      associate: { at: associateAt, needsCB3: !passedSet.has("CB3") },
      fellow: { at: fork.sp || fork.sa ? null : fellowAt },
      fork,
      specialists: { sp: spChosen, sa: saChosen },
      unplaced: remaining,
    };
  }

  return { CORE, SP, SA, SP_NEEDED, SA_NEEDED, stage, calendar, build, associateReady, fellowReady };
})();

if (typeof module !== "undefined" && module.exports) module.exports = Route;
