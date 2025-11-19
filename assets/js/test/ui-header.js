export function setupHeader({
  header,
  footer,
  main,
  overlay,
  toggle,
  mobileMenu,
  spans,
}) {
  let isOpen = false;

  function openMenu() {
    isOpen = true;

    header?.classList.replace("bg-blue-600/75", "bg-blue-500");
    footer?.classList.replace("bg-blue-600", "bg-blue-500");

    Object.assign(header.style, {
      top: "0rem",
      marginLeft: "0rem",
      marginRight: "0rem",
      borderRadius: "0rem",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)",
    });

    // najpierw zmiana tła, dopiero potem wjazd menu
    setTimeout(() => {
      mobileMenu.classList.replace("translate-x-full", "translate-x-0");

      if (main) {
        main.classList.add("blur-sm");
        main.style.pointerEvents = "none";
      }
      if (overlay) {
        overlay.classList.remove("pointer-events-none");
        overlay.classList.add("opacity-100");
      }
    }, 150);
  }

  function closeMenu() {
    isOpen = false;
    mobileMenu.classList.replace("translate-x-0", "translate-x-full");

    // najpierw zniknięcie menu
    mobileMenu.classList.replace("translate-x-0", "translate-x-full");

    // po 200ms — wróć hamburgera do normalnego stanu (X → ☰)
    setTimeout(() => {
      spans?.[0].classList.remove("rotate-45", "translate-y-[10px]");
      spans?.[1].classList.remove("opacity-0");
      spans?.[2].classList.remove("-rotate-45", "-translate-y-[10px]");
    }, 200);

    // po 350ms — przywróć półprzezroczystość i blur
    setTimeout(() => {
      header?.classList.replace("bg-blue-500", "bg-blue-600/75");
      footer?.classList.replace("bg-blue-500", "bg-blue-600");

      updateHeaderScrollStyle();

      if (main) {
        main.classList.remove("blur-sm");
        main.style.pointerEvents = "";
      }
      if (overlay) {
        overlay.classList.add("pointer-events-none");
        overlay.classList.remove("opacity-100");
      }
    }, 350);
  }

  function updateHeaderScrollStyle() {
    if (isOpen || !header) return;

    const scroll = Math.min(window.scrollY, 30);
    const progress = scroll / 30;
    const shadowOpacity = 0.25 * progress;

    if (window.innerWidth >= 1280) {
      const top = 1.25 - 1.25 * progress;
      const margin = 1 - 1 * progress;
      const radius = 2 - 2 * progress;

      Object.assign(header.style, {
        top: `${top}rem`,
        marginLeft: `${margin}rem`,
        marginRight: `${margin}rem`,
        borderRadius: `${radius}rem`,
      });
    } else {
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
    }

    header.style.boxShadow = `0 4px 10px rgba(0,0,0,${shadowOpacity})`;
  }

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
  window.addEventListener("scroll", updateHeaderScrollStyle);
  window.addEventListener("resize", updateHeaderScrollStyle);
  updateHeaderScrollStyle();
}
