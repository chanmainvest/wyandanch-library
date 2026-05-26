import fs from 'fs';

const src = fs.readFileSync('lib/curriculum.ts', 'utf8');
const items = [];
const parts = src.split("slug: '").slice(1);
for (const p of parts) {
  if (!p.includes('tracks:')) continue;
  const slug = p.split("'")[0];
  const titleM = p.match(/title: '([^']+)'/);
  const descM = p.match(/description:\s*\n\s*'([^']+)'/);
  if (titleM && descM) items.push({ slug, title: titleM[1], desc: descM[1] });
}
console.log(JSON.stringify(items, null, 2));
