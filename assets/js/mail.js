/* ============================================================
    📧 MAIL — KLIKNIJ, ABY SKOPIOWAĆ (MAX CLEAN)
   ============================================================ */
class CopyEmail extends HTMLElement {
  connectedCallback() {
    const parts = (
      this.getAttribute("parts") || "ad,rian,@,mar,cini,.,uk"
    ).split(",");
    const full = parts.join("");

    this.innerHTML = `
      <span class="copy-email-inner inline-flex items-center gap-2 cursor-pointer select-none">
        <i class="fa-solid fa-envelope"></i>
        <span class="email"></span>
      </span>
    `;

    const wrapper = this.querySelector(".copy-email-inner");
    const emailSpan = this.querySelector(".email");

    const renderEmail = () =>
      emailSpan.replaceChildren(
        ...parts.map((p) =>
          Object.assign(document.createElement("span"), { textContent: p }),
        ),
      );

    renderEmail();

    this.tabIndex = 0;
    let busy = false;

    const anim = (el, o1, o2, s1, s2, d = 260) =>
      el.animate(
        [
          { opacity: o1, transform: `scale(${s1})` },
          { opacity: o2, transform: `scale(${s2})` },
        ],
        { duration: d, easing: "cubic-bezier(.25,.1,.25,1)", fill: "forwards" },
      ).finished;

    const swap = async (icon, color, text) => {
      const original = this.innerHTML;

      await anim(wrapper, 1, 0, 1, 0.97);

      this.innerHTML = `
        <span class="msg inline-flex items-center gap-2 font-semibold ${color}">
          <i class="${icon}"></i> ${text}
        </span>
      `;

      const msg = this.querySelector(".msg");

      await anim(msg, 0, 1, 0.97, 1);
      await new Promise((r) => setTimeout(r, 1700));
      await anim(msg, 1, 0, 1, 0.97, 240);

      this.innerHTML = original;
      renderEmail();

      await anim(this.querySelector(".copy-email-inner"), 0, 1, 0.97, 1);
    };

    const run = async (e) => {
      e.preventDefault();
      if (busy) return;
      busy = true;

      /* Pobierz język strony (np. "pl" lub "en") */
      const lang = document.documentElement.lang?.toLowerCase() || "en";

      /* Wiadomości zależne od języka */
      const msg = {
        success: lang === "pl" ? "Skopiowano!" : "Copied!",
        fail: lang === "pl" ? "Skopiuj ręcznie!" : "Copy manually!",
      };

      try {
        await navigator.clipboard.writeText(full);
        await swap(
          "fa-solid fa-clipboard-check",
          "text-emerald-400",
          msg.success,
        );
      } catch {
        await swap(
          "fa-solid fa-triangle-exclamation",
          "text-rose-400",
          msg.fail,
        );
      }

      busy = false;
    };

    this.addEventListener("click", run);
    this.addEventListener(
      "keydown",
      (e) => ["Enter", " ", "Spacebar"].includes(e.key) && run(e),
    );
  }
}

customElements.define("e-mail", CopyEmail);
