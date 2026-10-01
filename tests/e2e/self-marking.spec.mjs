import { test, expect, seed, open, readStore, NOW } from "./fixtures.mjs";

// The latest CB2 pass mark comes from exam-stats.js, which a scheduled job
// regenerates, so read it from the page rather than hard-coding it.
async function passMark(page) {
  return page.evaluate(() => {
    const p = Mock.latestPassMark(PASS_STATS.CB2);
    return { mark: p.mark, label: sittingLabel(p.sitting) };
  });
}

test.describe("self-marking practice questions", () => {
  test.beforeEach(async ({ page }) => {
    await seed(page, { welcomed: true });
  });

  test("marks are given per part, saved with their history, and averaged on the subject page and dashboard", async ({ page }) => {
    await open(page, "CB2/questions", "#revealQBtn");
    const view = page.locator("#questionsView");
    await expect(view.locator(".mark-input")).toHaveCount(0);
    await page.locator("#revealQBtn").click();
    const inputs = view.locator(".mark-input");
    await expect(inputs).toHaveCount(4);

    // Nothing entered: the first part is flagged.
    await page.locator("#saveMarksBtn").click();
    await expect(page.locator("#markError")).toContainText("Give a mark from 0 to 2 for part (i)");
    await expect(inputs.first()).toBeFocused();
    // Out of range is refused too.
    await inputs.nth(0).fill("2");
    await inputs.nth(1).fill("2.5");
    await inputs.nth(2).fill("1");
    await inputs.nth(3).fill("9");
    await page.locator("#saveMarksBtn").click();
    await expect(page.locator("#markError")).toContainText("from 0 to 4");
    await inputs.nth(3).fill("3");
    await expect(page.locator("#markTotal")).toHaveText("8.5/12");
    await inputs.nth(3).press("Enter");
    await expect(page.locator("#markTotal")).toContainText("Saved — 8.5/12 (71%)");
    await expect(page.locator("#saveMarksBtn")).toHaveText("Update marks");

    // Changing a mark before moving on updates the same attempt.
    await inputs.nth(3).fill("4");
    await page.locator("#saveMarksBtn").click();
    await expect(page.locator("#markTotal")).toContainText("Saved — 9.5/12 (79%)");
    let scores = await readStore(page, "score:CB2");
    expect(scores["cb2-q1"]).toHaveLength(1);
    expect(scores["cb2-q1"][0]).toMatchObject({ parts: [2, 2.5, 1, 4], score: 9.5, max: 12, src: "practice" });

    // Coming back to the question later starts a new attempt, and shows the old one.
    await page.locator("#nextQ").click();
    await page.locator("#prevQ").click();
    await page.locator("#revealQBtn").click();
    await expect(view.locator(".mark-chip")).toHaveCount(1);
    await expect(view.locator(".mark-chip")).toContainText("9.5/12");
    await expect(page.locator("#saveMarksBtn")).toHaveText("Save marks");
    for (let i = 0; i < 4; i++) await inputs.nth(i).fill("1");
    await page.locator("#saveMarksBtn").click();
    await expect(view.locator(".mark-chip")).toHaveCount(2);
    scores = await readStore(page, "score:CB2");
    expect(scores["cb2-q1"].map((a) => a.score)).toEqual([9.5, 4]);

    // The average uses the latest attempt: 4/12 = 33%.
    const pass = await passMark(page);
    await page.locator("#backToSubjectQ").click();
    await expect(page.locator("#scoreSummary")).toContainText("Self-marked 1 of 10 questions: average 33%");
    await expect(page.locator("#scoreSummary")).toContainText(`${pass.mark - 33} points below the ${pass.label} pass mark of ${pass.mark}%`);

    await open(page, "dashboard", "#questionScores");
    const row = page.locator('#questionScores .score-row[data-code="CB2"]');
    await expect(row).toContainText("1/10 marked");
    await expect(row).toContainText(`pass mark ${pass.mark}% (${pass.label})`);
    await expect(row.locator(".dash-row-pct")).toHaveText("33%");
    await expect(row.locator(".pass-tick")).toHaveAttribute("style", `left:${pass.mark}%`);
  });

  test("the dashboard leaves the section out until something is marked", async ({ page }) => {
    await open(page, "dashboard", ".dash-section");
    await expect(page.locator("#questionScores")).toHaveCount(0);
  });
});

test.describe("mock papers", () => {
  test.beforeEach(async ({ page }) => {
    await seed(page, { welcomed: true });
    page.on("dialog", (d) => d.accept());
  });

  test("a paper near 100 marks, a 3h15m clock, answers hidden until submitted, then marked against the pass mark", async ({ page }) => {
    await open(page, "CB2", "#startMock");
    await expect(page.locator("#startMock")).toContainText("3h15m");
    await page.locator("#startMock").click();
    await expect(page).toHaveURL(/#\/CB2\/mock$/);
    await page.locator("#startMockBtn").click();

    const view = page.locator("#mockView");
    // CB2's bank: 12, 14, 12, 12, 12, 12, 12, 12, 13, 12 — the closest any
    // set of them gets to 100 is 99 (six twelves, the 14 and the 13).
    await expect(view.locator(".mock-question")).toHaveCount(8);
    await expect(view.locator(".flash-progress")).toHaveText("8 questions · 99 marks");
    await expect(page.locator("#mockClock")).toHaveText("3:15:00");
    await expect(view.locator(".part-answer")).toHaveCount(0);
    await expect(view.locator(".mark-input")).toHaveCount(0);

    // The clock runs off the wall clock, so it survives leaving and reloading.
    await page.clock.setFixedTime(new Date(NOW.getTime() + 60 * 60 * 1000));
    await expect(page.locator("#mockClock")).toHaveText("2:15:00");
    await page.reload();
    await page.locator("#mockClock").waitFor();
    await expect(page.locator("#mockClock")).toHaveText("2:15:00");
    await open(page, "CB2", "#startMock");
    await expect(page.locator("#startMock")).toContainText("in progress");
    await page.locator("#startMock").click();
    await expect(page.locator("#mockClock")).toHaveText("2:15:00");

    await page.locator("#submitMockBtn").click();
    await expect(view.locator(".qbank-note")).toContainText("Submitted after 1:00:00");
    const inputs = view.locator(".mark-input");
    await expect(view.locator(".part-answer")).toHaveCount(await inputs.count());

    // Every part needs a mark before the paper can be finished.
    await page.locator("#finishMockBtn").click();
    await expect(page.locator("#mockError")).toContainText("Question 1:");
    const n = await inputs.count();
    for (let i = 0; i < n; i++) {
      const input = inputs.nth(i);
      await input.fill((await input.getAttribute("max")) || "0");
    }
    await expect(page.locator("#mockTotal")).toHaveText("99 / 99 marks");

    // Marks typed so far are kept if the page is reloaded mid-marking.
    await page.reload();
    await page.locator("#mockTotal").waitFor();
    await expect(page.locator("#mockTotal")).toHaveText("99 / 99 marks");

    const pass = await passMark(page);
    await page.locator("#finishMockBtn").click();
    await expect(page.locator("#mockResult")).toContainText("100%");
    await expect(page.locator("#mockResult")).toContainText("Above the pass mark");
    await expect(page.locator("#mockResult")).toContainText(`${100 - pass.mark} points above the ${pass.label} pass mark of ${pass.mark}%`);
    await expect(view.locator(".mock-row")).toHaveCount(1);

    const mocks = await readStore(page, "mock:CB2");
    expect(mocks).toHaveLength(1);
    expect(mocks[0]).toMatchObject({ score: 99, max: 99, pct: 100, passMark: pass.mark, usedMs: 60 * 60 * 1000 });
    expect(mocks[0].questionIds).toHaveLength(8);
    expect(await readStore(page, "mockActive:CB2")).toBeNull();
    // Each question's marks count as an attempt towards the subject average.
    const scores = await readStore(page, "score:CB2");
    expect(Object.keys(scores)).toHaveLength(8);
    expect(Object.values(scores).every((list) => list.length === 1 && list[0].src === "mock")).toBe(true);

    await page.locator("#backFromMock").click();
    await expect(page.locator("#scoreSummary")).toContainText("Self-marked 8 of 10 questions: average 100%");
    await expect(page.locator("#startMock")).toContainText("last mock 100%");
  });

  test("a mock can be abandoned without saving anything", async ({ page }) => {
    await open(page, "CB2/mock", "#startMockBtn");
    await page.locator("#startMockBtn").click();
    await page.locator("#abandonMockBtn").click();
    await expect(page.locator("#startMockBtn")).toBeVisible();
    expect(await readStore(page, "mockActive:CB2")).toBeNull();
    expect(await readStore(page, "mock:CB2")).toBeNull();
  });
});

// Seeded separately: seed() only applies once per tab.
test.describe("a mock paper left running", () => {
  test("when the clock runs out the paper is submitted for marking", async ({ page }) => {
    const started = NOW.getTime() - 4 * 60 * 60 * 1000;
    await seed(page, {
      welcomed: true,
      "mockActive:CB2": {
        startedAt: started,
        endsAt: started + (3 * 60 + 15) * 60 * 1000,
        questionIds: ["cb2-q1", "cb2-q2"],
        marks: 26,
        submittedAt: null,
        partMarks: {},
      },
    });
    await open(page, "CB2/mock", "#mockView .mock-question");
    await expect(page.locator("#mockClock")).toHaveCount(0);
    await expect(page.locator("#mockView .qbank-note")).toContainText("Time’s up");
    await expect(page.locator("#finishMockBtn")).toBeVisible();
    await expect(page.locator("#mockView .part-answer").first()).toBeVisible();
  });
});
