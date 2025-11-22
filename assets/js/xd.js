/* ================================================
    🌟 DYNAMICZNE WSTRZYKNIĘCIE CSS EASTER EGGA
   ================================================ */
function injectEasterEggStyles() {
  if (document.getElementById("easteregg-css")) return;

  const style = document.createElement("style");
  style.id = "easteregg-css";

  style.textContent = `
    /* ✨ mini glitch poziomy */
    @keyframes glitch-h {
      0% { transform: translateX(0); }
      20% { transform: translateX(-1px); }
      40% { transform: translateX(1px); }
      60% { transform: translateX(-1px); }
      80% { transform: translateX(1px); }
      100% { transform: translateX(0); }
    }

    /* ✨ lekkie telepnięcie */
    @keyframes shake {
      0%, 100% { transform: translate(0, 0); }
      25% { transform: translate(2px, -1px); }
      50% { transform: translate(-2px, 1px); }
      75% { transform: translate(1px, 2px); }
    }

    /* ✨ minimalne pulsowanie */
    @keyframes pulse-soft {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.03); }
    }

    /* Klasa z efektami */
    .popup-glitch {
      animation:
        glitch-h 0.25s ease-in-out,
        shake 0.3s ease-in-out,
        pulse-soft 2s ease-in-out infinite;
    }
  `;

  document.head.appendChild(style);
}

/* ================================================
    🎉 EASTER EGG — KLIKANE OBRAZKI
   ================================================ */
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("spin-popup");

  const messagesOriginal = [
    "🤢 Zaraz się porzygram!",
    "Serio nudzi ci się?",
    "Matka wie żeś debil?",
    "Idź już sobie...",
    "Jeszcze klikasz? xD",
    "😵‍💫 To się nie zatrzyma...",
    "🤨 Co ty odwalasz",
  ];

  /* rotacja unikalnych komunikatów */
  let bag = [];

  const getRandomMessage = () => {
    if (bag.length === 0) {
      bag = [...messagesOriginal];

      /* tasowanie */
      for (let i = bag.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [bag[i], bag[j]] = [bag[j], bag[i]];
      }
    }

    return bag.shift();
  };

  /* Logika klikanego spinnera */
  document.querySelectorAll(".spinable").forEach((img) => {
    let rotation = 0;
    let clicks = 0;

    img.style.transition = "transform 0.5s ease";

    img.addEventListener("click", (ev) => {
      clicks++;
      rotation += 360;
      img.style.transform = `rotate(${rotation}deg)`;

      if (clicks === 10) {
        /* dopiero przy pierwszym użyciu wstrzykujemy CSS */
        injectEasterEggStyles();

        popup.textContent = getRandomMessage();

        const x = ev.clientX + 12;
        const y = ev.clientY + 12;
        popup.style.left = x + "px";
        popup.style.top = y + "px";

        popup.classList.remove(
          "opacity-0",
          "pointer-events-none",
          "translate-y-2",
        );
        popup.classList.add("opacity-100", "translate-y-0", "popup-glitch");

        setTimeout(() => {
          popup.classList.add(
            "opacity-0",
            "pointer-events-none",
            "translate-y-2",
          );
          popup.classList.remove("opacity-100", "popup-glitch");
          clicks = 0;
        }, 5000);
      }
    });
  });
});
