// scripts/update-head.js
import fs from "fs";
import path from "path";

const rootDir = process.cwd();
const replaceDir = path.join(rootDir, "assets/replace");

// === Domena ===
const baseUrl = "https://marcini.uk";

// 🎨 Kolory konsoli
const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
  magenta: "\x1b[35m",
};

// 📥 Wczytanie szablonów headów
function loadHeadTemplates() {
  const templates = {};
  try {
    const files = fs.readdirSync(replaceDir);
    for (const file of files) {
      const match = file.match(/^head-(\w+)\.html$/);
      if (match) {
        const lang = match[1];
        templates[lang] = fs
          .readFileSync(path.join(replaceDir, file), "utf8")
          .trim();
      }
    }
  } catch {
    console.error(
      `${colors.magenta}❌ Nie znaleziono katalogu /assets/replace${colors.reset}`,
    );
    process.exit(1);
  }
  return templates;
}

const templates = loadHeadTemplates();
if (Object.keys(templates).length === 0) {
  console.error(
    `${colors.magenta}❌ Brak plików head-xx.html w /assets/replace${colors.reset}`,
  );
  process.exit(1);
}

// 🔹 Pomocnicze
function relative(filePath) {
  return "/" + path.relative(rootDir, filePath).replace(/\\/g, "/");
}

// === NOWE: generowanie canonical ===
function generateCanonical(filePath) {
  // przykład wejścia: /home/.../pl/setup/index.html
  let rel = path.relative(rootDir, filePath).replace(/\\/g, "/");

  if (!rel.startsWith("/")) rel = "/" + rel;

  // usuń index.html → zostaje folder
  rel = rel.replace(/index\.html$/, "");

  // jeśli plik nie jest indexem (np. /pl/faq.html) → dodaj trailing slash
  if (!rel.endsWith("/")) rel += "/";

  return baseUrl + rel;
}

// 🔹 Zastosowanie wcięcia do każdej linii
function applyIndent(content, indent) {
  const lines = content.split("\n");
  return lines.map((line) => (line.trim() ? indent + line : line)).join("\n");
}

// 🔹 Przetwarzanie katalogu
function processDirectory(dir, lang) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      processDirectory(filePath, lang);
    } else if (file.endsWith(".html")) {
      processFile(filePath, lang);
    }
  }
}

// 🔹 Główna logika
function processFile(filePath, lang) {
  let content = fs.readFileSync(filePath, "utf8");
  let newHead = templates[lang] || templates["pl"];

  // === NOWE: wstrzyknięcie canonical ===
  const canonical = generateCanonical(filePath);
  newHead = newHead.replaceAll("{{CANONICAL}}", canonical);

  const headRegex = /(\n?)([\t ]*)<head[\s\S]*?<\/head>(\n?)/i;
  const relPath = relative(filePath);

  if (headRegex.test(content)) {
    const match = content.match(headRegex);
    const indent = match?.[2] || "";
    const formattedHead = "\n" + applyIndent(newHead, indent) + "\n";
    content = content.replace(headRegex, formattedHead);
    fs.writeFileSync(filePath, content, "utf8");
    console.log(
      `${colors.green}✔ [${lang}] Zaktualizowano head:${colors.reset} ${relPath}`,
    );
  } else {
    console.log(
      `${colors.magenta}❌ Brak sekcji <head> w:${colors.reset} ${relPath}`,
    );
  }
}

// 🔹 Uruchomienie
console.log(
  `${colors.cyan}🔍 Skanowanie katalogów /en i /pl...${colors.reset}\n`,
);

const enDir = path.join(rootDir, "en");
const plDir = path.join(rootDir, "pl");

if (fs.existsSync(enDir)) processDirectory(enDir, "en");
else console.log(`${colors.yellow}⚠ Brak katalogu /en${colors.reset}`);

if (fs.existsSync(plDir)) processDirectory(plDir, "pl");
else console.log(`${colors.yellow}⚠ Brak katalogu /pl${colors.reset}`);

console.log(
  `\n${colors.magenta}🎉 Gotowe! Heads zaktualizowane!${colors.reset}\n`,
);
