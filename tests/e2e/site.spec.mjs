import { test, expect, seed, open } from "./fixtures.mjs";

test.describe("header and navigation", () => {
  test.beforeEach(async ({ page }) => {
    await seed(page, { welcomed: true });
  });

  test("the header links reach every top-level page and mark the current one", async ({ page }) => {
    await open(page);
    const nav = (view) => page.locator(`.nav-link[data-view="${view}"]`);
    await nav("dashboard").click();
    await expect(page.locator("#dashboardView")).toBeVisible();
    await expect(nav("dashboard")).toHaveAttribute("aria-current", "page");
    await nav("search").click();
    await expect(page.locator("#searchView")).toBeVisible();
    await nav("exams").click();
    await expect(page.locator("#examHubView")).toBeVisible();
    await nav("home").click();
    await expect(page.locator("#homeView")).toBeVisible();
    await page.locator(".topbar-home").click();
    await expect(page).toHaveURL(/#\/$/);
  });

  test("browser back and forward move between views", async ({ page }) => {
    await open(page);
    await page.locator("#card-CB2").click();
    await page.locator('.module-card[data-module="m01"]').click();
    await expect(page.locator("#flashView")).toBeVisible();
    await page.goBack();
    await expect(page.locator("#subjectView")).toBeVisible();
    await page.goBack();
    await expect(page.locator("#homeView")).toBeVisible();
    await page.goForward();
    await expect(page.locator("#subjectView")).toBeVisible();
  });

  test("signed out, the site says progress is saved on this device only", async ({ page }) => {
    await open(page);
    await expect(page.locator("#syncStatus")).toHaveText(/Local only/);
  });
});

test.describe("theme", () => {
  test("toggles between light and dark, and remembers the choice", async ({ page }) => {
    await seed(page, { welcomed: true, theme: "light" });
    await open(page);
    const html = page.locator("html");
    await expect(html).toHaveAttribute("data-theme", "light");
    const bg = () => page.evaluate(() => getComputedStyle(document.body).backgroundColor);
    const light = await bg();
    await page.locator("#themeToggleBtn").click();
    await expect(html).toHaveAttribute("data-theme", "dark");
    expect(await bg()).not.toBe(light);
    await page.reload();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  });

  test("follows the system setting until one is chosen", async ({ page }) => {
    await page.emulateMedia({ colorScheme: "dark" });
    await seed(page, { welcomed: true });
    await open(page);
    const dark = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
    await page.emulateMedia({ colorScheme: "light" });
    const light = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
    expect(dark).not.toBe(light);
  });
});

test.describe("account panel", () => {
  test("opens, shows sign-in errors, and closes", async ({ page }) => {
    await seed(page, { welcomed: true });
    await open(page);
    await page.locator("#settingsBtn").click();
    const panel = page.locator("#settingsPanel");
    await expect(panel).toBeVisible();
    await expect(page.locator("#authSignedOut")).toBeVisible();
    await page.locator("#authEmail").fill("someone@example.com");
    await page.locator("#authPassword").fill("not-a-real-password");
    await page.locator("#signInBtn").click();
    await expect(page.locator("#authError")).toBeVisible();
    await expect(page.locator("#authError")).not.toBeEmpty();
    // Card shortcuts are off while the panel is open.
    await page.locator("#closeSettings").click();
    await expect(panel).toBeHidden();
  });
});

// Phone widths: every main view fits without scrolling sideways.
for (const width of [390, 320]) {
  test.describe(`at ${width}px wide`, () => {
    test.use({ viewport: { width, height: 800 } });

    test("no page scrolls sideways", async ({ page }) => {
      test.slow();
      await seed(page, {
        welcomed: true,
        plan: { sittings: { "2026-09": ["CB2"], "2027-04": ["CM1", "CS1"] }, specialists: { sp: [], sa: [] }, updatedAt: 1 },
      });
      const views = ["", "CS1", "CB2/m01", "FM/m12", "CB2/drill/m02", "CB2/questions", "CB2/mixed", "dashboard", "exams/CM1", "search", "welcome"];
      for (const v of views) {
        await open(page, v);
        await page.waitForTimeout(150);
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
        expect(overflow, `#/${v} overflows by ${overflow}px`).toBeLessThanOrEqual(0);
      }
    });
  });
}

test.describe("dark mode", () => {
  test("every main view renders", async ({ page }) => {
    await seed(page, { welcomed: true, theme: "dark" });
    for (const v of ["", "CS1", "FS/m09", "CB2/drill/m02", "dashboard", "exams/CM1"]) {
      await open(page, v);
      await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
      await expect(page.locator(".katex-error")).toHaveCount(0);
    }
  });
});
