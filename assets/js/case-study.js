(function () {
  const menuButton = document.querySelector("[data-menu-button]");
  const nav = document.querySelector("[data-site-nav]");
  const lightbox = document.querySelector("[data-lightbox]");
  const lightboxImage = document.querySelector("[data-lightbox-image]");
  const closeButton = document.querySelector("[data-lightbox-close]");
  const zoomButton = document.querySelector("[data-lightbox-zoom]");
  const lightboxViewport = document.querySelector("[data-lightbox-viewport]");
  let lightboxOpener = null;

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }));
    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape" || !nav.classList.contains("open")) return;
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.focus();
    });
  }

  document.querySelectorAll("[data-year]").forEach((item) => {
    item.textContent = new Date().getFullYear();
  });

  if (!lightbox || !lightboxImage || !closeButton || !zoomButton || !lightboxViewport) return;

  const backgroundElements = [
    document.querySelector(".site-header"),
    document.querySelector(".case-hero"),
    document.querySelector(".case-body"),
    document.querySelector(".site-footer"),
  ].filter(Boolean);

  function setZoomed(zoomed) {
    lightbox.classList.toggle("is-zoomed", zoomed);
    zoomButton.textContent = zoomed ? "Fit to screen" : "View actual size";
    zoomButton.setAttribute("aria-pressed", String(zoomed));
    if (!zoomed) {
      lightboxViewport.scrollTop = 0;
      lightboxViewport.scrollLeft = 0;
    }
  }

  function closeLightbox() {
    if (!lightbox.classList.contains("open")) return;
    lightbox.classList.remove("open");
    lightbox.setAttribute("hidden", "");
    document.body.classList.remove("no-scroll");
    backgroundElements.forEach((element) => element.removeAttribute("inert"));
    setZoomed(false);
    if (lightboxOpener) lightboxOpener.focus();
  }

  document.querySelectorAll("[data-lightbox-src]").forEach((button) => {
    button.addEventListener("click", () => {
      lightboxOpener = button;
      lightboxImage.src = button.dataset.lightboxSrc;
      lightboxImage.alt = button.dataset.lightboxAlt;
      lightbox.removeAttribute("hidden");
      lightbox.classList.add("open");
      document.body.classList.add("no-scroll");
      backgroundElements.forEach((element) => element.setAttribute("inert", ""));
      setZoomed(false);
      closeButton.focus();
    });
  });

  closeButton.addEventListener("click", closeLightbox);
  zoomButton.addEventListener("click", () => setZoomed(!lightbox.classList.contains("is-zoomed")));
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLightbox();
      return;
    }
    if (event.key !== "Tab" || !lightbox.classList.contains("open")) return;
    const controls = [zoomButton, closeButton, lightboxViewport];
    const currentIndex = controls.indexOf(document.activeElement);
    const nextIndex = event.shiftKey
      ? (currentIndex <= 0 ? controls.length - 1 : currentIndex - 1)
      : (currentIndex >= controls.length - 1 ? 0 : currentIndex + 1);
    event.preventDefault();
    controls[nextIndex].focus();
  });
})();
