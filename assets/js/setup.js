// ZAWARTOŚCI POPUPÓW
const SECTION_FILES = {
  telefony: "/assets/setup/pl/telefony.html",
  laptopy: "/assets/setup/pl/laptopy.html",
  handheldy: "/assets/setup/pl/handheldy.html",
  sluchawki: "/assets/setup/pl/sluchawki.html",
  myszki: "/assets/setup/pl/myszki.html",
  klawiatury: "/assets/setup/pl/klawiatury.html",
  gamepady: "/assets/setup/pl/gamepady.html",
  zegarki: "/assets/setup/pl/zegarki.html",
  smartphones: "/assets/setup/en/smartphones.html",
  laptops: "/assets/setup/en/laptops.html",
  handhelds: "/assets/setup/en/handhelds.html",
  headphones: "/assets/setup/en/headphones.html",
  mouses: "/assets/setup/en/mouses.html",
  keyboards: "/assets/setup/en/keyboards.html",
  gamepads: "/assets/setup/en/gamepads.html",
  watches: "/assets/setup/en/watches.html",
};

const overlay = document.getElementById("popup-overlay");
const popupContent = document.getElementById("popup-content");
const popupInner = document.getElementById("popup-inner");
const closeBtn = document.getElementById("popup-close");

// --- ANIMACJE ---
function openPopup() {
  overlay.classList.add("flex");
  overlay.classList.remove("opacity-0", "pointer-events-none");

  requestAnimationFrame(() => {
    popupContent.classList.remove("opacity-0", "scale-95");
  });

  document.documentElement.classList.add("overflow-hidden");
}

function closePopup() {
  overlay.classList.add("opacity-0", "pointer-events-none");
  popupContent.classList.add("opacity-0", "scale-95");

  setTimeout(() => {
    overlay.classList.remove("flex");
  }, 300);

  document.documentElement.classList.remove("overflow-hidden");
}

// --- OTWIERANIE SEKCJI ---
document.querySelectorAll(".section-btn").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const key = btn.dataset.section;
    const file = SECTION_FILES[key];
    const color = btn.dataset.color; // <- pobrany kolor

    // USUWANIE STARYCH KOLORÓW
    popupContent.classList.remove(
      ...Array.from(popupContent.classList).filter(
        (c) => c.startsWith("border-") || c.startsWith("bg-"),
      ),
    );

    // wczytywanie z pliku
    const html = await fetch(file).then((res) => res.text());
    popupInner.innerHTML = html;

    // RESET SCROLLA — NOWA LINIA
    popupContent.scrollTop = 0;

    // DODANIE NOWYCH
    popupContent.classList.add(`border-${color}`, `bg-${color}/15`, `border-2`);

    // DODAWANIE KOLORÓW TEKSTU
    popupInner.querySelectorAll(".colorize").forEach((el) => {
      el.classList.add(`text-${color}`);
    });

    openPopup();
  });
});

// --- ZAMYKANIE ---
closeBtn.addEventListener("click", closePopup);

// --- KLIK POZA POPUPEM ---
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closePopup();
});
