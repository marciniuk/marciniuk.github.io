// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

let loaded = false;

var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = "100%";
    }
  });
}

// Funkcja sleep, która pozwala na opóźnienia w kodzie
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Pętla do obracania elementu
document.querySelectorAll(".loading").forEach(async (element) => {
  let rotate = 180;
  let loaded = false; // Zmienna kontrolująca, kiedy zakończyć obracanie

  // Upewnij się, że zmienna 'loaded' jest ustawiona na true, kiedy załadowano
  // Możesz ustawić ją np. na podstawie jakiegoś zdarzenia lub warunku na stronie
  // Przykład:
  // loaded = true; // Kiedy dane są załadowane, ustawiamy na true

  do {
    // Ustawienie transformacji na elementach, obracając go o 180 stopni
    element.style.transform = `rotate(${rotate}deg)`;
    await sleep(1200); // Czekamy 1,2 sekundy
    rotate += 180; // Zwiększamy kąt obrotu
  } while (!loaded); // Pętla działa, dopóki 'loaded' jest fałszywe

  // Kiedy załadowano, ukrywamy animację ładowania i pokazujemy załadowane elementy
  document.querySelector(".loading-container").style.display = "none";
  document.querySelectorAll(".loaded").forEach((el) => {
    el.style.display = "flex";
  });

  await sleep(1800); // Czekamy, aż załadowane elementy się pojawią

  // Ukrywamy załadowane elementy
  document.querySelectorAll(".loaded").forEach((el) => {
    el.style.display = "none";
  });
});

if (window.location.pathname.startsWith("/pl")) {
  let deadline = new Date("Dec 17, 2019 16:36:39 GMT+0200").getTime();

  let x = setInterval(() => {
    let now = new Date().getTime();
    let t = now - deadline;

    // Obliczanie tygodni, dni, godzin, minut i sekund
    let weeks = Math.floor(t / (1000 * 60 * 60 * 24 * 7)); // Tygodnie
    let days = Math.floor(
      (t % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
    ); // Pozostałe dni
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);

    // Wyświetlanie wyniku w elemencie o ID #web-dev
    document.querySelector(
      "#web-dev"
    ).innerHTML = `${weeks} tygodni (oraz ${days}d ${hours}h ${minutes}m ${seconds}s)`;

    // Sprawdzenie, czy czas jest ujemny
    if (t < 0) {
      clearInterval(x);
      document.querySelector("#web-dev").innerHTML = "*coś się zepsuło*";
    }
  }, 1000);
}

if (window.location.pathname.startsWith("/pl")) {
  let deadline = new Date("Aug 3, 2025 23:59:59 GMT+0200").getTime();

  let x = setInterval(() => {
    let now = new Date().getTime();
    let t = deadline - now;

    // Obliczanie dni, godzin, minut i sekund
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);

    // Sprawdzamy, czy element istnieje na stronie
    let timerElement = document.querySelector("#wiek");
    if (timerElement) {
      // Aktualizacja odliczania
      if (t >= 0) {
        timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      } else {
        clearInterval(x);
        timerElement.innerHTML = "*już mam 24, ale zapomniałem zmienić, sorki*";
      }
    }
  }, 1000);
}

function toggleNav() {
  navRight = document.querySelector("#nav-right");
  if (navRight.className.includes("nav-hidden")) {
    navRight.classList.remove("nav-hidden");
    navRight.classList.add("nav-down");
    navRight.classList.remove("nav-up");
  } else {
    navRight.classList.add("nav-hidden");
    navRight.classList.add("nav-up");
    navRight.classList.remove("nav-down");
  }
}
document.querySelector("#hamburger").addEventListener("click", toggleNav);

document.getElementById("year").innerHTML = new Date().getFullYear();

// Mapowanie ocen na odpowiednią klasę HTML
const ocenyMap = {
  o10: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1 pl-0"></i><i class="fa-solid fa-star p-1 pl-0"></i><i class="fa-solid fa-star p-1 pl-0"></i><i class="fa-solid fa-star p-1 pl-0"></i></div>',
  o9: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1 pl-0"></i><i class="fa-solid fa-star p-1 pl-0"></i><i class="fa-solid fa-star p-1 pl-0"></i><i class="fa-solid fa-star-half-stroke p-1 pl-0"></i></div>',
  o8: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1 pl-0"></i><i class="fa-solid fa-star p-1 pl-0"></i><i class="fa-solid fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i></div>',
  o7: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1 pl-0"></i><i class="fa-solid fa-star p-1 pl-0"></i><i class="fa-solid fa-star-half-stroke p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i></div>',
  o6: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1 pl-0"></i><i class="fa-solid fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i></div>',
  o5: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1 pl-0"></i><i class="fa-solid fa-star-half-stroke p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i></div>',
  o4: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i></div>',
  o3: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star-half-stroke p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i></div>',
  o2: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-regular fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i></div>',
  o1: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star-half-stroke p-1"></i><i class="fa-regular fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i></div>',
  o0: '<div class="flex flex-row text-amber-500"><i class="fa-regular fa-star p-1"></i><i class="fa-regular fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i></div>',
  oS: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-heart p-1"></i><i class="fa-solid fa-heart p-1 pl-0"></i><i class="fa-solid fa-heart p-1 pl-0"></i><i class="fa-solid fa-heart p-1 pl-0"></i><i class="fa-solid fa-heart p-1 pl-0"></i></div>',
};

// Funkcja do zastąpienia ocen na gwiazdki
function zamienOceny() {
  let str = document.getElementById("Oceny").innerHTML;

  // Zastępujemy każdą ocenę na odpowiednią wersję HTML z mapy
  for (let ocena in ocenyMap) {
    let regex = new RegExp(ocena, "g");
    str = str.replace(regex, ocenyMap[ocena]);
  }

  document.getElementById("Oceny").innerHTML = str;
}

// Wywołaj funkcję, aby zaktualizować stronę
zamienOceny();

document.querySelectorAll(".nowrap-single").forEach(function (element) {
  let text = element.innerHTML;

  // Rozszerzamy listę słów, które nie mogą łamać linii
  text = text.replace(/\b(a|i|o|z|w|u|e|na|do)\b\s+/g, "$1&nbsp;");

  element.innerHTML = text;
});
