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

const isWideImage = (relativePath) => {
  const file = fs.readFileSync(path.join(root, relativePath));
  const isPng = file.length >= 24
    && file[0] === 0x89
    && file.toString("ascii", 1, 4) === "PNG";
  if (!isPng) return false;
  const width = file.readUInt32BE(16);
  const height = file.readUInt32BE(20);
  return height > 0 && width / height >= 3;
};

const evidenceFor = (project) => {
  const projectDetail = {
    "financial-statement-analysis": "historical statements, ratio definitions, DuPont bridge, liquidity comparison and audit checks",
    "precedent-transactions": "transaction universe, deal screening, control premiums and valuation sensitivity",
    "option-pricing": "contract assumptions, Black-Scholes and binomial outputs, Greeks and sensitivities",
    "multifamily-refinance-west-palm-gardens": "lender package, coverage metrics, debt sizing and modelled headroom"
  }[project.id];
  const detail = projectDetail || {
    "corporate-finance": "forecast build, operating drivers and control checks",
    "equity-research": "source inputs, valuation bridge and sensitivities",
    "investment-banking": "deal mechanics, sources and uses, and transaction sensitivities",
    "private-markets": "underwriting assumptions, cash-flow bridge and return cases",
    "credit-treasury": "debt schedule, coverage tests and downside case",
    "real-estate": "property cash flows, debt metrics and return sensitivities",
    "portfolio-risk": "data construction, risk calculations and scenario outputs"
  }[project.group] || "analytical build, controls and sensitivities";
  return {
    outputsIntro: project.outputsIntro || `These selected views from ${project.company} show the ${detail} cited in this case.`,
    accessNote: project.accessNote || `${project.title} is maintained as a private workbook. I can walk through its ${detail} in an interview.`
  };
};

const presentationFor = (project) => {
  const groupLabels = {
    "corporate-finance": ["Management question", "Finance view", "Model and controls", "Model architecture", "Operating and control tests"],
    "equity-research": ["Valuation question", "Valuation view", "Valuation build", "Analytical structure", "Valuation tests"],
    "investment-banking": ["Transaction question", "Deal view", "Transaction model", "Deal mechanics", "Cases tested"],
    "private-markets": ["Investment question", "Investment view", "Underwriting build", "Underwriting structure", "Return and downside tests"],
    "credit-treasury": ["Credit question", "Credit view", "Credit framework", "Credit architecture", "Stress tests"],
    "real-estate": ["Underwriting question", "Underwriting view", "Property underwriting", "Underwriting structure", "Operating and downside tests"],
    "portfolio-risk": ["Allocation question", "Portfolio view", "Portfolio design", "Analytical structure", "Risk and scenario tests"]
  };
  const [questionLabel, viewLabel, structureTitle, architectureTitle, testedTitle] = groupLabels[project.group] || groupLabels["private-markets"];
  return {
    questionLabel: project.questionLabel || questionLabel,
    viewLabel: project.viewLabel || viewLabel,
    conclusionTitle: project.conclusionTitle || "Conclusion",
    structureKicker: project.structureKicker || "Analytical design",
    structureTitle: project.structureTitle || structureTitle,
    architectureTitle: project.architectureTitle || architectureTitle,
    testedTitle: project.testedTitle || testedTitle
  };
};

const compactTitle = (projectTitle) => {
  const suffix = " | Sanjay Nair, CFA";
  const maxBaseLength = 70 - suffix.length;
  if (projectTitle.length <= maxBaseLength) return projectTitle + suffix;
  const clipped = projectTitle.slice(0, maxBaseLength - 1).replace(/\s+\S*$/, "");
  return clipped + "…" + suffix;
};

function renderProject(project) {
  const presentation = presentationFor(project);
  const evidence = evidenceFor(project);
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
  const contribution = project.contribution?.length ? `
            <div class="side-card"><h3>My contribution</h3>${project.contribution.map((item) => `<p>${escapeHtml(item)}</p>`).join("")}</div>` : "";
  const gallery = project.images.map(([src, label], index) => `
    <button class="gallery-button${isWideImage(src) ? " gallery-wide" : ""}" type="button" aria-label="View full-size output: ${escapeHtml(label)}" data-lightbox-src="../${escapeHtml(src)}" data-lightbox-alt="${escapeHtml(label)}">
      <img src="../${escapeHtml(src)}" alt="" loading="lazy" decoding="async">
      <span aria-hidden="true">${String(index + 1).padStart(2, "0")} &nbsp; ${escapeHtml(label)}. View full size</span>
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
          <aside class="decision-card" aria-label="${escapeHtml(presentation.questionLabel)}">
            <span>${escapeHtml(presentation.questionLabel)}</span>
            <p>${escapeHtml(project.decision)}</p>
          </aside>
        </div>
        <div class="case-metrics">${metrics}</div>
      </div>
    </section>

    <div class="case-body">
      <div class="container case-layout">
        <article class="case-main" aria-label="${escapeHtml(project.title)} analysis">
          <section class="verdict-box">
            <span class="verdict-label ${escapeHtml(project.verdictTone)}">${escapeHtml(presentation.viewLabel)} · ${escapeHtml(project.verdict)}</span>
            <h2>${escapeHtml(presentation.conclusionTitle)}</h2>
            ${project.conclusion.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
          </section>

          <section>
            <p class="section-kicker">${escapeHtml(presentation.structureKicker)}</p>
            <h2>${escapeHtml(presentation.structureTitle)}</h2>
            <div class="two-col-lists">
              <div><h3>${escapeHtml(presentation.architectureTitle)}</h3>${renderList(project.architecture)}</div>
              <div><h3>${escapeHtml(presentation.testedTitle)}</h3>${renderList(project.tested)}</div>
            </div>
          </section>

          <section>
            <p class="section-kicker">Selected outputs</p>
            <h2>${escapeHtml(project.outputsTitle || "Selected workbook views")}</h2>
            <p>${escapeHtml(evidence.outputsIntro)}</p>
            <div class="gallery">${gallery}</div>
          </section>

          <section>
            <p class="section-kicker">What could change the answer</p>
            <h2>Risks and limitations</h2>
            ${renderList(project.risks)}
          </section>

          <div class="case-actions">
            <a class="button" href="mailto:sswnair@gmail.com?subject=${encodeURIComponent(project.title + " discussion")}">Email about this case</a>
            <a class="button secondary" href="../index.html#work">View another case</a>
          </div>
        </article>

        <aside class="case-sidebar" aria-label="Case resources">
          <div class="sidebar-inner">
            <div class="side-card"><h3>Sources</h3><ul class="source-list">${sources}</ul></div>
            ${contribution}
            <div class="side-card"><h3>${escapeHtml(project.accessTitle || "Workbook access")}</h3><p>${escapeHtml(evidence.accessNote)}</p></div>
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
      <article class="project-card" data-group="${escapeHtml(project.group)}" data-featured="${project.featured === true}"${project.featured === true ? "" : " hidden"}>
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
  let featuredIndex = 0;
  return groups.map((group, index) => {
    const groupProjects = projects.filter((project) => project.group === group.id);
    const hasFeatured = groupProjects.some((project) => project.featured === true);
    const displayIndex = hasFeatured ? ++featuredIndex : index + 1;
    return `
    <section class="project-group" data-project-section="${escapeHtml(group.id)}"${hasFeatured ? "" : " hidden"}>
      <div class="project-group-head">
        <div>
          <p class="section-kicker">${String(displayIndex).padStart(2, "0")}</p>
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
  const socialImage = `https://sswnair.github.io/assets/social/${project.id}.png`;
  const socialTitle = `${project.title} | Sanjay Nair, CFA`;
  const documentTitle = compactTitle(project.title);
  const creator = project.basis === "Academic group project"
    ? { contributor: { "@type": "Person", name: "Sanjay Nair", honorificSuffix: "CFA" } }
    : { author: { "@type": "Person", name: "Sanjay Nair", honorificSuffix: "CFA" } };
  const projectSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.short,
    url: canonical,
    ...creator,
    about: project.company,
    keywords: [...new Set([project.eyebrow, project.group, project.basis])],
    isBasedOn: project.sources.map(([, url]) => url),
    dateModified: "2026-08-22"
  }).replaceAll("<", "\\u003c");
  let html = template
    .replace(/\s*<meta name="robots" content="noindex,follow">/, "")
    .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${escapeHtml(project.short)}">`)
    .replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${escapeHtml(socialTitle)}">`)
    .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${escapeHtml(project.short)}">`)
    .replace(/<meta property="og:type" content="[^"]*">/, '<meta property="og:type" content="article">')
    .replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${canonical}">`)
    .replace(/<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${escapeHtml(socialTitle)}">`)
    .replace(/<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${escapeHtml(project.short)}">`)
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(documentTitle)}</title>`)
    .replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${canonical}">`)
    .replaceAll("https://sswnair.github.io/assets/social-card.png", socialImage)
    .replaceAll("Sanjay Nair, CFA finance portfolio", escapeHtml(`${project.title} by Sanjay Nair, CFA`))
    .replaceAll('href="assets/', 'href="../assets/')
    .replaceAll('src="assets/', 'src="../assets/')
    .replaceAll('href="index.html', 'href="../index.html')
    .replace(
      /<main id="main-content" data-case-root>[\s\S]*?<\/main>/,
      `<main id="main-content" data-case-root data-project-id="${escapeHtml(project.id)}">${renderProject(project)}\n  </main>`
    )
    .replace("</head>", `  <script type="application/ld+json">${projectSchema}</script>\n</head>`)
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

const sitemapUrls = [
  "https://sswnair.github.io/",
  ...context.window.portfolioProjects.map((project) => `https://sswnair.github.io/cases/${project.id}.html`)
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls
  .map((url) => `  <url><loc>${escapeHtml(url)}</loc><lastmod>2026-08-22</lastmod></url>`)
  .join("\n")}\n</urlset>\n`;
fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap);

console.log(`Generated ${context.window.portfolioProjects.length} case pages and the homepage directory.`);
