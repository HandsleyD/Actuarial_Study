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

const examData = {}; // code -> { modules: [{id, status, notes}], sha, path }

function pathFor(code) {
  return `maths-study/exams/${code}/progress.md`;
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
  renderExamCard(code);
  renderOverview();
}

function computePct(modules) {
  if (!modules.length) return 0;
  const done = modules.filter((m) => m.status.toLowerCase() === "done").length;
  return Math.round((done / modules.length) * 100);
}

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

function renderExamCard(code) {
  const card = document.getElementById(`card-${code}`);
  if (!card) return;
  const d = examData[code];
  card.classList.remove("loading");

  const pctEl = card.querySelector(".exam-pct");
  const barEl = card.querySelector(".exam-bar-fill");
  const listEl = card.querySelector(".module-list");

  if (d.error) {
    pctEl.textContent = "unavailable";
    listEl.innerHTML = `<div class="module-row">Could not load progress.md</div>`;
    return;
  }

  const pct = computePct(d.modules);
  pctEl.textContent = `${pct}% (${d.modules.length} modules)`;
  barEl.style.width = `${pct}%`;

  listEl.innerHTML = "";
  for (const mod of d.modules) {
    const row = document.createElement("div");
    row.className = "module-row";
    row.innerHTML = `
      <span class="module-id">${mod.id}</span>
      <button class="status-badge ${statusClass(mod.status)}" data-exam="${code}" data-module="${mod.id}">${mod.status || "Not started"}</button>
    `;
    listEl.appendChild(row);
  }
}

function buildExamGrid() {
  const grid = document.getElementById("examGrid");
  for (const code of EXAMS) {
    const card = document.createElement("div");
    card.className = "exam-card loading";
    card.id = `card-${code}`;
    card.innerHTML = `
      <div class="exam-card-head">
        <span class="exam-code">${code}</span>
        <span class="exam-pct">&hellip;</span>
      </div>
      <div class="exam-bar"><div class="exam-bar-fill"></div></div>
      <div class="module-list"></div>
    `;
    card.querySelector(".exam-card-head").addEventListener("click", () => {
      card.classList.toggle("open");
    });
    grid.appendChild(card);
  }

  grid.addEventListener("click", (e) => {
    if (e.target.classList.contains("status-badge")) {
      handleToggle(e.target);
    }
  });
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
      const body = await res.json().catch(() => ({}));
      throw new Error(body.message || `save failed (${res.status})`);
    }

    const data = examData[code];
    const mod = data.modules.find((m) => m.id === moduleId);
    if (mod) mod.status = next;
    data.text = newText;
    renderExamCard(code);
    renderOverview();
    hideBanner();
  } catch (e) {
    btn.textContent = prevLabel;
    showBanner(`Could not save ${code} ${moduleId}: ${e.message}`, true);
  } finally {
    btn.disabled = false;
  }
}

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
      closeSettings();
    }
  });
  document.getElementById("clearToken").addEventListener("click", () => {
    localStorage.removeItem(TOKEN_KEY);
    updateTokenStatus();
  });
}

function loadAll() {
  for (const code of EXAMS) loadExam(code);
}

buildExamGrid();
initSettings();
loadAll();
