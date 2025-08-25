// pages/api/where.js
export default function handler(req, res) {
  const fs = require('fs');
  const path = require('path');

  const cwd = process.cwd();                     // raiz do projeto que o Next está usando
  const publicDir = path.join(cwd, 'public');    // pasta public que o servidor enxerga
  let listing = [];

  try {
    listing = fs.readdirSync(publicDir, { withFileTypes: true })
      .map(d => (d.isDirectory() ? d.name + '/' : d.name));
  } catch (e) {
    listing = [`(erro lendo ${publicDir}): ${e.message}`];
  }

  res.status(200).json({
    cwd,
    publicDir,
    publicContents: listing,
    brandingContents: (() => {
      try {
        return fs.readdirSync(path.join(publicDir, 'branding'));
      } catch {
        return '(sem pasta public/branding)';
      }
    })()
  });
}
