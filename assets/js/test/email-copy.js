/* ============================================================
   📧 email-copy.js — moduł do kopiowania adresu e-mail
   Uruchamia się po zaimportowaniu (np. window.addEventListener('load', () => import('./email-copy.js')))
   ============================================================ */

(function initEmailCopyModule() {
  // Zadbaj o to, żeby moduł uruchomił się tylko wtedy, gdy DOM jest gotowy.
  // Jeśli importujesz po "load" — natychmiast się wykona.
  // Jeśli importujesz wcześniej, poczekaj na DOMContentLoaded.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }

  function run() {
    const emailContainers = document.querySelectorAll(".email-container");
    if (!emailContainers || emailContainers.length === 0) return;

    const parts = ["ad", "rian", "@", "mar", "cini", ".", "uk"];
    const fullEmail = parts.join("");

    emailContainers.forEach((container) => {
      // Znajdź (albo utwórz) element, w którym będzie HTML częściowy
      let emailContent = container.querySelector(".email-content");
      if (!emailContent) {
        emailContent = document.createElement("span");
        emailContent.className = "email-content";
        container.appendChild(emailContent);
      }

      // Ustaw treść (częściowo tagowane) wewnątrz emailContent
      emailContent.innerHTML = parts
        .map(
          (p, i) =>
            `<${i % 2 === 0 ? "span" : "p"} class="inline">${p}</${
              i % 2 === 0 ? "span" : "p"
            }>`
        )
        .join("");

      // Atrybuty dostępności i wyglądu na kontenerze
      container.setAttribute("tabindex", "0");
      container.setAttribute("role", "button");
      container.classList.add("cursor-pointer", "relative", "select-none");

      let isShowingNotice = false;

      const animateSwap = async (newContent, restoreAfterMs = 2000) => {
        // wygaszanie CAŁEGO kontenera (tekst + ikony + inline elementy)
        container.style.transition = "opacity 0.25s ease";
        container.style.opacity = "0";
        await new Promise((r) => setTimeout(r, 250));

        const prevHTML = container.innerHTML;
        container.innerHTML = newContent;

        // pokazanie komunikatu
        container.style.opacity = "1";
        await new Promise((r) => setTimeout(r, 250));

        // po chwili przywrócenie starej zawartości
        setTimeout(async () => {
          container.style.opacity = "0";
          await new Promise((r) => setTimeout(r, 200));
          container.innerHTML = prevHTML;
          container.style.opacity = "1";
          isShowingNotice = false;
        }, restoreAfterMs);
      };

      const handleCopy = async (e) => {
        // e może być KeyboardEvent lub MouseEvent — zapobiegamy podwójnym triggerom
        if (e && typeof e.preventDefault === "function") e.preventDefault();
        if (isShowingNotice) return;
        isShowingNotice = true;

        try {
          await navigator.clipboard.writeText(fullEmail);
          await animateSwap(
            '<span class="bg-blue-900 px-2 rounded-full text-emerald-400 font-semibold"><i class="fa-solid fa-clipboard-check"></i> Skopiowano adres e-mail!</span>'
          );
        } catch {
          await animateSwap(
            '<span class="bg-blue-900 px-2 rounded-full text-rose-400 font-semibold"><i class="fa-solid fa-triangle-exclamation"></i> Nie udało się skopiować!</span>'
          );
        }
      };

      // Obsługa kliknięcia i klawiatury — listenery na kontenerze (nie na wewnętrznych elementach)
      container.addEventListener("click", handleCopy);
      container.addEventListener("keydown", (ev) => {
        // nowoczesne przeglądarki zwracają " " lub "Spacebar" w zależności od implementacji
        if (ev.key === "Enter" || ev.key === " " || ev.key === "Spacebar") {
          ev.preventDefault();
          handleCopy(ev);
        }
      });
    });
  }
})();
