import { test, expect, seed, open } from "./fixtures.mjs";

// Each subject's cards, questions and drills are in docs/content/<CODE>.js and
// load only when a page needs them; the home page runs off docs/catalog.js.

function contentRequests(page) {
  const fetched = [];
  page.on("request", (r) => {
    const m = r.url().match(/\/content\/([A-Z0-9]+)\.js\?v=[0-9a-f]+$/);
    if (m) fetched.push(m[1]);
  });
  return fetched;
}

test.describe("content loading", () => {
  test("the home page needs no subject's cards; a module fetches only its own", async ({ page }) => {
    await seed(page, { welcomed: true });
    const fetched = contentRequests(page);
    await open(page, "", "#dueBanner");
    await expect(page.locator(".exam-card")).toHaveCount(25);
    expect(fetched).toEqual([]);
    await page.goto("/#/CM1/m01");
    await expect(page.locator("#flashView .flashcard-question")).toBeVisible();
    expect(fetched).toEqual(["CM1"]);
  });

  test("module titles and card counts show before the cards arrive", async ({ page }) => {
    await seed(page, { welcomed: true });
    let release;
    const gate = new Promise((r) => (release = r));
    await page.route("**/content/SP4.js*", async (route) => {
      await gate;
      await route.continue();
    });
    await open(page, "SP4", ".module-card");
    await expect(page.locator('.module-card[data-module="m01"] .mastery-label')).toContainText("0/15");
    await page.locator('.module-card[data-module="m01"]').click();
    await expect(page.locator("#flashView .content-loading")).toContainText("Loading SP4");
    release();
    await expect(page.locator("#flashView .flashcard-question")).toBeVisible();
    await expect(page.locator("#flashView .content-loading")).toHaveCount(0);
  });

  test("a subject that fails to load says so and can be retried", async ({ page }) => {
    await seed(page, { welcomed: true });
    let fail = true;
    await page.route("**/content/SP8.js*", (route) => (fail ? route.abort() : route.continue()));
    await open(page, "SP8/m02", "#flashView .content-error");
    await expect(page.locator("#flashView .content-error")).toContainText("Couldn’t load SP8");
    fail = false;
    await page.locator("#contentRetry").click();
    await expect(page.locator("#flashView .flashcard-question")).toBeVisible();
  });

  test("the dashboard fetches only the subjects its most-missed cards come from", async ({ page }) => {
    const schedule = (over) => ({ reps: 1, interval: 1, ease: 2.5, due: "2026-10-10", lapses: 2, reviews: 3, last: "2026-09-24", ...over });
    await seed(page, { welcomed: true, "srs:SP9": { m02: { 0: schedule() } } });
    const fetched = contentRequests(page);
    await open(page, "dashboard", ".trouble-list li");
    await expect(page.locator(".trouble-list li")).toContainText("SP9 M02");
    expect(fetched).toEqual(["SP9"]);
  });
});
