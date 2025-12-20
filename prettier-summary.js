import { exec } from "child_process";

// Kolorki ANSI
const COLORS = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  cyan: "\x1b[36m",
  bold: "\x1b[1m",
};

function runPrettier() {
  return new Promise((resolve, reject) => {
    exec(
      "npx prettier --write .",
      { maxBuffer: 1024 * 1024 * 10 },
      (err, stdout, stderr) => {
        if (err && !stdout && !stderr) {
          return reject(err);
        }
        resolve({ stdout: stdout || "", stderr: stderr || "" });
      },
    );
  });
}

function parsePrettierOutput(text) {
  const lines = text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

  let total = 0;
  let changed = 0;

  const re = /^(.*?)\s+\d+ms(?:\s*\(unchanged\))?$/i;
  const reUnchanged = /\(unchanged\)/i;

  for (const line of lines) {
    const m = line.match(re);
    if (!m) continue;
    total++;
    if (!reUnchanged.test(line)) changed++;
  }

  return { total, changed };
}

(async () => {
  try {
    const { stdout, stderr } = await runPrettier();
    const combined = [stdout, stderr].filter(Boolean).join("\n");

    if (!combined.trim()) {
      console.log(
        "\n" +
          COLORS.red +
          "⚠ Prettier nie zwrócił outputu — sprawdź instalację." +
          COLORS.reset +
          "\n",
      );
      process.exitCode = 1;
      return;
    }

    const { total, changed } = parsePrettierOutput(combined);

    if (total === 0) {
      console.log(
        "\n" +
          COLORS.yellow +
          "⚠ Nie udało się sparsować outputu. Surowy output:" +
          COLORS.reset +
          "\n",
      );
      console.log(combined.slice(0, 2000));
      console.log("");
      process.exitCode = 1;
      return;
    }

    // ŁADNY, kolorowy output:
    console.log(
      "\n" +
        COLORS.cyan +
        COLORS.bold +
        "✨ Prettier zakończony!" +
        COLORS.reset,
    );

    console.log(COLORS.green + `✔ Zmieniono: ${changed} plików` + COLORS.reset);

    console.log(
      COLORS.yellow + `• Przetworzono łącznie: ${total} plików` + COLORS.reset,
    );

    console.log(""); // pusta linia na końcu
  } catch (err) {
    console.error(
      "\n" + COLORS.red + "❌ Błąd przy uruchamianiu Prettiera:" + COLORS.reset,
      err.message || err,
      "\n",
    );
    process.exitCode = 1;
  }
})();
