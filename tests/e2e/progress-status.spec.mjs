import { test, expect, seed, open, readStore, grade } from "./fixtures.mjs";

// Today is 27 September 2026: CB2's September paper was on the 23rd, and
// results are due on 8 December.

const plan = (sittings) => ({ sittings, specialists: { sp: [], sa: [] }, updatedAt: 1 });
const due = (over) => ({ reps: 1, interval: 1, ease: 2.5, due: "2026-09-25", lapses: 0, reviews: 1, last: "2026-09-24", ...over });

test.describe("studying a module starts it", () => {
  test("scoring a card moves a Not started module to In progress", async ({ page }) => {
    await seed(page, { welcomed: true });
    await open(page, "CS1/m03", "#revealBtn");
    await grade(page, true);
    expect((await readStore(page, "status:CS1")).m03).toBe("In progress");
    await page.goto("/#/CS1");
    await expect(page.locator('.status-badge[data-module="m03"]')).toHaveText("In progress");
    await page.goto("/#/");
    await expect(page.locator("#card-CS1 .status-ribbon")).toHaveText("Currently studying");
  });

  test("answering a drill does too", async ({ page }) => {
    await seed(page, { welcomed: true });
    await open(page, "FS/drill/m02", "#drillSubmit");
    // Any answer will do. Runs are shuffled, so fill whatever this first
    // question needs: an option, or a token in every gap, or a diagram region.
    const trays = page.locator("#drillView .drill-tray");
    if (await trays.count()) {
      for (let n = 0; n < (await trays.count()); n++) await page.locator(`#drillView .drill-token[data-blank="${n}"]`).first().click();
    } else if (await page.locator("#drillView .drill-option").count()) {
      await page.locator("#drillView .drill-option").first().click();
    } else {
      await page.locator("#drillView g[data-region]").first().focus();
      await page.keyboard.press("Enter");
    }
    await page.locator("#drillSubmit").click();
    expect((await readStore(page, "status:FS")).m02).toBe("In progress");
  });

  test("a module marked Done stays Done", async ({ page }) => {
    await seed(page, { welcomed: true, "status:CS1": { m03: "Done" } });
    await open(page, "CS1/m03", "#revealBtn");
    await grade(page, false);
    expect((await readStore(page, "status:CS1")).m03).toBe("Done");
  });
});

test.describe("subjects awaiting results", () => {
  const seedAwaiting = (page, extra = {}) =>
    seed(page, {
      welcomed: true,
      plan: plan({ "2026-09": ["CB2"], "2027-04": ["CM1"] }),
      "srs:CB2": { m01: { 0: due(), 1: due() } },
      "srs:CM1": { m02: { 3: due() } },
      ...extra,
    });

  test("are shown as awaiting results, and their reviews pause", async ({ page }) => {
    await seedAwaiting(page);
    await open(page, "", "#dueBanner");
    await expect(page.locator("#card-CB2 .status-ribbon")).toHaveText("Awaiting results");
    const banner = page.locator("#dueBanner");
    await expect(banner).toContainText("1 card due for review today");
    await expect(banner).toContainText("CM1 1");
    await expect(banner).not.toContainText("CB2");

    await page.goto("/#/review");
    await expect(page.locator("#reviewView .flashcard-label")).toContainText("1 of 1");
  });

  test("their subject page says why, and they can still be studied", async ({ page }) => {
    await seedAwaiting(page);
    await open(page, "CB2", ".paused-note");
    const note = page.locator(".paused-note");
    await expect(note).toContainText("Sat September 2026");
    await expect(note).toContainText("results due 8 Dec 2026");
    await expect(page.getByRole("link", { name: /Review \d+ due card/ })).toHaveCount(0);
    await expect(page.locator(".module-card .due-pill")).toHaveCount(0);
    // Asking for the subject's own review still works.
    await page.goto("/#/review/CB2");
    await expect(page.locator("#reviewView .flashcard-label")).toContainText("1 of 2");
  });

  test("the dashboard leaves them out of today's count", async ({ page }) => {
    await seedAwaiting(page);
    await open(page, "dashboard", "#examPlan");
    const cb2 = page.locator(".dash-subject", { hasText: "CB2" }).first();
    await expect(cb2).toContainText("0 due");
  });

  test("on results day the badge changes, and Not this time resumes reviews", async ({ page }) => {
    await seedAwaiting(page);
    await page.clock.setFixedTime(new Date("2026-12-09T09:00:00Z"));
    await open(page, "", "#resultsPrompt");
    await expect(page.locator("#card-CB2 .status-ribbon")).toHaveText("Results out");
    await page.locator('#resultsPrompt [data-resit="CB2"]').click();
    // CB2 now plans for April 2027: revising again.
    await expect(page.locator("#card-CB2 .status-ribbon")).toHaveCount(0);
    await expect(page.locator("#dueBanner")).toContainText("CB2 2");
  });

  test("a subject still to be sat keeps its reviews", async ({ page }) => {
    await seed(page, { welcomed: true, plan: plan({ "2027-04": ["CB2"] }), "srs:CB2": { m01: { 0: due({ due: "2027-04-01" }) } } });
    // 10 April 2027: the April sitting hasn't reached CB2's paper (16 April).
    await page.clock.setFixedTime(new Date("2027-04-10T09:00:00Z"));
    await open(page, "", "#dueBanner");
    await expect(page.locator("#dueBanner")).toContainText("CB2 1");
    await expect(page.locator("#card-CB2 .status-ribbon")).toHaveCount(0);
  });
});

test.describe("passed subjects", () => {
  test("drop out of daily reviews, with a note on their page", async ({ page }) => {
    await seed(page, {
      welcomed: true,
      result: { CB1: { status: "passed", sitting: null, updatedAt: 1 } },
      "srs:CB1": { m01: { 0: due() } },
      "srs:CM1": { m02: { 3: due() } },
    });
    await open(page, "", "#dueBanner");
    await expect(page.locator("#dueBanner")).toContainText("1 card due");
    await expect(page.locator("#dueBanner")).not.toContainText("CB1");
    await page.goto("/#/CB1");
    await expect(page.locator(".paused-note")).toContainText("Passed, so its cards no longer come up in your daily reviews");
  });

  test("Foundations are never paused", async ({ page }) => {
    await seed(page, { welcomed: true, "srs:FM": { m01: { 0: due() } } });
    await open(page, "", "#dueBanner");
    await expect(page.locator("#dueBanner")).toContainText("FM 1");
  });
});
