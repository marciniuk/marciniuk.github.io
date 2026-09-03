import * as esbuild from "esbuild-wasm";
import * as prettier from "prettier/standalone";
import * as prettierBabel from "prettier/plugins/babel";
import * as prettierEstree from "prettier/plugins/estree";
import * as prettierPostcss from "prettier/plugins/postcss";

/* =========================================================
   Elements
   ========================================================= */

const input = document.querySelector("#marnify-input");
const output = document.querySelector("#marnify-output");

const fileInput = document.querySelector("#marnify-file");
const dropzone = document.querySelector("#marnify-dropzone");
const fileHint = document.querySelector("#marnify-file-hint");

const minifyButton = document.querySelector("#marnify-minify");
const beautifyButton = document.querySelector("#marnify-beautify");
const clearButton = document.querySelector("#marnify-clear");

const copyButton = document.querySelector("#marnify-copy");
const downloadButton = document.querySelector("#marnify-download");

const status = document.querySelector("#marnify-status");

const originalSize = document.querySelector("#marnify-original-size");
const minifiedSize = document.querySelector("#marnify-minified-size");
const savedSize = document.querySelector("#marnify-saved");

const detection = document.querySelector("#marnify-detection");
const detectionDot = document.querySelector("#marnify-detection-dot");
const detectionText = document.querySelector("#marnify-detection-text");

const tabs = document.querySelectorAll(".marnify-tab");

/* =========================================================
   State
   ========================================================= */

let currentType = null;
let currentFileName = null;
let resultCode = "";
let esbuildReady = false;

const messages =
  document.documentElement.lang === "en"
    ? {
        detecting: "Detecting",
        engineStarting: "Starting engine...",
        invalidCode: "Could not determine the code type.",
        pasteCode: "Paste or load code.",
        unsupportedCode: "Could not detect CSS or JavaScript.",
        minifying: "Minifying...",
        formatting: "Formatting...",
        done: "Done.",
        error: "Error",
        unsupportedFile: "Unsupported file type.",
        fileLoaded: "File loaded.",
        copied: "Copied.",
        copyFailed: "Could not copy.",
        downloaded: "Downloaded",
        fileHint: "CSS or JavaScript",
      }
    : {
        detecting: "Wykrywanie",
        engineStarting: "Uruchamianie silnika...",
        invalidCode: "Nie udało się określić typu kodu.",
        pasteCode: "Wklej lub wczytaj kod.",
        unsupportedCode: "Nie udało się rozpoznać CSS ani JavaScript.",
        minifying: "Minimalizowanie...",
        formatting: "Formatowanie...",
        done: "Gotowe.",
        error: "Błąd",
        unsupportedFile: "Nieobsługiwany typ pliku.",
        fileLoaded: "Plik wczytany.",
        copied: "Skopiowano.",
        copyFailed: "Nie udało się skopiować.",
        downloaded: "Pobrano",
        fileHint: "CSS lub JavaScript",
      };

/* =========================================================
   Utilities
   ========================================================= */

function formatBytes(bytes) {
  if (!bytes) return "0 B";

  const units = ["B", "KB", "MB", "GB"];
  const index = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    units.length - 1,
  );

  return `${(bytes / 1024 ** index).toFixed(index ? 2 : 0)} ${units[index]}`;
}

function getByteSize(text) {
  return new Blob([text]).size;
}

function setStatus(message) {
  status.textContent = message;
}

function updateStats(original, result) {
  const originalBytes = getByteSize(original);
  const resultBytes = getByteSize(result);

  const saved = originalBytes
    ? ((originalBytes - resultBytes) / originalBytes) * 100
    : 0;

  originalSize.textContent = formatBytes(originalBytes);
  minifiedSize.textContent = formatBytes(resultBytes);
  savedSize.textContent = `${saved.toFixed(1)}%`;
}

function updateButtons() {
  const hasInput = Boolean(input.value.trim());
  const hasOutput = Boolean(resultCode);

  minifyButton.disabled = !hasInput || !currentType;
  beautifyButton.disabled = !hasInput || !currentType;

  copyButton.disabled = !hasOutput;
  downloadButton.disabled = !hasOutput;
}

/* =========================================================
   Detection
   ========================================================= */

function setDetection(type) {
  if (!type) {
    detectionText.textContent = messages.detecting;
    detectionDot.className =
      "h-1.5 w-1.5 rounded-full bg-zinc-600 transition-all duration-200";

    detection.className =
      "flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5 text-[9px] font-medium uppercase tracking-[0.12em] text-zinc-500 transition-all duration-200";

    return;
  }

  const isCSS = type === "css";

  detectionText.textContent = isCSS ? "CSS" : "JavaScript";

  detectionDot.className = isCSS
    ? "h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.65)] transition-all duration-200"
    : "h-1.5 w-1.5 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.55)] transition-all duration-200";

  detection.className = isCSS
    ? "flex items-center gap-1.5 rounded-lg border border-blue-400/[0.12] bg-blue-400/[0.04] px-2.5 py-1.5 text-[9px] font-medium uppercase tracking-[0.12em] text-blue-300 transition-all duration-200"
    : "flex items-center gap-1.5 rounded-lg border border-yellow-400/[0.12] bg-yellow-400/[0.04] px-2.5 py-1.5 text-[9px] font-medium uppercase tracking-[0.12em] text-yellow-300 transition-all duration-200";
}

/* =========================================================
   Code detection
   ========================================================= */

function detectCodeType(code) {
  const text = code.trim();

  if (!text) return null;

  /* CSS indicators */
  const cssScore =
    (/[.#][\w-]+\s*\{/.test(text) ? 3 : 0) +
    (/[\w-]+\s*:\s*[^;{}]+;/.test(text) ? 2 : 0) +
    (/@(media|supports|keyframes|font-face|layer)\b/.test(text) ? 2 : 0);

  /* JavaScript indicators */
  const jsScore =
    (/\b(const|let|var|function|class|import|export)\b/.test(text) ? 3 : 0) +
    (/[=]>\s*/.test(text) ? 2 : 0) +
    (/\b(if|else|for|while|return|async|await)\b/.test(text) ? 1 : 0) +
    (/console\.(log|error|warn)\s*\(/.test(text) ? 2 : 0) +
    (/[;]\s*$/.test(text) ? 1 : 0);

  if (cssScore === 0 && jsScore === 0) {
    return null;
  }

  return cssScore >= jsScore ? "css" : "js";
}

function detectAndUpdate() {
  const detected = detectCodeType(input.value);

  if (detected !== currentType) {
    currentType = detected;
    setDetection(detected);
    updateTabState();
  }

  updateButtons();

  return detected;
}

/* =========================================================
   Tabs
   ========================================================= */

function updateTabState() {
  tabs.forEach((tab) => {
    const active = tab.dataset.type === currentType;

    tab.setAttribute("aria-selected", String(active));

    tab.classList.toggle("bg-white/[0.10]", active);
    tab.classList.toggle("text-zinc-100", active);
    tab.classList.toggle("shadow-[0_2px_16px_rgba(0,0,0,0.3)]", active);

    tab.classList.toggle("text-zinc-500", !active);
    tab.classList.toggle("hover:bg-white/[0.04]", !active);
    tab.classList.toggle("hover:text-zinc-300", !active);
  });
}

function setType(type) {
  currentType = type;

  setDetection(type);
  updateTabState();

  updateButtons();

  setStatus("");
}

/* =========================================================
   esbuild
   ========================================================= */

async function initEsbuild() {
  if (esbuildReady) return;

  setStatus(messages.engineStarting);

  await esbuild.initialize({
    wasmURL: "/assets/js/tools/marnify/esbuild.wasm",
    worker: true,
  });

  esbuildReady = true;
}

/* =========================================================
   Minify
   ========================================================= */

async function minifyCSS(code) {
  const result = await esbuild.transform(code, {
    loader: "css",
    minify: true,
    legalComments: "none",
  });

  return result.code;
}

async function minifyJS(code) {
  const result = await esbuild.transform(code, {
    loader: "js",
    minify: true,
    legalComments: "none",
  });

  return result.code;
}

async function minifyCode(code) {
  await initEsbuild();

  if (currentType === "css") {
    return minifyCSS(code);
  }

  if (currentType === "js") {
    return minifyJS(code);
  }

  throw new Error(messages.invalidCode);
}

/* =========================================================
   Beautify
   ========================================================= */

async function beautifyCSS(code) {
  return prettier.format(code, {
    parser: "css",
    plugins: [prettierPostcss],
    tabWidth: 2,
    useTabs: false,
    singleQuote: false,
  });
}

async function beautifyJS(code) {
  return prettier.format(code, {
    parser: "babel",
    plugins: [prettierBabel, prettierEstree],
    tabWidth: 2,
    useTabs: false,
    singleQuote: true,
    trailingComma: "all",
  });
}

async function beautifyCode(code) {
  if (currentType === "css") {
    return beautifyCSS(code);
  }

  if (currentType === "js") {
    return beautifyJS(code);
  }

  throw new Error(messages.invalidCode);
}

/* =========================================================
   Minify handler
   ========================================================= */

async function handleMinify() {
  const code = input.value;

  if (!code.trim()) {
    setStatus(messages.pasteCode);
    return;
  }

  const detected = detectAndUpdate();

  if (!detected) {
    setStatus(messages.unsupportedCode);
    return;
  }

  minifyButton.disabled = true;
  beautifyButton.disabled = true;

  try {
    setStatus(messages.minifying);

    const result = await minifyCode(code);

    resultCode = result;
    output.value = result;

    updateStats(code, result);
    updateButtons();

    setStatus(messages.done);
  } catch (error) {
    console.error(error);

    resultCode = "";
    output.value = "";

    updateButtons();

    setStatus(`${messages.error}: ${error.message}`);
  } finally {
    updateButtons();
  }
}

/* =========================================================
   Beautify handler
   ========================================================= */

async function handleBeautify() {
  const code = input.value;

  if (!code.trim()) {
    setStatus(messages.pasteCode);
    return;
  }

  const detected = detectAndUpdate();

  if (!detected) {
    setStatus(messages.unsupportedCode);
    return;
  }

  minifyButton.disabled = true;
  beautifyButton.disabled = true;

  try {
    setStatus(messages.formatting);

    const result = await beautifyCode(code);

    resultCode = result;
    output.value = result;

    updateStats(code, result);
    updateButtons();

    setStatus(messages.done);
  } catch (error) {
    console.error(error);

    resultCode = "";
    output.value = "";

    updateButtons();

    setStatus(`${messages.error}: ${error.message}`);
  } finally {
    updateButtons();
  }
}

/* =========================================================
   File handling
   ========================================================= */

function detectFileType(file) {
  const extension = file.name.split(".").pop().toLowerCase();

  if (extension === "css") {
    return "css";
  }

  if (["js", "mjs", "cjs"].includes(extension)) {
    return "js";
  }

  return null;
}

async function loadFile(file) {
  if (!file) return;

  const type = detectFileType(file);

  if (!type) {
    setStatus(messages.unsupportedFile);
    return;
  }

  const code = await file.text();

  input.value = code;
  output.value = "";

  currentFileName = file.name;
  resultCode = "";

  currentType = type;

  setDetection(type);
  updateTabState();

  fileHint.textContent = `${file.name} · ${formatBytes(file.size)}`;

  originalSize.textContent = formatBytes(file.size);
  minifiedSize.textContent = "0 B";
  savedSize.textContent = "0%";

  updateButtons();

  setStatus(messages.fileLoaded);
}

/* =========================================================
   Clipboard
   ========================================================= */

async function copyOutput() {
  if (!resultCode) return;

  try {
    await navigator.clipboard.writeText(resultCode);

    setStatus(messages.copied);

    setTimeout(() => {
      setStatus("");
    }, 2000);
  } catch (error) {
    console.error(error);
    setStatus(messages.copyFailed);
  }
}

/* =========================================================
   Download
   ========================================================= */

function getOutputFilename() {
  const date = new Date();

  const pad = (value) => String(value).padStart(2, "0");

  const timestamp =
    `${date.getFullYear()}-` +
    `${pad(date.getMonth() + 1)}-` +
    `${pad(date.getDate())}_` +
    `${pad(date.getHours())}-` +
    `${pad(date.getMinutes())}-` +
    `${pad(date.getSeconds())}`;

  const mode = lastOperation === "beautify" ? "beautify" : "minify";
  const extension = currentType === "css" ? "css" : "js";

  return `${mode}-${timestamp}.${extension}`;
}

let lastOperation = "minify";

/* =========================================================
   Operation tracking
   ========================================================= */

const originalMinify = handleMinify;
const originalBeautify = handleBeautify;

async function runMinify() {
  lastOperation = "minify";
  await originalMinify();
}

async function runBeautify() {
  lastOperation = "beautify";
  await originalBeautify();
}

/* =========================================================
   Download
   ========================================================= */

function downloadOutput() {
  if (!resultCode) return;

  const filename = getOutputFilename();

  const mimeType =
    currentType === "css"
      ? "text/css;charset=utf-8"
      : "text/javascript;charset=utf-8";

  const blob = new Blob([resultCode], {
    type: mimeType,
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = filename;

  document.body.appendChild(link);
  link.click();
  link.remove();

  URL.revokeObjectURL(url);

  setStatus(`${messages.downloaded} ${filename}.`);
}

/* =========================================================
   Clear
   ========================================================= */

function clearAll() {
  input.value = "";
  output.value = "";

  fileInput.value = "";

  currentType = null;
  currentFileName = null;
  resultCode = "";

  fileHint.textContent = messages.fileHint;

  originalSize.textContent = "0 B";
  minifiedSize.textContent = "0 B";
  savedSize.textContent = "0%";

  setDetection(null);
  updateTabState();
  updateButtons();

  setStatus("");
}

/* =========================================================
   Drag & Drop
   ========================================================= */

["dragenter", "dragover"].forEach((eventName) => {
  dropzone.addEventListener(eventName, (event) => {
    event.preventDefault();

    dropzone.classList.add("border-blue-400/30", "bg-blue-400/[0.035]");
  });
});

["dragleave", "drop"].forEach((eventName) => {
  dropzone.addEventListener(eventName, (event) => {
    event.preventDefault();

    dropzone.classList.remove("border-blue-400/30", "bg-blue-400/[0.035]");
  });
});

dropzone.addEventListener("drop", (event) => {
  const [file] = event.dataTransfer.files;

  loadFile(file);
});

/* =========================================================
   Input detection
   ========================================================= */

input.addEventListener("input", () => {
  detectAndUpdate();
});

/* =========================================================
   Events
   ========================================================= */

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setType(tab.dataset.type);
  });
});

fileInput.addEventListener("change", () => {
  loadFile(fileInput.files[0]);
});

minifyButton.addEventListener("click", runMinify);
beautifyButton.addEventListener("click", runBeautify);

copyButton.addEventListener("click", copyOutput);
downloadButton.addEventListener("click", downloadOutput);

clearButton.addEventListener("click", clearAll);

/* =========================================================
   Init
   ========================================================= */

setDetection(null);
updateTabState();
updateButtons();
