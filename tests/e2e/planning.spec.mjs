import { test, expect, seed, open, readStore } from "./fixtures.mjs";

// Today in these tests is 27 September 2026: the September 2026 papers are
// done and their results are due on 8 December; April 2027 is next.

const plan = (sittings, specialists = { sp: [], sa: [] }) => ({ sittings, specialists, updatedAt: 1 });
const passed = (...codes) => Object.fromEntries(codes.map((c) => [c, { status: "passed", sitting: null, updatedAt: 1 }]));

test.describe("welcome questions", () => {
  test("record passes, exemptions and an exam awaiting results, then plan the next sitting", async ({ page }) => {
    await open(page);
    await page.locator("#welcomeBanner").getByRole("link", { name: "Get started" }).click();
    await expect(page.locator("#welcomeView h2")).toHaveText("Which exams have you passed, or just sat?");

    const tick = async (code, how) => {
      await page.locator(`#welcomeForm1 input[data-code="${code}"]`).check();
      await page.locator(`.welcome-how[data-code="${code}"]`).selectOption(how);
    };
    await tick("CB1", "passed");
    await tick("CB3", "exempt");
    await tick("CB2", "awaiting");
    // CB3 is booked online, so it can't be "sat at a sitting".
    await expect(page.locator('.welcome-how[data-code="CB3"] option[value="awaiting"]')).toHaveCount(0);
    await page.locator("#welcomeForm1 button[type=submit]").click();

    await expect(page.locator("#welcomeView h2")).toHaveText("What are you sitting in April 2027?");
    for (const c of ["CB1", "CB2", "CB3"]) await expect(page.locator(`#welcomeForm2 input[data-code="${c}"]`)).toHaveCount(0);
    await page.locator('#welcomeForm2 input[data-code="CM1"]').check();
    await page.locator('#welcomeForm2 input[data-code="CS2"]').check();
    await expect(page.locator("#welcomeWarnings")).toBeEmpty();
    await page.locator("#welcomeForm2 button[type=submit]").click();

    // Straight to the plan, not the top of the dashboard.
    await expect(page).toHaveURL(/#\/dashboard\/plan$/);
    await expect(page.locator("#examPlan h3")).toBeInViewport();
    const results = await readStore(page, "result");
    expect(results.CB1.status).toBe("passed");
    expect(results.CB3.status).toBe("exempt");
    expect(results.CB2).toBeUndefined();
    expect((await readStore(page, "plan")).sittings).toEqual({ "2026-09": ["CB2"], "2027-04": ["CM1", "CS2"] });
    await page.goto("/#/");
    await expect(page.locator("#welcomeBanner")).toBeHidden();
  });

  test("step 2 warns about papers on the same day; Back keeps step 1's answers", async ({ page }) => {
    await open(page, "welcome", "#welcomeForm1");
    await page.locator('#welcomeForm1 input[data-code="CB1"]').check();
    await page.locator("#welcomeForm1 button[type=submit]").click();
    // CB2 and CS2 both have a paper on 16 April 2027.
    await page.locator('#welcomeForm2 input[data-code="CB2"]').check();
    await page.locator('#welcomeForm2 input[data-code="CS2"]').check();
    await expect(page.locator("#welcomeWarnings")).toContainText("CB2 and CS2 both have a paper");
    await page.locator("#welcomeBack").click();
    await expect(page.locator('#welcomeForm1 input[data-code="CB1"]')).toBeChecked();
  });

  test("results can be saved without a plan", async ({ page }) => {
    await open(page, "welcome", "#welcomeForm1");
    await page.locator('#welcomeForm1 input[data-code="CM1"]').check();
    await page.locator("#welcomeForm1 button[type=submit]").click();
    await page.locator("#welcomeSkipPlan").click();
    await expect(page).toHaveURL(/#\/$/);
    expect((await readStore(page, "result")).CM1.status).toBe("passed");
    expect(Object.keys((await readStore(page, "plan")).sittings)).toHaveLength(0);
  });
});

test.describe("exam planner", () => {
  test("add, move and remove subjects; clashes and pacing are flagged", async ({ page }) => {
    await seed(page, { welcomed: true });
    await open(page, "dashboard", "#examPlan");
    const sitting = (name) => page.locator(".plan-sitting").filter({ has: page.locator(`.plan-sitting-head strong`, { hasText: name }) });
    const apr = sitting("April 2027");
    await apr.locator(".plan-add").selectOption("CB2");
    await apr.locator(".plan-add").selectOption("CS2");
    await expect(apr.locator(".plan-chip a")).toHaveText(["CB2", "CS2"]);
    await expect(apr.locator(".plan-warn")).toContainText("CB2 and CS2 both have a paper");
    await expect(apr.locator(".plan-notes")).toContainText("modules not yet marked done");

    // Adding it to another sitting moves it.
    const sep = sitting("September 2027");
    await expect(sep.locator('.plan-add option[value="CS2"]')).toContainText("move from Apr 2027");
    await sep.locator(".plan-add").selectOption("CS2");
    await expect(apr.locator(".plan-chip a")).toHaveText(["CB2"]);
    await expect(sep.locator(".plan-chip a")).toHaveText(["CS2"]);
    await expect(apr.locator(".plan-warn")).toHaveCount(0);

    await apr.locator('.plan-chip-remove[data-code="CB2"]').click();
    await expect(apr.locator(".plan-chip")).toHaveCount(0);
    expect((await readStore(page, "plan")).sittings).toEqual({ "2027-09": ["CS2"] });
  });

  test("the sitting just gone takes exams already sat, until results are out", async ({ page }) => {
    await seed(page, { welcomed: true });
    await open(page, "dashboard", ".plan-sitting.awaiting");
    const row = page.locator(".plan-sitting.awaiting");
    await expect(row.locator(".plan-sitting-head")).toContainText("September 2026");
    await expect(row.locator(".plan-sitting-head")).toContainText("awaiting results");
    await row.locator(".plan-add").selectOption("CB2");
    await expect(row.locator(".plan-notes")).toContainText("CB2: results due 8 Dec 2026");
    // CM2 had a paper on the same day as CB2 (23 September), so can't also have been sat.
    await expect(row.locator('.plan-add option[value="CM2"]')).toBeDisabled();
    await expect(row.locator('.plan-add option[value="CM2"]')).toContainText("same day as one you sat");
  });

  test("the summary projects Associate, and more sittings can be shown", async ({ page }) => {
    // Core Practice results come out with the advanced subjects (8 July), not the core ones (6 July).
    await seed(page, {
      welcomed: true,
      result: passed("CB1", "CB2", "CB3", "CM1", "CM2", "CS1", "CS2", "CP1"),
      plan: plan({ "2027-04": ["CP2", "CP3"] }),
    });
    await open(page, "dashboard", "#examPlan");
    await expect(page.locator(".plan-summary")).toContainText("Associate after the April 2027 sitting (results 8 Jul 2027)");
    const before = await page.locator(".plan-sitting").count();
    await page.locator("#planMore").click();
    await expect(page.locator(".plan-sitting")).toHaveCount(before + 4);
  });
});

test.describe("results day", () => {
  test("the home page asks how planned exams went, and records the answer", async ({ page }) => {
    await seed(page, { welcomed: true, plan: plan({ "2026-09": ["CB2", "CM1"], "2027-04": ["CS1"] }) });
    await page.clock.setFixedTime(new Date("2026-12-09T09:00:00Z"));
    await open(page, "", "#resultsPrompt");
    const prompt = page.locator("#resultsPrompt");
    await expect(prompt).toContainText("Results are out for September 2026. Did you pass?");
    await prompt.locator('[data-pass="CB2"]').click();
    await prompt.locator('[data-resit="CM1"]').click();
    await expect(prompt).toBeHidden();
    const result = await readStore(page, "result");
    expect(result.CB2).toMatchObject({ status: "passed", sitting: "2026-09" });
    expect((await readStore(page, "plan")).sittings).toEqual({ "2027-04": ["CM1", "CS1"] });
    await expect(page.locator("#card-CB2 .status-ribbon")).toHaveText("Passed ✓");
  });

  test("nothing is asked before results day", async ({ page }) => {
    await seed(page, { welcomed: true, plan: plan({ "2026-09": ["CB2"] }) });
    await open(page, "", "#routeMap .route-title");
    await expect(page.locator("#resultsPrompt")).toBeHidden();
  });
});

test.describe("route map", () => {
  test("draws passed, planned and suggested subjects towards Associate", async ({ page }) => {
    await seed(page, { welcomed: true, result: passed("CB1"), plan: plan({ "2026-09": ["CB2"], "2027-04": ["CM1"] }) });
    await open(page, "", "#routeMap .route-title");
    const map = page.locator("#routeMap");
    await expect(map.locator(".route-eyebrow")).toHaveText("Next stop: CM1 · April 2027");
    await expect(map.locator(".route-title")).toContainText("Associate by");
    await expect(map.locator(".rm-station.passed")).toHaveCount(1);
    await expect(map.locator('.rm-station[aria-label^="CB2"]')).toHaveAttribute("aria-label", /sat September 2026, result to come/);
    await expect(map.locator('.rm-station[aria-label^="CM1"]')).toHaveAttribute("aria-label", /planned for April 2027/);
    await expect(map.locator(".rm-station.suggested").first()).toBeVisible();
    await expect(map.locator(".rm-here")).toHaveCount(1);
    await map.getByRole("link", { name: "Edit your plan" }).click();
    await expect(page).toHaveURL(/#\/dashboard\/plan$/);
    // The plan is on screen and not hidden under the sticky header.
    const planHeading = page.locator("#examPlan h3");
    await expect(planHeading).toBeInViewport();
    const [top, header] = await Promise.all([
      planHeading.evaluate((h) => h.getBoundingClientRect().top),
      page.locator(".topbar").evaluate((t) => t.getBoundingClientRect().bottom),
    ]);
    expect(top).toBeGreaterThanOrEqual(header);
  });

  test("choosing specialist subjects extends the route to Fellow", async ({ page }) => {
    await seed(page, { welcomed: true });
    await open(page, "", "#routeSpecialists");
    const facts = page.locator(".route-facts");
    await expect(facts).toContainText("Choose specialists");
    await page.locator("#routeSpecialists summary").click();
    await page.locator('[data-spec="SP2"]').check();
    await page.locator('[data-spec="SP4"]').check();
    // Two SPs are enough: the rest are disabled.
    await expect(page.locator('[data-spec="SP5"]')).toBeDisabled();
    await page.locator('[data-spec="SA2"]').check();
    await expect(facts).toContainText("via SP2, SP4, SA2");
    expect((await readStore(page, "plan")).specialists).toEqual({ sp: ["SP2", "SP4"], sa: ["SA2"] });
    await expect(page.locator('#routeMap .rm-station[aria-label^="SA2"]')).toHaveCount(1);
  });

  test("a clash in the plan is called out under the map", async ({ page }) => {
    await seed(page, { welcomed: true, plan: plan({ "2027-04": ["CB2", "CS2"] }) });
    await open(page, "", "#routeMap .route-title");
    await expect(page.locator(".route-clashes")).toContainText("April 2027: CB2 and CS2 both have a paper");
  });
});

test.describe("exam hub", () => {
  test("shows the next sitting's papers, deadlines and pass rates", async ({ page }) => {
    await seed(page, { welcomed: true });
    await open(page, "exams/CM1", "#hubSubject");
    const hub = page.locator("#examHubView");
    await expect(hub).toContainText("Next sitting — April 2027");
    await expect(hub).toContainText("CM1A");
    await expect(hub).toContainText("Exam entry closes");
    await expect(hub).toContainText("Pass marks and pass rates");
    await expect(hub.locator(".hub-table").first()).toBeVisible();
    await expect(hub).toContainText("IFoA exam timetable");
  });

  test("switching subject changes the page; Foundations aren't listed", async ({ page }) => {
    await seed(page, { welcomed: true });
    await open(page, "exams/CM1", "#hubSubject");
    await expect(page.locator('#hubSubject option[value="FM"]')).toHaveCount(0);
    await expect(page.locator('#hubSubject option[value="FS"]')).toHaveCount(0);
    await page.locator("#hubSubject").selectOption("SP2");
    await expect(page).toHaveURL(/#\/exams\/SP2$/);
    await expect(page.locator("#examHubView")).toContainText("SP2");
    // Asking for a Foundations subject falls back to an exam.
    await page.goto("/#/exams/FM");
    await expect(page.locator("#hubSubject")).not.toHaveValue("FM");
  });

  test("the header link opens the hub", async ({ page }) => {
    await seed(page, { welcomed: true });
    await open(page);
    await page.locator("#examHubLink").click();
    await expect(page).toHaveURL(/#\/exams/);
    await expect(page.locator("#examHubView")).toBeVisible();
  });
});

test.describe("dashboard", () => {
  test("shows every section and counts reviews", async ({ page }) => {
    await seed(page, {
      welcomed: true,
      activity: { "2026-09-27": 12, "2026-09-20": 5 },
      "srs:CB2": { m01: { 0: { reps: 0, interval: 0, ease: 2.3, due: "2026-09-27", lapses: 2, reviews: 3, last: "2026-09-26" } } },
    });
    await open(page, "dashboard", "#examPlan");
    const dash = page.locator("#dashboardView");
    for (const h of ["Exam plan", "Review forecast", "Activity", "Mastery by subject", "Weak areas"]) {
      await expect(dash.locator("h3", { hasText: h })).toBeVisible();
    }
    await expect(dash).toContainText("CB2");
    await page.locator("#backFromDash").click();
    await expect(page).toHaveURL(/#\/$/);
  });
});

