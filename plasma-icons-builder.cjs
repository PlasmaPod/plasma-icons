const fs = require("fs");
const path = require("path");

const ICONS_DIR = path.join(__dirname, "icon-svg");
const DIST_DIR = path.join(__dirname, "dist");
if (!fs.existsSync(DIST_DIR)) fs.mkdirSync(DIST_DIR);

function extractPath(svgContent) {
  const m = svgContent.match(/<path[^>]*d="([^"]+)"/);
  return m ? m[1] : "";
}

function extractViewBox(svgContent) {
  const m = svgContent.match(/<svg.+?viewBox="([^"]+)"/);
  if (m) {
    const parts = m[1].split(" ").map(Number);
    if (parts.length === 4) {
      return parts;
    } else {
      throw new Error("Invalid viewBox format: " + m[1]);
    }
  }
  // Fallback to default viewBox if not found
  return [0, 0, 24, 24];
}

const files = fs.readdirSync(ICONS_DIR).filter(f => f.endsWith(".svg"));

let output = "var icons = {\n";

files.forEach(file => {
  try {
    const name = path.basename(file, ".svg");
    const svgContent = fs.readFileSync(path.join(ICONS_DIR, file), "utf8");
    const pathData = extractPath(svgContent);
    const viewBox = extractViewBox(svgContent);

    output += `  "${name}":[${viewBox.join(",")},${JSON.stringify(pathData)}],\n`;
  } catch (err) {
    console.log(`❌ Failed to process ${file}: ${err.message}`);
  }
});

output += "};\n\n";

output += `
async function getIcon(name) {
  if (!(name in icons)) {
    console.log(\`Icon "\${name}" not available\`);
    return '';
  }

  var svgDef = icons[name];
  var primaryPath = svgDef[4];
  return {
    path: primaryPath,
    viewBox: svgDef[0] + " " + svgDef[1] + " " + svgDef[2] + " " + svgDef[3]
  }
}

async function getIconList() {
  return Object.entries(icons).map(([icon]) => ({
    name: icon
  }));
}

window.customIconsets = window.customIconsets || {};
window.customIconsets["plasma"] = getIcon;

window.customIcons = window.customIcons || {};
window.customIcons["plasma"] = { getIcon, getIconList };
`;

fs.writeFileSync(path.join(DIST_DIR, "plasma-icons.js"), output);

console.log("✅ Build completed");
console.log("📁 Generated file: dist/plasma-icons.js");
console.log("🔢 Total icons:", files.length);


