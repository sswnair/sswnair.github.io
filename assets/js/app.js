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

  const rail = document.querySelector("[data-rail]");
  const railStops = Array.from(document.querySelectorAll("[data-rail-stop]"));
  const staged = Array.from(document.querySelectorAll("[data-stage]"));

  if (rail && railStops.length && staged.length) {
    const setStage = (stage) => {
      railStops.forEach((stop) => stop.classList.toggle("active", Number(stop.dataset.railStop) <= stage));
      const ratio = railStops.length > 1 ? (stage - 1) / (railStops.length - 1) : 1;
      rail.style.setProperty("--rail-progress", `${Math.max(0, Math.min(1, ratio)) * 100}%`);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStage(railStops.length);
    } else {
      let ticking = false;
      const syncStage = () => {
        ticking = false;
        const line = window.innerHeight * 0.42;
        let current = 1;
        staged.forEach((item) => {
          if (item.getBoundingClientRect().top <= line) current = Number(item.dataset.stage);
        });
        setStage(current);
      };
      const onScroll = () => {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(syncStage);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });
      syncStage();
    }
  }

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
