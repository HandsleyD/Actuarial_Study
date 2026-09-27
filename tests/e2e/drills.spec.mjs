import { test, expect, seed, open, readStore } from "./fixtures.mjs";

// Drill runs are shuffled (question order and option order), so read the
// current item from the page to know which answer is right.
async function current(page) {
  return page.evaluate(() => {
    const it = drillState.items[drillState.idx];
    return { id: it.id, type: it.type, correct: it.correct, answer: it.answer, blanks: it.blanks, order: drillState.order };
  });
}

// Answer the current drill item, rightly or wrongly, and check it.
async function answer(page, right) {
  const it = await current(page);
  const pick = (display) => page.locator(`#drillView .drill-option[data-display="${display}"]`).click();
  if (it.type === "mcq") {
    const target = right ? it.correct : it.order.find((o) => o !== it.correct);
    await pick(it.order.indexOf(target));
  } else if (it.type === "multi") {
    const targets = right ? it.correct : [it.order.find((o) => !it.correct.includes(o))];
    for (const t of targets) await pick(it.order.indexOf(t));
  } else if (it.type === "cloze") {
    for (let n = 0; n < it.blanks.length; n++) {
      const b = it.blanks[n];
      const token = right || n > 0 ? b.answer : b.options.find((o) => o !== b.answer);
      await page.evaluate(
        ({ n, token }) =>
          [...document.querySelectorAll(`#drillView .drill-token[data-blank="${n}"]`)].find((t) => t.dataset.token === token).click(),
        { n, token }
      );
    }
  } else if (it.type === "hotspot") {
    const region = right
      ? it.answer
      : await page.evaluate((a) => [...document.querySelectorAll("#drillView [data-region]")].map((g) => g.dataset.region).find((r) => r !== a), it.answer);
    // Choose by keyboard (focus the region, press Enter): clicks go to the
    // region nearest the pointer, which for overlapping curves needn't be the
    // one whose shape was aimed at. Mouse picking has its own test below.
    await page.locator(`#drillView g[data-region="${region}"]`).focus();
    await page.keyboard.press("Enter");
  }
  await page.locator("#drillSubmit").click();
  return it;
}

test.describe("drills", () => {
  test.beforeEach(async ({ page }) => {
    await seed(page, { welcomed: true });
  });

  test("a module drill marks right and wrong answers and explains them", async ({ page }) => {
    await open(page, "CB2/drill/m02", "#drillSubmit");
    await expect(page.locator("#drillSubmit")).toBeDisabled();
    const first = await answer(page, true);
    await expect(page.locator(".drill-verdict")).toHaveText(/Correct/);
    await expect(page.locator(".explain-panel")).toBeVisible();
    await page.locator("#drillNext").click();
    const second = await answer(page, false);
    await expect(page.locator(".drill-verdict")).toHaveText(/Not quite/);
    if (second.type === "mcq" || second.type === "hotspot") await expect(page.locator(".drill-why")).toBeVisible();
    await expect(page.locator(".flash-progress")).toHaveText("1/2 correct");
    const saved = await readStore(page, "drill:CB2");
    expect(saved[first.id]).toMatchObject({ attempts: 1, correct: 1 });
    expect(saved[second.id]).toMatchObject({ attempts: 1, correct: 0 });
  });

  test("every question type can be answered correctly", async ({ page }) => {
    test.slow();
    // m02 has multiple choice, select-all, fill-the-gap and diagram questions.
    await open(page, "CB2/drill/m02", "#drillSubmit");
    const n = await page.evaluate(() => drillState.items.length);
    const seen = new Set();
    for (let i = 0; i < n; i++) {
      const it = await answer(page, true);
      seen.add(it.type);
      await expect(page.locator(".drill-verdict"), `${it.id} (${it.type})`).toHaveText(/Correct/);
      await page.locator("#drillNext").click();
    }
    expect([...seen].sort()).toEqual(["cloze", "hotspot", "mcq", "multi"]);
    await expect(page.locator("#drillView h2")).toHaveText("Drill complete");
    await expect(page.locator(".summary-stats")).toContainText(`${n} of`);
    await expect(page.locator(".summary-stats")).toContainText("100%");
    await page.locator("#drillAgain").click();
    await expect(page.locator("#drillSubmit")).toBeVisible();
  });

  test("clicking a diagram picks the region nearest the pointer", async ({ page }) => {
    await open(page, "CB2/drill/m02", "#drillSubmit");
    // Move to the diagram question in this run.
    while ((await current(page)).type !== "hotspot") {
      await answer(page, true);
      await page.locator("#drillNext").click();
    }
    const box = await page.locator("#drillView .dg-svg").boundingBox();
    await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
    await expect(page.locator("#drillView .dg-hot .hot.picked")).toHaveCount(1);
    await expect(page.locator("#drillSubmit")).toBeEnabled();
  });

  test("drills start from the subject page and from a module's flashcards", async ({ page }) => {
    await open(page, "CB2", "#startDrill");
    await expect(page.locator("#startDrill")).toContainText("none tried yet");
    await page.locator("#startDrill").click();
    await expect(page).toHaveURL(/#\/CB2\/drill$/);
    await expect(page.locator("#drillView h2")).toContainText("All of CB2");
    await page.goto("/#/CB2/m01");
    await page.locator("#flashView .drill-btn").click();
    await expect(page).toHaveURL(/#\/CB2\/drill\/m01$/);
  });

  test("Foundations drills work like any other subject's", async ({ page }) => {
    await open(page, "FS/drill/m06", "#drillSubmit");
    await expect(page.locator("#drillView h2")).toContainText("Discrete distributions");
    await answer(page, true);
    await expect(page.locator(".drill-verdict")).toHaveText(/Correct/);
    await expect(page.locator("#drillView .katex-error")).toHaveCount(0);
  });

  test("a subject with no drills says so", async ({ page }) => {
    await open(page, "CS2/drill", "#drillView .flash-empty");
    await expect(page.locator("#drillView")).toContainText("No drill questions");
  });
});
