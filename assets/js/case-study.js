(function () {
  const projects = window.portfolioProjects || [];
  const params = new URLSearchParams(window.location.search);
  const id = params.get("project");
  const project = projects.find((item) => item.id === id);
  const root = document.querySelector("[data-case-root]");
  const menuButton = document.querySelector("[data-menu-button]");
  const nav = document.querySelector("[data-site-nav]");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
    });
  }

  document.querySelectorAll("[data-year]").forEach((item) => {
    item.textContent = new Date().getFullYear();
  });

  if (!root) return;

  if (!project) {
    document.title = "Case study not found | Sanjay Nair";
    root.innerHTML = `
      <section class="not-found">
        <div class="container">
          <p class="section-kicker">Portfolio</p>
          <h1>Case study not found.</h1>
          <p>The requested model may have moved.</p>
          <a class="button" href="index.html#work">Return to selected work</a>
        </div>
      </section>
    `;
    return;
  }

  document.title = `${project.title} | Sanjay Nair`;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", project.short);

  const metrics = project.metrics.map(([label, value, detail]) => `
    <div class="case-metric">
      <strong>${value}</strong>
      <span>${label}</span>
      <em>${detail}</em>
    </div>
  `).join("");

  const list = (items) => `<ul class="clean-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  const sources = project.sources.map(([label, url]) => `
    <li><a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a></li>
  `).join("");
  const gallery = project.images.map(([src, label], index) => `
    <button class="gallery-button" type="button" data-lightbox-src="${src}" data-lightbox-alt="${label}">
      <img src="${src}" alt="${label}" loading="${index === 0 ? "eager" : "lazy"}">
      <span>${String(index + 1).padStart(2, "0")} &nbsp; ${label} — open full size</span>
    </button>
  `).join("");

  root.innerHTML = `
    <section class="case-hero">
      <div class="container">
        <a class="breadcrumb" href="index.html#work">← Back to selected work</a>
        <div class="case-title-grid">
          <div>
            <p class="case-eyebrow">${project.eyebrow} · ${project.company}</p>
            <h1>${project.title}</h1>
            <p class="case-summary">${project.short}</p>
          </div>
          <aside class="decision-card" aria-label="Decision question">
            <span>Decision question</span>
            <p>${project.decision}</p>
          </aside>
        </div>
        <div class="case-metrics">${metrics}</div>
      </div>
    </section>

    <main class="case-body" id="main-content">
      <div class="container case-layout">
        <article class="case-main">
          <section class="verdict-box">
            <span class="verdict-label ${project.verdictTone}">Analyst's view · ${project.verdict}</span>
            <h2>The conclusion</h2>
            ${project.conclusion.map((paragraph) => `<p>${paragraph}</p>`).join("")}
          </section>

          <section>
            <p class="section-kicker">Model design</p>
            <h2>How the analysis is built</h2>
            <div class="two-col-lists">
              <div>
                <h3>Architecture</h3>
                ${list(project.architecture)}
              </div>
              <div>
                <h3>Questions tested</h3>
                ${list(project.tested)}
              </div>
            </div>
          </section>

          <section>
            <p class="section-kicker">Selected outputs</p>
            <h2>Inside the model</h2>
            <p>The workbook itself remains private. These rendered outputs show the analytical structure and conclusions without distributing formulas or source files.</p>
            <div class="gallery">${gallery}</div>
          </section>

          <section>
            <p class="section-kicker">What could change the answer</p>
            <h2>Risks and limitations</h2>
            ${list(project.risks)}
          </section>

          <section class="case-actions">
            <a class="button" href="mailto:sswnair@gmail.com?subject=${encodeURIComponent(project.title + " — model walkthrough")}">Request a walkthrough</a>
            <a class="button secondary" href="index.html#work">View another case</a>
          </section>
        </article>

        <aside class="case-sidebar">
          <div class="sidebar-inner">
            <div class="side-card">
              <h3>Public-source anchors</h3>
              <ul class="source-list">${sources}</ul>
            </div>
            <div class="side-card">
              <h3>Workbook access</h3>
              <p>The complete Excel model is maintained privately. A live walkthrough can be provided during an interview.</p>
            </div>
            <div class="side-card">
              <h3>Important note</h3>
              <p>This is an independent analytical case study prepared for professional demonstration. It is not investment advice, a fairness opinion, a credit rating or a lending commitment.</p>
            </div>
          </div>
        </aside>
      </div>
    </main>

    <div class="lightbox" role="dialog" aria-modal="true" aria-label="Full-size model output" data-lightbox>
      <div class="lightbox-content">
        <button class="lightbox-close" type="button" data-lightbox-close>Close ×</button>
        <img src="" alt="" data-lightbox-image>
      </div>
    </div>
  `;

  const lightbox = document.querySelector("[data-lightbox]");
  const lightboxImage = document.querySelector("[data-lightbox-image]");
  const closeButton = document.querySelector("[data-lightbox-close]");

  function closeLightbox() {
    lightbox.classList.remove("open");
    document.body.classList.remove("no-scroll");
  }

  document.querySelectorAll("[data-lightbox-src]").forEach((button) => {
    button.addEventListener("click", () => {
      lightboxImage.src = button.dataset.lightboxSrc;
      lightboxImage.alt = button.dataset.lightboxAlt;
      lightbox.classList.add("open");
      document.body.classList.add("no-scroll");
      closeButton.focus();
    });
  });

  closeButton.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
  });
})();
