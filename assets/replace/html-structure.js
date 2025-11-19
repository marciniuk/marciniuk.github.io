import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const rootDir = path.resolve("./");
const langs = ["pl", "en"];
const replaceDir = path.join(rootDir, "assets", "replace");

const MAIN_CONTENT = "<main></main>";
const SCRIPT_LINE = `<script src="/assets/js/main.js"></script>`;

// -------------------------------------------------------
// Helpery
// -------------------------------------------------------

function readReplace(name) {
  const p = path.join(replaceDir, name);
  return fs.existsSync(p) ? fs.readFileSync(p, "utf8") : "";
}

function getHtmlFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) out.push(...getHtmlFiles(full));
    else if (entry.endsWith(".html")) out.push(full);
  }
  return out;
}

function isEmptyHtml(s) {
  return !s || s.trim().length === 0;
}

function existsComment(html, label) {
  const re = new RegExp(`<!--\\s*${label}\\s*-->`, "i");
  return re.test(html);
}

function insertCommentAbove(html, tagRegex, commentLabel) {
  const match = html.match(tagRegex);
  if (!match) return html;

  const idx = match.index;

  // sprawdzamy, czy już jest komentarz tuż nad elementem
  const before = html.slice(0, idx);
  if (/<!--\s*[A-Z ]+\s*-->\s*$/i.test(before)) return html;

  return html.slice(0, idx) + `<!-- ${commentLabel} -->\n` + html.slice(idx);
}

function generateCanonical(filePath, lang) {
  // pl/setup/index.html -> https://marcini.uk/pl/setup/
  const rel = filePath.replace(rootDir, "").replace(/\\/g, "/");
  const parts = rel.split("/").filter(Boolean); // ["pl", "setup", "index.html"]
  parts.shift(); // remove lang
  if (parts[parts.length - 1] === "index.html") parts.pop();
  const langPrefix = `/${lang}`;
  const pathPart = parts.length ? `/${parts.join("/")}/` : "/";
  return `https://marcini.uk${langPrefix}${pathPart}`;
}

// -------------------------------------------------------
// NEW: ensure blank line between closing tag and following comment
// -------------------------------------------------------
function ensureBlankLineBetweenCloseAndComment(
  html,
  closeTagPattern,
  commentLabel,
) {
  // closeTagPattern: string regex for closing tag, e.g. "<\\/footer>"
  // commentLabel: "SCRIPTS" (we'll match <!-- SCRIPTS --> in any spacing)
  // We want to normalize patterns like:
  // </footer>\n<!-- SCRIPTS -->    -> to -> </footer>\n\n<!-- SCRIPTS -->
  // </footer>\n   \n\n   <!-- SCRIPTS -->  -> to -> </footer>\n\n<!-- SCRIPTS -->
  // also handle no newline: </footer><!-- SCRIPTS --> -> </footer>\n\n<!-- SCRIPTS -->

  const commentRegex = `<!--\\s*${commentLabel}\\s*-->`;
  const combined = new RegExp(
    `(${closeTagPattern})[\\t ]*(?:\\r?\\n|\\r){0,}[\\t ]*(?:\\r?\\n|\\r){0,}[\\t ]*(${commentRegex})`,
    "gi",
  );

  // Replace any occurrence where closeTag is followed (maybe immediately) by the comment,
  // with exactly: closeTag + newline + newline + comment
  return html.replace(combined, (m, g1, g2) => `${g1}\n\n${g2}`);
}

// -------------------------------------------------------
// Sekcje
// -------------------------------------------------------

function ensureSection(html, tag, htmlToInsert, label) {
  const tagRe = new RegExp(`<${tag}\\b[\\s\\S]*?<\\/${tag}>`, "i");

  if (tagRe.test(html)) {
    // istnieje → dodaj komentarz jeśli brak (nad otwarciem tagu)
    if (!existsComment(html, label)) {
      html = insertCommentAbove(html, tagRe, label);
    }
    return html;
  }

  // nie istnieje → trzeba wstawić przed </body>
  if (/<\/body>/i.test(html)) {
    return html.replace(
      /<\/body>/i,
      `<!-- ${label} -->\n${htmlToInsert}\n\n</body>`,
    );
  }

  return html + `\n<!-- ${label} -->\n${htmlToInsert}\n\n`;
}

function ensureStars(html) {
  const exists = /<stars\s*\/?>/i.test(html);
  if (exists) {
    if (!existsComment(html, "STARS")) {
      html = insertCommentAbove(html, /<stars/i, "STARS");
    }
    return html;
  }

  // wstaw po body
  const bodyOpen = html.match(/<body[^>]*>/i);
  if (!bodyOpen) return html;

  const insertPos = bodyOpen.index + bodyOpen[0].length;
  return (
    html.slice(0, insertPos) +
    `\n<!-- STARS -->\n<stars></stars>\n\n` +
    html.slice(insertPos)
  );
}

function ensureOverlay(html, overlayTpl) {
  const exists =
    /id=["']overlay["']/.test(html) || html.includes(overlayTpl.trim());

  if (exists) {
    if (!existsComment(html, "OVERLAY")) {
      html = insertCommentAbove(html, /id=["']overlay["']/, "OVERLAY");
    }
    return html;
  }

  // wstaw po <stars>
  if (/<stars/i.test(html)) {
    return html.replace(
      /<stars[^>]*>/i,
      (m) => `${m}\n\n<!-- OVERLAY -->\n${overlayTpl}\n\n`,
    );
  }

  // wstaw po body
  const bodyOpen = html.match(/<body[^>]*>/i);
  if (!bodyOpen) return html;

  const insertPos = bodyOpen.index + bodyOpen[0].length;
  return (
    html.slice(0, insertPos) +
    `\n<!-- OVERLAY -->\n${overlayTpl}\n\n` +
    html.slice(insertPos)
  );
}

function ensureScripts(html) {
  const exists = html.includes(SCRIPT_LINE);
  const commentExists = existsComment(html, "SCRIPTS");

  if (exists) {
    if (!commentExists) {
      html = insertCommentAbove(
        html,
        new RegExp(SCRIPT_LINE.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
        "SCRIPTS",
      );
    }
    return html;
  }

  // brak skryptu → dodaj przed </body>
  return html.replace(
    /<\/body>/i,
    `<!-- SCRIPTS -->\n${SCRIPT_LINE}\n\n</body>`,
  );
}

// -------------------------------------------------------
// Główna logika
// -------------------------------------------------------

function processFile(filePath, lang) {
  const structure = readReplace("structure.html");
  const headTplRaw = readReplace(`head-${lang}.html`);
  const headerTpl = readReplace(`header-${lang}.html`);
  const footerTpl = readReplace(`footer-${lang}.html`);
  const overlayTpl = readReplace("overlay.html");

  let html = fs.readFileSync(filePath, "utf8");
  const originalTrimmed = html.trim();

  const hasHead = /<head\b[^>]*>/i.test(html);
  const empty = isEmptyHtml(html);

  // ------------------ PUSTY PLIK -----------------------
  if (empty) {
    const canonical = generateCanonical(filePath, lang);
    const headTpl = headTplRaw.replace("{{CANONICAL}}", canonical);

    html = structure.replace(/<html[^>]*lang="[^"]*"/i, `<html lang="${lang}"`);
    // nie dodajemy komentarza nad head (zgodnie z wymaganiem)
    html = html.replace("<head></head>", `${headTpl}\n`);

    html = html.replace(
      "<body></body>",
      `<body>
<!-- STARS -->
<stars></stars>

<!-- OVERLAY -->
${overlayTpl}

<!-- HEADER -->
${headerTpl}

<!-- MAIN -->
${MAIN_CONTENT}

<!-- FOOTER -->
${footerTpl}

<!-- SCRIPTS -->
${SCRIPT_LINE}

</body>`,
    );

    // normalizacja odstępów pomiędzy zamykającymi tagami i komentarzami
    html = normalizeCloseCommentGaps(html);

    fs.writeFileSync(filePath, html);
    return true;
  }

  // ------------------ ISTNIEJĄCY PLIK -----------------------

  // HEAD istnieje → nic nie ruszamy w head (nie podmieniamy canonical)
  if (!hasHead) {
    // brak head → wstrzykujemy head z canonical
    const canonical = generateCanonical(filePath, lang);
    const headTpl = headTplRaw.replace("{{CANONICAL}}", canonical);

    html = html.replace(/<html[^>]*>/i, (m) => `${m}\n${headTpl}\n`);
  }

  // STARS
  html = ensureStars(html);

  // OVERLAY
  html = ensureOverlay(html, overlayTpl);

  // HEADER / MAIN / FOOTER
  html = ensureSection(html, "header", headerTpl, "HEADER");
  html = ensureSection(html, "main", MAIN_CONTENT, "MAIN");
  html = ensureSection(html, "footer", footerTpl, "FOOTER");

  // SCRIPT
  html = ensureScripts(html);

  // -------------------------------------------------------
  // NEW: normalizuj odstępy pomiędzy zamknięciami i komentarzami
  // -------------------------------------------------------
  html = normalizeCloseCommentGaps(html);

  if (html !== originalTrimmed) {
    fs.writeFileSync(filePath, html);
    return true;
  }

  return false;
}

// -------------------------------------------------------
// wrapper który aplikuje ensureBlankLineBetweenCloseAndComment
// dla wszystkich par które chcesz sprawdzić.
// -------------------------------------------------------
function normalizeCloseCommentGaps(html) {
  // </footer>  --> <!-- SCRIPTS -->
  html = ensureBlankLineBetweenCloseAndComment(html, "<\\/footer>", "SCRIPTS");

  // </main> --> <!-- FOOTER -->
  html = ensureBlankLineBetweenCloseAndComment(html, "<\\/main>", "FOOTER");

  // </header> --> <!-- MAIN -->
  html = ensureBlankLineBetweenCloseAndComment(html, "<\\/header>", "MAIN");

  // </div> --> <!-- HEADER -->
  // (jeżeli masz specyficzny wrapper z divem dla headera — dopasuj pattern jeśli trzeba)
  html = ensureBlankLineBetweenCloseAndComment(html, "<\\/div>", "HEADER");

  // <stars></stars> --> <!-- OVERLAY -->
  // handle both <stars></stars> and <stars />
  html = ensureBlankLineBetweenCloseAndComment(
    html,
    "<stars(?:\\s*\\/?>|>\\s*<\\/stars>)",
    "OVERLAY",
  );

  return html;
}

// -------------------------------------------------------
// RUN
// -------------------------------------------------------

const changed = [];

for (const lang of langs) {
  const dir = path.join(rootDir, lang);
  const files = getHtmlFiles(dir);
  for (const f of files) {
    try {
      const did = processFile(f, lang);
      if (did) changed.push(f);
    } catch (err) {
      console.error("Błąd przetwarzania", f, err);
    }
  }
}

if (changed.length) {
  console.log("Formatowanie zmienionych plików...");
  try {
    execSync(`npx prettier --write ${changed.map((s) => `"${s}"`).join(" ")}`, {
      stdio: "inherit",
    });
  } catch (e) {
    console.warn("Prettier zakończył się błędem:", e.message);
  }
} else {
  console.log("Brak zmian.");
}
