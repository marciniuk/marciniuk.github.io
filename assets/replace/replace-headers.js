// scripts/update-header.js
import fs from "fs";
import path from "path";

const rootDir = process.cwd();
const replaceDir = path.join(rootDir, "assets/replace");

// 🎨 Kolory konsoli
const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
  magenta: "\x1b[35m",
};

// 📥 Wczytanie headerów
function loadHeaderTemplates() {
  console.log("📄 Wczytywanie headerów...");
  const templates = {};
  try {
    const files = fs.readdirSync(replaceDir);
    for (const file of files) {
      const match = file.match(/^header-(\w+)\.html$/);
      if (match) {
        const lang = match[1];
        templates[lang] = fs
          .readFileSync(path.join(replaceDir, file), "utf8")
          .trim();
        console.log("  ✔ Załadowano:", file);
      }
    }
  } catch (err) {
    console.error(
      `${colors.magenta}❌ Nie znaleziono katalogu /assets/replace${colors.reset}`,
    );
    process.exit(1);
  }
  return templates;
}

const templates = loadHeaderTemplates();
if (Object.keys(templates).length === 0) {
  console.error(
    `${colors.magenta}❌ Brak plików header-xx.html w /assets/replace${colors.reset}`,
  );
  process.exit(1);
}

// 🔹 Pomocnicze
function relative(filePath) {
  return "/" + path.relative(rootDir, filePath).replace(/\\/g, "/");
}

// 🔹 Wcięcie do każdej linii
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
  const newHeader = templates[lang] || templates["pl"];

  // znajdź header
  const headerRegex =
    /(\n?)([\t ]*)<header[^>]*id=["']main-header["'][^>]*>[\s\S]*?<\/header>(\n?)/i;

  const relPath = relative(filePath);

  if (headerRegex.test(content)) {
    const match = content.match(headerRegex);
    const indent = match?.[2] || "";

    // przygotuj nowy header
    let formatted = "\n" + applyIndent(newHeader.trim(), indent);

    // 🔥 dodaj pustą linię jeśli jej nie ma
    if (!/\n\s*\n/.test(content.substring(match.index + match[0].length))) {
      formatted += "\n\n"; // DWIE: jedna końcowa + jedna pusta
    } else {
      formatted += "\n"; // tylko końcowa
    }

    content = content.replace(headerRegex, formatted);
    fs.writeFileSync(filePath, content, "utf8");

    console.log(
      `${colors.green}✔ [${lang}] Zaktualizowano header:${colors.reset} ${relPath}`,
    );
    return;
  }

  // jeśli nie ma headera – dodaj po <body>
  if (content.includes("<body")) {
    const afterBody = content.match(/<body[^>]*>(\r?\n)?([\t ]*)/);
    const indent = afterBody?.[2] || "";

    let formatted = "\n" + applyIndent(newHeader.trim(), indent) + "\n\n";

    content = content.replace(/(<body[^>]*>)/, `$1${formatted}`);
    fs.writeFileSync(filePath, content, "utf8");

    console.log(
      `${colors.yellow}⚠ [${lang}] Dodano brakujący header:${colors.reset} ${relPath}`,
    );
  } else {
    console.log(`${colors.magenta}❌ Brak <body> w:${colors.reset} ${relPath}`);
  }
}

// 🔹 Uruchomienie
console.log(
  `${colors.cyan}\n🔍 Skanowanie katalogów /en i /pl...${colors.reset}\n`,
);

const enDir = path.join(rootDir, "en");
const plDir = path.join(rootDir, "pl");

if (fs.existsSync(enDir)) processDirectory(enDir, "en");
else console.log(`${colors.yellow}⚠ Brak katalogu /en${colors.reset}`);

if (fs.existsSync(plDir)) processDirectory(plDir, "pl");
else console.log(`${colors.yellow}⚠ Brak katalogu /pl${colors.reset}`);

console.log(
  `\n${colors.magenta}🎉 Gotowe! Headery zaktualizowane!${colors.reset}\n`,
);
