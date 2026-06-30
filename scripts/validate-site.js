const fs = require("fs");
const path = require("path");

const root = process.cwd();
const requiredFiles = [
  "index.html",
  "styles.css",
  "scripts.js",
  "assets/chrome-qa-dashboard.png",
];

const requiredSnippets = [
  ["index.html", "AI Dataset Quality"],
  ["index.html", "Dataset Quality Management Toolkit"],
  ["index.html", "Human-in-the-Loop Pre-labeling Pipeline"],
  ["index.html", "aria-expanded"],
  ["styles.css", "@media (prefers-reduced-motion: reduce)"],
  ["scripts.js", "IntersectionObserver"],
];

let failed = false;

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) {
    console.error(`Missing required file: ${file}`);
    failed = true;
  }
}

for (const [file, snippet] of requiredSnippets) {
  const target = path.join(root, file);
  const content = fs.existsSync(target) ? fs.readFileSync(target, "utf8") : "";
  if (!content.includes(snippet)) {
    console.error(`Missing required snippet in ${file}: ${snippet}`);
    failed = true;
  }
}

const html = fs.existsSync(path.join(root, "index.html"))
  ? fs.readFileSync(path.join(root, "index.html"), "utf8")
  : "";
const ids = Array.from(html.matchAll(/\sid="([^"]+)"/g), (match) => match[1]);
const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);

if (duplicateIds.length) {
  console.error(`Duplicate ids found: ${[...new Set(duplicateIds)].join(", ")}`);
  failed = true;
}

if (failed) {
  process.exit(1);
}

console.log("Static site validation passed.");
