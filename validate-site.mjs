import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = path.dirname(new URL(import.meta.url).pathname);
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };
const read = (relative) => fs.readFileSync(path.join(root, relative), "utf8");

const context = { window: {} };
vm.createContext(context);
vm.runInContext(read("assets/js/projects.js"), context);
const projects = context.window.portfolioProjects;
const ids = projects.map((project) => project.id);

assert(projects.length === 22, `Expected 22 projects, found ${projects.length}`);
assert(new Set(ids).size === ids.length, "Project ids are not unique");
assert(projects.filter((project) => project.featured).length === 7, "Recruiter view must contain exactly 7 selected projects");

for (const project of projects) {
  assert(project.metrics.length === 4, `${project.id}: expected 4 headline metrics`);
  assert(project.images.length >= 2, `${project.id}: expected at least 2 images`);
  for (const [image] of project.images) {
    assert(fs.existsSync(path.join(root, image)), `${project.id}: missing ${image}`);
  }
  assert(fs.existsSync(path.join(root, "assets/social", `${project.id}.png`)), `${project.id}: missing social card`);
}

const htmlFiles = ["index.html", "404.html", ...ids.map((id) => `cases/${id}.html`)];
for (const relative of htmlFiles) {
  const html = read(relative);
  assert(!html.includes("—"), `${relative}: contains an em dash`);
  if (relative !== "404.html") {
    assert(html.includes('name="twitter:image:alt"'), `${relative}: missing twitter:image:alt`);
  }
  const tags = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) => match[1]);
  for (const target of tags) {
    if (/^(?:https?:|mailto:|#)/.test(target)) continue;
    const clean = target.split(/[?#]/)[0];
    if (!clean || clean.startsWith("/")) continue;
    const resolved = path.resolve(path.dirname(path.join(root, relative)), clean);
    assert(fs.existsSync(resolved), `${relative}: missing internal target ${target}`);
  }
}

const sitemap = read("sitemap.xml");
assert((sitemap.match(/<url>/g) || []).length === 23, "Sitemap must contain homepage plus 22 projects");
assert((sitemap.match(/<lastmod>2026-08-22<\/lastmod>/g) || []).length === 23, "Every sitemap URL needs lastmod");

const publicHtmlFiles = ["index.html", "case-study.html", "404.html", ...ids.map((id) => `cases/${id}.html`)];
const titles = publicHtmlFiles.map((relative) => read(relative).match(/<title>([^<]+)<\/title>/)?.[1] || "");
assert(titles.every(Boolean), "Every public HTML file needs a title");
assert(new Set(titles.filter((_, index) => publicHtmlFiles[index].startsWith("cases/"))).size === projects.length, "Generated case titles must be unique");
assert(titles.every((title) => title.length <= 70), "Public document titles must be 70 characters or fewer");

const groupProjects = new Set(["financial-statement-analysis", "siemens-corporate-finance"]);
for (const project of projects) {
  const html = read(`cases/${project.id}.html`);
  const schemaText = html.match(/<script type="application\/ld\+json">([^<]+)<\/script>/)?.[1];
  assert(Boolean(schemaText), `${project.id}: missing CreativeWork structured data`);
  if (!schemaText) continue;
  const schema = JSON.parse(schemaText);
  assert(schema["@type"] === "CreativeWork", `${project.id}: structured data must be CreativeWork`);
  if (groupProjects.has(project.id)) {
    assert(Boolean(schema.contributor) && !schema.author, `${project.id}: group work must use contributor, not sole author`);
  } else {
    assert(Boolean(schema.author), `${project.id}: missing author in structured data`);
  }
}

const retiredRoute = read("case-study.html");
assert(retiredRoute.includes("This project route has been retired."), "Generic case-study route must have a useful static fallback");
assert(retiredRoute.includes('<meta name="robots" content="noindex,follow">'), "Generic case-study route must remain noindex");

const referencedModelFiles = new Set(projects.flatMap((project) => project.images.map(([src]) => path.basename(src))));
const modelFiles = fs.readdirSync(path.join(root, "assets/models")).filter((name) => /\.(?:png|svg)$/i.test(name));
assert(modelFiles.length === referencedModelFiles.size, "Model directory contains unused or duplicate public images");
for (const name of modelFiles) assert(referencedModelFiles.has(name), `Unused public model image: ${name}`);

const pngDimensions = (relative) => {
  const file = fs.readFileSync(path.join(root, relative));
  return [file.readUInt32BE(16), file.readUInt32BE(20)];
};
for (const relative of ["assets/social-card.png", ...ids.map((id) => `assets/social/${id}.png`)]) {
  const [width, height] = pngDimensions(relative);
  assert(width === 1200 && height === 630, `${relative}: social card must be 1200 by 630`);
}

const textFiles = ["README.md", "index.html", "case-study.html", "404.html", "assets/js/projects.js", "assets/js/app.js", "assets/js/case-study.js", ...ids.map((id) => `cases/${id}.html`)];
const publicText = textFiles.map(read).join("\n");
for (const marker of ["Codex", "ChatGPT", "OpenAI", "AI-generated", "Illustrative Logistics Acquisition Underwriting", "22 dated case studies", "7 areas of finance"]) {
  assert(!publicText.toLowerCase().includes(marker.toLowerCase()), `Public text contains disallowed marker: ${marker}`);
}
assert(!publicText.includes("—"), "Public text contains an em dash");
assert(!publicText.includes("The workbook remains private. These images show the outputs cited in this case."), "Generic evidence copy remains");
assert(!publicText.includes("The complete Excel model is maintained privately."), "Generic workbook-access copy remains");

if (failures.length) {
  console.error(failures.map((failure) => `FAIL: ${failure}`).join("\n"));
  process.exit(1);
}

console.log(`PASS: ${projects.length} projects, 7 selected, ${publicHtmlFiles.length} public HTML files, unique metadata, current structured data and no unused model images.`);
