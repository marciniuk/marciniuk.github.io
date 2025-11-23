/* ============================================================
    🎉 WIEK — DYNAMICZNE WYLICZANIE WIEKU
   ============================================================ */

(function () {
  const BIRTH_YEAR = 2001;
  const BIRTH_MONTH = 7; /* sierpień (0-index) */
  const BIRTH_DAY = 4;

  class XWiek extends HTMLElement {
    connectedCallback() {
      this.render();
    }

    calculateAge() {
      const now = new Date();
      let age = now.getFullYear() - BIRTH_YEAR;

      const hadBirthday =
        now.getMonth() > BIRTH_MONTH ||
        (now.getMonth() === BIRTH_MONTH && now.getDate() >= BIRTH_DAY);

      if (!hadBirthday) age--;
      return age;
    }

    render() {
      const age = this.calculateAge();
      const prefix = this.getAttribute("prefix") || "";
      const suffix = this.getAttribute("suffix") || "";
      this.textContent = `${prefix}${age}${suffix}`;
    }
  }

  if (!customElements.get("x-wiek")) {
    customElements.define("x-wiek", XWiek);
  }
})();

/* ============================================================
    🎂 ODLICZANIE DO URODZIN
   ============================================================ */
class CountdownElement extends HTMLElement {
  connectedCallback() {
    this.updateCountdown();
    this._interval = setInterval(() => this.updateCountdown(), 1000);
  }

  disconnectedCallback() {
    clearInterval(this._interval);
  }

  updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    let nextBirthday = new Date(currentYear, 7, 4, 0, 0, 0);
    if (now > nextBirthday) {
      nextBirthday = new Date(currentYear + 1, 7, 4, 0, 0, 0);
    }

    const diff = nextBirthday - now;

    // Urodziny dziś 🎉
    if (now.getDate() === 4 && now.getMonth() === 7) {
      this.textContent =
        document.documentElement.lang === "pl"
          ? "🎉 Dziś mam urodziny!"
          : "🎉 It's my birthday today!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    this.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}

customElements.define("uro-dziny", CountdownElement);

/* ============================================================
    💻 CZAS POŚWIĘCONY NA WEBDEV
   ============================================================ */
class WebDevTime extends HTMLElement {
  connectedCallback() {
    this.update();
    this._interval = setInterval(() => this.update(), 3600000);
  }

  disconnectedCallback() {
    clearInterval(this._interval);
  }

  update() {
    const now = new Date();

    /* różnica w milisekundach (UTC → UTC) */
    const diff = Date.now() - Date.UTC(2019, 11, 17, 16, 36, 39);

    const diffDays = diff / 86400000; /* 1000 * 60 * 60 * 24 */
    const weeks = Math.floor(diffDays / 7);
    const days = (diffDays % 7).toFixed(1);

    const isPL = document.documentElement.lang === "pl";

    this.textContent = isPL
      ? `${weeks} tygodni (oraz ${days}d)`
      : `${weeks} weeks (and ${days}d)`;
  }
}

customElements.define("web-dev", WebDevTime);
