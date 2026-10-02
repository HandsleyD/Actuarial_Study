import { readFileSync } from "node:fs";
import { test, expect, seed, open, readStore, signedIn, E2E_USER } from "./fixtures.mjs";

const openPanel = async (page) => {
  await page.locator("#settingsBtn").click();
  await expect(page.locator("#settingsPanel")).toBeVisible();
};

test.describe("progress file", () => {
  test("downloads everything kept on this device, without an account", async ({ page }) => {
    await seed(page, {
      welcomed: true,
      "status:CS1": { m01: "Done" },
      "mastery:CS1": { m01: { 0: true } },
      "srs:CS1": { m01: { 0: { reps: 1, interval: 1, ease: 2.5, due: "2026-09-28", lapses: 0, reviews: 1, last: "2026-09-27" } } },
      "note:CS1": { m01: { 0: { note: "my mnemonic", flagged: true, updatedAt: 3 } } },
      result: { CB1: { status: "passed", sitting: "2026-04", updatedAt: 5 } },
      plan: { sittings: { "2027-04": ["CM1"] }, specialists: { sp: [], sa: [] }, updatedAt: 7 },
    });
    await open(page);
    await openPanel(page);
    const [download] = await Promise.all([page.waitForEvent("download"), page.locator("#exportBtn").click()]);
    expect(download.suggestedFilename()).toBe("fellow-progress-2026-09-27.json");
    const file = JSON.parse(readFileSync(await download.path(), "utf8"));
    expect(file.app).toBe("fellow");
    expect(file.data.status.CS1).toEqual({ m01: "Done" });
    expect(file.data.mastery.CS1.m01["0"]).toBe(true);
    expect(file.data.srs.CS1.m01["0"].last).toBe("2026-09-27");
    expect(file.data.note.CS1.m01["0"]).toEqual({ note: "my mnemonic", flagged: true, updatedAt: 3 });
    expect(file.data.result.CB1.status).toBe("passed");
    expect(file.data.plan.sittings).toEqual({ "2027-04": ["CM1"] });
    await expect(page.locator("#dataMessage")).toContainText("fellow-progress-2026-09-27.json");
  });

  test("restores a file, keeping the newer copy of each entry", async ({ page }) => {
    await seed(page, { welcomed: true, "status:CS1": { m01: "Done" } });
    await open(page);
    await openPanel(page);
    const file = {
      app: "fellow",
      format: 1,
      exportedAt: "2026-09-20T10:00:00.000Z",
      data: {
        status: { CS1: { m01: "In progress", m02: "In progress" } },
        result: { CB1: { status: "passed", sitting: "2026-04", updatedAt: 5 } },
        streak: { lastDate: "2026-09-27", count: 5 }, // today, a longer run than this device's
        note: { CB2: { m01: { 2: { note: "restored note", flagged: true, updatedAt: 9 } } } },
      },
    };
    await page.locator("#importFile").setInputFiles({
      name: "backup.json",
      mimeType: "application/json",
      buffer: Buffer.from(JSON.stringify(file)),
    });
    await expect(page.locator("#dataMessage")).toContainText("Restored");
    expect(await readStore(page, "status:CS1")).toEqual({ m01: "Done", m02: "In progress" });
    expect((await readStore(page, "result")).CB1.status).toBe("passed");
    // The page picks it up without a reload: the streak, and CB1 as passed.
    await page.locator("#closeSettings").click();
    await expect(page.locator("#streakValue")).toHaveText("5");
    await expect(page.locator("#card-CB1 .status-ribbon")).toHaveText("Passed ✓");
    // ...and the restored note and flag.
    expect((await readStore(page, "note:CB2")).m01["2"]).toMatchObject({ note: "restored note", flagged: true });
    await page.goto("/#/CB2");
    await expect(page.getByRole("link", { name: /Review 1 flagged card/ })).toBeVisible();
  });

  test("says so when a file isn't a progress download", async ({ page }) => {
    await seed(page, { welcomed: true });
    await open(page);
    await openPanel(page);
    await page.locator("#importFile").setInputFiles({ name: "notes.json", mimeType: "application/json", buffer: Buffer.from("[1, 2, 3]") });
    await expect(page.locator("#dataMessage")).toHaveText("That file isn't a Fellow progress download.");
  });
});

test.describe("forgot password", () => {
  test("asks for the email first, then sends the link", async ({ page }) => {
    await seed(page, { welcomed: true });
    await open(page);
    await openPanel(page);
    await page.locator("#forgotPasswordBtn").click();
    await expect(page.locator("#authError")).toContainText("Enter your email");
    await page.locator("#authEmail").fill("someone@example.com");
    await page.locator("#forgotPasswordBtn").click();
    await expect(page.locator("#authError")).toContainText("someone@example.com");
    await expect(page.locator("#authError")).not.toHaveClass(/is-error/);
  });

  test("a reset link opens the panel to choose a new password", async ({ page }) => {
    await seed(page, { welcomed: true });
    await signedIn(page, { recovery: true });
    await open(page);
    await expect(page.locator("#settingsPanel")).toBeVisible();
    await expect(page.locator("#authRecovery")).toBeVisible();
    await expect(page.locator("#recoveryEmailLabel")).toHaveText(E2E_USER.email);
    await page.locator("#newPassword").fill("short");
    await page.locator("#setPasswordBtn").click();
    await expect(page.locator("#recoveryMessage")).toContainText("at least 6");
    await page.locator("#newPassword").fill("a-new-password");
    await page.locator("#setPasswordBtn").click();
    await expect(page.locator("#authSignedIn")).toBeVisible();
    await expect(page.locator("#accountMessage")).toContainText("Password changed");
  });

  test("an expired link says so", async ({ page }) => {
    await seed(page, { welcomed: true });
    await page.goto("/#error=access_denied&error_code=otp_expired&error_description=Email+link+is+invalid+or+has+expired");
    await page.waitForFunction(() => document.querySelectorAll(".exam-card").length > 0);
    await expect(page.locator("#authError")).toContainText("Email link is invalid or has expired");
    expect(new URL(page.url()).hash).toBe("");
    await expect(page.locator("#homeView")).toBeVisible();
  });
});

test.describe("account deletion", () => {
  test("needs DELETE typed, then removes the account and its local copy", async ({ page }) => {
    await seed(page, { welcomed: true, "status:CS1": { m01: "Done" } }); // made before signing in
    await signedIn(page);
    await open(page);
    await page.evaluate((id) => localStorage.setItem(`actuarialStudy:status:${id}:CS1`, JSON.stringify({ m02: "Done" })), E2E_USER.id);
    await openPanel(page);
    await expect(page.locator("#authEmailLabel")).toHaveText(E2E_USER.email);

    await page.locator("#deleteAccountBtn").click();
    const confirm = page.locator("#deleteAccountConfirmBtn");
    await expect(confirm).toBeDisabled();
    await page.locator("#deleteConfirmInput").fill("delete");
    await expect(confirm).toBeDisabled();
    await page.locator("#deleteAccountCancelBtn").click();
    await expect(page.locator("#deleteConfirm")).toBeHidden();

    await page.locator("#deleteAccountBtn").click();
    await page.locator("#deleteConfirmInput").fill("DELETE");
    await confirm.click();
    await expect(page.locator("#authSignedOut")).toBeVisible();
    await expect(page.locator("#authError")).toContainText("deleted");
    const left = await page.evaluate((id) => Object.keys(localStorage).filter((k) => k.includes(`:${id}`)), E2E_USER.id);
    expect(left).toEqual([]);
    expect(await readStore(page, "status:CS1")).toEqual({ m01: "Done" });
  });
});
