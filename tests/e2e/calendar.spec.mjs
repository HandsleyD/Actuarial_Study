import { readFileSync } from "node:fs";
import { test, expect, seed, open } from "./fixtures.mjs";

// "Add to calendar" downloads an .ics file built in the browser (docs/ics.js;
// the format itself is unit-tested in scripts/test-ics.mjs). Today in these
// tests is 27 September 2026, with April 2027 the next sitting.

const plan = (sittings) => ({ sittings, specialists: { sp: [], sa: [] }, updatedAt: 1 });

async function download(page, button) {
  const [file] = await Promise.all([page.waitForEvent("download"), button.click()]);
  return { name: file.suggestedFilename(), text: readFileSync(await file.path(), "utf8") };
}

const uids = (text) => [...text.matchAll(/^UID:([^@\r]+)@/gm)].map((m) => m[1]);

test("the Exam Hub refreshes after a delayed plan load and subsequent plan changes", async ({ page }) => {
  // Hold the initial plan request until the Hub has rendered its fallback.
  await page.route("**/app.js?*", async (route) => {
    const response = await route.fetch();
    await route.fulfill({ response, body: `
      window.__releasePlan = null;
      Store.loadExamPlan = () => new Promise(resolve => { window.__releasePlan = resolve; });
      const registerPlanChange = Store.onPlanChange;
      Store.onPlanChange = callback => {
        window.__notifyPlanChange = callback;
        registerPlanChange(callback);
      };
      ${await response.text()}
    ` });
  });
  await seed(page, { welcomed: true });
  await open(page, "exams/CM1", "#hubSubject");
  await expect(page.locator("#hubIcs")).toHaveText(/Add CM1 to calendar/);
  await page.waitForFunction(() => typeof window.__releasePlan === "function");
  await page.evaluate(p => window.__releasePlan(p), plan({ "2027-04": ["CS1"] }));
  await expect(page.locator("#hubIcs")).toHaveText(/Add your exam plan to calendar/);
  const loaded = await download(page, page.locator("#hubIcs"));
  expect(loaded.name).toBe("ifoa-exam-plan.ics");
  expect(uids(loaded.text)).toContain("2027-04-CS1-paper-cs1a");
  expect(uids(loaded.text).some(u => u.includes("CM1"))).toBe(false);

  // Exercise the Store notification path without navigating away.
  await page.evaluate(() => {
    Store.setExamPlan({ "2027-04": ["CP1"] });
    window.__notifyPlanChange();
  });
  const changed = await download(page, page.locator("#hubIcs"));
  expect(uids(changed.text)).toContain("2027-04-CP1-paper-cp1-paper-1");
  expect(uids(changed.text).some(u => u.includes("CS1"))).toBe(false);
  await expect(page.locator("#hubSubject")).toHaveValue("CM1");

  await page.evaluate(() => {
    Store.setExamPlan({});
    window.__notifyPlanChange();
  });
  await expect(page.locator("#hubIcs")).toHaveText(/Add CM1 to calendar/);
  const cleared = await download(page, page.locator("#hubIcs"));
  expect(cleared.name).toBe("ifoa-cm1-2027-04.ics");
  expect(uids(cleared.text)).toContain("2027-04-CM1-paper-cm1a");
});

test("the exam plan downloads its papers, entry deadlines and results days", async ({ page }) => {
  await seed(page, { welcomed: true, plan: plan({ "2027-04": ["CM1", "CP1"] }) });
  await open(page, "dashboard", "#examPlan");
  const { name, text } = await download(page, page.locator("#planIcs"));
  expect(name).toBe("ifoa-exam-plan.ics");
  expect(text.startsWith("BEGIN:VCALENDAR\r\n")).toBe(true);
  expect(uids(text)).toEqual([
    "2027-04-entry-opens",
    "2027-04-entry-closes",
    "2027-04-CM1-paper-cm1a",
    "2027-04-CP1-paper-cp1-paper-1",
    "2027-04-CM1-paper-cm1b",
    "2027-04-CP1-paper-cp1-paper-2",
    "2027-04-results-core",
    "2027-04-results-advanced",
  ]);
  expect(text).toContain("TRIGGER:-P7D");
});

test("no button on the plan until it has a sitting with published dates", async ({ page }) => {
  // April 2028 isn't on the IFoA's site yet, so there's nothing to add.
  await seed(page, { welcomed: true, plan: plan({ "2028-04": ["CS1"] }) });
  await open(page, "dashboard", "#examPlan");
  await expect(page.locator("#planIcs")).toHaveCount(0);
  await page.locator(".plan-sitting", { hasText: "April 2027" }).locator(".plan-add").selectOption("CM1");
  await expect(page.locator("#planIcs")).toBeVisible();
});

test("the Exam Hub offers the plan when there is one", async ({ page }) => {
  await seed(page, { welcomed: true, plan: plan({ "2027-04": ["CS1"] }) });
  await open(page, "exams/CM1", "#hubSubject");
  await expect(page.locator("#hubIcs")).toHaveText(/Add your exam plan to calendar/);
  const { name, text } = await download(page, page.locator("#hubIcs"));
  expect(name).toBe("ifoa-exam-plan.ics");
  expect(uids(text)).toContain("2027-04-CS1-paper-cs1a");
  expect(uids(text).some((u) => u.includes("CM1"))).toBe(false);
});

test("the Exam Hub offers the plan even for a subject with no sitting to come", async ({ page }) => {
  // CB3 is booked online, so it never has a next sitting.
  await seed(page, { welcomed: true, plan: plan({ "2027-04": ["CS1"] }) });
  await open(page, "exams/CB3", "#hubSubject");
  const { name, text } = await download(page, page.locator("#hubIcs", { hasText: "Add your exam plan to calendar" }));
  expect(name).toBe("ifoa-exam-plan.ics");
  expect(uids(text)).toContain("2027-04-CS1-paper-cs1a");
});

test("without a plan, the Exam Hub offers the viewed subject's next sitting", async ({ page }) => {
  await seed(page, { welcomed: true });
  await open(page, "exams/SP2", "#hubSubject");
  const { name, text } = await download(page, page.locator("#hubIcs", { hasText: "Add SP2 to calendar" }));
  expect(name).toBe("ifoa-sp2-2027-04.ics");
  expect(uids(text)).toEqual(["2027-04-entry-opens", "2027-04-entry-closes", "2027-04-SP2-paper-sp2", "2027-04-results-advanced"]);
  expect(text).toContain("DTSTART;VALUE=DATE:20270413");
});
