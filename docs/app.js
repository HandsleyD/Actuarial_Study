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
const flashState = { code: null, moduleId: null, cardIndex: 0, revealed: false, typed: "", _lastKey: "" };

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
    const total = def ? def.cards.length : 0;

    flashState.revealed = false;
    flashState.typed = "";
    flashState.cardIndex = Math.min(total - 1, idx + 1);

    renderFlashView(code, moduleId);
    renderGameBar();
    hideBanner();
  } catch (e) {
    showBanner(`Could not save score: ${e.message}`, true);
    renderFlashView(code, moduleId);
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

  const studying = d.modules.some((m) => m.status.toLowerCase() === "in progress");
  card.classList.toggle("studying", studying);
  let ribbon = card.querySelector(".studying-ribbon");
  if (studying && !ribbon) {
    ribbon = document.createElement("div");
    ribbon.className = "studying-ribbon";
    ribbon.textContent = "Currently studying";
    card.prepend(ribbon);
  } else if (!studying && ribbon) {
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

  el.innerHTML = `
    <button class="back-link" id="backToHome">&larr; All subjects</button>
    <div class="subject-head">
      <div class="subject-code">${code}</div>
      <h2>${info.name}</h2>
      ${info.blurb ? `<p class="subject-blurb">${info.blurb}</p>` : ""}
    </div>
    ${modulesHtml}
  `;

  document.getElementById("backToHome").addEventListener("click", () => navigate("#/"));

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

  if (flashState.cardIndex >= total) flashState.cardIndex = 0;
  const idx = flashState.cardIndex;
  const card = cards[idx];
  const isMastered = !!moduleMastery[idx];

  const dots = cards
    .map((c, i) => {
      const m = !!moduleMastery[i];
      const active = i === idx;
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
    <div class="card-dots">${dots}</div>
    <div class="flashcard ${isMastered ? "is-mastered" : ""}">
      ${isMastered ? '<div class="flashcard-star">&#11088;</div>' : ""}
      <div class="flashcard-label">Card ${idx + 1} of ${total}</div>
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
      <button class="btn" id="prevCard" ${idx === 0 ? "disabled" : ""}>&larr; Prev</button>
      <button class="btn" id="nextCard" ${idx === total - 1 ? "disabled" : ""}>Next &rarr;</button>
    </div>
  `;

  document.getElementById("backToSubject").addEventListener("click", () => navigate(`#/${code}`));

  el.querySelectorAll(".card-dot").forEach((btn) => {
    btn.addEventListener("click", () => {
      flashState.cardIndex = Number(btn.dataset.idx);
      flashState.revealed = false;
      flashState.typed = "";
      renderFlashView(code, moduleId);
    });
  });

  document.getElementById("prevCard").addEventListener("click", () => {
    flashState.cardIndex = Math.max(0, idx - 1);
    flashState.revealed = false;
    flashState.typed = "";
    renderFlashView(code, moduleId);
  });
  document.getElementById("nextCard").addEventListener("click", () => {
    flashState.cardIndex = Math.min(total - 1, idx + 1);
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
    document.getElementById("scoreGood").addEventListener("click", () => scoreCard(code, moduleId, idx, true));
    document.getElementById("scoreBad").addEventListener("click", () => scoreCard(code, moduleId, idx, false));
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
}

/* ---------- routing ---------- */

function parseHash() {
  const h = location.hash.replace(/^#\/?/, "");
  if (!h) return { view: "home" };
  const parts = h.split("/").filter(Boolean);
  if (parts.length === 1) return { view: "subject", exam: parts[0].toUpperCase() };
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
      flashState._lastKey = key;
    }
    renderFlashView(r.exam, r.module);
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
