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
    📦 GENEROWANIE KART RECENZJI (rozszerzone o <next>)
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("recenzje");
  if (!container) return;

  fetch("/pl/ksiazki/recenzje/recenzje.json")
    .then((res) => res.json())
    .then((dane) => {
      dane.forEach((item) => {
        /* Zamiana <next> na poprawne otwarcie kolejnego akapitu */
        const trescHTML = item.tresc
          .trim()
          .replace(
            /<next>/g,
            '</p><div class="border-t border-indigo-900/50 w-1/4 mx-auto"></div><p>',
          );

        const karta = document.createElement("div");
        karta.className =
          "bg-indigo-600/25 backdrop-blur-sm rounded-2xl w-full max-w-[40rem] h-64 md:h-72 lg:h-80 flex flex-row";

        const seriaHTML = item.seria
          ? `<div><i class="fad fa-books"></i> ${item.seria}</div>`
          : "";

        const specjalneHTML = item.specjalne
          ? `<div class="mb-2 font-bold text-center text-rose-600">
               <i class="fas fa-heart"></i> ${item.specjalne}
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
              <i class="fad fa-calendar-pen"></i> ${item.data}
            </div>
          </div>

          <div class="w-full m-2 ml-0 p-2 bg-blue-900 rounded-xl overflow-y-auto scrollbar-track-transparent ${item.scroll}">
            <div class="text-base md:text-lg xl:text-xl m-1 mb-2 p-2 rounded-xl flex flex-col text-center font-bold ${item.kolor}">
              <div><i class="fad fa-book-bookmark"></i> ${item.tytul}</div>
              <div><i class="fad fa-feather"></i> ${item.autor}</div>
              ${seriaHTML}
            </div>

            ${specjalneHTML}
            <div class=" md:text-justify text-sm md:text-base xl:text-lg space-y-2">
              <p class="mt-4">${trescHTML}</p>
            </div>
          </div>
        `;

        container.appendChild(karta);
      });

      /* Ładowanie obrazków */
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
