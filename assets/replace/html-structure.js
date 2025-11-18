import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const rootDir = path.resolve("./");
const langs = ["pl", "en"];
const replaceDir = path.join(rootDir, "assets", "replace");
const OVERLAY_DIV = `
    <!-- OVERLAY -->
    <div
      id="overlay"
      class="fixed inset-0 pointer-events-none transition-opacity duration-300 z-30"
    >
      <div
        class="h-20 w-full bg-gradient-to-b from-blue-900/100 via-blue-900/25 xl:via-blue-900/75 to-blue-900/0 absolute top-0 z-20"
      ></div>
    </div>`;

// 📁 Rekurencyjne pobieranie .html
function getHtmlFiles(dir) {
  let files = [];
  for (const file of fs.readdirSync(dir)) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) files = files.concat(getHtmlFiles(filePath));
    else if (file.endsWith(".html")) files.push(filePath);
  }
  return files;
}

// 📄 Wczytywanie replacementu
function readReplace(file) {
  const filePath = path.join(replaceDir, file);
  return fs.existsSync(filePath)
    ? fs.readFileSync(filePath, "utf8").trim()
    : "";
}

// 🧠 Sprawdzenie stanu sekcji
function sectionState(html, tag) {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i");
  const match = html.match(regex);
  if (!match) return "missing";
  const inner = match[1].trim();
  return inner.length === 0 ? "empty" : "filled";
}

// ✏️ Główna funkcja przetwarzania
function processFile(filePath, lang) {
  const relPath = filePath.replace(rootDir, "").replace(/\\/g, "/");
  let html = fs.readFileSync(filePath, "utf8");
  const original = html;
  let changed = false;

  if (html.trim().length === 0) {
    html = `<!DOCTYPE html>
<html lang="${lang}" class="h-full max-w-full overflow-x-clip scroll-smooth">
</html>`;
    changed = true;
  }

  // HEAD
  const headState = sectionState(html, "head");
  if (headState === "missing" || headState === "empty") {
    const headReplace = readReplace(`head-${lang}.html`);
    if (headState === "empty")
      html = html.replace(/<head[^>]*>[\s\S]*?<\/head>/i, headReplace);
    else html = html.replace(/<\/html>/i, `\n${headReplace}\n</html>`);
    changed = true;
    console.log(
      `🧠 ${
        headState === "missing" ? "Dodano" : "Zastąpiono"
      } <head> w ${relPath}`
    );
  }

  // BODY
  const bodyState = sectionState(html, "body");
  if (bodyState === "missing" || bodyState === "empty") {
    const bodySkeleton = `<body class="bg-blue-900 min-h-full max-w-full overflow-x-clip">
  <stars></stars>
  <header></header>
  <main class="z-10 p-6 flex flex-col lg:flex-row gap-6 items-center justify-center h-full"></main>
  <footer></footer>
  <script src="/assets/js/main.js"></script>
</body>`;
    if (bodyState === "empty")
      html = html.replace(/<body[^>]*>[\s\S]*?<\/body>/i, bodySkeleton);
    else html = html.replace(/<\/html>/i, `\n${bodySkeleton}\n</html>`);
    changed = true;
    console.log(
      `🧩 ${
        bodyState === "missing" ? "Dodano" : "Zastąpiono"
      } <body> w ${relPath}`
    );
  }

  // HEADER
  const headerState = sectionState(html, "header");
  if (headerState === "missing" || headerState === "empty") {
    const headerReplace = readReplace(`header-${lang}.html`);
    if (headerState === "empty")
      html = html.replace(/<header[^>]*>[\s\S]*?<\/header>/i, headerReplace);
    else html = html.replace(/<body[^>]*>/i, `$&\n${headerReplace}`);
    changed = true;
    console.log(
      `🔵 ${
        headerState === "missing" ? "Dodano" : "Zastąpiono"
      } <header> w ${relPath}`
    );
  }

  // FOOTER
  const footerState = sectionState(html, "footer");
  if (footerState === "missing" || footerState === "empty") {
    const footerReplace = readReplace(`footer-${lang}.html`);
    if (footerState === "empty")
      html = html.replace(/<footer[^>]*>[\s\S]*?<\/footer>/i, footerReplace);
    else html = html.replace(/<\/body>/i, `${footerReplace}\n</body>`);
    changed = true;
    console.log(
      `🟣 ${
        footerState === "missing" ? "Dodano" : "Zastąpiono"
      } <footer> w ${relPath}`
    );
  }

  // OVERLAY
  if (!html.includes('id="overlay"')) {
    html = html.replace(/<\/stars>/i, `</stars>\n\n${OVERLAY_DIV}\n`);
    changed = true;
  } else {
    const overlayBlockRegex =
      /<div[^>]*id=["']overlay["'][^>]*>[\s\S]*?<\/div>/i;
    const hasOverlayComment =
      /<!--\s*OVERLAY\s*-->\s*<div[^>]*id=["']overlay["'][^>]*>/i;

    if (overlayBlockRegex.test(html) && !hasOverlayComment.test(html)) {
      html = html.replace(
        overlayBlockRegex,
        (match) => `\n\n<!-- OVERLAY -->\n${match}`
      );
      changed = true;
    }
  }

  // KOMENTARZE
  html = ensureComment(html, "header", "HEADER");
  html = ensureComment(html, "main", "MAIN");
  html = ensureComment(html, "footer", "FOOTER");
  html = ensureScriptComment(html);

  if (html !== original) {
    fs.writeFileSync(filePath, html, "utf8");
    console.log(`✏️  Zmieniono: ${relPath}`);
    changed = true;
  } else {
    console.log(`✅ Bez zmian: ${relPath}`);
  }

  return changed;
}

// 📜 Komentarze sekcji
function ensureComment(html, tagName, comment) {
  const regex = new RegExp(
    `([\\r\\n\\s]*)(<!--\\s*${comment}\\s*-->)?([\\r\\n\\s]*)(<${tagName}[^>]*>)`,
    "i"
  );
  return html.replace(regex, (match, before, existing, between, tag) => {
    if (existing) return match;
    return `\n\n<!-- ${comment} -->\n${tag}`;
  });
}

function ensureScriptComment(html) {
  const regex =
    /<\/footer>([\r\n\s]*)(<!--\s*SCRIPTS\s*-->)?([\r\n\s]*)(<script\b[^>]*>)/i;
  return html.replace(
    regex,
    (match, afterFooter, existing, between, script) => {
      if (existing) return match;
      return `</footer>\n\n<!-- SCRIPTS -->\n${script}`;
    }
  );
}

// 🚀 Start
const changedFiles = [];

for (const lang of langs) {
  const folderPath = path.join(rootDir, lang);
  if (!fs.existsSync(folderPath)) continue;

  console.log(`\n📁 Przeszukiwanie folderu: ${folderPath}`);
  const htmlFiles = getHtmlFiles(folderPath);

  for (const filePath of htmlFiles) {
    const changed = processFile(filePath, lang);
    if (changed) changedFiles.push(filePath);
  }
}

// 🎨 Formatowanie Prettierem tylko zmienionych plików
if (changedFiles.length > 0) {
  console.log(`\n🎨 Formatowanie ${changedFiles.length} plików...`);
  try {
    const quoted = changedFiles.map((f) => `"${f}"`).join(" ");
    execSync(`npx prettier --write ${quoted}`, { stdio: "inherit" });
  } catch (err) {
    console.error("⚠️ Błąd przy uruchamianiu Prettiera:", err.message);
  }
} else {
  console.log("\n✨ Brak zmian — pomijam formatowanie.");
}
