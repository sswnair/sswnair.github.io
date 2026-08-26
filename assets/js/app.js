(function () {
  document.documentElement.classList.add("reveal-ready");
  const filters = Array.from(document.querySelectorAll("[data-filter]"));
  const menuButton = document.querySelector("[data-menu-button]");
  const nav = document.querySelector("[data-site-nav]");
  const filterStatus = document.querySelector("[data-filter-status]");
  const cards = Array.from(document.querySelectorAll(".project-card"));
  const sections = Array.from(document.querySelectorAll("[data-project-section]"));

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.filter;
      filters.forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });

      cards.forEach((card) => {
        card.hidden = selected !== "all" && card.dataset.group !== selected;
      });
      sections.forEach((section) => {
        section.hidden = selected !== "all" && section.dataset.projectSection !== selected;
      });

      if (filterStatus) {
        const count = cards.filter((card) => selected === "all" || card.dataset.group === selected).length;
        filterStatus.textContent = `Showing ${count} ${count === 1 ? "case study" : "case studies"}.`;
      }
    });
  });

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

  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll("[data-reveal]").forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8%", threshold: 0.08 });

  document.querySelectorAll("[data-reveal]").forEach((item) => observer.observe(item));
})();
