// scripts/update-footer.js
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

// 📥 Wczytanie footerów
function loadFooterTemplates() {
  const templates = {};
  try {
    const files = fs.readdirSync(replaceDir);
    for (const file of files) {
      const match = file.match(/^footer-(\w+)\.html$/);
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

const templates = loadFooterTemplates();
if (Object.keys(templates).length === 0) {
  console.error(
    `${colors.magenta}❌ Brak plików footer-xx.html w /assets/replace${colors.reset}`,
  );
  process.exit(1);
}

// 🔹 Pomocnicze
function relative(filePath) {
  return "/" + path.relative(rootDir, filePath).replace(/\\/g, "/");
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
  const newFooter = templates[lang] || templates["pl"];
  const footerRegex = /(\n?)([\t ]*)<footer[\s\S]*?<\/footer>(\n?)/i;
  const relPath = relative(filePath);

  if (footerRegex.test(content)) {
    const match = content.match(footerRegex);
    const indent = match?.[2] || "";
    const formattedFooter =
      (match?.[1] || "\n") + applyIndent(newFooter, indent);
    content = content.replace(footerRegex, formattedFooter);
    fs.writeFileSync(filePath, content, "utf8");
    console.log(
      `${colors.green}✔ [${lang}] Zaktualizowano footer:${colors.reset} ${relPath}`,
    );
  } else if (content.includes("</body>")) {
    const beforeBody = content.match(/([\t ]*)<\/body>/);
    const indent = beforeBody?.[1] || "";
    const formattedFooter = "\n" + applyIndent(newFooter, indent);
    content = content.replace("</body>", `${formattedFooter}${indent}</body>`);
    fs.writeFileSync(filePath, content, "utf8");
    console.log(
      `${colors.yellow}⚠ [${lang}] Dodano brakujący footer:${colors.reset} ${relPath}`,
    );
  } else {
    console.log(
      `${colors.magenta}❌ Brak </body> w:${colors.reset} ${relPath}`,
    );
  }
}

// 🔹 Uruchomienie
console.log(
  `${colors.cyan}🔍 Skanowanie katalogów /en i /pl...${colors.reset} \n`,
);

const enDir = path.join(rootDir, "en");
const plDir = path.join(rootDir, "pl");

if (fs.existsSync(enDir)) processDirectory(enDir, "en");
else console.log(`${colors.yellow}⚠ Brak katalogu /en${colors.reset}`);

if (fs.existsSync(plDir)) processDirectory(plDir, "pl");
else console.log(`${colors.yellow}⚠ Brak katalogu /pl${colors.reset}`);

console.log(
  `\n${colors.magenta}🎉 Gotowe! Footers zaktualizowane!${colors.reset}\n`,
);
