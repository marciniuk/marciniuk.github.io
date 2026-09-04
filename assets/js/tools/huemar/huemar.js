/* =========================================================
   Color MARbox
   ========================================================= */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

/* =========================================================
   Elements
   ========================================================= */

const picker = $("#color-marbox-picker");
const pickerPreview = $("#color-marbox-picker-preview");

const preview = $("#color-marbox-preview");
const previewHex = $("#color-marbox-preview-hex");

const currentColor = $("#color-marbox-current");
const currentValue = $("#color-marbox-current-value");

const hexInput = $("#color-marbox-hex");
const rgbInput = $("#color-marbox-rgb");
const hslInput = $("#color-marbox-hsl");
const hsvInput = $("#color-marbox-hsv");
const oklchInput = $("#color-marbox-oklch");

const alphaInput = $("#color-marbox-alpha");
const alphaValue = $("#color-marbox-alpha-value");

const foregroundPicker = $("#color-marbox-foreground");

const foregroundPreview = $("#color-marbox-foreground-preview");

const foregroundHex = $("#color-marbox-foreground-hex");

const backgroundPicker = $("#color-marbox-background");

const backgroundPreview = $("#color-marbox-background-preview");

const backgroundHex = $("#color-marbox-background-hex");

const swapButton = $("#color-marbox-swap");

const contrastPreview = $("#color-marbox-contrast-preview");

const contrastPreviewText = $("#color-marbox-contrast-preview-text");

const contrastPreviewSmall = $("#color-marbox-contrast-preview-small");

const contrastNormalRatio = $("#color-marbox-contrast-normal-ratio");

const contrastLargeRatio = $("#color-marbox-contrast-large-ratio");

const contrastNormalStatus = $("#color-marbox-contrast-normal-status");

const contrastLargeStatus = $("#color-marbox-contrast-large-status");

const eyedropperButton = $("#color-marbox-eyedropper");

const randomButton = $("#color-marbox-random");

const palette = $("#color-marbox-palette");

const cssOutput = $("#color-marbox-css");

const copyCssButton = $("#color-marbox-copy-css");

/* =========================================================
   State
   ========================================================= */

let color = {
  r: 56,
  g: 189,
  b: 248,
  a: 1,
};

let foreground = {
  r: 56,
  g: 189,
  b: 248,
};

let background = {
  r: 255,
  g: 255,
  b: 255,
};

/* =========================================================
   Helpers
   ========================================================= */

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function round(value, decimals = 2) {
  const factor = 10 ** decimals;

  return Math.round(value * factor) / factor;
}

function componentToHex(value) {
  return Math.round(value).toString(16).padStart(2, "0");
}

function rgbToHex(r, g, b) {
  return (
    `#${componentToHex(r)}` +
    `${componentToHex(g)}` +
    `${componentToHex(b)}`
  ).toUpperCase();
}

function alphaToHex(alpha) {
  return Math.round(clamp(alpha, 0, 1) * 255)
    .toString(16)
    .padStart(2, "0")
    .toUpperCase();
}

function rgbToHexAlpha(rgb) {
  return rgbToHex(rgb.r, rgb.g, rgb.b) + alphaToHex(rgb.a ?? 1);
}

/* =========================================================
   HEX
   ========================================================= */

function hexToRgb(hex) {
  if (!hex) {
    return null;
  }

  let value = hex.trim().replace(/^#/, "");

  if (value.length === 3 || value.length === 4) {
    value = value
      .split("")
      .map((char) => char + char)
      .join("");
  }

  if (value.length !== 6 && value.length !== 8) {
    return null;
  }

  if (!/^[0-9a-f]+$/i.test(value)) {
    return null;
  }

  return {
    r: parseInt(value.slice(0, 2), 16),

    g: parseInt(value.slice(2, 4), 16),

    b: parseInt(value.slice(4, 6), 16),

    a: value.length === 8 ? parseInt(value.slice(6, 8), 16) / 255 : 1,
  };
}

/* =========================================================
   RGB / HSL
   ========================================================= */

function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);

  const min = Math.min(r, g, b);

  let h = 0;
  let s = 0;

  const l = (max + min) / 2;

  const delta = max - min;

  if (delta !== 0) {
    s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);

    switch (max) {
      case r:
        h = (g - b) / delta + (g < b ? 6 : 0);
        break;

      case g:
        h = (b - r) / delta + 2;
        break;

      default:
        h = (r - g) / delta + 4;
        break;
    }

    h /= 6;
  }

  return {
    h: h * 360,
    s: s * 100,
    l: l * 100,
  };
}

function hslToRgb(h, s, l) {
  h /= 360;
  s /= 100;
  l /= 100;

  if (s === 0) {
    const value = Math.round(l * 255);

    return {
      r: value,
      g: value,
      b: value,
    };
  }

  const hueToRgb = (p, q, t) => {
    if (t < 0) {
      t += 1;
    }

    if (t > 1) {
      t -= 1;
    }

    if (t < 1 / 6) {
      return p + (q - p) * 6 * t;
    }

    if (t < 1 / 2) {
      return q;
    }

    if (t < 2 / 3) {
      return p + (q - p) * (2 / 3 - t) * 6;
    }

    return p;
  };

  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;

  const p = 2 * l - q;

  return {
    r: Math.round(hueToRgb(p, q, h + 1 / 3) * 255),

    g: Math.round(hueToRgb(p, q, h) * 255),

    b: Math.round(hueToRgb(p, q, h - 1 / 3) * 255),
  };
}

/* =========================================================
   HSV
   ========================================================= */

function rgbToHsv(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);

  const min = Math.min(r, g, b);

  const delta = max - min;

  let h = 0;

  if (delta !== 0) {
    if (max === r) {
      h = ((g - b) / delta) % 6;
    } else if (max === g) {
      h = (b - r) / delta + 2;
    } else {
      h = (r - g) / delta + 4;
    }

    h *= 60;

    if (h < 0) {
      h += 360;
    }
  }

  return {
    h,

    s: max === 0 ? 0 : (delta / max) * 100,

    v: max * 100,
  };
}

function hsvToRgb(h, s, v) {
  h = ((h % 360) + 360) % 360;
  s = clamp(s, 0, 100) / 100;
  v = clamp(v, 0, 100) / 100;

  const chroma = v * s;
  const sector = h / 60;
  const second = chroma * (1 - Math.abs((sector % 2) - 1));
  const match = v - chroma;
  let red = 0;
  let green = 0;
  let blue = 0;

  if (sector < 1) {
    red = chroma;
    green = second;
  } else if (sector < 2) {
    red = second;
    green = chroma;
  } else if (sector < 3) {
    green = chroma;
    blue = second;
  } else if (sector < 4) {
    green = second;
    blue = chroma;
  } else if (sector < 5) {
    red = second;
    blue = chroma;
  } else {
    red = chroma;
    blue = second;
  }

  return {
    r: Math.round((red + match) * 255),
    g: Math.round((green + match) * 255),
    b: Math.round((blue + match) * 255),
  };
}

/* =========================================================
   OKLab / OKLCH
   ========================================================= */

function srgbToLinear(value) {
  value /= 255;

  return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
}

function rgbToOklab(rgb) {
  const r = srgbToLinear(rgb.r);

  const g = srgbToLinear(rgb.g);

  const b = srgbToLinear(rgb.b);

  const l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b;

  const m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b;

  const s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b;

  const lRoot = Math.cbrt(l);

  const mRoot = Math.cbrt(m);

  const sRoot = Math.cbrt(s);

  return {
    L: 0.2104542553 * lRoot + 0.793617785 * mRoot - 0.0040720468 * sRoot,

    a: 1.9779984951 * lRoot - 2.428592205 * mRoot + 0.4505937099 * sRoot,

    b: 0.0259040371 * lRoot + 0.7827717662 * mRoot - 0.808675766 * sRoot,
  };
}

function oklabToOklch(lab) {
  const C = Math.sqrt(lab.a ** 2 + lab.b ** 2);

  let h = Math.atan2(lab.b, lab.a) * (180 / Math.PI);

  if (h < 0) {
    h += 360;
  }

  return {
    L: lab.L,
    C,
    h,
  };
}

function linearToSrgb(value) {
  return value <= 0.0031308
    ? value * 12.92
    : 1.055 * value ** (1 / 2.4) - 0.055;
}

function oklchToRgb(L, C, h) {
  const angle = (h * Math.PI) / 180;
  const a = C * Math.cos(angle);
  const b = C * Math.sin(angle);

  const lRoot = L + 0.3963377774 * a + 0.2158037573 * b;
  const mRoot = L - 0.1055613458 * a - 0.0638541728 * b;
  const sRoot = L - 0.0894841775 * a - 1.291485548 * b;

  const l = lRoot ** 3;
  const m = mRoot ** 3;
  const s = sRoot ** 3;

  return {
    r: Math.round(
      clamp(
        linearToSrgb(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s),
        0,
        1,
      ) * 255,
    ),
    g: Math.round(
      clamp(
        linearToSrgb(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s),
        0,
        1,
      ) * 255,
    ),
    b: Math.round(
      clamp(
        linearToSrgb(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s),
        0,
        1,
      ) * 255,
    ),
  };
}

/* =========================================================
   Parsing
   ========================================================= */

function parseRgb(value) {
  if (!value) {
    return null;
  }

  const match = value.match(
    /rgba?\(\s*([\d.]+)\s*[, ]\s*([\d.]+)\s*[, ]\s*([\d.]+)(?:\s*[,/]\s*([\d.]+%?))?\s*\)/i,
  );

  if (!match) {
    return null;
  }

  let alpha = color.a;

  if (match[4] !== undefined) {
    alpha = match[4].endsWith("%")
      ? Number(match[4].replace("%", "")) / 100
      : Number(match[4]);
  }

  return {
    r: clamp(Number(match[1]), 0, 255),

    g: clamp(Number(match[2]), 0, 255),

    b: clamp(Number(match[3]), 0, 255),

    a: clamp(alpha, 0, 1),
  };
}

function parseHsl(value) {
  if (!value) {
    return null;
  }

  const match = value.match(
    /hsla?\(\s*([\d.]+)\s*[, ]\s*([\d.]+)%\s*[, ]\s*([\d.]+)%(?:\s*[,/]\s*([\d.]+%?))?\s*\)/i,
  );

  if (!match) {
    return null;
  }

  let alpha = color.a;

  if (match[4] !== undefined) {
    alpha = match[4].endsWith("%")
      ? Number(match[4].replace("%", "")) / 100
      : Number(match[4]);
  }

  const rgb = hslToRgb(Number(match[1]), Number(match[2]), Number(match[3]));

  return {
    ...rgb,
    a: clamp(alpha, 0, 1),
  };
}

function parseHsv(value) {
  if (!value) {
    return null;
  }

  const match = value.match(
    /hsva?\(\s*([\d.+-]+)\s*[, ]\s*([\d.+-]+)%\s*[, ]\s*([\d.+-]+)%(?:\s*[,/]\s*([\d.+-]+%?))?\s*\)/i,
  );

  if (!match) {
    return null;
  }

  const alpha =
    match[4] === undefined
      ? color.a
      : match[4].endsWith("%")
        ? Number(match[4].replace("%", "")) / 100
        : Number(match[4]);

  return {
    ...hsvToRgb(Number(match[1]), Number(match[2]), Number(match[3])),
    a: clamp(alpha, 0, 1),
  };
}

function parseOklch(value) {
  if (!value) {
    return null;
  }

  const match = value.match(
    /oklch\(\s*([\d.+-]+)\s+([\d.+-]+)\s+([\d.+-]+)(?:\s*\/\s*([\d.+-]+%?))?\s*\)/i,
  );

  if (!match) {
    return null;
  }

  const alpha =
    match[4] === undefined
      ? color.a
      : match[4].endsWith("%")
        ? Number(match[4].replace("%", "")) / 100
        : Number(match[4]);

  return {
    ...oklchToRgb(Number(match[1]), Number(match[2]), Number(match[3])),
    a: clamp(alpha, 0, 1),
  };
}

/* =========================================================
   Contrast
   ========================================================= */

function luminance(rgb) {
  const convert = (value) => {
    value /= 255;

    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  };

  return (
    0.2126 * convert(rgb.r) + 0.7152 * convert(rgb.g) + 0.0722 * convert(rgb.b)
  );
}

function contrastRatio(a, b) {
  const l1 = luminance(a);

  const l2 = luminance(b);

  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

function updateContrastStatus(element, ratio, required, aaa) {
  if (!element) {
    return;
  }

  element.className = "rounded-lg px-2.5 py-1.5 text-xs font-semibold";

  if (ratio >= aaa) {
    element.textContent = "AAA";

    element.classList.add("bg-emerald-400/10", "text-emerald-300");

    return;
  }

  if (ratio >= required) {
    element.textContent = "AA";

    element.classList.add("bg-amber-400/10", "text-amber-300");

    return;
  }

  element.textContent = "FAIL";

  element.classList.add("bg-rose-400/10", "text-rose-300");
}

function updateContrast() {
  if (!foregroundPicker || !backgroundPicker) {
    return;
  }

  const fgHex = rgbToHex(foreground.r, foreground.g, foreground.b);

  const bgHex = rgbToHex(background.r, background.g, background.b);

  /* -------------------------------------------------------
     Swatches
     ------------------------------------------------------- */

  foregroundPicker.value = fgHex;

  backgroundPicker.value = bgHex;

  foregroundHex.value = fgHex;

  backgroundHex.value = bgHex;

  foregroundPreview.style.backgroundColor = fgHex;

  backgroundPreview.style.backgroundColor = bgHex;

  /* -------------------------------------------------------
     Ratio
     ------------------------------------------------------- */

  const ratio = contrastRatio(foreground, background);

  const ratioText = `${ratio.toFixed(2)}:1`;

  contrastNormalRatio.textContent = ratioText;

  contrastLargeRatio.textContent = ratioText;

  /* -------------------------------------------------------
     Preview
     ------------------------------------------------------- */

  contrastPreview.style.backgroundColor = bgHex;

  contrastPreviewText.style.color = fgHex;

  contrastPreviewSmall.style.color = fgHex;

  /* -------------------------------------------------------
     WCAG
     ------------------------------------------------------- */

  updateContrastStatus(contrastNormalStatus, ratio, 4.5, 7);

  updateContrastStatus(contrastLargeStatus, ratio, 3, 4.5);
}

/* =========================================================
   Palette
   ========================================================= */

function shiftHue(h, amount) {
  return (h + amount + 360) % 360;
}

function createPaletteColor(label, rgb) {
  const hex = rgbToHex(rgb.r, rgb.g, rgb.b);

  const button = document.createElement("button");

  button.type = "button";

  button.className =
    "group overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.025] text-left transition duration-200 hover:-translate-y-0.5 hover:border-white/[0.16] hover:bg-white/[0.04]";

  button.innerHTML = `
    <div
      class="h-16 transition duration-200 group-hover:scale-[1.02]"
      style="background:${hex}"
    ></div>

    <div class="p-2.5">
      <div
        class="text-[9px] font-semibold uppercase tracking-wider text-zinc-600"
      >
        ${label}
      </div>

      <div
        class="mt-1 font-mono text-[11px] text-zinc-400"
      >
        ${hex}
      </div>
    </div>
  `;

  button.addEventListener("click", () => {
    setColor({
      ...rgb,
      a: color.a,
    });
  });

  return button;
}

function updatePalette() {
  if (!palette) {
    return;
  }

  palette.innerHTML = "";

  const hsl = rgbToHsl(color.r, color.g, color.b);

  const colors = [
    ["Base", color],

    ["Light", hslToRgb(hsl.h, hsl.s, Math.min(hsl.l + 18, 96))],

    ["Dark", hslToRgb(hsl.h, hsl.s, Math.max(hsl.l - 18, 8))],

    ["Complement", hslToRgb(shiftHue(hsl.h, 180), hsl.s, hsl.l)],

    ["Analogous", hslToRgb(shiftHue(hsl.h, 30), hsl.s, hsl.l)],

    ["Analogous", hslToRgb(shiftHue(hsl.h, -30), hsl.s, hsl.l)],

    ["Triadic", hslToRgb(shiftHue(hsl.h, 120), hsl.s, hsl.l)],

    ["Triadic", hslToRgb(shiftHue(hsl.h, 240), hsl.s, hsl.l)],
  ];

  colors.forEach(([label, rgb]) => {
    palette.appendChild(createPaletteColor(label, rgb));
  });
}

/* =========================================================
   CSS output
   ========================================================= */

function updateCSS() {
  if (!cssOutput) {
    return;
  }

  const hex = rgbToHex(color.r, color.g, color.b);

  const hsl = rgbToHsl(color.r, color.g, color.b);

  const lighter = hslToRgb(hsl.h, hsl.s, Math.min(hsl.l + 15, 100));

  const darker = hslToRgb(hsl.h, hsl.s, Math.max(hsl.l - 15, 0));

  cssOutput.textContent = `:root {
  --color-primary: ${hex};
  --color-primary-rgb: ${color.r}, ${color.g}, ${color.b};
  --color-primary-hsl: ${round(hsl.h, 1)}, ${round(hsl.s, 1)}%, ${round(hsl.l, 1)}%;
  --color-primary-alpha: ${round(color.a, 2)};
  --color-primary-light: ${rgbToHex(lighter.r, lighter.g, lighter.b)};
  --color-primary-dark: ${rgbToHex(darker.r, darker.g, darker.b)};
}`;
}

/* =========================================================
   Inputs
   ========================================================= */

function updateInputs() {
  const hex = rgbToHex(color.r, color.g, color.b);

  const hsl = rgbToHsl(color.r, color.g, color.b);

  const hsv = rgbToHsv(color.r, color.g, color.b);

  const lab = rgbToOklab(color);

  const oklch = oklabToOklch(lab);

  hexInput.value = color.a < 1 ? rgbToHexAlpha(color) : hex;

  rgbInput.value =
    color.a < 1
      ? `rgba(${color.r}, ${color.g}, ${color.b}, ${round(color.a, 2)})`
      : `rgb(${color.r}, ${color.g}, ${color.b})`;

  hslInput.value =
    color.a < 1
      ? `hsla(${round(hsl.h, 1)}, ${round(hsl.s, 1)}%, ${round(hsl.l, 1)}%, ${round(color.a, 2)})`
      : `hsl(${round(hsl.h, 1)}, ${round(hsl.s, 1)}%, ${round(hsl.l, 1)}%)`;

  hsvInput.value = `hsv(${round(hsv.h, 1)}, ${round(hsv.s, 1)}%, ${round(hsv.v, 1)}%)`;

  oklchInput.value = `oklch(${round(oklch.L, 4)} ${round(oklch.C, 4)} ${round(oklch.h, 1)}${color.a < 1 ? ` / ${round(color.a, 2)}` : ""})`;

  alphaInput.value = color.a;

  alphaValue.textContent = `${Math.round(color.a * 100)}%`;
}

/* =========================================================
   Preview
   ========================================================= */

function updatePreview() {
  const hex = rgbToHex(color.r, color.g, color.b);

  const rgba = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;

  picker.value = hex;

  pickerPreview.style.backgroundColor = rgba;

  preview.style.backgroundColor = rgba;

  currentColor.style.backgroundColor = rgba;

  previewHex.textContent = color.a < 1 ? rgbToHexAlpha(color) : hex;

  currentValue.textContent = color.a < 1 ? rgbToHexAlpha(color) : hex;
}

/* =========================================================
   Global update
   ========================================================= */

function update() {
  updateInputs();
  updatePreview();
  updateContrast();
  updatePalette();
  updateCSS();
}

/* =========================================================
   Set main color
   ========================================================= */

function setColor(rgb) {
  if (!rgb) {
    return;
  }

  color = {
    r: Math.round(clamp(rgb.r, 0, 255)),

    g: Math.round(clamp(rgb.g, 0, 255)),

    b: Math.round(clamp(rgb.b, 0, 255)),

    a: clamp(rgb.a ?? color.a, 0, 1),
  };

  /*
   * Main color is the default foreground.
   *
   * This is the important synchronization:
   * changing the main color immediately changes
   * the foreground used by the contrast checker.
   */

  foreground = {
    r: color.r,
    g: color.g,
    b: color.b,
  };

  update();
}

/* =========================================================
   Main color inputs
   ========================================================= */

hexInput?.addEventListener("input", () => {
  const rgb = hexToRgb(hexInput.value);

  if (rgb) {
    setColor(rgb);
  }
});

hexInput?.addEventListener("blur", () => {
  updateInputs();
});

rgbInput?.addEventListener("change", () => {
  const rgb = parseRgb(rgbInput.value);

  if (rgb) {
    setColor(rgb);
  } else {
    updateInputs();
  }
});

hslInput?.addEventListener("change", () => {
  const rgb = parseHsl(hslInput.value);

  if (rgb) {
    setColor(rgb);
  } else {
    updateInputs();
  }
});

hsvInput?.addEventListener("change", () => {
  const rgb = parseHsv(hsvInput.value);

  if (rgb) {
    setColor(rgb);
  } else {
    updateInputs();
  }
});

oklchInput?.addEventListener("change", () => {
  const rgb = parseOklch(oklchInput.value);

  if (rgb) {
    setColor(rgb);
  } else {
    updateInputs();
  }
});

/* =========================================================
   Picker
   ========================================================= */

picker?.addEventListener("input", () => {
  const rgb = hexToRgb(picker.value);

  if (rgb) {
    setColor({
      ...rgb,
      a: color.a,
    });
  }
});

/* =========================================================
   Alpha
   ========================================================= */

alphaInput?.addEventListener("input", () => {
  color.a = clamp(Number(alphaInput.value), 0, 1);

  update();
});

/* =========================================================
   Foreground picker
   ========================================================= */

foregroundPicker?.addEventListener("input", () => {
  const rgb = hexToRgb(foregroundPicker.value);

  if (!rgb) {
    return;
  }

  foreground = {
    r: rgb.r,
    g: rgb.g,
    b: rgb.b,
  };

  updateContrast();
});

/* =========================================================
   Background picker
   ========================================================= */

backgroundPicker?.addEventListener("input", () => {
  const rgb = hexToRgb(backgroundPicker.value);

  if (!rgb) {
    return;
  }

  background = {
    r: rgb.r,
    g: rgb.g,
    b: rgb.b,
  };

  updateContrast();
});

/* =========================================================
   Foreground HEX
   ========================================================= */

foregroundHex?.addEventListener("change", () => {
  const rgb = hexToRgb(foregroundHex.value);

  if (!rgb) {
    updateContrast();
    return;
  }

  foreground = {
    r: rgb.r,
    g: rgb.g,
    b: rgb.b,
  };

  updateContrast();
});

/* =========================================================
   Background HEX
   ========================================================= */

backgroundHex?.addEventListener("change", () => {
  const rgb = hexToRgb(backgroundHex.value);

  if (!rgb) {
    updateContrast();
    return;
  }

  background = {
    r: rgb.r,
    g: rgb.g,
    b: rgb.b,
  };

  updateContrast();
});

/* =========================================================
   Swap FG / BG
   ========================================================= */

swapButton?.addEventListener("click", () => {
  const temp = foreground;

  foreground = background;

  background = temp;

  updateContrast();
});

/* =========================================================
   Eyedropper
   ========================================================= */

eyedropperButton?.addEventListener("click", async () => {
  if (!("EyeDropper" in window)) {
    alert("Twoja przeglądarka nie obsługuje pobierania koloru z ekranu.");

    return;
  }

  try {
    const eyeDropper = new EyeDropper();

    const result = await eyeDropper.open();

    const rgb = hexToRgb(result.sRGBHex);

    if (rgb) {
      setColor(rgb);
    }
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error);
    }
  }
});

/* =========================================================
   Random
   ========================================================= */

randomButton?.addEventListener("click", () => {
  setColor({
    r: Math.floor(Math.random() * 256),

    g: Math.floor(Math.random() * 256),

    b: Math.floor(Math.random() * 256),

    a: color.a,
  });
});

/* =========================================================
   Copy
   ========================================================= */

const copyValues = {
  hex: () =>
    color.a < 1 ? rgbToHexAlpha(color) : rgbToHex(color.r, color.g, color.b),

  rgb: () =>
    color.a < 1
      ? `rgba(${color.r}, ${color.g}, ${color.b}, ${round(color.a, 2)})`
      : `rgb(${color.r}, ${color.g}, ${color.b})`,

  hsl: () => {
    const hsl = rgbToHsl(color.r, color.g, color.b);

    return color.a < 1
      ? `hsla(${round(hsl.h, 1)}, ${round(hsl.s, 1)}%, ${round(hsl.l, 1)}%, ${round(color.a, 2)})`
      : `hsl(${round(hsl.h, 1)}, ${round(hsl.s, 1)}%, ${round(hsl.l, 1)}%)`;
  },

  hsv: () => {
    const hsv = rgbToHsv(color.r, color.g, color.b);

    return `hsv(${round(hsv.h, 1)}, ${round(hsv.s, 1)}%, ${round(hsv.v, 1)}%)`;
  },

  oklch: () => {
    const lab = rgbToOklab(color);

    const oklch = oklabToOklch(lab);

    return `oklch(${round(oklch.L, 4)} ${round(oklch.C, 4)} ${round(oklch.h, 1)}${color.a < 1 ? ` / ${round(color.a, 2)}` : ""})`;
  },
};

/* =========================================================
   Copy buttons
   ========================================================= */

/* =========================================================
   Copy buttons
   ========================================================= */

$$("[data-copy]").forEach((button) => {
  /*
   * Font Awesome has already replaced <i> with <svg>.
   * Save the generated SVG before changing anything.
   */
  const originalContent = button.innerHTML;

  const checkIcon = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6"></path>
    </svg>
  `;

  button.addEventListener("click", async () => {
    const value = copyValues[button.dataset.copy]?.();

    if (!value) {
      return;
    }

    try {
      await navigator.clipboard.writeText(value);

      /*
       * Prevent multiple timers from being created
       * when the button is clicked repeatedly.
       */
      if (button.dataset.copied === "true") {
        return;
      }

      button.dataset.copied = "true";

      /* ---------------------------------------------------
         Success icon
         --------------------------------------------------- */

      button.innerHTML = checkIcon;

      /* ---------------------------------------------------
         Success styling
         --------------------------------------------------- */

      button.classList.remove(
        "text-white/25",
        "hover:border-blue-400/20",
        "hover:bg-blue-400/[0.08]",
        "hover:text-blue-300",
      );

      button.classList.add(
        "border-emerald-400/20",
        "bg-emerald-400/[0.08]",
        "text-emerald-300",
      );

      /* ---------------------------------------------------
         Restore original Font Awesome icon
         --------------------------------------------------- */

      setTimeout(() => {
        button.innerHTML = originalContent;

        button.classList.remove(
          "border-emerald-400/20",
          "bg-emerald-400/[0.08]",
          "text-emerald-300",
        );

        button.classList.add(
          "text-white/25",
          "hover:border-blue-400/20",
          "hover:bg-blue-400/[0.08]",
          "hover:text-blue-300",
        );

        button.dataset.copied = "false";
      }, 2000);
    } catch (error) {
      console.error("Nie udało się skopiować wartości:", error);
    }
  });
});

/* =========================================================
   Copy CSS
   ========================================================= */

copyCssButton?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(cssOutput.textContent);

    const original = copyCssButton.textContent;

    copyCssButton.textContent = "Skopiowano";

    setTimeout(() => {
      copyCssButton.textContent = original;
    }, 1200);
  } catch (error) {
    console.error(error);
  }
});

/* =========================================================
   Init
   ========================================================= */

update();
