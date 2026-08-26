/* ============================================================
    ⭐ MAPA OCEN (bez zmian)
   ============================================================ */

const ocenyMap = {
  o10: '<div class="flex flex-row text-amber-500"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>',
  o9: '<div class="flex flex-row text-amber-500"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fad fa-star-half"></i></div>',
  o8: '<div class="flex flex-row w-full text-amber-500"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fad fa-star"></i></div>',
  o7: '<div class="flex flex-row text-amber-500"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fad fa-star-half"></i><i class="fad fa-star"></i></div>',
  o6: '<div class="flex flex-row text-amber-500"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fad fa-star"></i><i class="fad fa-star"></i></div>',
  o5: '<div class="flex flex-row text-amber-500"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fad fa-star-half"></i><i class="fad fa-star"></i><i class="fad fa-star"></i></div>',
  o4: '<div class="flex flex-row text-amber-500"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fad fa-star"></i><i class="fad fa-star"></i><i class="fad fa-star"></i></div>',
  o3: '<div class="flex flex-row text-amber-500"><i class="fas fa-star"></i><i class="fad fa-star-half"></i><i class="fad fa-star"></i><i class="fad fa-star"></i><i class="fad fa-star"></i></div>',
  o2: '<div class="flex flex-row text-amber-500"><i class="fas fa-star"></i><i class="fad fa-star"></i><i class="fad fa-star"></i><i class="fad fa-star"></i><i class="fad fa-star"></i></div>',
  o1: '<div class="flex flex-row text-amber-500"><i class="fad fa-star-half"></i><i class="fad fa-star"></i><i class="fad fa-star"></i><i class="fad fa-star"></i><i class="fad fa-star"></i></div>',
  o0: '<div class="flex flex-row text-amber-500"><i class="fad fa-star"></i><i class="fad fa-star"></i><i class="fad fa-star"></i><i class="fad fa-star"></i><i class="fad fa-star"></i></div>',
  oS: '<div class="flex flex-row text-rose-600"><i class="fas fa-heart"></i><i class="fas fa-heart"></i><i class="fas fa-heart"></i><i class="fas fa-heart"></i><i class="fas fa-heart"></i></div>',
};

/* ============================================================
    📦 GENEROWANIE KART Z JSON
   ============================================================ */

function generujHistorie(dane) {
  const container = document.getElementById("historia");
  if (!container) return;

  dane.forEach((item) => {
    const karta = document.createElement("div");
    karta.className =
      "group relative overflow-hidden bg-indigo-950/25 backdrop-blur-xl border-2 border-indigo-900/90 rounded-2xl h-[13.5rem] xs:h-64 md:h-72 lg:h-80 flex flex-row w-fit shadow-lg shadow-indigo-950/30 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-800/70 hover:bg-indigo-900/30 hover:shadow-xl hover:shadow-indigo-950/40";

    karta.innerHTML = `
      <div
        class="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-indigo-300/20 to-transparent"
      ></div>

      <div
        class="pointer-events-none absolute inset-0 bg-linear-to-b from-white/4 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      ></div>

      <div class="relative w-fit m-2 flex flex-col place-content-between">
        <div class="max-h-[75%] h-full">
          <img
            src="${item.img}"
            loading="lazy"
            alt="${item.alt}"
            class="rounded-xl h-full aspect-2/3 lazy-fade"
          />
        </div>

        <div class="flex flex-col place-content-center place-items-center h-full">
          <div class="mt-2">
            ${ocenyMap[item.ocena] ?? ""}
          </div>

          <div class="bold text-sm sm:text-base lg:text-lg">
            <i class="fad fa-calendar-star"></i> ${item.data}
          </div>
        </div>
      </div>
    `;

    container.appendChild(karta);
  });
}

/* ============================================================
    Generowanie
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  fetch("/pl/ksiazki/historia/historia.json")
    .then((res) => res.json())
    .then((data) => {
      generujHistorie(data);

      document.querySelectorAll("img[loading='lazy']").forEach((img) => {
        if (img.complete) {
          img.classList.add("loaded");
        } else {
          img.addEventListener("load", () => img.classList.add("loaded"));
        }
      });
    })
    .catch((err) => console.error("Błąd wczytywania historii:", err));
});
