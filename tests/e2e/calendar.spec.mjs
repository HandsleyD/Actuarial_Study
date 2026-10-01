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

test("without a plan, the Exam Hub offers the viewed subject's next sitting", async ({ page }) => {
  await seed(page, { welcomed: true });
  await open(page, "exams/SP2", "#hubSubject");
  const { name, text } = await download(page, page.locator("#hubIcs", { hasText: "Add SP2 to calendar" }));
  expect(name).toBe("ifoa-sp2-2027-04.ics");
  expect(uids(text)).toEqual(["2027-04-entry-opens", "2027-04-entry-closes", "2027-04-SP2-paper-sp2", "2027-04-results-advanced"]);
  expect(text).toContain("DTSTART;VALUE=DATE:20270413");
});
