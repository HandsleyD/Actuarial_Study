import { test, expect, seed, open, readStore } from "./fixtures.mjs";

test.describe("subject pages", () => {
  test.beforeEach(async ({ page }) => {
    await seed(page, { welcomed: true });
  });

  test("list every module with its description and card count", async ({ page }) => {
    await open(page, "CS1", ".module-card");
    await expect(page.locator("#subjectView .subject-code")).toHaveText("CS1");
    await expect(page.locator(".module-card")).toHaveCount(16);
    await expect(page.locator('.module-card[data-module="m01"] .module-card-desc')).not.toBeEmpty();
    await page.locator(".module-card.clickable").first().click();
    await expect(page).toHaveURL(/#\/CS1\/m01$/);
  });

  test("a module's status cycles Not started → In progress → Done, and is kept", async ({ page }) => {
    await open(page, "CS1", ".module-card");
    const badge = page.locator('.status-badge[data-module="m01"]');
    await expect(badge).toHaveText("Not started");
    await badge.click();
    await expect(badge).toHaveText("In progress");
    await badge.click();
    await expect(badge).toHaveText("Done");
    await page.reload();
    await expect(page.locator('.status-badge[data-module="m01"]')).toHaveText("Done");
    expect(await readStore(page, "status:CS1")).toMatchObject({ m01: "Done" });
    await page.goto("/#/");
    await expect(page.locator("#card-CS1 .exam-pct")).toHaveText("6% (16 modules)");
  });

  test("mark all done and reset, after confirming", async ({ page }) => {
    await open(page, "CB3", ".module-card");
    page.on("dialog", (d) => d.accept());
    await page.locator("#markAllDone").click();
    await expect(page.locator(".status-badge").first()).toHaveText("Done");
    await page.goto("/#/");
    await expect(page.locator("#card-CB3 .status-ribbon")).toHaveText("All modules done");
    await page.goto("/#/CB3");
    await page.locator("#markAllReset").click();
    await expect(page.locator(".status-badge").first()).toHaveText("Not started");
  });

  test("recording an exam result updates the home page and the rank", async ({ page }) => {
    await open(page, "CB1", ".result-btn");
    const btn = (r) => page.locator(`.result-btn[data-result="${r}"]`);
    await expect(btn("none")).toHaveAttribute("aria-pressed", "true");
    await btn("passed").click();
    await expect(btn("passed")).toHaveAttribute("aria-pressed", "true");
    expect((await readStore(page, "result")).CB1.status).toBe("passed");
    await page.goto("/#/");
    await expect(page.locator("#card-CB1 .status-ribbon")).toHaveText("Passed ✓");
    await expect(page.locator("#rankSub")).toHaveText("9 more subjects to Associate");
    await page.goto("/#/CB1");
    await page.locator('.result-btn[data-result="none"]').click();
    await page.goto("/#/");
    await expect(page.locator("#card-CB1 .status-ribbon")).toHaveCount(0);
  });

  test("links to the Exam Hub, with the next paper date", async ({ page }) => {
    await open(page, "CM1", ".hub-link");
    await expect(page.locator(".hub-link")).toContainText("next CM1 paper 12 Apr 2027");
    await page.locator(".hub-link").click();
    await expect(page).toHaveURL(/#\/exams\/CM1$/);
  });

  test("exam subjects link to the Foundations modules they build on", async ({ page }) => {
    await open(page, "CS1", "#prereqPanel");
    const panel = page.locator("#prereqPanel");
    await expect(panel).not.toHaveAttribute("open", "");
    await panel.locator("summary").click();
    await expect(panel.locator(".prereq-link")).toHaveCount(12);
    await panel.getByRole("link", { name: /FM M12/ }).click();
    await expect(page).toHaveURL(/#\/FM\/m12$/);
    // Subjects with no maths prerequisites have no panel.
    await page.goto("/#/CB2");
    await expect(page.locator("#subjectView h2")).toHaveText("Business Economics");
    await expect(page.locator("#prereqPanel")).toHaveCount(0);
  });

  test("Foundations pages have no exam result, Exam Hub link or dates", async ({ page }) => {
    await open(page, "FM", ".module-card");
    await expect(page.locator("#subjectView h2")).toHaveText("Foundation Mathematics");
    await expect(page.locator(".foundation-note")).toContainText("Not an IFoA exam");
    await expect(page.locator(".result-row")).toHaveCount(0);
    await expect(page.locator(".hub-link")).toHaveCount(0);
    await expect(page.locator(".module-card")).toHaveCount(16);
    await expect(page.locator("#startDrill")).toContainText("48 questions");
  });

  test("the back link returns home", async ({ page }) => {
    await open(page, "CS2", "#backToHome");
    await page.locator("#backToHome").click();
    await expect(page).toHaveURL(/#\/$/);
    await expect(page.locator("#homeView")).toBeVisible();
  });
});
