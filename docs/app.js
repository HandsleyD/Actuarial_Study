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

const qbankState = { code: null, qIndex: 0, revealed: false, _lastKey: "", timers: {} };

/* ---------- timed mode for the question bank ---------- */
//
// Optional per-question countdown: allowance = marks x minutes-per-mark. IFoA
// papers allow very roughly 1.8-2 minutes per mark (e.g. ~100 marks in about
// three and a quarter hours including reading time), and running out of time
// is a common way to lose marks, so this trains pacing. The timer is manual
// (Start/Pause), pauses itself when you leave the question, and stops when
// you reveal the answers; the result goes to a device-local pacing log that
// the dashboard summarises.

const RATE_OPTIONS = [1.5, 1.8, 2.0];

function timedPref() {
  try {
    return {
      on: localStorage.getItem("actuarialStudyTimed") === "1",
      rate: Number(localStorage.getItem("actuarialStudyRate")) || 1.8,
    };
  } catch {
    return { on: false, rate: 1.8 };
  }
}

function saveTimedPref(on, rate) {
  try {
    localStorage.setItem("actuarialStudyTimed", on ? "1" : "0");
    localStorage.setItem("actuarialStudyRate", String(rate));
  } catch {
    /* preference just won't persist */
  }
}

function fmtClock(ms) {
  const neg = ms < 0;
  const total = Math.floor(Math.abs(ms) / 1000);
  const m = Math.floor(total / 60);
  const sec = String(total % 60).padStart(2, "0");
  return `${neg ? "\u2212" : ""}${m}:${sec}`;
}

function qTimer(code, qIndex) {
  const key = `${code}:${qIndex}`;
  if (!qbankState.timers[key]) qbankState.timers[key] = { elapsed: 0, since: null, done: false, allowed: 0 };
  return qbankState.timers[key];
}

function qTimerElapsed(t) {
  return t.elapsed + (t.since ? Date.now() - t.since : 0);
}

function pauseQTimer() {
  Object.values(qbankState.timers).forEach((t) => {
    if (t.since) {
      t.elapsed += Date.now() - t.since;
      t.since = null;
    }
  });
}

let qTimerInterval = null;

function tickQTimer(code, qIndex) {
  clearInterval(qTimerInterval);
  qTimerInterval = setInterval(() => {
    const readout = document.getElementById("timerReadout");
    if (!readout || parseHash().view !== "questions") {
      clearInterval(qTimerInterval);
      return;
    }
    const t = qTimer(code, qIndex);
    const left = t.allowed - qTimerElapsed(t);
    readout.textContent = fmtClock(left);
    readout.classList.toggle("over", left < 0);
    readout.classList.toggle("low", left >= 0 && left < 0.2 * t.allowed);
  }, 250);
}

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

  const pref = timedPref();
  const allowedMs = Math.round(q.marks * pref.rate * 60000);
  const timer = qTimer(code, idx);
  timer.allowed = allowedMs;

  const dots = questions
    .map((qq, i) => {
      const t = qbankState.timers[`${code}:${i}`];
      const pace = t && t.done ? (t.elapsed <= t.allowed ? "in-time" : "over-time") : "";
      const tip = t && t.done ? ` — ${fmtClock(t.elapsed)} of ${fmtClock(t.allowed)}` : "";
      return `<button class="card-dot ${pace} ${i === idx ? "active" : ""}" data-idx="${i}" title="Q${i + 1}: ${qq.title}${tip}">${i + 1}</button>`;
    })
    .join("");

  const rateOpts = RATE_OPTIONS.map((r) => `<option value="${r}" ${r === pref.rate ? "selected" : ""}>${r} min/mark</option>`).join("");
  let timerHtml = `
    <div class="timer-bar">
      <label class="timer-toggle"><input type="checkbox" id="timedToggle" ${pref.on ? "checked" : ""}> Timed mode</label>
      <select id="timedRate" class="text-input timer-rate" aria-label="Minutes per mark" ${pref.on ? "" : "hidden"}>${rateOpts}</select>`;
  if (pref.on) {
    if (timer.done) {
      const over = timer.elapsed > timer.allowed;
      timerHtml += `<span class="timer-result ${over ? "over" : "ok"}">Took ${fmtClock(timer.elapsed)} of ${fmtClock(timer.allowed)} allowed${
        over ? ` &mdash; ${fmtClock(timer.elapsed - timer.allowed)} over` : " &mdash; within time"
      }</span>`;
    } else {
      timerHtml += `<span id="timerReadout" class="timer-readout">${fmtClock(allowedMs - qTimerElapsed(timer))}</span>
        <button class="btn" id="timerBtn">${timer.since ? "Pause" : timer.elapsed ? "Resume" : "Start"}</button>
        <span class="timer-note">${q.marks} marks &times; ${pref.rate} = ${(q.marks * pref.rate).toFixed(1)} min</span>`;
    }
  }
  timerHtml += `</div>`;

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
    ${timerHtml}
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

  const goTo = (i) => {
    pauseQTimer();
    qbankState.qIndex = i;
    qbankState.revealed = false;
    renderQuestionsView(code);
  };

  el.querySelectorAll(".card-dot").forEach((btn) => {
    btn.addEventListener("click", () => goTo(Number(btn.dataset.idx)));
  });

  const revealBtn = document.getElementById("revealQBtn");
  if (revealBtn) {
    revealBtn.addEventListener("click", () => {
      if (pref.on && !timer.done && (timer.since || timer.elapsed)) {
        // stop the clock and log how the time compared with the allowance
        pauseQTimer();
        timer.done = true;
        Store.addPaceEntry({
          code,
          qid: q.id,
          marks: q.marks,
          usedMs: timer.elapsed,
          allowedMs,
          rate: pref.rate,
          date: SRS.today(),
        });
      }
      qbankState.revealed = true;
      renderQuestionsView(code);
    });
  }

  document.getElementById("prevQ").addEventListener("click", () => goTo(Math.max(0, idx - 1)));
  document.getElementById("nextQ").addEventListener("click", () => goTo(Math.min(questions.length - 1, idx + 1)));

  const timedToggle = document.getElementById("timedToggle");
  timedToggle.addEventListener("change", () => {
    pauseQTimer();
    saveTimedPref(timedToggle.checked, timedPref().rate);
    renderQuestionsView(code);
  });
  const rateSel = document.getElementById("timedRate");
  rateSel.addEventListener("change", () => {
    saveTimedPref(true, Number(rateSel.value));
    renderQuestionsView(code);
  });
  const timerBtn = document.getElementById("timerBtn");
  if (timerBtn) {
    timerBtn.addEventListener("click", () => {
      if (timer.since) pauseQTimer();
      else timer.since = Date.now();
      renderQuestionsView(code);
    });
  }
  if (timer.since && !timer.done) tickQTimer(code, idx);

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

// Module list: read-only, unauthenticated fetch of progress.md from the
// public repo, used only for which modules a subject has. Its Status column
// is the repo author's own progress, so it's ignored -- every visitor starts
// at "Not started" and only sees statuses they've set themselves (saved on
// this device, and to their account when signed in). Otherwise a signed-out
// visitor would see e.g. CB2 flagged "Currently studying" on first load.
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
    examData[code] = { modules: baseModules.map((m) => ({ ...m, status: overrides[m.id] || STATUSES[0] })) };
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

// Bulk status set for a whole subject's modules at once, so finished
// revision (or starting over) doesn't take a click per module. This is
// revision only: passes and exemptions are exam results, recorded below.
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

// Every module marked Done: finished revising, which is not the same as
// having passed the exam.
function isSubjectDone(code) {
  const d = examData[code];
  return !!d && !d.error && computePct(d.modules) === 100;
}

/* ---------- exam results (passed / exempt) ---------- */
//
// Only results count towards Associate and Fellow. See Store's exam results
// section for the shape; "none" means no result recorded.

let subjectResults = Store.getResultsCache();

function subjectResult(code) {
  const r = subjectResults[code];
  return r && (r.status === "passed" || r.status === "exempt") ? r.status : null;
}

function isSubjectPassed(code) {
  return !!subjectResult(code);
}

// A passed subject no longer belongs in any sitting of the plan.
function recordResult(code, status, sitting) {
  subjectResults = Store.setResult(code, status, sitting);
  if (status !== "none") removeFromPlan(code);
  onResultsChanged();
}

function onResultsChanged() {
  EXAMS.forEach(updateHomeCard);
  renderGameBar();
  renderHomePrompts();
  renderSyncStatus();
  const r = parseHash();
  if (r.view === "subject") renderSubjectView(r.exam);
  if (r.view === "dashboard") renderDashboardView();
}

function refreshResults() {
  Store.loadResults().then((res) => {
    subjectResults = res;
    onResultsChanged();
  });
}

function fellowshipStatus() {
  const coreDone = CORE_SUBJECTS.every(isSubjectPassed);
  const spRemaining = Math.max(0, 2 - SP_CHOICES.filter(isSubjectPassed).length);
  const saRemaining = Math.max(0, 1 - SA_CHOICES.filter(isSubjectPassed).length);
  const fellowRemaining = spRemaining + saRemaining;

  if (coreDone && fellowRemaining === 0) {
    return { label: "Fellow of the Institute", sub: "All Fellowship requirements complete" };
  }
  if (coreDone) {
    return { label: "Associate", sub: `${fellowRemaining} more subject${fellowRemaining === 1 ? "" : "s"} to Fellow` };
  }
  const coreRemaining = CORE_SUBJECTS.filter((c) => !isSubjectPassed(c)).length;
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
  let pct = 0;
  if (d.error) {
    pctEl.textContent = "unavailable";
  } else {
    pct = computePct(d.modules);
    pctEl.textContent = `${pct}% (${d.modules.length} modules)`;
    barEl.style.width = `${pct}%`;
  }

  // The exam result outranks revision status: passed or exempt is shown
  // whatever the modules say; otherwise "studying" or "all modules done".
  const result = subjectResult(code);
  const revised = !result && !d.error && pct === 100;
  const studying = !result && !revised && !d.error && d.modules.some((m) => m.status.toLowerCase() === "in progress");

  card.classList.toggle("completed", !!result);
  card.classList.toggle("studying", studying);

  let ribbon = card.querySelector(".status-ribbon");
  if (result || revised || studying) {
    if (!ribbon) {
      ribbon = document.createElement("div");
      ribbon.className = "status-ribbon";
      card.prepend(ribbon);
    }
    ribbon.classList.toggle("completed-ribbon", !!result);
    ribbon.classList.toggle("studying-ribbon", studying);
    ribbon.classList.toggle("revised-ribbon", revised);
    ribbon.textContent = result === "exempt" ? "Exempt ✓" : result ? "Passed ✓" : revised ? "All modules done" : "Currently studying";
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
  // Drills are their own track, so they get their own count and their own
  // accuracy figure rather than folding into the mastery star totals above.
  const totalDrills = drillItems(code).length;
  const drillsDue = totalDrills ? dueDrillCount(code, null) : 0;
  const drillAcc = totalDrills ? drillAccuracy(code, null) : { attempts: 0, pct: 0 };
  if (totalDrills) ensureDrillsLoaded(code);
  const subjectDue = dueCards(code).length;
  const subjectWeak = weakCards(code).length;
  const nextExam = nextSitting(code);
  const firstPaper = nextExam && nextExam.papers.find((p) => p.date >= SRS.today());

  el.innerHTML = `
    <button class="back-link" id="backToHome">&larr; All subjects</button>
    <div class="subject-head">
      <div class="subject-code">${code}</div>
      <h2>${info.name}</h2>
      ${info.blurb ? `<p class="subject-blurb">${info.blurb}</p>` : ""}
      <a class="hub-link" href="#/exams/${code}">&#127891; Pass rates and exam dates${
        firstPaper ? ` &middot; next ${code} paper ${fmtHubDate(firstPaper.date)} (${countdownLabel(firstPaper.date)})` : ""
      } &rarr;</a>
      ${
        totalCards > 0
          ? `<div class="subject-actions">
               ${subjectDue ? `<a class="btn primary" href="${reviewHash("due", code)}">&#128197; Review ${subjectDue} due card${subjectDue === 1 ? "" : "s"}</a>` : ""}
               <button class="btn ${subjectDue ? "" : "primary"} mixed-session-btn" id="startMixed">&#128256; Mixed session &mdash; 10 random cards across all of ${code}</button>
               ${subjectWeak ? `<a class="btn" href="${reviewHash("weak", code)}">&#127919; Practise ${subjectWeak} weak card${subjectWeak === 1 ? "" : "s"}</a>` : ""}
             </div>`
          : ""
      }
      ${
        totalQuestions > 0
          ? `<button class="btn qbank-btn" id="startQbank">&#128220; Practice exam questions &mdash; ${totalQuestions} original question${totalQuestions === 1 ? "" : "s"} in the IFoA style</button>`
          : ""
      }
      ${
        totalDrills > 0
          ? `<button class="btn drill-btn" id="startDrill">&#128221; Drills &mdash; ${totalDrills} question${totalDrills === 1 ? "" : "s"}, marked for you${
              drillAcc.seen ? ` &middot; ${drillAcc.seen}/${totalDrills} tried, ${drillAcc.pct}% correct` : " &middot; none tried yet"
            }${drillsDue ? ` (<strong>${drillsDue} due</strong>)` : ""}</button>`
          : ""
      }
      <div class="result-row">
        <span class="result-label" id="resultLabel">Exam result</span>
        <div class="result-choice" role="group" aria-labelledby="resultLabel">${[
          ["none", "Not yet"],
          ["passed", "Passed"],
          ["exempt", "Exempt"],
        ]
          .map(
            ([v, label]) =>
              `<button type="button" class="btn result-btn" data-result="${v}" aria-pressed="${(subjectResult(code) || "none") === v}">${label}</button>`
          )
          .join("")}</div>
        <span class="exemption-hint">Your result is what counts towards Associate and Fellow; the module ticks below track your revision.</span>
      </div>
      <div class="exemption-row">
        <span class="exemption-hint">Revision:</span>
        <button class="btn" id="markAllDone">Mark all modules done</button>
        <button class="btn" id="markAllReset">Reset module progress</button>
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

  const drillBtn = document.getElementById("startDrill");
  if (drillBtn) {
    drillBtn.addEventListener("click", () => navigate(`#/${code}/drill`));
  }

  document.getElementById("markAllDone").addEventListener("click", () => {
    if (confirm(`Mark all of ${code}'s modules as Done?`)) setAllModuleStatus(code, "Done");
  });
  document.getElementById("markAllReset").addEventListener("click", () => {
    if (confirm(`Reset all of ${code}'s modules back to "Not started"?`)) setAllModuleStatus(code, "Not started");
  });

  el.querySelectorAll(".result-btn").forEach((btn) =>
    btn.addEventListener("click", () => {
      const prev = subjectResults[code];
      const v = btn.dataset.result;
      recordResult(code, v, prev && prev.status !== "none" ? prev.sitting : null);
      const again = document.querySelector(`#subjectView .result-btn[data-result="${v}"]`); // the view re-rendered
      if (again) again.focus();
    })
  );

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

  const moduleDrills = drillItems(code, moduleId).length;
  const moduleDrillsDue = moduleDrills ? dueDrillCount(code, moduleId) : 0;
  if (moduleDrills) ensureDrillsLoaded(code);

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
      ${moduleDrills ? `<a class="btn drill-btn" href="#/${code}/drill/${moduleId}">&#128221; Drill ${moduleDrills}${moduleDrillsDue ? ` (${moduleDrillsDue} due)` : ""}</a>` : ""}
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

// Timed practice questions (see the question bank's timed mode): how long
// they took against the marks-based allowance.
function paceSectionHtml() {
  const log = Store.getPaceLog();
  if (!log.length) return "";
  const used = log.reduce((a, e) => a + e.usedMs, 0);
  const allowed = log.reduce((a, e) => a + e.allowedMs, 0);
  const inTime = log.filter((e) => e.usedMs <= e.allowedMs).length;
  const ratio = allowed ? used / allowed : 0;
  const recent = log.slice(-8).reverse();
  const verdict =
    ratio > 1.1
      ? "You're running over the allowance on average &mdash; practise outlining answers rather than writing them in full, and move on when the time is up."
      : ratio < 0.7
        ? "You're finishing well inside the allowance &mdash; check you're giving enough breadth for the marks."
        : "Your pacing is close to the allowance.";
  return `
    <section class="dash-section">
      <div class="dash-section-head"><h3>Exam pacing</h3></div>
      <p class="dash-note">From timed practice questions on this device. ${log.length} question${log.length === 1 ? "" : "s"}: ${inTime} finished within time; on average you used ${Math.round(ratio * 100)}% of the allowance. ${verdict}</p>
      <div class="dash-table">${recent
        .map((e) => {
          const over = e.usedMs > e.allowedMs;
          return `
          <div class="dash-row pace-row">
            <span class="dash-row-name"><span class="dash-tag">${e.code}</span> ${escapeHtml(e.qid)} &middot; ${e.marks} marks</span>
            <span class="dash-row-meta">${e.date}</span>
            <span class="dash-row-bar"><span class="pace-figure ${over ? "over" : "ok"}">${fmtClock(e.usedMs)} / ${fmtClock(e.allowedMs)}</span></span>
          </div>`;
        })
        .join("")}</div>
    </section>`;
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
      <p class="subject-blurb">What's due, where you keep slipping, mastery by subject and module, and your exam plan.${
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

    ${planSectionHtml()}

    ${paceSectionHtml()}

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
  wirePlanSection(el);
  renderMath(el);
}

function refreshDashboardActivity() {
  Store.loadActivity().then((a) => {
    activityData = a;
    if (parseHash().view === "dashboard") renderDashboardView();
  });
}

/* ---------- exam planner (study dashboard) ---------- */
//
// Which subjects the user intends to sit at which sitting, laid out sitting
// by sitting, with checks against the published timetable (exam-dates.js)
// and a projection of when Associate and Fellow would be reached if every
// planned exam is passed. Sittings are April and September; ones the IFoA
// hasn't published yet are assumed to follow the same pattern.

let examPlan = Store.getExamPlanCache(); // { sittings: { "2027-04": ["CS1"] }, updatedAt }
let planExtraSittings = 0; // "Show later sittings" clicks this page load

const PLAN_MAX_PER_SITTING = 3;
const MONTH_NUM = { april: "04", september: "09" };

// CB3 is an online assessment booked through the member portal, outside the
// April/September sittings, so it isn't something to place in one.
const PLANNABLE = EXAMS.filter((c) => c !== "CB3");

function planGroup(code) {
  if (/^C[BMS]/.test(code)) return "Core Principles";
  if (code.startsWith("CP")) return "Core Practice";
  if (code.startsWith("SP")) return "Specialist Principles";
  return "Specialist Advanced";
}

function sessionSittingId(session) {
  const [month, year] = session.name.toLowerCase().split(" ");
  return MONTH_NUM[month] ? `${year}-${MONTH_NUM[month]}` : null;
}

function sittingName(id) {
  const [y, m] = id.split("-");
  return `${m === "04" ? "April" : "September"} ${y}`;
}

function nextSittingId(id) {
  const [y, m] = id.split("-");
  return m === "04" ? `${y}-09` : `${Number(y) + 1}-04`;
}

// One sitting: published dates when the IFoA has them, else an estimate
// (mid-April / mid-September) so countdowns and pacing still work.
function sittingInfo(id) {
  const session =
    (typeof EXAM_DATES !== "undefined" && EXAM_DATES.sessions.find((s) => sessionSittingId(s) === id)) || null;
  if (session) {
    const dates = Object.keys(session.papers).sort();
    const entry = session.deadlines.find((d) => /entry closes/i.test(d.label));
    return { id, session, first: dates[0], last: dates[dates.length - 1], entryCloses: entry ? entry.date : null };
  }
  const approx = `${id}-15`;
  return { id, session: null, first: approx, last: approx, entryCloses: null };
}

// Sittings to show: any past sitting that still has subjects planned in it
// (so they can be marked done or cleared), then upcoming ones.
function planSittingList() {
  const planned = Object.keys(examPlan.sittings).filter((id) => examPlan.sittings[id].length).sort();
  let id = firstUpcomingSittingId();
  const upcoming = [];
  const lastPlanned = planned[planned.length - 1] || "";
  const minCount = 4 + planExtraSittings;
  while (upcoming.length < minCount || id <= lastPlanned) {
    upcoming.push(id);
    id = nextSittingId(id);
  }
  const past = planned.filter((p) => p < upcoming[0]);
  return [...past, ...upcoming].map(sittingInfo);
}

function plannedSittingOf(code) {
  return Object.keys(examPlan.sittings).find((id) => examPlan.sittings[id].includes(code)) || null;
}

function writePlan(sittings) {
  Object.keys(sittings).forEach((id) => {
    if (!sittings[id].length) delete sittings[id];
  });
  examPlan = Store.setExamPlan(sittings);
}

function savePlan(sittings) {
  writePlan(sittings);
  renderSyncStatus();
  renderDashboardView();
  renderHomePrompts();
}

function removeFromPlan(code) {
  if (!plannedSittingOf(code)) return;
  const sittings = JSON.parse(JSON.stringify(examPlan.sittings));
  Object.keys(sittings).forEach((id) => (sittings[id] = sittings[id].filter((c) => c !== code)));
  writePlan(sittings);
}

// The first sitting that hasn't started yet.
function firstUpcomingSittingId() {
  const today = SRS.today();
  let id = "2026-04";
  while (sittingInfo(id).first <= today) id = nextSittingId(id);
  return id;
}

// When results for a subject at a sitting are (or are expected to be) out:
// the published results day, else roughly 11 weeks after the last paper.
function resultsDate(info, code) {
  const s = info.session;
  if (s && s.results && s.results[resultsGroup(code)]) return s.results[resultsGroup(code)];
  return SRS.addDays(info.last, 77);
}

// Planned subjects at sittings whose results are out, with no result yet:
// the "did you pass?" questions. [{ info, codes }]
function pendingResults() {
  const today = SRS.today();
  return Object.keys(examPlan.sittings)
    .sort()
    .map(sittingInfo)
    .filter((info) => info.first <= today)
    .map((info) => ({
      info,
      codes: examPlan.sittings[info.id].filter((c) => !isSubjectPassed(c) && resultsDate(info, c) <= today),
    }))
    .filter((p) => p.codes.length);
}

function resultButtonsHtml(code, sittingId) {
  const next = sittingName(firstUpcomingSittingId());
  return `<span class="result-q"><strong>${code}</strong> ${escapeHtml((SUBJECTS[code] || { name: "" }).name)}</span>
    <span class="result-actions">
      <button type="button" class="btn primary small" data-pass="${code}" data-sitting="${sittingId}">Passed</button>
      <button type="button" class="btn small" data-resit="${code}" data-sitting="${sittingId}">Not this time &mdash; move to ${next}</button>
    </span>`;
}

// "Not this time": the subject moves to the next sitting that hasn't started.
function planResit(code) {
  const sittings = JSON.parse(JSON.stringify(examPlan.sittings));
  Object.keys(sittings).forEach((id) => (sittings[id] = sittings[id].filter((c) => c !== code)));
  const target = firstUpcomingSittingId();
  sittings[target] = [...(sittings[target] || []), code].sort((a, b) => PLANNABLE.indexOf(a) - PLANNABLE.indexOf(b));
  savePlan(sittings);
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest && e.target.closest("[data-pass], [data-resit]");
  if (!btn) return;
  if (btn.dataset.pass) recordResult(btn.dataset.pass, "passed", btn.dataset.sitting);
  else planResit(btn.dataset.resit);
});

// Adding a subject that's planned elsewhere moves it: a resit or a change of
// mind, either way it only belongs in one sitting.
function planAdd(sittingId, code) {
  const sittings = JSON.parse(JSON.stringify(examPlan.sittings));
  Object.keys(sittings).forEach((id) => (sittings[id] = sittings[id].filter((c) => c !== code)));
  sittings[sittingId] = [...(sittings[sittingId] || []), code].sort(
    (a, b) => PLANNABLE.indexOf(a) - PLANNABLE.indexOf(b)
  );
  savePlan(sittings);
}

function planRemove(sittingId, code) {
  const sittings = JSON.parse(JSON.stringify(examPlan.sittings));
  sittings[sittingId] = (sittings[sittingId] || []).filter((c) => c !== code);
  savePlan(sittings);
}

function modulesLeft(code) {
  const d = examData[code];
  if (!d || d.error) return null;
  return d.modules.filter((m) => m.status.toLowerCase() !== "done").length;
}

function qualifiesAssociate(done) {
  return CORE_SUBJECTS.every((c) => done.has(c));
}

function qualifiesFellow(done) {
  return (
    qualifiesAssociate(done) &&
    SP_CHOICES.filter((c) => done.has(c)).length >= 2 &&
    SA_CHOICES.filter((c) => done.has(c)).length >= 1
  );
}

function sittingWarnings(info, codes) {
  const out = [];
  if (codes.length > PLAN_MAX_PER_SITTING) {
    out.push(`${codes.length} subjects in one sitting &mdash; most students sit ${PLAN_MAX_PER_SITTING} at most.`);
  }
  if (!info.session) return out;
  const byDate = {};
  codes.forEach((code) => {
    const papers = sessionPapers(info.session, code);
    if (!papers.length) {
      out.push(`${code} isn't on the ${info.session.name} timetable.`);
      return;
    }
    new Set(papers.map((p) => p.date)).forEach((d) => (byDate[d] = [...(byDate[d] || []), code]));
  });
  Object.keys(byDate)
    .sort()
    .forEach((d) => {
      if (byDate[d].length > 1) {
        out.push(
          `${byDate[d].join(" and ")} both have a paper on ${fmtHubDate(d, true)} &mdash; every paper starts at 09:00, so they clash.`
        );
      }
    });
  return out;
}

function planSectionHtml() {
  const today = SRS.today();
  const sittings = planSittingList();
  const doneNow = new Set(EXAMS.filter(isSubjectPassed));

  // Walk the sittings in order, pretending every planned exam is passed, to
  // find when each qualification would be reached.
  const projected = new Set(doneNow);
  let associateAt = qualifiesAssociate(projected) ? "now" : null;
  let fellowAt = qualifiesFellow(projected) ? "now" : null;
  let prevEnd = today;

  const rows = sittings.map((info) => {
    const codes = examPlan.sittings[info.id] || [];
    const past = info.first <= today; // started or finished: nothing left to plan in it
    codes.forEach((c) => projected.add(c));
    const cb3Ok = projected.has("CB3");
    projected.add("CB3"); // assume CB3 is fitted in alongside; flagged below if not passed yet
    if (!associateAt && qualifiesAssociate(projected)) associateAt = { info, codes, cb3: !cb3Ok };
    if (!fellowAt && qualifiesFellow(projected)) fellowAt = { info, codes, cb3: !cb3Ok };
    if (!cb3Ok) projected.delete("CB3");

    const name = sittingName(info.id);
    const dateRange = info.session
      ? `${fmtHubDate(info.first)} &ndash; ${fmtHubDate(info.last)}`
      : "dates not published yet";
    const meta = [dateRange];
    if (!past) meta.push(countdownLabel(info.first).replace(/^in /, "starts in "));
    if (!past && info.entryCloses) {
      meta.push(info.entryCloses >= today ? `entry closes ${fmtHubDate(info.entryCloses)}` : "entry has closed");
    }

    const chips = codes
      .map((c) => {
        const done = doneNow.has(c);
        return `<span class="plan-chip${done ? " done" : ""}" title="${escapeHtml((SUBJECTS[c] || { name: "" }).name)}">
          <a href="#/${c}">${c}</a>${done ? " &#10003;" : ""}
          <button class="plan-chip-remove" data-sitting="${info.id}" data-code="${c}" aria-label="Remove ${c} from ${name}">&times;</button>
        </span>`;
      })
      .join("");

    let addHtml = "";
    if (!past) {
      const groups = {};
      PLANNABLE.filter((c) => !doneNow.has(c) && !codes.includes(c)).forEach((c) => {
        const offered = !info.session || sessionPapers(info.session, c).length > 0;
        const elsewhere = plannedSittingOf(c);
        const note = !offered ? " (not in this sitting)" : elsewhere ? ` (move from ${sittingLabel(elsewhere)})` : "";
        (groups[planGroup(c)] = groups[planGroup(c)] || []).push(
          `<option value="${c}"${offered ? "" : " disabled"}>${c} &mdash; ${escapeHtml((SUBJECTS[c] || { name: "" }).name)}${note}</option>`
        );
      });
      const opts = Object.keys(groups)
        .map((g) => `<optgroup label="${g}">${groups[g].join("")}</optgroup>`)
        .join("");
      addHtml = opts
        ? `<select class="text-input plan-add" data-sitting="${info.id}" aria-label="Add a subject to ${name}">
            <option value="">+ Add a subject&hellip;</option>${opts}</select>`
        : "";
    }

    const notes = sittingWarnings(info, codes).map((w) => `<li class="plan-warn">${w}</li>`);
    if (past) {
      codes
        .filter((c) => !doneNow.has(c))
        .forEach((c) => {
          const out = resultsDate(info, c);
          notes.push(
            out <= today
              ? `<li class="plan-result">${resultButtonsHtml(c, info.id)}</li>`
              : `<li>${c}: results ${info.session && info.session.results ? "due" : "expected around"} ${fmtHubDate(out)}. You can record them here once they're out.</li>`
          );
        });
    }
    if (!past && codes.length) {
      const left = codes.map(modulesLeft);
      if (left.every((n) => n !== null)) {
        const total = left.reduce((a, n) => a + n, 0);
        const days = Math.max(1, daysFromToday(info.first) - Math.max(0, daysFromToday(prevEnd)));
        const span = days < 14 ? `${days} day${days === 1 ? "" : "s"}` : `${Math.round(days / 7)} weeks`;
        notes.push(
          total
            ? `${total} module${total === 1 ? "" : "s"} not yet marked done &mdash; about ${((total * 7) / days).toFixed(1)} a week over the ${span} ${prevEnd === today ? "from now" : "after the previous sitting"}.`
            : "Every module is marked done &mdash; time for past papers."
        );
      }
      prevEnd = info.last;
    }

    return `
      <div class="plan-sitting${past ? " past" : ""}${codes.length ? "" : " empty"}">
        <div class="plan-sitting-head">
          <strong>${name}</strong>
          <span class="plan-meta">${meta.join(" &middot; ")}</span>
        </div>
        <div class="plan-chips">${chips}${addHtml}</div>
        ${notes.length ? `<ul class="plan-notes">${notes.join("")}</ul>` : ""}
      </div>`;
  });

  // What's still unplanned towards each qualification.
  const covered = new Set([...doneNow, ...Object.values(examPlan.sittings).flat()]);
  const coreLeft = CORE_SUBJECTS.filter((c) => !covered.has(c) && c !== "CB3");
  const spLeft = Math.max(0, 2 - SP_CHOICES.filter((c) => covered.has(c)).length);
  const saLeft = Math.max(0, 1 - SA_CHOICES.filter((c) => covered.has(c)).length);
  const unplanned = [];
  if (coreLeft.length) unplanned.push(`${coreLeft.join(", ")}`);
  if (spLeft) unplanned.push(`${spLeft} Specialist Principles subject${spLeft === 1 ? "" : "s"}`);
  if (saLeft) unplanned.push(`1 Specialist Advanced subject`);

  const when = (at, label) => {
    if (at === "now") return `<li>You've completed the ${label} exams.</li>`;
    if (!at) return "";
    // Results day for the qualifying sitting: the later of the core and
    // advanced release dates among the subjects planned in it.
    const s = at.info.session;
    const res = s && s.results ? at.codes.map((c) => s.results[resultsGroup(c)]).filter(Boolean).sort().pop() : null;
    return `<li><strong>${label}</strong> after the ${sittingName(at.info.id)} sitting${
      res ? ` (results ${fmtHubDate(res)})` : ""
    }${at.cb3 ? ", once CB3 is also passed (it's booked online, any time)" : ""}.</li>`;
  };

  const summary = [when(associateAt, "Associate"), when(fellowAt, "Fellow")].join("");
  const tableNote = Store.getUser() && Store.isPlanTableMissing()
    ? " Saved on this device only until supabase/migrations/004_exam_plan.sql is run."
    : "";

  return `
    <section class="dash-section" id="examPlan">
      <div class="dash-section-head"><h3>Exam plan</h3></div>
      <p class="dash-note">Pick which subjects you'll sit at each sitting &mdash; most students take 1&ndash;3 per sitting. Dates come from the <a href="#/exams">Exam Hub</a>; sittings not yet published are assumed to be mid-April and mid-September. CB3 is booked online outside the sittings, so it isn't listed.${tableNote}</p>
      ${rows.join("")}
      <button class="btn plan-more" id="planMore">Show later sittings</button>
      <div class="plan-summary">
        <h4 class="dash-sub">If you pass everything as planned</h4>
        <ul class="plan-notes">
          ${summary || "<li>Add subjects to sittings to see when you'd qualify.</li>"}
          ${unplanned.length ? `<li>Still to plan: ${unplanned.join("; ")}.</li>` : ""}
        </ul>
      </div>
    </section>`;
}

function wirePlanSection(el) {
  el.querySelectorAll(".plan-add").forEach((sel) =>
    sel.addEventListener("change", () => {
      if (sel.value) planAdd(sel.dataset.sitting, sel.value);
    })
  );
  el.querySelectorAll(".plan-chip-remove").forEach((btn) =>
    btn.addEventListener("click", () => planRemove(btn.dataset.sitting, btn.dataset.code))
  );
  const more = el.querySelector("#planMore");
  if (more) {
    more.addEventListener("click", () => {
      planExtraSittings += 4;
      renderDashboardView();
      document.getElementById("examPlan").scrollIntoView({ block: "end" });
    });
  }
}

Store.onPlanChange(() => {
  examPlan = Store.getExamPlanCache();
  if (parseHash().view === "dashboard") renderDashboardView();
  renderHomePrompts();
});

Store.onResultsChange(() => {
  subjectResults = Store.getResultsCache();
  onResultsChanged();
});

function refreshExamPlan() {
  Store.loadExamPlan().then((p) => {
    examPlan = p;
    if (parseHash().view === "dashboard") renderDashboardView();
    renderHomePrompts();
  });
}

/* ---------- home prompts: welcome and "did you pass?" ---------- */

function hasAnyResult() {
  return Object.values(subjectResults).some((r) => r && r.status !== "none");
}

function hasAnyPlan() {
  return Object.values(examPlan.sittings).some((codes) => codes.length);
}

function renderHomePrompts() {
  const welcome = document.getElementById("welcomeBanner");
  if (welcome) {
    const show = !Store.isWelcomed() && !hasAnyResult() && !hasAnyPlan();
    welcome.hidden = !show;
    welcome.innerHTML = show
      ? `<div class="due-banner-text">
          <strong>New here? Two quick questions set things up.</strong>
          <span class="due-banner-sub">Which exams you've already passed, and what you're sitting next. That sets your Associate and Fellow progress and starts your exam plan.</span>
        </div>
        <div class="due-banner-actions">
          <a class="btn primary" href="#/welcome">Get started</a>
          <button type="button" class="btn" id="welcomeDismiss">Not now</button>
        </div>`
      : "";
    const dismiss = document.getElementById("welcomeDismiss");
    if (dismiss) {
      dismiss.addEventListener("click", () => {
        Store.setWelcomed();
        renderHomePrompts();
      });
    }
  }

  const prompt = document.getElementById("resultsPrompt");
  if (prompt) {
    const pending = pendingResults();
    prompt.hidden = !pending.length;
    prompt.innerHTML = pending
      .map(
        (p) => `
        <div class="due-banner-text">
          <strong>Results are out for ${sittingName(p.info.id)}. Did you pass?</strong>
          <ul class="result-list">${p.codes.map((c) => `<li>${resultButtonsHtml(c, p.info.id)}</li>`).join("")}</ul>
        </div>`
      )
      .join("");
  }
}

/* ---------- welcome: first-run questions ---------- */
//
// Two steps: which exams are already passed or exempted, then what's being
// sat at the next sitting. Nothing is saved until the end, so backing out
// part-way changes nothing.

const welcomeState = { step: 1, picks: {}, next: [] };

function startWelcome() {
  welcomeState.step = 1;
  welcomeState.picks = {};
  EXAMS.forEach((c) => {
    const r = subjectResult(c);
    if (r) welcomeState.picks[c] = r;
  });
  welcomeState.next = [...(examPlan.sittings[firstUpcomingSittingId()] || [])];
}

function welcomeGroupsHtml(codes, rowHtml) {
  const groups = {};
  codes.forEach((c) => (groups[planGroup(c)] = groups[planGroup(c)] || []).push(c));
  return Object.keys(groups)
    .map((g) => `<fieldset class="welcome-group"><legend>${g}</legend>${groups[g].map(rowHtml).join("")}</fieldset>`)
    .join("");
}

function renderWelcomeView() {
  const el = document.getElementById("welcomeView");
  if (welcomeState.step === 1) {
    el.innerHTML = `
      <button class="back-link" id="welcomeBack">&larr; All subjects</button>
      <div class="subject-head">
        <p class="welcome-step">Step 1 of 2</p>
        <h2>Which exams have you already passed?</h2>
        <p class="subject-blurb">Tick any you've passed or been exempted from. These count towards Associate and Fellow; you can change them later on each subject's page.</p>
      </div>
      <form id="welcomeForm1" class="welcome-form">
        ${welcomeGroupsHtml(EXAMS, (c) => {
          const pick = welcomeState.picks[c];
          return `<div class="welcome-row">
            <label><input type="checkbox" data-code="${c}"${pick ? " checked" : ""}> <strong>${c}</strong> ${escapeHtml((SUBJECTS[c] || { name: "" }).name)}</label>
            <select class="text-input welcome-how" data-code="${c}" aria-label="How you completed ${c}"${pick ? "" : " disabled"}>
              <option value="passed"${pick !== "exempt" ? " selected" : ""}>Passed</option>
              <option value="exempt"${pick === "exempt" ? " selected" : ""}>Exempt</option>
            </select>
          </div>`;
        })}
        <div class="welcome-actions">
          <button type="submit" class="btn primary">Next: what you're sitting next &rarr;</button>
        </div>
      </form>`;
    el.querySelectorAll('input[type="checkbox"]').forEach((box) =>
      box.addEventListener("change", () => {
        const how = el.querySelector(`.welcome-how[data-code="${box.dataset.code}"]`);
        how.disabled = !box.checked;
      })
    );
    document.getElementById("welcomeForm1").addEventListener("submit", (e) => {
      e.preventDefault();
      welcomeState.picks = {};
      el.querySelectorAll('input[type="checkbox"]:checked').forEach((box) => {
        welcomeState.picks[box.dataset.code] = el.querySelector(`.welcome-how[data-code="${box.dataset.code}"]`).value;
      });
      welcomeState.next = welcomeState.next.filter((c) => !welcomeState.picks[c]);
      welcomeState.step = 2;
      renderWelcomeView();
      window.scrollTo(0, 0);
      el.querySelector("h2").focus();
    });
  } else {
    const info = sittingInfo(firstUpcomingSittingId());
    const today = SRS.today();
    const remaining = PLANNABLE.filter((c) => !welcomeState.picks[c]);
    const when = info.session
      ? `Papers run ${fmtHubDate(info.first)} &ndash; ${fmtHubDate(info.last)}${
          info.entryCloses && info.entryCloses >= today ? `; exam entry closes ${fmtHubDate(info.entryCloses)}` : ""
        }.`
      : "Dates for this sitting aren't published yet.";
    el.innerHTML = `
      <button class="back-link" id="welcomeBack">&larr; Back to step 1</button>
      <div class="subject-head">
        <p class="welcome-step">Step 2 of 2</p>
        <h2 tabindex="-1">What are you sitting in ${sittingName(info.id)}?</h2>
        <p class="subject-blurb">${when} Most students take 1&ndash;3 subjects a sitting. You can plan later sittings on the dashboard.</p>
      </div>
      <form id="welcomeForm2" class="welcome-form">
        ${welcomeGroupsHtml(remaining, (c) => {
          const offered = !info.session || sessionPapers(info.session, c).length > 0;
          return `<div class="welcome-row">
            <label${offered ? "" : ' class="muted"'}><input type="checkbox" data-code="${c}"${welcomeState.next.includes(c) ? " checked" : ""}${
              offered ? "" : " disabled"
            }> <strong>${c}</strong> ${escapeHtml((SUBJECTS[c] || { name: "" }).name)}${offered ? "" : " (not in this sitting)"}</label>
          </div>`;
        })}
        <ul class="plan-notes" id="welcomeWarnings" aria-live="polite"></ul>
        <div class="welcome-actions">
          <button type="submit" class="btn primary">Save and see my plan</button>
          <button type="button" class="btn" id="welcomeSkipPlan">Not sure yet &mdash; save my results only</button>
        </div>
      </form>`;
    const warn = () => {
      welcomeState.next = [...el.querySelectorAll('input[type="checkbox"]:checked')].map((b) => b.dataset.code);
      document.getElementById("welcomeWarnings").innerHTML = sittingWarnings(info, welcomeState.next)
        .map((w) => `<li class="plan-warn">${w}</li>`)
        .join("");
    };
    el.querySelectorAll('input[type="checkbox"]').forEach((box) => box.addEventListener("change", warn));
    warn();
    document.getElementById("welcomeForm2").addEventListener("submit", (e) => {
      e.preventDefault();
      finishWelcome(info.id, true);
    });
    document.getElementById("welcomeSkipPlan").addEventListener("click", () => finishWelcome(info.id, false));
  }
  document.getElementById("welcomeBack").addEventListener("click", () => {
    if (welcomeState.step === 2) {
      welcomeState.step = 1;
      renderWelcomeView();
    } else {
      navigate("#/");
    }
  });
}

function finishWelcome(sittingId, withPlan) {
  EXAMS.forEach((c) => {
    const want = welcomeState.picks[c] || "none";
    const have = subjectResult(c) || "none";
    if (want !== have) subjectResults = Store.setResult(c, want, null);
  });
  const sittings = JSON.parse(JSON.stringify(examPlan.sittings));
  const passed = Object.keys(welcomeState.picks);
  const moving = withPlan ? welcomeState.next : [];
  Object.keys(sittings).forEach((id) => (sittings[id] = sittings[id].filter((c) => !passed.includes(c) && !moving.includes(c))));
  if (withPlan) sittings[sittingId] = [...moving].sort((a, b) => PLANNABLE.indexOf(a) - PLANNABLE.indexOf(b));
  writePlan(sittings);
  Store.setWelcomed();
  onResultsChanged();
  navigate(withPlan ? "#/dashboard" : "#/");
  if (withPlan) {
    const plan = document.getElementById("examPlan");
    if (plan) plan.scrollIntoView({ block: "start" });
  }
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
  if (r.view === "dashboard") renderDashboardView(); // the exam plan depends on which subjects are done
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

/* ---------- drills (multiple choice / select-all / cloze) ---------- */
//
// Drills are objectively graded, unlike flashcards which the user grades
// themselves. That makes them a SEPARATE TRACK on purpose: a drill result
// never writes to flashcard_mastery, so it can't move the star total or the
// Associate/Fellow rank, which stay earned by honest self-assessment. What
// drills report instead is accuracy -- a number that only means something
// because the machine is doing the marking.
//
// They do share srs.js with flashcards, so a drilled item comes back on the
// same expanding schedule. Content lives in docs/drills.js keyed by stable
// string id -- see supabase/migrations/003_drills.sql for why the key isn't
// the positional index flashcards use.

const DRILL_RUN_SIZE = 10;

const drillState = {
  code: null,
  module: null, // null = every module in the subject
  items: [], // the run, in order
  idx: 0,
  order: [], // mcq/multi: display position -> authored option index
  trays: [], // cloze: per-blank shuffled token list
  choice: null, // mcq: display index
  choices: [], // multi: display indices
  blanks: [], // cloze: chosen token per blank (null = unanswered)
  region: null, // hotspot: the data-region the user clicked
  submitted: false,
  lastCorrect: false,
  stats: { answered: 0, correct: 0 },
  done: false,
  _lastKey: "",
};

// code -> { itemId: {reps, interval, ease, due, lapses, reviews, last, attempts, correct} }
const drillData = {};
const drillsLoading = new Set();

function drillItems(code, moduleId) {
  const all = (typeof DRILLS !== "undefined" && DRILLS[code]) || [];
  return moduleId ? all.filter((it) => it.module === moduleId) : all;
}

function drillProgress(code) {
  return drillData[code] || Store.getDrillCache(code) || {};
}

function ensureDrillsLoaded(code) {
  if (drillData[code] || drillsLoading.has(code)) return;
  drillsLoading.add(code);
  drillData[code] = Store.getDrillCache(code); // show local state immediately
  Store.loadDrills(code).then((map) => {
    drillData[code] = map;
    drillsLoading.delete(code);
    const r = parseHash();
    if (r.view === "subject" && r.exam === code) renderSubjectView(code);
  });
}

function dueDrillCount(code, moduleId) {
  const prog = drillProgress(code);
  const today = SRS.today();
  return drillItems(code, moduleId).filter((it) => SRS.isDue(prog[it.id], today)).length;
}

// Same priority order as a flashcard session: anything due first, then items
// never attempted, then correct-and-not-yet-due as filler so a short run is
// still a full run.
function buildDrillRun(code, moduleId) {
  const items = drillItems(code, moduleId);
  const prog = drillProgress(code);
  const today = SRS.today();
  const due = shuffleArray(items.filter((it) => SRS.isDue(prog[it.id], today)));
  const fresh = shuffleArray(items.filter((it) => !prog[it.id]));
  const rest = shuffleArray(items.filter((it) => prog[it.id] && !SRS.isDue(prog[it.id], today)));
  return [...due, ...fresh, ...rest].slice(0, Math.min(DRILL_RUN_SIZE, items.length));
}

// Option order is shuffled per presentation so the answer's position can't be
// memorised across runs; `order` maps what's on screen back to the authored
// indices, and is what grading compares against.
function prepareDrillItem() {
  const item = drillState.items[drillState.idx];
  drillState.choice = null;
  drillState.choices = [];
  drillState.blanks = [];
  drillState.region = null;
  drillState.order = [];
  drillState.trays = [];
  drillState.submitted = false;
  drillState.lastCorrect = false;
  if (!item) return;
  if (item.type === "mcq" || item.type === "multi") {
    drillState.order = shuffleArray(item.options.map((_, i) => i));
  } else if (item.type === "cloze") {
    drillState.trays = item.blanks.map((b) => shuffleArray(b.options));
    drillState.blanks = item.blanks.map(() => null);
  }
}

function drillAnswered() {
  const item = drillState.items[drillState.idx];
  if (!item) return false;
  if (item.type === "mcq") return drillState.choice !== null;
  if (item.type === "multi") return drillState.choices.length > 0;
  if (item.type === "cloze") return drillState.blanks.every((b) => b !== null);
  if (item.type === "hotspot") return drillState.region !== null;
  return false;
}

function gradeDrill() {
  const item = drillState.items[drillState.idx];
  if (item.type === "mcq") return drillState.order[drillState.choice] === item.correct;
  if (item.type === "multi") {
    const picked = drillState.choices.map((d) => drillState.order[d]).sort((a, b) => a - b);
    const want = item.correct.slice().sort((a, b) => a - b);
    return picked.length === want.length && picked.every((v, i) => v === want[i]);
  }
  if (item.type === "cloze") return item.blanks.every((b, i) => drillState.blanks[i] === b.answer);
  if (item.type === "hotspot") return drillState.region === item.answer;
  return false;
}

function recordDrill(code, item, correct) {
  const prev = drillProgress(code)[item.id];
  const next = SRS.next(prev, correct, SRS.today());
  next.attempts = ((prev && prev.attempts) || 0) + 1;
  next.correct = ((prev && prev.correct) || 0) + (correct ? 1 : 0);
  Store.setDrill(code, item.id, next);
  drillData[code] = Store.getDrillCache(code);
}

// attempts/correct count every go at an item; `seen` counts how many distinct
// items have been tried at all. The button leads with `seen`, because the
// first question anyone asks of a study tool is "how much of this have I
// actually done" -- and an accuracy figure on its own can't answer it.
function drillAccuracy(code, moduleId) {
  const prog = drillProgress(code);
  let attempts = 0;
  let correct = 0;
  let seen = 0;
  const items = drillItems(code, moduleId);
  items.forEach((it) => {
    const st = prog[it.id];
    if (!st) return;
    seen += 1;
    attempts += st.attempts || 0;
    correct += st.correct || 0;
  });
  return { attempts, correct, seen, total: items.length, pct: attempts ? Math.round((correct / attempts) * 100) : 0 };
}

function drillTypeLabel(type) {
  if (type === "multi") return "Select all that apply";
  if (type === "cloze") return "Fill the gaps";
  if (type === "hotspot") return "Click the diagram";
  return "Multiple choice";
}

// Cloze text is authored with {{0}}, {{1}} markers. Each becomes a slot:
// before marking it's a button showing the chosen token, after marking it
// turns green or red against the authored answer.
function clozeTextHtml(item) {
  return item.text.replace(/\{\{(\d+)\}\}/g, (_, nStr) => {
    const n = Number(nStr);
    const chosen = drillState.blanks[n];
    if (drillState.submitted) {
      const right = chosen === item.blanks[n].answer;
      return `<span class="cloze-slot ${right ? "correct" : "wrong"}">${chosen ? escapeHtml(chosen) : "&mdash;"}${
        right ? "" : ` <span class="cloze-actual">${escapeHtml(item.blanks[n].answer)}</span>`
      }</span>`;
    }
    return `<span class="cloze-slot ${chosen ? "filled" : ""}">${chosen ? escapeHtml(chosen) : `blank ${n + 1}`}</span>`;
  });
}

function drillBodyHtml(item) {
  if (item.type === "hotspot") {
    const dg = (typeof DIAGRAMS !== "undefined" && DIAGRAMS[item.diagram]) || null;
    if (!dg) return `<p class="muted">Diagram &ldquo;${escapeHtml(item.diagram || "")}&rdquo; is missing.</p>`;
    return `<figure class="dg-figure">
      ${dg.svg}
      <figcaption class="dg-caption">${dg.title}</figcaption>
    </figure>
    ${drillState.submitted ? "" : `<p class="dg-hint muted">Click a curve, point or area on the diagram. On a keyboard, Tab to a region and press Enter.</p>`}`;
  }
  if (item.type === "cloze") {
    const trays = drillState.submitted
      ? ""
      : drillState.trays
          .map((tokens, n) => {
            const chosen = drillState.blanks[n];
            return `<div class="drill-tray">
              <span class="drill-tray-label">Blank ${n + 1}</span>
              ${tokens
                .map(
                  (t) =>
                    `<button class="drill-token ${chosen === t ? "picked" : ""}" data-blank="${n}" data-token="${escapeHtml(t)}">${escapeHtml(t)}</button>`
                )
                .join("")}
            </div>`;
          })
          .join("");
    return `<div class="cloze-text">${clozeTextHtml(item)}</div>${trays}`;
  }

  const multi = item.type === "multi";
  return `<div class="drill-options">
    ${drillState.order
      .map((origIdx, displayIdx) => {
        const picked = multi ? drillState.choices.includes(displayIdx) : drillState.choice === displayIdx;
        let cls = picked ? "picked" : "";
        if (drillState.submitted) {
          const isRight = multi ? item.correct.includes(origIdx) : origIdx === item.correct;
          cls = isRight ? "correct" : picked ? "wrong" : "";
        }
        return `<button class="drill-option ${cls}" data-display="${displayIdx}" ${drillState.submitted ? "disabled" : ""}>
          <span class="drill-option-mark">${multi ? "&#9633;" : String.fromCharCode(65 + displayIdx)}</span>
          <span class="drill-option-text">${item.options[origIdx]}</span>
        </button>`;
      })
      .join("")}
  </div>`;
}

// After marking, lead with why the chosen distractor was wrong -- that's the
// part of the format worth having -- then the general explanation.
function drillFeedbackHtml(item) {
  if (!drillState.submitted) return "";
  const bits = [];
  if (item.type === "hotspot" && !drillState.lastCorrect) {
    const why = item.why && item.why[drillState.region];
    if (why) bits.push(`<div class="drill-why"><strong>Why that part of the diagram is wrong:</strong> ${why}</div>`);
  }
  if (item.type === "mcq" && !drillState.lastCorrect) {
    const chosenOrig = drillState.order[drillState.choice];
    const why = item.why && item.why[chosenOrig];
    if (why) bits.push(`<div class="drill-why"><strong>Why that one is wrong:</strong> ${why}</div>`);
  }
  return `
    <div class="drill-verdict ${drillState.lastCorrect ? "correct" : "wrong"}">
      ${drillState.lastCorrect ? "&#9989; Correct" : "&#10060; Not quite"}
    </div>
    ${bits.join("")}
    <details class="explain-panel" open>
      <summary>Why this is the answer</summary>
      <div class="explain-body">${item.explain}</div>
    </details>`;
}

// Hotspot hit-testing.
//
// The obvious approach -- a fat transparent stroke on each region, letting
// the browser hit-test it -- breaks exactly where these diagrams are most
// interesting. Curves cross, the widened strokes overlap around the
// crossing, and SVG resolves the overlap by document order, so whichever
// curve happens to be drawn last wins. On a phone the AR and MC curves of
// the monopoly diagram cross at the midpoint of AR, and a tap anywhere near
// it selected MC however carefully the user aimed.
//
// So selection is resolved geometrically instead: convert the pointer to
// diagram coordinates, measure the true distance to every region, and take
// the nearest one within HOTSPOT_REACH. Ties go to whichever is actually
// closer, which is what a user means by "that one". Hover uses the same
// function, so what lights up under the cursor is always what a click will
// select.
//
// Distances are computed in viewBox units but the reach is specified in
// screen pixels and converted, so the target is the same physical size on a
// phone as on a desktop -- a diagram rendered at 275px wide would otherwise
// give a finger a third less to aim at than one rendered at 552px.
//
// Being generous costs nothing here: because the nearest region wins, a
// larger reach never selects the wrong curve. It only decides how far from
// everything a click has to be before it counts as missing the diagram.
const HOTSPOT_REACH_PX = 24;
// A sample every ~1.5 viewBox units. Coarser than this and the error in the
// measured distance to a curve (up to half the sample spacing) grows big
// enough to lose a tie it should win -- at 48 samples along a 374-unit line
// the error reached 4 units, and the consumer-surplus area beat the very
// demand curve that bounds it.
const HOTSPOT_SAMPLE_SPACING = 1.5;
const HOTSPOT_MAX_SAMPLES = 400;

// When two regions are effectively the same distance away, the more specific
// one should win: a point marker sits deliberately on top of the curves that
// cross there, and a curve bounding an area is a more precise thing to aim at
// than the area itself. Expressed as a small head start in viewBox units,
// which only decides near-ties -- a click clearly closer to something else
// still goes to that something else.
const HOTSPOT_PRIORITY = { dot: 8, line: 4, area: 0 };

function hotspotKind(hit) {
  if (hit.classList.contains("area")) return "area";
  if (hit.tagName.toLowerCase() === "circle") return "dot";
  return "line";
}

// Sampled points are cached on the element: the geometry never changes, so
// there is no reason to re-walk the path on every mousemove.
function hotspotSamples(hit) {
  if (hit.__dgPts) return hit.__dgPts;
  const len = typeof hit.getTotalLength === "function" ? hit.getTotalLength() : 0;
  const pts = [];
  if (len) {
    const n = Math.min(HOTSPOT_MAX_SAMPLES, Math.max(32, Math.ceil(len / HOTSPOT_SAMPLE_SPACING)));
    for (let i = 0; i <= n; i++) {
      const p = hit.getPointAtLength((len * i) / n);
      pts.push([p.x, p.y]);
    }
  }
  hit.__dgPts = pts;
  return pts;
}

function hotspotDistance(hit, pt) {
  const kind = hotspotKind(hit);
  // Areas: you are either inside the shape or you are not.
  if (kind === "area") {
    try {
      return hit.isPointInFill(pt) ? 0 : Infinity;
    } catch {
      return Infinity;
    }
  }
  // Dots: distance to the centre, not to the circumference, so clicking the
  // middle of a point marker beats a curve running underneath it.
  if (kind === "dot") {
    return Math.hypot(hit.cx.baseVal.value - pt.x, hit.cy.baseVal.value - pt.y);
  }
  let best = Infinity;
  for (const [x, y] of hotspotSamples(hit)) {
    const d = Math.hypot(x - pt.x, y - pt.y);
    if (d < best) best = d;
  }
  return best;
}

function nearestHotspot(svg, clientX, clientY) {
  const ctm = svg.getScreenCTM();
  if (!ctm) return null;
  const pt = svg.createSVGPoint();
  pt.x = clientX;
  pt.y = clientY;
  const local = pt.matrixTransform(ctm.inverse());
  // ctm.a is the horizontal scale from viewBox units to CSS pixels.
  const scale = Math.abs(ctm.a) || 1;
  const reach = HOTSPOT_REACH_PX / scale;
  let best = null;
  let bestScore = Infinity;
  svg.querySelectorAll(".dg-hot .hot").forEach((g) => {
    const hit = g.querySelector(".hot-hit");
    if (!hit) return;
    const d = hotspotDistance(hit, local);
    if (d > reach) return; // out of reach on its own merits, before any head start
    const score = d - HOTSPOT_PRIORITY[hotspotKind(hit)];
    if (score < bestScore) {
      bestScore = score;
      best = g.getAttribute("data-region");
    }
  });
  return best;
}

function wireHotspot(el, item, code, moduleId) {
  const svg = el.querySelector(".dg-svg");
  if (!svg) return;
  const groups = [...el.querySelectorAll(".dg-hot .hot")];

  groups.forEach((g) => {
    const region = g.getAttribute("data-region");
    g.classList.toggle("picked", !drillState.submitted && drillState.region === region);
    if (drillState.submitted) {
      g.classList.toggle("correct", region === item.answer);
      g.classList.toggle("wrong", region === drillState.region && region !== item.answer);
      g.removeAttribute("tabindex"); // marked: nothing left to choose
    }
  });

  if (drillState.submitted) return;

  const pick = (region) => {
    if (!region) return;
    drillState.region = drillState.region === region ? null : region;
    renderDrillView(code, moduleId);
  };

  // Pointer events land on the figure, not on individual regions, because the
  // regions no longer do their own hit-testing.
  const surface = el.querySelector(".dg-figure") || svg;
  surface.addEventListener("click", (e) => pick(nearestHotspot(svg, e.clientX, e.clientY)));
  surface.addEventListener("mousemove", (e) => {
    const near = nearestHotspot(svg, e.clientX, e.clientY);
    surface.classList.toggle("dg-over", !!near);
    groups.forEach((g) => g.classList.toggle("hover", g.getAttribute("data-region") === near));
  });
  surface.addEventListener("mouseleave", () => {
    surface.classList.remove("dg-over");
    groups.forEach((g) => g.classList.remove("hover"));
  });

  // Keyboard still works region by region: Tab to one, Enter to choose it.
  groups.forEach((g) => {
    g.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        pick(g.getAttribute("data-region"));
      }
    });
    g.addEventListener("focus", () => {
      groups.forEach((o) => o.classList.toggle("hover", o === g));
    });
    g.addEventListener("blur", () => g.classList.remove("hover"));
  });
}

function renderDrillView(code, moduleId) {
  const el = document.getElementById("drillView");
  const key = `${code}:${moduleId || "all"}`;
  ensureDrillsLoaded(code);

  if (drillState._lastKey !== key) {
    drillState._lastKey = key;
    drillState.code = code;
    drillState.module = moduleId || null;
    drillState.items = buildDrillRun(code, moduleId);
    drillState.idx = 0;
    drillState.stats = { answered: 0, correct: 0 };
    drillState.done = false;
    prepareDrillItem();
  }

  const modDef = moduleId ? (MODULES[code] || []).find((m) => m.id === moduleId) : null;
  const scopeLabel = modDef ? `${moduleId.toUpperCase()} &middot; ${modDef.title}` : `All of ${code}`;
  const backHref = moduleId ? `#/${code}/${moduleId}` : `#/${code}`;
  const backLabel = moduleId ? moduleId.toUpperCase() : code;

  if (!drillState.items.length) {
    el.innerHTML = `
      <button class="back-link" id="drillBack">&larr; ${backLabel}</button>
      <div class="flash-empty">
        <h2>Drills</h2>
        <p>No drill questions for ${scopeLabel} yet.</p>
      </div>`;
    document.getElementById("drillBack").addEventListener("click", () => navigate(backHref));
    return;
  }

  if (drillState.done) {
    const acc = drillState.stats.answered ? Math.round((drillState.stats.correct / drillState.stats.answered) * 100) : 0;
    const lifetime = drillAccuracy(code, moduleId);
    el.innerHTML = `
      <button class="back-link" id="drillBack">&larr; ${backLabel}</button>
      <div class="flash-session-summary">
        <div class="summary-badge">${acc >= 80 ? "&#127881;" : "&#128218;"}</div>
        <h2>Drill complete</h2>
        <p class="summary-title">${scopeLabel}</p>
        <p class="summary-stats">You answered <strong>${drillState.stats.correct}</strong> of
          <strong>${drillState.stats.answered}</strong> correctly &mdash; <strong>${acc}%</strong>.</p>
        <p class="summary-overall">Lifetime on this scope: ${lifetime.correct}/${lifetime.attempts} (${lifetime.pct}%).
          Drill results are tracked separately from flashcard stars.</p>
        <div class="summary-actions">
          <button class="btn primary" id="drillAgain">&#128256; New drill run</button>
          <button class="btn" id="drillBackBtn">&larr; Back to ${backLabel}</button>
        </div>
      </div>`;
    document.getElementById("drillBack").addEventListener("click", () => navigate(backHref));
    document.getElementById("drillBackBtn").addEventListener("click", () => navigate(backHref));
    document.getElementById("drillAgain").addEventListener("click", () => {
      drillState._lastKey = ""; // forces a fresh run on the next render
      renderDrillView(code, moduleId);
    });
    renderMath(el);
    return;
  }

  const item = drillState.items[drillState.idx];
  const n = drillState.items.length;
  const prog = drillProgress(code)[item.id];
  const canSubmit = drillAnswered();
  const isLast = drillState.idx === n - 1;

  el.innerHTML = `
    <button class="back-link" id="drillBack">&larr; ${backLabel}</button>
    <div class="flash-head">
      <div class="flash-title-row">
        <h2>Drills &mdash; ${scopeLabel}</h2>
        <span class="flash-progress">${drillState.stats.correct}/${drillState.stats.answered} correct</span>
      </div>
      <div class="flash-progress-track"><div class="flash-progress-fill" style="width:${Math.round((drillState.idx / n) * 100)}%"></div></div>
    </div>
    <div class="flashcard-layout">
      <div class="flashcard drill-card">
        <div class="flashcard-label">
          Question ${drillState.idx + 1} of ${n}
          <span class="drill-type">${drillTypeLabel(item.type)}</span>
          <span class="srs-label ${SRS.isDue(prog, SRS.today()) ? "due" : prog ? "scheduled" : "new"}">${SRS.describeDue(prog, SRS.today())}</span>
        </div>
        ${item.q ? `<div class="flashcard-question">${item.q}</div>` : ""}
        ${drillBodyHtml(item)}
        ${drillFeedbackHtml(item)}
        <div class="flash-score-row">
          ${
            drillState.submitted
              ? `<button class="btn primary" id="drillNext">${isLast ? "Finish" : "Next question"} &rarr;</button>`
              : `<button class="btn primary" id="drillSubmit" ${canSubmit ? "" : "disabled"}>Check answer</button>`
          }
        </div>
      </div>
    </div>`;

  document.getElementById("drillBack").addEventListener("click", () => navigate(backHref));

  // Hotspot regions are <g> elements, so they need their state painted on
  // directly and their own click/Enter handling rather than the button
  // wiring the other types use.
  wireHotspot(el, item, code, moduleId);

  if (!drillState.submitted) {
    el.querySelectorAll(".drill-option").forEach((btn) => {
      btn.addEventListener("click", () => {
        const d = Number(btn.dataset.display);
        if (item.type === "multi") {
          const at = drillState.choices.indexOf(d);
          if (at >= 0) drillState.choices.splice(at, 1);
          else drillState.choices.push(d);
        } else {
          drillState.choice = d;
        }
        renderDrillView(code, moduleId);
      });
    });
    el.querySelectorAll(".drill-token").forEach((btn) => {
      btn.addEventListener("click", () => {
        const b = Number(btn.dataset.blank);
        const token = btn.dataset.token;
        drillState.blanks[b] = drillState.blanks[b] === token ? null : token;
        renderDrillView(code, moduleId);
      });
    });
    const submit = document.getElementById("drillSubmit");
    if (submit) {
      submit.addEventListener("click", () => {
        if (!drillAnswered()) return;
        drillState.lastCorrect = gradeDrill();
        drillState.submitted = true;
        drillState.stats.answered += 1;
        if (drillState.lastCorrect) drillState.stats.correct += 1;
        recordDrill(code, item, drillState.lastCorrect);
        renderDrillView(code, moduleId);
      });
    }
  } else {
    document.getElementById("drillNext").addEventListener("click", () => {
      if (isLast) {
        drillState.done = true;
      } else {
        drillState.idx += 1;
        prepareDrillItem();
      }
      renderDrillView(code, moduleId);
    });
  }

  renderMath(el);
}

/* ---------- exam hub (pass rates + IFoA dates) ---------- */

// PASS_STATS (exam-stats.js, generated from the examiners' reports) and
// EXAM_DATES (exam-dates.js, copied by hand from the IFoA site) feed this page.

const HUB_SUBJECT_KEY = "examHubSubject";
const MONTH_ABBR = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function sittingLabel(sitting) {
  const [y, m] = sitting.split("-");
  return `${MONTH_ABBR[Number(m) - 1]} ${y}`;
}

function fmtHubDate(iso, withWeekday) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("en-GB", {
    weekday: withWeekday ? "short" : undefined,
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function daysFromToday(iso) {
  return Math.round((new Date(`${iso}T12:00:00`) - new Date(`${SRS.today()}T12:00:00`)) / 86400000);
}

function countdownLabel(iso) {
  const n = daysFromToday(iso);
  if (n === 0) return "today";
  if (n === 1) return "tomorrow";
  if (n === -1) return "yesterday";
  return n > 0 ? `in ${n} days` : `${-n} days ago`;
}

// Papers in a session that belong to a subject: "CM1A" and "CP1 paper 2"
// both start with their subject code.
function sessionPapers(session, code) {
  return Object.entries(session.papers)
    .flatMap(([date, papers]) => papers.filter((p) => p.slice(0, 3) === code).map((p) => ({ date, paper: p })))
    .sort((a, b) => a.date.localeCompare(b.date));
}

function resultsGroup(code) {
  return /^C[SMB]/.test(code) ? "core" : "advanced";
}

// The first session in which this subject still has a paper today or later.
function nextSitting(code) {
  if (typeof EXAM_DATES === "undefined") return null;
  const today = SRS.today();
  for (const s of EXAM_DATES.sessions) {
    const papers = sessionPapers(s, code);
    if (papers.length && papers[papers.length - 1].date >= today) return { session: s, papers };
  }
  return null;
}

function passSummary(rows) {
  const sat = rows.reduce((a, r) => a + r.sat, 0);
  const passed = rows.reduce((a, r) => a + r.passed, 0);
  const marks = rows.map((r) => r.mark).filter((m) => m !== null).sort((a, b) => a - b);
  return {
    rate: sat ? (passed / sat) * 100 : 0,
    sat,
    passed,
    minMark: marks[0],
    maxMark: marks[marks.length - 1],
    medianMark: marks.length ? marks[Math.floor(marks.length / 2)] : null,
  };
}

function hubDefaultSubject() {
  try {
    const saved = localStorage.getItem(HUB_SUBJECT_KEY);
    if (saved && SUBJECTS[saved]) return saved;
  } catch {
    /* storage unavailable */
  }
  return Object.keys(MODULES)[0] || "CB1";
}

function renderExamHub(requested) {
  const el = document.getElementById("examHubView");
  const code = requested && SUBJECTS[requested] ? requested : hubDefaultSubject();
  try {
    localStorage.setItem(HUB_SUBJECT_KEY, code);
  } catch {
    /* storage unavailable */
  }
  const rows = (typeof PASS_STATS !== "undefined" && PASS_STATS[code]) || [];
  const today = SRS.today();

  const options = Object.keys(SUBJECTS)
    .map((c) => `<option value="${c}"${c === code ? " selected" : ""}>${c} &mdash; ${escapeHtml(SUBJECTS[c].name)}</option>`)
    .join("");

  // --- next sitting ---
  const next = nextSitting(code);
  let nextHtml;
  if (next) {
    const s = next.session;
    const group = resultsGroup(code);
    const upcomingDeadlines = s.deadlines.filter((d) => d.date >= today);
    nextHtml = `
      <div class="hub-papers">${next.papers
        .map(
          (p) => `
        <div class="hub-paper${p.date < today ? " past" : ""}">
          <span class="hub-paper-name">${escapeHtml(p.paper)}</span>
          <span class="hub-paper-date">${fmtHubDate(p.date, true)}, 09:00</span>
          <span class="hub-paper-count">${countdownLabel(p.date)}</span>
        </div>`
        )
        .join("")}</div>
      <ul class="hub-keydates">
        ${upcomingDeadlines.map((d) => `<li><span>${fmtHubDate(d.date)}</span> ${escapeHtml(d.label)}</li>`).join("")}
        ${
          s.results[group]
            ? `<li><span>${fmtHubDate(s.results[group])}</span> Results released${
                s.breakdown && s.breakdown[group] ? ` (mark breakdown ${fmtHubDate(s.breakdown[group])})` : ""
              }</li>`
            : `<li>Results date not published yet</li>`
        }
      </ul>`;
    nextHtml = `
      <section class="dash-section">
        <div class="dash-section-head"><h3>Next sitting &mdash; ${s.name}</h3></div>
        ${nextHtml}
      </section>`;
  } else {
    nextHtml = `
      <section class="dash-section">
        <div class="dash-section-head"><h3>Next sitting</h3></div>
        <p class="muted">${
          code === "CB3"
            ? "CB3 is booked as an online assessment through the member portal, outside the April and September sessions."
            : `No upcoming ${code} dates on file. Check the <a href="${EXAM_DATES.source}" target="_blank" rel="noopener">IFoA exam dates page</a>.`
        }</p>
      </section>`;
  }

  // --- pass statistics ---
  let statsHtml;
  if (rows.length) {
    const all = passSummary(rows);
    const latest = rows[rows.length - 1];
    const latestRate = (latest.passed / latest.sat) * 100;
    const noted = rows.filter((r) => r.note);
    const tableRows = rows
      .slice()
      .reverse()
      .map((r) => {
        const rate = (r.passed / r.sat) * 100;
        return `
        <tr>
          <th scope="row">${sittingLabel(r.sitting)}${r.note ? `<sup title="${escapeHtml(r.note)}">&dagger;</sup>` : ""}</th>
          <td class="num">${r.mark === null ? "&mdash;" : r.mark}</td>
          <td class="num hub-sat">${r.sat.toLocaleString("en-GB")}</td>
          <td class="num">${r.passed.toLocaleString("en-GB")}</td>
          <td class="hub-rate">${barHtml(Math.round(rate))}<span class="dash-row-pct">${rate.toFixed(1)}%</span></td>
        </tr>`;
      })
      .join("");

    statsHtml = `
      <section class="game-bar dash-tiles">
        <div class="game-stat" title="${all.passed.toLocaleString("en-GB")} of ${all.sat.toLocaleString("en-GB")} candidates across ${rows.length} sittings">
          <span class="game-stat-icon">&#9989;</span>
          <span class="game-stat-value">${all.rate.toFixed(0)}%</span>
          <span class="game-stat-label">pass rate, all ${rows.length} sittings</span>
        </div>
        <div class="game-stat">
          <span class="game-stat-icon">&#128197;</span>
          <span class="game-stat-value">${latestRate.toFixed(0)}%</span>
          <span class="game-stat-label">pass rate, ${sittingLabel(latest.sitting)}</span>
        </div>
        <div class="game-stat">
          <span class="game-stat-icon">&#127919;</span>
          <span class="game-stat-value">${all.medianMark}</span>
          <span class="game-stat-label">typical pass mark (range ${all.minMark}&ndash;${all.maxMark})</span>
        </div>
        <div class="game-stat">
          <span class="game-stat-icon">&#128101;</span>
          <span class="game-stat-value">${latest.sat.toLocaleString("en-GB")}</span>
          <span class="game-stat-label">sat ${code} in ${sittingLabel(latest.sitting)}</span>
        </div>
      </section>

      <section class="dash-section">
        <div class="dash-section-head"><h3>Pass marks and pass rates</h3></div>
        <p class="dash-note">The pass mark is out of 100 and set by the examiners after each sitting, according to how hard they judged the paper. ${
          /^(CM|CS)/.test(code) ? `${code} has two papers (A and B); the figures cover both combined. ` : ""
        }Taken from the examiners' reports in this repo, ${sittingLabel(rows[0].sitting)} to ${sittingLabel(latest.sitting)}.</p>
        <div class="hub-table-wrap">
          <table class="hub-table">
            <thead><tr><th scope="col">Sitting</th><th scope="col" class="num">Pass mark</th><th scope="col" class="num hub-sat">Sat</th><th scope="col" class="num">Passed</th><th scope="col">Pass rate</th></tr></thead>
            <tbody>${tableRows}</tbody>
          </table>
        </div>
        ${noted.length ? `<p class="dash-note hub-footnote">${noted.map((r) => `&dagger; ${sittingLabel(r.sitting)}: ${escapeHtml(r.note)}`).join("<br>")}</p>` : ""}
      </section>`;
  } else {
    statsHtml = `
      <section class="dash-section">
        <div class="dash-section-head"><h3>Pass marks and pass rates</h3></div>
        <p class="muted">${
          code === "CB3"
            ? "CB3 is an online assessment with no examiners' report, so there are no pass marks or pass rates to show."
            : `No examiners' reports for ${code} are in the repo yet.`
        }</p>
      </section>`;
  }

  // --- every session's timetable ---
  const sessionsHtml =
    typeof EXAM_DATES === "undefined"
      ? ""
      : EXAM_DATES.sessions
          .map((s) => {
            const done = Object.keys(s.papers).every((d) => d < today) && s.results.advanced < today;
            const days = Object.entries(s.papers)
              .map(
                ([date, papers]) => `
              <div class="hub-day${date < today ? " past" : ""}">
                <span class="hub-day-date">${fmtHubDate(date, true)}</span>
                <span class="hub-day-papers">${papers
                  .map((p) => `<span class="hub-chip${p.slice(0, 3) === code ? " mine" : ""}">${escapeHtml(p)}</span>`)
                  .join("")}</span>
              </div>`
              )
              .join("");
            const keyDates = [
              ...s.deadlines,
              { date: s.results.core, label: "Results released: CS, CM, CB" },
              { date: s.results.advanced, label: "Results released: CP, SP, SA" },
            ]
              .filter((d) => d.date)
              .sort((a, b) => a.date.localeCompare(b.date))
              .map((d) => `<li class="${d.date < today ? "past" : ""}"><span>${fmtHubDate(d.date)}</span> ${escapeHtml(d.label)}</li>`)
              .join("");
            return `
            <details class="dash-subject hub-session"${done ? "" : " open"}>
              <summary><span class="dash-subject-name"><strong>${s.name}</strong></span><span class="dash-subject-meta">${done ? "finished" : ""}</span></summary>
              <div class="hub-days">${days}</div>
              <ul class="hub-keydates">${keyDates}</ul>
            </details>`;
          })
          .join("");

  el.innerHTML = `
    <button class="back-link" id="backFromHub">&larr; All subjects</button>
    <div class="subject-head">
      <h2>Exam Hub</h2>
      <p class="subject-blurb">Pass marks, pass rates and IFoA exam dates for each subject.</p>
    </div>

    <label class="hub-picker">
      <span>Subject</span>
      <select id="hubSubject" class="text-input">${options}</select>
    </label>
    <div class="hub-subject-line"><a href="#/${code}">Go to the ${code} study page &rarr;</a></div>

    ${nextHtml}
    ${statsHtml}

    ${
      sessionsHtml
        ? `<section class="dash-section">
        <div class="dash-section-head"><h3>IFoA exam timetable</h3></div>
        <p class="dash-note">All papers start at 09:00 UK time. ${code} is highlighted. Copied from the <a href="${EXAM_DATES.source}" target="_blank" rel="noopener">IFoA exam dates page</a>, which is checked weekly; last changed ${fmtHubDate(
          EXAM_DATES.updated
        )}. The IFoA can change dates, so confirm there before booking.</p>
        ${sessionsHtml}
      </section>`
        : ""
    }
  `;

  document.getElementById("backFromHub").addEventListener("click", () => navigate("#/"));
  document.getElementById("hubSubject").addEventListener("change", (e) => {
    history.replaceState(null, "", `#/exams/${e.target.value}`);
    renderExamHub(e.target.value);
  });
}

/* ---------- routing ---------- */

function parseHash() {
  const h = location.hash.replace(/^#\/?/, "");
  if (!h) return { view: "home" };
  const parts = h.split("/").filter(Boolean);
  const first = parts[0].toLowerCase();
  if (first === "dashboard") return { view: "dashboard" };
  if (first === "welcome") return { view: "welcome" };
  if (first === "exams") return { view: "exams", exam: parts[1] ? parts[1].toUpperCase() : null };
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
  // Drills scope by an optional THIRD segment (#/CB2/drill/m06) rather than
  // hanging off the module route (#/CB2/m06/drill), so the flashcard route's
  // third segment stays free for the card deep-links search emits.
  if (parts[1].toLowerCase() === "drill") {
    return { view: "drill", exam: parts[0].toUpperCase(), module: parts[2] ? parts[2].toLowerCase() : null };
  }
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
  document.getElementById("drillView").hidden = r.view !== "drill";
  document.getElementById("examHubView").hidden = r.view !== "exams";
  document.getElementById("welcomeView").hidden = r.view !== "welcome";
  document.querySelectorAll(".topbar .nav-link").forEach((a) => {
    if (a.dataset.view === r.view) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
  if (r.view !== "questions") pauseQTimer();
  document.getElementById("kbdHint").hidden = !["flash", "mixed", "review", "questions"].includes(r.view);
  window.scrollTo(0, 0);

  if (r.view === "home") {
    renderGameBar();
    renderDueBanner();
    renderHomePrompts();
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
    refreshExamPlan();
  } else if (r.view === "welcome") {
    startWelcome();
    renderWelcomeView();
  } else if (r.view === "drill") {
    renderDrillView(r.exam, r.module);
  } else if (r.view === "exams") {
    renderExamHub(r.exam);
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
        : "") +
      (Store.isResultTableMissing()
        ? " Exam results are saved on this device only until supabase/migrations/005_subject_results.sql is run on the Supabase project."
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
  examPlan = Store.getExamPlanCache();
  refreshExamPlan();
  subjectResults = Store.getResultsCache();
  refreshResults();
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
  refreshExamPlan(); // the plan cached before init was read under the signed-out key
  subjectResults = Store.getResultsCache(); // likewise results
  refreshResults();
});
