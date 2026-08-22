(function () {
  const menuButton = document.querySelector("[data-menu-button]");
  const nav = document.querySelector("[data-site-nav]");

  if (menuButton && nav) {
    document.documentElement.classList.add("enhanced-nav");
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }));
  }

  document.querySelectorAll("[data-year]").forEach((item) => {
    item.textContent = new Date().getFullYear();
  });

  const progress = document.createElement("div");
  progress.className = "scroll-progress";
  progress.setAttribute("aria-hidden", "true");
  document.body.append(progress);
  let ticking = false;
  function updateProgress() {
    const available = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${available > 0 ? Math.min(1, window.scrollY / available) : 0})`;
    ticking = false;
  }
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }, { passive: true });
  updateProgress();

  const lightbox = document.querySelector("[data-lightbox]");
  const lightboxImage = document.querySelector("[data-lightbox-image]");
  const closeButton = document.querySelector("[data-lightbox-close]");
  const galleryButtons = Array.from(document.querySelectorAll("[data-lightbox-src]"));
  if (!lightbox || !lightboxImage || !closeButton || !galleryButtons.length) return;

  const content = lightbox.querySelector(".lightbox-content");
  const controls = document.createElement("div");
  controls.className = "lightbox-controls";
  controls.innerHTML = '<button type="button" data-lightbox-prev aria-label="Previous image">Previous</button><p data-lightbox-caption></p><button type="button" data-lightbox-next aria-label="Next image">Next</button>';
  content.append(controls);
  const previousButton = controls.querySelector("[data-lightbox-prev]");
  const nextButton = controls.querySelector("[data-lightbox-next]");
  const caption = controls.querySelector("[data-lightbox-caption]");
  const backgroundElements = [document.querySelector(".site-header"), document.querySelector(".case-hero"), document.querySelector(".case-body"), document.querySelector(".site-footer")].filter(Boolean);
  let opener = null;
  let currentIndex = 0;

  function show(index) {
    currentIndex = (index + galleryButtons.length) % galleryButtons.length;
    const button = galleryButtons[currentIndex];
    lightboxImage.src = button.dataset.lightboxSrc;
    lightboxImage.alt = button.dataset.lightboxAlt;
    caption.textContent = `${currentIndex + 1} of ${galleryButtons.length}: ${button.dataset.lightboxAlt}`;
    previousButton.hidden = galleryButtons.length < 2;
    nextButton.hidden = galleryButtons.length < 2;
  }

  function openLightbox(button, index) {
    opener = button;
    show(index);
    lightbox.removeAttribute("hidden");
    lightbox.classList.add("open");
    document.body.classList.add("no-scroll");
    backgroundElements.forEach((element) => element.setAttribute("inert", ""));
    closeButton.focus();
  }

  function closeLightbox() {
    if (!lightbox.classList.contains("open")) return;
    lightbox.classList.remove("open");
    lightbox.setAttribute("hidden", "");
    document.body.classList.remove("no-scroll");
    backgroundElements.forEach((element) => element.removeAttribute("inert"));
    opener?.focus();
  }

  galleryButtons.forEach((button, index) => button.addEventListener("click", () => openLightbox(button, index)));
  closeButton.addEventListener("click", closeLightbox);
  previousButton.addEventListener("click", () => show(currentIndex - 1));
  nextButton.addEventListener("click", () => show(currentIndex + 1));
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("open")) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") show(currentIndex - 1);
    if (event.key === "ArrowRight") show(currentIndex + 1);
    if (event.key === "Tab") {
      const focusable = [closeButton, previousButton, nextButton].filter((item) => !item.hidden);
      const current = focusable.indexOf(document.activeElement);
      if (event.shiftKey && current <= 0) {
        event.preventDefault();
        focusable.at(-1).focus();
      } else if (!event.shiftKey && current === focusable.length - 1) {
        event.preventDefault();
        focusable[0].focus();
      }
    }
  });
})();
