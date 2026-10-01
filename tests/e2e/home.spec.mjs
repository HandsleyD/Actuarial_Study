import { test, expect, seed, open, grade } from "./fixtures.mjs";

test.describe("home page", () => {
  test("groups every subject by stage, Foundations first", async ({ page }) => {
    await seed(page, { welcomed: true });
    await open(page);
    await expect(page.locator(".exam-group-title")).toHaveText([
      "Foundations: start here",
      "Core Principles",
      "Core Practice",
      "Specialist Principles",
      "Specialist Advanced",
    ]);
    const cards = (sel) => page.locator(`${sel} .exam-card .exam-code`);
    await expect(cards('.exam-group[data-stage="foundations"]')).toHaveText(["FM", "FS"]);
    await expect(cards('.exam-group[data-stage="principles"]')).toHaveText(["CB1", "CB2", "CB3", "CM1", "CM2", "CS1", "CS2"]);
    await expect(cards('.exam-group[data-stage="practice"]')).toHaveText(["CP1", "CP2", "CP3"]);
    await expect(cards('.exam-group[data-stage="sp"]')).toHaveCount(8);
    await expect(cards('.exam-group[data-stage="sa"]')).toHaveCount(5);
    // Module counts come from each subject's progress.md.
    await expect(page.locator("#card-FM .exam-pct")).toHaveText("0% (16 modules)");
  });

  test("a subject card opens its page", async ({ page }) => {
    await seed(page, { welcomed: true });
    await open(page);
    await page.locator("#card-CS1").click();
    await expect(page).toHaveURL(/#\/CS1$/);
    await expect(page.locator("#subjectView h2")).toHaveText("Actuarial Statistics");
  });

  test("results and revision show on the cards and in the stats", async ({ page }) => {
    await seed(page, {
      welcomed: true,
      result: { CB1: { status: "passed", sitting: null, updatedAt: 1 }, CB3: { status: "exempt", sitting: null, updatedAt: 1 } },
      "status:CS1": { m01: "In progress" },
    });
    await open(page);
    await expect(page.locator("#card-CB1 .status-ribbon")).toHaveText("Passed ✓");
    await expect(page.locator("#card-CB3 .status-ribbon")).toHaveText("Exempt ✓");
    await expect(page.locator("#card-CS1 .status-ribbon")).toHaveText("Currently studying");
    await expect(page.locator("#card-CB2 .status-ribbon")).toHaveCount(0);
    await expect(page.locator("#rankLabel")).toHaveText("Aspiring Actuary");
    await expect(page.locator("#rankSub")).toHaveText("8 more subjects to Associate");
    await expect(page.locator('.exam-group[data-stage="principles"] .exam-group-summary')).toContainText("2 of 7 passed");
  });

  test("a first visit shows the welcome banner, which can be dismissed for good", async ({ page }) => {
    await open(page);
    const banner = page.locator("#welcomeBanner");
    await expect(banner).toBeVisible();
    await expect(banner).toContainText("Two quick questions");
    await page.locator("#welcomeDismiss").click();
    await expect(banner).toBeHidden();
    await page.reload();
    await page.locator(".exam-card").first().waitFor();
    await expect(banner).toBeHidden();
  });

  test("opening the site doesn't extend the streak; studying does", async ({ page }) => {
    await seed(page, { welcomed: true, streak: { lastDate: "2026-09-26", count: 3 } });
    await open(page);
    await expect(page.locator("#streakValue")).toHaveText("3");
    await open(page, "CS1/m01", "#revealBtn");
    await grade(page, true);
    await open(page);
    await expect(page.locator("#streakValue")).toHaveText("4");
    const dashStreak = '.game-stat[title^="Consecutive days"] .game-stat-value';
    await open(page, "dashboard", dashStreak);
    await expect(page.locator(dashStreak)).toHaveText("4");
  });

  test("a streak with a missed day shows as broken", async ({ page }) => {
    await seed(page, { welcomed: true, streak: { lastDate: "2026-09-24", count: 5 } });
    await open(page);
    await expect(page.locator("#streakValue")).toHaveText("0");
  });
});
