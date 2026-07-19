(function () {
  const projects = window.portfolioProjects || [];
  const grid = document.querySelector("[data-project-grid]");
  const filters = document.querySelectorAll("[data-filter]");
  const menuButton = document.querySelector("[data-menu-button]");
  const nav = document.querySelector("[data-site-nav]");

  const groups = {
    "real-estate-underwriting": "real-assets",
    "project-finance": "real-assets",
    "leveraged-buyout": "private-markets",
    "ma-merger": "transactions",
    "precedent-transactions": "transactions",
    "credit-analysis": "credit",
    "dcf-valuation": "valuation",
    "three-statement": "valuation",
    "comparable-companies": "valuation",
    "sum-of-the-parts": "valuation",
    "portfolio-management": "portfolio"
  };

  function card(project) {
    const metrics = project.metrics.slice(0, 3).map(([label, value]) => `
      <div class="card-metric">
        <strong>${value}</strong>
        <span>${label}</span>
      </div>
    `).join("");

    return `
      <article class="project-card" data-group="${groups[project.id]}">
        <div class="project-topline">
          <span class="project-category">${project.eyebrow}</span>
          <span class="verdict-pill ${project.verdictTone}">${project.verdict}</span>
        </div>
        <h3><a href="case-study.html?project=${project.id}">${project.title}</a></h3>
        <p class="project-short">${project.short}</p>
        <div class="card-metrics" aria-label="Selected model outputs">${metrics}</div>
      </article>
    `;
  }

  if (grid) {
    grid.innerHTML = projects.map(card).join("");
  }

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.filter;
      filters.forEach((item) => item.classList.toggle("active", item === button));
      document.querySelectorAll(".project-card").forEach((item) => {
        item.hidden = selected !== "all" && item.dataset.group !== selected;
      });
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
  }

  document.querySelectorAll("[data-year]").forEach((item) => {
    item.textContent = new Date().getFullYear();
  });
})();
