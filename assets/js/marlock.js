let currentMode = null;

/* ===== ANIMATION HELPERS ===== */
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

function show(el) {
  el.classList.remove("anim-hidden");
  el.classList.add("anim-show");
}

function hide(el) {
  el.classList.add("anim-hidden");
  el.classList.remove("anim-show");
}

function resizeToContent(wrapper) {
  wrapper.style.maxHeight = "none";

  requestAnimationFrame(() => {
    const height = wrapper.scrollHeight;
    wrapper.style.maxHeight = "0px";

    wrapper.offsetHeight; // reflow

    wrapper.style.maxHeight = height + "px";
  });
}

/* ===== MODE HANDLING ===== */
function toggleModeReset(showBtn) {
  const btn = document.getElementById("modeResetBtn");
  btn.classList.toggle("hidden", !showBtn);
}

function showMode(el) {
  const slot = document.getElementById("modeSlot");

  // 1️⃣ wstaw element „na chwilę” niewidoczny
  el.style.visibility = "hidden";
  el.classList.remove("anim-hide");
  el.classList.add("anim-show");

  // 2️⃣ zmierz jego wysokość
  slot.style.height = el.offsetHeight + "px";

  // 3️⃣ pokaż go płynnie
  el.style.visibility = "";
}

function setMode(mode) {
  currentMode = mode;

  const modeSelect = document.getElementById("modeSelect");
  const wrapper = document.getElementById("contentWrapper");
  const textMode = document.getElementById("textMode");
  const fileMode = document.getElementById("fileMode");

  hide(modeSelect);

  // przygotuj zawartość
  textMode.classList.toggle("hidden", mode !== "text");
  fileMode.classList.toggle("hidden", mode !== "file");

  wrapper.classList.remove("hidden");
  wrapper.classList.add("anim-show");

  // animuj OD RAZU do docelowej wysokości
  resizeToContent(wrapper);

  toggleModeReset(true);
}

function resetMode() {
  currentMode = null;

  const modeSelect = document.getElementById("modeSelect");
  const wrapper = document.getElementById("contentWrapper");

  wrapper.style.maxHeight = wrapper.scrollHeight + "px";
  wrapper.offsetHeight;

  wrapper.style.maxHeight = "0px";
  wrapper.classList.remove("anim-show");

  setTimeout(() => {
    wrapper.classList.add("hidden");
    show(modeSelect);
  }, 320);

  toggleModeReset(false);
}

/* ===== UI MESSAGE ===== */
const msgBox = document.getElementById("msg");

function showMsg(text, type = "info") {
  const classes = {
    info: "bg-blue-600/30 text-blue-200 border border-blue-500/40",
    success: "bg-emerald-600/30 text-emerald-200 border border-emerald-500/40",
    error: "bg-rose-600/30 text-rose-200 border border-rose-500/40",
  };

  msgBox.className =
    "rounded-xl px-4 py-3 text-sm font-medium " + classes[type];

  msgBox.textContent = text;
  msgBox.classList.remove("hidden");

  clearTimeout(msgBox._t);
  msgBox._t = setTimeout(() => {
    msgBox.classList.add("hidden");
  }, 4000);
}

/* ===== TEXT ENCODERS ===== */
const enc = new TextEncoder();
const dec = new TextDecoder();

/* ===== BASE64 ===== */
const b64 = {
  encode: (buf) => btoa(String.fromCharCode(...buf)),
  decode: (str) => Uint8Array.from(atob(str), (c) => c.charCodeAt(0)),
};

/* ===== KEY DERIVATION ===== */
async function deriveKey(password, salt) {
  const baseKey = await crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    "PBKDF2",
    false,
    ["deriveKey"],
  );

  return crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations: 600000,
      hash: "SHA-256",
    },
    baseKey,
    {
      name: "AES-GCM",
      length: 256,
    },
    false,
    ["encrypt", "decrypt"],
  );
}

/* ===== TEXT ENCRYPT ===== */
async function encrypt() {
  const textEl = document.getElementById("text");
  const passEl = document.getElementById("password");

  const text = textEl.value.trim();
  const password = passEl.value;

  if (!text || !password) {
    return showMsg("Brak tekstu lub hasła", "error");
  }

  try {
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const key = await deriveKey(password, salt);

    const encrypted = await crypto.subtle.encrypt(
      { name: "AES-GCM", iv },
      key,
      enc.encode(text),
    );

    textEl.value = `v1:${b64.encode(salt)}:${b64.encode(iv)}:${b64.encode(
      new Uint8Array(encrypted),
    )}`;

    passEl.value = "";
    showMsg("Tekst zaszyfrowany", "success");
  } catch (err) {
    console.error(err);
    showMsg("Błąd podczas szyfrowania", "error");
  }
}

/* ===== TEXT DECRYPT ===== */
async function decrypt() {
  const textEl = document.getElementById("text");
  const passEl = document.getElementById("password");

  const input = textEl.value.trim();
  const password = passEl.value;

  if (!input || !password) {
    return showMsg("Brak danych lub hasła", "error");
  }

  const parts = input.split(":");
  if (parts.length !== 4 || parts[0] !== "v1") {
    return showMsg("Nieprawidłowy format danych", "error");
  }

  try {
    const salt = b64.decode(parts[1]);
    const iv = b64.decode(parts[2]);
    const data = b64.decode(parts[3]);

    const key = await deriveKey(password, salt);
    const decrypted = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv },
      key,
      data,
    );

    textEl.value = dec.decode(decrypted);
    passEl.value = "";
    showMsg("Tekst odszyfrowany", "success");
  } catch {
    showMsg("Błędne hasło lub uszkodzone dane", "error");
  }
}

/* ===== FILE HELPERS ===== */
function downloadBlob(blob, filename) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}

/* ===== FILE ENCRYPT ===== */
async function encryptFile(file) {
  const password = document.getElementById("password").value;
  if (!file || !password) {
    return showMsg("Brak pliku lub hasła", "error");
  }

  const data = new Uint8Array(await file.arrayBuffer());
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveKey(password, salt);

  const encrypted = new Uint8Array(
    await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, data),
  );

  const header = enc.encode("MAR1");
  const out = new Uint8Array(
    header.length + salt.length + iv.length + encrypted.length,
  );

  out.set(header, 0);
  out.set(salt, 4);
  out.set(iv, 20);
  out.set(encrypted, 32);

  downloadBlob(new Blob([out]), file.name + ".marlock");
  showMsg("Plik zaszyfrowany", "success");
}

/* ===== FILE DECRYPT ===== */
function updateFileName(input) {
  const label = document.getElementById("fileName");
  label.textContent = input.files.length
    ? input.files[0].name
    : "Nie wybrano pliku";
}

async function decryptFile(file) {
  const password = document.getElementById("password").value;
  if (!file || !password) {
    return showMsg("Brak pliku lub hasła", "error");
  }

  const data = new Uint8Array(await file.arrayBuffer());
  if (dec.decode(data.slice(0, 4)) !== "MAR1") {
    return showMsg("Nieprawidłowy format pliku", "error");
  }

  try {
    const salt = data.slice(4, 20);
    const iv = data.slice(20, 32);
    const encrypted = data.slice(32);

    const key = await deriveKey(password, salt);
    const decrypted = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv },
      key,
      encrypted,
    );

    downloadBlob(new Blob([decrypted]), file.name.replace(".marlock", ""));
    showMsg("Plik odszyfrowany", "success");
  } catch {
    showMsg("Błędne hasło lub uszkodzony plik", "error");
  }
}

/* ===== MODE BRIDGE ===== */
function handleEncrypt() {
  if (currentMode === "text") encrypt();
  else if (currentMode === "file") {
    encryptFile(document.getElementById("fileInput").files[0]);
  } else showMsg("Wybierz tryb", "error");
}

function handleDecrypt() {
  if (currentMode === "text") decrypt();
  else if (currentMode === "file") {
    decryptFile(document.getElementById("fileInput").files[0]);
  } else showMsg("Wybierz tryb", "error");
}
