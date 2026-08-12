const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = __dirname;
const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, "assets/js/projects.js"), "utf8"), context);

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll('"', "&quot;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;");

const renderList = (items) => `<ul class="clean-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;

const compactTitle = (projectTitle) => {
  const suffix = " | Sanjay Nair, CFA";
  const maxBaseLength = 70 - suffix.length;
  if (projectTitle.length <= maxBaseLength) return projectTitle + suffix;
  const clipped = projectTitle.slice(0, maxBaseLength - 1).replace(/\s+\S*$/, "");
  return clipped + "…" + suffix;
};

function renderProject(project) {
  const metrics = project.metrics.map(([label, value, detail]) => `
    <div class="case-metric">
      <strong>${escapeHtml(value)}</strong>
      <span>${escapeHtml(label)}</span>
      <em>${escapeHtml(detail)}</em>
    </div>
  `).join("");
  const sources = project.sources.map(([label, url]) => `
    <li><a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>
  `).join("");
  const gallery = project.images.map(([src, label], index) => `
    <button class="gallery-button" type="button" data-lightbox-src="../${escapeHtml(src)}" data-lightbox-alt="${escapeHtml(label)}">
      <img src="../${escapeHtml(src)}" alt="${escapeHtml(label)}" loading="${index === 0 ? "eager" : "lazy"}">
      <span>${String(index + 1).padStart(2, "0")} &nbsp; ${escapeHtml(label)}. View full size</span>
    </button>
  `).join("");

  return `
    <section class="case-hero">
      <div class="container">
        <a class="breadcrumb" href="../index.html#work">← Back to selected work</a>
        <div class="case-title-grid">
          <div>
            <p class="case-eyebrow">${escapeHtml(project.eyebrow)} · ${escapeHtml(project.company)}</p>
            <h1>${escapeHtml(project.title)}</h1>
            <p class="case-summary">${escapeHtml(project.short)}</p>
            <p class="case-context"><span>${escapeHtml(project.basis)}</span><span>${escapeHtml(project.asOf)}</span></p>
          </div>
          <aside class="decision-card" aria-label="Decision question">
            <span>Decision question</span>
            <p>${escapeHtml(project.decision)}</p>
          </aside>
        </div>
        <div class="case-metrics">${metrics}</div>
      </div>
    </section>

    <div class="case-body">
      <div class="container case-layout">
        <article class="case-main">
          <section class="verdict-box">
            <span class="verdict-label ${escapeHtml(project.verdictTone)}">Model view · ${escapeHtml(project.verdict)}</span>
            <h2>Conclusion</h2>
            ${project.conclusion.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
          </section>

          <section>
            <p class="section-kicker">Model design</p>
            <h2>Model structure</h2>
            <div class="two-col-lists">
              <div><h3>Architecture</h3>${renderList(project.architecture)}</div>
              <div><h3>Questions tested</h3>${renderList(project.tested)}</div>
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
            ${renderList(project.risks)}
          </section>

          <section class="case-actions">
            <a class="button" href="mailto:sswnair@gmail.com?subject=${encodeURIComponent(project.title + " discussion")}">Email about this case</a>
            <a class="button secondary" href="../index.html#work">View another case</a>
          </section>
        </article>

        <aside class="case-sidebar" aria-label="Case resources">
          <div class="sidebar-inner">
            <div class="side-card"><h3>Sources</h3><ul class="source-list">${sources}</ul></div>
            <div class="side-card"><h3>Workbook access</h3><p>The complete Excel model is maintained privately. A live walkthrough can be provided during an interview.</p></div>
          </div>
        </aside>
      </div>
    </div>

    <div class="lightbox" role="dialog" aria-modal="true" aria-label="Full-size model output" hidden data-lightbox>
      <div class="lightbox-content">
        <button class="lightbox-close" type="button" data-lightbox-close>Close ×</button>
        <img src="../${escapeHtml(project.images[0][0])}" alt="" data-lightbox-image>
      </div>
    </div>`;
}

function renderCard(project) {
  const metrics = project.metrics.slice(0, 3).map(([label, value]) => `
          <div class="card-metric"><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></div>`).join("");
  return `
      <article class="project-card" data-group="${escapeHtml(project.group)}">
        <div class="project-topline">
          <span class="project-category">${escapeHtml(project.eyebrow)}</span>
          <span class="verdict-pill ${escapeHtml(project.verdictTone)}">${escapeHtml(project.verdict)}</span>
        </div>
        <h4><a href="cases/${escapeHtml(project.id)}.html">${escapeHtml(project.title)}</a></h4>
        <p class="project-context"><span>${escapeHtml(project.basis)}</span><span>${escapeHtml(project.asOf)}</span></p>
        <p class="project-short">${escapeHtml(project.short)}</p>
        <div class="card-metrics" role="group" aria-label="Selected model outputs">${metrics}
        </div>
      </article>`;
}

function renderHomeGroups(groups, projects) {
  return groups.map((group, index) => {
    const groupProjects = projects.filter((project) => project.group === group.id);
    return `
    <section class="project-group" data-project-section="${escapeHtml(group.id)}">
      <div class="project-group-head">
        <div>
          <p class="section-kicker">${String(index + 1).padStart(2, "0")}</p>
          <h3>${escapeHtml(group.title)}</h3>
        </div>
        <p>${escapeHtml(group.description)}</p>
      </div>
      <div class="projects-grid">${groupProjects.map(renderCard).join("")}
      </div>
    </section>`;
  }).join("");
}

const template = fs.readFileSync(path.join(root, "case-study.html"), "utf8");
const casesRoot = path.join(root, "cases");
fs.mkdirSync(casesRoot, { recursive: true });

for (const project of context.window.portfolioProjects) {
  const canonical = `https://sswnair.github.io/cases/${project.id}.html`;
  const socialTitle = `${project.title} | Sanjay Nair, CFA`;
  const documentTitle = compactTitle(project.title);
  let html = template
    .replace('  <meta name="robots" content="noindex,follow">\n', "")
    .replace("Finance case study by Sanjay Nair, CFA, with a disclosed model period, selected outputs, sources and limitations.", escapeHtml(project.short))
    .replace("Finance Case Study | Sanjay Nair, CFA", escapeHtml(socialTitle))
    .replace("A finance case study with a disclosed model period, selected outputs, sources and limitations.", escapeHtml(project.short))
    .replace("https://sswnair.github.io/case-study.html", canonical)
    .replace("Finance Case Study | Sanjay Nair, CFA", escapeHtml(socialTitle))
    .replace("A finance case study with a disclosed model period, selected outputs, sources and limitations.", escapeHtml(project.short))
    .replace("Finance Case Study | Sanjay Nair", escapeHtml(documentTitle))
    .replace("https://sswnair.github.io/case-study.html", canonical)
    .replaceAll('href="assets/', 'href="../assets/')
    .replaceAll('src="assets/', 'src="../assets/')
    .replaceAll('href="index.html', 'href="../index.html')
    .replace(
      /<main id="main-content" data-case-root>[\s\S]*?<\/main>/,
      `<main id="main-content" data-case-root data-project-id="${escapeHtml(project.id)}">${renderProject(project)}\n  </main>`
    )
    .replace(/[ \t]+$/gm, "");
  fs.writeFileSync(path.join(casesRoot, `${project.id}.html`), html);
}

const indexPath = path.join(root, "index.html");
const homeGroups = renderHomeGroups(context.window.portfolioGroups, context.window.portfolioProjects);
const indexHtml = fs.readFileSync(indexPath, "utf8").replace(
  /          <!-- GENERATED_PROJECTS_START -->[\s\S]*?          <!-- GENERATED_PROJECTS_END -->/,
  `          <!-- GENERATED_PROJECTS_START -->${homeGroups}\n          <!-- GENERATED_PROJECTS_END -->`
);
fs.writeFileSync(indexPath, indexHtml.replace(/[ \t]+$/gm, ""));

console.log(`Generated ${context.window.portfolioProjects.length} case pages and the homepage directory.`);
