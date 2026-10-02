import { test, expect, seed, open, readStore } from "./fixtures.mjs";

// Hidden views keep their last render, so ids like #revealBtn can be in the
// page twice after moving between views: locators take the visible one.

// The GitHub issue a "Report a mistake" link would open, decoded.
async function reportLink(page, scope) {
  const href = await page.locator(`${scope} .report-link`).getAttribute("href");
  const url = new URL(href);
  return { url, title: url.searchParams.get("title"), body: url.searchParams.get("body"), labels: url.searchParams.get("labels") };
}

test.describe("report a mistake", () => {
  test.beforeEach(async ({ page }) => {
    await seed(page, { welcomed: true });
  });

  test("a flashcard's link appears after reveal and carries the card, never the user's answer or note", async ({ page }) => {
    // Deep link: the full deck at card index 3 of CB2 module 1.
    await open(page, "CB2/m01/3", "#revealBtn");
    await expect(page.locator("#flashView .report-link")).toHaveCount(0);
    await page.locator("#answerInput").fill("my secret typed answer");
    await page.locator("#revealBtn:visible").click();
    await page.locator("#noteEdit:visible").click();
    await page.locator("#noteInput:visible").fill("my private note");
    await page.locator("#noteSave:visible").click();

    const link = page.locator("#flashView .report-link");
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute("target", "_blank");
    const { url, title, body, labels } = await reportLink(page, "#flashView");
    expect(`${url.origin}${url.pathname}`).toBe("https://github.com/HandsleyD/Actuarial_Study/issues/new");
    expect(labels).toBe("content-error");
    expect(url.searchParams.get("template")).toBe("content-error.md");
    expect(title).toMatch(/^\[Content error\] CB2 m01 card 4: /);

    const words = await page.evaluate(() => plainText(MODULES.CB2.find((m) => m.id === "m01").cards[3].q).slice(0, 40));
    expect(body).toContain(words);
    expect(body).toContain("- Subject: CB2");
    expect(body).toContain("- Module: m01");
    expect(body).toContain("card index 3");
    expect(body).toContain("#/CB2/m01/3");
    expect(body).toContain("**What's wrong**");
    expect(body).not.toContain("my secret typed answer");
    expect(body).not.toContain("my private note");
    expect(body).not.toMatch(/mastered|streak/i);
  });

  test("a drill's link appears once it's been answered", async ({ page }) => {
    await open(page, "CB2/drill/m02", "#drillSubmit");
    await expect(page.locator("#drillView .report-link")).toHaveCount(0);
    const id = await page.evaluate(() => drillState.items[drillState.idx].id);
    const type = await page.evaluate(() => drillState.items[drillState.idx].type);
    // Any answer will do: pick the first option, token or region on offer.
    if (type === "mcq" || type === "multi") await page.locator("#drillView .drill-option").first().click();
    else if (type === "cloze") {
      const blanks = await page.evaluate(() => drillState.items[drillState.idx].blanks.length);
      for (let n = 0; n < blanks; n++) await page.locator(`#drillView .drill-token[data-blank="${n}"]`).first().click();
    } else {
      await page.locator("#drillView g[data-region]").first().focus();
      await page.keyboard.press("Enter");
    }
    await page.locator("#drillSubmit").click();
    await expect(page.locator("#drillView .report-link")).toBeVisible();
    const { title, body, labels } = await reportLink(page, "#drillView");
    expect(labels).toBe("content-error");
    expect(title).toContain(`CB2 ${id}:`);
    expect(body).toContain(`drill ${id}`);
    expect(body).toContain("#/CB2/drill/m02");
  });

  test("every practice question has a link", async ({ page }) => {
    await open(page, "CB2/questions", "#revealQBtn");
    const id = await page.evaluate(() => QUESTIONS.CB2[0].id);
    await expect(page.locator("#questionsView .report-link")).toBeVisible();
    const { title, body } = await reportLink(page, "#questionsView");
    expect(title).toContain(`CB2 ${id}:`);
    expect(body).toContain(`practice question ${id}`);
    expect(body).toContain("- Module: Modules ");
    expect(body).toContain("#/CB2/questions/0");
  });
});

test.describe("notes and flags", () => {
  test.beforeEach(async ({ page }) => {
    await seed(page, { welcomed: true });
  });

  test("a note shows under the answer, escaped, and survives a reload", async ({ page }) => {
    await open(page, "CB2/m01/2", "#revealBtn");
    await page.locator("#revealBtn:visible").click();
    await expect(page.locator(".card-note-text")).toHaveCount(0);
    await page.locator("#noteEdit:visible").click();
    await page.locator("#noteInput:visible").fill('remember <img src=x onerror="window.__pwned=1"> opportunity cost');
    await page.locator("#noteSave:visible").click();

    const note = page.locator("#flashView .card-note-text");
    await expect(note).toHaveText('remember <img src=x onerror="window.__pwned=1"> opportunity cost');
    await expect(page.locator("#flashView .card-note img")).toHaveCount(0);
    expect(await page.evaluate(() => window.__pwned)).toBeUndefined();

    const saved = await readStore(page, "note:CB2");
    expect(saved.m01["2"]).toMatchObject({ note: 'remember <img src=x onerror="window.__pwned=1"> opportunity cost', flagged: false });

    await page.reload();
    await page.locator("#revealBtn:visible").click();
    await expect(page.locator("#flashView .card-note-text")).toContainText("opportunity cost");

    // Editing to empty deletes it.
    await page.locator("#noteEdit:visible").click();
    await page.locator("#noteDelete:visible").click();
    await expect(page.locator("#flashView .card-note-text")).toHaveCount(0);
    expect((await readStore(page, "note:CB2")).m01["2"].note).toBe("");
  });

  test("notes are searchable", async ({ page }) => {
    // Written straight into storage: seed() in beforeEach has already run.
    await page.goto("/");
    await page.evaluate(() =>
      localStorage.setItem(
        "actuarialStudy:note:anon:CB2",
        JSON.stringify({ m01: { 5: { note: "zebracrossing mnemonic", flagged: false, updatedAt: 1 } } })
      )
    );
    await page.goto("/#/search?q=zebracrossing");
    await page.reload(); // a hash change alone wouldn't reload the page
    await page.locator("#searchResults").waitFor();
    const result = page.locator(".search-result");
    await expect(result).toHaveCount(1);
    await expect(result).toHaveAttribute("href", "#/CB2/m01/5");
    await expect(result).toContainText("Your note:");
    await expect(result.locator("mark")).toHaveText("zebracrossing");
  });

  test("a note saved in this session is searchable straight away", async ({ page }) => {
    await open(page, "search?q=platypus", "#searchResults");
    await expect(page.locator(".search-result")).toHaveCount(0);
    await page.goto("/#/CB2/m01/0");
    await page.locator("#revealBtn:visible").click();
    await page.locator("#noteEdit:visible").click();
    await page.locator("#noteInput:visible").fill("platypus");
    await page.locator("#noteSave:visible").click();
    await page.goto("/#/search?q=platypus");
    await expect(page.locator(".search-result")).toHaveCount(1);
  });

  test("flagging a card puts it in the flagged deck, from the subject page and the dashboard", async ({ page }) => {
    await open(page, "flagged", ".flash-empty");
    await expect(page.locator("#reviewView")).toContainText("No flagged cards");

    // The flag works before reveal too.
    await page.goto("/#/CB2/m01/4");
    const flag = page.locator("#flagBtn:visible");
    await expect(flag).toHaveAttribute("aria-pressed", "false");
    await flag.click();
    await expect(page.locator("#flagBtn:visible")).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator("#flagBtn:visible")).toHaveText(/Flagged/);
    expect((await readStore(page, "note:CB2")).m01["4"].flagged).toBe(true);

    await page.goto("/#/CB2");
    const btn = page.getByRole("link", { name: /Review 1 flagged card/ });
    await expect(btn).toBeVisible();
    await btn.click();
    await expect(page).toHaveURL(/#\/flagged\/CB2$/);
    await expect(page.locator("#reviewView h2")).toContainText("Flagged cards");
    await expect(page.locator("#reviewView .flash-progress")).toHaveText("1 flagged");
    await expect(page.locator("#reviewView .flashcard-source")).toContainText("CB2 · M01");
    // It's card index 4: its report link says so.
    await page.locator("#revealBtn:visible").click();
    expect((await reportLink(page, "#reviewView")).body).toContain("#/CB2/m01/4");

    await page.goto("/#/dashboard");
    await expect(page.getByRole("link", { name: /1 flagged card/ })).toHaveAttribute("href", "#/flagged");

    // Unflagging from the deck takes it out of the next run.
    await page.goto("/#/flagged");
    await page.locator("#flagBtn:visible").click();
    await expect(page.locator("#flagBtn:visible")).toHaveAttribute("aria-pressed", "false");
    await page.goto("/#/CB2");
    await expect(page.getByRole("link", { name: /flagged card/ })).toHaveCount(0);
  });

  test("the note editor and flag work in mixed sessions and review runs too", async ({ page }) => {
    await open(page, "CB2/mixed", "#revealBtn");
    await page.locator("#flagBtn:visible").click();
    await page.locator("#revealBtn:visible").click();
    await page.locator("#noteEdit:visible").click();
    await page.locator("#noteInput:visible").fill("mixed note");
    await page.locator("#noteSave:visible").click();
    await expect(page.locator("#mixedView .card-note-text")).toHaveText("mixed note");
    await expect(page.locator("#mixedView .report-link")).toBeVisible();

    await page.goto("/#/flagged");
    await expect(page.locator("#reviewView .flash-progress")).toHaveText("1 flagged");
    await page.locator("#revealBtn:visible").click();
    await expect(page.locator("#reviewView .card-note-text")).toHaveText("mixed note");
    await expect(page.locator("#reviewView .report-link")).toBeVisible();
  });

  test("Space on the focused Flag button flags the card instead of revealing it", async ({ page }) => {
    await open(page, "CB2/m01/1", "#revealBtn");
    await page.locator("#flagBtn:visible").focus();
    await page.keyboard.press(" ");
    await expect(page.locator("#flagBtn:visible")).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator("#flashView .flashcard-answer")).toHaveCount(0);
    expect((await readStore(page, "note:CB2")).m01["1"].flagged).toBe(true);
  });

  test("a note editor left open in another view doesn't capture the next save", async ({ page }) => {
    // Leave an editor open on a module card, with a draft in it...
    await open(page, "CB2/m01/0", "#revealBtn");
    await page.locator("#revealBtn:visible").click();
    await page.locator("#noteEdit:visible").click();
    await page.locator("#noteInput:visible").fill("draft left behind");
    // ...then note a card in a mixed session.
    await page.goto("/#/CB2/mixed");
    await page.locator("#revealBtn:visible").click();
    await page.locator("#noteEdit:visible").click();
    await page.locator("#noteInput:visible").fill("the note I meant");
    await page.locator("#noteSave:visible").click();
    await expect(page.locator("#mixedView .card-note-text")).toHaveText("the note I meant");
    const notes = await readStore(page, "note:CB2");
    const saved = Object.values(notes).flatMap((m) => Object.values(m).map((n) => n.note));
    expect(saved).toEqual(["the note I meant"]);
  });
});
