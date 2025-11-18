import { PurgeCSS } from "purgecss";
import fs from "fs";
import postcss from "postcss";
import cssnano from "cssnano";

const purge = async () => {
  // 1. Purge Font Awesome
  const result = await new PurgeCSS().purge({
    content: ["./**/*.html", "./**/*.js"],
    css: ["./assets/css/fontawesome-all.css"],
  });

  // 2. Minifikacja cssnano → bez zapisu pliku pośredniego
  const minified = await postcss([cssnano]).process(result[0].css, {
    from: undefined,
  });

  // 3. Jedyny zapis — finalny plik
  fs.writeFileSync("./assets/css/fontawesome.css", minified.css);

  console.log("✅ fontawesome.css wygenerowany i zminifikowany");
};

purge();
