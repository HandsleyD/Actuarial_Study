import { test, expect, seed, open } from "./fixtures.mjs";

// The clock is pinned to Sunday 27 September 2026 (fixtures.mjs). In April
// 2027, CM1's first paper is 12 April and CB2's is 16 April, so their
// "two weeks before" targets are 29 March (183 days away) and 2 April (187).
const plan = (sittings) => ({ sittings, specialists: { sp: [], sa: [] }, updatedAt: 1 });
const card = (over) => ({ reps: 1, interval: 1, ease: 2.5, due: "2026-11-01", lapses: 0, reviews: 2, last: "2026-09-20", ...over });

// CB2 m01 (15 cards) all scored: card 0 first scored today, cards 1-3 overdue.
// 10 cards starred; 4 drill answers, 3 right.
function cb2Progress() {
  const m01 = {};
  for (let i = 0; i < 15; i++) m01[i] = card(i >= 1 && i <= 3 ? { due: "2026-09-25" } : {});
  m01[0] = card({ reviews: 1, last: "2026-09-27", due: "2026-09-28" });
  const starred = Object.fromEntries([...Array(10).keys()].map((i) => [i, true]));
  return {
    "srs:CB2": { m01 },
    "mastery:CB2": { m01: starred },
    "status:CB2": { m01: "In progress" },
    "drill:CB2": { "cb2-m01-d01": { ...card({ due: "2026-12-01" }), attempts: 4, correct: 3 } },
  };
}

test.describe("Today card", () => {
  test("with no plan, nudges you to make one", async ({ page }) => {
    await seed(page, { welcomed: true });
    await open(page, "", "#dueBanner .today-title");
    const today = page.locator("#dueBanner");
    await expect(today.locator(".today-title")).toHaveText("Today");
    await expect(today).toContainText("No exam plan yet");
    await today.getByRole("link", { name: "Make a plan" }).click();
    await expect(page).toHaveURL(/#\/dashboard\/plan$/);
    await expect(page.locator("#examPlan")).toBeVisible();
  });

  test("paces new cards to two weeks before the next planned sitting", async ({ page }) => {
    await seed(page, { welcomed: true, plan: plan({ "2027-04": ["CB2", "CM1"] }), ...cb2Progress() });
    await open(page, "", "#dueBanner .today-title");
    const today = page.locator("#dueBanner");
    await expect(today).toContainText("3 cards due for review today");
    // CB2: 345 unseen + 1 learned today over 187 days = 2 a day.
    // CM1: 375 unseen over 183 days = 3 a day. One already learned today.
    await expect(today).toContainText("4 new cards to learn today");
    await expect(today).toContainText("1 of 5 done");
    await expect(today).toContainText("CB2 2");
    await expect(today).toContainText("CM1 3");
    await expect(today).toContainText("to meet every card by 29 Mar 2027, two weeks before the April 2027 papers");

    await today.getByRole("link", { name: "Start CB2 M02" }).click();
    await expect(page).toHaveURL(/#\/CB2\/m02$/);

    await page.goto("/#/");
    await page.locator("#dueBanner").getByRole("link", { name: "Review due cards" }).click();
    await expect(page).toHaveURL(/#\/review$/);
  });

  test("modules marked done drop out of the pace", async ({ page }) => {
    const done = Object.fromEntries([...Array(24).keys()].map((i) => [`m${String(i + 1).padStart(2, "0")}`, "Done"]));
    await seed(page, { welcomed: true, plan: plan({ "2027-04": ["CB2"] }), "status:CB2": done });
    await open(page, "", "#dueBanner .today-title");
    await expect(page.locator("#dueBanner")).toContainText("Every card in your planned modules is started");
  });

  test("in the last two weeks, what's left is spread up to the paper", async ({ page }) => {
    await seed(page, { welcomed: true, plan: plan({ "2027-04": ["CB2"] }), "status:CB2": { m01: "Done" } });
    // 6 April 2027: ten days before CB2's paper, 345 cards still to meet.
    await page.clock.setFixedTime(new Date("2027-04-06T09:00:00+01:00"));
    await open(page, "", "#dueBanner .today-title");
    const today = page.locator("#dueBanner");
    await expect(today).toContainText("35 new cards to learn today");
    await expect(today).toContainText("you're in the last two weeks before April 2027");
  });
});

test.describe("readiness", () => {
  test("the subject page shows the % and what it's made of", async ({ page }) => {
    await seed(page, { welcomed: true, plan: plan({ "2027-04": ["CB2", "CM1"] }), ...cb2Progress() });
    await open(page, "CB2", ".readiness-line");
    const line = page.locator(".readiness-line");
    // (35 * 1/24 + 35 * 10/360 + 15 * 3/4 + 15 * 12/360) / 100
    await expect(line.locator(".readiness-badge")).toHaveText("Readiness 14%");
    await expect(line).toContainText(
      "1/24 modules covered · 10/360 cards starred · drills 75% right · 3 reviews overdue · planned for April 2027"
    );
    await expect(line).toContainText("not a pass probability");
  });

  test("passed subjects and Foundations don't show it", async ({ page }) => {
    await seed(page, { welcomed: true, result: { CB2: { status: "passed", sitting: null, updatedAt: 1 } }, ...cb2Progress() });
    await open(page, "CB2", ".subject-head");
    await expect(page.locator(".readiness-line")).toHaveCount(0);
    await page.goto("/#/FM");
    await page.locator(".subject-head").waitFor();
    await expect(page.locator(".readiness-line")).toHaveCount(0);
  });

  test("each upcoming planned sitting carries a badge on the route map and in the plan", async ({ page }) => {
    // CB2 14% and CM1 0%: the sitting averages 7%.
    await seed(page, { welcomed: true, plan: plan({ "2027-04": ["CB2", "CM1"] }), ...cb2Progress() });
    await open(page, "", "#routeMap .rm-sign");
    await expect(page.locator("#routeMap .rm-sign.planned text")).toHaveText("APR 2027 · 7%");
    await expect(page.locator("#routeMap .rm-sign.suggested .rm-ready")).toHaveCount(0);

    await page.goto("/#/dashboard/plan");
    const april = page.locator(".plan-sitting", { hasText: "April 2027" }).first();
    const badge = april.locator(".readiness-badge");
    await expect(badge).toHaveText("Readiness 7%");
    await expect(badge).toHaveAttribute("title", /CB2 14%, CM1 0%.*not a pass probability/);
  });
});
