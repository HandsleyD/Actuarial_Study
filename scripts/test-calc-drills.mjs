#!/usr/bin/env node
// Cross-checks every calculation drill (docs/calc-drills.js) against an
// independent calculation, for a fixed set of seeds.
//
// "Independent" means a different route to the number, not the same formula
// typed twice: the drills mostly use closed forms (a-angle-n, Ia, A = 1 - d a,
// the CGT rearrangement ...), so the references below work from the cash
// flows -- summing them one by one, integrating forces numerically, finding
// yields and premiums by root-finding, and building AM92 from its formula by a
// different quadrature. That AM92 table is itself checked against values
// printed in the Formulae and Tables, so neither copy can drift.
//
// Also checks answer parsing and marking (CALC.parseAnswer / CALC.mark).
//
// Run: node scripts/test-calc-drills.mjs   (also runs in CI — validate-content.yml)

import { createRequire } from "node:module";
import assert from "node:assert/strict";

const require = createRequire(import.meta.url);
const CALC = require("../docs/calc-drills.js");

let passed = 0;
function test(name, fn) {
  try {
    fn();
    passed++;
  } catch (e) {
    console.error(`FAIL: ${name}\n  ${e.message}`);
    process.exitCode = 1;
  }
}

/* ---------- independent primitives ---------- */
const v = (t, i) => Math.exp(-t * Math.log(1 + i));
const pv = (flows, i) => flows.reduce((s, [t, amt]) => s + amt * v(t, i), 0);
function simpson(f, a, b, n = 2000) {
  const h = (b - a) / n;
  let s = f(a) + f(b);
  for (let k = 1; k < n; k++) s += (k % 2 ? 4 : 2) * f(a + k * h);
  return (s * h) / 3;
}
// root of f in [lo, hi] by the secant-safeguarded regula falsi (Illinois)
function root(f, lo, hi) {
  let flo = f(lo);
  let fhi = f(hi);
  if (flo * fhi > 0) throw new Error(`no sign change in [${lo}, ${hi}]`);
  let side = 0;
  for (let k = 0; k < 300; k++) {
    const x = (lo * fhi - hi * flo) / (fhi - flo);
    const fx = f(x);
    if (Math.abs(fx) < 1e-13 || Math.abs(hi - lo) < 1e-14) return x;
    if (fx * fhi > 0) {
      hi = x;
      fhi = fx;
      if (side === -1) flo /= 2;
      side = -1;
    } else {
      lo = x;
      flo = fx;
      if (side === 1) fhi /= 2;
      side = 1;
    }
  }
  return (lo + hi) / 2;
}
const range = (a, b) => Array.from({ length: b - a + 1 }, (_, k) => a + k);

/* ---------- AM92, built independently ---------- */
const mu = (x) => {
  const t = (x - 70) / 50;
  return 0.00005887 - 0.0004988 * t + Math.exp(-4.363378 + 5.544956 * t - 0.620345 * (2 * t * t - 1));
};
const LT = { 17: 10000 };
for (let x = 17; x < 120; x++) LT[x + 1] = LT[x] * Math.exp(-simpson(mu, x, x + 1, 400));
LT[121] = 0;
const l = (x) => (x > 121 ? 0 : LT[x]);
const surv = (k, x) => l(x + k) / l(x);
const q = (x) => 1 - surv(1, x);
const deathIn = (k, x) => (l(x + k) - l(x + k + 1)) / l(x); // P(K_x = k)
const ages = (x) => range(0, 120 - x);
// EPV of a benefit paid at end of year of death, b(k) for K = k
const epvDeath = (x, i, b, n = Infinity) => ages(x).filter((k) => k < n).reduce((s, k) => s + b(k) * v(k + 1, i) * deathIn(k, x), 0);
// EPV of a payment b(k) at time k if alive
const epvAlive = (x, i, b, n = Infinity) => ages(x).filter((k) => k < n).reduce((s, k) => s + b(k) * v(k, i) * surv(k, x), 0);
const aDue = (x, i, n) => epvAlive(x, i, () => 1, n);
const aJoint = (x, y, i) => range(0, 120 - Math.max(x, y)).reduce((s, k) => s + v(k, i) * surv(k, x) * surv(k, y), 0);

test("AM92 reproduces the printed Formulae and Tables values", () => {
  const near = (a, b, tol, what) => assert.ok(Math.abs(a - b) <= tol, `${what}: ${a} vs printed ${b}`);
  // q_x (6 dp) and a-dot_x at 4% (3 dp) as printed
  near(q(60), 0.008022, 5e-7, "q60");
  near(q(70), 0.024783, 5e-7, "q70");
  near(aDue(40, 0.04), 20.005, 0.0006, "a40 @4%");
  near(aDue(50, 0.04), 17.444, 0.0006, "a50 @4%");
  near(aDue(60, 0.04), 14.134, 0.0006, "a60 @4%");
  near(aDue(65, 0.04), 12.276, 0.0006, "a65 @4%");
  near(aDue(70, 0.04), 10.375, 0.0006, "a70 @4%");
  // the drills' own table agrees with this one
  for (const x of [20, 45, 70, 95, 110]) near(CALC.am92.lx(x), l(x), 1e-6 * l(x) + 1e-9, `drill l${x}`);
});

/* ---------- reference answers, one per item ---------- */
const flowsAnnuity = (n, i, p, X, start = 0, advance = false) =>
  range(advance ? 0 : 1, advance ? n * p - 1 : n * p).map((k) => [start + k / p, X / p]);

const REF = {
  // m01
  "cm1-m01-c01": (p) => p.P + range(1, p.m).reduce((s) => s + (p.P * p.r) / 12, 0),
  "cm1-m01-c02": (p) => p.P / v(p.n + p.m / 12, p.i),
  "cm1-m01-c03": (p) => {
    const price = 100 - (100 * p.d * p.t) / 365;
    return 100 * root((i) => price / v(p.t / 365, i) - 100, 0, 1);
  },
  // m02
  "cm1-m02-c01": (p) => {
    let a = 1;
    for (let k = 0; k < p.p; k++) a *= 1 + p.j / p.p;
    return 100 * (a - 1);
  },
  "cm1-m02-c02": (p) => 100 * root((d) => (1 - d / p.p) ** -p.p - (1 + p.i), 0, 0.5),
  "cm1-m02-c03": (p) => 100 * root((x) => (1 + x / p.p) ** p.p - Math.exp(p.delta), 0, 0.5),
  "cm1-m02-c04": (p) => p.P * (1 + p.j / 4) ** (4 * p.n1) * Math.exp(simpson(() => p.delta, 0, p.n2, 10)),
  // m03
  "cm1-m03-c01": (p) => 100 * root((r) => (1 + r) * (1 + p.j) - (1 + p.i), -0.5, 0.5),
  "cm1-m03-c02": (p) => 100 * root((r) => p.P * (1 + r) ** p.n * (p.Qn / p.Q0) - p.X, -0.5, 0.5),
  "cm1-m03-c03": (p) => 100 * root((i) => (1 + i) / (1 + p.j) - (1 + p.r), 0, 0.5),
  // m04
  "cm1-m04-c01": (p) => p.C * Math.exp(-simpson((t) => p.a + p.b * t, 0, p.T)),
  "cm1-m04-c02": (p) => p.C * Math.exp(simpson((t) => p.a + p.b * t * t, p.t1, p.t2)),
  "cm1-m04-c03": (p) => {
    const acc = Math.exp(simpson(() => p.d1, 0, p.k, 10) + simpson(() => p.d2, p.k, p.T, 10));
    return 100 * root((i) => (1 + i) ** p.T - acc, 0, 1);
  },
  "cm1-m04-c04": (p) => simpson((t) => p.c * Math.exp(p.k * t) * Math.exp(-p.delta * t), 0, p.n),
  // m05
  "cm1-m05-c01": (p) => pv(flowsAnnuity(p.n, p.i, 1, p.X), p.i),
  "cm1-m05-c02": (p) => pv(flowsAnnuity(p.n, p.i, 12, p.X, 0, true), p.i),
  "cm1-m05-c03": (p) => pv(flowsAnnuity(p.n, p.i, 4, p.X, p.m), p.i),
  "cm1-m05-c04": (p) => range(0, 12 * p.n - 1).reduce((s, k) => s + p.Y / v(p.n - k / 12, p.i), 0),
  // m06
  "cm1-m06-c01": (p) => pv(range(1, p.n).map((t) => [t, t * p.X]), p.i),
  "cm1-m06-c02": (p) => pv(range(1, p.n).map((t) => [t, p.A + (t - 1) * p.K]), p.i),
  "cm1-m06-c03": (p) => pv(range(1, p.n).map((t) => [t, p.X * (1 + p.g) ** (t - 1)]), p.i),
  "cm1-m06-c04": (p) => simpson((t) => p.X * t * v(t, p.i), 0, p.n),
  // m07
  "cm1-m07-c01": (p) => 100 * root((y) => pv([...range(1, p.n).map((t) => [t, p.A]), [p.n, p.R]], y) - p.P, -0.2, 0.5),
  "cm1-m07-c02": (p) => root((t) => p.P / v(t, p.i) - p.X, 0, 200),
  "cm1-m07-c03": (p) => 100 * root((y) => pv([[0, -p.A], [p.t1, -p.B], [p.t2, p.C]], y), -0.2, 0.5),
  // m08: run the loan schedule
  "cm1-m08-c01": (p) => root((X) => balance(p.L, p.i, X, p.n), 0, p.L),
  "cm1-m08-c02": (p) => balance(p.L, p.i, root((X) => balance(p.L, p.i, X, p.n), 0, p.L), p.k),
  "cm1-m08-c03": (p) => {
    const X = root((Y) => balance(p.L, p.i, Y, p.n), 0, p.L);
    return balance(p.L, p.i, X, p.t - 1) * p.i;
  },
  "cm1-m08-c04": (p) => {
    const j = (1 + p.i) ** (1 / 12) - 1;
    return root((X) => balance(p.L, j, X, 12 * p.n), 0, p.L);
  },
  // m09
  "cm1-m09-c01": (p) => simpson((t) => p.R * v(t, p.i), 2, p.T) - p.C0 - p.C1 * v(1, p.i),
  "cm1-m09-c02": (p) => 100 * root((y) => pv(range(1, p.n).map((t) => [t, p.R]), y) - p.C, -0.2, 0.6),
  "cm1-m09-c03": (p) => {
    // accumulate the project's balance at i until it turns positive
    let bal = -p.C;
    let t = 0;
    while (bal < 0) {
      bal = bal * (1 + p.i) + p.R;
      t += 1;
    }
    return t;
  },
  "cm1-m09-c04": (p) => 100 * ((p.F1 / p.F0) * (p.F2 / (p.F1 + p.C)) - 1),
  "cm1-m09-c05": (p) => 100 * root((y) => p.F0 / v(1, y) + p.C / v(0.5, y) - p.F1, -0.5, 1),
  // m10
  "cm1-m10-c01": (p) => pv([...flowsAnnuity(p.n, p.i, 2, p.D), [p.n, p.R]], p.i),
  "cm1-m10-c02": (p) => pv([...flowsAnnuity(p.n, p.i, 2, (1 - p.t1) * p.D), [p.n, p.R]], p.i),
  "cm1-m10-c03": (p) => {
    const rest = pv(flowsAnnuity(p.n, p.i, 2, (1 - p.t1) * p.D), p.i) + p.R * v(p.n, p.i);
    return root((P) => rest - p.t2 * Math.max(p.R - P, 0) * v(p.n, p.i) - P, 0, 1000);
  },
  "cm1-m10-c04": (p) => range(1, 5000).reduce((s, t) => s + p.D * (1 + p.g) ** t * v(t, p.i), 0),
  // m11
  "cm1-m11-c01": (p) => {
    const P1 = 1 / (1 + p.y1);
    const P2 = (1 + p.y2) ** -2;
    const P3 = (1 + p.y3) ** -3;
    return 100 * (p.which === "f21" ? P2 / P3 - 1 : Math.sqrt(P1 / P3) - 1);
  },
  "cm1-m11-c02": (p) => p.D / (1 + p.y1) + p.D / (1 + p.y2) ** 2 + (100 + p.D) / (1 + p.y3) ** 3,
  "cm1-m11-c03": (p) => {
    const f = [...range(1, p.n).map((t) => [t, p.D]), [p.n, 100]];
    return f.reduce((s, [t, c]) => s + t * c * v(t, p.i), 0) / pv(f, p.i);
  },
  "cm1-m11-c04": (p) => {
    const A = (i) => pv(range(1, p.n).map((t) => [t, 1]), i);
    const h = 1e-6;
    return -(A(p.i + h) - A(p.i - h)) / (2 * h) / A(p.i);
  },
  "cm1-m11-c05": (p) => {
    // solve PV and DMT matching directly in nominal amounts (Cramer's rule)
    const Lpv = p.L1 * v(p.t1, p.i) + p.L2 * v(p.t2, p.i);
    const Lt = p.t1 * p.L1 * v(p.t1, p.i) + p.t2 * p.L2 * v(p.t2, p.i);
    const [a11, a12, a21, a22] = [v(p.a, p.i), v(p.b, p.i), p.a * v(p.a, p.i), p.b * v(p.b, p.i)];
    return (Lpv * a22 - a12 * Lt) / (a11 * a22 - a12 * a21);
  },
  // m12
  "cm1-m12-c01": (p) => surv(p.n, p.x),
  "cm1-m12-c02": (p) => range(p.m, p.m + p.n - 1).reduce((s, k) => s + deathIn(k, p.x), 0),
  "cm1-m12-c03": (p) => {
    const lu = (s) => l(p.x) - s * (l(p.x) - l(p.x + 1)); // linear l within the year
    return (lu(p.s) - lu(p.s + p.t)) / lu(p.s);
  },
  "cm1-m12-c04": (p) => {
    const lc = (y) => l(Math.floor(y)) * (l(Math.floor(y) + 1) / l(Math.floor(y))) ** (y - Math.floor(y)); // log-linear l
    return 1 - lc(p.x + 2) / lc(p.x + 0.5);
  },
  // m13
  "cm1-m13-c01": (p) => epvDeath(p.x, p.i, () => p.S),
  "cm1-m13-c02": (p) => epvDeath(p.x, p.i, () => p.S, p.n),
  "cm1-m13-c03": (p) => ages(p.x).filter((k) => k < p.n).reduce((s, k) => s + p.S * v(k + 0.5, p.i) * deathIn(k, p.x), 0) + p.S * v(p.n, p.i) * surv(p.n, p.x),
  "cm1-m13-c04": (p) => p.S * v(p.n, p.i) * surv(p.n, p.x),
  // m14
  "cm1-m14-c01": (p) => epvAlive(p.x, p.i, () => p.X),
  "cm1-m14-c02": (p) => p.X * aDue(p.x, p.i) - (11 / 24) * p.X,
  "cm1-m14-c03": (p) => epvAlive(p.x, p.i, () => p.X, p.n),
  "cm1-m14-c04": (p) => p.X * v(65 - p.x, p.i) * surv(65 - p.x, p.x) * (aDue(65, p.i) - 13 / 24),
  // m15: moments of the present value random variable directly
  "cm1-m15-c01": (p) => {
    const z = (k) => p.S * v(k + 1, p.i);
    const m1 = ages(p.x).reduce((s, k) => s + z(k) * deathIn(k, p.x), 0);
    const m2 = ages(p.x).reduce((s, k) => s + z(k) ** 2 * deathIn(k, p.x), 0);
    return Math.sqrt(m2 - m1 * m1);
  },
  "cm1-m15-c02": (p) => {
    const y = (k) => p.X * range(0, k).reduce((s, j) => s + v(j, p.i), 0);
    const m1 = ages(p.x).reduce((s, k) => s + y(k) * deathIn(k, p.x), 0);
    const m2 = ages(p.x).reduce((s, k) => s + y(k) ** 2 * deathIn(k, p.x), 0);
    return Math.sqrt(m2 - m1 * m1);
  },
  "cm1-m15-c03": (p) => ages(p.x).reduce((s, k) => s + p.S * v(k + 0.5, p.i) * deathIn(k, p.x), 0),
  "cm1-m15-c04": (p) => p.X * aDue(p.x, p.i) - p.X / 2,
  // m16
  "cm1-m16-c01": (p) => epvDeath(p.x, p.i, (k) => p.S * (k + 1)),
  "cm1-m16-c02": (p) => epvAlive(p.x, p.i, (k) => p.X * (k + 1)),
  "cm1-m16-c03": (p) => epvDeath(p.x, 0.06, (k) => p.S * (1.06 / 1.04) ** k),
  "cm1-m16-c04": (p) => epvDeath(p.x, p.i, (k) => p.S * (1 + p.b * k)),
  // m17: find the premium that balances the equation of value
  "cm1-m17-c01": (p) => root((P) => epvAlive(p.x, p.i, (k) => (k === 0 ? P : (1 - p.r) * P)) - p.I - epvDeath(p.x, p.i, () => p.S), 0, p.S),
  "cm1-m17-c02": (p) =>
    root((P) => epvAlive(p.x, p.i, (k) => (k === 0 ? (1 - p.f) * P : (1 - p.r) * P), p.n) - epvDeath(p.x, p.i, () => p.S, p.n) - p.S * v(p.n, p.i) * surv(p.n, p.x), 0, p.S),
  "cm1-m17-c03": (p) => p.I + epvAlive(p.x, p.i, () => p.e) + p.X * (aDue(p.x, p.i) - 11 / 24),
  "cm1-m17-c04": (p) => root((P) => epvAlive(p.x, p.i, (k) => (k === 0 ? (1 - p.f) * P : (1 - p.r) * P), p.n) - epvDeath(p.x, p.i, () => p.S, p.n), 0, p.S),
  // m18: prospective reserves, benefits less premiums
  "cm1-m18-c01": (p) => {
    const P = epvDeath(p.x, p.i, () => p.S) / aDue(p.x, p.i);
    const y = p.x + p.t;
    return epvDeath(y, p.i, () => p.S) - P * aDue(y, p.i);
  },
  "cm1-m18-c02": (p) => {
    const benefit = (x, n) => epvDeath(x, p.i, () => p.S, n) + p.S * v(n, p.i) * surv(n, x);
    const P = benefit(p.x, p.n) / aDue(p.x, p.i, p.n);
    return benefit(p.x + p.t, p.n - p.t) - P * aDue(p.x + p.t, p.i, p.n - p.t);
  },
  "cm1-m18-c03": (p) => epvDeath(p.x + p.t, p.i, () => p.S) - epvAlive(p.x + p.t, p.i, () => (1 - p.r) * p.G),
  "cm1-m18-c04": (p) => root((V1) => (p.V + p.P) * (1 + p.i) - p.q * p.S - (1 - p.q) * V1, -10 * p.S, 10 * p.S),
  // m19
  "cm1-m19-c01": (p) => surv(p.n, p.x) * surv(p.n, p.y),
  "cm1-m19-c02": (p) => 1 - (1 - surv(p.n, p.x)) * (1 - surv(p.n, p.y)),
  "cm1-m19-c03": (p) => p.X * aJoint(p.x, p.y, p.i),
  "cm1-m19-c04": (p) => range(0, 120 - Math.min(p.x, p.y)).reduce((s, k) => s + p.X * v(k, p.i) * (1 - (1 - surv(k, p.x)) * (1 - surv(k, p.y))), 0),
  // m20
  "cm1-m20-c01": (p) => range(1, 120 - p.y).reduce((s, k) => s + p.X * v(k, p.i) * surv(k, p.y) * (1 - surv(k, p.x)), 0),
  "cm1-m20-c02": (p) =>
    range(0, 120 - Math.max(p.x, p.y)).reduce(
      (s, k) => s + p.S * v(k + 1, p.i) * (surv(k, p.x) * surv(k, p.y) - surv(k + 1, p.x) * surv(k + 1, p.y)),
      0
    ),
  "cm1-m20-c03": (p) => REF["cm1-m20-c01"](p) / aJoint(p.x, p.y, p.i),
  // m21
  "cm1-m21-c01": (p) => {
    const P = epvDeath(p.x, p.i, () => p.S) / aDue(p.x, p.i);
    const y = p.x + p.t + 1;
    return p.S - (epvDeath(y, p.i, () => p.S) - P * aDue(y, p.i));
  },
  "cm1-m21-c02": (p) => (p.N * q(p.x + p.t) - p.A) * REF["cm1-m21-c01"](p),
  "cm1-m21-c03": (p) => (p.A - p.N * q(p.y)) * epvAlive(p.y + 1, p.i, () => p.X),
  // m22: integrate the multiple-decrement definitions
  "cm1-m22-c01": (p) => simpson((t) => p.qa * (1 - t * p.qb), 0, 1, 100),
  "cm1-m22-c02": (p) => {
    // find constant forces reproducing both dependent rates
    const mu = -Math.log(1 - p.qa - p.qb);
    const muA = root((m) => simpson((t) => m * Math.exp(-mu * t), 0, 1, 200) - p.qa, 0, mu);
    return 1 - Math.exp(-muA);
  },
  "cm1-m22-c03": (p) => simpson((t) => p.qa * (1 - t * p.qb) * (1 - t * p.qc), 0, 1, 100),
  // m24
  "cm1-m24-c01": (p) => (p.V0 + p.P - p.E) * (1 + p.i) - p.q * p.S - (1 - p.q) * p.V1,
  "cm1-m24-c02": (p) => p.PR.reduce((s, pr, t) => s + pr * p.q.slice(0, t).reduce((a, qq) => a * (1 - qq), 1) * v(t + 1, p.r), 0),
  "cm1-m24-c03": (p) => {
    const inForce = (t) => p.q.slice(0, t).reduce((a, qq) => a * (1 - qq), 1);
    const npv = p.PR.reduce((s, pr, t) => s + pr * inForce(t) * v(t + 1, p.r), 0);
    const prem = p.PR.reduce((s, _, t) => s + p.P * inForce(t) * v(t, p.r), 0);
    return (100 * npv) / prem;
  },
};

// loan balance after k level payments X, at rate i per period
function balance(L, i, X, k) {
  let b = L;
  for (let t = 0; t < k; t++) b = b * (1 + i) - X;
  return b;
}

/* ---------- the cross-check ---------- */
const SEEDS = range(1, 60).map((k) => k * 104729);
const items = CALC.DRILLS.CM1;

test("every calc item has an independent reference", () => {
  const missing = items.filter((it) => !REF[it.id]).map((it) => it.id);
  assert.deepEqual(missing, []);
  const stale = Object.keys(REF).filter((id) => !items.some((it) => it.id === id));
  assert.deepEqual(stale, []);
});

for (const item of items) {
  test(`${item.id} matches its independent calculation`, () => {
    for (const s of SEEDS) {
      CALC.seed(s);
      const p = item.params();
      const got = item.answer(p);
      const want = REF[item.id](p);
      const tol = 1e-6 * Math.max(1, Math.abs(want));
      assert.ok(Math.abs(got - want) <= tol, `seed ${s}: drill says ${got}, reference says ${want}, params ${JSON.stringify(p)}`);
      // the true answer, and the true answer +/- 1.5x the tolerance, mark as expected
      const t = item.tolerance;
      const width = Math.max(t.rel != null ? t.rel * Math.abs(want) : 0, t.abs != null ? t.abs : 0);
      assert.equal(CALC.mark(item, p, want.toFixed(10)).ok, true, `seed ${s}: exact answer marked wrong`);
      if (width > 0) {
        const off = want + 1.5 * width;
        assert.equal(CALC.mark(item, p, off.toFixed(10)).ok, false, `seed ${s}: ${off} marked right but ${want} is the answer`);
      } else {
        assert.equal(CALC.mark(item, p, (want + 1).toFixed(10)).ok, false, `seed ${s}: exact item accepted a wrong answer`);
      }
    }
    CALC.unseed();
  });
}

test("fixed seeds give fixed questions", () => {
  const it = items[0];
  CALC.seed(42);
  const a = JSON.stringify(it.params());
  CALC.seed(42);
  assert.equal(JSON.stringify(it.params()), a);
  CALC.unseed();
});

/* ---------- reading typed answers ---------- */
test("parseAnswer reads the forms people type", () => {
  const val = (s) => (CALC.parseAnswer(s) || {}).value;
  assert.equal(val("1234.56"), 1234.56);
  assert.equal(val("1,234.56"), 1234.56);
  assert.equal(val("£1,234.56"), 1234.56);
  assert.equal(val(" £ 1 234.5 "), 1234.5);
  assert.equal(val("-£50"), -50);
  assert.equal(val("−50"), -50); // typographic minus
  assert.equal(val("+3"), 3);
  assert.equal(val(".5"), 0.5);
  assert.equal(val("12 years"), 12);
  assert.deepEqual(CALC.parseAnswer("4.5%"), { value: 4.5, percent: true });
  for (const bad of ["", "abc", "4,5", "1,23", "1.2.3", "--4", "£", "%", "1e5"]) assert.equal(CALC.parseAnswer(bad), null, bad);
});

test("mark: percentage items take 5.25, 5.25% or 0.0525", () => {
  const item = { unit: "%", tolerance: { abs: 0.01 }, answer: () => 5.25 };
  for (const s of ["5.25", "5.25%", "0.0525", "5.258"]) assert.equal(CALC.mark(item, {}, s).ok, true, s);
  for (const s of ["5.3", "0.053", "52.5"]) assert.equal(CALC.mark(item, {}, s).ok, false, s);
  assert.equal(CALC.mark(item, {}, "nonsense"), null);
  // feedback echoes the reading that was marked, not the raw first reading
  assert.equal(CALC.mark(item, {}, "0.0525").value, 5.25);
  assert.equal(CALC.mark(item, {}, "5.25").value, 5.25);
  assert.equal(CALC.mark(item, {}, "0.07").value, 0.07); // wrong: shown as typed
});

test("mark: money items use the relative tolerance, and a % sign divides by 100", () => {
  const item = { unit: "£", tolerance: { rel: 0.001 }, answer: () => 1000 };
  assert.equal(CALC.mark(item, {}, "£1,000.99").ok, true);
  assert.equal(CALC.mark(item, {}, "1001.5").ok, false);
  const frac = { unit: "", tolerance: { abs: 0.0005 }, answer: () => 0.25 };
  assert.equal(CALC.mark(frac, {}, "25%").ok, true);
});

console.log(`${passed} passed${process.exitCode ? ", some FAILED" : ""}`);
