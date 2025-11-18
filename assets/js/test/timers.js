export function startCountdown(el, lang) {
  function update() {
    const now = new Date();
    const year = now.getFullYear();
    let next = new Date(`${year}-08-04T00:00:00`);
    if (now > next) next = new Date(`${year + 1}-08-04T00:00:00`);
    const diff = next - now;
    if (diff <= 0 && now.getDate() === 4 && now.getMonth() === 7) {
      el.textContent =
        lang === "pl" ? "🎉 Dziś mam urodziny!" : "🎉 It's my birthday!";
      return;
    }
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    el.textContent = `${d}d ${h}h ${m}m ${s}s`;
  }
  update();
  setInterval(update, 1000);
}

export function startWebdevTimer(el, lang) {
  function update() {
    const now = new Date();
    const diff =
      Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds()
      ) - Date.UTC(2019, 11, 17, 16, 36, 39);

    const diffDays = diff / (1000 * 60 * 60 * 24);
    const weeks = Math.floor(diffDays / 7);
    const days = (diffDays % 7).toFixed(1);
    el.textContent =
      lang === "pl"
        ? `${weeks} tygodni (oraz ${days}d)`
        : `${weeks} weeks (and ${days}d)`;
  }
  update();
  setInterval(update, 1000);
}
