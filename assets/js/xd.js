document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("spin-popup");

  // 🔥 Teksty
  const messagesOriginal = [
    "🤢 Zaraz się porzygram!",
    "Serio nudzi ci się?",
    "Matka wie żeś debil?",
    "Idź już sobie...",
    "Jeszcze klikasz? xD",
    "😵‍💫 To się nie zatrzyma...",
    "🤨 Co ty odwalasz",
  ];

  // 🔥 Shuffle bag — kopia listy, z której losujemy
  let bag = [];

  const getRandomMessage = () => {
    // jeśli worek pusty → tasujemy komplet
    if (bag.length === 0) {
      bag = [...messagesOriginal];

      // mieszanina Fisher-Yates
      for (let i = bag.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [bag[i], bag[j]] = [bag[j], bag[i]];
      }
    }

    // bierzemy i usuwamy pierwszą
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
        // 🎉 Losowanie z „talii”
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
        popup.classList.add("opacity-100", "translate-y-0");

        setTimeout(() => {
          popup.classList.add(
            "opacity-0",
            "pointer-events-none",
            "translate-y-2",
          );
          popup.classList.remove("opacity-100");
          clicks = 0;
        }, 5000);
      }
    });
  });
});
