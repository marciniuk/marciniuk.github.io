import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const source = path.resolve(
  __dirname,
  "../../../node_modules/esbuild-wasm/esbuild.wasm",
);

const destination = path.resolve(__dirname, "esbuild.wasm");

fs.copyFileSync(source, destination);

console.log("✓ esbuild.wasm copied");
