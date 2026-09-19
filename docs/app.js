const CONFIG = {
  owner: "HandsleyD",
  repo: "Actuarial_Study",
  branch: "main",
};

const EXAMS = [
  "CB1", "CB2", "CB3",
  "CM1", "CM2",
  "CP1", "CP2", "CP3",
  "CS1", "CS2",
  "SA1", "SA2", "SA3", "SA4", "SA7",
  "SP1", "SP2", "SP4", "SP5", "SP6", "SP7", "SP8", "SP9",
];

const STATUSES = ["Not started", "In progress", "Done"];

const examData = {}; // code -> { modules: [{id, status, notes}] }
const flashData = {}; // code -> { mastery: { m01: { "0": true, ... } }, sha }
const srsData = {}; // code -> { m01: { "0": {reps, interval, ease, due, lapses, reviews, last} } } — see srs.js
const REVIEW_BATCH = 20;
const SESSION_SIZE = 10;
const flashState = {
  code: null,
  moduleId: null,
  cardIndex: 0,
  revealed: false,
  typed: "",
  mode: "session", // "session" | "full"
  sessionIndices: [],
  sessionDone: false,
  sessionStats: { reviewed: 0, mastered: 0 },
  _lastKey: "",
};

// flashState.typed/mixedState.typed are user-typed text that gets injected
// back into innerHTML (the textarea while answering, the comparison view
// after reveal) — escape it so a pasted "<script>"/"<img onerror=...>" can't
// run in the user's own page.
function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Weighted random draw: cards due for review first, then unmastered cards
// (shuffled), topped up with mastered-and-not-yet-due ones only if the module
// has fewer than SESSION_SIZE of the others.
function generateSession(code, moduleId) {
  const def = (MODULES[code] || []).find((m) => m.id === moduleId);
  if (!def) return [];
  const fd = flashData[code];
  const moduleMastery = (fd && fd.mastery && fd.mastery[moduleId]) || {};
  const moduleSrs = (srsData[code] && srsData[code][moduleId]) || {};
  const today = SRS.today();
  const total = def.cards.length;
  const allIdx = Array.from({ length: total }, (_, i) => i);
  const due = shuffleArray(allIdx.filter((i) => SRS.isDue(moduleSrs[i], today)));
  const rest = allIdx.filter((i) => !SRS.isDue(moduleSrs[i], today));
  const unmastered = shuffleArray(rest.filter((i) => !moduleMastery[i]));
  const mastered = shuffleArray(rest.filter((i) => !!moduleMastery[i]));
  return [...due, ...unmastered, ...mastered].slice(0, Math.min(SESSION_SIZE, total));
}

function currentSequence(code, moduleId, def) {
  if (flashState.mode === "session") {
    if (!flashState.sessionIndices.length) {
      flashState.sessionIndices = generateSession(code, moduleId);
    }
    return flashState.sessionIndices;
  }
  return Array.from({ length: def.cards.length }, (_, i) => i);
}

/* ---------- mixed session (across every module in a subject) ---------- */

const mixedState = {
  code: null,
  cardIndex: 0,
  revealed: false,
  typed: "",
  entries: [],
  sessionDone: false,
  sessionStats: { reviewed: 0, mastered: 0 },
  _lastKey: "",
};

/* ---------- practice exam question bank ---------- */

const qbankState = { code: null, qIndex: 0, revealed: false, _lastKey: "" };

function renderQuestionsView(code) {
  const el = document.getElementById("questionsView");
  const questions = QUESTIONS[code] || [];
  const info = SUBJECTS[code] || { name: code };

  if (!questions.length) {
    el.innerHTML = `
      <button class="back-link" id="backToSubjectQ">&larr; ${code}</button>
      <div class="flash-empty">
        <h2>Practice exam questions</h2>
        <p>No practice questions for ${code} yet.</p>
      </div>`;
    document.getElementById("backToSubjectQ").addEventListener("click", () => navigate(`#/${code}`));
    return;
  }

  if (qbankState.qIndex >= questions.length) qbankState.qIndex = 0;
  const idx = qbankState.qIndex;
  const q = questions[idx];
  const revealed = qbankState.revealed;

  const dots = questions
    .map((qq, i) => `<button class="card-dot ${i === idx ? "active" : ""}" data-idx="${i}" title="Q${i + 1}: ${qq.title}">${i + 1}</button>`)
    .join("");

  const partsHtml = q.parts
    .map(
      (p) => `
    <div class="question-part">
      <div class="part-head">
        <span class="part-label">${p.label} ${p.command ? `<em>${p.command}</em>` : ""}</span>
        <span class="part-marks">[${p.marks} mark${p.marks === 1 ? "" : "s"}]</span>
      </div>
      <div class="part-question">${p.question}</div>
      ${revealed ? `<div class="part-answer"><strong>Model answer:</strong> ${p.answer}</div>` : ""}
    </div>`
    )
    .join("");

  // Reuse the flashcard explain-panel mechanism: fake a "card" whose
  // .explain is every part's examiner note stitched together, so a marker's-
  // eye view of the whole question appears in the same reveal-gated panel
  // flashcards use, once the model answers are shown.
  const explainCard = {
    explain: q.parts
      .filter((p) => p.note)
      .map((p) => `<p><strong>${p.label}</strong> ${p.note}</p>`)
      .join(""),
  };

  el.innerHTML = `
    <button class="back-link" id="backToSubjectQ">&larr; ${code}</button>
    <div class="flash-head">
      <div class="flash-title-row">
        <h2>Practice exam questions &mdash; ${info.name}</h2>
        <span class="flash-progress">Q${idx + 1} of ${questions.length}</span>
      </div>
    </div>
    <p class="qbank-note">Original questions written in the IFoA style and command-verb format — not reproduced from real papers. For the genuine article, see past ${code} papers and examiners' reports on the <a href="${IFOA_PAST_PAPERS_URL}" target="_blank" rel="noopener">IFoA's VLE</a> (student/member login required).</p>
    <div class="card-dots">${dots}</div>
    <div class="${flashcardLayoutClass(explainCard, revealed)}">
      <div class="flashcard question-card">
        <div class="question-meta">${q.modules} &middot; ${q.marks} marks total</div>
        <h3 class="question-title">${q.title}</h3>
        ${partsHtml}
        ${
          !revealed
            ? `<div class="qbank-reveal-row"><button class="btn primary" id="revealQBtn">Reveal model answers</button></div>`
            : `<p class="qbank-done-note">Compare your working against the model answers above, then move to the next question.</p>`
        }
      </div>
      ${explainPanelHtml(explainCard, revealed, "Examiner&rsquo;s insight")}
    </div>
    <div class="flash-nav">
      <button class="btn" id="prevQ" ${idx === 0 ? "disabled" : ""}>&larr; Prev</button>
      <button class="btn" id="nextQ" ${idx === questions.length - 1 ? "disabled" : ""}>Next &rarr;</button>
    </div>
  `;

  document.getElementById("backToSubjectQ").addEventListener("click", () => navigate(`#/${code}`));

  el.querySelectorAll(".card-dot").forEach((btn) => {
    btn.addEventListener("click", () => {
      qbankState.qIndex = Number(btn.dataset.idx);
      qbankState.revealed = false;
      renderQuestionsView(code);
    });
  });

  const revealBtn = document.getElementById("revealQBtn");
  if (revealBtn) {
    revealBtn.addEventListener("click", () => {
      qbankState.revealed = true;
      renderQuestionsView(code);
    });
  }

  document.getElementById("prevQ").addEventListener("click", () => {
    qbankState.qIndex = Math.max(0, idx - 1);
    qbankState.revealed = false;
    renderQuestionsView(code);
  });
  document.getElementById("nextQ").addEventListener("click", () => {
    qbankState.qIndex = Math.min(questions.length - 1, idx + 1);
    qbankState.revealed = false;
    renderQuestionsView(code);
  });

  renderMath(el);
}

function subjectMasteryTotals(code) {
  const modules = MODULES[code] || [];
  const fd = flashData[code];
  const mastery = (fd && fd.mastery) || {};
  let total = 0;
  let masteredCount = 0;
  for (const mod of modules) {
    total += mod.cards.length;
    const modMastery = mastery[mod.id] || {};
    masteredCount += Object.values(modMastery).filter(Boolean).length;
  }
  return { total, masteredCount };
}

function generateMixedSession(code) {
  const modules = MODULES[code] || [];
  const fd = flashData[code];
  const mastery = (fd && fd.mastery) || {};
  const unmastered = [];
  const mastered = [];
  for (const mod of modules) {
    const modMastery = mastery[mod.id] || {};
    mod.cards.forEach((c, i) => {
      const entry = { moduleId: mod.id, cardIdx: i };
      (modMastery[i] ? mastered : unmastered).push(entry);
    });
  }
  return [...shuffleArray(unmastered), ...shuffleArray(mastered)].slice(0, SESSION_SIZE);
}

// Real IFoA qualification structure (not a gamified point scale): Associate
// requires every Core Principles + Core Practice subject; Fellowship
// additionally requires any 2 Specialist Principles subjects and any 1
// Specialist Advanced subject, from the candidate's choice of the full list.
const CORE_SUBJECTS = ["CB1", "CB2", "CB3", "CM1", "CM2", "CS1", "CS2", "CP1", "CP2", "CP3"];
const SP_CHOICES = ["SP1", "SP2", "SP4", "SP5", "SP6", "SP7", "SP8", "SP9"];
const SA_CHOICES = ["SA1", "SA2", "SA3", "SA4", "SA7"];

function pathFor(code) {
  return `maths-study/exams/${code}/progress.md`;
}

function renderMath(el) {
  if (window.renderMathInElement) {
    renderMathInElement(el, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
      ],
      throwOnError: false,
    });
  }
}

// Explanation panel: only ever rendered once the answer is revealed, so a
// card with no explanation looks identical to today, and a card with one
// can never leak it before the user has actually attempted the answer.
function explainPanelHtml(card, revealed, label) {
  if (!revealed || !card.explain) return "";
  return `<details class="explain-panel" open>
    <summary>${label || "Context &amp; theory"}</summary>
    <div class="explain-body">${card.explain}</div>
  </details>`;
}

function flashcardLayoutClass(card, revealed) {
  return revealed && card.explain ? "flashcard-layout has-explain" : "flashcard-layout";
}

function statusClass(status) {
  const s = status.toLowerCase();
  if (s === "done") return "done";
  if (s === "in progress") return "in-progress";
  return "not-started";
}

function parseModules(text) {
  const rows = [];
  const lines = text.split("\n");
  const rowRe = /^\|\s*(m\d+)\s*\|([^|]*)\|([^|]*)\|?\s*$/i;
  for (const line of lines) {
    const m = line.match(rowRe);
    if (m) {
      rows.push({ id: m[1].toLowerCase(), status: m[2].trim(), notes: m[3].trim() });
    }
  }
  return rows;
}

/* ---------- progress.md (module status) ---------- */

async function fetchRaw(code) {
  const url = `https://raw.githubusercontent.com/${CONFIG.owner}/${CONFIG.repo}/${CONFIG.branch}/${pathFor(code)}?t=${Date.now()}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`raw fetch failed (${res.status})`);
  return res.text();
}

// Module status baseline: read-only, unauthenticated fetch of progress.md
// from the public repo. This stays as-is (no Supabase involved) since it's
// also the file your study-session chats edit directly — it's a useful
// starting point for anyone loading the site, logged in or not. Once
// Supabase is configured and you're signed in, any status you toggle on the
// site is layered on top of this baseline and saved to your account, not
// written back to progress.md.
async function loadExam(code) {
  let baseModules = null;
  try {
    const text = await fetchRaw(code);
    baseModules = parseModules(text);
  } catch (e) {
    baseModules = null;
  }

  const overrides = await Store.loadModuleStatus(code);

  if (baseModules) {
    examData[code] = { modules: baseModules.map((m) => ({ ...m, status: overrides[m.id] || m.status })) };
  } else {
    const ids = Object.keys(overrides).sort();
    examData[code] = ids.length
      ? { modules: ids.map((id) => ({ id, status: overrides[id], notes: "" })) }
      : { modules: [], error: true };
  }
  onExamDataChanged(code);
}

function computePct(modules) {
  if (!modules.length) return 0;
  const done = modules.filter((m) => m.status.toLowerCase() === "done").length;
  return Math.round((done / modules.length) * 100);
}

function loadAll() {
  for (const code of EXAMS) loadExam(code);
}

function handleToggle(btn) {
  const code = btn.dataset.exam;
  const moduleId = btn.dataset.module;

  const current = btn.textContent.trim();
  const idx = STATUSES.findIndex((s) => s.toLowerCase() === current.toLowerCase());
  const next = STATUSES[(idx + 1) % STATUSES.length];

  const data = examData[code];
  const mod = data.modules.find((m) => m.id === moduleId);
  if (mod) mod.status = next;
  onExamDataChanged(code);

  Store.setModuleStatus(code, moduleId, next); // instant locally; syncs to your account in the background if signed in
  renderSyncStatus();
}

// Bulk status set for a whole subject at once -- e.g. an exemption or a
// past pass means every module should flip to Done (or back) in one click
// instead of toggling each module's badge individually.
function setAllModuleStatus(code, status) {
  const d = examData[code];
  if (!d || d.error) return;
  d.modules.forEach((m) => {
    m.status = status;
    Store.setModuleStatus(code, m.id, status);
  });
  onExamDataChanged(code);
  renderSyncStatus();
}

function isSubjectDone(code) {
  const d = examData[code];
  return !!d && !d.error && computePct(d.modules) === 100;
}

function fellowshipStatus() {
  const coreDone = CORE_SUBJECTS.every(isSubjectDone);
  const spRemaining = Math.max(0, 2 - SP_CHOICES.filter(isSubjectDone).length);
  const saRemaining = Math.max(0, 1 - SA_CHOICES.filter(isSubjectDone).length);
  const fellowRemaining = spRemaining + saRemaining;

  if (coreDone && fellowRemaining === 0) {
    return { label: "Fellow of the Institute", sub: "All Fellowship requirements complete" };
  }
  if (coreDone) {
    return { label: "Associate", sub: `${fellowRemaining} more subject${fellowRemaining === 1 ? "" : "s"} to Fellow` };
  }
  const coreRemaining = CORE_SUBJECTS.filter((c) => !isSubjectDone(c)).length;
  return { label: "Aspiring Actuary", sub: `${coreRemaining} more subject${coreRemaining === 1 ? "" : "s"} to Associate` };
}

/* ---------- flashcard mastery (per-card sufficient/insufficient) ---------- */

async function loadFlash(code) {
  const [mastery] = await Promise.all([Store.loadMastery(code), Store.loadSrs(code)]);
  flashData[code] = { mastery };
  // Cards starred before spaced repetition existed get a starting schedule,
  // staggered over the next week so they don't all fall due at once.
  const today = SRS.today();
  Store.seedSrsFromMastery(code, mastery, (mastered, k) => SRS.seed(mastered, k, today));
  srsData[code] = Store.getSrsCache(code);
  onFlashDataChanged(code);
}

function loadAllFlash() {
  for (const code of Object.keys(MODULES)) loadFlash(code);
}

// Every Sufficient/Insufficient tap, from any view, goes through here: the
// star, the review schedule and the session log all update together.
function recordScore(code, moduleId, idx, sufficient) {
  Store.setMastery(code, moduleId, idx, sufficient); // instant locally; syncs in the background if signed in
  const prev = (Store.getSrsCache(code)[moduleId] || {})[idx];
  Store.setSrs(code, moduleId, idx, SRS.next(prev, sufficient, SRS.today()));
  Store.recordCardReview(sufficient);
  flashData[code] = { mastery: Store.getMasteryCache(code) };
  srsData[code] = Store.getSrsCache(code);
}

function srsLabelHtml(code, moduleId, idx) {
  const st = srsData[code] && srsData[code][moduleId] && srsData[code][moduleId][idx];
  const today = SRS.today();
  const cls = SRS.isDue(st, today) ? "due" : st ? "scheduled" : "new";
  return `<span class="srs-label ${cls}">${SRS.describeDue(st, today)}</span>`;
}

function scoreCard(code, moduleId, idx, sufficient) {
  recordScore(code, moduleId, idx, sufficient);

  flashState.sessionStats.reviewed += 1;
  if (sufficient) flashState.sessionStats.mastered += 1;

  const def = (MODULES[code] || []).find((m) => m.id === moduleId);
  const seq = def ? currentSequence(code, moduleId, def) : [];
  const wasLastCard = flashState.cardIndex >= seq.length - 1;

  flashState.revealed = false;
  flashState.typed = "";
  if (wasLastCard) {
    flashState.sessionDone = true;
  } else {
    flashState.cardIndex = flashState.cardIndex + 1;
  }

  renderFlashView(code, moduleId);
  renderGameBar();
  renderSyncStatus();
}

function scoreMixedCard(code, moduleId, idx, sufficient) {
  recordScore(code, moduleId, idx, sufficient);

  mixedState.sessionStats.reviewed += 1;
  if (sufficient) mixedState.sessionStats.mastered += 1;

  const wasLastCard = mixedState.cardIndex >= mixedState.entries.length - 1;

  mixedState.revealed = false;
  mixedState.typed = "";
  if (wasLastCard) {
    mixedState.sessionDone = true;
  } else {
    mixedState.cardIndex = mixedState.cardIndex + 1;
  }

  renderMixedView(code);
  renderGameBar();
  renderSyncStatus();
}

/* ---------- AI answer feedback (optional, needs sign-in) ---------- */

// Only one card is ever on screen at a time (flash or mixed view), so a
// single shared state keyed by which card it's for is enough.
const aiGradeState = { key: "", status: "idle", result: null, error: "" };

function resetAiGradeIfStale(key) {
  if (aiGradeState.key !== key) {
    aiGradeState.key = key;
    aiGradeState.status = "idle";
    aiGradeState.result = null;
    aiGradeState.error = "";
  }
}

function userAnswerHtml(typed) {
  if (!typed || !typed.trim()) return "";
  return `<div class="flashcard-user-answer"><strong>Your answer:</strong> ${escapeHtml(typed)}</div>`;
}

function aiGradePanelHtml(typed) {
  if (!typed || !typed.trim()) return "";
  if (!Store.isConfigured() || !Store.getUser()) {
    return `<div class="ai-grade-panel hint">Sign in (gear icon) to get AI feedback on typed answers.</div>`;
  }
  if (aiGradeState.status === "idle") {
    return `<button class="btn ai-grade-btn" id="aiGradeBtn">&#10024; Get AI feedback on my answer</button>`;
  }
  if (aiGradeState.status === "loading") {
    return `<div class="ai-grade-panel loading">Grading your answer&hellip;</div>`;
  }
  if (aiGradeState.status === "error") {
    return `<div class="ai-grade-panel error">${aiGradeState.error}</div>`;
  }
  const verdict = aiGradeState.result.verdict;
  const cls = verdict === "Strong" ? "strong" : verdict === "Weak" ? "weak" : "partial";
  return `
    <div class="ai-grade-panel ${cls}">
      <span class="ai-grade-verdict">${verdict}</span>
      <span class="ai-grade-feedback">${aiGradeState.result.feedback}</span>
    </div>`;
}

function wireAiGradeButton(el, card, typed, rerender) {
  const btn = el.querySelector("#aiGradeBtn");
  if (!btn) return;
  btn.addEventListener("click", async () => {
    aiGradeState.status = "loading";
    rerender();
    try {
      aiGradeState.result = await Store.gradeAnswer({ question: card.q, modelAnswer: card.a, userAnswer: typed });
      aiGradeState.status = "done";
    } catch (e) {
      aiGradeState.status = "error";
      aiGradeState.error = (e && e.message) || "Couldn't get AI feedback right now.";
    }
    rerender();
  });
}

/* ---------- gamification ---------- */

function totalMasteredCards() {
  let total = 0;
  for (const code of Object.keys(MODULES)) {
    const fd = flashData[code];
    if (!fd || !fd.mastery) continue;
    for (const modId of Object.keys(fd.mastery)) {
      total += Object.values(fd.mastery[modId]).filter(Boolean).length;
    }
  }
  return total;
}

function formatRelativeDay(ts) {
  const days = Math.floor((Date.now() - ts) / 86400000);
  if (days <= 0) return "Today";
  if (days === 1) return "Yesterday";
  return `${days} days ago`;
}

function renderGameBar() {
  const total = totalMasteredCards();
  const status = fellowshipStatus();

  document.getElementById("starTotal").textContent = total;
  document.getElementById("rankLabel").textContent = status.label;
  document.getElementById("rankSub").textContent = status.sub;
  document.getElementById("streakValue").textContent = Store.getStreakCache().count;

  const lastSession = Store.getLastSessionCache();
  document.getElementById("lastSessionValue").textContent = lastSession ? `${lastSession.cardsReviewed} cards` : "—";
  document.getElementById("lastSessionSub").textContent = lastSession
    ? `${lastSession.cardsMastered} mastered · ${formatRelativeDay(lastSession.endedAt)}`
    : "No sessions yet";
}

/* ---------- home view ---------- */

function updateHomeCard(code) {
  const card = document.getElementById(`card-${code}`);
  if (!card) return;
  const d = examData[code];
  card.classList.remove("loading");

  const pctEl = card.querySelector(".exam-pct");
  const barEl = card.querySelector(".exam-bar-fill");

  if (!d) return;
  if (d.error) {
    pctEl.textContent = "unavailable";
    return;
  }

  const pct = computePct(d.modules);
  pctEl.textContent = `${pct}% (${d.modules.length} modules)`;
  barEl.style.width = `${pct}%`;

  const completed = pct === 100;
  const studying = !completed && d.modules.some((m) => m.status.toLowerCase() === "in progress");

  card.classList.toggle("completed", completed);
  card.classList.toggle("studying", studying);

  let ribbon = card.querySelector(".status-ribbon");
  if (completed || studying) {
    if (!ribbon) {
      ribbon = document.createElement("div");
      ribbon.className = "status-ribbon";
      card.prepend(ribbon);
    }
    ribbon.classList.toggle("completed-ribbon", completed);
    ribbon.classList.toggle("studying-ribbon", studying);
    ribbon.textContent = completed ? "Completed ✓" : "Currently studying";
  } else if (ribbon) {
    ribbon.remove();
  }
}

function buildExamGrid() {
  const grid = document.getElementById("examGrid");
  for (const code of EXAMS) {
    const info = SUBJECTS[code] || { name: "" };
    const card = document.createElement("div");
    card.className = "exam-card loading";
    card.id = `card-${code}`;
    card.innerHTML = `
      <div class="exam-card-head">
        <div class="exam-card-heading">
          <span class="exam-code">${code}</span>
          <span class="exam-name">${info.name}</span>
        </div>
        <span class="exam-pct">&hellip;</span>
      </div>
      <div class="exam-bar"><div class="exam-bar-fill"></div></div>
    `;
    card.addEventListener("click", () => navigate(`#/${code}`));
    grid.appendChild(card);
  }
}

/* ---------- subject view ---------- */

function renderSubjectView(code) {
  const el = document.getElementById("subjectView");
  const info = SUBJECTS[code] || { name: code, blurb: "" };
  const d = examData[code];
  const modDefs = MODULES[code] || [];
  const modDefMap = {};
  modDefs.forEach((m) => (modDefMap[m.id] = m));
  const fd = flashData[code];

  let modulesHtml;
  if (!d) {
    modulesHtml = `<p class="muted">Loading modules&hellip;</p>`;
  } else if (d.error) {
    modulesHtml = `<p class="muted">Could not load progress.md for ${code}.</p>`;
  } else {
    modulesHtml = `<div class="module-grid">${d.modules
      .map((mod) => {
        const def = modDefMap[mod.id];
        const title = def ? def.title : `Module ${mod.id.replace(/^m/, "")}`;
        const desc = def ? def.description : "";
        const cardCount = def ? def.cards.length : 0;
        const hasCards = cardCount > 0;
        const masteryMap = fd && fd.mastery && fd.mastery[mod.id] ? fd.mastery[mod.id] : {};
        const masteredCount = Object.values(masteryMap).filter(Boolean).length;
        const pct = hasCards ? Math.round((masteredCount / cardCount) * 100) : 0;
        const modDue = def ? moduleStats(code, def).due : 0;

        return `
        <div class="module-card ${hasCards ? "clickable" : ""}" data-module="${mod.id}">
          <div class="module-card-top">
            <span class="module-card-id">${mod.id.toUpperCase()}</span>
            <button class="status-badge ${statusClass(mod.status)}" data-exam="${code}" data-module="${mod.id}">${mod.status || "Not started"}</button>
          </div>
          <h3 class="module-card-title">${title}</h3>
          ${desc ? `<p class="module-card-desc">${desc}</p>` : `<p class="module-card-desc muted">No description yet.</p>`}
          ${
            hasCards
              ? `<div class="module-card-foot">
                   <div class="mastery-track"><div class="mastery-fill" style="width:${pct}%"></div></div>
                   <span class="mastery-label">${modDue ? `<span class="due-pill">${modDue} due</span> ` : ""}${masteredCount}/${cardCount} &#11088;</span>
                 </div>`
              : `<div class="module-card-foot muted">Flashcards coming soon</div>`
          }
        </div>`;
      })
      .join("")}</div>`;
  }

  const totalCards = modDefs.reduce((s, m) => s + m.cards.length, 0);
  const totalQuestions = (QUESTIONS[code] || []).length;
  const subjectDue = dueCards(code).length;
  const subjectWeak = weakCards(code).length;

  el.innerHTML = `
    <button class="back-link" id="backToHome">&larr; All subjects</button>
    <div class="subject-head">
      <div class="subject-code">${code}</div>
      <h2>${info.name}</h2>
      ${info.blurb ? `<p class="subject-blurb">${info.blurb}</p>` : ""}
      ${
        totalCards > 0
          ? `<div class="subject-actions">
               ${subjectDue ? `<a class="btn primary" href="${reviewHash("due", code)}">&#128197; Review ${subjectDue} due card${subjectDue === 1 ? "" : "s"}</a>` : ""}
               <button class="btn ${subjectDue ? "" : "primary"} mixed-session-btn" id="startMixed">&#128256; Mixed session &mdash; 10 random cards across all of ${code}</button>
               ${subjectWeak ? `<a class="btn" href="${reviewHash("weak", code)}">&#127919; Drill ${subjectWeak} weak card${subjectWeak === 1 ? "" : "s"}</a>` : ""}
             </div>`
          : ""
      }
      ${
        totalQuestions > 0
          ? `<button class="btn qbank-btn" id="startQbank">&#128220; Practice exam questions &mdash; ${totalQuestions} original question${totalQuestions === 1 ? "" : "s"} in the IFoA style</button>`
          : ""
      }
      <div class="exemption-row">
        <span class="exemption-hint">Already passed this exam, or have an exemption?</span>
        <button class="btn" id="markAllDone">Mark whole subject complete</button>
        <button class="btn" id="markAllReset">Reset progress</button>
      </div>
    </div>
    ${modulesHtml}
  `;

  document.getElementById("backToHome").addEventListener("click", () => navigate("#/"));

  const mixedBtn = document.getElementById("startMixed");
  if (mixedBtn) {
    mixedBtn.addEventListener("click", () => navigate(`#/${code}/mixed`));
  }

  const qbankBtn = document.getElementById("startQbank");
  if (qbankBtn) {
    qbankBtn.addEventListener("click", () => navigate(`#/${code}/questions`));
  }

  document.getElementById("markAllDone").addEventListener("click", () => {
    if (confirm(`Mark all of ${code}'s modules as Done? Use this for an exemption or a prior pass.`)) setAllModuleStatus(code, "Done");
  });
  document.getElementById("markAllReset").addEventListener("click", () => {
    if (confirm(`Reset all of ${code}'s modules back to "Not started"?`)) setAllModuleStatus(code, "Not started");
  });

  el.querySelectorAll(".status-badge").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      handleToggle(btn);
    });
  });

  el.querySelectorAll(".module-card.clickable").forEach((card) => {
    card.addEventListener("click", () => navigate(`#/${code}/${card.dataset.module}`));
  });

  renderMath(el);
}

/* ---------- session-complete summary (shared by single-module & mixed sessions) ---------- */

// options: { title, backHref, backLabel, stats: {reviewed, mastered}, overallLabel,
//            onReviewAgain(), onNewSession()|null }
function renderSessionSummary(el, options) {
  const { title, backHref, backLabel, stats, overallLabel, onReviewAgain, onNewSession } = options;

  el.innerHTML = `
    <button class="back-link" id="summaryBack">&larr; ${backLabel}</button>
    <div class="flash-session-summary">
      <div class="summary-badge">&#127881;</div>
      <h2>Session complete!</h2>
      <p class="summary-title">${title}</p>
      <p class="summary-stats">You reviewed <strong>${stats.reviewed}</strong> card${stats.reviewed === 1 ? "" : "s"}
        &mdash; <strong>${stats.mastered}</strong> marked sufficient.</p>
      <p class="summary-overall">${overallLabel}</p>
      <div class="summary-actions">
        ${onNewSession ? `<button class="btn primary" id="summaryNewSession">&#128256; New session</button>` : ""}
        <button class="btn" id="summaryReviewAgain">&#8635; Review these cards again</button>
        <button class="btn" id="summaryBackBtn">&larr; Back to ${backLabel}</button>
      </div>
    </div>`;

  document.getElementById("summaryBack").addEventListener("click", () => navigate(backHref));
  document.getElementById("summaryBackBtn").addEventListener("click", () => navigate(backHref));
  document.getElementById("summaryReviewAgain").addEventListener("click", onReviewAgain);
  const newSessionBtn = document.getElementById("summaryNewSession");
  if (newSessionBtn) newSessionBtn.addEventListener("click", onNewSession);
}

/* ---------- flashcard view ---------- */

function renderFlashView(code, moduleId) {
  const el = document.getElementById("flashView");
  const def = (MODULES[code] || []).find((m) => m.id === moduleId);

  if (!def || !def.cards.length) {
    el.innerHTML = `
      <button class="back-link" id="backToSubject">&larr; ${code}</button>
      <div class="flash-empty">
        <h2>${moduleId.toUpperCase()}</h2>
        <p>No flashcards for this module yet.</p>
      </div>`;
    document.getElementById("backToSubject").addEventListener("click", () => navigate(`#/${code}`));
    return;
  }

  const fd = flashData[code] || { mastery: {} };
  const moduleMastery = fd.mastery[moduleId] || {};
  const cards = def.cards;
  const total = cards.length;
  const masteredCount = Object.values(moduleMastery).filter(Boolean).length;

  if (flashState.sessionDone) {
    renderSessionSummary(el, {
      title: def.title,
      backHref: `#/${code}`,
      backLabel: code,
      stats: flashState.sessionStats,
      overallLabel: `${masteredCount}/${total} mastered in this module`,
      onReviewAgain: () => {
        flashState.sessionDone = false;
        flashState.sessionStats = { reviewed: 0, mastered: 0 };
        flashState.cardIndex = 0;
        flashState.revealed = false;
        flashState.typed = "";
        renderFlashView(code, moduleId);
      },
      onNewSession:
        flashState.mode === "session"
          ? () => {
              flashState.sessionDone = false;
              flashState.sessionStats = { reviewed: 0, mastered: 0 };
              flashState.sessionIndices = generateSession(code, moduleId);
              flashState.cardIndex = 0;
              flashState.revealed = false;
              flashState.typed = "";
              renderFlashView(code, moduleId);
            }
          : null,
    });
    return;
  }

  const seq = currentSequence(code, moduleId, def);
  if (flashState.cardIndex >= seq.length) flashState.cardIndex = 0;
  const pos = flashState.cardIndex;
  const realIdx = seq[pos];
  const card = cards[realIdx];
  const isMastered = !!moduleMastery[realIdx];
  resetAiGradeIfStale(`${code}:${moduleId}:${realIdx}`);

  const dots = seq
    .map((realI, i) => {
      const m = !!moduleMastery[realI];
      const active = i === pos;
      return `<button class="card-dot ${m ? "mastered" : ""} ${active ? "active" : ""}" data-idx="${i}" title="Card ${i + 1}">${m ? "&#11088;" : i + 1}</button>`;
    })
    .join("");

  el.innerHTML = `
    <button class="back-link" id="backToSubject">&larr; ${code}</button>
    <div class="flash-head">
      <div class="flash-title-row">
        <h2>${def.title}</h2>
        <span class="flash-progress">${masteredCount}/${total} mastered</span>
      </div>
      <div class="flash-progress-track"><div class="flash-progress-fill" style="width:${Math.round((masteredCount / total) * 100)}%"></div></div>
    </div>
    <div class="flash-mode-tabs">
      <button class="mode-tab ${flashState.mode === "session" ? "active" : ""}" id="tabSession">Session (${Math.min(SESSION_SIZE, total)})</button>
      <button class="mode-tab ${flashState.mode === "full" ? "active" : ""}" id="tabFull">Full deck (${total})</button>
      ${flashState.mode === "session" ? `<button class="btn shuffle-btn" id="shuffleBtn">&#128256; New session</button>` : ""}
    </div>
    <div class="card-dots">${dots}</div>
    <div class="${flashcardLayoutClass(card, flashState.revealed)}">
      <div class="flashcard ${isMastered ? "is-mastered" : ""}">
        ${isMastered ? '<div class="flashcard-star">&#11088;</div>' : ""}
        <div class="flashcard-label">Card ${pos + 1} of ${seq.length} ${srsLabelHtml(code, moduleId, realIdx)}</div>
        <div class="flashcard-question">${card.q}</div>
        ${
          !flashState.revealed
            ? `<textarea id="answerInput" class="answer-input" placeholder="Type your answer here (optional) — then reveal to check yourself.">${escapeHtml(flashState.typed)}</textarea>
               <button class="btn primary" id="revealBtn">Reveal answer</button>`
            : `${userAnswerHtml(flashState.typed)}
               <div class="flashcard-answer"><strong>Answer:</strong> ${card.a}</div>
               ${aiGradePanelHtml(flashState.typed)}
               <div class="flash-score-row">
                 <button class="btn score-btn insufficient" id="scoreBad">Insufficient</button>
                 <button class="btn score-btn sufficient" id="scoreGood">Sufficient &#11088;</button>
               </div>`
        }
      </div>
      ${explainPanelHtml(card, flashState.revealed)}
    </div>
    <div class="flash-nav">
      <button class="btn" id="prevCard" ${pos === 0 ? "disabled" : ""}>&larr; Prev</button>
      <button class="btn" id="nextCard" ${pos === seq.length - 1 ? "disabled" : ""}>Next &rarr;</button>
    </div>
  `;

  document.getElementById("backToSubject").addEventListener("click", () => navigate(`#/${code}`));

  document.getElementById("tabSession").addEventListener("click", () => {
    if (flashState.mode !== "session") {
      flashState.mode = "session";
      if (!flashState.sessionIndices.length) flashState.sessionIndices = generateSession(code, moduleId);
      flashState.cardIndex = 0;
      flashState.revealed = false;
      flashState.typed = "";
      renderFlashView(code, moduleId);
    }
  });
  document.getElementById("tabFull").addEventListener("click", () => {
    if (flashState.mode !== "full") {
      flashState.mode = "full";
      flashState.cardIndex = 0;
      flashState.revealed = false;
      flashState.typed = "";
      renderFlashView(code, moduleId);
    }
  });
  const shuffleBtn = document.getElementById("shuffleBtn");
  if (shuffleBtn) {
    shuffleBtn.addEventListener("click", () => {
      flashState.sessionIndices = generateSession(code, moduleId);
      flashState.cardIndex = 0;
      flashState.revealed = false;
      flashState.typed = "";
      renderFlashView(code, moduleId);
    });
  }

  el.querySelectorAll(".card-dot").forEach((btn) => {
    btn.addEventListener("click", () => {
      flashState.cardIndex = Number(btn.dataset.idx);
      flashState.revealed = false;
      flashState.typed = "";
      renderFlashView(code, moduleId);
    });
  });

  document.getElementById("prevCard").addEventListener("click", () => {
    flashState.cardIndex = Math.max(0, pos - 1);
    flashState.revealed = false;
    flashState.typed = "";
    renderFlashView(code, moduleId);
  });
  document.getElementById("nextCard").addEventListener("click", () => {
    flashState.cardIndex = Math.min(seq.length - 1, pos + 1);
    flashState.revealed = false;
    flashState.typed = "";
    renderFlashView(code, moduleId);
  });

  if (!flashState.revealed) {
    const ta = document.getElementById("answerInput");
    ta.addEventListener("input", () => {
      flashState.typed = ta.value;
    });
    document.getElementById("revealBtn").addEventListener("click", () => {
      flashState.revealed = true;
      renderFlashView(code, moduleId);
    });
  } else {
    document.getElementById("scoreGood").addEventListener("click", () => scoreCard(code, moduleId, realIdx, true));
    document.getElementById("scoreBad").addEventListener("click", () => scoreCard(code, moduleId, realIdx, false));
    wireAiGradeButton(el, card, flashState.typed, () => renderFlashView(code, moduleId));
  }

  renderMath(el);
}

/* ---------- mixed session view ---------- */

function renderMixedView(code) {
  const el = document.getElementById("mixedView");
  const modules = MODULES[code] || [];
  const info = SUBJECTS[code] || { name: code };

  if (!modules.length || !mixedState.entries.length) {
    el.innerHTML = `
      <button class="back-link" id="backToSubjectMixed">&larr; ${code}</button>
      <div class="flash-empty">
        <h2>Mixed session</h2>
        <p>No flashcards for ${code} yet.</p>
      </div>`;
    document.getElementById("backToSubjectMixed").addEventListener("click", () => navigate(`#/${code}`));
    return;
  }

  if (mixedState.sessionDone) {
    const { total, masteredCount } = subjectMasteryTotals(code);
    renderSessionSummary(el, {
      title: `Mixed session &mdash; ${info.name}`,
      backHref: `#/${code}`,
      backLabel: code,
      stats: mixedState.sessionStats,
      overallLabel: `${masteredCount}/${total} mastered across ${code}`,
      onReviewAgain: () => {
        mixedState.sessionDone = false;
        mixedState.sessionStats = { reviewed: 0, mastered: 0 };
        mixedState.cardIndex = 0;
        mixedState.revealed = false;
        mixedState.typed = "";
        renderMixedView(code);
      },
      onNewSession: () => {
        mixedState.sessionDone = false;
        mixedState.sessionStats = { reviewed: 0, mastered: 0 };
        mixedState.entries = generateMixedSession(code);
        mixedState.cardIndex = 0;
        mixedState.revealed = false;
        mixedState.typed = "";
        renderMixedView(code);
      },
    });
    return;
  }

  if (mixedState.cardIndex >= mixedState.entries.length) mixedState.cardIndex = 0;
  const pos = mixedState.cardIndex;
  const entry = mixedState.entries[pos];
  const def = modules.find((m) => m.id === entry.moduleId);
  const card = def.cards[entry.cardIdx];

  const fd = flashData[code] || { mastery: {} };
  const moduleMastery = (fd.mastery && fd.mastery[entry.moduleId]) || {};
  const isMastered = !!moduleMastery[entry.cardIdx];
  resetAiGradeIfStale(`mixed:${code}:${entry.moduleId}:${entry.cardIdx}`);
  const { total, masteredCount } = subjectMasteryTotals(code);

  const dots = mixedState.entries
    .map((e, i) => {
      const eMastery = (fd.mastery && fd.mastery[e.moduleId]) || {};
      const m = !!eMastery[e.cardIdx];
      const active = i === pos;
      return `<button class="card-dot ${m ? "mastered" : ""} ${active ? "active" : ""}" data-idx="${i}" title="Card ${i + 1} (${e.moduleId.toUpperCase()})">${m ? "&#11088;" : i + 1}</button>`;
    })
    .join("");

  el.innerHTML = `
    <button class="back-link" id="backToSubjectMixed">&larr; ${code}</button>
    <div class="flash-head">
      <div class="flash-title-row">
        <h2>Mixed session &mdash; ${info.name}</h2>
        <span class="flash-progress">${masteredCount}/${total} mastered</span>
      </div>
      <div class="flash-progress-track"><div class="flash-progress-fill" style="width:${Math.round((masteredCount / total) * 100)}%"></div></div>
    </div>
    <div class="flash-mode-tabs">
      <span class="mode-tab active">Session (${mixedState.entries.length})</span>
      <button class="btn shuffle-btn" id="shuffleMixedBtn">&#128256; New session</button>
    </div>
    <div class="card-dots">${dots}</div>
    <div class="${flashcardLayoutClass(card, mixedState.revealed)}">
      <div class="flashcard ${isMastered ? "is-mastered" : ""}">
        ${isMastered ? '<div class="flashcard-star">&#11088;</div>' : ""}
        <a class="flashcard-source" href="#/${code}/${entry.moduleId}">${entry.moduleId.toUpperCase()} &middot; ${def.title}</a>
        <div class="flashcard-label">Card ${pos + 1} of ${mixedState.entries.length} ${srsLabelHtml(code, entry.moduleId, entry.cardIdx)}</div>
        <div class="flashcard-question">${card.q}</div>
        ${
          !mixedState.revealed
            ? `<textarea id="answerInput" class="answer-input" placeholder="Type your answer here (optional) — then reveal to check yourself.">${escapeHtml(mixedState.typed)}</textarea>
               <button class="btn primary" id="revealBtn">Reveal answer</button>`
            : `${userAnswerHtml(mixedState.typed)}
               <div class="flashcard-answer"><strong>Answer:</strong> ${card.a}</div>
               ${aiGradePanelHtml(mixedState.typed)}
               <div class="flash-score-row">
                 <button class="btn score-btn insufficient" id="scoreBad">Insufficient</button>
                 <button class="btn score-btn sufficient" id="scoreGood">Sufficient &#11088;</button>
               </div>`
        }
      </div>
      ${explainPanelHtml(card, mixedState.revealed)}
    </div>
    <div class="flash-nav">
      <button class="btn" id="prevCard" ${pos === 0 ? "disabled" : ""}>&larr; Prev</button>
      <button class="btn" id="nextCard" ${pos === mixedState.entries.length - 1 ? "disabled" : ""}>Next &rarr;</button>
    </div>
  `;

  document.getElementById("backToSubjectMixed").addEventListener("click", () => navigate(`#/${code}`));

  document.getElementById("shuffleMixedBtn").addEventListener("click", () => {
    mixedState.entries = generateMixedSession(code);
    mixedState.cardIndex = 0;
    mixedState.revealed = false;
    mixedState.typed = "";
    renderMixedView(code);
  });

  el.querySelectorAll(".card-dot").forEach((btn) => {
    btn.addEventListener("click", () => {
      mixedState.cardIndex = Number(btn.dataset.idx);
      mixedState.revealed = false;
      mixedState.typed = "";
      renderMixedView(code);
    });
  });

  document.getElementById("prevCard").addEventListener("click", () => {
    mixedState.cardIndex = Math.max(0, pos - 1);
    mixedState.revealed = false;
    mixedState.typed = "";
    renderMixedView(code);
  });
  document.getElementById("nextCard").addEventListener("click", () => {
    mixedState.cardIndex = Math.min(mixedState.entries.length - 1, pos + 1);
    mixedState.revealed = false;
    mixedState.typed = "";
    renderMixedView(code);
  });

  if (!mixedState.revealed) {
    const ta = document.getElementById("answerInput");
    ta.addEventListener("input", () => {
      mixedState.typed = ta.value;
    });
    document.getElementById("revealBtn").addEventListener("click", () => {
      mixedState.revealed = true;
      renderMixedView(code);
    });
  } else {
    document.getElementById("scoreGood").addEventListener("click", () => scoreMixedCard(code, entry.moduleId, entry.cardIdx, true));
    document.getElementById("scoreBad").addEventListener("click", () => scoreMixedCard(code, entry.moduleId, entry.cardIdx, false));
    wireAiGradeButton(el, card, mixedState.typed, () => renderMixedView(code));
  }

  renderMath(el);
}

/* ---------- spaced repetition: due-today & weak-card review runs ---------- */

// Every scheduled card (optionally within one subject), skipping any whose
// module/card no longer exists in data.js.
function scheduledCards(scope) {
  const out = [];
  const codes = scope ? [scope] : Object.keys(MODULES);
  for (const code of codes) {
    const bySrs = srsData[code] || {};
    for (const def of MODULES[code] || []) {
      const modSrs = bySrs[def.id];
      if (!modSrs) continue;
      Object.keys(modSrs).forEach((k) => {
        const cardIdx = Number(k);
        if (cardIdx < def.cards.length && modSrs[k]) out.push({ code, moduleId: def.id, cardIdx, st: modSrs[k] });
      });
    }
  }
  return out;
}

function isMasteredEntry(e) {
  const fd = flashData[e.code];
  return !!(fd && fd.mastery && fd.mastery[e.moduleId] && fd.mastery[e.moduleId][e.cardIdx]);
}

function dueCards(scope) {
  const today = SRS.today();
  return scheduledCards(scope)
    .filter((e) => SRS.isDue(e.st, today))
    .sort((a, b) => (a.st.due < b.st.due ? -1 : a.st.due > b.st.due ? 1 : (b.st.lapses || 0) - (a.st.lapses || 0)));
}

// "Trouble" cards: missed more than once, or missed and still not starred.
function isTrouble(st, mastered) {
  const lapses = (st && st.lapses) || 0;
  return lapses >= 2 || (lapses >= 1 && !mastered);
}

function weakCards(scope) {
  return scheduledCards(scope)
    .filter((e) => isTrouble(e.st, isMasteredEntry(e)))
    .sort((a, b) => (b.st.lapses || 0) - (a.st.lapses || 0) || (a.st.ease || 0) - (b.st.ease || 0));
}

function buildReviewDeck(kind, scope) {
  const pool = kind === "weak" ? weakCards(scope) : dueCards(scope);
  // Highest-priority batch first (most overdue / most missed), shuffled within
  // the batch so subjects and modules interleave.
  return shuffleArray(pool.slice(0, REVIEW_BATCH)).map(({ code, moduleId, cardIdx }) => ({ code, moduleId, cardIdx }));
}

const reviewState = {
  key: "",
  kind: "due",
  scope: null,
  entries: [],
  cardIndex: 0,
  revealed: false,
  typed: "",
  sessionDone: false,
  sessionStats: { reviewed: 0, mastered: 0 },
};

function startReviewRun(kind, scope) {
  reviewState.kind = kind;
  reviewState.scope = scope;
  reviewState.entries = buildReviewDeck(kind, scope);
  reviewState.cardIndex = 0;
  reviewState.revealed = false;
  reviewState.typed = "";
  reviewState.sessionDone = false;
  reviewState.sessionStats = { reviewed: 0, mastered: 0 };
}

function reviewRunUntouched() {
  return reviewState.sessionStats.reviewed === 0 && reviewState.cardIndex === 0 && !reviewState.revealed;
}

function reviewHash(kind, scope) {
  return `#/${kind === "weak" ? "weak" : "review"}${scope ? `/${scope}` : ""}`;
}

function scoreReviewCard(entry, sufficient) {
  recordScore(entry.code, entry.moduleId, entry.cardIdx, sufficient);
  reviewState.sessionStats.reviewed += 1;
  if (sufficient) reviewState.sessionStats.mastered += 1;
  const wasLast = reviewState.cardIndex >= reviewState.entries.length - 1;
  reviewState.revealed = false;
  reviewState.typed = "";
  if (wasLast) reviewState.sessionDone = true;
  else reviewState.cardIndex += 1;
  renderReviewView();
  renderGameBar();
  renderDueBanner();
  renderSyncStatus();
}

function nextDueSummary(scope) {
  const today = SRS.today();
  const upcoming = scheduledCards(scope)
    .map((e) => e.st.due)
    .filter((d) => d > today)
    .sort();
  if (!upcoming.length) return "";
  const first = upcoming[0];
  const n = upcoming.filter((d) => d === first).length;
  const days = SRS.daysBetween(today, first);
  return `Next up: ${n} card${n === 1 ? "" : "s"} ${days === 1 ? "tomorrow" : `in ${days} days`}.`;
}

function renderReviewView() {
  const el = document.getElementById("reviewView");
  const { kind, scope } = reviewState;
  const scopeName = scope ? `${scope} &mdash; ${(SUBJECTS[scope] || { name: "" }).name}` : "all subjects";
  const title = kind === "weak" ? "Weak-card drill" : "Due for review";
  const backHref = scope ? `#/${scope}` : "#/";
  const backLabel = scope || "Home";

  if (reviewState.sessionDone) {
    const left = kind === "weak" ? weakCards(scope).length : dueCards(scope).length;
    renderSessionSummary(el, {
      title: `${title} &mdash; ${scopeName}`,
      backHref,
      backLabel,
      stats: reviewState.sessionStats,
      overallLabel:
        kind === "weak"
          ? `${left} weak card${left === 1 ? "" : "s"} still flagged.`
          : left
            ? `${left} more card${left === 1 ? "" : "s"} due today.`
            : `All caught up for today. ${nextDueSummary(scope)}`,
      onReviewAgain: () => {
        reviewState.sessionDone = false;
        reviewState.sessionStats = { reviewed: 0, mastered: 0 };
        reviewState.cardIndex = 0;
        reviewState.revealed = false;
        reviewState.typed = "";
        renderReviewView();
      },
      onNewSession: left
        ? () => {
            startReviewRun(kind, scope);
            renderReviewView();
          }
        : null,
    });
    return;
  }

  if (!reviewState.entries.length) {
    const msg =
      kind === "weak"
        ? `<p>No weak cards in ${scopeName} yet. Cards land here once you've marked them Insufficient &mdash; twice, or once and not yet re-starred.</p>`
        : scheduledCards(scope).length
          ? `<p>Nothing due today in ${scopeName}. &#127881; ${nextDueSummary(scope)}</p>`
          : `<p>No cards scheduled yet. Every card you score Sufficient or Insufficient gets a review date &mdash; open a module and start a session, and cards will come back here when they're due.</p>`;
    el.innerHTML = `
      <button class="back-link" id="backFromReview">&larr; ${backLabel}</button>
      <div class="flash-empty">
        <h2>${title}</h2>
        ${msg}
        <p><a href="#/dashboard">Open the study dashboard &rarr;</a></p>
      </div>`;
    document.getElementById("backFromReview").addEventListener("click", () => navigate(backHref));
    return;
  }

  if (reviewState.cardIndex >= reviewState.entries.length) reviewState.cardIndex = 0;
  const pos = reviewState.cardIndex;
  const entry = reviewState.entries[pos];
  const def = (MODULES[entry.code] || []).find((m) => m.id === entry.moduleId);
  const card = def.cards[entry.cardIdx];
  const isMastered = isMasteredEntry(entry);
  resetAiGradeIfStale(`review:${entry.code}:${entry.moduleId}:${entry.cardIdx}`);
  const remaining = (kind === "weak" ? weakCards(scope) : dueCards(scope)).length;

  const dots = reviewState.entries
    .map((e, i) => {
      const m = isMasteredEntry(e);
      return `<button class="card-dot ${m ? "mastered" : ""} ${i === pos ? "active" : ""}" data-idx="${i}" title="Card ${i + 1} (${e.code} ${e.moduleId.toUpperCase()})">${m ? "&#11088;" : i + 1}</button>`;
    })
    .join("");

  el.innerHTML = `
    <button class="back-link" id="backFromReview">&larr; ${backLabel}</button>
    <div class="flash-head">
      <div class="flash-title-row">
        <h2>${title} &mdash; ${scopeName}</h2>
        <span class="flash-progress">${remaining} ${kind === "weak" ? "flagged" : "due"}</span>
      </div>
    </div>
    <div class="card-dots">${dots}</div>
    <div class="${flashcardLayoutClass(card, reviewState.revealed)}">
      <div class="flashcard ${isMastered ? "is-mastered" : ""}">
        ${isMastered ? '<div class="flashcard-star">&#11088;</div>' : ""}
        <a class="flashcard-source" href="#/${entry.code}/${entry.moduleId}">${entry.code} &middot; ${entry.moduleId.toUpperCase()} &middot; ${def.title}</a>
        <div class="flashcard-label">Card ${pos + 1} of ${reviewState.entries.length} ${srsLabelHtml(entry.code, entry.moduleId, entry.cardIdx)}</div>
        <div class="flashcard-question">${card.q}</div>
        ${
          !reviewState.revealed
            ? `<textarea id="answerInput" class="answer-input" placeholder="Type your answer here (optional) — then reveal to check yourself.">${escapeHtml(reviewState.typed)}</textarea>
               <button class="btn primary" id="revealBtn">Reveal answer</button>`
            : `${userAnswerHtml(reviewState.typed)}
               <div class="flashcard-answer"><strong>Answer:</strong> ${card.a}</div>
               ${aiGradePanelHtml(reviewState.typed)}
               <div class="flash-score-row">
                 <button class="btn score-btn insufficient" id="scoreBad">Insufficient</button>
                 <button class="btn score-btn sufficient" id="scoreGood">Sufficient &#11088;</button>
               </div>`
        }
      </div>
      ${explainPanelHtml(card, reviewState.revealed)}
    </div>
    <div class="flash-nav">
      <button class="btn" id="prevCard" ${pos === 0 ? "disabled" : ""}>&larr; Prev</button>
      <button class="btn" id="nextCard" ${pos === reviewState.entries.length - 1 ? "disabled" : ""}>Next &rarr;</button>
    </div>
  `;

  document.getElementById("backFromReview").addEventListener("click", () => navigate(backHref));
  const go = (i) => {
    reviewState.cardIndex = i;
    reviewState.revealed = false;
    reviewState.typed = "";
    renderReviewView();
  };
  el.querySelectorAll(".card-dot").forEach((btn) => btn.addEventListener("click", () => go(Number(btn.dataset.idx))));
  document.getElementById("prevCard").addEventListener("click", () => go(Math.max(0, pos - 1)));
  document.getElementById("nextCard").addEventListener("click", () => go(Math.min(reviewState.entries.length - 1, pos + 1)));

  if (!reviewState.revealed) {
    const ta = document.getElementById("answerInput");
    ta.addEventListener("input", () => {
      reviewState.typed = ta.value;
    });
    document.getElementById("revealBtn").addEventListener("click", () => {
      reviewState.revealed = true;
      renderReviewView();
    });
  } else {
    document.getElementById("scoreGood").addEventListener("click", () => scoreReviewCard(entry, true));
    document.getElementById("scoreBad").addEventListener("click", () => scoreReviewCard(entry, false));
    wireAiGradeButton(el, card, reviewState.typed, () => renderReviewView());
  }

  renderMath(el);
}

// Home-page entry point: "N cards due today" with a one-click start.
function renderDueBanner() {
  const el = document.getElementById("dueBanner");
  if (!el) return;
  const due = dueCards(null);
  const scheduled = scheduledCards(null).length;
  if (due.length) {
    const bySubject = {};
    due.forEach((e) => (bySubject[e.code] = (bySubject[e.code] || 0) + 1));
    const breakdown = Object.keys(bySubject)
      .sort((a, b) => bySubject[b] - bySubject[a])
      .map((c) => `<a href="${reviewHash("due", c)}">${c}&nbsp;${bySubject[c]}</a>`)
      .join(" &middot; ");
    el.innerHTML = `
      <div class="due-banner-text">
        <strong>&#128197; ${due.length} card${due.length === 1 ? "" : "s"} due for review today</strong>
        <span class="due-banner-sub">${breakdown}</span>
      </div>
      <div class="due-banner-actions">
        <a class="btn primary" href="#/review">Review due cards${due.length > REVIEW_BATCH ? ` (${REVIEW_BATCH} at a time)` : ""}</a>
        <a class="btn" href="#/dashboard">Dashboard</a>
      </div>`;
  } else {
    el.innerHTML = `
      <div class="due-banner-text">
        <strong>&#128197; ${scheduled ? "Nothing due today &#127881;" : "Spaced repetition"}</strong>
        <span class="due-banner-sub">${
          scheduled
            ? nextDueSummary(null)
            : "Cards you score in any module get a review date and come back here when they're due."
        }</span>
      </div>
      <div class="due-banner-actions"><a class="btn" href="#/dashboard">Dashboard</a></div>`;
  }
  el.classList.toggle("has-due", due.length > 0);
}

/* ---------- study dashboard ---------- */

let activityData = null; // { "YYYY-MM-DD": cardsReviewed } — merged local + session_log

function studyStreak(activity) {
  let day = SRS.today();
  if (!activity[day]) day = SRS.addDays(day, -1); // not studied yet today doesn't break the streak
  let n = 0;
  while (activity[day]) {
    n++;
    day = SRS.addDays(day, -1);
  }
  return n;
}

function moduleStats(code, def) {
  const fd = flashData[code];
  const mastery = (fd && fd.mastery && fd.mastery[def.id]) || {};
  const modSrs = (srsData[code] && srsData[code][def.id]) || {};
  const today = SRS.today();
  const s = { code, def, total: def.cards.length, mastered: 0, seen: 0, due: 0, lapses: 0, reviews: 0, trouble: 0 };
  for (let i = 0; i < def.cards.length; i++) {
    if (mastery[i]) s.mastered++;
    const st = modSrs[i];
    if (!st) continue;
    s.seen++;
    if (SRS.isDue(st, today)) s.due++;
    s.lapses += st.lapses || 0;
    s.reviews += st.reviews || 0;
    if (isTrouble(st, !!mastery[i])) s.trouble++;
  }
  return s;
}

function pctOf(n, d) {
  return d ? Math.round((n / d) * 100) : 0;
}

function barHtml(pct, cls) {
  return `<div class="dash-bar ${cls || ""}"><div class="dash-bar-fill" style="width:${pct}%"></div></div>`;
}

function stripHtml(html) {
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || "";
}

function renderDashboardView() {
  const el = document.getElementById("dashboardView");
  const today = SRS.today();
  const activity = activityData || Store.getActivityCache();

  const subjects = Object.keys(MODULES).map((code) => {
    const mods = MODULES[code].map((def) => moduleStats(code, def));
    const sum = (k) => mods.reduce((a, m) => a + m[k], 0);
    return {
      code,
      mods,
      total: sum("total"),
      mastered: sum("mastered"),
      seen: sum("seen"),
      due: sum("due"),
      lapses: sum("lapses"),
      reviews: sum("reviews"),
      trouble: sum("trouble"),
    };
  });
  const active = subjects.filter((s) => s.seen || s.mastered).sort((a, b) => b.seen - a.seen);
  const inactive = subjects.filter((s) => !s.seen && !s.mastered);
  const allMods = subjects.flatMap((s) => s.mods);

  const totalDue = subjects.reduce((a, s) => a + s.due, 0);
  const streak = studyStreak(activity);
  let week = 0;
  for (let i = 0; i < 7; i++) week += activity[SRS.addDays(today, -i)] || 0;
  const masteredAll = subjects.reduce((a, s) => a + s.mastered, 0);
  const cardsInStudied = active.reduce((a, s) => a + s.total, 0);

  // Upcoming review load: overdue folds into today.
  const scheduled = scheduledCards(null);
  const upcoming = [];
  for (let i = 0; i < 14; i++) {
    const d = SRS.addDays(today, i);
    upcoming.push({ d, n: scheduled.filter((e) => (i === 0 ? e.st.due <= d : e.st.due === d)).length });
  }
  const upMax = Math.max(1, ...upcoming.map((u) => u.n));
  const dayName = (d, i) =>
    i === 0 ? "Today" : i === 1 ? "Tmrw" : new Date(`${d}T12:00:00`).toLocaleDateString(undefined, { weekday: "short" });
  const upcomingHtml = upcoming
    .map(
      (u, i) => `
      <div class="dash-col" title="${u.n} card${u.n === 1 ? "" : "s"} due ${i === 0 ? "today (incl. overdue)" : u.d}">
        <span class="dash-col-val">${u.n || ""}</span>
        <div class="dash-col-bar"><div class="dash-col-fill" style="height:${Math.round((u.n / upMax) * 100)}%"></div></div>
        <span class="dash-col-lbl">${dayName(u.d, i)}</span>
      </div>`
    )
    .join("");

  // Last 12 weeks of activity, one square per day, darker = more cards.
  const days = 84;
  const actMax = Math.max(1, ...Object.values(activity));
  const heat = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = SRS.addDays(today, -i);
    const n = activity[d] || 0;
    const lvl = n === 0 ? 0 : Math.min(4, 1 + Math.floor((n / actMax) * 3.999));
    heat.push(`<span class="heat-cell l${lvl}" title="${d}: ${n} card${n === 1 ? "" : "s"} reviewed"></span>`);
  }

  // Weak areas: modules ranked by misses; share = misses / reviews.
  const weakMods = allMods
    .filter((m) => m.lapses > 0)
    .sort((a, b) => b.lapses - a.lapses || b.lapses / b.reviews - a.lapses / a.reviews)
    .slice(0, 8);
  const weakModsHtml = weakMods.length
    ? `<div class="dash-table">${weakMods
        .map((m) => {
          const rate = pctOf(m.lapses, m.reviews);
          return `
          <a class="dash-row" href="#/${m.code}/${m.def.id}">
            <span class="dash-row-name"><span class="dash-tag">${m.code} ${m.def.id.toUpperCase()}</span> ${m.def.title}</span>
            <span class="dash-row-meta">${m.lapses} miss${m.lapses === 1 ? "" : "es"} &middot; ${m.trouble} trouble card${m.trouble === 1 ? "" : "s"}</span>
            <span class="dash-row-bar" title="${rate}% of this module's reviews were marked Insufficient">${barHtml(rate, "weak")}<span class="dash-row-pct">${rate}%</span></span>
          </a>`;
        })
        .join("")}</div>`
    : `<p class="muted">Nothing flagged yet. Modules show up here once you've marked some of their cards Insufficient.</p>`;

  const trouble = weakCards(null).slice(0, 10);
  const troubleHtml = trouble.length
    ? `<ol class="trouble-list">${trouble
        .map((e) => {
          const def = MODULES[e.code].find((m) => m.id === e.moduleId);
          const q = stripHtml(def.cards[e.cardIdx].q);
          return `<li><a href="#/${e.code}/${e.moduleId}"><span class="dash-tag">${e.code} ${e.moduleId.toUpperCase()}</span>
            <span class="trouble-q">${escapeHtml(q)}</span></a>
            <span class="trouble-meta">missed ${e.st.lapses}&times; &middot; ${SRS.describeDue(e.st, today).toLowerCase()}</span></li>`;
        })
        .join("")}</ol>`
    : "";

  const subjectRow = (s) => `
    <details class="dash-subject">
      <summary>
        <span class="dash-subject-name"><strong>${s.code}</strong> ${(SUBJECTS[s.code] || { name: "" }).name}</span>
        <span class="dash-subject-meta">${s.mastered}/${s.total} &#11088; &middot; ${s.due} due${s.lapses ? ` &middot; ${s.lapses} misses` : ""}</span>
        ${barHtml(pctOf(s.mastered, s.total))}
      </summary>
      <div class="dash-subject-actions">
        <a class="btn" href="#/${s.code}">Open ${s.code}</a>
        ${s.due ? `<a class="btn primary" href="${reviewHash("due", s.code)}">Review ${s.due} due</a>` : ""}
        ${s.trouble ? `<a class="btn" href="${reviewHash("weak", s.code)}">Drill ${s.trouble} weak</a>` : ""}
      </div>
      <div class="dash-table">${s.mods
        .map(
          (m) => `
        <a class="dash-row" href="#/${s.code}/${m.def.id}">
          <span class="dash-row-name"><span class="dash-tag">${m.def.id.toUpperCase()}</span> ${m.def.title}</span>
          <span class="dash-row-meta">${m.due ? `<span class="due-pill">${m.due} due</span> ` : ""}${m.lapses ? `${m.lapses} miss${m.lapses === 1 ? "" : "es"}` : m.seen ? "" : "not started"}</span>
          <span class="dash-row-bar" title="${m.mastered} of ${m.total} cards starred">${barHtml(pctOf(m.mastered, m.total))}<span class="dash-row-pct">${m.mastered}/${m.total}</span></span>
        </a>`
        )
        .join("")}</div>
    </details>`;

  el.innerHTML = `
    <button class="back-link" id="backFromDash">&larr; All subjects</button>
    <div class="subject-head">
      <h2>Study dashboard</h2>
      <p class="subject-blurb">What's due, where you keep slipping, and mastery by subject and module.${
        Store.isConfigured() && Store.getUser() ? "" : " Showing this device's data &mdash; sign in to combine devices."
      }</p>
    </div>

    <section class="game-bar dash-tiles">
      <a class="game-stat" href="#/review">
        <span class="game-stat-icon">&#128197;</span>
        <span class="game-stat-value">${totalDue}</span>
        <span class="game-stat-label">cards due today</span>
      </a>
      <div class="game-stat" title="Consecutive days on which you've scored at least one card">
        <span class="game-stat-icon">&#128293;</span>
        <span class="game-stat-value">${streak}</span>
        <span class="game-stat-label">day study streak</span>
      </div>
      <div class="game-stat">
        <span class="game-stat-icon">&#128202;</span>
        <span class="game-stat-value">${week}</span>
        <span class="game-stat-label">cards reviewed, last 7 days</span>
      </div>
      <div class="game-stat">
        <span class="game-stat-icon">&#11088;</span>
        <span class="game-stat-value">${masteredAll}</span>
        <span class="game-stat-label">${cardsInStudied ? `of ${cardsInStudied} starred in subjects you've started` : "cards starred"}</span>
      </div>
    </section>

    <section class="dash-section">
      <div class="dash-section-head">
        <h3>Weak areas</h3>
        ${trouble.length ? `<a class="btn primary" href="#/weak">Drill weak cards</a>` : ""}
      </div>
      <p class="dash-note">Modules ranked by how often you've marked their cards Insufficient; the bar is the share of that module's reviews that were misses. A card counts as a trouble card once it's been missed twice, or missed and not yet re-starred.</p>
      ${weakModsHtml}
      ${trouble.length ? `<h4 class="dash-sub">Most-missed cards</h4>${troubleHtml}` : ""}
    </section>

    <section class="dash-section">
      <div class="dash-section-head"><h3>Review forecast &mdash; next 14 days</h3></div>
      <div class="dash-cols">${upcomingHtml}</div>
    </section>

    <section class="dash-section">
      <div class="dash-section-head"><h3>Activity &mdash; last 12 weeks</h3></div>
      <div class="heat-grid">${heat.join("")}</div>
      <div class="heat-legend">Less <span class="heat-cell l0"></span><span class="heat-cell l1"></span><span class="heat-cell l2"></span><span class="heat-cell l3"></span><span class="heat-cell l4"></span> More</div>
    </section>

    <section class="dash-section">
      <div class="dash-section-head"><h3>Mastery by subject</h3></div>
      ${active.length ? active.map(subjectRow).join("") : `<p class="muted">No cards scored yet.</p>`}
      ${
        inactive.length
          ? `<details class="dash-subject dash-inactive"><summary><span class="dash-subject-name">Not started yet (${inactive.length})</span><span class="dash-subject-meta">${inactive
              .map((s) => s.code)
              .join(", ")}</span></summary>${inactive.map(subjectRow).join("")}</details>`
          : ""
      }
    </section>
  `;

  document.getElementById("backFromDash").addEventListener("click", () => navigate("#/"));
  renderMath(el);
}

function refreshDashboardActivity() {
  Store.loadActivity().then((a) => {
    activityData = a;
    if (parseHash().view === "dashboard") renderDashboardView();
  });
}

/* ---------- search across every card and practice question ---------- */

let searchIndex = null; // built on first use: cards and question parts, lower-cased once
const searchState = { q: "", exam: "" };

function plainText(html) {
  return String(html || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&pound;/g, "£")
    .replace(/&[a-z]+;|&#\d+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildSearchIndex() {
  const items = [];
  for (const code of Object.keys(MODULES)) {
    for (const def of MODULES[code]) {
      const title = plainText(def.title);
      def.cards.forEach((c, i) => {
        const q = plainText(c.q);
        const a = plainText(c.a);
        const e = plainText(c.explain);
        items.push({
          kind: "card",
          code,
          href: `#/${code}/${def.id}/${i}`,
          label: `${code} · ${def.id.toUpperCase()} · ${title}`,
          title,
          q,
          a,
          e,
          lq: q.toLowerCase(),
          la: a.toLowerCase(),
          le: e.toLowerCase(),
          lt: title.toLowerCase(),
        });
      });
    }
  }
  for (const code of Object.keys(QUESTIONS)) {
    QUESTIONS[code].forEach((qq, qi) => {
      const title = plainText(qq.title);
      qq.parts.forEach((p) => {
        const q = plainText(p.question);
        const a = plainText(p.answer);
        const e = plainText(p.note);
        items.push({
          kind: "question",
          code,
          href: `#/${code}/questions/${qi}`,
          label: `${code} · Practice Q${qi + 1} ${p.label} · ${title}`,
          title,
          q,
          a,
          e,
          lq: q.toLowerCase(),
          la: a.toLowerCase(),
          le: e.toLowerCase(),
          lt: title.toLowerCase(),
        });
      });
    });
  }
  return items;
}

function searchTokens(query) {
  return query
    .toLowerCase()
    .split(/[\s,;]+/)
    .map((t) => t.replace(/^["']|["']$/g, ""))
    .filter((t) => t.length >= 2 || /^\d$/.test(t));
}

function runSearch(query, exam) {
  const tokens = searchTokens(query);
  if (!tokens.length) return { tokens, results: [], total: 0 };
  if (!searchIndex) searchIndex = buildSearchIndex();
  const phrase = query.trim().toLowerCase();
  const scored = [];
  for (const it of searchIndex) {
    if (exam && it.code !== exam) continue;
    let score = 0;
    let ok = true;
    for (const t of tokens) {
      let s = 0;
      if (it.lq.includes(t)) s += 4;
      if (it.lt.includes(t)) s += 2;
      if (it.la.includes(t)) s += 2;
      if (it.le.includes(t)) s += 1;
      if (!s) {
        ok = false;
        break;
      }
      score += s;
    }
    if (!ok) continue;
    if (tokens.length > 1) {
      if (it.lq.includes(phrase)) score += 6;
      else if (it.la.includes(phrase) || it.le.includes(phrase)) score += 3;
    }
    if (it.kind === "card") score += 3; // concept lookups: cards before practice-question parts
    scored.push([score, it]);
  }
  scored.sort((a, b) => b[0] - a[0]);
  return { tokens, results: scored.slice(0, 60).map((x) => x[1]), total: scored.length };
}

// Escape, then wrap matches in <mark> — but only outside $...$ maths spans so
// highlighting can't break LaTeX.
function highlightText(text, tokens) {
  const re = tokens.length ? new RegExp(`(${tokens.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi") : null;
  return text
    .split(/(\$[^$]*\$)/)
    .map((seg, i) => {
      if (i % 2 === 1) return escapeHtml(seg);
      const esc = escapeHtml(seg);
      return re ? esc.replace(re, "<mark>$1</mark>") : esc;
    })
    .join("");
}

// A short excerpt of `text` around the first token match.
function excerpt(text, tokens, len) {
  const lower = text.toLowerCase();
  let pos = -1;
  for (const t of tokens) {
    const p = lower.indexOf(t);
    if (p >= 0 && (pos < 0 || p < pos)) pos = p;
  }
  if (text.length <= len) return text;
  let start = Math.max(0, (pos < 0 ? 0 : pos) - 40);
  // don't start or end inside a maths span
  const before = text.slice(0, start);
  if ((before.match(/\$/g) || []).length % 2 === 1) start = before.lastIndexOf("$");
  let out = text.slice(start, start + len);
  if ((out.match(/\$/g) || []).length % 2 === 1) out = out.slice(0, out.lastIndexOf("$"));
  return (start > 0 ? "… " : "") + out + (start + len < text.length ? " …" : "");
}

function renderSearchResults() {
  const el = document.getElementById("searchResults");
  if (!el) return;
  const { tokens, results, total } = runSearch(searchState.q, searchState.exam);
  if (!tokens.length) {
    el.innerHTML = `<p class="muted">Type at least two letters. Every word must appear somewhere in the card or question; matches in the question rank highest.</p>`;
    return;
  }
  if (!results.length) {
    el.innerHTML = `<p class="muted">No cards or questions match &ldquo;${escapeHtml(searchState.q)}&rdquo;${searchState.exam ? ` in ${searchState.exam}` : ""}.</p>`;
    return;
  }
  el.innerHTML =
    `<p class="muted search-count">${total > results.length ? `Showing the best ${results.length} of ${total} matches` : `${total} match${total === 1 ? "" : "es"}`}</p>` +
    results
      .map((it) => {
        const where = tokens.some((t) => it.lq.includes(t)) ? null : tokens.some((t) => it.la.includes(t)) ? ["Answer", it.a] : ["Explanation", it.e];
        return `
        <a class="search-result" href="${it.href}">
          <span class="search-result-label">${escapeHtml(it.label)}</span>
          <span class="search-result-q">${highlightText(excerpt(it.q, tokens, 220), tokens)}</span>
          ${where ? `<span class="search-result-hit"><strong>${where[0]}:</strong> ${highlightText(excerpt(where[1], tokens, 200), tokens)}</span>` : ""}
        </a>`;
      })
      .join("");
  renderMath(el);
}

function renderSearchView(q) {
  const el = document.getElementById("searchView");
  if (typeof q === "string") searchState.q = q;
  const codes = Object.keys(MODULES).sort();
  el.innerHTML = `
    <button class="back-link" id="backFromSearch">&larr; Home</button>
    <div class="subject-head">
      <h2>Search</h2>
      <p class="subject-blurb">Find a concept across every flashcard and practice question, without needing to remember which module it lives in.</p>
    </div>
    <div class="search-bar">
      <input id="searchInput" class="text-input" type="search" placeholder="e.g. tracking error, Bornhuetter, section 75" value="${escapeHtml(searchState.q)}" autocomplete="off">
      <select id="searchExam" class="text-input search-exam" aria-label="Limit to subject">
        <option value="">All subjects</option>
        ${codes.map((c) => `<option value="${c}" ${c === searchState.exam ? "selected" : ""}>${c}</option>`).join("")}
      </select>
    </div>
    <div id="searchResults"></div>`;
  document.getElementById("backFromSearch").addEventListener("click", () => navigate("#/"));
  const input = document.getElementById("searchInput");
  let timer = null;
  input.addEventListener("input", () => {
    searchState.q = input.value;
    clearTimeout(timer);
    timer = setTimeout(() => {
      renderSearchResults();
      // keep the URL shareable/back-button friendly without re-rendering the view
      history.replaceState(null, "", `#/search?q=${encodeURIComponent(searchState.q)}`);
    }, 150);
  });
  document.getElementById("searchExam").addEventListener("change", (e) => {
    searchState.exam = e.target.value;
    renderSearchResults();
  });
  renderSearchResults();
  input.focus();
}

/* ---------- data-change hooks ---------- */

function onExamDataChanged(code) {
  updateHomeCard(code);
  renderGameBar();
  const r = parseHash();
  if (r.view === "subject" && r.exam === code) renderSubjectView(code);
  if (r.view === "flash" && r.exam === code) renderFlashView(code, r.module);
}

function onFlashDataChanged(code) {
  renderGameBar();
  renderDueBanner();
  const r = parseHash();
  if (r.view === "subject" && r.exam === code) renderSubjectView(code);
  if (r.view === "flash" && r.exam === code) renderFlashView(code, r.module);
  if (r.view === "mixed" && r.exam === code) renderMixedView(code);
  if (r.view === "dashboard") renderDashboardView();
  if (r.view === "review" && (!r.exam || r.exam === code) && reviewRunUntouched() && !reviewState.sessionDone) {
    // Subjects' schedules load asynchronously — if the run hasn't started yet,
    // rebuild it so cards from subjects that just finished loading are included.
    startReviewRun(r.kind, r.exam);
    renderReviewView();
  }
}

/* ---------- routing ---------- */

function parseHash() {
  const h = location.hash.replace(/^#\/?/, "");
  if (!h) return { view: "home" };
  const parts = h.split("/").filter(Boolean);
  const first = parts[0].toLowerCase();
  if (first === "dashboard") return { view: "dashboard" };
  if (first.startsWith("search")) {
    const m = h.match(/[?&]q=([^&]*)/);
    let q = "";
    try {
      q = m ? decodeURIComponent(m[1]) : "";
    } catch {
      q = m ? m[1] : "";
    }
    return { view: "search", q };
  }
  if (first === "review" || first === "weak") {
    return { view: "review", kind: first === "weak" ? "weak" : "due", exam: parts[1] ? parts[1].toUpperCase() : null };
  }
  if (parts.length === 1) return { view: "subject", exam: parts[0].toUpperCase() };
  if (parts[1].toLowerCase() === "mixed") return { view: "mixed", exam: parts[0].toUpperCase() };
  // optional third segment deep-links to a specific question / card (used by search)
  const idx = /^\d+$/.test(parts[2] || "") ? Number(parts[2]) : null;
  if (parts[1].toLowerCase() === "questions") return { view: "questions", exam: parts[0].toUpperCase(), index: idx };
  return { view: "flash", exam: parts[0].toUpperCase(), module: parts[1].toLowerCase(), index: idx };
}

function navigate(hash) {
  location.hash = hash;
}

function renderRoute() {
  const r = parseHash();
  document.getElementById("homeView").hidden = r.view !== "home";
  document.getElementById("subjectView").hidden = r.view !== "subject";
  document.getElementById("flashView").hidden = r.view !== "flash";
  document.getElementById("mixedView").hidden = r.view !== "mixed";
  document.getElementById("questionsView").hidden = r.view !== "questions";
  document.getElementById("reviewView").hidden = r.view !== "review";
  document.getElementById("dashboardView").hidden = r.view !== "dashboard";
  document.getElementById("searchView").hidden = r.view !== "search";
  document.getElementById("kbdHint").hidden = !["flash", "mixed", "review", "questions"].includes(r.view);
  window.scrollTo(0, 0);

  if (r.view === "home") {
    renderGameBar();
    renderDueBanner();
  } else if (r.view === "review") {
    const key = `${r.kind}:${r.exam || "all"}`;
    if (reviewState.key !== key || reviewState.sessionDone) {
      startReviewRun(r.kind, r.exam);
      reviewState.key = key;
    }
    renderReviewView();
  } else if (r.view === "search") {
    renderSearchView(r.q);
  } else if (r.view === "dashboard") {
    renderDashboardView();
    refreshDashboardActivity();
  } else if (r.view === "subject") {
    renderSubjectView(r.exam);
  } else if (r.view === "flash") {
    const key = `${r.exam}/${r.module}/${r.index === null ? "" : r.index}`;
    if (flashState._lastKey !== key) {
      flashState.cardIndex = 0;
      flashState.revealed = false;
      flashState.typed = "";
      flashState.mode = "session";
      flashState.sessionIndices = generateSession(r.exam, r.module);
      flashState.sessionDone = false;
      flashState.sessionStats = { reviewed: 0, mastered: 0 };
      if (r.index !== null) {
        // deep link to one card: open the full deck at that card
        flashState.mode = "full";
        flashState.cardIndex = r.index;
      }
      flashState._lastKey = key;
    }
    renderFlashView(r.exam, r.module);
  } else if (r.view === "mixed") {
    const key = `mixed:${r.exam}`;
    if (mixedState._lastKey !== key) {
      mixedState.cardIndex = 0;
      mixedState.revealed = false;
      mixedState.typed = "";
      mixedState.entries = generateMixedSession(r.exam);
      mixedState._lastKey = key;
    }
    renderMixedView(r.exam);
  } else if (r.view === "questions") {
    const key = `questions:${r.exam}:${r.index === null ? "" : r.index}`;
    if (qbankState._lastKey !== key) {
      qbankState.qIndex = r.index === null ? 0 : r.index;
      qbankState.revealed = false;
      qbankState._lastKey = key;
    }
    renderQuestionsView(r.exam);
  }
}

/* ---------- account panel (Supabase auth) ---------- */

function openSettings() {
  document.getElementById("settingsPanel").hidden = false;
  renderAuthPanel();
}

function closeSettings() {
  document.getElementById("settingsPanel").hidden = true;
  hideAuthMessage();
}

function renderAuthPanel() {
  const unconfigured = document.getElementById("authUnconfigured");
  const signedOut = document.getElementById("authSignedOut");
  const signedIn = document.getElementById("authSignedIn");

  if (!Store.isConfigured()) {
    unconfigured.hidden = false;
    signedOut.hidden = true;
    signedIn.hidden = true;
    return;
  }
  unconfigured.hidden = true;

  const user = Store.getUser();
  signedOut.hidden = !!user;
  signedIn.hidden = !user;

  if (user) {
    document.getElementById("authEmailLabel").textContent = user.email || "(no email)";
    const pending = Store.pendingCount();
    document.getElementById("syncDetail").textContent =
      (pending > 0 ? `${pending} change${pending === 1 ? "" : "s"} waiting to sync.` : "All changes saved.") +
      (Store.isSrsTableMissing()
        ? " Review schedules are saved on this device only until supabase/migrations/002_spaced_repetition.sql is run on the Supabase project (see supabase/SETUP.md)."
        : "");
  }
}

function showAuthMessage(msg, isError) {
  const el = document.getElementById("authError");
  el.textContent = msg;
  el.hidden = false;
  el.classList.toggle("is-error", !!isError);
}

function hideAuthMessage() {
  document.getElementById("authError").hidden = true;
}

function renderSyncStatus() {
  const el = document.getElementById("syncStatus");
  if (!Store.isConfigured()) {
    el.hidden = true;
    return;
  }
  el.hidden = false;
  const user = Store.getUser();
  if (!user) {
    el.textContent = "Local only";
    el.className = "sync-status local";
  } else {
    const pending = Store.pendingCount();
    if (pending > 0) {
      el.textContent = `Syncing… (${pending})`;
      el.className = "sync-status syncing";
    } else {
      el.textContent = "Synced";
      el.className = "sync-status synced";
    }
  }
  if (!document.getElementById("settingsPanel").hidden) renderAuthPanel();
}

function reloadAllForAuthChange() {
  activityData = null;
  reviewState.key = "";
  loadAll();
  loadAllFlash();
  Store.loadStreak().then(() => renderGameBar());
}

function initAuthUI() {
  document.getElementById("settingsBtn").addEventListener("click", openSettings);
  document.getElementById("closeSettings").addEventListener("click", closeSettings);
  document.getElementById("settingsPanel").addEventListener("click", (e) => {
    if (e.target.id === "settingsPanel") closeSettings();
  });

  document.getElementById("signInBtn").addEventListener("click", async () => {
    hideAuthMessage();
    const email = document.getElementById("authEmail").value.trim();
    const password = document.getElementById("authPassword").value;
    if (!email || !password) {
      showAuthMessage("Enter an email and password.", true);
      return;
    }
    try {
      await Store.signIn(email, password);
      document.getElementById("authPassword").value = "";
      closeSettings();
    } catch (e) {
      showAuthMessage(e.message || "Could not sign in.", true);
    }
  });

  document.getElementById("signUpBtn").addEventListener("click", async () => {
    hideAuthMessage();
    const email = document.getElementById("authEmail").value.trim();
    const password = document.getElementById("authPassword").value;
    if (!email || !password) {
      showAuthMessage("Enter an email and password.", true);
      return;
    }
    if (password.length < 6) {
      showAuthMessage("Password must be at least 6 characters.", true);
      return;
    }
    try {
      await Store.signUp(email, password);
      showAuthMessage("Account created. Check your email to confirm it, then sign in (unless confirmation is turned off).", false);
    } catch (e) {
      showAuthMessage(e.message || "Could not create account.", true);
    }
  });

  document.getElementById("signOutBtn").addEventListener("click", async () => {
    await Store.signOut();
    closeSettings();
  });

  Store.onAuthChange(() => {
    renderAuthPanel();
    renderSyncStatus();
    reloadAllForAuthChange();
  });
  Store.onSyncChange(renderSyncStatus);
}

/* ---------- theme toggle ---------- */

function currentTheme() {
  const stored = document.documentElement.getAttribute("data-theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function renderThemeToggleBtn() {
  const btn = document.getElementById("themeToggleBtn");
  const isDark = currentTheme() === "dark";
  // Icon shows the theme a click would switch TO, matching common toggle conventions.
  btn.textContent = isDark ? "☀️" : "\u{1F319}";
  btn.title = isDark ? "Switch to light theme" : "Switch to dark theme";
}

function initThemeToggle() {
  renderThemeToggleBtn();
  document.getElementById("themeToggleBtn").addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      /* localStorage unavailable -- theme still applies for this page load */
    }
    renderThemeToggleBtn();
  });
}

/* ---------- init ---------- */

buildExamGrid();
initAuthUI();
initThemeToggle();
/* ---------- keyboard shortcuts ---------- */
//
// On any card view: Space/Enter reveal, 1 = Insufficient, 2 = Sufficient,
// Left/Right previous/next. On the question bank: Space/Enter reveals the
// model answers, Left/Right change question. Ignored while typing in a text
// box (Ctrl/Cmd+Enter there reveals, so you can type an answer then reveal
// without reaching for the mouse) and when a modifier key is held.
function clickIfEnabled(id) {
  const el = document.getElementById(id);
  if (el && !el.disabled && el.offsetParent !== null) {
    el.click();
    return true;
  }
  return false;
}

document.addEventListener("keydown", (e) => {
  if (e.altKey || e.metaKey && e.key !== "Enter") return;
  if (e.key === "/" && !e.ctrlKey && !/^(INPUT|TEXTAREA|SELECT)$/.test((e.target && e.target.tagName) || "")) {
    e.preventDefault();
    navigate("#/search");
    return;
  }
  if (!document.getElementById("settingsPanel").hidden) return;
  const typing = /^(INPUT|TEXTAREA|SELECT)$/.test((e.target && e.target.tagName) || "");
  const view = parseHash().view;
  if (!["flash", "mixed", "review", "questions"].includes(view)) return;

  if (typing) {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      if (clickIfEnabled("revealBtn")) e.preventDefault();
    }
    return;
  }
  if (e.ctrlKey) return;

  let handled = false;
  if (e.key === " " || e.key === "Enter") handled = clickIfEnabled("revealBtn") || clickIfEnabled("revealQBtn");
  else if (e.key === "1") handled = clickIfEnabled("scoreBad");
  else if (e.key === "2") handled = clickIfEnabled("scoreGood");
  else if (e.key === "ArrowRight") handled = clickIfEnabled("nextCard") || clickIfEnabled("nextQ");
  else if (e.key === "ArrowLeft") handled = clickIfEnabled("prevCard") || clickIfEnabled("prevQ");
  if (handled) e.preventDefault();
});

window.addEventListener("hashchange", renderRoute);
renderRoute();

Store.init().then(() => {
  renderSyncStatus();
  loadAll();
  loadAllFlash();
  Store.loadStreak().then(() => {
    Store.bumpStreak();
    renderGameBar();
  });
  Store.loadLastSession().then(() => renderGameBar());
  renderDueBanner();
});
