import { readdirSync, readFileSync, statSync, writeFileSync } from 'fs';
import { dirname, join, relative } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const docsDir = join(root, 'docs');
const basePath = '/wyandanch-library';
let count = 0;

(function walk(dir) {
  for (const e of readdirSync(dir)) {
    const full = join(dir, e);
    if (statSync(full).isDirectory()) { walk(full); continue; }
    if (!e.endsWith('.html')) continue;
    const depth = relative(docsDir, dirname(full)).split(/[/\\]/).filter(Boolean).length;
    const prefix = depth === 0 ? './' : '../'.repeat(depth);
    let html = readFileSync(full, 'utf8');
    html = html.replaceAll(basePath + '/', prefix);
    const esc = basePath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    html = html.replace(new RegExp(esc + '(?=["\'])', 'g'), prefix.replace(/\/$/, '') || '.');
    writeFileSync(full, html, 'utf8');
    count++;
  }
})(docsDir);

console.log(`Rewrote ${count} HTML files`);
