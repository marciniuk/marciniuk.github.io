document.addEventListener("DOMContentLoaded", () => {
  loadSection("ksiazki", "ksiazki.json", "rose");
  loadSection("gry", "gry.json", "amber");
  loadSection("filmy", "filmy.json", "emerald");
  loadSection("seriale", "seriale.json", "sky");
});

function loadSection(sectionId, jsonFile, color) {
  const url = `/pl/polecajki/${jsonFile}`;

  // galeria (Flickity)
  const gallery = document.querySelector(`#${sectionId} .gallery`);
  if (!gallery) return;

  // placeholder do usunięcia
  const placeholder = document.querySelector(`#${sectionId}-data-title`);

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // ukryj loading
      const loading = document.querySelector(`#${sectionId} .loading666`);
      if (loading) loading.style.display = "none";

      // usuń ukryte elementy startowe
      gallery.querySelectorAll(".ukryty").forEach((el) => el.remove());

      let html = "";

      data.forEach((item) => {
        html += createCard(item, color);
      });

      // wstaw wszystkie karty
      placeholder.insertAdjacentHTML("afterend", html);

      // usuń placeholder
      placeholder.remove();

      // ponowne odpalenie Flickity po dodaniu elementów
      const flkty = Flickity.data(gallery);
      if (flkty) {
        flkty.reloadCells();
        flkty.resize();
      } else {
        new Flickity(gallery, {
          wrapAround: true,
          pageDots: false,
        });
      }
    })
    .catch((err) => console.error(`Błąd ładowania ${jsonFile}`, err));
}

function createCard(item, color) {
  return `
<div class="gallery-cell h-40 md:h-52 lg:h-64 xl:h-80">
  <div class="bg-blue-900 h-full rounded-2xl flex flex-row">

    <img class="h-full aspect-[2/3] shrink-0 rounded-l-lg" src="${item.img}" />

    <div class="p-2 flex flex-col w-full -ml-3 rounded-l-2xl rounded-br-2xl rounded-tr-lg bg-blue-900 h-full">
      <div class="z-20 flex -m-2 -mb-6 w-8 justify-center bg-${color}-500/60 ml-auto rounded-bl-lg font-extrabold p-1 text-blue-900 text-base lg:text-lg rounded-tr-lg">
        ${item.nr}
      </div>

      <div class="lewy-scroll h-full overflow-y-auto scrollbar-track-transparent scrollbar-thumb-${color}-500/60">
        <div class="z-10 grid justify-center items-start">
          <div class="text-sm sm:text-base md:text-xl lg:text-3xl xl:text-4xl font-bold w-full text-${color}-400 text-center">
            ${item.tytul}
          </div>

          <div class="text-xs md:text-sm lg:text-base xl:text-lg w-full text-center  mb-4">
            ${item.podtytul}
          </div>

          <div class="opis text-xxs sm:text-xs md:text-sm lg:text-base xl:text-lg text-justify">
            ${item.opis}
          </div>
        </div>
      </div>

      <div class="z-10 text-${color}-500 hover:text-${color}-700 flex justify-center mt-2">
        <a href="${item.link}" class="text-sm md:text-base xl:text-lg font-bold">
          <i class="fas fa-link"></i> ${item.linkNazwa}
        </a>
      </div>
    </div>
  </div>
</div>
`;
}

/* Popup AI */
const popup = document.getElementById("ai-popup");
const opisy = document.getElementById("opis");
document.getElementById("ai-enter").addEventListener("click", () => {
  popup.remove();
});

document.getElementById("ai-exit").addEventListener("click", () => {
  history.back();
});

document.getElementById("ai-enter-del").addEventListener("click", () => {
  document.querySelectorAll(".opis").forEach((el) => el.remove());
  popup.remove();
});
