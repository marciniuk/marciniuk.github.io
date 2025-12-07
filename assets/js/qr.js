document.querySelectorAll('[data-dropdown="merge"]').forEach((drop) => {
  const btn = drop.querySelector(".dropdown-btn");
  const list = drop.querySelector(".dropdown-list");
  const label = drop.querySelector(".dropdown-label");
  const icon = drop.querySelector(".dropdown-icon");

  // Toggle list
  btn.addEventListener("click", () => {
    const open = list.classList.contains("open");

    // Zamknij wszystkie inne dropdowny
    document.querySelectorAll(".dropdown-list.open").forEach((l) => {
      l.classList.remove("open");
      l.style.opacity = "0";
      l.style.pointerEvents = "none";
      const otherIcon = l.parentElement.querySelector(".dropdown-icon");
      if (otherIcon) otherIcon.classList.remove("rotate-180");
    });

    if (!open) {
      list.classList.add("open");
      list.style.opacity = "1";
      list.style.pointerEvents = "auto";
      icon.classList.add("rotate-180"); // <-- OBRÓĆ
    } else {
      list.classList.remove("open");
      list.style.opacity = "0";
      list.style.pointerEvents = "none";
      icon.classList.remove("rotate-180"); // <-- COFNIJ
    }
  });

  // Click item
  list.querySelectorAll(".dropdown-item").forEach((item) => {
    item.addEventListener("click", () => {
      const value = item.dataset.value;
      const text = item.textContent;

      label.textContent = text;
      setMergeMode(value);

      list.classList.remove("open");
      list.style.opacity = "0";
      list.style.pointerEvents = "none";
    });
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!drop.contains(e.target)) {
      list.classList.remove("open");
      list.style.opacity = "0";
      list.style.pointerEvents = "none";
    }
  });
});

/* ===================
    QR CODE GENERATOR
   =================== */

/* ---------- GLOBALS ---------- */
// merge modes: "none" | "horizontal" | "vertical" | "full"
let qrMergeMode = "none";

/* ---------- UTIL: safe getters ---------- */
function getVal(id, fallback = "") {
  const el = document.getElementById(id);
  return el ? el.value : fallback;
}
function getInt(id, fallback = 0) {
  const v = parseInt(getVal(id, String(fallback)), 10);
  return Number.isNaN(v) ? fallback : v;
}
function getFloat(id, fallback = 0) {
  const v = parseFloat(getVal(id, String(fallback)));
  return Number.isNaN(v) ? fallback : v;
}

/* ---------- API: set merge mode ---------- */
function setMergeMode(v) {
  qrMergeMode = v;
  generateQR();
}

/* ---------- INIT & wiring ---------- */
document.addEventListener("DOMContentLoaded", () => {
  // merge selector wiring
  const sel = document.getElementById("qr-merge");
  if (sel) {
    sel.value = qrMergeMode;
    sel.addEventListener("change", () => setMergeMode(sel.value));
  }

  // roundness display initialization
  const initialPercent = getInt("qr-roundness", 35);
  const rd = document.getElementById("roundnessDisplay");
  if (rd) rd.innerText = initialPercent + "%";

  // ensure hidden fg/bg inputs exist and have defaults
  if (!document.getElementById("qr-fg")) {
    const i = document.createElement("input");
    i.type = "hidden";
    i.id = "qr-fg";
    i.value = "#ffffff";
    document.body.appendChild(i);
  }
  if (!document.getElementById("qr-bg")) {
    const i2 = document.createElement("input");
    i2.type = "hidden";
    i2.id = "qr-bg";
    i2.value = "transparent";
    document.body.appendChild(i2);
  }

  // color pickers wiring (if present)
  const fgPicker = document.getElementById("fgPicker");
  if (fgPicker) {
    fgPicker.value = getVal("qr-fg", "#ffffff");
    fgPicker.addEventListener("input", (e) => setFG(e.target.value));
  }
  const bgPicker = document.getElementById("bgPicker");
  if (bgPicker) {
    const bgVal = getVal("qr-bg", "transparent");
    if (bgVal !== "transparent") bgPicker.value = bgVal;
    bgPicker.addEventListener("input", (e) => setBG(e.target.value));
  }

  // finder style hidden input + buttons
  if (!document.getElementById("finder-style")) {
    const hid = document.createElement("input");
    hid.type = "hidden";
    hid.id = "finder-style";
    hid.value = "rounded";
    document.body.appendChild(hid);
  }
  const finderButtons = document.querySelectorAll(".finder-btn");
  finderButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const style = btn.dataset.style;
      document.getElementById("finder-style").value = style;
      finderButtons.forEach((b) => b.classList.remove("active-finder-btn"));
      btn.classList.add("active-finder-btn");
      generateQR();
    });
  });
  const defBtn = document.querySelector('.finder-btn[data-style="rounded"]');
  if (defBtn) defBtn.classList.add("active-finder-btn");

  // padding display init if present
  const padEl = document.getElementById("paddingDisplay");
  if (padEl) padEl.innerText = getFloat("qr-padding", 0).toFixed(1);

  // initial draw
  generateQR();
});

/* ---------- UI helpers: radius / padding / colors ---------- */
function changeRadius(delta) {
  let current = getInt("qr-roundness", 35);
  current = Math.min(100, Math.max(0, current + delta));
  const el = document.getElementById("qr-roundness");
  if (el) el.value = current;
  const rd = document.getElementById("roundnessDisplay");
  if (rd) rd.innerText = current + "%";
  generateQR();
}

function changePadding(delta) {
  let current = getFloat("qr-padding", 0);
  current = Math.max(0, Math.min(5, current + delta));
  const el = document.getElementById("qr-padding");
  if (el) el.value = current;
  const pd = document.getElementById("paddingDisplay");
  if (pd) pd.innerText = current.toFixed(1);
  generateQR();
}

function setFG(color) {
  const el = document.getElementById("qr-fg");
  if (el) el.value = color;
  const p = document.getElementById("fgPicker");
  if (p) p.value = color;
  generateQR();
}
function setBG(color) {
  const el = document.getElementById("qr-bg");
  if (el) el.value = color;
  const p = document.getElementById("bgPicker");
  if (p && color !== "transparent") p.value = color;
  generateQR();
}

/* ---------- FINDER helpers ---------- */
/* returns true if module at (x,y) (module coords) is inside a finder */
function isFinderZone(x, y, count) {
  const inTL = x <= 6 && y <= 6;
  const inTR = x >= count - 7 && y <= 6;
  const inBL = x <= 6 && y >= count - 7;
  return inTL || inTR || inBL;
}

/* ---------- CANVAS drawing helpers ---------- */
/* draw rounded rect with arcTo (fallback to rect when r <= 0) */
function drawRoundedRect(ctx, x, y, w, h, r) {
  if (r <= 0) {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.closePath();
    ctx.fill();
    return;
  }
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
  ctx.fill();
}

/* smart rect builder that can zero-out corner radius if neighbor touches */
function drawSmartRect(ctx, x, y, w, h, r, nb, nl, nt, nr) {
  // nb = neighborBottom, nl = neighborLeft, nt = neighborTop, nr = neighborRight
  const rTL = nt || nl ? 0 : r;
  const rTR = nt || nr ? 0 : r;
  const rBR = nb || nr ? 0 : r;
  const rBL = nb || nl ? 0 : r;

  ctx.beginPath();
  ctx.moveTo(x + rTL, y);

  ctx.lineTo(x + w - rTR, y);
  if (rTR > 0) ctx.quadraticCurveTo(x + w, y, x + w, y + rTR);

  ctx.lineTo(x + w, y + h - rBR);
  if (rBR > 0) ctx.quadraticCurveTo(x + w, y + h, x + w - rBR, y + h);

  ctx.lineTo(x + rBL, y + h);
  if (rBL > 0) ctx.quadraticCurveTo(x, y + h, x, y + h - rBL);

  ctx.lineTo(x, y + rTL);
  if (rTL > 0) ctx.quadraticCurveTo(x, y, x + rTL, y);

  ctx.closePath();
  ctx.fill();
}

/* draw finder (top-left style) — preserves original visuals:
   style: "rounded" | "circle" | others -> behaves like original */
function drawFinderCanvas(ctx, x, y, moduleSize, fgColor, bgColor, style) {
  const outer = moduleSize * 7;
  const middle = moduleSize * 5;
  const inner = moduleSize * 3;

  const m1 = (outer - middle) / 2;
  const m2 = (middle - inner) / 2;

  const rOuter = style === "rounded" ? outer * 0.23 : 0;
  const rMiddle = style === "rounded" ? middle * 0.23 : 0;
  const rInner = style === "rounded" ? inner * 0.23 : 0;

  ctx.fillStyle = fgColor;

  if (style === "circle") {
    const cx = x + outer / 2;
    const cy = y + outer / 2;
    ctx.beginPath();
    ctx.arc(cx, cy, outer / 2, 0, Math.PI * 2);
    ctx.fill();
  } else {
    drawRoundedRect(ctx, x, y, outer, outer, rOuter);
  }

  if (bgColor === "transparent") {
    // cut-out middle (destination-out) then draw inner fg
    ctx.save();
    ctx.globalCompositeOperation = "destination-out";
    if (style === "circle") {
      ctx.beginPath();
      ctx.arc(x + outer / 2, y + outer / 2, middle / 2, 0, Math.PI * 2);
      ctx.fill();
    } else {
      drawRoundedRect(ctx, x + m1, y + m1, middle, middle, rMiddle);
    }
    ctx.restore();

    ctx.fillStyle = fgColor;
    if (style === "circle") {
      ctx.beginPath();
      ctx.arc(x + outer / 2, y + outer / 2, inner / 2, 0, Math.PI * 2);
      ctx.fill();
    } else {
      drawRoundedRect(ctx, x + m1 + m2, y + m1 + m2, inner, inner, rInner);
    }
  } else {
    // draw middle with bgColor then inner with fgColor
    ctx.fillStyle = bgColor;
    if (style === "circle") {
      ctx.beginPath();
      ctx.arc(x + outer / 2, y + outer / 2, middle / 2, 0, Math.PI * 2);
      ctx.fill();
    } else {
      drawRoundedRect(ctx, x + m1, y + m1, middle, middle, rMiddle);
    }

    ctx.fillStyle = fgColor;
    if (style === "circle") {
      ctx.beginPath();
      ctx.arc(x + outer / 2, y + outer / 2, inner / 2, 0, Math.PI * 2);
      ctx.fill();
    } else {
      drawRoundedRect(ctx, x + m1 + m2, y + m1 + m2, inner, inner, rInner);
    }
  }
}

/* ---------- HELPERS for FULL MERGE (group detection + rect packing) ---------- */

/* flood-fill group starting from (r,c) returning array of [r,c] coords and marks visited */
function floodFillGroup(qr, r, c, count, visited) {
  const stack = [[r, c]];
  const group = [];
  visited[r][c] = true;

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];

  while (stack.length) {
    const [y, x] = stack.pop();
    group.push([y, x]);

    for (const [dy, dx] of dirs) {
      const ny = y + dy;
      const nx = x + dx;
      if (
        ny >= 0 &&
        ny < count &&
        nx >= 0 &&
        nx < count &&
        !visited[ny][nx] &&
        qr.isDark(ny, nx) &&
        !isFinderZone(nx, ny, count)
      ) {
        visited[ny][nx] = true;
        stack.push([ny, nx]);
      }
    }
  }

  return group;
}

/* from group (cells coords) build greedy maximal rectangles (in module coords) */
function groupToRects(group, count) {
  const map = Array.from({ length: count }, () => Array(count).fill(false));
  for (const [r, c] of group) map[r][c] = true;
  const covered = Array.from({ length: count }, () => Array(count).fill(false));
  const rects = [];

  for (let r = 0; r < count; r++) {
    for (let c = 0; c < count; c++) {
      if (!map[r][c] || covered[r][c]) continue;

      // max width on this row
      let w = 1;
      while (c + w < count && map[r][c + w] && !covered[r][c + w]) w++;

      // expand height while every row below has same contiguous run
      let h = 1;
      outer: while (r + h < count) {
        for (let cc = 0; cc < w; cc++) {
          if (!map[r + h][c + cc] || covered[r + h][c + cc]) break outer;
        }
        h++;
      }

      // mark covered
      for (let rr = r; rr < r + h; rr++) {
        for (let cc = c; cc < c + w; cc++) {
          covered[rr][cc] = true;
        }
      }

      rects.push({ r0: r, c0: c, w: w, h: h });
    }
  }

  return rects;
}

/* ---------- CORE QR (canvas rendering) ---------- */
function generateQR() {
  const text = getVal("qr-text", "");
  const roundPercent = getInt("qr-roundness", 35);
  const roundness = (roundPercent / 100) * 0.5;

  const fgColor = getVal("qr-fg", "#ffffff");
  const bgColor = getVal("qr-bg", "transparent");
  const finderStyle = getVal("finder-style", "rounded");

  const modulePadding = getFloat("qr-padding", 0);

  const qr = qrcode(0, "Q");
  qr.addData(text);
  qr.make();

  const size = 400;
  const canvas = document.getElementById("qrCanvas");
  if (!canvas) return console.warn("qrCanvas element not found");
  const ctx = canvas.getContext("2d");
  canvas.width = size;
  canvas.height = size;

  const count = qr.getModuleCount();
  const moduleSize = size / count;
  const realR = moduleSize * roundness;

  ctx.clearRect(0, 0, size, size);

  if (bgColor !== "transparent") {
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, size, size);
  }

  ctx.fillStyle = fgColor;

  /* ---------- MERGE MODES ---------- */
  if (qrMergeMode === "full") {
    // full blob mode: detect groups and draw greedy rects
    const visited = Array.from({ length: count }, () =>
      Array(count).fill(false),
    );
    for (let r = 0; r < count; r++) {
      for (let c = 0; c < count; c++) {
        if (visited[r][c]) continue;
        if (!qr.isDark(r, c)) continue;
        if (isFinderZone(c, r, count)) {
          visited[r][c] = true;
          continue;
        }

        const group = floodFillGroup(qr, r, c, count, visited);
        if (!group || group.length === 0) continue;

        const rects = groupToRects(group, count);
        const padFix = -0.25;
        const pad = modulePadding;

        for (const rect of rects) {
          const sx = rect.c0 * moduleSize + pad + padFix;
          const sy = rect.r0 * moduleSize + pad + padFix;
          const sw = rect.w * moduleSize - pad * 2 - padFix * 2;
          const sh = rect.h * moduleSize - pad * 2 - padFix * 2;
          const rr = Math.min(realR, Math.min(sw, sh) / 2);
          drawRoundedRect(ctx, sx, sy, sw, sh, rr);
        }
      }
    }
  } else if (qrMergeMode !== "none") {
    // horizontal / vertical merging
    for (let row = 0; row < count; row++) {
      for (let col = 0; col < count; col++) {
        if (!qr.isDark(row, col) || isFinderZone(col, row, count)) continue;

        const x = col * moduleSize;
        const y = row * moduleSize;

        const padFix = -0.25;
        const pad = modulePadding;

        const sx = x + pad + padFix;
        const sy = y + pad + padFix;
        const s = moduleSize - pad * 2 - padFix * 2;

        // horizontal merge
        if (qrMergeMode === "horizontal") {
          if (col + 1 < count && qr.isDark(row, col + 1)) {
            let end = col + 1;
            while (
              end < count &&
              qr.isDark(row, end) &&
              !isFinderZone(end, row, count)
            )
              end++;

            const w = (end - col) * moduleSize - pad * 2 - padFix * 2;
            drawRoundedRect(ctx, sx, sy, w, s, s * roundness);
            col = end - 1;
            continue;
          }
        }

        // vertical merge
        if (qrMergeMode === "vertical") {
          if (row + 1 < count && qr.isDark(row + 1, col)) {
            let end = row + 1;
            while (
              end < count &&
              qr.isDark(end, col) &&
              !isFinderZone(col, end, count)
            )
              end++;

            const h = (end - row) * moduleSize - pad * 2 - padFix * 2;
            drawRoundedRect(ctx, sx, sy, s, h, s * roundness);
            continue;
          }
        }

        // single module
        drawRoundedRect(ctx, sx, sy, s, s, s * roundness);
      }
    }
  } else {
    // none: draw individual rounded modules
    for (let row = 0; row < count; row++) {
      for (let col = 0; col < count; col++) {
        if (!qr.isDark(row, col)) continue;
        if (isFinderZone(col, row, count)) continue;

        const x = col * moduleSize;
        const y = row * moduleSize;

        const padFix = -0.25;
        const pad = modulePadding;

        const sx = x + pad + padFix;
        const sy = y + pad + padFix;
        const s = moduleSize - pad * 2 - padFix * 2;

        drawRoundedRect(ctx, sx, sy, s, s, s * roundness);
      }
    }
  }

  /* ---------- FINDERS (draw on top) ---------- */
  drawFinderCanvas(ctx, 0, 0, moduleSize, fgColor, bgColor, finderStyle);
  drawFinderCanvas(
    ctx,
    size - moduleSize * 7,
    0,
    moduleSize,
    fgColor,
    bgColor,
    finderStyle,
  );
  drawFinderCanvas(
    ctx,
    0,
    size - moduleSize * 7,
    moduleSize,
    fgColor,
    bgColor,
    finderStyle,
  );
}

/* ---------- EXPORT PNG ---------- */
function exportPNG() {
  const canvas = document.getElementById("qrCanvas");
  if (!canvas) return;
  const link = document.createElement("a");
  link.download = "qr.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}

/* ---------- EXPORT SVG ---------- */
/* Recreates the drawn shapes as an SVG (keeps rounding + finder styles) */
function exportSVG() {
  const text = getVal("qr-text", "");
  const roundPercent = getInt("qr-roundness", 35);
  const roundness = (roundPercent / 100) * 0.5;

  const fgColor = getVal("qr-fg", "#ffffff");
  const bgColor = getVal("qr-bg", "transparent");
  const finderStyle = getVal("finder-style", "rounded");
  const modulePadding = getFloat("qr-padding", 0);

  const qr = qrcode(0, "Q");
  qr.addData(text);
  qr.make();

  const size = 400;
  const count = qr.getModuleCount();
  const moduleSize = size / count;
  const realR = moduleSize * roundness;

  const svg = [];
  svg.push(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">`,
  );
  if (bgColor !== "transparent")
    svg.push(`<rect width="100%" height="100%" fill="${bgColor}" />`);

  function pathRoundedRect(x, y, w, h, r) {
    if (r <= 0) return `M${x},${y} h${w} v${h} h${-w} z`;
    return `M${x + r},${y} H${x + w - r} Q${x + w},${y} ${x + w},${y + r} V${y + h - r} Q${x + w},${y + h} ${x + w - r},${y + h} H${x + r} Q${x},${y + h} ${x},${y + h - r} V${y + r} Q${x},${y} ${x + r},${y} Z`;
  }

  // draw modules (simple mode – matches canvas single-module rounding)
  for (let r = 0; r < count; r++) {
    for (let c = 0; c < count; c++) {
      if (!qr.isDark(r, c)) continue;
      if (isFinderZone(c, r, count)) continue;

      const x = c * moduleSize;
      const y = r * moduleSize;
      const padFix = -0.25;
      const pad = modulePadding;

      const sx = x + pad + padFix;
      const sy = y + pad + padFix;
      const s = moduleSize - pad * 2 - padFix * 2;
      const rr = Math.max(0, Math.min(realR, s * roundness));

      svg.push(
        `<path d="${pathRoundedRect(sx, sy, s, s, rr)}" fill="${fgColor}" />`,
      );
    }
  }

  // svg finder
  function svgFinder(x, y) {
    const outer = moduleSize * 7;
    const middle = moduleSize * 5;
    const inner = moduleSize * 3;
    const m1 = (outer - middle) / 2;
    const m2 = (middle - inner) / 2;
    const rOuter = finderStyle === "rounded" ? outer * 0.23 : 0;
    const rMiddle = finderStyle === "rounded" ? middle * 0.23 : 0;
    const rInner = finderStyle === "rounded" ? inner * 0.23 : 0;

    if (finderStyle === "circle") {
      const cx = x + outer / 2;
      const cy = y + outer / 2;
      svg.push(
        `<circle cx="${cx}" cy="${cy}" r="${outer / 2}" fill="${fgColor}" />`,
      );
      svg.push(
        `<circle cx="${cx}" cy="${cy}" r="${middle / 2}" fill="${bgColor === "transparent" ? "none" : bgColor}" />`,
      );
      svg.push(
        `<circle cx="${cx}" cy="${cy}" r="${inner / 2}" fill="${fgColor}" />`,
      );
    } else {
      svg.push(
        `<path d="${pathRoundedRect(x, y, outer, outer, rOuter)}" fill="${fgColor}" />`,
      );
      svg.push(
        `<path d="${pathRoundedRect(x + m1, y + m1, middle, middle, rMiddle)}" fill="${bgColor === "transparent" ? "none" : bgColor}" />`,
      );
      svg.push(
        `<path d="${pathRoundedRect(x + m1 + m2, y + m1 + m2, inner, inner, rInner)}" fill="${fgColor}" />`,
      );
    }
  }

  svgFinder(0, 0);
  svgFinder(size - moduleSize * 7, 0);
  svgFinder(0, size - moduleSize * 7);

  svg.push("</svg>");

  const blob = new Blob(svg, { type: "image/svg+xml" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "qr.svg";
  link.click();
}
