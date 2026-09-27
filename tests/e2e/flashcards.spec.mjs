import { test, expect, seed, open, readStore, grade } from "./fixtures.mjs";

// CB2 module 1 has 15 cards; a session shows 10 of them.
const MODULE = "CB2/m01";

test.describe("flashcards", () => {
  test.beforeEach(async ({ page }) => {
    await seed(page, { welcomed: true });
  });

  test("reveal shows the answer and explanation, typed answer included", async ({ page }) => {
    await open(page, MODULE, "#revealBtn");
    await expect(page.locator(".flashcard-answer")).toHaveCount(0);
    await page.locator("#answerInput").fill("the next best alternative");
    await page.locator("#revealBtn").click();
    await expect(page.locator(".flashcard-answer")).toBeVisible();
    await expect(page.locator(".explain-panel")).toBeVisible();
    await expect(page.locator("#flashView")).toContainText("the next best alternative");
    await expect(page.locator("#scoreGood")).toBeVisible();
    await expect(page.locator("#scoreBad")).toBeVisible();
  });

  test("Sufficient masters a card and schedules it; Insufficient doesn't", async ({ page }) => {
    await open(page, MODULE, "#revealBtn");
    await expect(page.locator(".flash-progress")).toHaveText("0/15 mastered");
    await grade(page, true);
    await expect(page.locator(".flash-progress")).toHaveText("1/15 mastered");
    await grade(page, false);
    await expect(page.locator(".flash-progress")).toHaveText("1/15 mastered");

    const mastery = await readStore(page, "mastery:CB2");
    expect(Object.values(mastery.m01).filter(Boolean)).toHaveLength(1);
    const srs = await readStore(page, "srs:CB2");
    const schedules = Object.values(srs.m01);
    expect(schedules).toHaveLength(2);
    expect(schedules.every((s) => s.last === "2026-09-27")).toBe(true);
    // The missed card is due again today; the known one later.
    expect(schedules.map((s) => s.due).sort()).toEqual(["2026-09-27", "2026-09-28"]);
  });

  test("keyboard: Space reveals, 2 = Sufficient, 1 = Insufficient, arrows move", async ({ page }) => {
    await open(page, MODULE, "#revealBtn");
    const label = page.locator(".flashcard-label");
    await expect(label).toContainText("Card 1 of 10");
    await page.keyboard.press("ArrowRight");
    await expect(label).toContainText("Card 2 of 10");
    await page.keyboard.press("ArrowLeft");
    await expect(label).toContainText("Card 1 of 10");
    await page.keyboard.press(" ");
    await expect(page.locator(".flashcard-answer")).toBeVisible();
    await page.keyboard.press("2");
    await expect(page.locator(".flash-progress")).toHaveText("1/15 mastered");
    await expect(label).toContainText("Card 2 of 10");
    await page.keyboard.press(" ");
    await page.keyboard.press("1");
    await expect(label).toContainText("Card 3 of 10");
  });

  test("full deck shows every card; the dots jump between them", async ({ page }) => {
    await open(page, MODULE, "#revealBtn");
    await expect(page.locator(".card-dot")).toHaveCount(10);
    await page.locator("#tabFull").click();
    await expect(page.locator(".card-dot")).toHaveCount(15);
    await page.locator('.card-dot[data-idx="14"]').click();
    await expect(page.locator(".flashcard-label")).toContainText("Card 15 of 15");
    await expect(page.locator("#nextCard")).toBeDisabled();
  });

  test("scoring a whole session ends with a summary", async ({ page }) => {
    await open(page, MODULE, "#revealBtn");
    for (let i = 0; i < 10; i++) await grade(page, i % 2 === 0);
    await expect(page.locator("#flashView h2")).toHaveText("Session complete!");
    await expect(page.locator("#flashView")).toContainText("5/15 mastered in this module");
    await page.locator("#summaryNewSession").click();
    await expect(page.locator(".flashcard-label")).toContainText("Card 1 of 10");
  });

  test("mastery shows on the subject page and in the home stats", async ({ page }) => {
    await open(page, MODULE, "#revealBtn");
    await grade(page, true);
    await page.locator("#backToSubject").click();
    await expect(page.locator('.module-card[data-module="m01"] .mastery-label')).toContainText("1/15");
    await page.goto("/#/");
    await expect(page.locator("#starTotal")).toHaveText("1");
  });

  test("a mixed session draws 10 cards from across the subject", async ({ page }) => {
    await open(page, "CB2", "#startMixed");
    await page.locator("#startMixed").click();
    await expect(page).toHaveURL(/#\/CB2\/mixed$/);
    await expect(page.locator("#mixedView .card-dot")).toHaveCount(10);
    await grade(page, true);
    await expect(page.locator("#mixedView .card-dot.mastered")).toHaveCount(1);
  });
});

test.describe("spaced repetition", () => {
  const schedule = (over) => ({ reps: 1, interval: 1, ease: 2.5, due: "2026-09-25", lapses: 0, reviews: 1, last: "2026-09-24", ...over });

  test("due cards show on the home banner and can be reviewed", async ({ page }) => {
    await seed(page, {
      welcomed: true,
      "srs:CB2": { m01: { 0: schedule(), 1: schedule({ due: "2026-10-05" }) } },
      "srs:CM1": { m02: { 3: schedule({ due: "2026-09-27" }) } },
    });
    await open(page, "", "#dueBanner");
    const banner = page.locator("#dueBanner");
    await expect(banner).toContainText("2 cards due for review today");
    await expect(banner).toContainText("CB2 1");
    await expect(banner).toContainText("CM1 1");
    await banner.getByRole("link", { name: "Review due cards" }).click();
    await expect(page).toHaveURL(/#\/review$/);
    for (let i = 0; i < 2; i++) await grade(page, true);
    await expect(page.locator("#reviewView h2")).toHaveText("Session complete!");
    await page.goto("/#/");
    await expect(page.locator("#dueBanner")).toContainText("Nothing due today");
  });

  test("the weak-cards drill picks out cards that keep being missed", async ({ page }) => {
    await seed(page, {
      welcomed: true,
      "srs:CB2": { m01: { 0: schedule({ lapses: 2, due: "2026-10-10" }), 1: schedule({ due: "2026-10-10" }) } },
    });
    await open(page, "CB2", "#subjectView");
    const weak = page.getByRole("link", { name: /Practise 1 weak card/ });
    await expect(weak).toBeVisible();
    await weak.click();
    await expect(page).toHaveURL(/#\/weak\/CB2$/);
    await expect(page.locator("#reviewView .flashcard-label")).toContainText("1 of 1");
  });
});

test.describe("Foundations lessons", () => {
  test("a module's lesson opens on its first card and folds away after", async ({ page }) => {
    await seed(page, { welcomed: true });
    await open(page, "FM/m12", "#lessonPanel");
    const lesson = page.locator("#lessonPanel");
    await expect(lesson).toHaveAttribute("open", "");
    await expect(lesson).toContainText("The gamma function");
    await expect(page.locator("#lessonPanel .katex").first()).toBeVisible();
    await page.locator("#nextCard").click();
    await expect(lesson).not.toHaveAttribute("open", "");
    // Once opened by the user, it stays open from card to card.
    await lesson.locator("summary").click();
    await page.locator("#nextCard").click();
    await expect(lesson).toHaveAttribute("open", "");
  });

  test("every Foundations module renders its maths without KaTeX errors", async ({ page }) => {
    test.slow();
    await seed(page, { welcomed: true });
    for (const code of ["FM", "FS"]) {
      for (let i = 1; i <= 16; i++) {
        const id = `m${String(i).padStart(2, "0")}`;
        await open(page, `${code}/${id}`, "#lessonPanel .katex");
        await page.locator("#revealBtn").click();
        await expect(page.locator(".katex-error"), `${code} ${id}`).toHaveCount(0);
      }
    }
  });
});
