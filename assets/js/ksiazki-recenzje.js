/* ============================================================
    ⭐ MAPA OCEN (bez zmian)
   ============================================================ */

const ocenyMap = {
  o10: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1"></i></div>',
  o9: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star-half p-1"></i></div>',
  o8: '<div class="flex flex-row w-full text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i></div>',
  o7: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star-half p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i></div>',
  o6: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i></div>',
  o5: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star-half p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i></div>',
  o4: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i></div>',
  o3: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star-half p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i></div>',
  o2: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i></div>',
  o1: '<div class="flex flex-row text-amber-500"><i class="fa-duotone fa-solid fa-star-half p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i></div>',
  o0: '<div class="flex flex-row text-amber-500"><i class="fa-duotone fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i></div>',
  oS: '<div class="flex flex-row text-rose-600"><i class="fa-solid fa-heart p-1"></i><i class="fa-solid fa-heart p-1"></i><i class="fa-solid fa-heart p-1"></i><i class="fa-solid fa-heart p-1"></i><i class="fa-solid fa-heart p-1"></i></div>',
};

/* ============================================================
    📦 GENEROWANIE KART RECENZJI
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("recenzje");
  if (!container) return;

  fetch("/pl/ksiazki/recenzje/recenzje.json")
    .then((res) => res.json())
    .then((dane) => {
      dane.forEach((item) => {
        const karta = document.createElement("div");
        karta.className =
          "bg-indigo-600/25 backdrop-blur-sm rounded-2xl w-full max-w-[40rem] h-64 md:h-72 lg:h-80 flex flex-row";

        const seriaHTML = item.seria
          ? `<div><i class="fa-duotone fa-solid fa-books"></i> ${item.seria}</div>`
          : "";

        const specjalneHTML = item.specjalne
          ? `<div class="mb-2 font-bold text-center text-rose-600">
               <i class="fa-solid fa-heart"></i> ${item.specjalne}
             </div>`
          : "";

        karta.innerHTML = `
          <div class="w-min flex-shrink-0 m-3 flex flex-col place-content-center items-center place-items-center">
            <div class="max-h-[75%] h-full mb-2 aspect-[2/3]">
              <img
                src="${item.img}"
                loading="lazy"
                alt="${item.alt}"
                class="rounded-xl h-full aspect-[2/3] lazy-fade"
              />
            </div>

            <div id="Oceny">${ocenyMap[item.ocena] ?? ""}</div>

            <div class="font-bold text-base md:text-lg">
              <i class="fa-duotone fa-solid fa-calendar-pen"></i> ${item.data}
            </div>
          </div>

          <div class="w-full m-2 ml-0 p-2 bg-blue-900 rounded-xl overflow-y-auto scrollbar scrollbar-track-transparent scrollbar-thumb-indigo-500/75">
            <div class="m-1 mb-2 p-2 rounded-xl flex flex-col text-center font-bold ${item.kolor}">
              <div><i class="fa-duotone fa-solid fa-book-bookmark"></i> ${item.tytul}</div>
              <div><i class="fa-duotone fa-solid fa-feather"></i> ${item.autor}</div>
              ${seriaHTML}
            </div>

            ${specjalneHTML}

            <div class="indent-5 text-justify">${item.tresc}</div>
          </div>
        `;

        container.appendChild(karta);
      });

      // Auto-dodanie klasy "loaded" do obrazków lazy
      container.querySelectorAll("img[loading='lazy']").forEach((img) => {
        if (img.complete) {
          img.classList.add("loaded");
        } else {
          img.addEventListener("load", () => img.classList.add("loaded"));
        }
      });
    })
    .catch((err) => console.error("Błąd wczytywania recenzji:", err));
});
