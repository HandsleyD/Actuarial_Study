// Calculation drills ("calc"): numerical questions with fresh numbers on
// every attempt. They're merged into DRILLS (drills.js) by app.js, so they
// share the drill view, scoring and per-item spaced repetition.
//
// Item shape (on top of the fields every drill has -- see drills.js):
//   params    () => p        draws a new set of numbers for one attempt
//   question  (p) => html    the question, for those numbers
//   answer    (p) => number  the exact answer, computed from first principles
//   working   (p) => html    the full worked solution, shown after marking
//   tolerance { rel } and/or { abs }: an answer is right if it's within
//             either. Exact interest calculations get a tight tolerance;
//             anything that needs the Tables gets room for their rounding.
//   unit      "£" | "%" | "years" | "" -- how the answer is shown and read.
//             A "%" answer is a percentage (5.25 means 5.25%).
//   dp        decimal places used to show the answer
//   signed    true if the answer can be negative (keypad gets a minus key)
//
// The id is the storage key exactly as for other drills: progress belongs to
// the question template, not to any one set of numbers.
//
// Mortality: questions that need life table values use AM92 Ultimate, built
// below from its published graduation formula. That reproduces the printed
// table (l_x to within a few parts in a million; a-dot_x at 4% to 3 dp), so a
// student working from the Formulae and Tables lands inside the tolerance.
// Life questions use 4% or 6% interest, the rates the Tables print. Where a
// question needs anything the Tables wouldn't give (q values for a profit
// test, a reserve to roll forward), the question states it.
//
// scripts/validate-content.mjs draws every item many times to check the
// answers are finite and the shown answer marks as right;
// scripts/test-calc-drills.mjs checks each answer against an independent
// calculation.
const CALC = (() => {
  /* ---------- random draws (seedable, so tests are repeatable) ---------- */
  let rng = Math.random;
  function seed(s) {
    let a = s >>> 0;
    rng = () => {
      a = (a + 0x6d2b79f5) >>> 0;
      let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function unseed() {
    rng = Math.random;
  }
  const clean = (x) => Math.round(x * 1e10) / 1e10; // 0.03 + 3 * 0.005 noise
  const randInt = (lo, hi) => lo + Math.floor(rng() * (hi - lo + 1));
  const pick = (arr) => arr[Math.floor(rng() * arr.length)];
  const randStep = (lo, hi, step) => clean(lo + step * randInt(0, Math.round((hi - lo) / step)));
  const roundTo = (x, dp) => Math.round(x * 10 ** dp) / 10 ** dp;

  /* ---------- formatting ---------- */
  const trim = (s) => (s.includes(".") ? s.replace(/0+$/, "").replace(/\.$/, "") : s);
  const fixed = (x, dp) => {
    const s = x.toFixed(dp);
    return /^-0(\.0*)?$/.test(s) ? s.slice(1) : s;
  };
  // inside $...$: no thousands separators, trailing zeros trimmed
  const nf = (x, dp = 4) => trim(fixed(x, dp));
  // money inside $...$
  const m2 = (x) => fixed(x, 2);
  const grp = (x, dp) => {
    const [int, frac] = fixed(Math.abs(x), dp).split(".");
    const sign = x < 0 && Number(fixed(Math.abs(x), dp)) !== 0 ? "&minus;" : "";
    return sign + int.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (frac ? "." + frac : "");
  };
  // prose
  const money = (x, dp = 2) => (x < 0 && Number(fixed(-x, dp)) !== 0 ? "&minus;£" + grp(-x, dp) : "£" + grp(Math.abs(x), dp));
  const pc = (r) => `${trim((r * 100).toFixed(4))}%`;
  const W = (...lines) => lines.map((l) => `<p>${l}</p>`).join("");
  const ans = (text) => `<strong>Answer: ${text}</strong>`;
  const FREQ = { 2: "half-yearly", 4: "quarterly", 12: "monthly" };

  function answerText(item, x) {
    const dp = item.dp == null ? 2 : item.dp;
    if (item.unit === "£") return money(x, dp);
    if (item.unit === "%") return `${grp(x, dp)}%`;
    if (item.unit === "years") return `${grp(x, dp)} years`;
    return grp(x, dp);
  }

  /* ---------- reading and marking an answer ---------- */
  // Accepts "1,234.56", "£1234.56", "-£50", "4.5%", "12 years". Commas must
  // be thousands separators: "4,5" is rejected rather than read as 45.
  function parseAnswer(raw) {
    let s = String(raw == null ? "" : raw)
      .trim()
      .replace(/[−–]/g, "-")
      .replace(/[\s £]/g, "")
      .replace(/(years?|yrs?)$/i, "");
    let percent = false;
    if (s.endsWith("%")) {
      percent = true;
      s = s.slice(0, -1);
    }
    s = s.replace(/^\+/, "");
    if (s.includes(",")) {
      if (!/^-?\d{1,3}(,\d{3})+(\.\d*)?$/.test(s)) return null;
      s = s.replace(/,/g, "");
    }
    if (!/^-?(\d+\.?\d*|\.\d+)$/.test(s)) return null;
    const value = Number(s);
    return Number.isFinite(value) ? { value, percent } : null;
  }

  function within(x, target, tol) {
    const d = Math.abs(x - target);
    const eps = 1e-9 * Math.max(1, Math.abs(target));
    return (tol.abs != null && d <= tol.abs + eps) || (tol.rel != null && d <= tol.rel * Math.abs(target) + eps);
  }

  // A "%" item takes 5.25, 5.25% or 0.0525; elsewhere a trailing % divides by 100.
  function mark(item, p, raw) {
    const parsed = parseAnswer(raw);
    if (!parsed) return null;
    const target = item.answer(p);
    const reads = [];
    if (item.unit === "%") {
      reads.push(parsed.value);
      if (!parsed.percent) reads.push(parsed.value * 100);
    } else {
      reads.push(parsed.percent ? parsed.value / 100 : parsed.value);
    }
    // Report the reading that was marked right, so "0.0525" is echoed back
    // as 5.25%, not 0.05%.
    const hit = reads.find((x) => within(x, target, item.tolerance));
    return { ok: hit !== undefined, value: hit !== undefined ? hit : reads[0], answer: target };
  }

  /* ---------- interest functions ---------- */
  const vn = (n, i) => (1 + i) ** -n;
  const dOf = (i) => i / (1 + i);
  const deltaOf = (i) => Math.log(1 + i);
  const ipOf = (i, p) => p * ((1 + i) ** (1 / p) - 1);
  const dpOf = (i, p) => p * (1 - (1 + i) ** (-1 / p));
  const an = (n, i) => (Math.abs(i) < 1e-12 ? n : (1 - vn(n, i)) / i);
  const adn = (n, i) => an(n, i) * (1 + i);
  const apn = (n, i, p) => (1 - vn(n, i)) / ipOf(i, p);
  const adpn = (n, i, p) => (1 - vn(n, i)) / dpOf(i, p);
  const abarn = (n, i) => (1 - vn(n, i)) / deltaOf(i);
  const sdpn = (n, i, p) => ((1 + i) ** n - 1) / dpOf(i, p);
  const Ian = (n, i) => (adn(n, i) - n * vn(n, i)) / i;
  const IbarAbarn = (n, i) => (abarn(n, i) - n * vn(n, i)) / deltaOf(i);
  // bisection for a decreasing or increasing f with one root in [lo, hi]
  function solve(f, lo, hi) {
    let flo = f(lo);
    for (let k = 0; k < 200; k++) {
      const mid = (lo + hi) / 2;
      const fm = f(mid);
      if (fm === 0) return mid;
      if (fm > 0 === flo > 0) {
        lo = mid;
        flo = fm;
      } else hi = mid;
    }
    return (lo + hi) / 2;
  }

  /* ---------- AM92 Ultimate ---------- */
  // mu_x = a0 + a1 t + exp(b0 + b1 t + b2 (2t^2 - 1)), t = (x - 70)/50,
  // radix l_17 = 10,000, table closed at 120.
  const am92Mu = (x) => {
    const t = (x - 70) / 50;
    return 0.00005887 - 0.0004988 * t + Math.exp(-4.363378 + 5.544956 * t - 0.620345 * (2 * t * t - 1));
  };
  const L = (() => {
    const gx = [0, -0.5384693101056831, 0.5384693101056831, -0.906179845938664, 0.906179845938664];
    const gw = [0.5688888888888889, 0.4786286704993665, 0.4786286704993665, 0.2369268850561891, 0.2369268850561891];
    const l = [];
    l[17] = 10000;
    for (let x = 17; x < 120; x++) {
      let integral = 0;
      for (let q = 0; q < 4; q++) {
        const mid = x + q * 0.25 + 0.125;
        for (let k = 0; k < 5; k++) integral += 0.125 * gw[k] * am92Mu(mid + 0.125 * gx[k]);
      }
      l[x + 1] = l[x] * Math.exp(-integral);
    }
    l[121] = 0;
    return l;
  })();
  const lx = (x) => (x > 121 ? 0 : L[x]);
  const npx = (n, x) => lx(x + n) / lx(x);
  const qx = (x) => 1 - npx(1, x);
  // all life functions at integer ages, sums running to the end of the table
  function adx(x, i, n = Infinity) {
    let s = 0;
    for (let k = 0; k < n && x + k <= 120; k++) s += vn(k, i) * npx(k, x);
    return s;
  }
  function Ax1(x, i, n = Infinity) {
    let s = 0;
    for (let k = 0; k < n && x + k <= 120; k++) s += vn(k + 1, i) * (lx(x + k) - lx(x + k + 1)) / lx(x);
    return s;
  }
  const Ax = (x, i) => Ax1(x, i);
  const nEx = (n, x, i) => vn(n, i) * npx(n, x);
  function IAx(x, i) {
    let s = 0;
    for (let k = 0; x + k <= 120; k++) s += (k + 1) * vn(k + 1, i) * (lx(x + k) - lx(x + k + 1)) / lx(x);
    return s;
  }
  function Iadx(x, i) {
    let s = 0;
    for (let k = 0; x + k <= 120; k++) s += (k + 1) * vn(k, i) * npx(k, x);
    return s;
  }
  function adxy(x, y, i) {
    let s = 0;
    for (let k = 0; x + k <= 120 && y + k <= 120; k++) s += vn(k, i) * npx(k, x) * npx(k, y);
    return s;
  }

  const BASIS = (i) => `AM92 Ultimate mortality and ${pc(i)} a year interest`;
  const lifeI = () => pick([0.04, 0.06]);

  function calc(def) {
    const { solve: work, show, ...rest } = def;
    return { type: "calc", ...rest, answer: (p) => work(p).ans, working: (p) => show(p, work(p)) };
  }

  const ad = (x) => `\\ddot{a}_{${x}}`;
  const adn_ = (x, n) => `\\ddot{a}_{${x}:\\overline{${n}}|}`;
  const npx_ = (n, x) => `{}_{${n}}p_{${x}}`;

  /* ====================================================================== */
  const CM1 = [
    /* ---------- m01 The time value of money ---------- */
    calc({
      id: "cm1-m01-c01", module: "m01", unit: "£", dp: 2, tolerance: { rel: 0.0002 },
      params: () => ({ P: randStep(1000, 20000, 500), r: randStep(0.03, 0.09, 0.0025), m: pick([9, 15, 18, 21, 30]) }),
      question: (p) => `${money(p.P, 0)} is invested at a <em>simple</em> rate of interest of ${pc(p.r)} a year. How much is the investment worth after ${p.m} months?`,
      solve: (p) => ({ t: p.m / 12, ans: p.P * (1 + (p.r * p.m) / 12) }),
      show: (p, s) =>
        W(
          `Under simple interest, interest is proportional to time and is never itself credited with interest: $A = P(1 + rt)$.`,
          `Here $t = ${p.m}/12 = ${nf(s.t)}$ years, so $A = ${p.P} \\times (1 + ${nf(p.r, 6)} \\times ${nf(s.t)}) = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m01-c02", module: "m01", unit: "£", dp: 2, tolerance: { rel: 0.0005 },
      params: () => ({ P: randStep(1000, 50000, 500), i: randStep(0.02, 0.09, 0.0025), n: randInt(2, 15), m: pick([0, 3, 6, 9]) }),
      question: (p) =>
        `${money(p.P, 0)} is invested at an effective rate of compound interest of ${pc(p.i)} a year. Calculate its accumulated value after ${p.n} years${p.m ? ` and ${p.m} months` : ""}.`,
      solve: (p) => ({ t: p.n + p.m / 12, ans: p.P * (1 + p.i) ** (p.n + p.m / 12) }),
      show: (p, s) =>
        W(
          `Compound interest accumulates by $(1+i)^t$, and $t$ need not be a whole number of years.`,
          `$t = ${p.n}${p.m ? ` + ${p.m}/12 = ${nf(s.t)}$` : "$"}, so $A = ${p.P} \\times ${nf(1 + p.i, 6)}^{${nf(s.t)}} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m01-c03", module: "m01", unit: "%", dp: 3, tolerance: { abs: 0.005 },
      params: () => ({ d: randStep(0.02, 0.07, 0.0025), t: pick([91, 182, 273]) }),
      question: (p) =>
        `A ${p.t}-day government bill is bought at issue at a <em>simple rate of discount</em> of ${pc(p.d)} a year, and held to maturity. Calculate the annual effective rate of return. Take a year as 365 days.`,
      solve: (p) => {
        const price = 100 * (1 - (p.d * p.t) / 365);
        return { price, ans: ((100 / price) ** (365 / p.t) - 1) * 100 };
      },
      show: (p, s) =>
        W(
          `Per £100 nominal, the price is $100\\left(1 - ${nf(p.d, 6)} \\times \\frac{${p.t}}{365}\\right) = ${nf(s.price, 6)}$.`,
          `The effective annual rate $i$ satisfies $${nf(s.price, 6)}(1+i)^{${p.t}/365} = 100$, so $i = \\left(\\frac{100}{${nf(s.price, 6)}}\\right)^{365/${p.t}} - 1$.`,
          `Note that the rate of discount understates the return: the discount is charged on the amount repaid, not the amount invested, and the effective rate also compounds.`,
          ans(`${nf(s.ans, 3)}%`)
        ),
    }),

    /* ---------- m02 Interest rates ---------- */
    calc({
      id: "cm1-m02-c01", module: "m02", unit: "%", dp: 3, tolerance: { abs: 0.002 },
      params: () => ({ p: pick([2, 4, 12]), j: randStep(0.03, 0.1, 0.0025) }),
      question: (p) => `A bank quotes a nominal rate of interest of ${pc(p.j)} a year convertible ${FREQ[p.p]}. What is the equivalent annual effective rate of interest?`,
      solve: (p) => ({ ans: ((1 + p.j / p.p) ** p.p - 1) * 100 }),
      show: (p, s) =>
        W(
          `A nominal rate $i^{(${p.p})}$ means interest of $i^{(${p.p})}/${p.p}$ is credited every $1/${p.p}$ of a year, so $1 + i = \\left(1 + \\frac{i^{(${p.p})}}{${p.p}}\\right)^{${p.p}}$.`,
          `$1 + i = \\left(1 + \\frac{${nf(p.j, 6)}}{${p.p}}\\right)^{${p.p}} = ${nf(1 + s.ans / 100, 6)}$.`,
          ans(`${nf(s.ans, 3)}%`)
        ),
    }),
    calc({
      id: "cm1-m02-c02", module: "m02", unit: "%", dp: 3, tolerance: { abs: 0.002 },
      params: () => ({ p: pick([2, 4, 12]), i: randStep(0.03, 0.1, 0.0025) }),
      question: (p) => `The annual effective rate of interest is ${pc(p.i)}. Calculate the equivalent nominal rate of <em>discount</em> convertible ${FREQ[p.p]}, $d^{(${p.p})}$.`,
      solve: (p) => ({ ans: dpOf(p.i, p.p) * 100 }),
      show: (p, s) =>
        W(
          `$\\left(1 - \\frac{d^{(${p.p})}}{${p.p}}\\right)^{-${p.p}} = 1 + i$, so $d^{(${p.p})} = ${p.p}\\left(1 - (1+i)^{-1/${p.p}}\\right)$.`,
          `$d^{(${p.p})} = ${p.p}\\left(1 - ${nf(1 + p.i, 6)}^{-1/${p.p}}\\right) = ${nf(s.ans / 100, 6)}$.`,
          `Check the ordering: $d < d^{(${p.p})} < \\delta < i^{(${p.p})} < i$.`,
          ans(`${nf(s.ans, 3)}%`)
        ),
    }),
    calc({
      id: "cm1-m02-c03", module: "m02", unit: "%", dp: 3, tolerance: { abs: 0.002 },
      params: () => ({ p: pick([2, 4, 12]), delta: randStep(0.03, 0.09, 0.0025) }),
      question: (p) => `The force of interest is a constant ${pc(p.delta)} a year. Calculate the equivalent nominal rate of interest convertible ${FREQ[p.p]}, $i^{(${p.p})}$.`,
      solve: (p) => ({ ans: p.p * (Math.exp(p.delta / p.p) - 1) * 100 }),
      show: (p, s) =>
        W(
          `$1 + i = e^{\\delta}$ and $\\left(1 + \\frac{i^{(${p.p})}}{${p.p}}\\right)^{${p.p}} = 1 + i$, so $i^{(${p.p})} = ${p.p}\\left(e^{\\delta/${p.p}} - 1\\right)$.`,
          `$i^{(${p.p})} = ${p.p}\\left(e^{${nf(p.delta, 6)}/${p.p}} - 1\\right) = ${nf(s.ans / 100, 6)}$.`,
          ans(`${nf(s.ans, 3)}%`)
        ),
    }),
    calc({
      id: "cm1-m02-c04", module: "m02", unit: "£", dp: 2, tolerance: { rel: 0.0005 },
      params: () => ({
        P: randStep(1000, 25000, 500),
        j: randStep(0.03, 0.08, 0.0025),
        n1: randInt(2, 6),
        delta: randStep(0.02, 0.07, 0.0025),
        n2: randInt(2, 6),
      }),
      question: (p) =>
        `${money(p.P, 0)} is invested for ${p.n1} years at a nominal rate of ${pc(p.j)} a year convertible quarterly, and then for a further ${p.n2} years at a constant force of interest of ${pc(p.delta)} a year. Calculate the final accumulated amount.`,
      solve: (p) => {
        const f1 = (1 + p.j / 4) ** (4 * p.n1);
        const f2 = Math.exp(p.delta * p.n2);
        return { f1, f2, ans: p.P * f1 * f2 };
      },
      show: (p, s) =>
        W(
          `Accumulate each period at its own rate, then multiply.`,
          `First ${p.n1} years: $\\left(1 + \\frac{${nf(p.j, 6)}}{4}\\right)^{4 \\times ${p.n1}} = ${nf(s.f1, 6)}$.`,
          `Next ${p.n2} years: $e^{${nf(p.delta, 6)} \\times ${p.n2}} = ${nf(s.f2, 6)}$.`,
          `$${p.P} \\times ${nf(s.f1, 6)} \\times ${nf(s.f2, 6)} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),

    /* ---------- m03 Real and money interest rates ---------- */
    calc({
      id: "cm1-m03-c01", module: "m03", unit: "%", dp: 3, tolerance: { abs: 0.005 },
      params: () => ({ i: randStep(0.03, 0.1, 0.0025), j: randStep(0.01, 0.06, 0.0025) }),
      question: (p) => `An investment earns a money rate of return of ${pc(p.i)} a year effective, while inflation runs at ${pc(p.j)} a year. Calculate the real rate of return.`,
      signed: true,
      solve: (p) => ({ ans: ((1 + p.i) / (1 + p.j) - 1) * 100 }),
      show: (p, s) =>
        W(
          `Money grows by $1+i$ while prices grow by $1+j$, so purchasing power grows by $\\frac{1+i}{1+j}$: the real rate is $i' = \\frac{1+i}{1+j} - 1$.`,
          `$i' = \\frac{${nf(1 + p.i, 6)}}{${nf(1 + p.j, 6)}} - 1 = ${nf(s.ans / 100, 6)}$.`,
          `The shortcut $i - j = ${nf((p.i - p.j) * 100, 4)}\\%$ overstates it.`,
          ans(`${nf(s.ans, 3)}%`)
        ),
    }),
    calc({
      id: "cm1-m03-c02", module: "m03", unit: "%", dp: 3, tolerance: { abs: 0.005 },
      signed: true,
      params: () => {
        const P = randStep(5000, 50000, 1000);
        const n = randInt(3, 10);
        const Q0 = randStep(100, 300, 0.1);
        const Qn = roundTo(Q0 * (1 + randStep(0.01, 0.05, 0.0025)) ** n, 1);
        const X = Math.round(P * (1 + randStep(0.03, 0.09, 0.0025)) ** n);
        return { P, n, Q0, Qn, X };
      },
      question: (p) =>
        `An investor pays ${money(p.P, 0)} for an asset and sells it ${p.n} years later for ${money(p.X, 0)}. A retail price index stood at ${nf(p.Q0, 1)} at purchase and ${nf(p.Qn, 1)} at sale. Calculate the annual effective <em>real</em> rate of return.`,
      solve: (p) => {
        const money_ = p.X / p.P;
        const prices = p.Qn / p.Q0;
        return { money_, prices, ans: ((money_ / prices) ** (1 / p.n) - 1) * 100 };
      },
      show: (p, s) =>
        W(
          `Deflate the proceeds by the price index, then solve for the rate: $${p.P}(1+i')^{${p.n}} = ${p.X} \\times \\frac{${nf(p.Q0, 1)}}{${nf(p.Qn, 1)}}$.`,
          `$(1+i')^{${p.n}} = \\frac{${nf(s.money_, 6)}}{${nf(s.prices, 6)}} = ${nf(s.money_ / s.prices, 6)}$.`,
          `$i' = ${nf(s.money_ / s.prices, 6)}^{1/${p.n}} - 1 = ${nf(s.ans / 100, 6)}$.`,
          ans(`${nf(s.ans, 3)}%`)
        ),
    }),
    calc({
      id: "cm1-m03-c03", module: "m03", unit: "%", dp: 3, tolerance: { abs: 0.005 },
      params: () => ({ r: randStep(0.01, 0.05, 0.0025), j: randStep(0.01, 0.06, 0.0025) }),
      question: (p) => `A pension fund wants a real return of ${pc(p.r)} a year. If inflation is expected to be ${pc(p.j)} a year, what money rate of return does it need?`,
      solve: (p) => ({ ans: ((1 + p.r) * (1 + p.j) - 1) * 100 }),
      show: (p, s) =>
        W(
          `$1 + i = (1 + i')(1 + j)$: the money return must cover inflation and then deliver the real return on top.`,
          `$1 + i = ${nf(1 + p.r, 6)} \\times ${nf(1 + p.j, 6)} = ${nf(1 + s.ans / 100, 8)}$.`,
          `Adding the two rates gives ${nf((p.r + p.j) * 100, 4)}%, which misses the cross term $i'j$.`,
          ans(`${nf(s.ans, 3)}%`)
        ),
    }),

    /* ---------- m04 Discounting and accumulating ---------- */
    calc({
      id: "cm1-m04-c01", module: "m04", unit: "£", dp: 2, tolerance: { rel: 0.0005 },
      params: () => ({
        a: randStep(0.02, 0.05, 0.005),
        b: pick([0.001, 0.002, 0.0025, 0.003, 0.004, 0.005]),
        T: randInt(3, 10),
        C: randStep(1000, 10000, 500),
      }),
      question: (p) =>
        `The force of interest at time $t$ (years) is $\\delta(t) = ${nf(p.a, 6)} + ${nf(p.b, 6)}t$. Calculate the present value at time 0 of ${money(p.C, 0)} due at time ${p.T}.`,
      solve: (p) => {
        const integral = p.a * p.T + (p.b * p.T * p.T) / 2;
        return { integral, ans: p.C * Math.exp(-integral) };
      },
      show: (p, s) =>
        W(
          `$v(${p.T}) = \\exp\\left(-\\int_0^{${p.T}} \\delta(t)\\,dt\\right)$ and $\\int_0^{${p.T}} (${nf(p.a, 6)} + ${nf(p.b, 6)}t)\\,dt = ${nf(p.a, 6)} \\times ${p.T} + ${nf(p.b, 6)} \\times \\frac{${p.T}^2}{2} = ${nf(s.integral, 6)}$.`,
          `PV $= ${p.C} e^{-${nf(s.integral, 6)}} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m04-c02", module: "m04", unit: "£", dp: 2, tolerance: { rel: 0.0005 },
      params: () => {
        const t1 = randInt(0, 4);
        return { a: randStep(0.02, 0.05, 0.005), b: pick([0.0001, 0.0002, 0.0005]), t1, t2: t1 + randInt(2, 6), C: randStep(1000, 10000, 500) };
      },
      question: (p) =>
        `The force of interest at time $t$ is $\\delta(t) = ${nf(p.a, 6)} + ${nf(p.b, 6)}t^2$. ${money(p.C, 0)} is invested at time ${p.t1}. Calculate its accumulated value at time ${p.t2}.`,
      solve: (p) => {
        const integral = p.a * (p.t2 - p.t1) + (p.b * (p.t2 ** 3 - p.t1 ** 3)) / 3;
        return { integral, ans: p.C * Math.exp(integral) };
      },
      show: (p, s) =>
        W(
          `$A(${p.t1}, ${p.t2}) = \\exp\\left(\\int_{${p.t1}}^{${p.t2}} \\delta(t)\\,dt\\right)$.`,
          `$\\int_{${p.t1}}^{${p.t2}} \\delta(t)\\,dt = ${nf(p.a, 6)}(${p.t2} - ${p.t1}) + \\frac{${nf(p.b, 6)}}{3}(${p.t2}^3 - ${p.t1}^3) = ${nf(s.integral, 6)}$.`,
          `Value $= ${p.C} e^{${nf(s.integral, 6)}} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m04-c03", module: "m04", unit: "%", dp: 3, tolerance: { abs: 0.003 },
      params: () => {
        const k = randInt(2, 6);
        return { d1: randStep(0.02, 0.06, 0.0025), d2: randStep(0.02, 0.06, 0.0025), k, T: k + randInt(2, 8) };
      },
      question: (p) =>
        `The force of interest is ${pc(p.d1)} a year for $0 \\le t < ${p.k}$ and ${pc(p.d2)} a year for $t \\ge ${p.k}$. Calculate the constant annual effective rate of interest that gives the same accumulation over the ${p.T} years from time 0 to time ${p.T}.`,
      solve: (p) => {
        const integral = p.d1 * p.k + p.d2 * (p.T - p.k);
        return { integral, ans: (Math.exp(integral / p.T) - 1) * 100 };
      },
      show: (p, s) =>
        W(
          `$\\int_0^{${p.T}} \\delta(t)\\,dt = ${nf(p.d1, 6)} \\times ${p.k} + ${nf(p.d2, 6)} \\times ${p.T - p.k} = ${nf(s.integral, 6)}$.`,
          `We need $(1+i)^{${p.T}} = e^{${nf(s.integral, 6)}}$, so $i = e^{${nf(s.integral, 6)}/${p.T}} - 1$.`,
          ans(`${nf(s.ans, 3)}%`)
        ),
    }),
    calc({
      id: "cm1-m04-c04", module: "m04", unit: "£", dp: 2, tolerance: { rel: 0.0005 },
      params: () => ({ c: randStep(500, 5000, 100), k: pick([0.01, 0.02, 0.03]), delta: randStep(0.04, 0.08, 0.005), n: randInt(5, 15) }),
      question: (p) =>
        `A payment stream is received continuously at a rate of $\\rho(t) = ${p.c}e^{${nf(p.k, 6)}t}$ a year (in pounds) for $0 \\le t \\le ${p.n}$. At a constant force of interest of ${pc(p.delta)}, calculate its present value at time 0.`,
      solve: (p) => {
        const net = p.delta - p.k;
        return { net, ans: (p.c * (1 - Math.exp(-net * p.n))) / net };
      },
      show: (p, s) =>
        W(
          `PV $= \\int_0^{${p.n}} ${p.c}e^{${nf(p.k, 6)}t} e^{-${nf(p.delta, 6)}t}\\,dt = ${p.c}\\int_0^{${p.n}} e^{-${nf(s.net, 6)}t}\\,dt$.`,
          `$= ${p.c} \\times \\frac{1 - e^{-${nf(s.net, 6)} \\times ${p.n}}}{${nf(s.net, 6)}} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),

    /* ---------- m05 Level annuities ---------- */
    calc({
      id: "cm1-m05-c01", module: "m05", unit: "£", dp: 2, tolerance: { rel: 0.001 },
      params: () => ({ X: randStep(500, 10000, 100), n: randInt(5, 30), i: randStep(0.02, 0.08, 0.005) }),
      question: (p) => `Calculate the present value of an annuity of ${money(p.X, 0)} a year payable annually in arrear for ${p.n} years, at ${pc(p.i)} a year effective.`,
      solve: (p) => ({ a: an(p.n, p.i), ans: p.X * an(p.n, p.i) }),
      show: (p, s) =>
        W(
          `PV $= X a_{\\overline{${p.n}}|}$, with $a_{\\overline{${p.n}}|} = \\frac{1 - v^{${p.n}}}{i} = \\frac{1 - ${nf(1 + p.i, 6)}^{-${p.n}}}{${nf(p.i, 6)}} = ${nf(s.a, 4)}$.`,
          `PV $= ${p.X} \\times ${nf(s.a, 4)} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m05-c02", module: "m05", unit: "£", dp: 2, tolerance: { rel: 0.001 },
      params: () => ({ X: randStep(1200, 24000, 600), n: randInt(5, 25), i: randStep(0.02, 0.08, 0.005) }),
      question: (p) => `Calculate the present value of an annuity of ${money(p.X, 0)} a year payable <em>monthly in advance</em> for ${p.n} years, at ${pc(p.i)} a year effective.`,
      solve: (p) => ({ d12: dpOf(p.i, 12), a: adpn(p.n, p.i, 12), ans: p.X * adpn(p.n, p.i, 12) }),
      show: (p, s) =>
        W(
          `PV $= X \\ddot{a}^{(12)}_{\\overline{${p.n}}|} = X \\frac{1 - v^{${p.n}}}{d^{(12)}}$.`,
          `$d^{(12)} = 12(1 - ${nf(1 + p.i, 6)}^{-1/12}) = ${nf(s.d12, 6)}$, so $\\ddot{a}^{(12)}_{\\overline{${p.n}}|} = ${nf(s.a, 4)}$.`,
          `PV $= ${p.X} \\times ${nf(s.a, 4)} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m05-c03", module: "m05", unit: "£", dp: 2, tolerance: { rel: 0.001 },
      params: () => ({ X: randStep(1000, 20000, 500), m: randInt(2, 10), n: randInt(5, 20), i: randStep(0.02, 0.08, 0.005) }),
      question: (p) =>
        `An annuity of ${money(p.X, 0)} a year is payable quarterly in arrear for ${p.n} years, the first payment being made at time ${p.m}&frac14;. Calculate its present value at time 0 at ${pc(p.i)} a year effective.`,
      solve: (p) => {
        const a4 = apn(p.n, p.i, 4);
        return { a4, i4: ipOf(p.i, 4), v: vn(p.m, p.i), ans: p.X * vn(p.m, p.i) * a4 };
      },
      show: (p, s) =>
        W(
          `The first payment at ${p.m}&frac14; means the annuity is deferred ${p.m} years: PV $= X\\,v^{${p.m}}\\,a^{(4)}_{\\overline{${p.n}}|}$.`,
          `$i^{(4)} = 4(${nf(1 + p.i, 6)}^{1/4} - 1) = ${nf(s.i4, 6)}$, so $a^{(4)}_{\\overline{${p.n}}|} = \\frac{1 - v^{${p.n}}}{i^{(4)}} = ${nf(s.a4, 4)}$; $v^{${p.m}} = ${nf(s.v, 6)}$.`,
          `PV $= ${p.X} \\times ${nf(s.v, 6)} \\times ${nf(s.a4, 4)} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m05-c04", module: "m05", unit: "£", dp: 2, tolerance: { rel: 0.001 },
      params: () => ({ Y: randStep(50, 1000, 25), n: randInt(5, 30), i: randStep(0.02, 0.08, 0.005) }),
      question: (p) => `A saver pays ${money(p.Y, 0)} a month into an account, monthly in advance, for ${p.n} years. At ${pc(p.i)} a year effective, how much is in the account at the end of the ${p.n} years?`,
      solve: (p) => ({ s: sdpn(p.n, p.i, 12), ans: 12 * p.Y * sdpn(p.n, p.i, 12) }),
      show: (p, s) =>
        W(
          `The annual amount is $12 \\times ${p.Y} = ${12 * p.Y}$, so the value is $${12 * p.Y}\\,\\ddot{s}^{(12)}_{\\overline{${p.n}}|}$, where $\\ddot{s}^{(12)}_{\\overline{${p.n}}|} = \\frac{(1+i)^{${p.n}} - 1}{d^{(12)}}$.`,
          `$d^{(12)} = ${nf(dpOf(p.i, 12), 6)}$, so $\\ddot{s}^{(12)}_{\\overline{${p.n}}|} = ${nf(s.s, 4)}$ and the fund is $${12 * p.Y} \\times ${nf(s.s, 4)} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),

    /* ---------- m06 Increasing annuities ---------- */
    calc({
      id: "cm1-m06-c01", module: "m06", unit: "£", dp: 2, tolerance: { rel: 0.001 },
      params: () => ({ X: randStep(100, 2000, 50), n: randInt(5, 20), i: randStep(0.03, 0.08, 0.005) }),
      question: (p) =>
        `Payments of ${money(p.X, 0)}, ${money(2 * p.X, 0)}, ${money(3 * p.X, 0)}, &hellip;, ${money(p.n * p.X, 0)} are made at the ends of years 1, 2, 3, &hellip;, ${p.n}. Calculate their present value at ${pc(p.i)} a year effective.`,
      solve: (p) => ({ ad: adn(p.n, p.i), Ia: Ian(p.n, p.i), ans: p.X * Ian(p.n, p.i) }),
      show: (p, s) =>
        W(
          `PV $= ${p.X}\\,(Ia)_{\\overline{${p.n}}|}$, with $(Ia)_{\\overline{${p.n}}|} = \\frac{\\ddot{a}_{\\overline{${p.n}}|} - ${p.n}v^{${p.n}}}{i}$.`,
          `$\\ddot{a}_{\\overline{${p.n}}|} = ${nf(s.ad, 4)}$ and $${p.n}v^{${p.n}} = ${nf(p.n * vn(p.n, p.i), 4)}$, so $(Ia)_{\\overline{${p.n}}|} = ${nf(s.Ia, 4)}$.`,
          `PV $= ${p.X} \\times ${nf(s.Ia, 4)} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m06-c02", module: "m06", unit: "£", dp: 2, tolerance: { rel: 0.001 },
      params: () => ({ A: randStep(1000, 5000, 100), K: randStep(50, 500, 25), n: randInt(5, 20), i: randStep(0.03, 0.08, 0.005) }),
      question: (p) =>
        `An annuity pays ${money(p.A, 0)} at the end of the first year, and each later annual payment is ${money(p.K, 0)} more than the one before. There are ${p.n} payments. Calculate the present value at ${pc(p.i)} a year effective.`,
      solve: (p) => ({ a: an(p.n, p.i), Ia: Ian(p.n, p.i), ans: (p.A - p.K) * an(p.n, p.i) + p.K * Ian(p.n, p.i) }),
      show: (p, s) =>
        W(
          `Payment $t$ is $${p.A - p.K} + ${p.K}t$: a level part plus an increasing part. PV $= ${p.A - p.K}\\,a_{\\overline{${p.n}}|} + ${p.K}\\,(Ia)_{\\overline{${p.n}}|}$.`,
          `$a_{\\overline{${p.n}}|} = ${nf(s.a, 4)}$, $(Ia)_{\\overline{${p.n}}|} = ${nf(s.Ia, 4)}$.`,
          `PV $= ${p.A - p.K} \\times ${nf(s.a, 4)} + ${p.K} \\times ${nf(s.Ia, 4)} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m06-c03", module: "m06", unit: "£", dp: 2, tolerance: { rel: 0.001 },
      params: () => ({ X: randStep(1000, 10000, 500), g: pick([0.01, 0.015, 0.02, 0.025, 0.03]), n: randInt(5, 25), i: randStep(0.04, 0.09, 0.005) }),
      question: (p) =>
        `An annuity pays ${money(p.X, 0)} at the end of the first year, and each later annual payment is ${pc(p.g)} higher than the one before (compound). There are ${p.n} payments. Calculate the present value at ${pc(p.i)} a year effective.`,
      solve: (p) => {
        const j = (1 + p.i) / (1 + p.g) - 1;
        return { j, aj: an(p.n, j), ans: (p.X / (1 + p.g)) * an(p.n, j) };
      },
      show: (p, s) =>
        W(
          `PV $= \\sum_{t=1}^{${p.n}} ${p.X}(1+g)^{t-1}v^t = \\frac{${p.X}}{1+g}\\sum_{t=1}^{${p.n}} \\left(\\frac{1+g}{1+i}\\right)^t = \\frac{${p.X}}{${nf(1 + p.g, 6)}}\\,a_{\\overline{${p.n}}|\\,j}$,`,
          `where $1 + j = \\frac{${nf(1 + p.i, 6)}}{${nf(1 + p.g, 6)}}$, so $j = ${nf(s.j, 6)}$ and $a_{\\overline{${p.n}}|\\,j} = ${nf(s.aj, 4)}$.`,
          `PV $= ${nf(p.X / (1 + p.g), 4)} \\times ${nf(s.aj, 4)} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m06-c04", module: "m06", unit: "£", dp: 2, tolerance: { rel: 0.001 },
      params: () => ({ X: randStep(100, 2000, 50), n: randInt(5, 20), i: randStep(0.03, 0.08, 0.005) }),
      question: (p) =>
        `Money is received continuously at a rate of ${money(p.X, 0)}$\\,t$ a year at time $t$, for $0 \\le t \\le ${p.n}$. Calculate the present value at ${pc(p.i)} a year effective.`,
      solve: (p) => ({ delta: deltaOf(p.i), abar: abarn(p.n, p.i), I: IbarAbarn(p.n, p.i), ans: p.X * IbarAbarn(p.n, p.i) }),
      show: (p, s) =>
        W(
          `PV $= ${p.X}\\int_0^{${p.n}} t v^t\\,dt = ${p.X}\\,(\\bar{I}\\bar{a})_{\\overline{${p.n}}|}$, where $(\\bar{I}\\bar{a})_{\\overline{${p.n}}|} = \\frac{\\bar{a}_{\\overline{${p.n}}|} - ${p.n}v^{${p.n}}}{\\delta}$.`,
          `$\\delta = \\ln ${nf(1 + p.i, 6)} = ${nf(s.delta, 6)}$, $\\bar{a}_{\\overline{${p.n}}|} = \\frac{1 - v^{${p.n}}}{\\delta} = ${nf(s.abar, 4)}$, so $(\\bar{I}\\bar{a})_{\\overline{${p.n}}|} = ${nf(s.I, 4)}$.`,
          `PV $= ${p.X} \\times ${nf(s.I, 4)} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),

    /* ---------- m07 Equations of value ---------- */
    calc({
      id: "cm1-m07-c01", module: "m07", unit: "%", dp: 2, tolerance: { abs: 0.02 },
      params: () => {
        const A = randStep(500, 5000, 100);
        const R = randStep(5000, 50000, 1000);
        const n = randInt(5, 20);
        const y = randStep(0.03, 0.09, 0.0025);
        return { A, R, n, P: Math.round((A * an(n, y) + R * vn(n, y)) / 100) * 100 };
      },
      question: (p) =>
        `An investor pays ${money(p.P, 0)} for the right to receive ${money(p.A, 0)} at the end of each year for ${p.n} years, plus ${money(p.R, 0)} at the end of year ${p.n}. Calculate the annual effective yield.`,
      solve: (p) => {
        const f = (y) => p.A * an(p.n, y) + p.R * vn(p.n, y) - p.P;
        return { ans: solve(f, -0.5, 1) * 100 };
      },
      show: (p, s) =>
        W(
          `The yield $i$ solves the equation of value $${p.A}\\,a_{\\overline{${p.n}}|} + ${p.R}\\,v^{${p.n}} = ${p.P}$.`,
          `There's no closed form, so try rates either side and interpolate (or iterate). At $i = ${nf(Math.floor(s.ans) / 100, 4)}$ the left side is $${m2(p.A * an(p.n, Math.floor(s.ans) / 100) + p.R * vn(p.n, Math.floor(s.ans) / 100))}$; at $i = ${nf(Math.ceil(s.ans + 1e-9) / 100, 4)}$ it is $${m2(p.A * an(p.n, Math.ceil(s.ans + 1e-9) / 100) + p.R * vn(p.n, Math.ceil(s.ans + 1e-9) / 100))}$.`,
          `Solving exactly gives $i = ${nf(s.ans / 100, 6)}$. Linear interpolation between the two trial rates lands within a few hundredths of a percent.`,
          ans(`${nf(s.ans, 2)}%`)
        ),
    }),
    calc({
      id: "cm1-m07-c02", module: "m07", unit: "years", dp: 2, tolerance: { abs: 0.01 },
      params: () => {
        const P = randStep(1000, 20000, 500);
        return { P, X: Math.round((P * randStep(1.3, 3.5, 0.05)) / 100) * 100, i: randStep(0.02, 0.08, 0.0025) };
      },
      question: (p) => `How long does it take ${money(p.P, 0)} to accumulate to ${money(p.X, 0)} at ${pc(p.i)} a year effective? Give your answer in years.`,
      solve: (p) => ({ ans: Math.log(p.X / p.P) / Math.log(1 + p.i) }),
      show: (p, s) =>
        W(
          `$${p.P}(1+i)^t = ${p.X}$, so $t = \\frac{\\ln(${p.X}/${p.P})}{\\ln ${nf(1 + p.i, 6)}} = \\frac{${nf(Math.log(p.X / p.P), 6)}}{${nf(Math.log(1 + p.i), 6)}}$.`,
          ans(`${nf(s.ans, 2)} years`)
        ),
    }),
    calc({
      id: "cm1-m07-c03", module: "m07", unit: "%", dp: 2, tolerance: { abs: 0.02 },
      params: () => {
        const A = randStep(1000, 10000, 500);
        const B = randStep(1000, 10000, 500);
        const t1 = randInt(1, 4);
        const t2 = t1 + randInt(2, 6);
        const y = randStep(0.03, 0.1, 0.0025);
        return { A, B, t1, t2, C: Math.round(((A + B * vn(t1, y)) * (1 + y) ** t2) / 10) * 10 };
      },
      question: (p) =>
        `An investor pays ${money(p.A, 0)} now and ${money(p.B, 0)} at time ${p.t1} years, in return for ${money(p.C, 0)} at time ${p.t2}. Calculate the annual effective yield.`,
      solve: (p) => ({ ans: solve((y) => p.A + p.B * vn(p.t1, y) - p.C * vn(p.t2, y), -0.5, 1) * 100 }),
      show: (p, s) =>
        W(
          `Equation of value at time 0: $${p.A} + ${p.B}v^{${p.t1}} = ${p.C}v^{${p.t2}}$.`,
          `Solve numerically for $i$ (trial and error, then interpolate): $i = ${nf(s.ans / 100, 6)}$.`,
          `Check: $${p.A} + ${p.B} \\times ${nf(vn(p.t1, s.ans / 100), 6)} = ${m2(p.A + p.B * vn(p.t1, s.ans / 100))}$ and $${p.C} \\times ${nf(vn(p.t2, s.ans / 100), 6)} = ${m2(p.C * vn(p.t2, s.ans / 100))}$.`,
          ans(`${nf(s.ans, 2)}%`)
        ),
    }),

    /* ---------- m08 Loan schedules ---------- */
    calc({
      id: "cm1-m08-c01", module: "m08", unit: "£", dp: 2, tolerance: { rel: 0.001 },
      params: () => ({ L: randStep(10000, 250000, 5000), n: randInt(5, 25), i: randStep(0.03, 0.08, 0.0025) }),
      question: (p) => `A loan of ${money(p.L, 0)} is repaid by level annual instalments in arrear over ${p.n} years at ${pc(p.i)} a year effective. Calculate the annual instalment.`,
      solve: (p) => ({ a: an(p.n, p.i), ans: p.L / an(p.n, p.i) }),
      show: (p, s) =>
        W(
          `$X a_{\\overline{${p.n}}|} = ${p.L}$, with $a_{\\overline{${p.n}}|} = ${nf(s.a, 4)}$.`,
          `$X = ${p.L} / ${nf(s.a, 4)} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m08-c02", module: "m08", unit: "£", dp: 2, tolerance: { rel: 0.001 },
      params: () => {
        const n = randInt(8, 25);
        return { L: randStep(10000, 250000, 5000), n, k: randInt(2, n - 2), i: randStep(0.03, 0.08, 0.0025) };
      },
      question: (p) =>
        `A loan of ${money(p.L, 0)} is repaid by level annual instalments in arrear over ${p.n} years at ${pc(p.i)} a year effective. Calculate the loan outstanding immediately after the ${p.k}th instalment has been paid.`,
      solve: (p) => {
        const X = p.L / an(p.n, p.i);
        return { X, rem: an(p.n - p.k, p.i), ans: X * an(p.n - p.k, p.i) };
      },
      show: (p, s) =>
        W(
          `Instalment: $X = ${p.L} / a_{\\overline{${p.n}}|} = ${m2(s.X)}$.`,
          `Prospectively, the loan outstanding is the value of the ${p.n - p.k} instalments still to come: $X a_{\\overline{${p.n - p.k}}|} = ${m2(s.X)} \\times ${nf(s.rem, 4)} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m08-c03", module: "m08", unit: "£", dp: 2, tolerance: { rel: 0.002 },
      params: () => {
        const n = randInt(8, 25);
        return { L: randStep(10000, 250000, 5000), n, t: randInt(2, n - 1), i: randStep(0.03, 0.08, 0.0025) };
      },
      question: (p) =>
        `A loan of ${money(p.L, 0)} is repaid by level annual instalments in arrear over ${p.n} years at ${pc(p.i)} a year effective. How much of the ${p.t}th instalment is <em>interest</em>?`,
      solve: (p) => {
        const X = p.L / an(p.n, p.i);
        const before = X * an(p.n - p.t + 1, p.i);
        return { X, before, ans: p.i * before };
      },
      show: (p, s) =>
        W(
          `Instalment: $X = ${p.L} / a_{\\overline{${p.n}}|} = ${m2(s.X)}$.`,
          `Loan outstanding just after instalment ${p.t - 1}: $X a_{\\overline{${p.n - p.t + 1}}|} = ${m2(s.before)}$.`,
          `Interest in instalment ${p.t} $= i \\times ${m2(s.before)} = ${m2(s.ans)}$, the same as $X(1 - v^{${p.n - p.t + 1}})$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m08-c04", module: "m08", unit: "£", dp: 2, tolerance: { rel: 0.001 },
      params: () => ({ L: randStep(50000, 400000, 5000), n: randInt(10, 30), i: randStep(0.03, 0.08, 0.0025) }),
      question: (p) => `A mortgage of ${money(p.L, 0)} is repaid by level monthly payments in arrear over ${p.n} years. Interest is ${pc(p.i)} a year <em>effective</em>. Calculate the monthly payment.`,
      solve: (p) => ({ i12: ipOf(p.i, 12), a: apn(p.n, p.i, 12), ans: p.L / (12 * apn(p.n, p.i, 12)) }),
      show: (p, s) =>
        W(
          `With annual repayment $12X$ payable monthly: $12X\\,a^{(12)}_{\\overline{${p.n}}|} = ${p.L}$.`,
          `$i^{(12)} = 12(${nf(1 + p.i, 6)}^{1/12} - 1) = ${nf(s.i12, 6)}$, so $a^{(12)}_{\\overline{${p.n}}|} = \\frac{1 - v^{${p.n}}}{i^{(12)}} = ${nf(s.a, 4)}$.`,
          `$X = \\frac{${p.L}}{12 \\times ${nf(s.a, 4)}} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),

    /* ---------- m09 Project appraisal ---------- */
    calc({
      id: "cm1-m09-c01", module: "m09", unit: "£", dp: 0, signed: true, tolerance: { rel: 0.002, abs: 20 },
      params: () => {
        const C0 = randStep(100000, 500000, 10000);
        const C1 = randStep(0, 200000, 10000);
        const T = randInt(8, 20);
        const i = randStep(0.04, 0.1, 0.005);
        const breakEven = (C0 + C1 * vn(1, i)) / (vn(2, i) * abarn(T - 2, i));
        return { C0, C1, T, i, R: Math.round((breakEven * randStep(0.8, 1.3, 0.01)) / 1000) * 1000 };
      },
      question: (p) =>
        `A project needs an outlay of ${money(p.C0, 0)} now${p.C1 ? ` and a further ${money(p.C1, 0)} in one year` : ""}. It then produces net income of ${money(p.R, 0)} a year, received continuously from time 2 to time ${p.T}. Calculate the net present value at ${pc(p.i)} a year effective.`,
      solve: (p) => {
        const inc = p.R * vn(2, p.i) * abarn(p.T - 2, p.i);
        const out = p.C0 + p.C1 * vn(1, p.i);
        return { inc, out, ans: inc - out };
      },
      show: (p, s) =>
        W(
          `PV of outgo $= ${p.C0}${p.C1 ? ` + ${p.C1}v` : ""} = ${m2(s.out)}$.`,
          `PV of income $= ${p.R}\\,v^2\\,\\bar{a}_{\\overline{${p.T - 2}}|} = ${p.R} \\times ${nf(vn(2, p.i), 6)} \\times ${nf(abarn(p.T - 2, p.i), 4)} = ${m2(s.inc)}$, with $\\bar{a}_{\\overline{n}|} = \\frac{1 - v^n}{\\delta}$.`,
          `NPV $= ${m2(s.inc)} - ${m2(s.out)} = ${m2(s.ans)}$.`,
          ans(money(s.ans, 0))
        ),
    }),
    calc({
      id: "cm1-m09-c02", module: "m09", unit: "%", dp: 2, tolerance: { abs: 0.02 },
      params: () => {
        const R = randStep(1000, 20000, 500);
        const n = randInt(5, 20);
        const y = randStep(0.04, 0.15, 0.005);
        return { R, n, C: Math.round((R * an(n, y)) / 1000) * 1000 };
      },
      question: (p) => `A project costs ${money(p.C, 0)} now and returns ${money(p.R, 0)} at the end of each year for ${p.n} years. Calculate its internal rate of return.`,
      solve: (p) => ({ ans: solve((y) => p.R * an(p.n, y) - p.C, -0.5, 1) * 100 }),
      show: (p, s) =>
        W(
          `The IRR solves $${p.R}\\,a_{\\overline{${p.n}}|} = ${p.C}$, i.e. $a_{\\overline{${p.n}}|} = ${nf(p.C / p.R, 4)}$.`,
          `Find two rates either side from the tables or by trial, and interpolate: $i = ${nf(s.ans / 100, 6)}$.`,
          ans(`${nf(s.ans, 2)}%`)
        ),
    }),
    calc({
      id: "cm1-m09-c03", module: "m09", unit: "years", dp: 0, tolerance: { abs: 0 },
      params: () => {
        const i = randStep(0.03, 0.08, 0.005);
        const C = randStep(50000, 200000, 5000);
        // payback within 4-20 years: R must comfortably exceed iC
        const R = Math.round(C / an(randInt(4, 20) - 0.5, i) / 100) * 100;
        return { C, R, i };
      },
      question: (p) =>
        `A project costs ${money(p.C, 0)} now and produces ${money(p.R, 0)} at the end of each year indefinitely. At ${pc(p.i)} a year effective, calculate the discounted payback period, as a whole number of years.`,
      solve: (p) => {
        let n = 0;
        let pv = 0;
        while (pv < p.C && n < 1000) {
          n += 1;
          pv += p.R * vn(n, p.i);
        }
        const exact = -Math.log(1 - (p.i * p.C) / p.R) / Math.log(1 + p.i);
        return { exact, ans: n };
      },
      show: (p, s) =>
        W(
          `The DPP is the first year $n$ in which the accumulated (or discounted) income covers the outlay: the smallest $n$ with $${p.R}\\,a_{\\overline{n}|} \\ge ${p.C}$.`,
          `$a_{\\overline{n}|} \\ge ${nf(p.C / p.R, 4)} \\iff 1 - v^n \\ge ${nf((p.i * p.C) / p.R, 6)} \\iff n \\ge ${nf(s.exact, 3)}$.`,
          `Income arrives only at year ends, so round up: $a_{\\overline{${s.ans - 1}}|} = ${nf(an(s.ans - 1, p.i), 4)}$ falls short, $a_{\\overline{${s.ans}}|} = ${nf(an(s.ans, p.i), 4)}$ does not.`,
          ans(`${s.ans} years`)
        ),
    }),
    calc({
      id: "cm1-m09-c04", module: "m09", unit: "%", dp: 2, signed: true, tolerance: { abs: 0.01 },
      params: () => {
        const F0 = randStep(100000, 500000, 1000);
        const F1 = Math.round(F0 * (1 + randStep(-0.04, 0.08, 0.005)) / 100) * 100;
        const C = randStep(-50000, 100000, 5000) || 25000;
        const F2 = Math.round((F1 + C) * (1 + randStep(-0.04, 0.08, 0.005)) / 100) * 100;
        return { F0, F1, C, F2 };
      },
      question: (p) =>
        `A fund is worth ${money(p.F0, 0)} on 1 January. On 1 July, just before a net cash flow, it is worth ${money(p.F1, 0)}; the cash flow is ${p.C > 0 ? `an inflow of ${money(p.C, 0)}` : `an outflow (withdrawal) of ${money(-p.C, 0)}`}. On 31 December it is worth ${money(p.F2, 0)}. Calculate the time-weighted rate of return for the year.`,
      solve: (p) => {
        const g1 = p.F1 / p.F0;
        const g2 = p.F2 / (p.F1 + p.C);
        return { g1, g2, ans: (g1 * g2 - 1) * 100 };
      },
      show: (p, s) =>
        W(
          `The TWRR chains the growth factor over each sub-period between cash flows, so the timing and size of the cash flow don't distort it.`,
          `First half: $\\frac{${p.F1}}{${p.F0}} = ${nf(s.g1, 6)}$. Second half starts from $${p.F1} ${p.C >= 0 ? "+" : "-"} ${Math.abs(p.C)} = ${p.F1 + p.C}$: $\\frac{${p.F2}}{${p.F1 + p.C}} = ${nf(s.g2, 6)}$.`,
          `$1 + i = ${nf(s.g1, 6)} \\times ${nf(s.g2, 6)} = ${nf(s.g1 * s.g2, 6)}$.`,
          ans(`${nf(s.ans, 2)}%`)
        ),
    }),
    calc({
      id: "cm1-m09-c05", module: "m09", unit: "%", dp: 2, signed: true, tolerance: { abs: 0.02 },
      params: () => {
        const F0 = randStep(100000, 500000, 1000);
        const C = randStep(-50000, 100000, 5000) || 25000;
        const y = randStep(-0.03, 0.1, 0.005);
        return { F0, C, F1: Math.round((F0 * (1 + y) + C * (1 + y) ** 0.5) / 100) * 100 };
      },
      question: (p) =>
        `A fund is worth ${money(p.F0, 0)} on 1 January. On 1 July there is ${p.C > 0 ? `a net inflow of ${money(p.C, 0)}` : `a net withdrawal of ${money(-p.C, 0)}`}, and on 31 December the fund is worth ${money(p.F1, 0)}. Calculate the money-weighted rate of return for the year.`,
      solve: (p) => ({ ans: solve((y) => p.F0 * (1 + y) + p.C * (1 + y) ** 0.5 - p.F1, -0.9, 2) * 100 }),
      show: (p, s) =>
        W(
          `The MWRR is the yield on the fund's own cash flows: $${p.F0}(1+i) ${p.C >= 0 ? "+" : "-"} ${Math.abs(p.C)}(1+i)^{1/2} = ${p.F1}$.`,
          `This is a quadratic in $(1+i)^{1/2}$; solving (or iterating) gives $i = ${nf(s.ans / 100, 6)}$.`,
          ans(`${nf(s.ans, 2)}%`)
        ),
    }),

    /* ---------- m10 Bonds, equity and property ---------- */
    calc({
      id: "cm1-m10-c01", module: "m10", unit: "£", dp: 2, tolerance: { rel: 0.001 },
      params: () => ({ D: randStep(2, 10, 0.5), R: pick([100, 100, 105, 110]), n: randInt(3, 25), i: randStep(0.02, 0.09, 0.0025) }),
      question: (p) =>
        `A bond pays coupons of ${pc(p.D / 100)} a year half-yearly in arrear and is redeemable at ${p.R}% in ${p.n} years. Calculate the price per £100 nominal to give an investor a gross yield of ${pc(p.i)} a year effective.`,
      solve: (p) => {
        const a2 = apn(p.n, p.i, 2);
        return { a2, ans: p.D * a2 + p.R * vn(p.n, p.i) };
      },
      show: (p, s) =>
        W(
          `$P = D\\,a^{(2)}_{\\overline{${p.n}}|} + R\\,v^{${p.n}}$ with $D = ${p.D}$, $R = ${p.R}$.`,
          `$i^{(2)} = ${nf(ipOf(p.i, 2), 6)}$, so $a^{(2)}_{\\overline{${p.n}}|} = ${nf(s.a2, 4)}$; $v^{${p.n}} = ${nf(vn(p.n, p.i), 6)}$.`,
          `$P = ${p.D} \\times ${nf(s.a2, 4)} + ${p.R} \\times ${nf(vn(p.n, p.i), 6)} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m10-c02", module: "m10", unit: "£", dp: 2, tolerance: { rel: 0.001 },
      params: () => ({ D: randStep(2, 10, 0.5), R: pick([100, 100, 105, 110]), n: randInt(3, 25), i: randStep(0.02, 0.09, 0.0025), t1: pick([0.2, 0.25, 0.3, 0.4]) }),
      question: (p) =>
        `A bond pays coupons of ${pc(p.D / 100)} a year half-yearly in arrear and is redeemable at ${p.R}% in ${p.n} years. An investor pays income tax at ${pc(p.t1)} on coupons and no capital gains tax. Calculate the price per £100 nominal for a net yield of ${pc(p.i)} a year effective.`,
      solve: (p) => {
        const a2 = apn(p.n, p.i, 2);
        return { a2, ans: (1 - p.t1) * p.D * a2 + p.R * vn(p.n, p.i) };
      },
      show: (p, s) =>
        W(
          `Income tax reduces each coupon to $(1 - t_1)D$: $P = (1 - ${nf(p.t1, 4)}) \\times ${p.D}\\,a^{(2)}_{\\overline{${p.n}}|} + ${p.R}\\,v^{${p.n}}$.`,
          `$a^{(2)}_{\\overline{${p.n}}|} = ${nf(s.a2, 4)}$, $v^{${p.n}} = ${nf(vn(p.n, p.i), 6)}$.`,
          `$P = ${nf((1 - p.t1) * p.D, 4)} \\times ${nf(s.a2, 4)} + ${p.R} \\times ${nf(vn(p.n, p.i), 6)} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m10-c03", module: "m10", unit: "£", dp: 2, tolerance: { rel: 0.001 },
      params: () => ({ D: randStep(2, 8, 0.5), R: pick([100, 100, 105, 110]), n: randInt(5, 20), i: randStep(0.03, 0.09, 0.0025), t1: pick([0.2, 0.25, 0.3, 0.4]), t2: pick([0.2, 0.25, 0.3]) }),
      question: (p) =>
        `A bond pays coupons of ${pc(p.D / 100)} a year half-yearly in arrear and is redeemable at ${p.R}% in ${p.n} years. An investor pays income tax at ${pc(p.t1)} and capital gains tax at ${pc(p.t2)}. Calculate the price per £100 nominal for a net yield of ${pc(p.i)} a year effective.`,
      solve: (p) => {
        const a2 = apn(p.n, p.i, 2);
        const v = vn(p.n, p.i);
        const i2 = ipOf(p.i, 2);
        const test = ((1 - p.t1) * p.D) / p.R;
        const gain = i2 > test;
        const noCgt = (1 - p.t1) * p.D * a2 + p.R * v;
        return { a2, v, i2, test, gain, noCgt, ans: gain ? ((1 - p.t1) * p.D * a2 + p.R * (1 - p.t2) * v) / (1 - p.t2 * v) : noCgt };
      },
      show: (p, s) =>
        W(
          `First test for a capital gain: compare $i^{(2)} = ${nf(s.i2, 6)}$ with $(1 - t_1)\\frac{D}{R} = ${nf(s.test, 6)}$.`,
          s.gain
            ? `$i^{(2)} > (1 - t_1)D/R$, so the price is below ${p.R} and there is a gain to tax: $P = (1-t_1)D\\,a^{(2)}_{\\overline{${p.n}}|} + R\\,v^{${p.n}} - t_2(R - P)v^{${p.n}}$.`
            : `$i^{(2)} \\le (1 - t_1)D/R$, so the price is at least ${p.R}: there is no capital gain and CGT doesn't apply. $P = (1-t_1)D\\,a^{(2)}_{\\overline{${p.n}}|} + R\\,v^{${p.n}}$.`,
          s.gain
            ? `Rearranging: $P = \\dfrac{(1-t_1)D\\,a^{(2)}_{\\overline{${p.n}}|} + R(1 - t_2)v^{${p.n}}}{1 - t_2 v^{${p.n}}}$ $= \\dfrac{${nf((1 - p.t1) * p.D, 4)} \\times ${nf(s.a2, 4)} + ${nf(p.R * (1 - p.t2), 4)} \\times ${nf(s.v, 6)}}{1 - ${nf(p.t2, 4)} \\times ${nf(s.v, 6)}} = ${m2(s.ans)}$.`
            : `$P = ${nf((1 - p.t1) * p.D, 4)} \\times ${nf(s.a2, 4)} + ${p.R} \\times ${nf(s.v, 6)} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m10-c04", module: "m10", unit: "£", dp: 2, tolerance: { rel: 0.001, abs: 0.005 },
      params: () => {
        const g = randStep(0.01, 0.05, 0.005);
        return { D: randStep(0.1, 2, 0.05), g, i: clean(g + randStep(0.02, 0.06, 0.005)) };
      },
      question: (p) =>
        `A share has just paid a dividend of ${money(p.D)}. Dividends are paid annually and are expected to grow at ${pc(p.g)} a year compound for ever. Calculate the price an investor should pay for a return of ${pc(p.i)} a year effective.`,
      solve: (p) => ({ ans: (p.D * (1 + p.g)) / (p.i - p.g) }),
      show: (p, s) =>
        W(
          `The next dividend is $${p.D}(1+g) = ${nf(p.D * (1 + p.g), 6)}$, at time 1. Then $P = \\sum_{t \\ge 1} ${p.D}(1+g)^t v^t = \\frac{${p.D}(1+g)}{i - g}$.`,
          `$P = \\frac{${nf(p.D * (1 + p.g), 6)}}{${nf(p.i, 6)} - ${nf(p.g, 6)}} = ${m2(s.ans)}$.`,
          `Using the dividend just paid rather than the next one is the classic slip.`,
          ans(money(s.ans))
        ),
    }),

    /* ---------- m11 Term structure of interest rates ---------- */
    calc({
      id: "cm1-m11-c01", module: "m11", unit: "%", dp: 3, signed: true, tolerance: { abs: 0.003 },
      params: () => {
        const y1 = randStep(0.02, 0.05, 0.0025);
        const y2 = clean(y1 + randStep(-0.0025, 0.01, 0.0025));
        return { y1, y2, y3: clean(y2 + randStep(-0.0025, 0.01, 0.0025)), which: pick(["f21", "f12"]) };
      },
      question: (p) =>
        `The 1-, 2- and 3-year spot rates are ${pc(p.y1)}, ${pc(p.y2)} and ${pc(p.y3)} a year effective. Calculate the ${
          p.which === "f21" ? "1-year forward rate starting at time 2, $f_{2,1}$" : "2-year forward rate starting at time 1, $f_{1,2}$, as an annual effective rate"
        }.`,
      solve: (p) => {
        const r = p.which === "f21" ? (1 + p.y3) ** 3 / (1 + p.y2) ** 2 : ((1 + p.y3) ** 3 / (1 + p.y1)) ** 0.5;
        return { ans: (r - 1) * 100 };
      },
      show: (p, s) =>
        p.which === "f21"
          ? W(
              `No arbitrage: investing for 3 years at the spot rate must match investing for 2 years then rolling over at the forward rate: $(1 + y_3)^3 = (1 + y_2)^2(1 + f_{2,1})$.`,
              `$1 + f_{2,1} = \\frac{${nf(1 + p.y3, 6)}^3}{${nf(1 + p.y2, 6)}^2} = ${nf(1 + s.ans / 100, 6)}$.`,
              ans(`${nf(s.ans, 3)}%`)
            )
          : W(
              `No arbitrage: $(1 + y_3)^3 = (1 + y_1)(1 + f_{1,2})^2$.`,
              `$(1 + f_{1,2})^2 = \\frac{${nf(1 + p.y3, 6)}^3}{${nf(1 + p.y1, 6)}}$, so $1 + f_{1,2} = ${nf(1 + s.ans / 100, 6)}$.`,
              ans(`${nf(s.ans, 3)}%`)
            ),
    }),
    calc({
      id: "cm1-m11-c02", module: "m11", unit: "£", dp: 2, tolerance: { rel: 0.0005 },
      params: () => {
        const y1 = randStep(0.02, 0.05, 0.0025);
        const y2 = clean(y1 + randStep(-0.0025, 0.01, 0.0025));
        return { y1, y2, y3: clean(y2 + randStep(-0.0025, 0.01, 0.0025)), D: randStep(2, 8, 0.5) };
      },
      question: (p) =>
        `The 1-, 2- and 3-year spot rates are ${pc(p.y1)}, ${pc(p.y2)} and ${pc(p.y3)} a year effective. Calculate the price per £100 nominal of a 3-year bond paying annual coupons of ${pc(p.D / 100)} in arrear, redeemed at par.`,
      solve: (p) => {
        const parts = [p.D / (1 + p.y1), p.D / (1 + p.y2) ** 2, (100 + p.D) / (1 + p.y3) ** 3];
        return { parts, ans: parts[0] + parts[1] + parts[2] };
      },
      show: (p, s) =>
        W(
          `Discount each cash flow at the spot rate for its own term: $P = \\frac{${p.D}}{${nf(1 + p.y1, 6)}} + \\frac{${p.D}}{${nf(1 + p.y2, 6)}^2} + \\frac{${100 + p.D}}{${nf(1 + p.y3, 6)}^3}$.`,
          `$= ${nf(s.parts[0], 4)} + ${nf(s.parts[1], 4)} + ${nf(s.parts[2], 4)} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m11-c03", module: "m11", unit: "years", dp: 3, tolerance: { abs: 0.01 },
      params: () => ({ D: randStep(2, 10, 0.5), n: randInt(3, 20), i: randStep(0.02, 0.08, 0.0025) }),
      question: (p) =>
        `A bond pays annual coupons of ${pc(p.D / 100)} in arrear and is redeemed at par in ${p.n} years. Calculate its discounted mean term (Macaulay duration) at ${pc(p.i)} a year effective.`,
      solve: (p) => {
        const top = p.D * Ian(p.n, p.i) + 100 * p.n * vn(p.n, p.i);
        const bottom = p.D * an(p.n, p.i) + 100 * vn(p.n, p.i);
        return { top, bottom, ans: top / bottom };
      },
      show: (p, s) =>
        W(
          `DMT $= \\frac{\\sum t\\,C_t v^t}{\\sum C_t v^t} = \\frac{${p.D}(Ia)_{\\overline{${p.n}}|} + 100 \\times ${p.n}v^{${p.n}}}{${p.D}a_{\\overline{${p.n}}|} + 100v^{${p.n}}}$.`,
          `$(Ia)_{\\overline{${p.n}}|} = ${nf(Ian(p.n, p.i), 4)}$, $a_{\\overline{${p.n}}|} = ${nf(an(p.n, p.i), 4)}$, $v^{${p.n}} = ${nf(vn(p.n, p.i), 6)}$.`,
          `DMT $= \\frac{${nf(s.top, 4)}}{${nf(s.bottom, 4)}} = ${nf(s.ans, 4)}$.`,
          ans(`${nf(s.ans, 3)} years`)
        ),
    }),
    calc({
      id: "cm1-m11-c04", module: "m11", unit: "", dp: 3, tolerance: { abs: 0.01 },
      params: () => ({ n: randInt(5, 25), i: randStep(0.02, 0.08, 0.0025) }),
      question: (p) =>
        `Calculate the effective duration (volatility) at ${pc(p.i)} a year effective of a level annuity payable annually in arrear for ${p.n} years.`,
      solve: (p) => {
        const dmt = Ian(p.n, p.i) / an(p.n, p.i);
        return { dmt, ans: dmt / (1 + p.i) };
      },
      show: (p, s) =>
        W(
          `Volatility $\\nu = -\\frac{A'(i)}{A(i)} = \\frac{\\text{DMT}}{1+i}$.`,
          `For a level annuity, DMT $= \\frac{(Ia)_{\\overline{${p.n}}|}}{a_{\\overline{${p.n}}|}} = \\frac{${nf(Ian(p.n, p.i), 4)}}{${nf(an(p.n, p.i), 4)}} = ${nf(s.dmt, 4)}$.`,
          `$\\nu = ${nf(s.dmt, 4)} / ${nf(1 + p.i, 6)} = ${nf(s.ans, 4)}$.`,
          ans(nf(s.ans, 3))
        ),
    }),
    calc({
      id: "cm1-m11-c05", module: "m11", unit: "£", dp: 0, tolerance: { rel: 0.002 },
      params: () => {
        const t1 = randInt(5, 10);
        const t2 = t1 + randInt(3, 8);
        return { i: randStep(0.03, 0.07, 0.005), t1, t2, L1: randStep(100000, 1000000, 50000), L2: randStep(100000, 1000000, 50000), a: randInt(1, t1 - 2), b: t2 + randInt(1, 5) };
      },
      question: (p) =>
        `An insurer must pay ${money(p.L1, 0)} at time ${p.t1} and ${money(p.L2, 0)} at time ${p.t2}. It will hold zero-coupon bonds maturing at times ${p.a} and ${p.b}, chosen so that the present values and discounted mean terms of assets and liabilities match at ${pc(p.i)} a year effective. Calculate the nominal (redemption) amount of the bond maturing at time ${p.a}.`,
      solve: (p) => {
        const pv1 = p.L1 * vn(p.t1, p.i);
        const pv2 = p.L2 * vn(p.t2, p.i);
        const PV = pv1 + pv2;
        const T = (p.t1 * pv1 + p.t2 * pv2) / PV;
        const xa = (PV * (p.b - T)) / (p.b - p.a);
        return { pv1, pv2, PV, T, xa, ans: xa * (1 + p.i) ** p.a };
      },
      show: (p, s) =>
        W(
          `PV of liabilities: $${p.L1}v^{${p.t1}} + ${p.L2}v^{${p.t2}} = ${m2(s.pv1)} + ${m2(s.pv2)} = ${m2(s.PV)}$; their DMT is $\\frac{${p.t1} \\times ${m2(s.pv1)} + ${p.t2} \\times ${m2(s.pv2)}}{${m2(s.PV)}} = ${nf(s.T, 4)}$.`,
          `Let the bonds have present values $x_a$ and $x_b$. Matching PV: $x_a + x_b = ${m2(s.PV)}$. Matching DMT: $${p.a}x_a + ${p.b}x_b = ${nf(s.T, 4)} \\times ${m2(s.PV)}$.`,
          `So $x_a = ${m2(s.PV)} \\times \\frac{${p.b} - ${nf(s.T, 4)}}{${p.b} - ${p.a}} = ${m2(s.xa)}$, and the nominal is $x_a(1+i)^{${p.a}} = ${m2(s.ans)}$.`,
          `With one asset maturing before both liabilities and one after, the assets are more spread out than the liabilities, so Redington's convexity condition holds too.`,
          ans(money(s.ans, 0))
        ),
    }),

    /* ---------- m12 The life table ---------- */
    calc({
      id: "cm1-m12-c01", module: "m12", unit: "", dp: 5, tolerance: { abs: 0.0002 },
      params: () => {
        const x = randInt(20, 70);
        return { x, n: randInt(5, Math.min(25, 95 - x)) };
      },
      question: (p) => `Using AM92 Ultimate mortality, calculate the probability that a life aged exactly ${p.x} survives to age ${p.x + p.n}, $${npx_(p.n, p.x)}$.`,
      solve: (p) => ({ ans: npx(p.n, p.x) }),
      show: (p, s) =>
        W(
          `$${npx_(p.n, p.x)} = \\frac{l_{${p.x + p.n}}}{l_{${p.x}}} = \\frac{${nf(lx(p.x + p.n), 4)}}{${nf(lx(p.x), 4)}}$.`,
          ans(nf(s.ans, 5))
        ),
    }),
    calc({
      id: "cm1-m12-c02", module: "m12", unit: "", dp: 5, tolerance: { abs: 0.0002 },
      params: () => {
        const x = randInt(30, 70);
        return { x, m: randInt(5, 15), n: randInt(5, 15) };
      },
      question: (p) => `Using AM92 Ultimate mortality, calculate the probability that a life aged exactly ${p.x} dies between ages ${p.x + p.m} and ${p.x + p.m + p.n}, $_{${p.m}|${p.n}}q_{${p.x}}$.`,
      solve: (p) => ({ ans: (lx(p.x + p.m) - lx(p.x + p.m + p.n)) / lx(p.x) }),
      show: (p, s) =>
        W(
          `$_{${p.m}|${p.n}}q_{${p.x}} = \\frac{l_{${p.x + p.m}} - l_{${p.x + p.m + p.n}}}{l_{${p.x}}} = \\frac{${nf(lx(p.x + p.m), 4)} - ${nf(lx(p.x + p.m + p.n), 4)}}{${nf(lx(p.x), 4)}}$.`,
          ans(nf(s.ans, 5))
        ),
    }),
    calc({
      id: "cm1-m12-c03", module: "m12", unit: "", dp: 6, tolerance: { rel: 0.003 },
      params: () => {
        const [s, t] = pick([[0.25, 0.5], [0.5, 0.5], [0.25, 0.25], [0.5, 0.25], [0.25, 0.75]]);
        return { x: randInt(45, 90), s, t };
      },
      question: (p) =>
        `Using AM92 Ultimate mortality and assuming deaths are uniformly distributed between integer ages, calculate the probability that a life aged exactly ${nf(p.x + p.s, 2)} dies before age ${nf(p.x + p.s + p.t, 2)}.`,
      solve: (p) => {
        const q = qx(p.x);
        return { q, ans: (p.t * q) / (1 - p.s * q) };
      },
      show: (p, s) =>
        W(
          `Under UDD, $_{t}p_{x} = 1 - t\\,q_x$ for $0 \\le t \\le 1$, so $_{${nf(p.t, 2)}}q_{${nf(p.x + p.s, 2)}} = \\frac{_{${nf(p.s + p.t, 2)}}q_{${p.x}} - _{${nf(p.s, 2)}}q_{${p.x}}}{_{${nf(p.s, 2)}}p_{${p.x}}} = \\frac{${nf(p.t, 2)}\\,q_{${p.x}}}{1 - ${nf(p.s, 2)}\\,q_{${p.x}}}$.`,
          `$q_{${p.x}} = ${nf(s.q, 6)}$, giving $\\frac{${nf(p.t, 2)} \\times ${nf(s.q, 6)}}{1 - ${nf(p.s, 2)} \\times ${nf(s.q, 6)}}$.`,
          ans(nf(s.ans, 6))
        ),
    }),
    calc({
      id: "cm1-m12-c04", module: "m12", unit: "", dp: 6, tolerance: { rel: 0.003 },
      params: () => ({ x: randInt(50, 90) }),
      question: (p) =>
        `Using AM92 Ultimate mortality and assuming a constant force of mortality between integer ages, calculate the probability that a life aged exactly ${p.x}&frac12; dies before age ${p.x + 2}.`,
      solve: (p) => {
        const p1 = 1 - qx(p.x);
        const p2 = 1 - qx(p.x + 1);
        return { p1, p2, ans: 1 - p1 ** 0.5 * p2 };
      },
      show: (p, s) =>
        W(
          `Under a constant force between integer ages, $_{t}p_{x} = (p_x)^t$, so $_{1.5}p_{${p.x}.5} = (p_{${p.x}})^{0.5}\\,p_{${p.x + 1}}$.`,
          `$p_{${p.x}} = ${nf(s.p1, 6)}$, $p_{${p.x + 1}} = ${nf(s.p2, 6)}$: $_{1.5}p_{${p.x}.5} = ${nf(s.p1 ** 0.5 * s.p2, 6)}$, and the probability of death is 1 minus this.`,
          ans(nf(s.ans, 6))
        ),
    }),

    /* ---------- m13 Life assurance contracts ---------- */
    calc({
      id: "cm1-m13-c01", module: "m13", unit: "£", dp: 2, tolerance: { rel: 0.003 },
      params: () => ({ x: randInt(30, 70), S: randStep(10000, 200000, 5000), i: lifeI() }),
      question: (p) =>
        `Calculate the expected present value of a whole life assurance of ${money(p.S, 0)} payable at the end of the year of death of a life now aged ${p.x}. Basis: ${BASIS(p.i)}.`,
      solve: (p) => ({ A: Ax(p.x, p.i), ans: p.S * Ax(p.x, p.i) }),
      show: (p, s) =>
        W(`EPV $= ${p.S}\\,A_{${p.x}}$, with $A_{${p.x}} = ${nf(s.A, 5)}$ at ${pc(p.i)}.`, `EPV $= ${p.S} \\times ${nf(s.A, 5)} = ${m2(s.ans)}$.`, ans(money(s.ans))),
    }),
    calc({
      id: "cm1-m13-c02", module: "m13", unit: "£", dp: 2, tolerance: { rel: 0.005 },
      params: () => {
        const x = randInt(45, 60);
        return { x, n: randInt(10, Math.min(20, 75 - x)), S: randStep(50000, 500000, 10000), i: lifeI() };
      },
      question: (p) =>
        `Calculate the expected present value of a ${p.n}-year term assurance of ${money(p.S, 0)} payable at the end of the year of death of a life aged ${p.x}. Basis: ${BASIS(p.i)}.`,
      solve: (p) => {
        const A = Ax(p.x, p.i);
        const E = nEx(p.n, p.x, p.i);
        const An = Ax(p.x + p.n, p.i);
        return { A, E, An, term: Ax1(p.x, p.i, p.n), ans: p.S * Ax1(p.x, p.i, p.n) };
      },
      show: (p, s) =>
        W(
          `$A^{1}_{${p.x}:\\overline{${p.n}}|} = A_{${p.x}} - {}_{${p.n}}E_{${p.x}}\\,A_{${p.x + p.n}}$: whole life cover now, less the whole life cover that would start at ${p.x + p.n}.`,
          `$A_{${p.x}} = ${nf(s.A, 5)}$, $_{${p.n}}E_{${p.x}} = v^{${p.n}}\\frac{l_{${p.x + p.n}}}{l_{${p.x}}} = ${nf(s.E, 5)}$, $A_{${p.x + p.n}} = ${nf(s.An, 5)}$, so $A^{1}_{${p.x}:\\overline{${p.n}}|} = ${nf(s.term, 5)}$.`,
          `EPV $= ${p.S} \\times ${nf(s.term, 5)} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m13-c03", module: "m13", unit: "£", dp: 2, tolerance: { rel: 0.003 },
      params: () => {
        const x = randInt(30, 55);
        return { x, n: randInt(10, Math.min(30, 65 - x)), S: randStep(10000, 200000, 5000), i: lifeI() };
      },
      question: (p) =>
        `A ${p.n}-year endowment assurance for a life aged ${p.x} pays ${money(p.S, 0)} immediately on death within the term, or at maturity. Calculate its expected present value, assuming deaths occur on average half-way through the year of age. Basis: ${BASIS(p.i)}.`,
      solve: (p) => {
        const term = Ax1(p.x, p.i, p.n);
        const E = nEx(p.n, p.x, p.i);
        const acc = (1 + p.i) ** 0.5;
        return { term, E, acc, ans: p.S * (acc * term + E) };
      },
      show: (p, s) =>
        W(
          `Only the death benefit is paid early, so only it gets the claims-acceleration factor: $\\bar{A}_{${p.x}:\\overline{${p.n}}|} \\approx (1+i)^{1/2}A^{1}_{${p.x}:\\overline{${p.n}}|} + {}_{${p.n}}E_{${p.x}}$.`,
          `$_{${p.n}}E_{${p.x}} = ${nf(s.E, 5)}$ and $A^{1}_{${p.x}:\\overline{${p.n}}|} = A_{${p.x}:\\overline{${p.n}}|} - {}_{${p.n}}E_{${p.x}} = ${nf(s.term, 5)}$.`,
          `EPV $= ${p.S}(${nf(s.acc, 6)} \\times ${nf(s.term, 5)} + ${nf(s.E, 5)}) = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m13-c04", module: "m13", unit: "£", dp: 2, tolerance: { rel: 0.002 },
      params: () => {
        const x = randInt(25, 55);
        return { x, n: randInt(5, 65 - x), S: randStep(10000, 200000, 5000), i: lifeI() };
      },
      question: (p) => `Calculate the expected present value of ${money(p.S, 0)} payable to a life now aged ${p.x} if they survive to age ${p.x + p.n}. Basis: ${BASIS(p.i)}.`,
      solve: (p) => ({ E: nEx(p.n, p.x, p.i), ans: p.S * nEx(p.n, p.x, p.i) }),
      show: (p, s) =>
        W(
          `This is a pure endowment: EPV $= ${p.S}\\,{}_{${p.n}}E_{${p.x}} = ${p.S}\\,v^{${p.n}}\\frac{l_{${p.x + p.n}}}{l_{${p.x}}}$ (or $\\frac{D_{${p.x + p.n}}}{D_{${p.x}}}$).`,
          `$= ${p.S} \\times ${nf(vn(p.n, p.i), 6)} \\times \\frac{${nf(lx(p.x + p.n), 4)}}{${nf(lx(p.x), 4)}} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),

    /* ---------- m14 Life annuity contracts ---------- */
    calc({
      id: "cm1-m14-c01", module: "m14", unit: "£", dp: 2, tolerance: { rel: 0.003 },
      params: () => ({ x: randInt(40, 80), X: randStep(1000, 30000, 500), i: lifeI() }),
      question: (p) => `Calculate the expected present value of a whole life annuity of ${money(p.X, 0)} a year payable annually in advance to a life aged ${p.x}. Basis: ${BASIS(p.i)}.`,
      solve: (p) => ({ a: adx(p.x, p.i), ans: p.X * adx(p.x, p.i) }),
      show: (p, s) => W(`EPV $= ${p.X}\\,${ad(p.x)}$, with $${ad(p.x)} = ${nf(s.a, 4)}$.`, `EPV $= ${p.X} \\times ${nf(s.a, 4)} = ${m2(s.ans)}$.`, ans(money(s.ans))),
    }),
    calc({
      id: "cm1-m14-c02", module: "m14", unit: "£", dp: 2, tolerance: { rel: 0.003 },
      params: () => ({ x: randInt(55, 80), X: randStep(1200, 30000, 600), i: lifeI() }),
      question: (p) =>
        `Calculate the expected present value of a whole life annuity of ${money(p.X, 0)} a year payable <em>monthly in advance</em> to a life aged ${p.x}, using the approximation $\\ddot{a}^{(m)}_x \\approx \\ddot{a}_x - \\frac{m-1}{2m}$. Basis: ${BASIS(p.i)}.`,
      solve: (p) => ({ a: adx(p.x, p.i), ans: p.X * (adx(p.x, p.i) - 11 / 24) }),
      show: (p, s) =>
        W(
          `$\\ddot{a}^{(12)}_{${p.x}} \\approx ${ad(p.x)} - \\frac{11}{24} = ${nf(s.a, 4)} - 0.4583 = ${nf(s.a - 11 / 24, 4)}$.`,
          `EPV $= ${p.X} \\times ${nf(s.a - 11 / 24, 4)} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m14-c03", module: "m14", unit: "£", dp: 2, tolerance: { rel: 0.003 },
      params: () => {
        const x = randInt(30, 60);
        return { x, n: randInt(5, Math.min(30, 70 - x)), X: randStep(1000, 20000, 500), i: lifeI() };
      },
      question: (p) =>
        `Calculate the expected present value of an annuity of ${money(p.X, 0)} a year payable annually in advance to a life aged ${p.x} for at most ${p.n} years. Basis: ${BASIS(p.i)}.`,
      solve: (p) => {
        const a = adx(p.x, p.i);
        const E = nEx(p.n, p.x, p.i);
        const a2 = adx(p.x + p.n, p.i);
        return { a, E, a2, t: a - E * a2, ans: p.X * (a - E * a2) };
      },
      show: (p, s) =>
        W(
          `$${adn_(p.x, p.n)} = ${ad(p.x)} - {}_{${p.n}}E_{${p.x}}\\,${ad(p.x + p.n)} = ${nf(s.a, 4)} - ${nf(s.E, 5)} \\times ${nf(s.a2, 4)} = ${nf(s.t, 4)}$.`,
          `EPV $= ${p.X} \\times ${nf(s.t, 4)} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m14-c04", module: "m14", unit: "£", dp: 2, tolerance: { rel: 0.003 },
      params: () => ({ x: randInt(40, 60), X: randStep(1200, 30000, 600), i: lifeI() }),
      question: (p) =>
        `A life aged ${p.x} buys a pension of ${money(p.X, 0)} a year payable monthly <em>in arrear</em> from age 65 for life. Calculate its expected present value, using $a^{(m)}_x \\approx \\ddot{a}_x - \\frac{m+1}{2m}$. Basis: ${BASIS(p.i)}.`,
      solve: (p) => {
        const E = nEx(65 - p.x, p.x, p.i);
        const a65 = adx(65, p.i);
        return { E, a65, ans: p.X * E * (a65 - 13 / 24) };
      },
      show: (p, s) =>
        W(
          `EPV $= ${p.X}\\,{}_{${65 - p.x}}E_{${p.x}}\\,a^{(12)}_{65}$ with $a^{(12)}_{65} \\approx ${ad(65)} - \\frac{13}{24} = ${nf(s.a65, 4)} - 0.5417 = ${nf(s.a65 - 13 / 24, 4)}$.`,
          `$_{${65 - p.x}}E_{${p.x}} = \\frac{D_{65}}{D_{${p.x}}} = ${nf(s.E, 5)}$.`,
          `EPV $= ${p.X} \\times ${nf(s.E, 5)} \\times ${nf(s.a65 - 13 / 24, 4)} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),

    /* ---------- m15 Evaluation of assurances and annuities ---------- */
    calc({
      id: "cm1-m15-c01", module: "m15", unit: "£", dp: 2, tolerance: { rel: 0.005 },
      params: () => ({ x: randInt(30, 70), S: randStep(10000, 200000, 5000), i: lifeI() }),
      question: (p) =>
        `A whole life assurance pays ${money(p.S, 0)} at the end of the year of death of a life aged ${p.x}. Calculate the <em>standard deviation</em> of the present value of the benefit. Basis: ${BASIS(p.i)}.`,
      solve: (p) => {
        const A = Ax(p.x, p.i);
        const j = (1 + p.i) ** 2 - 1;
        const A2 = Ax(p.x, j);
        return { A, A2, j, ans: p.S * Math.sqrt(A2 - A * A) };
      },
      show: (p, s) =>
        W(
          `$\\text{Var} = S^2\\left({}^{2}A_{${p.x}} - A_{${p.x}}^2\\right)$, where $^{2}A$ is calculated at $(1+i)^2 - 1 = ${nf(s.j, 6)}$.`,
          `$A_{${p.x}} = ${nf(s.A, 5)}$, $^{2}A_{${p.x}} = ${nf(s.A2, 5)}$, so ${"$"}{}^{2}A_{${p.x}} - A_{${p.x}}^2 =${nf(s.A2 - s.A * s.A, 6)}$.`,
          `SD $= ${p.S}\\sqrt{${nf(s.A2 - s.A * s.A, 6)}} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m15-c02", module: "m15", unit: "£", dp: 2, tolerance: { rel: 0.005 },
      params: () => ({ x: randInt(40, 75), X: randStep(1000, 20000, 500), i: lifeI() }),
      question: (p) =>
        `A whole life annuity of ${money(p.X, 0)} a year is payable annually in advance to a life aged ${p.x}. Calculate the standard deviation of the present value of the payments. Basis: ${BASIS(p.i)}.`,
      solve: (p) => {
        const A = Ax(p.x, p.i);
        const A2 = Ax(p.x, (1 + p.i) ** 2 - 1);
        const d = dOf(p.i);
        return { A, A2, d, ans: (p.X * Math.sqrt(A2 - A * A)) / d };
      },
      show: (p, s) =>
        W(
          `The PV is $\\ddot{a}_{\\overline{K+1}|} = \\frac{1 - v^{K+1}}{d}$, so $\\text{Var} = \\frac{X^2}{d^2}\\left({}^{2}A_{${p.x}} - A_{${p.x}}^2\\right)$.`,
          `$A_{${p.x}} = ${nf(s.A, 5)}$, $^{2}A_{${p.x}} = ${nf(s.A2, 5)}$, $d = ${nf(s.d, 6)}$.`,
          `SD $= \\frac{${p.X}}{${nf(s.d, 6)}}\\sqrt{${nf(s.A2 - s.A * s.A, 6)}} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m15-c03", module: "m15", unit: "£", dp: 2, tolerance: { rel: 0.003 },
      params: () => ({ x: randInt(30, 70), S: randStep(10000, 200000, 5000), i: lifeI() }),
      question: (p) =>
        `Calculate the expected present value of a whole life assurance of ${money(p.S, 0)} payable <em>immediately</em> on the death of a life aged ${p.x}, using $\\bar{A}_x \\approx (1+i)^{1/2}A_x$. Basis: ${BASIS(p.i)}.`,
      solve: (p) => ({ A: Ax(p.x, p.i), ans: p.S * (1 + p.i) ** 0.5 * Ax(p.x, p.i) }),
      show: (p, s) =>
        W(`$\\bar{A}_{${p.x}} \\approx ${nf((1 + p.i) ** 0.5, 6)} \\times ${nf(s.A, 5)} = ${nf(s.ans / p.S, 5)}$.`, `EPV $= ${p.S} \\times ${nf(s.ans / p.S, 5)} = ${m2(s.ans)}$.`, ans(money(s.ans))),
    }),
    calc({
      id: "cm1-m15-c04", module: "m15", unit: "£", dp: 2, tolerance: { rel: 0.003 },
      params: () => ({ x: randInt(40, 80), X: randStep(1000, 20000, 500), i: lifeI() }),
      question: (p) =>
        `Calculate the expected present value of a whole life annuity of ${money(p.X, 0)} a year payable <em>continuously</em> to a life aged ${p.x}, using $\\bar{a}_x \\approx \\ddot{a}_x - \\frac{1}{2}$. Basis: ${BASIS(p.i)}.`,
      solve: (p) => ({ a: adx(p.x, p.i), ans: p.X * (adx(p.x, p.i) - 0.5) }),
      show: (p, s) => W(`$\\bar{a}_{${p.x}} \\approx ${nf(s.a, 4)} - 0.5 = ${nf(s.a - 0.5, 4)}$.`, `EPV $= ${p.X} \\times ${nf(s.a - 0.5, 4)} = ${m2(s.ans)}$.`, ans(money(s.ans))),
    }),

    /* ---------- m16 Variable benefits and conventional with-profits ---------- */
    calc({
      id: "cm1-m16-c01", module: "m16", unit: "£", dp: 2, tolerance: { rel: 0.005 },
      params: () => ({ x: randInt(30, 70), S: randStep(1000, 20000, 500), i: lifeI() }),
      question: (p) =>
        `A whole life assurance for a life aged ${p.x} pays ${money(p.S, 0)} at the end of the year of death if death is in the first year, ${money(2 * p.S, 0)} if in the second, and so on. Calculate its expected present value. Basis: ${BASIS(p.i)}.`,
      solve: (p) => ({ IA: IAx(p.x, p.i), ans: p.S * IAx(p.x, p.i) }),
      show: (p, s) => W(`EPV $= ${p.S}\\,(IA)_{${p.x}}$, with $(IA)_{${p.x}} = ${nf(s.IA, 4)}$.`, `EPV $= ${p.S} \\times ${nf(s.IA, 4)} = ${m2(s.ans)}$.`, ans(money(s.ans))),
    }),
    calc({
      id: "cm1-m16-c02", module: "m16", unit: "£", dp: 2, tolerance: { rel: 0.005 },
      params: () => ({ x: randInt(50, 80), X: randStep(100, 2000, 50), i: lifeI() }),
      question: (p) =>
        `An annuity payable annually in advance to a life aged ${p.x} pays ${money(p.X, 0)} at the first payment, ${money(2 * p.X, 0)} at the second, and so on for life. Calculate its expected present value. Basis: ${BASIS(p.i)}.`,
      solve: (p) => ({ I: Iadx(p.x, p.i), ans: p.X * Iadx(p.x, p.i) }),
      show: (p, s) => W(`EPV $= ${p.X}\\,(I\\ddot{a})_{${p.x}}$, with $(I\\ddot{a})_{${p.x}} = ${nf(s.I, 4)}$.`, `EPV $= ${p.X} \\times ${nf(s.I, 4)} = ${m2(s.ans)}$.`, ans(money(s.ans))),
    }),
    calc({
      id: "cm1-m16-c03", module: "m16", unit: "£", dp: 2, tolerance: { rel: 0.003 },
      params: () => ({ x: randInt(30, 70), S: randStep(10000, 200000, 5000) }),
      question: (p) =>
        `A with-profits whole life policy on a life aged ${p.x} has a basic sum assured of ${money(p.S, 0)}, paid at the end of the year of death. Compound reversionary bonuses are expected at rate $b$ a year, vesting at the end of each policy year (so the benefit for death in year $k+1$ is ${money(p.S, 0)}$\\,(1+b)^k$), where $1 + b = 1.06/1.04$. Calculate the expected present value at 6% a year interest with AM92 Ultimate mortality.`,
      solve: (p) => {
        const b = 1.06 / 1.04 - 1;
        const A = Ax(p.x, 0.04);
        return { b, A, ans: (p.S / (1 + b)) * A };
      },
      show: (p, s) =>
        W(
          `EPV $= ${p.S}\\sum_{k \\ge 0} (1+b)^k v^{k+1}\\,{}_{k|}q_{${p.x}} = \\frac{${p.S}}{1+b}\\sum_{k \\ge 0} \\left(\\frac{1+b}{1.06}\\right)^{k+1}{}_{k|}q_{${p.x}}$.`,
          `$\\frac{1+b}{1.06} = \\frac{1}{1.04}$, so the sum is $A_{${p.x}}$ at 4%: $${nf(s.A, 5)}$.`,
          `EPV $= ${p.S} \\times \\frac{1.04}{1.06} \\times ${nf(s.A, 5)} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m16-c04", module: "m16", unit: "£", dp: 2, tolerance: { rel: 0.005 },
      params: () => ({ x: randInt(30, 65), S: randStep(10000, 200000, 5000), b: randStep(0.01, 0.04, 0.005), i: lifeI() }),
      question: (p) =>
        `A with-profits whole life policy on a life aged ${p.x} has a sum assured of ${money(p.S, 0)}, paid at the end of the year of death. Simple reversionary bonuses of ${pc(p.b)} of the sum assured vest at the end of each policy year, so the benefit for death in year $k+1$ is ${money(p.S, 0)}$(1 + ${nf(p.b, 4)}k)$. Calculate the expected present value. Basis: ${BASIS(p.i)}.`,
      solve: (p) => {
        const A = Ax(p.x, p.i);
        const IA = IAx(p.x, p.i);
        return { A, IA, ans: p.S * (A + p.b * (IA - A)) };
      },
      show: (p, s) =>
        W(
          `Benefit $= S(1 - b) + Sb(k+1)$: a level part and an increasing part. EPV $= S(1-b)A_{${p.x}} + Sb\\,(IA)_{${p.x}}$.`,
          `$A_{${p.x}} = ${nf(s.A, 5)}$, $(IA)_{${p.x}} = ${nf(s.IA, 4)}$.`,
          `EPV $= ${nf(p.S * (1 - p.b), 2)} \\times ${nf(s.A, 5)} + ${nf(p.S * p.b, 2)} \\times ${nf(s.IA, 4)} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),

    /* ---------- m17 Gross premiums ---------- */
    calc({
      id: "cm1-m17-c01", module: "m17", unit: "£", dp: 2, tolerance: { rel: 0.005 },
      params: () => ({ x: randInt(30, 60), S: randStep(25000, 250000, 5000), I: randStep(100, 1000, 50), r: pick([0.02, 0.03, 0.05]), i: lifeI() }),
      question: (p) =>
        `Calculate the level annual premium, payable in advance for life, for a whole life assurance of ${money(p.S, 0)} payable at the end of the year of death of a life aged ${p.x}. Expenses: ${money(p.I, 0)} at outset, plus ${pc(p.r)} of each premium after the first. Basis: ${BASIS(p.i)}.`,
      solve: (p) => {
        const A = Ax(p.x, p.i);
        const a = adx(p.x, p.i);
        return { A, a, ans: (p.S * A + p.I) / (a - p.r * (a - 1)) };
      },
      show: (p, s) =>
        W(
          `Equation of value: $P\\,${ad(p.x)} = ${p.S}A_{${p.x}} + ${p.I} + ${nf(p.r, 4)}P(${ad(p.x)} - 1)$.`,
          `$A_{${p.x}} = ${nf(s.A, 5)}$, $${ad(p.x)} = ${nf(s.a, 4)}$.`,
          `$P = \\frac{${p.S} \\times ${nf(s.A, 5)} + ${p.I}}{${nf(s.a, 4)} - ${nf(p.r, 4)} \\times ${nf(s.a - 1, 4)}} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m17-c02", module: "m17", unit: "£", dp: 2, tolerance: { rel: 0.005 },
      params: () => {
        const x = randInt(25, 50);
        return { x, n: randInt(10, Math.min(30, 65 - x)), S: randStep(10000, 200000, 5000), f: pick([0.25, 0.5, 0.75]), r: pick([0.025, 0.03, 0.05]), i: lifeI() };
      },
      question: (p) =>
        `Calculate the level annual premium, payable in advance throughout the term, for a ${p.n}-year endowment assurance of ${money(p.S, 0)} on a life aged ${p.x}, with the death benefit paid at the end of the year of death. Expenses: ${pc(p.f)} of the first premium, plus ${pc(p.r)} of each later premium. Basis: ${BASIS(p.i)}.`,
      solve: (p) => {
        const a = adx(p.x, p.i, p.n);
        const A = 1 - dOf(p.i) * a;
        return { a, A, ans: (p.S * A) / (a - p.f - p.r * (a - 1)) };
      },
      show: (p, s) =>
        W(
          `$P\\,${adn_(p.x, p.n)} = ${p.S}A_{${p.x}:\\overline{${p.n}}|} + ${nf(p.f, 4)}P + ${nf(p.r, 4)}P(${adn_(p.x, p.n)} - 1)$.`,
          `$${adn_(p.x, p.n)} = ${ad(p.x)} - {}_{${p.n}}E_{${p.x}}${ad(p.x + p.n)} = ${nf(s.a, 4)}$ and $A_{${p.x}:\\overline{${p.n}}|} = 1 - d\\,${adn_(p.x, p.n)} = ${nf(s.A, 5)}$.`,
          `$P = \\frac{${p.S} \\times ${nf(s.A, 5)}}{${nf(s.a, 4)} - ${nf(p.f, 4)} - ${nf(p.r, 4)} \\times ${nf(s.a - 1, 4)}} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m17-c03", module: "m17", unit: "£", dp: 2, tolerance: { rel: 0.003 },
      params: () => ({ x: randInt(60, 75), X: randStep(2400, 30000, 600), I: randStep(200, 1500, 50), e: randStep(20, 100, 5), i: lifeI() }),
      question: (p) =>
        `Calculate the single premium for an annuity of ${money(p.X, 0)} a year payable monthly in advance for life to a life aged ${p.x}. Expenses: ${money(p.I, 0)} at outset, plus ${money(p.e, 0)} a year payable annually in advance (including at the outset) while the annuitant lives. Use $\\ddot{a}^{(12)}_x \\approx \\ddot{a}_x - \\frac{11}{24}$. Basis: ${BASIS(p.i)}.`,
      solve: (p) => {
        const a = adx(p.x, p.i);
        return { a, ans: p.X * (a - 11 / 24) + p.I + p.e * a };
      },
      show: (p, s) =>
        W(
          `$SP = ${p.X}\\,\\ddot{a}^{(12)}_{${p.x}} + ${p.I} + ${p.e}\\,${ad(p.x)}$, with $${ad(p.x)} = ${nf(s.a, 4)}$ and $\\ddot{a}^{(12)}_{${p.x}} \\approx ${nf(s.a - 11 / 24, 4)}$.`,
          `$SP = ${m2(p.X * (s.a - 11 / 24))} + ${p.I} + ${m2(p.e * s.a)} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m17-c04", module: "m17", unit: "£", dp: 2, tolerance: { rel: 0.005 },
      params: () => {
        const x = randInt(40, 55);
        return { x, n: randInt(10, Math.min(25, 70 - x)), S: randStep(50000, 500000, 10000), f: pick([0.3, 0.5, 0.8]), r: pick([0.03, 0.05]), i: lifeI() };
      },
      question: (p) =>
        `Calculate the level annual premium, payable in advance throughout the term, for a ${p.n}-year term assurance of ${money(p.S, 0)} payable at the end of the year of death of a life aged ${p.x}. Expenses: ${pc(p.f)} of the first premium, plus ${pc(p.r)} of each later premium. Basis: ${BASIS(p.i)}.`,
      solve: (p) => {
        const a = adx(p.x, p.i, p.n);
        const A1 = Ax1(p.x, p.i, p.n);
        return { a, A1, ans: (p.S * A1) / (a - p.f - p.r * (a - 1)) };
      },
      show: (p, s) =>
        W(
          `$P\\,${adn_(p.x, p.n)} = ${p.S}A^{1}_{${p.x}:\\overline{${p.n}}|} + ${nf(p.f, 4)}P + ${nf(p.r, 4)}P(${adn_(p.x, p.n)} - 1)$.`,
          `$${adn_(p.x, p.n)} = ${nf(s.a, 4)}$; $A^{1}_{${p.x}:\\overline{${p.n}}|} = A_{${p.x}} - {}_{${p.n}}E_{${p.x}}A_{${p.x + p.n}} = ${nf(s.A1, 5)}$.`,
          `$P = \\frac{${p.S} \\times ${nf(s.A1, 5)}}{${nf(s.a, 4)} - ${nf(p.f, 4)} - ${nf(p.r, 4)} \\times ${nf(s.a - 1, 4)}} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),

    /* ---------- m18 Gross premium reserves ---------- */
    calc({
      id: "cm1-m18-c01", module: "m18", unit: "£", dp: 2, tolerance: { rel: 0.005 },
      params: () => ({ x: randInt(30, 55), t: randInt(5, 20), S: randStep(25000, 250000, 5000), i: lifeI() }),
      question: (p) =>
        `A whole life assurance of ${money(p.S, 0)}, payable at the end of the year of death, was issued to a life then aged ${p.x}, with level annual premiums payable in advance for life. Calculate the net premium reserve after ${p.t} years, just before the premium then due. Basis for premiums and reserves: ${BASIS(p.i)}.`,
      solve: (p) => {
        const a0 = adx(p.x, p.i);
        const at = adx(p.x + p.t, p.i);
        return { a0, at, ans: p.S * (1 - at / a0) };
      },
      show: (p, s) =>
        W(
          `With the net premium and reserve on the same basis, $_{t}V = S\\left(1 - \\frac{${ad(p.x + p.t)}}{${ad(p.x)}}\\right)$.`,
          `$${ad(p.x)} = ${nf(s.a0, 4)}$, $${ad(p.x + p.t)} = ${nf(s.at, 4)}$.`,
          `$_{${p.t}}V = ${p.S}\\left(1 - \\frac{${nf(s.at, 4)}}{${nf(s.a0, 4)}}\\right) = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m18-c02", module: "m18", unit: "£", dp: 2, tolerance: { rel: 0.005 },
      params: () => {
        const x = randInt(25, 50);
        const n = randInt(15, Math.min(35, 65 - x));
        return { x, n, t: randInt(3, n - 3), S: randStep(10000, 200000, 5000), i: lifeI() };
      },
      question: (p) =>
        `A ${p.n}-year endowment assurance of ${money(p.S, 0)} (death benefit at the end of the year of death) was issued to a life then aged ${p.x}, with level annual premiums payable in advance throughout the term. Calculate the net premium reserve at duration ${p.t}, just before the premium then due. Basis: ${BASIS(p.i)}.`,
      solve: (p) => {
        const a0 = adx(p.x, p.i, p.n);
        const at = adx(p.x + p.t, p.i, p.n - p.t);
        return { a0, at, ans: p.S * (1 - at / a0) };
      },
      show: (p, s) =>
        W(
          `$_{t}V = S\\left(1 - \\frac{${adn_(p.x + p.t, p.n - p.t)}}{${adn_(p.x, p.n)}}\\right)$.`,
          `$${adn_(p.x, p.n)} = ${nf(s.a0, 4)}$ and $${adn_(p.x + p.t, p.n - p.t)} = ${nf(s.at, 4)}$ (each as $\\ddot{a}_x - {}_{n}E_x\\,\\ddot{a}_{x+n}$).`,
          `$_{${p.t}}V = ${p.S}\\left(1 - \\frac{${nf(s.at, 4)}}{${nf(s.a0, 4)}}\\right) = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m18-c03", module: "m18", unit: "£", dp: 2, signed: true, tolerance: { rel: 0.005, abs: 5 },
      params: () => {
        const x = randInt(30, 55);
        const i = lifeI();
        const S = randStep(25000, 250000, 5000);
        const I = randStep(200, 1000, 50);
        const r = pick([0.03, 0.05]);
        const a = adx(x, i);
        const G = roundTo((S * Ax(x, i) + I) / ((1 - r) * a + r), 2);
        return { x, t: randInt(5, 20), S, I, r, G, i };
      },
      question: (p) =>
        `A whole life assurance of ${money(p.S, 0)}, payable at the end of the year of death, was issued to a life then aged ${p.x} for a gross annual premium of ${money(p.G)}, payable in advance for life. Calculate the gross premium prospective reserve after ${p.t} years, just before the premium then due, allowing for renewal expenses of ${pc(p.r)} of each premium. Basis: ${BASIS(p.i)}.`,
      solve: (p) => {
        const A = Ax(p.x + p.t, p.i);
        const a = adx(p.x + p.t, p.i);
        return { A, a, ans: p.S * A - (1 - p.r) * p.G * a };
      },
      show: (p, s) =>
        W(
          `All future premiums are renewal premiums, so $_{t}V = S\\,A_{${p.x + p.t}} - (1 - ${nf(p.r, 4)})G\\,${ad(p.x + p.t)}$.`,
          `$A_{${p.x + p.t}} = ${nf(s.A, 5)}$, $${ad(p.x + p.t)} = ${nf(s.a, 4)}$.`,
          `$_{${p.t}}V = ${p.S} \\times ${nf(s.A, 5)} - ${nf(1 - p.r, 4)} \\times ${m2(p.G)} \\times ${nf(s.a, 4)} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m18-c04", module: "m18", unit: "£", dp: 2, tolerance: { rel: 0.001 },
      params: () => {
        const x = randInt(30, 50);
        const t = randInt(5, 20);
        const i = lifeI();
        const S = randStep(25000, 250000, 5000);
        const a0 = adx(x, i);
        return {
          x, t, S, i,
          P: roundTo((S * Ax(x, i)) / a0, 2),
          V: roundTo(S * (1 - adx(x + t, i) / a0), 2),
          q: roundTo(qx(x + t), 6),
        };
      },
      question: (p) =>
        `For a whole life assurance of ${money(p.S, 0)} (death benefit at the end of the year of death) on a life now aged ${p.x + p.t}, the net premium reserve just before the annual premium due now is ${money(p.V)} and the net annual premium is ${money(p.P)}. With $q_{${p.x + p.t}} = ${nf(p.q, 6)}$ and interest at ${pc(p.i)}, calculate the net premium reserve one year from now, just before the next premium.`,
      solve: (p) => {
        const fund = (p.V + p.P) * (1 + p.i);
        return { fund, ans: (fund - p.q * p.S) / (1 - p.q) };
      },
      show: (p, s) =>
        W(
          `Recursive relationship: $(_{t}V + P)(1+i) = q\\,S + p\\,{}_{t+1}V$.`,
          `$(${m2(p.V)} + ${m2(p.P)}) \\times ${nf(1 + p.i, 4)} = ${m2(s.fund)}$; less the expected death strain $${nf(p.q, 6)} \\times ${p.S} = ${m2(p.q * p.S)}$.`,
          `$_{t+1}V = \\frac{${m2(s.fund)} - ${m2(p.q * p.S)}}{${nf(1 - p.q, 6)}} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),

    /* ---------- m19 Joint life and last survivor functions ---------- */
    calc({
      id: "cm1-m19-c01", module: "m19", unit: "", dp: 5, tolerance: { abs: 0.0003 },
      params: () => {
        const x = randInt(50, 75);
        return { x, y: x + randInt(-8, 8), n: randInt(5, 15) };
      },
      question: (p) =>
        `Two independent lives aged ${p.x} and ${p.y} are both subject to AM92 Ultimate mortality. Calculate the probability that both are alive in ${p.n} years' time, $_{${p.n}}p_{${p.x}:${p.y}}$.`,
      solve: (p) => ({ a: npx(p.n, p.x), b: npx(p.n, p.y), ans: npx(p.n, p.x) * npx(p.n, p.y) }),
      show: (p, s) =>
        W(
          `Independence: $_{${p.n}}p_{${p.x}:${p.y}} = {}_{${p.n}}p_{${p.x}} \\times {}_{${p.n}}p_{${p.y}} = \\frac{l_{${p.x + p.n}}}{l_{${p.x}}} \\times \\frac{l_{${p.y + p.n}}}{l_{${p.y}}}$.`,
          `$= ${nf(s.a, 6)} \\times ${nf(s.b, 6)}$.`,
          ans(nf(s.ans, 5))
        ),
    }),
    calc({
      id: "cm1-m19-c02", module: "m19", unit: "", dp: 5, tolerance: { abs: 0.0003 },
      params: () => {
        const x = randInt(60, 80);
        return { x, y: x + randInt(-8, 8), n: randInt(5, 20) };
      },
      question: (p) =>
        `Two independent lives aged ${p.x} and ${p.y} are both subject to AM92 Ultimate mortality. Calculate the probability that <em>at least one</em> of them is alive in ${p.n} years' time.`,
      solve: (p) => {
        const a = npx(p.n, p.x);
        const b = npx(p.n, p.y);
        return { a, b, ans: a + b - a * b };
      },
      show: (p, s) =>
        W(
          `$_{${p.n}}p_{\\overline{${p.x}:${p.y}}} = {}_{${p.n}}p_{${p.x}} + {}_{${p.n}}p_{${p.y}} - {}_{${p.n}}p_{${p.x}:${p.y}}$ (equivalently, $1 -$ the probability both have died).`,
          `$= ${nf(s.a, 6)} + ${nf(s.b, 6)} - ${nf(s.a, 6)} \\times ${nf(s.b, 6)}$.`,
          ans(nf(s.ans, 5))
        ),
    }),
    calc({
      id: "cm1-m19-c03", module: "m19", unit: "£", dp: 2, tolerance: { rel: 0.004 },
      params: () => {
        const x = randInt(55, 75);
        return { x, y: x + randInt(-6, 6), X: randStep(1000, 20000, 500), i: lifeI() };
      },
      question: (p) =>
        `An annuity of ${money(p.X, 0)} a year is payable annually in advance while both of two independent lives, aged ${p.x} and ${p.y}, are alive. Calculate its expected present value, assuming both lives follow ${BASIS(p.i)}.`,
      solve: (p) => ({ a: adxy(p.x, p.y, p.i), ans: p.X * adxy(p.x, p.y, p.i) }),
      show: (p, s) =>
        W(
          `$\\ddot{a}_{${p.x}:${p.y}} = \\sum_{k \\ge 0} v^k\\,{}_{k}p_{${p.x}}\\,{}_{k}p_{${p.y}} = ${nf(s.a, 4)}$.`,
          `EPV $= ${p.X} \\times ${nf(s.a, 4)} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m19-c04", module: "m19", unit: "£", dp: 2, tolerance: { rel: 0.004 },
      params: () => {
        const x = randInt(55, 75);
        return { x, y: x + randInt(-6, 6), X: randStep(1000, 20000, 500), i: lifeI() };
      },
      question: (p) =>
        `An annuity of ${money(p.X, 0)} a year is payable annually in advance while at least one of two independent lives, aged ${p.x} and ${p.y}, is alive. Calculate its expected present value, assuming both lives follow ${BASIS(p.i)}.`,
      solve: (p) => {
        const ax = adx(p.x, p.i);
        const ay = adx(p.y, p.i);
        const axy = adxy(p.x, p.y, p.i);
        return { ax, ay, axy, ans: p.X * (ax + ay - axy) };
      },
      show: (p, s) =>
        W(
          `$\\ddot{a}_{\\overline{${p.x}:${p.y}}} = ${ad(p.x)} + ${ad(p.y)} - \\ddot{a}_{${p.x}:${p.y}} = ${nf(s.ax, 4)} + ${nf(s.ay, 4)} - ${nf(s.axy, 4)} = ${nf(s.ax + s.ay - s.axy, 4)}$.`,
          `EPV $= ${p.X} \\times ${nf(s.ax + s.ay - s.axy, 4)} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),

    /* ---------- m20 Contingent and reversionary benefits ---------- */
    calc({
      id: "cm1-m20-c01", module: "m20", unit: "£", dp: 2, tolerance: { rel: 0.005 },
      params: () => {
        const x = randInt(55, 75);
        return { x, y: x + randInt(-8, 4), X: randStep(1000, 20000, 500), i: lifeI() };
      },
      question: (p) =>
        `A reversionary annuity of ${money(p.X, 0)} a year is payable annually in arrear to a life now aged ${p.y}, starting after the death of a life now aged ${p.x}. The lives are independent and both follow ${BASIS(p.i)}. Calculate its expected present value.`,
      solve: (p) => {
        const ay = adx(p.y, p.i);
        const axy = adxy(p.x, p.y, p.i);
        return { ay, axy, ans: p.X * (ay - axy) };
      },
      show: (p, s) =>
        W(
          `$a_{${p.x}|${p.y}} = a_{${p.y}} - a_{${p.x}:${p.y}}$: pay while (${p.y}) is alive, less while both are alive.`,
          `In arrear, $a = \\ddot{a} - 1$ for each, and the $-1$s cancel: $a_{${p.x}|${p.y}} = ${ad(p.y)} - \\ddot{a}_{${p.x}:${p.y}} = ${nf(s.ay, 4)} - ${nf(s.axy, 4)} = ${nf(s.ay - s.axy, 4)}$.`,
          `EPV $= ${p.X} \\times ${nf(s.ay - s.axy, 4)} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m20-c02", module: "m20", unit: "£", dp: 2, tolerance: { rel: 0.004 },
      params: () => {
        const x = randInt(40, 70);
        return { x, y: x + randInt(-6, 6), S: randStep(25000, 250000, 5000), i: lifeI() };
      },
      question: (p) =>
        `Calculate the expected present value of ${money(p.S, 0)} payable at the end of the year of the <em>first</em> death of two independent lives aged ${p.x} and ${p.y}, both following ${BASIS(p.i)}.`,
      solve: (p) => {
        const a = adxy(p.x, p.y, p.i);
        return { a, A: 1 - dOf(p.i) * a, ans: p.S * (1 - dOf(p.i) * a) };
      },
      show: (p, s) =>
        W(
          `The joint life status fails at the first death, and $A_{${p.x}:${p.y}} = 1 - d\\,\\ddot{a}_{${p.x}:${p.y}}$.`,
          `$\\ddot{a}_{${p.x}:${p.y}} = ${nf(s.a, 4)}$, $d = ${nf(dOf(p.i), 6)}$, so $A_{${p.x}:${p.y}} = ${nf(s.A, 5)}$.`,
          `EPV $= ${p.S} \\times ${nf(s.A, 5)} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m20-c03", module: "m20", unit: "£", dp: 2, tolerance: { rel: 0.005 },
      params: () => {
        const x = randInt(50, 70);
        return { x, y: x + randInt(-8, 4), X: randStep(1000, 20000, 500), i: lifeI() };
      },
      question: (p) =>
        `A reversionary annuity of ${money(p.X, 0)} a year, payable annually in arrear to a life aged ${p.y} after the death of a life aged ${p.x}, is bought by level annual premiums payable in advance while both are alive. Calculate the net annual premium, with both lives following ${BASIS(p.i)}.`,
      solve: (p) => {
        const ay = adx(p.y, p.i);
        const axy = adxy(p.x, p.y, p.i);
        return { ay, axy, ans: (p.X * (ay - axy)) / axy };
      },
      show: (p, s) =>
        W(
          `Premiums stop when the reversion starts, so they're a joint life annuity-due: $P\\,\\ddot{a}_{${p.x}:${p.y}} = ${p.X}\\,a_{${p.x}|${p.y}} = ${p.X}(${ad(p.y)} - \\ddot{a}_{${p.x}:${p.y}})$.`,
          `$${ad(p.y)} = ${nf(s.ay, 4)}$, $\\ddot{a}_{${p.x}:${p.y}} = ${nf(s.axy, 4)}$.`,
          `$P = \\frac{${p.X} \\times ${nf(s.ay - s.axy, 4)}}{${nf(s.axy, 4)}} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),

    /* ---------- m21 Mortality profit ---------- */
    calc({
      id: "cm1-m21-c01", module: "m21", unit: "£", dp: 2, tolerance: { rel: 0.003 },
      params: () => ({ x: randInt(30, 50), t: randInt(5, 20), S: randStep(25000, 250000, 5000), i: lifeI() }),
      question: (p) =>
        `A whole life assurance of ${money(p.S, 0)} (death benefit at the end of the year of death, level annual premiums in advance for life) was issued ${p.t} years ago to a life then aged ${p.x}. Calculate the death strain at risk for the coming policy year, using net premium reserves on the basis ${BASIS(p.i)}.`,
      solve: (p) => {
        const a0 = adx(p.x, p.i);
        const a1 = adx(p.x + p.t + 1, p.i);
        const V = p.S * (1 - a1 / a0);
        return { a0, a1, V, ans: p.S - V };
      },
      show: (p, s) =>
        W(
          `DSAR for policy year ${p.t + 1} $= S - {}_{${p.t + 1}}V$: the extra cost if the life dies, over the reserve that is released.`,
          `$_{${p.t + 1}}V = ${p.S}\\left(1 - \\frac{${ad(p.x + p.t + 1)}}{${ad(p.x)}}\\right) = ${p.S}\\left(1 - \\frac{${nf(s.a1, 4)}}{${nf(s.a0, 4)}}\\right) = ${m2(s.V)}$.`,
          `DSAR $= ${p.S} - ${m2(s.V)} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m21-c02", module: "m21", unit: "£", dp: 0, signed: true, tolerance: { rel: 0.005, abs: 20 },
      params: () => {
        const x = randInt(30, 50);
        const t = randInt(5, 20);
        const N = randStep(1000, 20000, 500);
        const expected = N * qx(x + t);
        return { x, t, N, S: randStep(10000, 100000, 5000), i: lifeI(), A: Math.max(0, Math.round(expected * randStep(0.5, 1.5, 0.05))) };
      },
      question: (p) =>
        `An insurer issued whole life policies of ${money(p.S, 0)} each (death benefit at the end of the year of death, premiums annually in advance for life) ${p.t} years ago to lives then aged ${p.x}. At the start of this policy year ${grp(p.N, 0)} policies were in force, and ${p.A} policyholder${p.A === 1 ? "" : "s"} died during the year. Calculate the mortality profit for the year, using net premium reserves on the basis ${BASIS(p.i)}.`,
      solve: (p) => {
        const V = p.S * (1 - adx(p.x + p.t + 1, p.i) / adx(p.x, p.i));
        const dsar = p.S - V;
        const q = qx(p.x + p.t);
        const EDS = p.N * q * dsar;
        const ADS = p.A * dsar;
        return { V, dsar, q, EDS, ADS, ans: EDS - ADS };
      },
      show: (p, s) =>
        W(
          `$_{${p.t + 1}}V = ${p.S}\\left(1 - \\frac{${ad(p.x + p.t + 1)}}{${ad(p.x)}}\\right) = ${m2(s.V)}$, so DSAR $= ${m2(s.dsar)}$ per policy.`,
          `Expected death strain $= N\\,q_{${p.x + p.t}}\\,\\text{DSAR} = ${p.N} \\times ${nf(s.q, 6)} \\times ${m2(s.dsar)} = ${m2(s.EDS)}$.`,
          `Actual death strain $= ${p.A} \\times ${m2(s.dsar)} = ${m2(s.ADS)}$.`,
          `Mortality profit $= \\text{EDS} - \\text{ADS} = ${m2(s.ans)}$${s.ans < 0 ? " (a loss: more deaths than expected)" : ""}.`,
          ans(money(s.ans, 0))
        ),
    }),
    calc({
      id: "cm1-m21-c03", module: "m21", unit: "£", dp: 0, signed: true, tolerance: { rel: 0.005, abs: 20 },
      params: () => {
        const y = randInt(65, 85);
        const N = randStep(500, 10000, 100);
        return { y, N, X: randStep(2000, 20000, 500), i: lifeI(), A: Math.max(0, Math.round(N * qx(y) * randStep(0.5, 1.5, 0.05))) };
      },
      question: (p) =>
        `An insurer has ${grp(p.N, 0)} annuitants aged ${p.y}, each receiving ${money(p.X, 0)} a year annually in advance; this year's payment has just been made. During the year ${p.A} of them die. Calculate the mortality profit for the year, using net premium reserves on the basis ${BASIS(p.i)}.`,
      solve: (p) => {
        const V = p.X * adx(p.y + 1, p.i);
        const q = qx(p.y);
        const dsar = -V;
        return { V, q, dsar, EDS: p.N * q * dsar, ADS: p.A * dsar, ans: p.N * q * dsar - p.A * dsar };
      },
      show: (p, s) =>
        W(
          `No benefit is paid on death, and the reserve at the end of the year is released: DSAR $= 0 - {}_{1}V = -${p.X}\\,${ad(p.y + 1)} = -${p.X} \\times ${nf(adx(p.y + 1, p.i), 4)} = ${m2(s.dsar)}$.`,
          `EDS $= ${p.N} \\times ${nf(s.q, 6)} \\times (${m2(s.dsar)}) = ${m2(s.EDS)}$; ADS $= ${p.A} \\times (${m2(s.dsar)}) = ${m2(s.ADS)}$.`,
          `Mortality profit $= \\text{EDS} - \\text{ADS} = ${m2(s.ans)}$. For annuities, more deaths than expected is a profit.`,
          ans(money(s.ans, 0))
        ),
    }),

    /* ---------- m22 Competing risks ---------- */
    calc({
      id: "cm1-m22-c01", module: "m22", unit: "", dp: 6, tolerance: { rel: 0.0005 },
      params: () => ({ qa: randStep(0.01, 0.2, 0.005), qb: randStep(0.02, 0.3, 0.005) }),
      question: (p) =>
        `In a two-decrement model, the independent rates are $q^{\\prime\\alpha} = ${nf(p.qa, 4)}$ (death) and $q^{\\prime\\beta} = ${nf(p.qb, 4)}$ (withdrawal). Assuming each decrement is uniformly distributed over the year in its own single-decrement table, calculate the dependent rate of death $(aq)^{\\alpha}$.`,
      solve: (p) => ({ ans: p.qa * (1 - 0.5 * p.qb) }),
      show: (p, s) =>
        W(
          `$(aq)^{\\alpha} = \\int_0^1 {}_{t}p^{\\prime\\beta}\\,{}_{t}p^{\\prime\\alpha}\\mu^{\\alpha}_{t}\\,dt$, and UDD in the single-decrement table makes $_{t}p^{\\prime\\alpha}\\mu^{\\alpha}_{t} = q^{\\prime\\alpha}$ and $_{t}p^{\\prime\\beta} = 1 - t\\,q^{\\prime\\beta}$.`,
          `So $(aq)^{\\alpha} = q^{\\prime\\alpha}\\left(1 - \\frac{1}{2}q^{\\prime\\beta}\\right) = ${nf(p.qa, 4)}(1 - 0.5 \\times ${nf(p.qb, 4)})$.`,
          ans(nf(s.ans, 6))
        ),
    }),
    calc({
      id: "cm1-m22-c02", module: "m22", unit: "", dp: 6, tolerance: { rel: 0.0005 },
      params: () => ({ qa: randStep(0.005, 0.1, 0.0025), qb: randStep(0.02, 0.25, 0.005) }),
      question: (p) =>
        `In a two-decrement model, the dependent rates are $(aq)^{\\alpha} = ${nf(p.qa, 4)}$ and $(aq)^{\\beta} = ${nf(p.qb, 4)}$. Assuming each force of decrement is constant over the year, calculate the independent rate $q^{\\prime\\alpha}$.`,
      solve: (p) => {
        const total = p.qa + p.qb;
        return { total, ans: 1 - (1 - total) ** (p.qa / total) };
      },
      show: (p, s) =>
        W(
          `With constant forces, each dependent rate is its share of the total: $(aq)^{\\alpha} = \\frac{\\mu^{\\alpha}}{\\mu}(aq)$, and $p^{\\prime\\alpha} = e^{-\\mu^{\\alpha}} = (ap)^{\\mu^{\\alpha}/\\mu} = (ap)^{(aq)^{\\alpha}/(aq)}$.`,
          `$(aq) = ${nf(s.total, 4)}$, so $q^{\\prime\\alpha} = 1 - (1 - ${nf(s.total, 4)})^{${nf(p.qa, 4)}/${nf(s.total, 4)}}$.`,
          ans(nf(s.ans, 6))
        ),
    }),
    calc({
      id: "cm1-m22-c03", module: "m22", unit: "", dp: 6, tolerance: { rel: 0.0005 },
      params: () => ({ qa: randStep(0.005, 0.1, 0.0025), qb: randStep(0.02, 0.2, 0.005), qc: randStep(0.01, 0.1, 0.005) }),
      question: (p) =>
        `In a three-decrement model the independent rates are $q^{\\prime\\alpha} = ${nf(p.qa, 4)}$, $q^{\\prime\\beta} = ${nf(p.qb, 4)}$ and $q^{\\prime\\gamma} = ${nf(p.qc, 4)}$. Assuming each decrement is uniformly distributed in its single-decrement table, calculate $(aq)^{\\alpha}$.`,
      solve: (p) => ({ ans: p.qa * (1 - 0.5 * (p.qb + p.qc) + (p.qb * p.qc) / 3) }),
      show: (p, s) =>
        W(
          `$(aq)^{\\alpha} = q^{\\prime\\alpha}\\int_0^1 (1 - t\\,q^{\\prime\\beta})(1 - t\\,q^{\\prime\\gamma})\\,dt = q^{\\prime\\alpha}\\left[1 - \\frac{1}{2}(q^{\\prime\\beta} + q^{\\prime\\gamma}) + \\frac{1}{3}q^{\\prime\\beta}q^{\\prime\\gamma}\\right]$.`,
          `$= ${nf(p.qa, 4)}\\left[1 - \\frac{1}{2}(${nf(p.qb + p.qc, 4)}) + \\frac{1}{3}(${nf(p.qb * p.qc, 6)})\\right]$.`,
          ans(nf(s.ans, 6))
        ),
    }),

    /* ---------- m24 Profit testing ---------- */
    calc({
      id: "cm1-m24-c01", module: "m24", unit: "£", dp: 2, signed: true, tolerance: { rel: 0.001, abs: 0.05 },
      params: () => {
        const V0 = randStep(0, 3000, 50);
        const P = randStep(200, 2000, 10);
        return {
          S: randStep(20000, 200000, 10000),
          q: roundTo(qx(randInt(40, 65)), 6),
          V0,
          V1: Math.max(0, V0 + randStep(-200, 400, 50)),
          P,
          E: roundTo(P * pick([0.025, 0.05, 0.1]) + randStep(0, 50, 5), 2),
          i: randStep(0.03, 0.06, 0.005),
        };
      },
      question: (p) =>
        `For one policy in force at the start of a policy year: reserve brought forward ${money(p.V0)}, premium ${money(p.P)}, expenses at the start of the year ${money(p.E)}, interest earned at ${pc(p.i)}, death benefit ${money(p.S, 0)} at the end of the year, $q = ${nf(p.q, 6)}$, and reserve required at the end of the year ${money(p.V1)} per survivor. Calculate the expected profit at the end of the year.`,
      solve: (p) => {
        const fund = (p.V0 + p.P - p.E) * (1 + p.i);
        return { fund, ans: fund - p.q * p.S - (1 - p.q) * p.V1 };
      },
      show: (p, s) =>
        W(
          `Profit $= ({}_{t}V + P - E)(1+i) - q\\,S - p\\,{}_{t+1}V$.`,
          `$(${m2(p.V0)} + ${m2(p.P)} - ${m2(p.E)}) \\times ${nf(1 + p.i, 4)} = ${m2(s.fund)}$.`,
          `Expected claims $${nf(p.q, 6)} \\times ${p.S} = ${m2(p.q * p.S)}$; reserve for survivors $${nf(1 - p.q, 6)} \\times ${m2(p.V1)} = ${m2((1 - p.q) * p.V1)}$.`,
          `Profit $= ${m2(s.fund)} - ${m2(p.q * p.S)} - ${m2((1 - p.q) * p.V1)} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m24-c02", module: "m24", unit: "£", dp: 2, signed: true, tolerance: { rel: 0.002, abs: 0.5 },
      params: () => {
        const n = randInt(3, 5);
        const x = randInt(40, 60);
        const PR = [-randStep(100, 400, 10)];
        for (let t = 1; t < n; t++) PR.push(randStep(20, 150, 5));
        const q = [];
        for (let t = 0; t < n - 1; t++) q.push(roundTo(qx(x + t), 6));
        return { n, x, PR, q, r: pick([0.08, 0.1, 0.12]) };
      },
      question: (p) =>
        `A ${p.n}-year policy on a life aged ${p.x} has profit vector (expected profit at the end of each year per policy in force at its start) ${p.PR.map((v) => money(v)).join(", ")}. Mortality: ${p.q
          .map((q, t) => `$q_{${p.x + t}} = ${nf(q, 6)}$`)
          .join(", ")}; no other decrements. Calculate the net present value of the profits at a risk discount rate of ${pc(p.r)}.`,
      solve: (p) => {
        const sig = [];
        let surv = 1;
        let npv = 0;
        for (let t = 0; t < p.n; t++) {
          sig.push(p.PR[t] * surv);
          npv += sig[t] * vn(t + 1, p.r);
          if (t < p.n - 1) surv *= 1 - p.q[t];
        }
        return { sig, ans: npv };
      },
      show: (p, s) =>
        W(
          `Profit signature: $\\Pi_t = {}_{t-1}p_{${p.x}}\\,\\text{PR}_t$, weighting each year's profit by the chance the policy is still in force at its start.`,
          `$\\Pi = (${s.sig.map((v) => m2(v)).join(",\\ ")})$.`,
          `NPV $= \\sum_t \\Pi_t\\,v^t$ at ${pc(p.r)} $= ${s.sig.map((v, t) => `${m2(v)}v^{${t + 1}}`).join(" + ").replace(/\+ -/g, "- ")} = ${m2(s.ans)}$.`,
          ans(money(s.ans))
        ),
    }),
    calc({
      id: "cm1-m24-c03", module: "m24", unit: "%", dp: 2, signed: true, tolerance: { abs: 0.05 },
      params: () => {
        const n = randInt(3, 5);
        const x = randInt(40, 60);
        const PR = [-randStep(100, 400, 10)];
        for (let t = 1; t < n; t++) PR.push(randStep(30, 150, 5));
        const q = [];
        for (let t = 0; t < n - 1; t++) q.push(roundTo(qx(x + t), 6));
        return { n, x, PR, q, P: randStep(200, 800, 10), r: pick([0.08, 0.1, 0.12]) };
      },
      question: (p) =>
        `A ${p.n}-year policy on a life aged ${p.x} has an annual premium of ${money(p.P, 0)} payable in advance, and profit vector ${p.PR.map((v) => money(v)).join(", ")}. Mortality: ${p.q
          .map((q, t) => `$q_{${p.x + t}} = ${nf(q, 6)}$`)
          .join(", ")}; no other decrements. Calculate the profit margin (NPV of profit as a percentage of the EPV of premiums) at a risk discount rate of ${pc(p.r)}.`,
      solve: (p) => {
        let surv = 1;
        let npv = 0;
        let prem = 0;
        for (let t = 0; t < p.n; t++) {
          npv += p.PR[t] * surv * vn(t + 1, p.r);
          prem += p.P * surv * vn(t, p.r);
          if (t < p.n - 1) surv *= 1 - p.q[t];
        }
        return { npv, prem, ans: (npv / prem) * 100 };
      },
      show: (p, s) =>
        W(
          `NPV of profit $= \\sum_{t=1}^{${p.n}} {}_{t-1}p_{${p.x}}\\,\\text{PR}_t\\,v^t = ${m2(s.npv)}$ at ${pc(p.r)}.`,
          `EPV of premiums $= ${p.P}\\sum_{t=1}^{${p.n}} {}_{t-1}p_{${p.x}}\\,v^{t-1} = ${m2(s.prem)}$, discounted at the risk discount rate too; premiums are paid at the <em>start</em> of each year.`,
          `Profit margin $= ${m2(s.npv)} / ${m2(s.prem)} = ${nf(s.ans / 100, 6)}$.`,
          ans(`${nf(s.ans, 2)}%`)
        ),
    }),
  ];

  return {
    seed,
    unseed,
    parseAnswer,
    mark,
    answerText,
    am92: { lx, qx, npx, adx, Ax, Ax1, nEx, IAx, Iadx, adxy, mu: am92Mu },
    DRILLS: { CM1 },
  };
})();

const CALC_DRILLS = CALC.DRILLS;

if (typeof module !== "undefined" && module.exports) module.exports = CALC;
