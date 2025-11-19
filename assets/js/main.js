/* === GLOBALNE ELEMENTY I ZMIENNE === */
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("main-header");
  const footer = document.getElementById("footer");
  const main = document.querySelector("main");
  const overlay = document.getElementById("overlay");
  const toggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const spans = toggle?.querySelectorAll("span");
  const emailContainers = document.querySelectorAll(".email-container");

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

  /* ============================================================
     🧭 NAWIGACJA — MENU, BLUR I ANIMACJE HEADERA
     ============================================================ */
  function openMenu() {
    isOpen = true;

    header?.classList.replace("bg-blue-700/60", "bg-blue-600");
    footer?.classList.replace("bg-blue-700/60", "bg-blue-600");
    footer?.classList.remove("md:my-4", "md:mx-3", "md:rounded-full");

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
    mobileMenu.classList.replace("translate-x-0", "translate-x-full");

    setTimeout(() => {
      spans?.[0].classList.remove("rotate-45", "translate-y-[10px]");
      spans?.[1].classList.remove("opacity-0");
      spans?.[2].classList.remove("-rotate-45", "-translate-y-[10px]");
    }, 200);

    setTimeout(() => {
      header?.classList.replace("bg-blue-600", "bg-blue-700/60");
      footer?.classList.replace("bg-blue-600", "bg-blue-700/60");
      footer?.classList.add("md:my-4", "md:mx-3", "md:rounded-full");

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

  /* ============================================================
   📧 MAIL — KLIKNIJ, ABY SKOPIOWAĆ (MAX CLEAN)
   ============================================================ */
  if (emailContainers.length) {
    const parts = ["ad", "rian", "@", "mar", "cini", ".", "uk"];
    const fullEmail = parts.join("");

    emailContainers.forEach((container) => {
      const emailContent = container.querySelector(".email-content");

      // Render antybotowego maila: same spany
      emailContent.replaceChildren(
        ...parts.map((p) => {
          const el = document.createElement("span");
          el.className = "inline";
          el.textContent = p;
          return el;
        }),
      );

      container.tabIndex = 0;
      container.role = "button";
      container.classList.add("cursor-pointer", "relative", "select-none");

      let busy = false;

      const fade = (from, to, duration = 180) =>
        container.animate([{ opacity: from }, { opacity: to }], {
          duration,
          fill: "forwards",
        }).finished;

      const swapContent = async (msg, delay = 2000) => {
        const original = container.innerHTML;

        await fade(1, 0);
        container.innerHTML = msg;
        await fade(0, 1);

        await new Promise((r) => setTimeout(r, delay));

        await fade(1, 0);
        container.innerHTML = original;
        await fade(0, 1);
      };

      const handleCopy = async (ev) => {
        ev.preventDefault();
        if (busy) return;
        busy = true;

        let msg;
        try {
          await navigator.clipboard.writeText(fullEmail);
          msg = `
          <span class="text-emerald-400 font-semibold">
            <i class="fa-solid fa-clipboard-check"></i> Skopiowano!
          </span>`;
        } catch {
          msg = `
          <span class="text-rose-400 font-semibold">
            <i class="fa-solid fa-triangle-exclamation"></i> Skopiuj ręcznie!
          </span>`;
        }

        await swapContent(msg);
        busy = false;
      };

      container.addEventListener("click", handleCopy);
      container.addEventListener("keydown", (ev) => {
        if (["Enter", " ", "Spacebar"].includes(ev.key)) handleCopy(ev);
      });
    });
  }
});

/* ============================================================
    🖼️ książki
   ============================================================ */
document.querySelectorAll("img[loading='lazy']").forEach((img) => {
  if (img.complete) {
    img.classList.add("loaded");
    return;
  }
  img.addEventListener("load", () => img.classList.add("loaded"));
});

/* ============================================================
    📅 STOPKA — AKTUALNY ROK
   ============================================================ */
class YearElement extends HTMLElement {
  connectedCallback() {
    this.textContent = new Date().getFullYear();
  }
}

customElements.define("full-year", YearElement);

/* ============================================================
    🎂 ODLICZANIE DO URODZIN
   ============================================================ */
class CountdownElement extends HTMLElement {
  connectedCallback() {
    this.updateCountdown();
    this._interval = setInterval(() => this.updateCountdown(), 1000);
  }

  disconnectedCallback() {
    clearInterval(this._interval);
  }

  updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    let nextBirthday = new Date(currentYear, 7, 4, 0, 0, 0);
    if (now > nextBirthday) {
      nextBirthday = new Date(currentYear + 1, 7, 4, 0, 0, 0);
    }

    const diff = nextBirthday - now;

    // Urodziny dziś 🎉
    if (now.getDate() === 4 && now.getMonth() === 7) {
      this.textContent =
        document.documentElement.lang === "pl"
          ? "🎉 Dziś mam urodziny!"
          : "🎉 It's my birthday today!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    this.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}

customElements.define("uro-dziny", CountdownElement);

/* ============================================================
    💻 CZAS POŚWIĘCONY NA WEBDEV
   ============================================================ */
class WebDevTime extends HTMLElement {
  connectedCallback() {
    this.update();
    this._interval = setInterval(() => this.update(), 3600000);
  }

  disconnectedCallback() {
    clearInterval(this._interval);
  }

  update() {
    const now = new Date();

    // różnica w milisekundach (UTC → UTC)
    const diff = Date.now() - Date.UTC(2019, 11, 17, 16, 36, 39);

    const diffDays = diff / 86400000; // 1000 * 60 * 60 * 24
    const weeks = Math.floor(diffDays / 7);
    const days = (diffDays % 7).toFixed(1);

    const isPL = document.documentElement.lang === "pl";

    this.textContent = isPL
      ? `${weeks} tygodni (oraz ${days}d)`
      : `${weeks} weeks (and ${days}d)`;
  }
}

customElements.define("web-dev", WebDevTime);

//mail
class CopyEmail extends HTMLElement {
  connectedCallback() {
    const parts = (
      this.getAttribute("parts") || "ad,rian,@,mar,cini,.,uk"
    ).split(",");
    const full = parts.join("");

    this.innerHTML = `
      <span class="copy-email-inner inline-flex items-center gap-2 cursor-pointer select-none">
        <i class="fa-solid fa-envelope"></i>
        <span class="email"></span>
      </span>
    `;

    const wrapper = this.querySelector(".copy-email-inner");
    const emailSpan = this.querySelector(".email");

    const renderEmail = () =>
      emailSpan.replaceChildren(
        ...parts.map((p) =>
          Object.assign(document.createElement("span"), { textContent: p }),
        ),
      );

    renderEmail();

    this.tabIndex = 0;
    let busy = false;

    const anim = (el, o1, o2, s1, s2, d = 260) =>
      el.animate(
        [
          { opacity: o1, transform: `scale(${s1})` },
          { opacity: o2, transform: `scale(${s2})` },
        ],
        { duration: d, easing: "cubic-bezier(.25,.1,.25,1)", fill: "forwards" },
      ).finished;

    const swap = async (icon, color, text) => {
      const original = this.innerHTML;

      await anim(wrapper, 1, 0, 1, 0.97);

      this.innerHTML = `
        <span class="msg inline-flex items-center gap-2 font-semibold ${color}">
          <i class="${icon}"></i> ${text}
        </span>
      `;

      const msg = this.querySelector(".msg");

      await anim(msg, 0, 1, 0.97, 1);
      await new Promise((r) => setTimeout(r, 1700));
      await anim(msg, 1, 0, 1, 0.97, 240);

      this.innerHTML = original;
      renderEmail();

      await anim(this.querySelector(".copy-email-inner"), 0, 1, 0.97, 1);
    };

    const run = async (e) => {
      e.preventDefault();
      if (busy) return;
      busy = true;

      try {
        await navigator.clipboard.writeText(full);
        await swap(
          "fa-solid fa-clipboard-check",
          "text-emerald-400",
          "Skopiowano!",
        );
      } catch {
        await swap(
          "fa-solid fa-triangle-exclamation",
          "text-rose-400",
          "Skopiuj ręcznie!",
        );
      }

      busy = false;
    };

    this.addEventListener("click", run);
    this.addEventListener(
      "keydown",
      (e) => ["Enter", " ", "Spacebar"].includes(e.key) && run(e),
    );
  }
}

customElements.define("e-mail", CopyEmail);
