const form = document.getElementById("contact-form");
const sendBtn = document.getElementById("send-btn");

const p1 = document.getElementById("popup-1");
const p2 = document.getElementById("popup-2");
const p3 = document.getElementById("popup-final");

const p1yes = document.getElementById("p1-yes");
const p1no = document.getElementById("p1-no");
const p2yes = document.getElementById("p2-yes");
const p2no = document.getElementById("p2-no");
const p3close = document.getElementById("p3-close");

function show(el) {
  el.classList.remove("opacity-0", "pointer-events-none");
}
function hide(el) {
  el.classList.add("opacity-0", "pointer-events-none");
}

/* --- TIME & LANG TRACKING --- */
let startTime = Date.now();

/* Ustalanie języka automatycznie */
document.getElementById("lang").value = window.location.pathname.startsWith(
  "/pl/",
)
  ? "pl"
  : "en";

/* Przechwycenie wysyłki */
form.addEventListener("submit", (e) => {
  e.preventDefault();
  show(p1);
});

/* Popup 1 */
p1no.addEventListener("click", () => hide(p1));

p1yes.addEventListener("click", () => {
  hide(p1);
  setTimeout(() => show(p2), 250);
});

/* Popup 2 */
p2no.addEventListener("click", () => hide(p2));

p2yes.addEventListener("click", () => {
  hide(p2);

  /* Zapisz czas spędzony na stronie */
  const seconds = Math.round((Date.now() - startTime) / 1000);
  document.getElementById("time_spent").value = seconds + "s";

  /* reCAPTCHA + wysyłka */
  grecaptcha.ready(function () {
    grecaptcha
      .execute("6LcsyQ0sAAAAAFO7lQXpiSKoJuDYkrnDwFMADsCe", {
        action: "submit",
      })
      .then(function (token) {
        document.getElementById("recaptchaToken").value = token;

        fetch("https://api.staticforms.xyz/submit", {
          method: "POST",
          body: new FormData(form),
        })
          .then((res) => res.json())
          .then(() => {
            form.reset();
            setTimeout(() => show(p3), 300);
          })
          .catch((err) => console.error("Błąd:", err));
      });
  });
});

p3close.addEventListener("click", () => hide(p3));
