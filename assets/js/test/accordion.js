/* ============================================================
   🥞 POLITYKA NALEŚNIKÓW (AKORDEON)
   ============================================================ */
function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector("svg");
  const isOpen = content.classList.contains("open");
  const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;

  if (!isLargeScreen) {
    document.querySelectorAll(".accordion-content.open").forEach((el) => {
      if (el !== content) {
        el.style.maxHeight = null;
        el.classList.remove("open");
        el.previousElementSibling
          .querySelector("svg")
          .classList.remove("rotate-180");
      }
    });
  }

  if (isOpen) {
    content.style.maxHeight = null;
    content.classList.remove("open");
    icon.classList.remove("rotate-180");
    return;
  }

  content.classList.add("open");
  content.style.maxHeight = content.scrollHeight + "px";
  icon.classList.add("rotate-180");
}

window.addEventListener("resize", () => {
  document.querySelectorAll(".accordion-content.open").forEach((el) => {
    el.style.maxHeight = el.scrollHeight + "px";
  });
  window.addEventListener(
    "scroll",
    throttle(() => {
      window.dispatchEvent(new CustomEvent("scroll-updated"));
    }, 100),
  );
});
