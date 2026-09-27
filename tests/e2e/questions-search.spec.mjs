import { test, expect, seed, open, NOW } from "./fixtures.mjs";

test.describe("practice exam questions", () => {
  test.beforeEach(async ({ page }) => {
    await seed(page, { welcomed: true });
  });

  test("model answers reveal, and questions can be stepped through", async ({ page }) => {
    await open(page, "CB2", "#startQbank");
    await expect(page.locator("#startQbank")).toContainText("10 original questions");
    await page.locator("#startQbank").click();
    await expect(page).toHaveURL(/#\/CB2\/questions$/);
    const view = page.locator("#questionsView");
    await expect(view).toContainText("Elasticity and pricing at a coffee chain");
    await expect(view.locator(".question-part")).toHaveCount(4);
    await expect(view.locator(".part-answer")).toHaveCount(0);
    await page.locator("#revealQBtn").click();
    await expect(view.locator(".part-answer")).toHaveCount(4);
    await page.locator("#nextQ").click();
    await expect(view.locator(".part-answer")).toHaveCount(0);
    await expect(view.locator(".card-dot.active")).toHaveText("2");
    await page.keyboard.press("ArrowLeft");
    await expect(view.locator(".card-dot.active")).toHaveText("1");
    await page.keyboard.press(" ");
    await expect(view.locator(".part-answer")).toHaveCount(4);
  });

  test("timed mode gives each question a countdown from its marks", async ({ page }) => {
    await open(page, "CB2/questions", "#timedToggle");
    await expect(page.locator("#timerReadout")).toHaveCount(0);
    await page.locator("#timedToggle").check();
    await expect(page.locator("#timerReadout")).toBeVisible();
    await expect(page.locator("#timedRate")).toBeVisible();
    await expect(page.locator(".timer-note")).toContainText("marks ×");
    const start = await page.locator("#timerReadout").textContent();
    await page.locator("#timerBtn").click();
    await expect(page.locator("#timerBtn")).toHaveText("Pause");
    // Time is frozen in tests: move it on a minute and a half.
    await page.clock.setFixedTime(new Date(NOW.getTime() + 90_000));
    await page.locator("#timerBtn").click();
    await expect(page.locator("#timerBtn")).toHaveText("Resume");
    const [m0, s0] = start.split(":").map(Number);
    const [m1, s1] = (await page.locator("#timerReadout").textContent()).split(":").map(Number);
    expect(m0 * 60 + s0 - (m1 * 60 + s1)).toBe(90);
  });
});

test.describe("search", () => {
  test.beforeEach(async ({ page }) => {
    await seed(page, { welcomed: true });
  });

  test("the / key opens search, and results link to the card", async ({ page }) => {
    await open(page);
    await page.keyboard.press("/");
    await expect(page).toHaveURL(/#\/search/);
    await expect(page.locator("#searchInput")).toBeFocused();
    await page.locator("#searchInput").fill("opportunity cost");
    // Cards link to #/<code>/<module>; practice questions to #/<code>/questions.
    const cards = page.locator('#searchResults a[href^="#/CB2/m"]');
    await expect(cards.first()).toBeVisible();
    await expect(page.locator('#searchResults a[href^="#/CB2/questions"]').first()).toBeVisible();
    await cards.first().click();
    await expect(page).toHaveURL(/#\/CB2\/m\d+/);
    await expect(page.locator(".flashcard-question")).toContainText(/opportunity cost/i);
  });

  test("results can be limited to one subject, Foundations included", async ({ page }) => {
    await open(page, "search", "#searchInput");
    await page.locator("#searchInput").fill("gamma function");
    await expect(page.locator("#searchResults a").first()).toBeVisible();
    await page.locator("#searchExam").selectOption("FM");
    await expect(page.locator("#searchResults a").first()).toBeVisible();
    const hrefs = await page.locator("#searchResults a").evaluateAll((as) => as.map((a) => a.getAttribute("href")));
    expect(hrefs.every((h) => h.startsWith("#/FM/"))).toBe(true);
  });

  test("a search with no matches says so", async ({ page }) => {
    await open(page, "search", "#searchInput");
    await page.locator("#searchInput").fill("zzqxv");
    await expect(page.locator("#searchResults")).toContainText(/No /);
  });
});
