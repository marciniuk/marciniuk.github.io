/* =========================================================
   InfoMAR
   ========================================================= */

(() => {
  "use strict";

  const english = document.documentElement.lang === "en";

  const translations = {
    Niedostępne: "Unavailable",
    Nieznana: "Unknown",
    Brak: "None",
    Dostępne: "Available",
    Zablokowane: "Blocked",
    Włączone: "Enabled",
    Wyłączone: "Disabled",
    "Pomiar...": "Measuring...",
    Tak: "Yes",
    Nie: "No",
    Strona: "Page",
    Przeglądarka: "Browser",
    System: "System",
    Ekran: "Display",
    "Czas i lokalizacja": "Time and location",
    Wydajność: "Performance",
    GPU: "GPU",
    Storage: "Storage",
    "Web API": "Web API",
    Tytuł: "Title",
    Adres: "Address",
    Protokół: "Protocol",
    Ścieżka: "Path",
    Parametry: "Query parameters",
    Fragment: "Fragment",
    Referrer: "Referrer",
    Nazwa: "Name",
    Język: "Language",
    Platforma: "Platform",
    Online: "Online",
    Cookies: "Cookies",
    Architektura: "Architecture",
    Rdzenie: "Cores",
    Pamięć: "Memory",
    "Punkty dotyku": "Touch points",
    Rozdzielczość: "Resolution",
    Dostępna: "Available",
    Viewport: "Viewport",
    DPR: "DPR",
    Odświeżanie: "Refresh rate",
    Orientacja: "Orientation",
    "Głębia kolorów": "Color depth",
    Strefa: "Time zone",
    Locale: "Locale",
    "Czas lokalny": "Local time",
    Zbieranie: "Collecting information...",
  };

  const translate = (text) =>
    english ? translations[text] || String(text) : String(text);

  const ui = english
    ? {
        measuring: "Measuring...",
        active: "Measurement active",
        waiting: "Waiting",
        moveMouse: "Move your mouse to start measuring",
        stability: "% stability",
        ghosting: "Ghosting test",
        ghostingDescription: "Visual test of ghosting and panel response time",
        background: "Background",
        black: "Black",
        gray: "Gray",
        white: "White",
        speed: "Speed",
        slow: "Slow",
        medium: "Medium",
        fast: "Fast",
        direction: "Direction",
        fullscreen: "Fullscreen",
        followEdge: "Follow the edge of the moving object",
        visualTest:
          "Visual test; it does not directly measure GtG response time.",
        failed: "Could not collect information.",
      }
    : {
        measuring: "Zbieranie informacji...",
        active: "Pomiar aktywny",
        waiting: "oczekiwanie",
        moveMouse: "Poruszaj myszką, aby rozpocząć pomiar",
        stability: "% stabilności",
        ghosting: "Test smużenia",
        ghostingDescription: "Wizualny test ghostingu i czasu reakcji matrycy",
        background: "Tło",
        black: "Czarne",
        gray: "Szare",
        white: "Białe",
        speed: "Prędkość",
        slow: "Wolna",
        medium: "Średnia",
        fast: "Szybka",
        direction: "Kierunek",
        fullscreen: "Pełny ekran",
        followEdge: "Śledź wzrokiem krawędź poruszającego się obiektu",
        visualTest:
          "Test wizualny – nie mierzy bezpośrednio czasu reakcji GtG.",
        failed: "Nie udało się zebrać informacji.",
      };

  /* =========================================================
     ELEMENTS
     ========================================================= */

  const grid = document.getElementById("infomar-grid");
  const refreshButton = document.getElementById("infomar-refresh");
  const copyButton = document.getElementById("infomar-copy");

  const hardwareButton = document.getElementById("infomar-hardware");
  const hardwareModal = document.getElementById("infomar-hardware-modal");
  const hardwareClose = document.getElementById("infomar-hardware-close");
  const modalBackdrop = document.getElementById("infomar-modal-backdrop");

  if (!grid) {
    return;
  }

  /* =========================================================
     HELPERS
     ========================================================= */

  const value = (data) => {
    if (data === null || data === undefined || data === "") {
      return translate("Niedostępne");
    }

    return translate(data);
  };

  const yesNo = (condition) => translate(condition ? "Tak" : "Nie");

  const formatBytes = (bytes) => {
    if (!Number.isFinite(bytes)) {
      return "Niedostępne";
    }

    if (bytes < 1024) {
      return `${bytes} B`;
    }

    if (bytes < 1024 ** 2) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    }

    if (bytes < 1024 ** 3) {
      return `${(bytes / 1024 ** 2).toFixed(1)} MB`;
    }

    return `${(bytes / 1024 ** 3).toFixed(2)} GB`;
  };

  const escapeHTML = (text) =>
    String(text)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  /* =========================================================
     BROWSER
     ========================================================= */

  const detectBrowser = () => {
    const ua = navigator.userAgent;

    if (/Edg\//.test(ua)) {
      return "Microsoft Edge";
    }

    if (/OPR\//.test(ua)) {
      return "Opera";
    }

    if (/Chrome\//.test(ua)) {
      return "Google Chrome";
    }

    if (/Firefox\//.test(ua)) {
      return "Mozilla Firefox";
    }

    if (/Safari\//.test(ua) && !/Chrome\//.test(ua)) {
      return "Safari";
    }

    return "Nieznana";
  };

  /* =========================================================
     OPERATING SYSTEM
     ========================================================= */

  const detectOS = () => {
    const ua = navigator.userAgent;

    if (/Windows NT/.test(ua)) {
      return "Windows";
    }

    if (/Android/.test(ua)) {
      return "Android";
    }

    if (/iPhone|iPad|iPod/.test(ua)) {
      return "iOS";
    }

    if (/Mac OS X/.test(ua)) {
      return "macOS";
    }

    if (/Linux/.test(ua)) {
      return "Linux";
    }

    return "Nieznany";
  };

  /* =========================================================
     GPU
     ========================================================= */

  const getGPU = () => {
    try {
      const canvas = document.createElement("canvas");

      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

      if (!gl) {
        return {
          Vendor: "Niedostępne",
          Renderer: "Niedostępne",
        };
      }

      const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");

      if (!debugInfo) {
        return {
          Vendor: value(gl.getParameter(gl.VENDOR)),
          Renderer: value(gl.getParameter(gl.RENDERER)),
        };
      }

      return {
        Vendor: value(gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL)),

        Renderer: value(gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)),
      };
    } catch {
      return {
        Vendor: "Niedostępne",
        Renderer: "Niedostępne",
      };
    }
  };

  /* =========================================================
     STORAGE
     ========================================================= */

  const getStorage = async () => {
    const result = {
      localStorage: "Niedostępne",
      sessionStorage: "Niedostępne",
      Cookies: "Niedostępne",
      Quota: "Niedostępne",
    };

    try {
      localStorage.setItem("__infomar_test", "1");

      localStorage.removeItem("__infomar_test");

      result.localStorage = "Dostępne";
    } catch {
      result.localStorage = "Zablokowane";
    }

    try {
      sessionStorage.setItem("__infomar_test", "1");

      sessionStorage.removeItem("__infomar_test");

      result.sessionStorage = "Dostępne";
    } catch {
      result.sessionStorage = "Zablokowane";
    }

    result.Cookies = navigator.cookieEnabled ? "Włączone" : "Wyłączone";

    if (navigator.storage?.estimate) {
      try {
        const estimate = await navigator.storage.estimate();

        if (Number.isFinite(estimate.quota)) {
          result.Quota = formatBytes(estimate.quota);
        }
      } catch {
        /* Ignore */
      }
    }

    return result;
  };

  /* =========================================================
     PERFORMANCE
     ========================================================= */

  const getPerformance = () => {
    const navigation = performance.getEntriesByType("navigation")[0];

    if (!navigation) {
      return {
        "DOM Interactive": "Niedostępne",

        "DOM Complete": "Niedostępne",

        Load: "Niedostępne",
      };
    }

    return {
      "DOM Interactive": `${navigation.domInteractive.toFixed(1)} ms`,

      "DOM Complete": `${navigation.domComplete.toFixed(1)} ms`,

      Load: `${navigation.loadEventEnd.toFixed(1)} ms`,
    };
  };

  /* =========================================================
     FEATURES
     ========================================================= */

  const getFeatures = () => ({
    Clipboard: "clipboard" in navigator,

    WebGL: (() => {
      const canvas = document.createElement("canvas");

      return Boolean(
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl"),
      );
    })(),

    WebGPU: "gpu" in navigator,

    WebAssembly: typeof WebAssembly !== "undefined",

    Geolocation: "geolocation" in navigator,
  });

  /* =========================================================
     HARDWARE STATE
     ========================================================= */

  const hardware = {
    open: false,

    refreshRate: {
      value: null,
      samples: [],
      last: null,
    },

    polling: {
      count: 0,
      windowStart: null,
      samples: [],
      active: false,
      source: null,
    },
  };

  const hardwareElements = {
    resolution: document.getElementById("hardware-resolution"),

    viewport: document.getElementById("hardware-viewport"),

    dpr: document.getElementById("hardware-dpr"),

    refreshRate: document.getElementById("hardware-refresh-rate"),

    frameTime: document.getElementById("hardware-frame-time"),

    pollingRate: document.getElementById("hardware-polling-rate"),

    pollingMs: document.getElementById("hardware-polling-ms"),

    pollingStatus: document.getElementById("hardware-polling-status"),

    pollingAverage: document.getElementById("hardware-polling-average"),

    pollingMin: document.getElementById("hardware-polling-min"),

    pollingMax: document.getElementById("hardware-polling-max"),

    pollingSamples: document.getElementById("hardware-polling-samples"),

    pollingState: document.getElementById("hardware-polling-state"),
  };

  /* =========================================================
     SCREEN INFORMATION
     ========================================================= */

  const updateScreenInfo = () => {
    if (hardwareElements.resolution) {
      hardwareElements.resolution.textContent = `${screen.width} × ${screen.height}`;
    }

    if (hardwareElements.viewport) {
      hardwareElements.viewport.textContent = `${window.innerWidth} × ${window.innerHeight}`;
    }

    if (hardwareElements.dpr) {
      hardwareElements.dpr.textContent = window.devicePixelRatio;
    }
  };

  /* =========================================================
     DISPLAY REFRESH RATE
     ========================================================= */

  const updateDisplayRefreshRate = (refreshRate) => {
    const element = document.getElementById("infomar-refresh-rate");

    if (!element) {
      return;
    }

    element.textContent = `~${Math.round(refreshRate)} Hz`;
  };

  /* =========================================================
     REFRESH RATE MEASUREMENT
     ========================================================= */

  const measureRefreshRate = (timestamp) => {
    const refresh = hardware.refreshRate;

    if (refresh.last !== null) {
      const delta = timestamp - refresh.last;

      if (delta > 0 && delta < 100) {
        refresh.samples.push(delta);

        if (refresh.samples.length > 120) {
          refresh.samples.shift();
        }
      }
    }

    refresh.last = timestamp;

    if (refresh.samples.length >= 10) {
      const average =
        refresh.samples.reduce((sum, item) => sum + item, 0) /
        refresh.samples.length;

      const refreshRate = 1000 / average;

      refresh.value = refreshRate;

      if (hardwareElements.refreshRate) {
        hardwareElements.refreshRate.textContent = `${refreshRate.toFixed(
          1,
        )} Hz`;
      }

      if (hardwareElements.frameTime) {
        hardwareElements.frameTime.textContent = `${average.toFixed(2)} ms`;
      }

      updateDisplayRefreshRate(refreshRate);
    }

    requestAnimationFrame(measureRefreshRate);
  };

  /* =========================================================
     DATA
     ========================================================= */

  const collectData = async () => {
    const gpu = getGPU();

    const storage = await getStorage();

    const now = new Date();

    return {
      page: {
        Tytuł: document.title || "Brak",

        Adres: location.href,

        Protokół:
          location.protocol === "https:"
            ? "HTTPS"
            : location.protocol.replace(":", "").toUpperCase(),

        Ścieżka: location.pathname || "/",

        Parametry: location.search || "Brak",

        Fragment: location.hash || "Brak",

        Referrer: document.referrer || "Brak",
      },

      browser: {
        Nazwa: detectBrowser(),

        Język: navigator.language,

        Platforma: navigator.platform || "Niedostępne",

        Online: yesNo(navigator.onLine),

        Cookies: navigator.cookieEnabled ? "Włączone" : "Wyłączone",

        "User Agent": navigator.userAgent,
      },

      system: {
        System: detectOS(),

        Architektura:
          navigator.userAgentData?.platform ||
          navigator.platform ||
          "Niedostępne",

        Rdzenie: navigator.hardwareConcurrency || "Niedostępne",

        Pamięć: navigator.deviceMemory
          ? `${navigator.deviceMemory} GB`
          : "Niedostępne",

        "Punkty dotyku": navigator.maxTouchPoints,
      },

      display: {
        Rozdzielczość: `${screen.width} × ${screen.height}`,

        Dostępna: `${screen.availWidth} × ${screen.availHeight}`,

        Viewport: `${window.innerWidth} × ${window.innerHeight}`,

        DPR: window.devicePixelRatio,

        Odświeżanie:
          hardware.refreshRate.value !== null
            ? `~${Math.round(hardware.refreshRate.value)} Hz`
            : "Pomiar...",

        Orientacja: screen.orientation?.type || "Niedostępne",

        "Głębia kolorów": `${screen.colorDepth} bit`,
      },

      time: {
        Strefa: Intl.DateTimeFormat().resolvedOptions().timeZone,

        Locale: Intl.DateTimeFormat().resolvedOptions().locale,

        "Czas lokalny": now.toLocaleString("pl-PL"),
      },

      gpu,
      storage,

      performance: getPerformance(),

      features: getFeatures(),
    };
  };

  /* =========================================================
     CARD
     ========================================================= */

  const createCard = (icon, title, items) => {
    const rows = Object.entries(items)
      .map(
        ([label, data]) => `
            <div
              class="flex min-w-0 items-start justify-between gap-4 border-b border-white/5 py-2.5 last:border-0"
            >
              <span class="shrink-0 text-xs text-white/30">
                ${escapeHTML(translate(label))}
              </span>

              <span
                ${label === "Odświeżanie" ? 'id="infomar-refresh-rate"' : ""}
                class="min-w-0 break-all text-right font-mono text-xs text-white/65"
              >
                ${escapeHTML(translate(data))}
              </span>
            </div>
          `,
      )
      .join("");

    return `
      <section
        class="overflow-hidden rounded-3xl border border-white/10 bg-blue-700/20 p-4 shadow-2xl shadow-blue-950/20 backdrop-blur-md sm:p-5"
      >
        <div class="mb-3 flex items-center gap-3">

          <div
            class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-400/10 text-blue-300"
          >
            <i class="${icon}"></i>
          </div>

          <h2 class="text-sm font-semibold text-white/85">
            ${escapeHTML(translate(title))}
          </h2>

        </div>

        <div>
          ${rows}
        </div>
      </section>
    `;
  };

  /* =========================================================
     RENDER
     ========================================================= */

  const render = async () => {
    grid.innerHTML = `
      <div
        class="lg:col-span-2 flex items-center justify-center rounded-3xl border border-white/10 bg-blue-700/20 p-10 text-sm text-white/30 backdrop-blur-md"
      >
        <i class="fad fa-spinner fa-spin mr-2"></i>
        ${ui.measuring}
      </div>
    `;

    try {
      const data = await collectData();

      const cards = [
        ["fad fa-globe", "Strona", data.page],

        ["fad fa-browser", "Przeglądarka", data.browser],

        ["fad fa-microchip", "System", data.system],

        ["fad fa-display", "Ekran", data.display],

        ["fad fa-clock", "Czas i lokalizacja", data.time],

        ["fad fa-gauge-high", "Wydajność", data.performance],

        ["fad fa-memory", "GPU", data.gpu],

        ["fad fa-hard-drive", "Storage", data.storage],

        [
          "fad fa-puzzle-piece",
          "Web API",

          Object.fromEntries(
            Object.entries(data.features).map(([key, available]) => [
              key,
              yesNo(available),
            ]),
          ),
        ],
      ];

      grid.innerHTML = cards
        .map(([icon, title, items]) => createCard(icon, title, items))
        .join("");

      window.__infoMARData = data;
    } catch (error) {
      console.error("InfoMAR:", error);

      grid.innerHTML = `
        <div
          class="lg:col-span-2 rounded-3xl border border-red-400/20 bg-red-500/10 p-6 text-sm text-red-300 backdrop-blur-md"
        >
          ${ui.failed}
        </div>
      `;
    }
  };

  /* =========================================================
     POLLING
     ========================================================= */

  const POLLING_WINDOW = 1000;

  const updatePollingDisplay = (elapsed) => {
    const polling = hardware.polling;

    if (polling.count < 2 || elapsed <= 0) {
      return;
    }

    const rate = polling.count / (elapsed / 1000);

    if (!Number.isFinite(rate) || rate <= 0) {
      return;
    }

    polling.samples.push(rate);

    if (polling.samples.length > 10) {
      polling.samples.shift();
    }

    const recent = polling.samples.slice(-10);

    const average =
      recent.reduce((sum, sample) => sum + sample, 0) / recent.length;

    const min = Math.min(...recent);

    const max = Math.max(...recent);

    const deviation = max - min;

    const stability =
      average > 0
        ? Math.max(0, Math.min(100, 100 - (deviation / average) * 100))
        : 0;

    const interval = 1000 / average;

    if (hardwareElements.pollingRate) {
      hardwareElements.pollingRate.textContent = `~${Math.round(average)} Hz`;
    }

    if (hardwareElements.pollingMs) {
      hardwareElements.pollingMs.textContent = `${interval.toFixed(
        3,
      )} ms / raport`;
    }

    if (hardwareElements.pollingAverage) {
      hardwareElements.pollingAverage.textContent = `~${Math.round(
        average,
      )} Hz`;
    }

    if (hardwareElements.pollingMin) {
      hardwareElements.pollingMin.textContent = `${Math.round(min)} Hz`;
    }

    if (hardwareElements.pollingMax) {
      hardwareElements.pollingMax.textContent = `${Math.round(max)} Hz`;
    }

    if (hardwareElements.pollingSamples) {
      hardwareElements.pollingSamples.textContent = polling.count;
    }

    if (hardwareElements.pollingStatus) {
      hardwareElements.pollingStatus.textContent = ui.active;
    }

    if (hardwareElements.pollingState) {
      hardwareElements.pollingState.textContent = `${stability.toFixed(
        1,
      )}${ui.stability}`;
    }
  };

  /* =========================================================
     POINTER SAMPLE
     ========================================================= */

  const processPointerSamples = (amount) => {
    if (!hardware.open || !Number.isFinite(amount) || amount <= 0) {
      return;
    }

    const polling = hardware.polling;

    const now = performance.now();

    if (polling.windowStart === null) {
      polling.windowStart = now;

      polling.count = amount;

      polling.active = true;

      if (hardwareElements.pollingStatus) {
        hardwareElements.pollingStatus.textContent = ui.active;
      }

      return;
    }

    polling.count += amount;

    const elapsed = now - polling.windowStart;

    if (elapsed < POLLING_WINDOW) {
      return;
    }

    updatePollingDisplay(elapsed);

    polling.count = 0;

    polling.windowStart = now;
  };

  /* =========================================================
     POINTER EVENT
     ========================================================= */

  const handlePointerEvent = (event) => {
    if (!hardware.open) {
      return;
    }

    /*
     * Zachowujemy wersję,
     * która działała najlepiej
     * w poprzednim InfoMAR.
     */

    if (typeof event.getCoalescedEvents === "function") {
      const events = event.getCoalescedEvents();

      if (events.length > 0) {
        processPointerSamples(events.length);

        return;
      }
    }

    processPointerSamples(1);
  };

  /* =========================================================
     POINTER LISTENER
     ========================================================= */

  const pointerEventType =
    "onpointerrawupdate" in window ? "pointerrawupdate" : "pointermove";

  hardware.polling.source = pointerEventType;

  window.addEventListener(pointerEventType, handlePointerEvent, {
    passive: true,
  });

  /* =========================================================
     RESET POLLING
     ========================================================= */

  const resetPolling = () => {
    hardware.polling.count = 0;

    hardware.polling.windowStart = null;

    hardware.polling.samples = [];

    hardware.polling.active = false;

    if (hardwareElements.pollingRate) {
      hardwareElements.pollingRate.textContent = "—";
    }

    if (hardwareElements.pollingMs) {
      hardwareElements.pollingMs.textContent = "—";
    }

    if (hardwareElements.pollingAverage) {
      hardwareElements.pollingAverage.textContent = "—";
    }

    if (hardwareElements.pollingMin) {
      hardwareElements.pollingMin.textContent = "—";
    }

    if (hardwareElements.pollingMax) {
      hardwareElements.pollingMax.textContent = "—";
    }

    if (hardwareElements.pollingSamples) {
      hardwareElements.pollingSamples.textContent = "0";
    }

    if (hardwareElements.pollingStatus) {
      hardwareElements.pollingStatus.textContent = ui.moveMouse;
    }

    if (hardwareElements.pollingState) {
      hardwareElements.pollingState.textContent = ui.waiting;
    }
  };

  /* =========================================================
     HARDWARE MODAL
     ========================================================= */

  const openHardware = () => {
    if (!hardwareModal) {
      return;
    }

    hardware.open = true;

    resetPolling();

    updateScreenInfo();

    hardware.refreshRate.last = null;

    hardware.refreshRate.samples = [];

    hardwareModal.classList.remove("hidden");

    hardwareModal.classList.add("flex");

    hardwareModal.setAttribute("aria-hidden", "false");

    document.body.classList.add("overflow-hidden");
  };

  const closeHardware = () => {
    hardware.open = false;

    hardware.refreshRate.last = null;

    hardware.refreshRate.samples = [];

    hardwareModal?.classList.add("hidden");

    hardwareModal?.classList.remove("flex");

    hardwareModal?.setAttribute("aria-hidden", "true");

    document.body.classList.remove("overflow-hidden");
  };

  hardwareButton?.addEventListener("click", openHardware);

  hardwareClose?.addEventListener("click", closeHardware);

  modalBackdrop?.addEventListener("click", closeHardware);

  /* =========================================================
     GHOSTING MODAL
     ========================================================= */

  const createGhostingModal = () => {
    if (document.getElementById("infomar-ghosting-modal")) {
      return;
    }

    const modal = document.createElement("div");

    modal.id = "infomar-ghosting-modal";

    modal.className =
      "fixed inset-0 z-[100] hidden items-center justify-center p-4";

    modal.setAttribute("aria-hidden", "true");

    const ghostingDots = Array.from(
      { length: 16 },
      () =>
        '<span data-ghosting-dot class="h-2.5 w-2.5 rounded-full bg-black/80"></span>',
    ).join("");

    modal.innerHTML = `
        <div
          id="infomar-ghosting-backdrop"
          class="absolute inset-0 bg-black/75 backdrop-blur-md"
        ></div>

        <section
          class="relative z-10 flex h-[min(820px,calc(100vh-2rem))] w-full max-w-7xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-blue-700/20 shadow-2xl shadow-black/50 backdrop-blur-md"
        >
          <header
            class="flex shrink-0 items-center justify-between border-b border-white/10 px-5 py-4"
          >
            <div>
              <h2 class="text-sm font-semibold text-white/90">
                Test smużenia
              </h2>

              <p class="mt-1 text-xs text-white/30">
                Wizualny test ghostingu i czasu reakcji matrycy
              </p>
            </div>

            <button
              id="infomar-ghosting-close"
              type="button"
              class="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/40 transition hover:bg-white/10 hover:text-white"
              aria-label="Zamknij"
            >
              <i class="fad fa-xmark"></i>
            </button>
          </header>

          <div
            class="flex shrink-0 flex-wrap items-center gap-2 border-b border-white/10 px-5 py-3"
          >
            <span class="mr-1 text-xs text-white/25">
              Tło
            </span>

            <button
              type="button"
              data-ghosting-bg="black"
              class="ghosting-control active"
            >
              Czarne
            </button>

            <button
              type="button"
              data-ghosting-bg="gray"
              class="ghosting-control"
            >
              Szare
            </button>

            <button
              type="button"
              data-ghosting-bg="white"
              class="ghosting-control"
            >
              Białe
            </button>

            <div class="mx-1 hidden h-5 w-px bg-white/10 sm:block"></div>

            <span class="mr-1 text-xs text-white/25">
              Prędkość
            </span>

            <button
              type="button"
              data-ghosting-speed="slow"
              class="ghosting-control"
            >
              Wolna
            </button>

            <button
              type="button"
              data-ghosting-speed="medium"
              class="ghosting-control active"
            >
              Średnia
            </button>

            <button
              type="button"
              data-ghosting-speed="fast"
              class="ghosting-control"
            >
              Szybka
            </button>

            <button
              id="infomar-ghosting-direction"
              type="button"
              class="ghosting-control ml-auto"
            >
              <i class="fad fa-arrows-left-right mr-1"></i>
              Kierunek
            </button>
          </div>

          <div
            id="infomar-ghosting-stage"
            class="relative min-h-0 flex-1 overflow-hidden bg-black"
          >
            <div
              class="pointer-events-none absolute left-4 top-4 z-20 rounded-2xl border border-white/10 bg-black/35 px-4 py-3 font-mono text-xs text-white/50 backdrop-blur-md"
            >
              <div class="flex gap-4">
                <span class="text-white/25">
                  Hz
                </span>

                <span
                  id="infomar-ghosting-hz"
                  class="text-white/70"
                >
                  —
                </span>
              </div>

              <div class="mt-1 flex gap-4">
                <span class="text-white/25">
                  FPS
                </span>

                <span
                  id="infomar-ghosting-fps"
                  class="text-white/70"
                >
                  —
                </span>
              </div>

              <div class="mt-1 flex gap-4">
                <span class="text-white/25">
                  Frame
                </span>

                <span
                  id="infomar-ghosting-frame"
                  class="text-white/70"
                >
                  —
                </span>
              </div>
            </div>

            <div
              class="pointer-events-none absolute inset-y-0 left-1/2 z-10 w-px -translate-x-1/2 bg-white/10"
            ></div>

            <div
              id="infomar-ghosting-lanes"
              class="absolute inset-x-0 top-1/2 flex -translate-y-1/2 flex-col gap-8 px-5 sm:gap-10 sm:px-8"
            >
              <div
                class="relative h-20 overflow-hidden rounded-xl border-y border-white/5"
              >
                <span
                  class="pointer-events-none absolute left-3 top-2 z-10 font-mono text-[10px] text-white/20"
                >
                  WOLNA
                </span>

                <div
                  data-ghosting-object
                  data-lane-speed="0.55"
                  class="absolute left-0 top-1/2 h-12 w-28 -translate-y-1/2 rounded-xl bg-white shadow-[0_0_30px_rgba(255,255,255,0.18)] sm:h-14 sm:w-36"
                >
                  <div class="absolute inset-0 grid grid-cols-8 content-center justify-items-center gap-x-2.5 gap-y-2 p-2" aria-hidden="true">
                    ${ghostingDots}
                  </div>
                </div>
              </div>

              <div
                class="relative h-20 overflow-hidden rounded-xl border-y border-white/5"
              >
                <span
                  class="pointer-events-none absolute left-3 top-2 z-10 font-mono text-[10px] text-white/20"
                >
                  ŚREDNIA
                </span>

                <div
                  data-ghosting-object
                  data-lane-speed="1"
                  class="absolute left-0 top-1/2 h-12 w-28 -translate-y-1/2 rounded-xl bg-white shadow-[0_0_30px_rgba(255,255,255,0.18)] sm:h-14 sm:w-36"
                >
                  <div class="absolute inset-0 grid grid-cols-8 content-center justify-items-center gap-x-2.5 gap-y-2 p-2" aria-hidden="true">
                    ${ghostingDots}
                  </div>
                </div>
              </div>

              <div
                class="relative h-20 overflow-hidden rounded-xl border-y border-white/5"
              >
                <span
                  class="pointer-events-none absolute left-3 top-2 z-10 font-mono text-[10px] text-white/20"
                >
                  SZYBKA
                </span>

                <div
                  data-ghosting-object
                  data-lane-speed="1.7"
                  class="absolute left-0 top-1/2 h-12 w-28 -translate-y-1/2 rounded-xl bg-white shadow-[0_0_30px_rgba(255,255,255,0.18)] sm:h-14 sm:w-36"
                >
                  <div class="absolute inset-0 grid grid-cols-8 content-center justify-items-center gap-x-2.5 gap-y-2 p-2" aria-hidden="true">
                    ${ghostingDots}
                  </div>
                </div>
              </div>
            </div>

            <div
              class="pointer-events-none absolute bottom-5 left-1/2 z-20 -translate-x-1/2 rounded-xl border border-white/10 bg-black/35 px-4 py-2 text-center text-xs text-white/30 backdrop-blur-md"
            >
              Śledź wzrokiem krawędź poruszającego się obiektu
            </div>
          </div>

          <footer
            class="flex shrink-0 flex-wrap items-center justify-between gap-3 border-t border-white/10 px-5 py-3"
          >
            <p class="text-xs text-white/25">
              Test wizualny – nie mierzy bezpośrednio czasu reakcji GtG.
            </p>

            <button
              id="infomar-ghosting-fullscreen"
              type="button"
              class="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/50 transition hover:bg-white/10 hover:text-white"
            >
              <i class="fad fa-expand"></i>
              Pełny ekran
            </button>
          </footer>
        </section>
      `;

    document.body.appendChild(modal);

    if (english) {
      const ghostingTranslations = {
        "Test smużenia": ui.ghosting,
        "Wizualny test ghostingu i czasu reakcji matrycy":
          ui.ghostingDescription,
        Tło: ui.background,
        Czarne: ui.black,
        Szare: ui.gray,
        Białe: ui.white,
        Prędkość: ui.speed,
        Wolna: ui.slow,
        Średnia: ui.medium,
        Szybka: ui.fast,
        Kierunek: ui.direction,
        "Pełny ekran": ui.fullscreen,
        "Śledź wzrokiem krawędź poruszającego się obiektu": ui.followEdge,
        "Test wizualny – nie mierzy bezpośrednio czasu reakcji GtG.":
          ui.visualTest,
      };

      modal.innerHTML = Object.entries(ghostingTranslations).reduce(
        (html, [polish, englishText]) => html.replaceAll(polish, englishText),
        modal.innerHTML,
      );
    }
  };

  createGhostingModal();

  /* =========================================================
     GHOSTING TEST
     ========================================================= */

  const ghostingModal = document.getElementById("infomar-ghosting-modal");

  const ghostingButton = document.getElementById("infomar-ghosting");

  const ghostingClose = document.getElementById("infomar-ghosting-close");

  const ghostingBackdrop = document.getElementById("infomar-ghosting-backdrop");

  const ghostingStage = document.getElementById("infomar-ghosting-stage");

  const ghostingObjects = document.querySelectorAll("[data-ghosting-object]");

  const ghostingHz = document.getElementById("infomar-ghosting-hz");

  const ghostingFps = document.getElementById("infomar-ghosting-fps");

  const ghostingFrame = document.getElementById("infomar-ghosting-frame");

  const ghostingDirection = document.getElementById(
    "infomar-ghosting-direction",
  );

  const ghostingFullscreen = document.getElementById(
    "infomar-ghosting-fullscreen",
  );

  const ghostingState = {
    open: false,
    animation: null,
    direction: 1,
    speed: "medium",
    positions: [],
    lastFrame: null,
    frameTimes: [],
  };

  const ghostingSpeeds = {
    slow: 320,
    medium: 640,
    fast: 1100,
  };

  const ghostingSpeedNames = {
    slow: "Wolna",
    medium: "Średnia",
    fast: "Szybka",
  };

  /* =========================================================
     STYLES
     ========================================================= */

  const ghostingStyle = document.createElement("style");

  ghostingStyle.textContent = `
    .ghosting-control {
      border: 1px solid rgb(255 255 255 / 0.08);
      border-radius: 0.75rem;
      background: rgb(255 255 255 / 0.04);
      padding: 0.45rem 0.7rem;
      font-size: 0.7rem;
      color: rgb(255 255 255 / 0.45);
      transition:
        background-color 150ms ease,
        border-color 150ms ease,
        color 150ms ease;
    }

    .ghosting-control:hover {
      border-color: rgb(255 255 255 / 0.16);
      background: rgb(255 255 255 / 0.08);
      color: rgb(255 255 255 / 0.8);
    }

    .ghosting-control.active {
      border-color: rgb(96 165 250 / 0.25);
      background: rgb(59 130 246 / 0.12);
      color: rgb(147 197 253);
    }
  `;

  document.head.appendChild(ghostingStyle);

  /* =========================================================
     BACKGROUND
     ========================================================= */

  const setGhostingBackground = (background) => {
    if (!ghostingStage) {
      return;
    }

    ghostingStage.classList.remove("bg-black", "bg-neutral-500", "bg-white");

    if (background === "white") {
      ghostingStage.classList.add("bg-white");
    } else if (background === "gray") {
      ghostingStage.classList.add("bg-neutral-500");
    } else {
      ghostingStage.classList.add("bg-black");
    }

    document.querySelectorAll("[data-ghosting-bg]").forEach((button) => {
      button.classList.toggle(
        "active",
        button.dataset.ghostingBg === background,
      );
    });

    ghostingObjects.forEach((object) => {
      object.classList.remove("bg-black", "bg-white");

      object.classList.add(background === "white" ? "bg-black" : "bg-white");
    });

    const dotColor =
      background === "white"
        ? "bg-white/80"
        : background === "gray"
          ? "bg-neutral-500/80"
          : "bg-black/80";

    document.querySelectorAll("[data-ghosting-dot]").forEach((dot) => {
      dot.classList.remove("bg-black/80", "bg-neutral-500/80", "bg-white/80");

      dot.classList.add(dotColor);
    });
  };

  /* =========================================================
     SPEED
     ========================================================= */

  const setGhostingSpeed = (speed) => {
    if (!ghostingSpeeds[speed]) {
      return;
    }

    ghostingState.speed = speed;

    document.querySelectorAll("[data-ghosting-speed]").forEach((button) => {
      button.classList.toggle("active", button.dataset.ghostingSpeed === speed);
    });
  };

  /* =========================================================
     FRAME STATISTICS
     ========================================================= */

  const updateGhostingStats = (timestamp) => {
    const previous = ghostingState.lastFrame;

    ghostingState.lastFrame = timestamp;

    if (previous !== null) {
      const delta = timestamp - previous;

      if (delta > 0 && delta < 100) {
        ghostingState.frameTimes.push(delta);

        if (ghostingState.frameTimes.length > 120) {
          ghostingState.frameTimes.shift();
        }
      }
    }

    if (ghostingState.frameTimes.length < 10) {
      return;
    }

    const average =
      ghostingState.frameTimes.reduce((sum, frame) => sum + frame, 0) /
      ghostingState.frameTimes.length;

    const fps = 1000 / average;

    if (ghostingFps) {
      ghostingFps.textContent = Math.round(fps);
    }

    if (ghostingFrame) {
      ghostingFrame.textContent = `${average.toFixed(2)} ms`;
    }

    if (ghostingHz) {
      const measured = hardware.refreshRate.value;

      ghostingHz.textContent = measured !== null ? Math.round(measured) : "—";
    }
  };

  /* =========================================================
     ANIMATION
     ========================================================= */

  const animateGhosting = (timestamp) => {
    if (!ghostingState.open) {
      return;
    }

    const previous = ghostingState.lastFrame;

    const delta = previous === null ? 0 : Math.min(timestamp - previous, 32);

    updateGhostingStats(timestamp);

    const stageWidth = ghostingStage?.clientWidth || 0;

    const baseSpeed = ghostingSpeeds[ghostingState.speed];

    ghostingObjects.forEach((object, index) => {
      const objectWidth = object.offsetWidth;

      const laneSpeed = Number(object.dataset.laneSpeed) || 1;

      const speed = baseSpeed * laneSpeed;

      if (!Number.isFinite(ghostingState.positions[index])) {
        ghostingState.positions[index] =
          ghostingState.direction > 0 ? -objectWidth : stageWidth;
      }

      ghostingState.positions[index] +=
        speed * (delta / 1000) * ghostingState.direction;

      const min = -objectWidth;

      const max = stageWidth;

      if (
        ghostingState.direction > 0 &&
        ghostingState.positions[index] >= max
      ) {
        ghostingState.positions[index] = min;
      }

      if (
        ghostingState.direction < 0 &&
        ghostingState.positions[index] <= min
      ) {
        ghostingState.positions[index] = max;
      }

      object.style.transform = `translate3d(${ghostingState.positions[index]}px, -0%, 0)`;
    });

    ghostingState.animation = requestAnimationFrame(animateGhosting);
  };

  /* =========================================================
     RESET
     ========================================================= */

  const resetGhosting = () => {
    ghostingState.positions = [];

    ghostingState.lastFrame = null;

    ghostingState.frameTimes = [];

    const stageWidth = ghostingStage?.clientWidth || 0;

    ghostingObjects.forEach((object, index) => {
      ghostingState.positions[index] =
        ghostingState.direction > 0 ? -object.offsetWidth : stageWidth;

      object.style.transform = `translate3d(${ghostingState.positions[index]}px, -0%, 0)`;
    });

    if (ghostingFps) {
      ghostingFps.textContent = "—";
    }

    if (ghostingFrame) {
      ghostingFrame.textContent = "—";
    }

    if (ghostingHz) {
      ghostingHz.textContent =
        hardware.refreshRate.value !== null
          ? Math.round(hardware.refreshRate.value)
          : "—";
    }
  };

  /* =========================================================
     OPEN
     ========================================================= */

  const openGhosting = () => {
    if (!ghostingModal) {
      return;
    }

    if (hardware.open) {
      closeHardware();
    }

    ghostingState.open = true;

    ghostingState.direction = 1;

    setGhostingSpeed("medium");

    setGhostingBackground("black");

    ghostingModal.classList.remove("hidden");

    ghostingModal.classList.add("flex");

    ghostingModal.setAttribute("aria-hidden", "false");

    document.body.classList.add("overflow-hidden");

    requestAnimationFrame(() => {
      resetGhosting();

      ghostingState.animation = requestAnimationFrame(animateGhosting);
    });
  };

  /* =========================================================
     CLOSE
     ========================================================= */

  const closeGhosting = () => {
    ghostingState.open = false;

    if (ghostingState.animation !== null) {
      cancelAnimationFrame(ghostingState.animation);

      ghostingState.animation = null;
    }

    ghostingModal?.classList.add("hidden");

    ghostingModal?.classList.remove("flex");

    ghostingModal?.setAttribute("aria-hidden", "true");

    document.body.classList.remove("overflow-hidden");
  };

  /* =========================================================
     BUTTONS
     ========================================================= */

  ghostingButton?.addEventListener("click", openGhosting);

  ghostingClose?.addEventListener("click", closeGhosting);

  ghostingBackdrop?.addEventListener("click", closeGhosting);

  document.querySelectorAll("[data-ghosting-bg]").forEach((button) => {
    button.addEventListener("click", () => {
      setGhostingBackground(button.dataset.ghostingBg);
    });
  });

  document.querySelectorAll("[data-ghosting-speed]").forEach((button) => {
    button.addEventListener("click", () => {
      setGhostingSpeed(button.dataset.ghostingSpeed);

      resetGhosting();
    });
  });

  ghostingDirection?.addEventListener("click", () => {
    ghostingState.direction *= -1;

    resetGhosting();
  });

  /* =========================================================
     FULLSCREEN
     ========================================================= */

  ghostingFullscreen?.addEventListener("click", async () => {
    try {
      if (!document.fullscreenElement) {
        await ghostingStage?.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.warn("InfoMAR fullscreen:", error);
    }
  });

  /* =========================================================
     KEYBOARD
     ========================================================= */

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }

    if (ghostingState.open) {
      closeGhosting();
      return;
    }

    if (hardware.open) {
      closeHardware();
    }
  });

  /* =========================================================
     COPY REPORT
     ========================================================= */

  copyButton?.addEventListener("click", async () => {
    if (!window.__infoMARData) {
      return;
    }

    const flatten = (object, prefix = "") => {
      const lines = [];

      Object.entries(object).forEach(([key, item]) => {
        const path = prefix ? `${prefix} > ${translate(key)}` : translate(key);

        if (item && typeof item === "object" && !Array.isArray(item)) {
          lines.push(...flatten(item, path));
        } else {
          lines.push(`${path}: ${translate(item)}`);
        }
      });

      return lines;
    };

    const report = [
      "InfoMAR",
      "====================",
      "",
      ...flatten(window.__infoMARData),
    ].join("\n");

    try {
      await navigator.clipboard.writeText(report);

      const original = copyButton.innerHTML;

      copyButton.innerHTML = `<i class="fad fa-check"></i> ${english ? "Copied" : "Skopiowano"}`;

      copyButton.classList.add(
        "border-emerald-400/20",
        "bg-emerald-400/10",
        "text-emerald-300",
      );

      setTimeout(() => {
        copyButton.innerHTML = original;

        copyButton.classList.remove(
          "border-emerald-400/20",
          "bg-emerald-400/10",
          "text-emerald-300",
        );
      }, 2000);
    } catch (error) {
      console.error("Nie udało się skopiować raportu:", error);
    }
  });

  /* =========================================================
     REFRESH
     ========================================================= */

  refreshButton?.addEventListener("click", render);

  /* =========================================================
     INITIALIZATION
     ========================================================= */

  render();

  requestAnimationFrame(measureRefreshRate);
})();
