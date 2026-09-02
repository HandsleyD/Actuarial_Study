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
const TOKEN_KEY = "actuarialStudyPAT";
const STREAK_KEY = "actuarialStudyStreak";

const examData = {}; // code -> { modules: [{id, status, notes}], sha, text }
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

const RANKS = [
  { min: 0, label: "Trainee Actuary" },
  { min: 5, label: "Student Actuary" },
  { min: 20, label: "Associate (in training)" },
  { min: 50, label: "Fellowship Candidate" },
  { min: 80, label: "Fellow of the Institute" },
];

function pathFor(code) {
  return `maths-study/exams/${code}/progress.md`;
}

function pathForFlash(code) {
  return `maths-study/exams/${code}/flashcards/mastery.json`;
}

function getToken() {
  return localStorage.getItem(TOKEN_KEY) || "";
}

function statusClass(status) {
  const s = status.toLowerCase();
  if (s === "done") return "done";
  if (s === "in progress") return "in-progress";
  return "not-started";
}

function toBase64(str) {
  const bytes = new TextEncoder().encode(str);
  let binary = "";
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return btoa(binary);
}

function fromBase64(b64) {
  const binary = atob(b64.replace(/\n/g, ""));
  const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
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

function setModuleStatus(text, moduleId, newStatus) {
  const lines = text.split("\n");
  const rowRe = new RegExp(`^(\\|\\s*${moduleId}\\s*\\|)([^|]*)(\\|.*)$`, "i");
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(rowRe);
    if (m) {
      lines[i] = `${m[1]} ${newStatus} ${m[3]}`;
      break;
    }
  }
  return lines.join("\n");
}

function showBanner(msg, isError) {
  const el = document.getElementById("statusBanner");
  el.textContent = msg;
  el.hidden = false;
  el.style.background = isError ? "var(--progress-bg)" : "var(--accent-soft)";
  el.style.color = isError ? "var(--progress)" : "var(--accent)";
}

function hideBanner() {
  document.getElementById("statusBanner").hidden = true;
}

/* ---------- progress.md (module status) ---------- */

async function fetchRaw(code) {
  const url = `https://raw.githubusercontent.com/${CONFIG.owner}/${CONFIG.repo}/${CONFIG.branch}/${pathFor(code)}?t=${Date.now()}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`raw fetch failed (${res.status})`);
  return res.text();
}

async function fetchViaApi(code) {
  const token = getToken();
  const res = await fetch(
    `https://api.github.com/repos/${CONFIG.owner}/${CONFIG.repo}/contents/${pathFor(code)}?ref=${CONFIG.branch}`,
    {
      headers: token
        ? { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json" }
        : { Accept: "application/vnd.github+json" },
    }
  );
  if (!res.ok) throw new Error(`api fetch failed (${res.status})`);
  const json = await res.json();
  return { text: fromBase64(json.content), sha: json.sha };
}

async function loadExam(code) {
  try {
    let text, sha;
    if (getToken()) {
      const r = await fetchViaApi(code);
      text = r.text;
      sha = r.sha;
    } else {
      text = await fetchRaw(code);
      sha = null;
    }
    examData[code] = { modules: parseModules(text), sha, text };
  } catch (e) {
    examData[code] = { modules: [], error: true };
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

async function saveModuleStatus(code, moduleId, next, token, attempt = 0) {
  const { text, sha } = await fetchViaApi(code);
  const newText = setModuleStatus(text, moduleId, next);

  const res = await fetch(
    `https://api.github.com/repos/${CONFIG.owner}/${CONFIG.repo}/contents/${pathFor(code)}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
      },
      body: JSON.stringify({
        message: `Update ${code} ${moduleId}: ${next}`,
        content: toBase64(newText),
        sha,
        branch: CONFIG.branch,
      }),
    }
  );

  if (!res.ok) {
    if (res.status === 409 && attempt === 0) {
      return saveModuleStatus(code, moduleId, next, token, attempt + 1);
    }
    const body = await res.json().catch(() => ({}));
    throw new Error(body.message || `save failed (${res.status})`);
  }

  return newText;
}

async function handleToggle(btn) {
  const code = btn.dataset.exam;
  const moduleId = btn.dataset.module;
  const token = getToken();

  if (!token) {
    openSettings();
    showBanner("Add a GitHub token in Settings to save progress.", true);
    return;
  }

  const current = btn.textContent.trim();
  const idx = STATUSES.findIndex((s) => s.toLowerCase() === current.toLowerCase());
  const next = STATUSES[(idx + 1) % STATUSES.length];

  btn.disabled = true;
  const prevLabel = btn.textContent;
  btn.textContent = "Saving…";

  try {
    const newText = await enqueue(code, () => saveModuleStatus(code, moduleId, next, token));

    const data = examData[code];
    const mod = data.modules.find((m) => m.id === moduleId);
    if (mod) mod.status = next;
    data.text = newText;
    onExamDataChanged(code);
    hideBanner();
  } catch (e) {
    btn.textContent = prevLabel;
    showBanner(`Could not save ${code} ${moduleId}: ${e.message}`, true);
  } finally {
    btn.disabled = false;
  }
}

/* ---------- flashcard mastery (per-card sufficient/insufficient) ---------- */

async function fetchFlashRaw(code) {
  const url = `https://raw.githubusercontent.com/${CONFIG.owner}/${CONFIG.repo}/${CONFIG.branch}/${pathForFlash(code)}?t=${Date.now()}`;
  const res = await fetch(url, { cache: "no-store" });
  if (res.status === 404) return {};
  if (!res.ok) throw new Error(`raw fetch failed (${res.status})`);
  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch {
    return {};
  }
}

async function fetchFlashViaApi(code) {
  const token = getToken();
  const res = await fetch(
    `https://api.github.com/repos/${CONFIG.owner}/${CONFIG.repo}/contents/${pathForFlash(code)}?ref=${CONFIG.branch}`,
    {
      headers: token
        ? { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json" }
        : { Accept: "application/vnd.github+json" },
    }
  );
  if (res.status === 404) return { data: {}, sha: null };
  if (!res.ok) throw new Error(`api fetch failed (${res.status})`);
  const json = await res.json();
  let data = {};
  try {
    data = JSON.parse(fromBase64(json.content) || "{}");
  } catch {
    data = {};
  }
  return { data, sha: json.sha };
}

async function loadFlash(code) {
  try {
    let data, sha;
    if (getToken()) {
      const r = await fetchFlashViaApi(code);
      data = r.data;
      sha = r.sha;
    } else {
      data = await fetchFlashRaw(code);
      sha = null;
    }
    flashData[code] = { mastery: data, sha };
  } catch (e) {
    flashData[code] = { mastery: {}, error: true };
  }
  onFlashDataChanged(code);
}

function loadAllFlash() {
  for (const code of Object.keys(MODULES)) loadFlash(code);
}

async function saveMastery(code, moduleId, cardIdx, value, token, attempt = 0) {
  const { data, sha } = await fetchFlashViaApi(code);
  if (!data[moduleId]) data[moduleId] = {};
  data[moduleId][String(cardIdx)] = value;
  const newText = JSON.stringify(data, null, 2);

  const res = await fetch(
    `https://api.github.com/repos/${CONFIG.owner}/${CONFIG.repo}/contents/${pathForFlash(code)}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
      },
      body: JSON.stringify({
        message: `Update ${code} ${moduleId} flashcard ${cardIdx}: ${value ? "sufficient" : "insufficient"}`,
        content: toBase64(newText),
        sha: sha || undefined,
        branch: CONFIG.branch,
      }),
    }
  );

  if (!res.ok) {
    if (res.status === 409 && attempt === 0) {
      return saveMastery(code, moduleId, cardIdx, value, token, attempt + 1);
    }
    const body = await res.json().catch(() => ({}));
    throw new Error(body.message || `save failed (${res.status})`);
  }

  return data;
}

async function scoreCard(code, moduleId, idx, sufficient) {
  const token = getToken();
  if (!token) {
    openSettings();
    showBanner("Add a GitHub token in Settings to save flashcard scores.", true);
    return;
  }

  document.querySelectorAll(".score-btn").forEach((b) => (b.disabled = true));

  try {
    const data = await enqueue(`flash:${code}`, () => saveMastery(code, moduleId, idx, sufficient, token));
    flashData[code] = { mastery: data, sha: flashData[code] ? flashData[code].sha : null };

    const def = (MODULES[code] || []).find((m) => m.id === moduleId);
    const seq = def ? currentSequence(code, moduleId, def) : [];

    flashState.revealed = false;
    flashState.typed = "";
    flashState.cardIndex = Math.min(seq.length - 1, flashState.cardIndex + 1);

    renderFlashView(code, moduleId);
    renderGameBar();
    hideBanner();
  } catch (e) {
    showBanner(`Could not save score: ${e.message}`, true);
    renderFlashView(code, moduleId);
  }
}

async function scoreMixedCard(code, moduleId, idx, sufficient) {
  const token = getToken();
  if (!token) {
    openSettings();
    showBanner("Add a GitHub token in Settings to save flashcard scores.", true);
    return;
  }

  document.querySelectorAll(".score-btn").forEach((b) => (b.disabled = true));

  try {
    const data = await enqueue(`flash:${code}`, () => saveMastery(code, moduleId, idx, sufficient, token));
    flashData[code] = { mastery: data, sha: flashData[code] ? flashData[code].sha : null };

    mixedState.revealed = false;
    mixedState.typed = "";
    mixedState.cardIndex = Math.min(mixedState.entries.length - 1, mixedState.cardIndex + 1);

    renderMixedView(code);
    renderGameBar();
    hideBanner();
  } catch (e) {
    showBanner(`Could not save score: ${e.message}`, true);
    renderMixedView(code);
  }
}

/* ---------- request queueing (avoid concurrent PUTs to the same file) ---------- */

const requestQueues = {};

function enqueue(key, fn) {
  const prev = requestQueues[key] || Promise.resolve();
  const next = prev.catch(() => {}).then(fn);
  requestQueues[key] = next;
  return next;
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

function rankFor(count) {
  let r = RANKS[0];
  for (const rank of RANKS) if (count >= rank.min) r = rank;
  return r;
}

function getStreak() {
  try {
    const raw = localStorage.getItem(STREAK_KEY);
    return raw ? JSON.parse(raw).count : 0;
  } catch {
    return 0;
  }
}

function bumpStreak() {
  try {
    const today = new Date().toISOString().slice(0, 10);
    const raw = localStorage.getItem(STREAK_KEY);
    const state = raw ? JSON.parse(raw) : { lastDate: null, count: 0 };
    if (state.lastDate === today) return;
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    state.count = state.lastDate === yesterday ? state.count + 1 : 1;
    state.lastDate = today;
    localStorage.setItem(STREAK_KEY, JSON.stringify(state));
  } catch {
    /* localStorage unavailable — streak just won't persist */
  }
}

function renderGameBar() {
  const total = totalMasteredCards();
  const rank = rankFor(total);
  const idx = RANKS.indexOf(rank);
  const next = RANKS[idx + 1];

  document.getElementById("starTotal").textContent = total;
  document.getElementById("rankLabel").textContent = rank.label;
  document.getElementById("rankSub").textContent = next ? `${next.min - total} to ${next.label}` : "Max rank!";
  document.getElementById("streakValue").textContent = getStreak();
}

/* ---------- home view ---------- */

function renderOverview() {
  let totalModules = 0;
  let doneModules = 0;
  let loaded = 0;
  for (const code of EXAMS) {
    const d = examData[code];
    if (!d) continue;
    loaded++;
    totalModules += d.modules.length;
    doneModules += d.modules.filter((m) => m.status.toLowerCase() === "done").length;
  }
  const pct = totalModules ? Math.round((doneModules / totalModules) * 100) : 0;
  document.getElementById("overallPct").textContent = `${pct}%`;
  document.getElementById("overallBarFill").style.width = `${pct}%`;
  document.getElementById("overallSub").textContent =
    loaded < EXAMS.length
      ? `Loading (${loaded}/${EXAMS.length} exams)…`
      : `${doneModules} of ${totalModules} modules done across ${EXAMS.length} exams`;
}

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
    </div>
    ${modulesHtml}
  `;

  document.getElementById("backToHome").addEventListener("click", () => navigate("#/"));

  const mixedBtn = document.getElementById("startMixed");
  if (mixedBtn) {
    mixedBtn.addEventListener("click", () => navigate(`#/${code}/mixed`));
  }

  el.querySelectorAll(".status-badge").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      handleToggle(btn);
    });
  });

  el.querySelectorAll(".module-card.clickable").forEach((card) => {
    card.addEventListener("click", () => navigate(`#/${code}/${card.dataset.module}`));
  });
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
}

/* ---------- data-change hooks ---------- */

function onExamDataChanged(code) {
  updateHomeCard(code);
  renderOverview();
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
  window.scrollTo(0, 0);

  if (r.view === "home") {
    renderOverview();
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
  }
}

/* ---------- settings panel ---------- */

function openSettings() {
  document.getElementById("settingsPanel").hidden = false;
  updateTokenStatus();
}

function closeSettings() {
  document.getElementById("settingsPanel").hidden = true;
}

function updateTokenStatus() {
  const el = document.getElementById("tokenStatus");
  el.textContent = getToken() ? "A token is saved on this device." : "No token saved — browsing is read-only.";
}

function initSettings() {
  document.getElementById("settingsBtn").addEventListener("click", openSettings);
  document.getElementById("closeSettings").addEventListener("click", closeSettings);
  document.getElementById("settingsPanel").addEventListener("click", (e) => {
    if (e.target.id === "settingsPanel") closeSettings();
  });
  document.getElementById("saveToken").addEventListener("click", () => {
    const val = document.getElementById("tokenInput").value.trim();
    if (val) {
      localStorage.setItem(TOKEN_KEY, val);
      document.getElementById("tokenInput").value = "";
      updateTokenStatus();
      loadAll();
      loadAllFlash();
      closeSettings();
    }
  });
  document.getElementById("clearToken").addEventListener("click", () => {
    localStorage.removeItem(TOKEN_KEY);
    updateTokenStatus();
  });
}

/* ---------- init ---------- */

buildExamGrid();
initSettings();
bumpStreak();
renderGameBar();
window.addEventListener("hashchange", renderRoute);
renderRoute();
loadAll();
loadAllFlash();
