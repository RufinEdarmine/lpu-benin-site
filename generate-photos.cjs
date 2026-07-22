const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'photos');
const exts = ['.jpg', '.jpeg', '.png', '.webp'];

const files = fs.readdirSync(dir)
  .filter(f => exts.includes(path.extname(f).toLowerCase()))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

const lines = files.map(f => `  { src: "/photos/${f}", alt: "Photo à venir" },`);
const output = `const photos = [\n${lines.join('\n')}\n];`;

console.log(output);
fs.writeFileSync('photos-array.txt', output);
console.log('\n✅ Résultat aussi copié dans photos-array.txt');