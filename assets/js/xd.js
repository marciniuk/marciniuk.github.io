/* ================================================
   🌟 DYNAMICZNE WSTRZYKNIĘCIE CSS EASTER EGGA
   ================================================ */
function injectEasterEggStyles() {
  if (document.getElementById("easteregg-css")) return;

  const style = document.createElement("style");
  style.id = "easteregg-css";

  style.textContent = `
  @keyframes shake {
    0%, 100% { 
      transform: translate(0, 0) rotate(0deg); 
    }
    25% { 
      transform: translate(2px, -1px) rotate(0.6deg); 
    }
    50% { 
      transform: translate(-2px, 1px) rotate(-0.6deg); 
    }
    75% { 
      transform: translate(1px, 2px) rotate(0.4deg); 
    }
  }

  @keyframes pulse-soft {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }

  .popup-shake {
    animation: shake 0.4s infinite;
  }

  .popup-pulse {
    animation: pulse-soft 2s ease-in-out infinite;
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

  let bag = [];

  const getRandomMessage = () => {
    if (bag.length === 0) {
      bag = [...messagesOriginal];

      for (let i = bag.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [bag[i], bag[j]] = [bag[j], bag[i]];
      }
    }

    return bag.shift();
  };

  document.querySelectorAll(".spinable").forEach((img) => {
    let rotation = 0;
    let clicks = 0;

    img.style.transition = "transform 0.5s ease";

    img.addEventListener("click", (ev) => {
      clicks++;
      rotation += 360;
      img.style.transform = `rotate(${rotation}deg)`;

      if (clicks === 10) {
        injectEasterEggStyles();
        popup.textContent = getRandomMessage();

        // 🔥 pozycjonowanie dokładnie w miejscu kliknięcia
        popup.style.left = ev.clientX + 12 + "px";
        popup.style.top = ev.clientY + 12 + "px";

        // 🔥 pokaż popup
        popup.classList.replace("opacity-0", "opacity-100");

        /* losowa animacja */
        const animations = ["popup-shake", "popup-pulse"];
        const randomAnim =
          animations[Math.floor(Math.random() * animations.length)];

        /* usuń poprzednie animacje */
        popup.classList.remove("popup-shake", "popup-pulse");

        /* dodaj losową */
        popup.classList.add(randomAnim);

        // 🔥 ukryj po 5 sekundach
        setTimeout(() => {
          popup.classList.replace("opacity-100", "opacity-0");
          popup.classList.remove(
            "popup-glitch-h",
            "popup-shake",
            "popup-pulse",
          );
          clicks = 0;
        }, 5000);
      }
    });
  });
});
