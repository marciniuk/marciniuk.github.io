/* ===============================================
    NAWIGACJA — MENU, BLUR I ANIMACJE HEADERA
   =============================================== */
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("main-header");
  const footer = document.getElementById("footer");
  const main = document.querySelector("main");
  const overlay = document.getElementById("overlay");
  const toggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const spans = toggle?.querySelectorAll("span");

  let isOpen = false;

  // Zapis wysokości headera -> gradient w CSS
  if (header) {
    document.documentElement.style.setProperty(
      "--header-height",
      `${header.offsetHeight}px`,
    );
  }

  /* === USTAWIENIA TRANSITION DLA ELEMENTÓW === */
  if (header)
    header.style.transition =
      "background-color 0.25s ease-in-out, top 0.25s, margin 0.25s, border-radius 0.25s";
  if (footer)
    footer.style.transition =
      "background-color 0.25s ease-in-out, margin 0.25s ease-in-out, padding 0.25s ease-in-out, border-radius 0.25s ease-in-out";
  if (main)
    main.style.transition =
      "filter 0.25s ease-in-out, opacity 0.25s ease-in-out";
  if (overlay) overlay.style.transition = "opacity 0.25s ease-in-out";

  /* === FUNKCJE OTWIERANIA I ZAMYKANIA MENU === */
  function openMenu() {
    isOpen = true;
    toggle?.setAttribute("aria-expanded", "true");

    header?.classList.replace("bg-blue-700/60", "bg-blue-600");
    footer?.classList.replace("bg-blue-700/60", "bg-blue-600");
    footer?.classList.remove("md:mx-3", "md:rounded-full");
    footer?.classList.replace("md:mb-4", "md:mt-4");

    Object.assign(header.style, {
      top: "0rem",
      marginLeft: "0rem",
      marginRight: "0rem",
      borderRadius: "0rem",
    });

    setTimeout(() => {
      mobileMenu.classList.replace("translate-x-full", "translate-x-0");

      if (main) {
        main.style.pointerEvents = "none";
      }
      if (overlay) {
        overlay.classList.remove("pointer-events-none");
        overlay.classList.add("bg-blue-900/50", "backdrop-blur-sm");
      }
    }, 150);
  }

  function closeMenu() {
    isOpen = false;
    toggle?.setAttribute("aria-expanded", "false");
    mobileMenu.classList.replace("translate-x-0", "translate-x-full");

    setTimeout(() => {
      spans?.[0].classList.remove("rotate-45", "translate-y-[10px]");
      spans?.[1].classList.remove("opacity-0");
      spans?.[2].classList.remove("-rotate-45", "-translate-y-[10px]");
    }, 200);

    setTimeout(() => {
      header?.classList.replace("bg-blue-600", "bg-blue-700/60");
      footer?.classList.replace("bg-blue-600", "bg-blue-700/60");
      footer?.classList.add("md:mx-3", "md:rounded-full");
      footer?.classList.replace("md:mt-4", "md:mb-4");

      updateHeaderScrollStyle();

      if (main) {
        main.style.pointerEvents = "";
      }
      if (overlay) {
        overlay.classList.add("pointer-events-none");
        overlay.classList.remove("bg-blue-900/50", "backdrop-blur-sm");
      }
    }, 350);
  }

  let isScrolling = false;

  function updateHeaderScrollStyle() {
    if (isOpen || !header) return;
    if (isScrolling) return;

    isScrolling = true;

    requestAnimationFrame(() => {
      // === DESKTOP — NIE RUSZA SIĘ ===
      if (window.innerWidth >= 1280) {
        Object.assign(header.style, {
          top: "1.25rem",
          marginLeft: "1rem",
          marginRight: "1rem",
          borderRadius: "2rem",
        });
        isScrolling = false;
        return;
      }

      // === MOBILE/TABLET — animacja ===
      const scroll = Math.min(window.scrollY, 30);
      const progress = scroll / 30;

      const top = 0.75 - 0.75 * progress;
      const marginLeft = 0.5 - 0.5 * progress;
      const radius = 2 - 2 * progress;

      Object.assign(header.style, {
        top: `${top}rem`,
        marginBottom: `0.75rem`,
        marginLeft: `${marginLeft}rem`,
        marginRight: "0rem",
        borderTopLeftRadius: `${radius}rem`,
        borderBottomLeftRadius: `${radius}rem`,
        borderTopRightRadius: "0rem",
        borderBottomRightRadius: "0rem",
      });

      isScrolling = false;
    });
  }

  window.addEventListener("scroll", updateHeaderScrollStyle, { passive: true });
  window.addEventListener("resize", updateHeaderScrollStyle);
  updateHeaderScrollStyle();

  toggle?.addEventListener("click", () => {
    isOpen ? closeMenu() : openMenu();

    spans?.[0].classList.toggle("rotate-45");
    spans?.[0].classList.toggle("translate-y-[10px]");
    spans?.[1].classList.toggle("opacity-0");
    spans?.[2].classList.toggle("-rotate-45");
    spans?.[2].classList.toggle("-translate-y-[10px]");
  });

  overlay?.addEventListener("click", () => isOpen && closeMenu());
  document.addEventListener(
    "keydown",
    (e) => e.key === "Escape" && isOpen && closeMenu(),
  );
});

/* ===============================================
    STOPKA — AKTUALNY ROK
   =============================================== */
class YearElement extends HTMLElement {
  connectedCallback() {
    this.textContent = new Date().getFullYear();
  }
}

customElements.define("full-year", YearElement);

/* =============================================== 
    Console
   =============================================== */

(() => {
  const lang = document.documentElement.lang?.startsWith("en") ? "en" : "pl";

  const messages = {
    pl: {
      greeting: "No hej, hakier! xD",
      text: [
        "Fajnie, że zaglądasz do konsoli.",
        "Skoro już tu jesteś, to pewnie wiesz, co robić ;P",
      ],
    },

    en: {
      greeting: "Well hello there, hacker! xD",
      text: [
        "It's nice that you're checking the console.",
        "Since you're here, you probably know what to do ;P",
      ],
    },
  };

  const message = messages[lang];

  /* ======== Banner ======== */

  const WIDTH = 56;
  const SPACE = "\u00A0";

  const GREEN = "color:#22c55e;font-family:monospace;font-size:12px;";
  const YELLOW = "color:#facc15;font-family:monospace;font-size:12px;";
  const TEXT = "color:#94a3b8;font-family:monospace;font-size:12px;";

  const center = (text) => {
    const padding = WIDTH - text.length;
    const left = Math.floor(padding / 2);
    const right = padding - left;

    return `${SPACE.repeat(left)}${text}${SPACE.repeat(right)}`;
  };

  const row = (text, style) => `%c│%c${center(text)}%c│`;

  const line = "─".repeat(WIDTH);

  const output = [
    `%c╭${line}╮`,
    row("", GREEN),
    row(message.greeting, YELLOW),
    row("", GREEN),
    row(message.text[0], TEXT),
    row(message.text[1], TEXT),
    row("", GREEN),
    `%c╰${line}╯`,
  ].join("\n");

  console.log(
    output,

    GREEN,

    GREEN,
    GREEN,
    GREEN,
    GREEN,
    YELLOW,
    GREEN,
    GREEN,
    GREEN,
    GREEN,
    GREEN,
    TEXT,
    GREEN,
    GREEN,
    TEXT,
    GREEN,
    GREEN,
    GREEN,
    GREEN,

    GREEN,
  );
})();
