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
const SESSION_SIZE = 10;
const flashState = {
  code: null,
  moduleId: null,
  cardIndex: 0,
  revealed: false,
  typed: "",
  mode: "session", // "session" | "full"
  sessionIndices: [],
  _lastKey: "",
};

function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Weighted random draw: unmastered cards first (shuffled), topped up with
// mastered ones only if the module has fewer than SESSION_SIZE unmastered.
function generateSession(code, moduleId) {
  const def = (MODULES[code] || []).find((m) => m.id === moduleId);
  if (!def) return [];
  const fd = flashData[code];
  const moduleMastery = (fd && fd.mastery && fd.mastery[moduleId]) || {};
  const total = def.cards.length;
  const allIdx = Array.from({ length: total }, (_, i) => i);
  const unmastered = shuffleArray(allIdx.filter((i) => !moduleMastery[i]));
  const mastered = shuffleArray(allIdx.filter((i) => !!moduleMastery[i]));
  return [...unmastered, ...mastered].slice(0, Math.min(SESSION_SIZE, total));
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

const mixedState = { code: null, cardIndex: 0, revealed: false, typed: "", entries: [], _lastKey: "" };

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
  const mastery = await Store.loadMastery(code);
  flashData[code] = { mastery };
  onFlashDataChanged(code);
}

function loadAllFlash() {
  for (const code of Object.keys(MODULES)) loadFlash(code);
}

function scoreCard(code, moduleId, idx, sufficient) {
  Store.setMastery(code, moduleId, idx, sufficient); // instant locally; syncs in the background if signed in
  flashData[code] = { mastery: Store.getMasteryCache(code) };

  const def = (MODULES[code] || []).find((m) => m.id === moduleId);
  const seq = def ? currentSequence(code, moduleId, def) : [];

  flashState.revealed = false;
  flashState.typed = "";
  flashState.cardIndex = Math.min(seq.length - 1, flashState.cardIndex + 1);

  renderFlashView(code, moduleId);
  renderGameBar();
  renderSyncStatus();
}

function scoreMixedCard(code, moduleId, idx, sufficient) {
  Store.setMastery(code, moduleId, idx, sufficient);
  flashData[code] = { mastery: Store.getMasteryCache(code) };

  mixedState.revealed = false;
  mixedState.typed = "";
  mixedState.cardIndex = Math.min(mixedState.entries.length - 1, mixedState.cardIndex + 1);

  renderMixedView(code);
  renderGameBar();
  renderSyncStatus();
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

function renderGameBar() {
  const total = totalMasteredCards();
  const status = fellowshipStatus();

  document.getElementById("starTotal").textContent = total;
  document.getElementById("rankLabel").textContent = status.label;
  document.getElementById("rankSub").textContent = status.sub;
  document.getElementById("streakValue").textContent = Store.getStreakCache().count;
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
                   <span class="mastery-label">${masteredCount}/${cardCount} &#11088;</span>
                 </div>`
              : `<div class="module-card-foot muted">Flashcards coming soon</div>`
          }
        </div>`;
      })
      .join("")}</div>`;
  }

  const totalCards = modDefs.reduce((s, m) => s + m.cards.length, 0);
  const totalQuestions = (QUESTIONS[code] || []).length;

  el.innerHTML = `
    <button class="back-link" id="backToHome">&larr; All subjects</button>
    <div class="subject-head">
      <div class="subject-code">${code}</div>
      <h2>${info.name}</h2>
      ${info.blurb ? `<p class="subject-blurb">${info.blurb}</p>` : ""}
      ${
        totalCards > 0
          ? `<button class="btn primary mixed-session-btn" id="startMixed">&#128256; Mixed session &mdash; 10 random cards across all of ${code}</button>`
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

  const seq = currentSequence(code, moduleId, def);
  if (flashState.cardIndex >= seq.length) flashState.cardIndex = 0;
  const pos = flashState.cardIndex;
  const realIdx = seq[pos];
  const card = cards[realIdx];
  const isMastered = !!moduleMastery[realIdx];

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
        <div class="flashcard-label">Card ${pos + 1} of ${seq.length}</div>
        <div class="flashcard-question">${card.q}</div>
        ${
          !flashState.revealed
            ? `<textarea id="answerInput" class="answer-input" placeholder="Type your answer here (optional) — then reveal to check yourself.">${flashState.typed}</textarea>
               <button class="btn primary" id="revealBtn">Reveal answer</button>`
            : `<div class="flashcard-answer"><strong>Answer:</strong> ${card.a}</div>
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

  if (mixedState.cardIndex >= mixedState.entries.length) mixedState.cardIndex = 0;
  const pos = mixedState.cardIndex;
  const entry = mixedState.entries[pos];
  const def = modules.find((m) => m.id === entry.moduleId);
  const card = def.cards[entry.cardIdx];

  const fd = flashData[code] || { mastery: {} };
  const moduleMastery = (fd.mastery && fd.mastery[entry.moduleId]) || {};
  const isMastered = !!moduleMastery[entry.cardIdx];
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
        <div class="flashcard-label">Card ${pos + 1} of ${mixedState.entries.length}</div>
        <div class="flashcard-question">${card.q}</div>
        ${
          !mixedState.revealed
            ? `<textarea id="answerInput" class="answer-input" placeholder="Type your answer here (optional) — then reveal to check yourself.">${mixedState.typed}</textarea>
               <button class="btn primary" id="revealBtn">Reveal answer</button>`
            : `<div class="flashcard-answer"><strong>Answer:</strong> ${card.a}</div>
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
  }

  renderMath(el);
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
  const r = parseHash();
  if (r.view === "subject" && r.exam === code) renderSubjectView(code);
  if (r.view === "flash" && r.exam === code) renderFlashView(code, r.module);
  if (r.view === "mixed" && r.exam === code) renderMixedView(code);
}

/* ---------- routing ---------- */

function parseHash() {
  const h = location.hash.replace(/^#\/?/, "");
  if (!h) return { view: "home" };
  const parts = h.split("/").filter(Boolean);
  if (parts.length === 1) return { view: "subject", exam: parts[0].toUpperCase() };
  if (parts[1].toLowerCase() === "mixed") return { view: "mixed", exam: parts[0].toUpperCase() };
  if (parts[1].toLowerCase() === "questions") return { view: "questions", exam: parts[0].toUpperCase() };
  return { view: "flash", exam: parts[0].toUpperCase(), module: parts[1].toLowerCase() };
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
  window.scrollTo(0, 0);

  if (r.view === "home") {
    renderGameBar();
  } else if (r.view === "subject") {
    renderSubjectView(r.exam);
  } else if (r.view === "flash") {
    const key = `${r.exam}/${r.module}`;
    if (flashState._lastKey !== key) {
      flashState.cardIndex = 0;
      flashState.revealed = false;
      flashState.typed = "";
      flashState.mode = "session";
      flashState.sessionIndices = generateSession(r.exam, r.module);
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
    const key = `questions:${r.exam}`;
    if (qbankState._lastKey !== key) {
      qbankState.qIndex = 0;
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
      pending > 0 ? `${pending} change${pending === 1 ? "" : "s"} waiting to sync.` : "All changes saved.";
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
});
