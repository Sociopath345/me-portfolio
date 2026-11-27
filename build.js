const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Copy index.html to public
fs.copyFileSync(path.join(__dirname, 'index.html'), path.join(publicDir, 'index.html'));

// Copy root favicons to public
if (fs.existsSync(path.join(__dirname, 'favicon.ico'))) {
  fs.copyFileSync(path.join(__dirname, 'favicon.ico'), path.join(publicDir, 'favicon.ico'));
}

// Copy SEO essentials (sitemap.xml, robots.txt)
if (fs.existsSync(path.join(__dirname, 'sitemap.xml'))) {
  fs.copyFileSync(path.join(__dirname, 'sitemap.xml'), path.join(publicDir, 'sitemap.xml'));
}
if (fs.existsSync(path.join(__dirname, 'robots.txt'))) {
  fs.copyFileSync(path.join(__dirname, 'robots.txt'), path.join(publicDir, 'robots.txt'));
}

// Copy Google site verification files to public
const rootFiles = fs.readdirSync(__dirname);
for (const file of rootFiles) {
  if (file.startsWith('google') && file.endsWith('.html')) {
    fs.copyFileSync(path.join(__dirname, file), path.join(publicDir, file));
  }
}

// Copy directory recursively
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyDir(path.join(__dirname, 'Frontend'), path.join(publicDir, 'Frontend'));
copyDir(path.join(__dirname, 'photos'), path.join(publicDir, 'photos'));
if (fs.existsSync(path.join(__dirname, 'Files'))) {
  copyDir(path.join(__dirname, 'Files'), path.join(publicDir, 'Files'));
}

console.log('Build completed: public directory successfully generated for Vercel.');
