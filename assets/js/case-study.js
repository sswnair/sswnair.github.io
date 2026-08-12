(function () {
  const projects = window.portfolioProjects || [];
  const params = new URLSearchParams(window.location.search);
  const id = document.querySelector("[data-case-root]")?.dataset.projectId || params.get("project");
  const project = projects.find((item) => item.id === id);
  const root = document.querySelector("[data-case-root]");
  const pathPrefix = root?.dataset.projectId ? "../" : "";
  const menuButton = document.querySelector("[data-menu-button]");
  const nav = document.querySelector("[data-site-nav]");

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

  if (!root) return;

  if (!project) {
    window.location.replace("404.html");
    return;
  }

  if (!root.dataset.projectId) {
    window.location.replace(`cases/${encodeURIComponent(project.id)}.html`);
    return;
  }

  document.title = `${project.title} | Sanjay Nair`;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", project.short);
  const canonicalUrl = `https://sswnair.github.io/cases/${encodeURIComponent(project.id)}.html`;
  const metadata = {
    'meta[property="og:title"]': `${project.title} | Sanjay Nair, CFA`,
    'meta[property="og:description"]': project.short,
    'meta[property="og:url"]': canonicalUrl,
    'meta[name="twitter:title"]': `${project.title} | Sanjay Nair, CFA`,
    'meta[name="twitter:description"]': project.short
  };
  Object.entries(metadata).forEach(([selector, content]) => {
    const element = document.querySelector(selector);
    if (element) element.setAttribute("content", content);
  });
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute("href", canonicalUrl);

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
    <button class="gallery-button" type="button" data-lightbox-src="${pathPrefix}${src}" data-lightbox-alt="${label}">
      <img src="${pathPrefix}${src}" alt="${label}" loading="${index === 0 ? "eager" : "lazy"}">
      <span>${String(index + 1).padStart(2, "0")} &nbsp; ${label}. View full size</span>
    </button>
  `).join("");

  root.innerHTML = `
    <section class="case-hero">
      <div class="container">
        <a class="breadcrumb" href="${pathPrefix}index.html#work">← Back to selected work</a>
        <div class="case-title-grid">
          <div>
            <p class="case-eyebrow">${project.eyebrow} · ${project.company}</p>
            <h1>${project.title}</h1>
            <p class="case-summary">${project.short}</p>
            <p class="case-context"><span>${project.basis}</span><span>${project.asOf}</span></p>
          </div>
          <aside class="decision-card" aria-label="Decision question">
            <span>Decision question</span>
            <p>${project.decision}</p>
          </aside>
        </div>
        <div class="case-metrics">${metrics}</div>
      </div>
    </section>

    <div class="case-body">
      <div class="container case-layout">
        <article class="case-main">
          <section class="verdict-box">
            <span class="verdict-label ${project.verdictTone}">Model view · ${project.verdict}</span>
            <h2>Conclusion</h2>
            ${project.conclusion.map((paragraph) => `<p>${paragraph}</p>`).join("")}
          </section>

          <section>
            <p class="section-kicker">Model design</p>
            <h2>Model structure</h2>
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
            <h2>Selected workbook views</h2>
            <p>The workbook remains private. These images show the outputs cited in this case.</p>
            <div class="gallery">${gallery}</div>
          </section>

          <section>
            <p class="section-kicker">What could change the answer</p>
            <h2>Risks and limitations</h2>
            ${list(project.risks)}
          </section>

          <section class="case-actions">
            <a class="button" href="mailto:sswnair@gmail.com?subject=${encodeURIComponent(project.title + " discussion")}">Email about this case</a>
            <a class="button secondary" href="${pathPrefix}index.html#work">View another case</a>
          </section>
        </article>

        <aside class="case-sidebar" aria-label="Case resources">
          <div class="sidebar-inner">
            <div class="side-card">
              <h3>Sources</h3>
              <ul class="source-list">${sources}</ul>
            </div>
            <div class="side-card">
              <h3>Workbook access</h3>
              <p>The complete Excel model is maintained privately. A live walkthrough can be provided during an interview.</p>
            </div>
          </div>
        </aside>
      </div>
    </div>

    <div class="lightbox" role="dialog" aria-modal="true" aria-label="Full-size model output" hidden data-lightbox>
      <div class="lightbox-content">
        <button class="lightbox-close" type="button" data-lightbox-close>Close ×</button>
        <img src="${pathPrefix}${project.images[0][0]}" alt="" data-lightbox-image>
      </div>
    </div>
  `;

  const lightbox = document.querySelector("[data-lightbox]");
  const lightboxImage = document.querySelector("[data-lightbox-image]");
  const closeButton = document.querySelector("[data-lightbox-close]");
  let lightboxOpener = null;
  const backgroundElements = [document.querySelector(".site-header"), document.querySelector(".case-hero"), document.querySelector(".case-body"), document.querySelector(".site-footer")].filter(Boolean);

  function closeLightbox() {
    if (!lightbox.classList.contains("open")) return;
    lightbox.classList.remove("open");
    lightbox.setAttribute("hidden", "");
    document.body.classList.remove("no-scroll");
    backgroundElements.forEach((element) => element.removeAttribute("inert"));
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
      closeButton.focus();
    });
  });

  closeButton.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
    if (event.key === "Tab" && lightbox.classList.contains("open")) {
      event.preventDefault();
      closeButton.focus();
    }
  });
})();
