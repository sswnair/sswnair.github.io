(function () {
  const projects = window.portfolioProjects || [];
  const projectGroups = window.portfolioGroups || [];
  const grid = document.querySelector("[data-project-grid]");
  const filters = document.querySelectorAll("[data-filter]");
  const menuButton = document.querySelector("[data-menu-button]");
  const nav = document.querySelector("[data-site-nav]");
  const filterStatus = document.querySelector("[data-filter-status]");

  function card(project) {
    const metrics = project.metrics.slice(0, 3).map(([label, value]) => `
      <div class="card-metric">
        <strong>${value}</strong>
        <span>${label}</span>
      </div>
    `).join("");

    return `
      <article class="project-card" data-group="${project.group}">
        <div class="project-topline">
          <span class="project-category">${project.eyebrow}</span>
          <span class="verdict-pill ${project.verdictTone}">${project.verdict}</span>
        </div>
        <h4><a href="cases/${project.id}.html">${project.title}</a></h4>
        <p class="project-context"><span>${project.basis}</span><span>${project.asOf}</span></p>
        <p class="project-short">${project.short}</p>
        <div class="card-metrics" role="group" aria-label="Selected model outputs">${metrics}</div>
      </article>
    `;
  }

  function projectGroup(group) {
    const groupProjects = projects.filter((project) => project.group === group.id);
    if (!groupProjects.length) return "";
    return `
      <section class="project-group" data-project-section="${group.id}">
        <div class="project-group-head">
          <div>
            <p class="section-kicker">${String(projectGroups.indexOf(group) + 1).padStart(2, "0")}</p>
            <h3>${group.title}</h3>
          </div>
          <p>${group.description}</p>
        </div>
        <div class="projects-grid">${groupProjects.map(card).join("")}</div>
      </section>
    `;
  }

  if (grid) {
    grid.innerHTML = projectGroups.map(projectGroup).join("");
  }

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.filter;
      filters.forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      document.querySelectorAll(".project-card").forEach((item) => {
        item.hidden = selected !== "all" && item.dataset.group !== selected;
      });
      document.querySelectorAll("[data-project-section]").forEach((section) => {
        section.hidden = selected !== "all" && section.dataset.projectSection !== selected;
      });
      if (filterStatus) {
        const count = selected === "all" ? projects.length : projects.filter((project) => project.group === selected).length;
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
  }

  document.querySelectorAll("[data-year]").forEach((item) => {
    item.textContent = new Date().getFullYear();
  });
})();
