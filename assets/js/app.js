(function () {
  const filters = Array.from(document.querySelectorAll("[data-filter]"));
  const cards = Array.from(document.querySelectorAll(".project-card"));
  const sections = Array.from(document.querySelectorAll("[data-project-section]"));
  const menuButton = document.querySelector("[data-menu-button]");
  const nav = document.querySelector("[data-site-nav]");
  const filterStatus = document.querySelector("[data-filter-status]");

  function labelFor(filter) {
    const labels = {
      featured: "selected projects",
      all: "analyses",
      "corporate-finance": "corporate finance analyses",
      "equity-research": "equity research and valuation analyses",
      "investment-banking": "investment banking and M&A analyses",
      "private-markets": "private markets analyses",
      "credit-treasury": "credit and treasury analyses",
      "real-estate": "real estate analyses",
      "portfolio-risk": "portfolio and risk analyses"
    };
    return labels[filter] || "analyses";
  }

  function applyFilter(selected) {
    filters.forEach((button) => {
      const active = button.dataset.filter === selected;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    cards.forEach((card) => {
      const visible = selected === "all"
        || (selected === "featured" && card.dataset.featured === "true")
        || card.dataset.group === selected;
      card.hidden = !visible;
    });

    sections.forEach((section) => {
      section.hidden = !Array.from(section.querySelectorAll(".project-card")).some((card) => !card.hidden);
    });

    sections.filter((section) => !section.hidden).forEach((section, index) => {
      const kicker = section.querySelector(".project-group-head .section-kicker");
      if (kicker) kicker.textContent = String(index + 1).padStart(2, "0");
    });

    const count = cards.filter((card) => !card.hidden).length;
    if (filterStatus) {
      filterStatus.textContent = `Showing ${count} ${labelFor(selected)}.`;
    }
  }

  filters.forEach((button) => {
    button.addEventListener("click", () => applyFilter(button.dataset.filter));
  });

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
    const ratio = available > 0 ? Math.min(1, window.scrollY / available) : 0;
    progress.style.transform = `scaleX(${ratio})`;
    ticking = false;
  }
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }, { passive: true });
  updateProgress();

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) {
    const revealItems = document.querySelectorAll(".project-card, .principle, .timeline-item, .profile-panel");
    revealItems.forEach((item) => item.classList.add("reveal"));
    document.documentElement.classList.add("motion-ready");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8%", threshold: 0.08 });
    revealItems.forEach((item) => observer.observe(item));
  }

  const initial = filters.find((button) => button.getAttribute("aria-pressed") === "true")?.dataset.filter || "featured";
  applyFilter(initial);
})();
