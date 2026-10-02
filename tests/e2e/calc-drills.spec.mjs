import { test, expect, seed, open, readStore } from "./fixtures.mjs";

// Calc drills draw fresh numbers per attempt, so ask the page for the answer
// to the numbers on screen, formatted the way a person would type it.
async function current(page) {
  return page.evaluate(() => {
    const it = drillState.items[drillState.idx];
    const ans = it.answer(drillState.params);
    return {
      id: it.id,
      type: it.type,
      unit: it.unit,
      typed: CALC.answerText(it, ans).replace(/&minus;/g, "-"),
      wrong: String(ans * 1.2 + 1),
    };
  });
}

test.describe("calc drills", () => {
  test.beforeEach(async ({ page }) => {
    await seed(page, { welcomed: true });
  });

  test("a typed answer is marked, and the worked solution follows", async ({ page }) => {
    await open(page, "CM1/drill/m08", "#calcInput");
    await expect(page.locator(".drill-type")).toHaveText("Calculate");
    await expect(page.locator("#drillSubmit")).toBeDisabled();

    const first = await current(page);
    expect(first.unit).toBe("£");
    expect(first.typed).toMatch(/^£[\d,]+\.\d\d$/); // e.g. £12,345.67: £ and commas are accepted
    await page.locator("#calcInput").fill(first.typed);
    await page.locator("#drillSubmit").click();
    await expect(page.locator(".drill-verdict")).toHaveText(/Correct/);
    await expect(page.locator(".calc-compare")).toContainText("the answer is");
    await expect(page.locator(".explain-panel summary")).toHaveText("Worked solution");
    await expect(page.locator(".explain-panel .katex").first()).toBeVisible();
    await expect(page.locator("#drillView .katex-error")).toHaveCount(0);
    await expect(page.locator("#calcInput")).toBeDisabled();

    await page.locator("#drillNext").click();
    const second = await current(page);
    await page.locator("#calcInput").fill(second.wrong);
    await page.keyboard.press("Enter"); // Enter submits
    await expect(page.locator(".drill-verdict")).toHaveText(/Not quite/);
    await expect(page.locator(".calc-compare")).toContainText(second.typed);
    await expect(page.locator(".flash-progress")).toHaveText("1/2 correct");

    const saved = await readStore(page, "drill:CM1");
    expect(saved[first.id]).toMatchObject({ attempts: 1, correct: 1 });
    expect(saved[second.id]).toMatchObject({ attempts: 1, correct: 0 });
  });

  test("an unreadable number can't be submitted", async ({ page }) => {
    await open(page, "CM1/drill/m02", "#calcInput");
    await page.locator("#calcInput").fill("4,5");
    await expect(page.locator("#calcHint")).toBeVisible();
    await expect(page.locator("#drillSubmit")).toBeDisabled();
    await page.locator("#calcInput").fill("4.5%");
    await expect(page.locator("#calcHint")).toBeHidden();
    await expect(page.locator("#drillSubmit")).toBeEnabled();
  });

  test("each attempt at an item draws new numbers", async ({ page }) => {
    await open(page, "CM1/drill/m05", "#calcInput");
    const draws = await page.evaluate(() => {
      const seen = new Set();
      for (let k = 0; k < 5; k++) {
        prepareDrillItem();
        seen.add(JSON.stringify(drillState.params));
      }
      return seen.size;
    });
    expect(draws).toBeGreaterThan(1);
  });

  test("a whole module run can be answered correctly", async ({ page }) => {
    await open(page, "CM1/drill/m13", "#calcInput");
    const n = await page.evaluate(() => drillState.items.length);
    for (let i = 0; i < n; i++) {
      const it = await current(page);
      await page.locator("#calcInput").fill(it.typed);
      await page.locator("#drillSubmit").click();
      await expect(page.locator(".drill-verdict"), it.id).toHaveText(/Correct/);
      await page.locator("#drillNext").click();
    }
    await expect(page.locator("#drillView h2")).toHaveText("Drill complete");
    await expect(page.locator(".summary-stats")).toContainText("100%");
  });

  test("CM1 offers its drills from the subject page", async ({ page }) => {
    await open(page, "CM1", "#startDrill");
    await expect(page.locator("#startDrill")).toContainText("none tried yet");
  });
});
