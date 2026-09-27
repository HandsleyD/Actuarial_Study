// Shared set-up for the browser tests.
//
// Every test gets a page that:
//   - has no network beyond the local server: Supabase is replaced by a
//     signed-out stub, KaTeX is served from node_modules, module lists
//     (progress.md) come from this checkout, and web fonts are skipped;
//   - runs at a fixed date and time (NOW below), so countdowns, due cards,
//     "awaiting results" and results prompts are the same on every run;
//   - fails the test on any uncaught page error.
//
// seed() fills localStorage before the site loads, the same way the site
// stores a signed-out visitor's progress.

import { test as base, expect } from "@playwright/test";
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const katexDist = path.join(repo, "node_modules/katex/dist");

// Sunday 27 September 2026, 10:00 in London: after the September 2026
// papers, before their results (8 December), so the "awaiting results"
// sitting is September 2026 and the next sitting is April 2027.
export const NOW = new Date("2026-09-27T10:00:00+01:00");

const SUPABASE_STUB = `window.supabase = { createClient: () => ({
  auth: {
    getSession: async () => ({ data: { session: null } }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe() {} } } }),
    signInWithPassword: async () => ({ data: {}, error: { message: "Sign-in is not available in tests." } }),
    signUp: async () => ({ data: {}, error: { message: "Sign-up is not available in tests." } }),
    signOut: async () => ({ error: null }),
  },
  from: () => ({ select: () => ({ eq: async () => ({ data: [], error: null }) }), upsert: async () => ({ error: null }) }),
  functions: { invoke: async () => ({ error: { message: "offline" } }) },
}) };`;

const CONTENT_TYPES = { ".js": "application/javascript", ".css": "text/css", ".woff2": "font/woff2", ".woff": "font/woff", ".ttf": "font/ttf" };

export async function stubNetwork(page) {
  await page.route("https://cdn.jsdelivr.net/**", (route) => {
    const url = route.request().url();
    if (url.includes("supabase")) return route.fulfill({ contentType: "application/javascript", body: SUPABASE_STUB });
    const m = url.match(/katex@[^/]+\/dist\/(.+?)(\?|$)/);
    if (m) {
      const file = path.join(katexDist, m[1]);
      if (existsSync(file)) {
        return route.fulfill({ body: readFileSync(file), contentType: CONTENT_TYPES[path.extname(file)] || "application/octet-stream" });
      }
    }
    return route.fulfill({ status: 404, body: "" });
  });
  await page.route("https://raw.githubusercontent.com/**", (route) => {
    const m = route.request().url().match(/(maths-study\/exams\/[^?]+)/);
    const file = m && path.join(repo, m[1]);
    return file && existsSync(file) ? route.fulfill({ body: readFileSync(file, "utf8") }) : route.fulfill({ status: 404, body: "" });
  });
  await page.route(/fonts\.(googleapis|gstatic)\.com/, (route) => route.fulfill({ status: 404, body: "" }));
}

// Storage keys for a signed-out visitor: actuarialStudy:<kind>:anon[:<code>].
// seed(page, { welcomed: true, result: {...}, "status:CS1": {...} })
export async function seed(page, entries) {
  await page.addInitScript((data) => {
    // Seed once per tab: later reloads keep whatever the test has done since.
    if (sessionStorage.getItem("__seeded")) return;
    sessionStorage.setItem("__seeded", "1");
    for (const [k, v] of Object.entries(data)) {
      const [kind, code] = k.split(":");
      const key = k === "theme" ? "theme" : code ? `actuarialStudy:${kind}:anon:${code}` : `actuarialStudy:${kind}:anon`;
      localStorage.setItem(key, typeof v === "string" ? v : JSON.stringify(v));
    }
  }, entries);
}

export async function readStore(page, k) {
  return page.evaluate((k) => {
    const [kind, code] = k.split(":");
    const raw = localStorage.getItem(code ? `actuarialStudy:${kind}:anon:${code}` : `actuarialStudy:${kind}:anon`);
    return raw === null ? null : JSON.parse(raw);
  }, k);
}

// Open a route and wait for the site to finish its first render. Module
// lists load asynchronously, so wait for a view-specific element too.
export async function open(page, hash = "", waitFor) {
  await page.goto(`/#/${hash.replace(/^#?\/?/, "")}`);
  await page.waitForFunction(() => document.querySelectorAll(".exam-card").length > 0);
  if (waitFor) await page.locator(waitFor).first().waitFor();
}

// Reveal the current card and grade it. The grade is applied once the
// "Sufficient"/"Insufficient" stamp animation finishes (about 0.4s), so wait
// for that before doing anything else.
export async function grade(page, sufficient) {
  await page.locator("#revealBtn").click();
  await page.locator(sufficient ? "#scoreGood" : "#scoreBad").click();
  await page.locator(".card-stamp").waitFor({ state: "detached" });
}

export const test = base.extend({
  page: async ({ page }, use) => {
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await page.clock.setFixedTime(NOW);
    await stubNetwork(page);
    await use(page);
    expect(errors, "uncaught errors on the page").toEqual([]);
  },
});

export { expect };
