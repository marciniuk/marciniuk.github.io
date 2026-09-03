import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const outputDir = path.join(root, "assets", "js");

const wasmFiles = [
  // WebP
  ["node_modules/@jsquash/webp/codec/enc/webp_enc.wasm", "webp_enc.wasm"],
  [
    "node_modules/@jsquash/webp/codec/enc/webp_enc_simd.wasm",
    "webp_enc_simd.wasm",
  ],

  // AVIF
  ["node_modules/@jsquash/avif/codec/enc/avif_enc.wasm", "avif_enc.wasm"],
  ["node_modules/@jsquash/avif/codec/enc/avif_enc_mt.wasm", "avif_enc_mt.wasm"],

  // PNG
  [
    "node_modules/@jsquash/oxipng/codec/pkg/squoosh_oxipng_bg.wasm",
    "squoosh_oxipng_bg.wasm",
  ],

  // JPEG
  ["node_modules/@jsquash/jpeg/codec/enc/mozjpeg_enc.wasm", "mozjpeg_enc.wasm"],

  // JXL
  ["node_modules/@jsquash/jxl/codec/enc/jxl_enc.wasm", "jxl_enc.wasm"],
];

fs.mkdirSync(outputDir, { recursive: true });

for (const [source, filename] of wasmFiles) {
  const sourcePath = path.join(root, source);
  const destinationPath = path.join(outputDir, filename);

  if (!fs.existsSync(sourcePath)) {
    console.error(`❌ Brak pliku: ${sourcePath}`);
    process.exitCode = 1;
    continue;
  }

  fs.copyFileSync(sourcePath, destinationPath);

  console.log(`✓ ${filename}`);
}

console.log("\nWASM files copied successfully.");
