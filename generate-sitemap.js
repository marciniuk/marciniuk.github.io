import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import xmlFormat from "xml-formatter";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = __dirname;
const baseUrl = "https://marcini.uk";

// 🧠 Ustalanie priorytetu
function getPriority(filePath) {
  const relPath = filePath.replace(rootDir, "").replace(/\\/g, "/");

  if (relPath === "/index.html") return 1.0;
  if (relPath.includes("/404")) return 0.3;

  // głębokość ścieżki
  const depth = relPath.split("/").length - 2;
  if (depth === 1) return 0.8;
  if (depth === 2) return 0.6;
  return 0.5;
}

// 📂 Rekurencyjne wyszukiwanie plików HTML i PDF
function getAllFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);

  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      results = results.concat(getAllFiles(filePath));
    } else if (/\.(html|pdf)$/i.test(file)) {
      results.push(filePath);
    }
  }

  return results;
}

// 🧩 Generowanie sitemap
function generateSitemap() {
  console.log("🔍 Generowanie sitemap...");
  const files = getAllFiles(rootDir).filter(
    (file) => !file.replace(/\\/g, "/").includes("/assets/")
  );

  const urls = files.map((file) => {
    const relPath = file
      .replace(rootDir, "")
      .replace(/\\/g, "/")
      .replace(/index\.html$/, "")
      .replace(/^\//, "");

    const loc = `${baseUrl}/${relPath}`.replace(/\/+$/, "/");
    const lastmod = new Date(fs.statSync(file).mtime).toISOString();
    const priority = getPriority(file);

    return { loc, lastmod, priority };
  });

  // 🔢 sortowanie po priorytecie malejąco
  urls.sort((a, b) => b.priority - a.priority);

  // 🧱 składanie XML
  const xmlItems = urls
    .map(
      (u) => `
<url>
  <loc>${u.loc}</loc>
  <lastmod>${u.lastmod}</lastmod>
  <priority>${u.priority.toFixed(1)}</priority>
</url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlItems}
</urlset>`;

  const formatted = xmlFormat(xml, { indentation: "  " });
  fs.writeFileSync(path.join(rootDir, "sitemap.xml"), formatted);

  console.log("✅ Sitemap wygenerowana pomyślnie!");
}

generateSitemap();
