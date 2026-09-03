import { encode as encodeWebP } from "@jsquash/webp";
import { encode as encodeAVIF } from "@jsquash/avif";
import { encode as encodeJPEG } from "@jsquash/jpeg";
import { encode as encodeJXL } from "@jsquash/jxl";
import { optimise as optimisePNG } from "@jsquash/oxipng";
import JSZip from "jszip";

const isEnglish = document.documentElement.lang === "en";
const text = (polish, english) => (isEnglish ? english : polish);

/* =========================================================
   ELEMENTS
   ========================================================= */

const modeSingle = document.getElementById("mode-single");
const modeBatch = document.getElementById("mode-batch");

const singlePanel = document.getElementById("single-panel");
const batchPanel = document.getElementById("batch-panel");

const singleDropzone = document.getElementById("single-dropzone");
const singleInput = document.getElementById("single-input");

const batchDropzone = document.getElementById("batch-dropzone");
const batchInput = document.getElementById("batch-input");

const batchList = document.getElementById("batch-list");
const batchCount = document.getElementById("batch-count");
const batchOptimize = document.getElementById("batch-optimize");
const batchDownload = document.getElementById("batch-download");
const batchProgress = document.getElementById("batch-progress");
const batchProgressBar = document.getElementById("batch-progress-bar");
const batchStatus = document.getElementById("batch-status");

/* =========================================================
   SINGLE SETTINGS
   ========================================================= */

const format = document.getElementById("format");
const quality = document.getElementById("quality");
const qualityValue = document.getElementById("quality-value");
const qualityWrapper = document.getElementById("quality-wrapper");

const resizeEnabled = document.getElementById("resize-enabled");
const resizeOptions = document.getElementById("resize-options");

const widthInput = document.getElementById("width");
const heightInput = document.getElementById("height");
const keepRatio = document.getElementById("keep-ratio");

/* =========================================================
   SINGLE FORMAT SELECT
   ========================================================= */

const formatSelect = document.getElementById("format-select");
const formatTrigger = document.getElementById("format-trigger");
const formatOptions = document.getElementById("format-options");
const formatLabel = document.getElementById("format-label");
const formatDot = document.getElementById("format-dot");
const formatChevron = document.getElementById("format-chevron");

const formatOptionElements =
  formatOptions?.querySelectorAll(".format-option") || [];

/* =========================================================
   BATCH SETTINGS
   ========================================================= */

const batchFormat = document.getElementById("batch-format");
const batchQuality = document.getElementById("batch-quality");
const batchQualityValue = document.getElementById("batch-quality-value");
const batchQualityWrapper = document.getElementById("batch-quality-wrapper");

const batchResizeEnabled = document.getElementById("batch-resize-enabled");
const batchResizeOptions = document.getElementById("batch-resize-options");

const batchWidthInput = document.getElementById("batch-width");
const batchHeightInput = document.getElementById("batch-height");
const batchKeepRatio = document.getElementById("batch-keep-ratio");

/* =========================================================
   BATCH FORMAT SELECT
   ========================================================= */

const batchFormatSelect = document.getElementById("batch-format-select");
const batchFormatTrigger = document.getElementById("batch-format-trigger");
const batchFormatOptions = document.getElementById("batch-format-options");
const batchFormatLabel = document.getElementById("batch-format-label");
const batchFormatDot = document.getElementById("batch-format-dot");
const batchFormatChevron = document.getElementById("batch-format-chevron");

const batchFormatOptionElements =
  batchFormatOptions?.querySelectorAll(".batch-format-option") || [];

/* =========================================================
   STATE
   ========================================================= */

let singleFile = null;
let singleBlob = null;

let singleOriginalUrl = null;
let singleOptimizedUrl = null;

let originalWidth = 0;
let originalHeight = 0;

let optimizationId = 0;

const batchFiles = [];
let batchResults = [];
let batchZipBlob = null;

let formatSelectOpen = false;
let batchFormatSelectOpen = false;

/* =========================================================
   HELPERS
   ========================================================= */

function formatBytes(bytes) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

function getExtension(formatValue = format.value) {
  return formatValue === "jpeg" ? "jpg" : formatValue;
}

function getSaving(original, optimized) {
  if (!original || optimized >= original) {
    return "0%";
  }

  return `${((1 - optimized / original) * 100).toFixed(1)}%`;
}

function getOutputName(name, formatValue = format.value) {
  return `${name.replace(/\.[^/.]+$/, "")}.${getExtension(formatValue)}`;
}

function isImage(file) {
  return file?.type.startsWith("image/");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function invalidateBatchResults() {
  batchResults = [];
  batchZipBlob = null;
  batchDownload?.classList.add("hidden");
}

/* =========================================================
   MODE SWITCH
   ========================================================= */

function setMode(mode) {
  const isSingle = mode === "single";

  singlePanel?.classList.toggle("hidden", !isSingle);
  batchPanel?.classList.toggle("hidden", isSingle);

  modeSingle?.classList.toggle("bg-blue-500/15", isSingle);
  modeSingle?.classList.toggle("text-white", isSingle);
  modeSingle?.classList.toggle("text-white/45", !isSingle);
  modeSingle?.setAttribute("aria-pressed", String(isSingle));

  modeSingle
    ?.querySelector("span")
    ?.classList.toggle("bg-blue-400/10", isSingle);

  modeSingle
    ?.querySelector("span")
    ?.classList.toggle("bg-white/[0.035]", !isSingle);

  modeSingle
    ?.querySelector("span")
    ?.classList.toggle("text-blue-300", isSingle);

  modeSingle
    ?.querySelector("span")
    ?.classList.toggle("text-white/35", !isSingle);

  modeBatch?.classList.toggle("bg-blue-500/15", !isSingle);
  modeBatch?.classList.toggle("text-white", !isSingle);
  modeBatch?.classList.toggle("text-white/45", isSingle);
  modeBatch?.setAttribute("aria-pressed", String(!isSingle));

  modeBatch
    ?.querySelector("span")
    ?.classList.toggle("bg-blue-400/10", !isSingle);

  modeBatch
    ?.querySelector("span")
    ?.classList.toggle("bg-white/[0.035]", isSingle);

  modeBatch
    ?.querySelector("span")
    ?.classList.toggle("text-blue-300", !isSingle);

  modeBatch?.querySelector("span")?.classList.toggle("text-white/35", isSingle);

  closeFormatSelect();
  closeBatchFormatSelect();
}

modeSingle?.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();

  setMode("single");
});

modeBatch?.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();

  setMode("batch");
});

/* =========================================================
   SINGLE FILE
   ========================================================= */

singleDropzone?.addEventListener("click", () => {
  singleInput.value = "";
  singleInput.click();
});

singleInput?.addEventListener("change", () => {
  const file = singleInput.files?.[0];

  if (file) {
    loadSingleFile(file);
  }
});

singleDropzone?.addEventListener("dragover", (event) => {
  event.preventDefault();

  singleDropzone.classList.add(
    "border-blue-400",
    "bg-blue-500/20",
    "scale-[1.01]",
  );
});

singleDropzone?.addEventListener("dragleave", () => {
  singleDropzone.classList.remove(
    "border-blue-400",
    "bg-blue-500/20",
    "scale-[1.01]",
  );
});

singleDropzone?.addEventListener("drop", (event) => {
  event.preventDefault();

  singleDropzone.classList.remove(
    "border-blue-400",
    "bg-blue-500/20",
    "scale-[1.01]",
  );

  const file = [...event.dataTransfer.files].find(isImage);

  if (file) {
    loadSingleFile(file);
  }
});

async function loadSingleFile(file) {
  if (!isImage(file)) {
    return;
  }

  optimizationId++;

  singleFile = file;
  singleBlob = null;

  if (singleOriginalUrl) {
    URL.revokeObjectURL(singleOriginalUrl);
  }

  if (singleOptimizedUrl) {
    URL.revokeObjectURL(singleOptimizedUrl);
    singleOptimizedUrl = null;
  }

  singleOriginalUrl = URL.createObjectURL(file);

  const preview = document.getElementById("single-original-preview");

  if (preview) {
    preview.src = singleOriginalUrl;
  }

  try {
    const bitmap = await createImageBitmap(file);

    originalWidth = bitmap.width;
    originalHeight = bitmap.height;

    bitmap.close();
  } catch (error) {
    console.error(error);
    return;
  }

  const name = document.getElementById("single-name");
  const info = document.getElementById("single-info");
  const originalSize = document.getElementById("single-original-size");
  const singleWidth = document.getElementById("single-width");
  const statsOriginal = document.getElementById("single-stats-original");
  const tool = document.getElementById("single-tool");

  if (name) {
    name.textContent = file.name;
  }

  if (info) {
    info.textContent = `${originalWidth} × ${originalHeight}`;
  }

  if (originalSize) {
    originalSize.textContent = formatBytes(file.size);
  }

  if (singleWidth) {
    singleWidth.textContent = `${originalWidth} × ${originalHeight} px`;
  }

  if (statsOriginal) {
    statsOriginal.textContent = formatBytes(file.size);
  }

  widthInput.value = originalWidth;
  heightInput.value = originalHeight;

  tool?.classList.remove("hidden");
  singleDropzone?.classList.add("hidden");

  await optimizeSingle();
}

/* =========================================================
    SINGLE PREVIEW CLICK
    ========================================================= */

const singleOriginalPreview = document.getElementById(
  "single-original-preview",
);

const singleOptimizedPreview = document.getElementById(
  "single-optimized-preview",
);

singleOriginalPreview?.addEventListener("click", () => {
  if (singleOriginalUrl) {
    window.open(singleOriginalUrl, "_blank", "noopener,noreferrer");
  }
});

singleOptimizedPreview?.addEventListener("click", () => {
  if (singleOptimizedUrl) {
    window.open(singleOptimizedUrl, "_blank", "noopener,noreferrer");
  }
});

/* =========================================================
   IMAGE ENCODER
   ========================================================= */

async function encodeImage(file, settings = {}) {
  const bitmap = await createImageBitmap(file);

  const {
    formatValue = format.value,
    qualityValue = Number(quality.value),
    resize = resizeEnabled.checked,
    width = widthInput.value,
    height = heightInput.value,
  } = settings;

  let targetWidth = bitmap.width;
  let targetHeight = bitmap.height;

  if (resize) {
    targetWidth = Math.max(1, Number(width)) || bitmap.width;
    targetHeight = Math.max(1, Number(height)) || bitmap.height;
  }

  const canvas = document.createElement("canvas");

  canvas.width = targetWidth;
  canvas.height = targetHeight;

  const ctx = canvas.getContext("2d", {
    willReadFrequently: true,
  });

  if (!ctx) {
    bitmap.close();
    throw new Error(
      text("Nie udało się utworzyć Canvas.", "Could not create the canvas."),
    );
  }

  ctx.drawImage(bitmap, 0, 0, targetWidth, targetHeight);

  bitmap.close();

  const imageData = ctx.getImageData(0, 0, targetWidth, targetHeight);

  let outputBuffer;
  let outputMime;

  if (formatValue === "webp") {
    outputBuffer = await encodeWebP(imageData, {
      quality: Number(qualityValue),
    });

    outputMime = "image/webp";
  }

  if (formatValue === "avif") {
    outputBuffer = await encodeAVIF(imageData, {
      quality: Number(qualityValue),
    });

    outputMime = "image/avif";
  }

  if (formatValue === "jpeg") {
    outputBuffer = await encodeJPEG(imageData, {
      quality: Number(qualityValue),
    });

    outputMime = "image/jpeg";
  }

  if (formatValue === "jxl") {
    outputBuffer = await encodeJXL(imageData, {
      quality: Number(qualityValue),
      effort: 7,
    });

    outputMime = "image/jxl";
  }

  if (formatValue === "png") {
    outputBuffer = await optimisePNG(imageData, {
      level: 6,
      optimiseAlpha: true,
    });

    outputMime = "image/png";
  }

  if (!outputBuffer) {
    throw new Error(text("Nieobsługiwany format.", "Unsupported format."));
  }

  return new Blob([outputBuffer], {
    type: outputMime,
  });
}

/* =========================================================
   SINGLE OPTIMIZATION
   ========================================================= */

async function optimizeSingle() {
  if (!singleFile) {
    return;
  }

  const currentId = ++optimizationId;

  const optimizedSize = document.getElementById("single-optimized-size");
  const optimizedPreview = document.getElementById("single-optimized-preview");
  const statsOptimized = document.getElementById("single-stats-optimized");
  const saving = document.getElementById("single-saving");

  if (optimizedSize) {
    optimizedSize.textContent = "Przetwarzanie...";
  }

  if (statsOptimized) {
    statsOptimized.textContent = "…";
  }

  if (saving) {
    saving.textContent = "…";
  }

  try {
    const blob = await encodeImage(singleFile, {
      formatValue: format.value,
      qualityValue: Number(quality.value),
      resize: resizeEnabled.checked,
      width: widthInput.value,
      height: heightInput.value,
    });

    if (currentId !== optimizationId) {
      return;
    }

    singleBlob = blob;

    if (singleOptimizedUrl) {
      URL.revokeObjectURL(singleOptimizedUrl);
    }

    singleOptimizedUrl = URL.createObjectURL(blob);

    if (optimizedPreview) {
      optimizedPreview.src = singleOptimizedUrl;
    }

    if (optimizedSize) {
      optimizedSize.textContent = formatBytes(blob.size);
    }

    if (statsOptimized) {
      statsOptimized.textContent = formatBytes(blob.size);
    }

    if (saving) {
      saving.textContent = getSaving(singleFile.size, blob.size);
    }

    updateDownloadButton();
  } catch (error) {
    console.error("Single optimization error:", error);

    if (currentId !== optimizationId) {
      return;
    }

    if (optimizedSize) {
      optimizedSize.textContent = text("Błąd", "Error");
    }

    if (statsOptimized) {
      statsOptimized.textContent = text("Błąd", "Error");
    }

    if (saving) {
      saving.textContent = "—";
    }
  }
}

/* =========================================================
   SINGLE DOWNLOAD
   ========================================================= */

function updateDownloadButton() {
  const button = document.getElementById("single-download");

  if (!button) {
    return;
  }

  button.innerHTML = `
    <i class="fad fa-download mr-2"></i>
    ${text("Pobierz", "Download")} ${getExtension().toUpperCase()}
  `;
}

document.getElementById("single-download")?.addEventListener("click", () => {
  if (!singleBlob || !singleFile) {
    return;
  }

  const url = URL.createObjectURL(singleBlob);
  const link = document.createElement("a");

  link.href = url;
  link.download = getOutputName(singleFile.name, format.value);

  document.body.appendChild(link);
  link.click();
  link.remove();

  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 1000);
});

document.getElementById("single-change")?.addEventListener("click", () => {
  singleInput.value = "";
  singleInput.click();
});

/* =========================================================
   SINGLE RESIZE
   ========================================================= */

resizeEnabled?.addEventListener("change", () => {
  resizeOptions.classList.toggle("hidden", !resizeEnabled.checked);

  if (singleFile) {
    optimizeSingle();
  }
});

keepRatio?.addEventListener("change", () => {
  if (keepRatio.checked) {
    updateHeightFromWidth();
  }

  if (singleFile) {
    optimizeSingle();
  }
});

widthInput?.addEventListener("input", () => {
  if (keepRatio.checked) {
    updateHeightFromWidth();
  }

  clearTimeout(widthInput._timer);

  widthInput._timer = setTimeout(() => {
    if (singleFile) {
      optimizeSingle();
    }
  }, 700);
});

heightInput?.addEventListener("input", () => {
  if (keepRatio.checked) {
    updateWidthFromHeight();
  }

  clearTimeout(heightInput._timer);

  heightInput._timer = setTimeout(() => {
    if (singleFile) {
      optimizeSingle();
    }
  }, 700);
});

function updateHeightFromWidth() {
  if (!keepRatio.checked || !originalWidth) {
    return;
  }

  const width = Number(widthInput.value);

  if (!width || width < 1) {
    return;
  }

  heightInput.value = Math.round(width * (originalHeight / originalWidth));
}

function updateWidthFromHeight() {
  if (!keepRatio.checked || !originalHeight) {
    return;
  }

  const height = Number(heightInput.value);

  if (!height || height < 1) {
    return;
  }

  widthInput.value = Math.round(height * (originalWidth / originalHeight));
}

/* =========================================================
   SINGLE FORMAT & QUALITY
   ========================================================= */

quality?.addEventListener("input", () => {
  qualityValue.textContent = `${quality.value}%`;

  clearTimeout(quality._timer);

  quality._timer = setTimeout(() => {
    if (singleFile) {
      optimizeSingle();
    }
  }, 700);
});

format?.addEventListener("change", () => {
  updateQualityVisibility();
  updateFormatSelect();

  if (singleFile) {
    optimizeSingle();
  }
});

function updateQualityVisibility() {
  const isPng = format.value === "png";

  qualityWrapper?.classList.toggle("hidden", isPng);

  updateDownloadButton();
}

/* =========================================================
   FORMAT COLORS
   ========================================================= */

const formatColors = {
  webp: {
    dot: "bg-sky-400",
    text: "text-sky-300",
    shadow: "shadow-[0_0_10px_rgba(56,189,248,0.45)]",
  },
  avif: {
    dot: "bg-violet-400",
    text: "text-violet-300",
    shadow: "shadow-[0_0_10px_rgba(167,139,250,0.45)]",
  },
  jpeg: {
    dot: "bg-amber-400",
    text: "text-amber-300",
    shadow: "shadow-[0_0_10px_rgba(251,191,36,0.45)]",
  },
  jxl: {
    dot: "bg-cyan-400",
    text: "text-cyan-300",
    shadow: "shadow-[0_0_10px_rgba(34,211,238,0.45)]",
  },
  png: {
    dot: "bg-emerald-400",
    text: "text-emerald-300",
    shadow: "shadow-[0_0_10px_rgba(52,211,153,0.45)]",
  },
};

const batchFormatColors = formatColors;

/* =========================================================
   FORMAT DROPDOWN HELPERS
   ========================================================= */

function setupDropdown(options) {
  if (!options) {
    return;
  }

  if (options.parentElement !== document.body) {
    document.body.appendChild(options);
  }

  options.style.position = "fixed";
  options.style.zIndex = "99999";
  options.style.margin = "0";
}

function positionDropdown(trigger, options) {
  if (!trigger || !options) {
    return;
  }

  const triggerRect = trigger.getBoundingClientRect();
  const viewportWidth = document.documentElement.clientWidth;
  const viewportHeight = window.innerHeight;

  const gap = 8;
  const padding = 8;

  options.style.position = "fixed";
  options.style.width = `${triggerRect.width}px`;
  options.style.zIndex = "99999";

  const previousTransition = options.style.transition;

  options.style.transition = "none";
  options.style.left = `${triggerRect.left}px`;
  options.style.top = `${triggerRect.bottom + gap}px`;

  void options.offsetHeight;

  const dropdownHeight = options.getBoundingClientRect().height;

  const spaceBelow = viewportHeight - triggerRect.bottom - gap - padding;

  const spaceAbove = triggerRect.top - gap - padding;

  const shouldOpenAbove =
    spaceBelow < dropdownHeight && spaceAbove > spaceBelow;

  let top = shouldOpenAbove
    ? triggerRect.top - dropdownHeight - gap
    : triggerRect.bottom + gap;

  top = Math.max(
    padding,
    Math.min(top, viewportHeight - dropdownHeight - padding),
  );

  let left = triggerRect.left;

  if (left + triggerRect.width > viewportWidth - padding) {
    left = viewportWidth - triggerRect.width - padding;
  }

  left = Math.max(padding, left);

  options.style.left = `${left}px`;
  options.style.top = `${top}px`;
  options.dataset.placement = shouldOpenAbove ? "top" : "bottom";

  options.style.transition = previousTransition;
}

function prepareDropdown(options) {
  options?.classList.add(
    "pointer-events-none",
    "invisible",
    "opacity-0",
    "scale-95",
  );

  options?.classList.remove("opacity-100", "scale-100");
}

/* =========================================================
   SINGLE FORMAT DROPDOWN
   ========================================================= */

setupDropdown(formatOptions);

function openFormatSelect() {
  if (!formatTrigger || !formatOptions || formatSelectOpen) {
    return;
  }

  formatSelectOpen = true;

  setupDropdown(formatOptions);
  prepareDropdown(formatOptions);
  positionDropdown(formatTrigger, formatOptions);

  void formatOptions.offsetHeight;

  formatOptions.classList.remove("invisible", "pointer-events-none");

  formatTrigger.setAttribute("aria-expanded", "true");
  formatChevron?.classList.add("rotate-180");

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (!formatSelectOpen) {
        return;
      }

      formatOptions.classList.remove("opacity-0", "scale-95");
      formatOptions.classList.add("opacity-100", "scale-100");
    });
  });
}

function closeFormatSelect() {
  if (!formatOptions || !formatTrigger) {
    return;
  }

  if (!formatSelectOpen) {
    prepareDropdown(formatOptions);

    formatTrigger.setAttribute("aria-expanded", "false");
    formatChevron?.classList.remove("rotate-180");

    return;
  }

  formatSelectOpen = false;

  formatOptions.classList.remove("opacity-100", "scale-100");
  formatOptions.classList.add("opacity-0", "scale-95");

  formatTrigger.setAttribute("aria-expanded", "false");
  formatChevron?.classList.remove("rotate-180");

  window.setTimeout(() => {
    if (!formatSelectOpen) {
      formatOptions.classList.add("pointer-events-none", "invisible");
    }
  }, 200);
}

function updateFormatSelect() {
  if (!format || !formatOptions || !formatLabel || !formatDot) {
    return;
  }

  const value = format.value;
  const selectedOption = formatOptions.querySelector(`[data-value="${value}"]`);

  if (!selectedOption) {
    return;
  }

  const label = selectedOption.querySelector("span.flex span:last-child");

  formatLabel.textContent = label?.textContent?.trim() || value.toUpperCase();

  const colors = formatColors[value];

  if (!colors) {
    return;
  }

  formatDot.className = `
    h-2
    w-2
    rounded-full
    ${colors.dot}
    ${colors.shadow}
    transition-all
    duration-300
  `;

  formatLabel.className = `
    transition-colors
    duration-300
    ${colors.text}
  `;

  formatOptionElements.forEach((option) => {
    const selected = option.dataset.value === value;
    const check = option.querySelector(".format-check");

    option.setAttribute("aria-selected", String(selected));

    check?.classList.toggle("opacity-100", selected);
    check?.classList.toggle("opacity-0", !selected);

    option.classList.toggle("bg-white/[0.07]", selected);
    option.classList.toggle("text-white", selected);
    option.classList.toggle("text-white/65", !selected);
  });
}

formatTrigger?.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();

  if (formatSelectOpen) {
    closeFormatSelect();
  } else {
    openFormatSelect();
  }
});

formatOptionElements.forEach((option) => {
  option.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();

    const value = option.dataset.value;

    if (!value) {
      return;
    }

    format.value = value;

    format.dispatchEvent(
      new Event("change", {
        bubbles: true,
      }),
    );

    updateFormatSelect();
    closeFormatSelect();
  });
});

formatTrigger?.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();

    closeFormatSelect();
    formatTrigger.focus();

    return;
  }

  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();

    if (formatSelectOpen) {
      closeFormatSelect();
    } else {
      openFormatSelect();
    }
  }
});

/* =========================================================
   BATCH FILES
   ========================================================= */

batchDropzone?.addEventListener("click", () => {
  batchInput.value = "";
  batchInput.click();
});

batchInput?.addEventListener("change", () => {
  addBatchFiles([...batchInput.files]);
});

batchDropzone?.addEventListener("dragover", (event) => {
  event.preventDefault();

  batchDropzone.classList.add(
    "border-blue-400",
    "bg-blue-500/20",
    "scale-[1.01]",
  );
});

batchDropzone?.addEventListener("dragleave", () => {
  batchDropzone.classList.remove(
    "border-blue-400",
    "bg-blue-500/20",
    "scale-[1.01]",
  );
});

batchDropzone?.addEventListener("drop", (event) => {
  event.preventDefault();

  batchDropzone.classList.remove(
    "border-blue-400",
    "bg-blue-500/20",
    "scale-[1.01]",
  );

  addBatchFiles([...event.dataTransfer.files]);
});

function addBatchFiles(files) {
  const images = files.filter(isImage);

  for (const file of images) {
    const exists = batchFiles.some(
      (item) =>
        item.name === file.name &&
        item.size === file.size &&
        item.lastModified === file.lastModified,
    );

    if (!exists) {
      batchFiles.push(file);
    }
  }

  invalidateBatchResults();
  renderBatchList();
}

function renderBatchList() {
  batchList.innerHTML = "";

  batchCount.textContent =
    batchFiles.length === 1
      ? text("1 zdjęcie", "1 image")
      : text(`${batchFiles.length} zdjęć`, `${batchFiles.length} images`);

  if (!batchFiles.length) {
    batchList.innerHTML = `
      <div class="py-10 text-center text-sm text-white/30">
        ${text("Nie dodano jeszcze żadnych zdjęć", "No images added yet")}
      </div>
    `;

    batchOptimize.disabled = true;

    return;
  }

  batchOptimize.disabled = false;

  batchFiles.forEach((file, index) => {
    const row = document.createElement("div");

    row.className =
      "flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-3";

    row.innerHTML = `
      <div class="h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-black/20">
        <img
          class="batch-thumb h-full w-full object-cover"
          alt=""
        />
      </div>

      <div class="min-w-0 flex-1">
        <div class="truncate text-sm text-white/80">
          ${escapeHtml(file.name)}
        </div>

        <div class="mt-0.5 text-xs text-white/30">
          ${formatBytes(file.size)}
        </div>

        <div
          class="batch-file-status mt-1 text-xs text-white/25"
          data-index="${index}"
        >
          ${text("Oczekuje", "Pending")}
        </div>
      </div>

      <button
        type="button"
        class="batch-remove h-8 w-8 shrink-0 rounded-lg text-white/30 transition hover:bg-red-400/10 hover:text-red-300"
        data-index="${index}"
        title="${text("Usuń", "Remove")}"
      >
        <i class="fad fa-xmark"></i>
      </button>
    `;

    const image = row.querySelector(".batch-thumb");
    const imageUrl = URL.createObjectURL(file);

    image.src = imageUrl;

    image.addEventListener("load", () => URL.revokeObjectURL(imageUrl), {
      once: true,
    });

    batchList.appendChild(row);
  });

  batchList.querySelectorAll(".batch-remove").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.index);

      batchFiles.splice(index, 1);

      invalidateBatchResults();
      renderBatchList();
    });
  });
}

/* =========================================================
   BATCH OPTIMIZATION
   ========================================================= */

batchOptimize?.addEventListener("click", async () => {
  if (!batchFiles.length) {
    return;
  }

  batchOptimize.disabled = true;
  batchDownload.classList.add("hidden");
  batchProgress.classList.remove("hidden");
  batchProgressBar.style.width = "0%";
  batchStatus.textContent = `${text("Optymalizowanie", "Optimizing")} 0 / ${batchFiles.length}`;

  batchResults = [];
  batchZipBlob = null;

  for (let i = 0; i < batchFiles.length; i++) {
    const file = batchFiles[i];

    const status = batchList.querySelector(
      `.batch-file-status[data-index="${i}"]`,
    );

    if (status) {
      status.textContent = text("Przetwarzanie...", "Processing...");
      status.className = "batch-file-status mt-1 text-xs text-blue-300";
    }

    try {
      const blob = await encodeImage(file, {
        formatValue: batchFormat.value,
        qualityValue: Number(batchQuality.value),
        resize: batchResizeEnabled.checked,
        width: batchWidthInput.value,
        height: batchHeightInput.value,
      });

      batchResults.push({
        file,
        blob,
        name: getOutputName(file.name, batchFormat.value),
      });

      if (status) {
        status.textContent = `${text("Gotowe", "Done")} · ${formatBytes(blob.size)}`;
        status.className = "batch-file-status mt-1 text-xs text-emerald-300";
      }
    } catch (error) {
      console.error(
        `${text("Błąd optymalizacji", "Optimization error")} ${file.name}:`,
        error,
      );

      if (status) {
        status.textContent = text("Błąd", "Error");
        status.className = "batch-file-status mt-1 text-xs text-red-300";
      }
    }

    const progress = ((i + 1) / batchFiles.length) * 100;

    batchProgressBar.style.width = `${progress}%`;
    batchStatus.textContent = `${text("Optymalizowanie", "Optimizing")} ${i + 1} / ${batchFiles.length}`;
  }

  if (!batchResults.length) {
    batchStatus.textContent = text(
      "Nie udało się zoptymalizować plików.",
      "The files could not be optimized.",
    );

    batchOptimize.disabled = false;

    return;
  }

  batchStatus.textContent = `${text("Gotowe", "Done")} · ${batchResults.length} / ${batchFiles.length}`;

  await createBatchZip();

  batchOptimize.disabled = false;
});

/* =========================================================
   BATCH ZIP
   ========================================================= */

async function createBatchZip() {
  const zip = new JSZip();

  for (const result of batchResults) {
    zip.file(result.name, result.blob);
  }

  batchStatus.textContent = text("Tworzenie ZIP...", "Creating ZIP...");

  batchZipBlob = await zip.generateAsync({
    type: "blob",
    compression: "DEFLATE",
    compressionOptions: {
      level: 6,
    },
  });

  batchStatus.textContent = `${text("Gotowe", "Done")} · ${batchResults.length} ${text("plików", "files")}`;

  batchDownload.classList.remove("hidden");
}

function getBatchZipName() {
  const now = new Date();
  const pad = (value) => String(value).padStart(2, "0");

  const date =
    `${pad(now.getDate())}.` +
    `${pad(now.getMonth() + 1)}.` +
    `${now.getFullYear()}`;

  const time = `${pad(now.getHours())}.` + `${pad(now.getMinutes())}`;

  const selectedFormat = batchFormat.value.toUpperCase();

  const formatPart =
    batchFormat.value === "png"
      ? selectedFormat
      : `${selectedFormat}${batchQuality.value}`;

  return `OptiMAR-${batchFiles.length}-${formatPart}-${date}-${time}.zip`;
}

/* =========================================================
   BATCH DOWNLOAD
   ========================================================= */

batchDownload?.addEventListener("click", () => {
  if (!batchZipBlob) {
    return;
  }

  const url = URL.createObjectURL(batchZipBlob);
  const link = document.createElement("a");

  link.href = url;
  link.download = getBatchZipName();

  document.body.appendChild(link);
  link.click();
  link.remove();

  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 1000);
});

/* =========================================================
   BATCH FORMAT DROPDOWN
   ========================================================= */

setupDropdown(batchFormatOptions);

function openBatchFormatSelect() {
  if (!batchFormatTrigger || !batchFormatOptions || batchFormatSelectOpen) {
    return;
  }

  batchFormatSelectOpen = true;

  setupDropdown(batchFormatOptions);
  prepareDropdown(batchFormatOptions);
  positionDropdown(batchFormatTrigger, batchFormatOptions);

  void batchFormatOptions.offsetHeight;

  batchFormatOptions.classList.remove("invisible", "pointer-events-none");

  batchFormatTrigger.setAttribute("aria-expanded", "true");
  batchFormatChevron?.classList.add("rotate-180");

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (!batchFormatSelectOpen) {
        return;
      }

      batchFormatOptions.classList.remove("opacity-0", "scale-95");

      batchFormatOptions.classList.add("opacity-100", "scale-100");
    });
  });
}

function closeBatchFormatSelect() {
  if (!batchFormatOptions || !batchFormatTrigger) {
    return;
  }

  if (!batchFormatSelectOpen) {
    prepareDropdown(batchFormatOptions);

    batchFormatTrigger.setAttribute("aria-expanded", "false");
    batchFormatChevron?.classList.remove("rotate-180");

    return;
  }

  batchFormatSelectOpen = false;

  batchFormatOptions.classList.remove("opacity-100", "scale-100");

  batchFormatOptions.classList.add("opacity-0", "scale-95");

  batchFormatTrigger.setAttribute("aria-expanded", "false");
  batchFormatChevron?.classList.remove("rotate-180");

  window.setTimeout(() => {
    if (!batchFormatSelectOpen) {
      batchFormatOptions.classList.add("pointer-events-none", "invisible");
    }
  }, 200);
}

function updateBatchFormatSelect() {
  if (
    !batchFormat ||
    !batchFormatOptions ||
    !batchFormatLabel ||
    !batchFormatDot
  ) {
    return;
  }

  const value = batchFormat.value;

  const selectedOption = batchFormatOptions.querySelector(
    `[data-value="${value}"]`,
  );

  if (!selectedOption) {
    return;
  }

  const label = selectedOption.querySelector("span.flex span:last-child");

  batchFormatLabel.textContent =
    label?.textContent?.trim() || value.toUpperCase();

  const colors = batchFormatColors[value];

  if (!colors) {
    return;
  }

  batchFormatDot.className = `
    h-2
    w-2
    rounded-full
    ${colors.dot}
    ${colors.shadow}
    transition-all
    duration-300
  `;

  batchFormatLabel.className = `
    transition-colors
    duration-300
    ${colors.text}
  `;

  batchFormatOptionElements.forEach((option) => {
    const selected = option.dataset.value === value;
    const check = option.querySelector(".batch-format-check");

    option.setAttribute("aria-selected", String(selected));

    check?.classList.toggle("opacity-100", selected);
    check?.classList.toggle("opacity-0", !selected);

    option.classList.toggle("bg-white/[0.07]", selected);
    option.classList.toggle("text-white", selected);
    option.classList.toggle("text-white/65", !selected);
  });
}

batchFormatTrigger?.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();

  if (batchFormatSelectOpen) {
    closeBatchFormatSelect();
  } else {
    openBatchFormatSelect();
  }
});

batchFormatOptionElements.forEach((option) => {
  option.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();

    const value = option.dataset.value;

    if (!value) {
      return;
    }

    batchFormat.value = value;

    batchFormat.dispatchEvent(
      new Event("change", {
        bubbles: true,
      }),
    );

    updateBatchFormatSelect();
    closeBatchFormatSelect();
  });
});

batchFormatTrigger?.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();

    closeBatchFormatSelect();
    batchFormatTrigger.focus();

    return;
  }

  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();

    if (batchFormatSelectOpen) {
      closeBatchFormatSelect();
    } else {
      openBatchFormatSelect();
    }
  }
});

/* =========================================================
   BATCH SETTINGS
   ========================================================= */

batchFormat?.addEventListener("change", () => {
  updateBatchFormatSelect();
  updateBatchQualityVisibility();

  invalidateBatchResults();
  resetBatchStatuses();
});

batchQuality?.addEventListener("input", () => {
  batchQualityValue.textContent = `${batchQuality.value}%`;

  invalidateBatchResults();
});

batchResizeEnabled?.addEventListener("change", async () => {
  batchResizeOptions.classList.toggle("hidden", !batchResizeEnabled.checked);

  if (
    batchResizeEnabled.checked &&
    batchFiles.length &&
    !batchWidthInput.value &&
    !batchHeightInput.value
  ) {
    await updateBatchDimensionsFromFirstImage();
  }

  invalidateBatchResults();
});

batchKeepRatio?.addEventListener("change", () => {
  if (batchKeepRatio.checked && batchWidthInput.value) {
    updateBatchHeightFromWidth();
  }

  invalidateBatchResults();
});

batchWidthInput?.addEventListener("input", () => {
  if (batchKeepRatio.checked) {
    updateBatchHeightFromWidth();
  }

  invalidateBatchResults();
});

batchHeightInput?.addEventListener("input", () => {
  if (batchKeepRatio.checked) {
    updateBatchWidthFromHeight();
  }

  invalidateBatchResults();
});

function updateBatchQualityVisibility() {
  const isPng = batchFormat.value === "png";

  batchQualityWrapper?.classList.toggle("hidden", isPng);
}

function resetBatchStatuses() {
  batchList?.querySelectorAll(".batch-file-status").forEach((status) => {
    status.textContent = "Oczekuje";
    status.className = "batch-file-status mt-1 text-xs text-white/25";
  });

  if (batchFiles.length) {
    batchOptimize.disabled = false;
  }
}

async function updateBatchDimensionsFromFirstImage() {
  const file = batchFiles[0];

  if (!file) {
    return;
  }

  try {
    const bitmap = await createImageBitmap(file);

    batchWidthInput.value = bitmap.width;
    batchHeightInput.value = bitmap.height;

    bitmap.close();
  } catch (error) {
    console.error("Nie udało się pobrać wymiarów obrazu:", error);
  }
}

async function updateBatchHeightFromWidth() {
  const file = batchFiles[0];

  if (!file || !batchKeepRatio.checked) {
    return;
  }

  const width = Number(batchWidthInput.value);

  if (!width || width < 1) {
    return;
  }

  try {
    const bitmap = await createImageBitmap(file);

    batchHeightInput.value = Math.round(width * (bitmap.height / bitmap.width));

    bitmap.close();
  } catch (error) {
    console.error(error);
  }
}

async function updateBatchWidthFromHeight() {
  const file = batchFiles[0];

  if (!file || !batchKeepRatio.checked) {
    return;
  }

  const height = Number(batchHeightInput.value);

  if (!height || height < 1) {
    return;
  }

  try {
    const bitmap = await createImageBitmap(file);

    batchWidthInput.value = Math.round(height * (bitmap.width / bitmap.height));

    bitmap.close();
  } catch (error) {
    console.error(error);
  }
}

/* =========================================================
   DROPDOWN EVENTS
   ========================================================= */

document.addEventListener("click", (event) => {
  const target = event.target;

  if (
    formatTrigger &&
    formatOptions &&
    !formatTrigger.contains(target) &&
    !formatOptions.contains(target)
  ) {
    closeFormatSelect();
  }

  if (
    batchFormatTrigger &&
    batchFormatOptions &&
    !batchFormatTrigger.contains(target) &&
    !batchFormatOptions.contains(target)
  ) {
    closeBatchFormatSelect();
  }
});

window.addEventListener("resize", () => {
  if (formatSelectOpen) {
    positionDropdown(formatTrigger, formatOptions);
  }

  if (batchFormatSelectOpen) {
    positionDropdown(batchFormatTrigger, batchFormatOptions);
  }
});

window.addEventListener(
  "scroll",
  () => {
    if (formatSelectOpen) {
      positionDropdown(formatTrigger, formatOptions);
    }

    if (batchFormatSelectOpen) {
      positionDropdown(batchFormatTrigger, batchFormatOptions);
    }
  },
  true,
);

/* =========================================================
   INITIAL STATE
   ========================================================= */

updateQualityVisibility();
updateFormatSelect();

updateBatchFormatSelect();
updateBatchQualityVisibility();

if (batchQualityValue && batchQuality) {
  batchQualityValue.textContent = `${batchQuality.value}%`;
}

setMode("single");
renderBatchList();
