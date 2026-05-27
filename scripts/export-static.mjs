/**
 * Build the Next.js static export directly into docs/ for GitHub Pages.
 *
 * Next.js always writes its export to out/ (hardcoded; not configurable).
 * This script cleans docs/, runs next build, renames out/ → docs/, then
 * rewrites absolute /wyandanch-library/ paths in HTML to relative paths.
 *
 * Relative paths work everywhere: GitHub Pages, any static server, file://.
 */

import { spawnSync } from 'child_process';
import { existsSync, readdirSync, readFileSync, renameSync, rmSync, statSync, writeFileSync } from 'fs';
import { dirname, join, relative } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'out');
const docsDir = join(root, 'docs');
const basePath = '/wyandanch-library';

// Remove stale docs/ before building so there's no leftover content.
if (existsSync(docsDir)) {
  rmSync(docsDir, { recursive: true, force: true });
}

const nextBin = join(root, 'node_modules', 'next', 'dist', 'bin', 'next');
const result = spawnSync(process.execPath, [nextBin, 'build'], {
  cwd: root,
  stdio: 'inherit',
});
if (result.status !== 0) process.exit(result.status ?? 1);

if (!existsSync(outDir)) {
  console.error('Build failed: expected out/ after next build.');
  process.exit(1);
}

// Rename out/ → docs/ (atomic on same filesystem; out/ disappears).
renameSync(outDir, docsDir);
writeFileSync(join(docsDir, '.nojekyll'), '\n', 'utf8');

// Rewrite absolute /wyandanch-library/ paths in HTML files to relative paths.
// depth 0 (docs/foo.html)       → ./
// depth 1 (docs/read/foo.html)  → ../
// This makes docs/ work via file://, npx serve, or any static server,
// while continuing to work on GitHub Pages (relative paths work anywhere).
let rewriteCount = 0;
(function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) { walk(full); continue; }
    if (!entry.endsWith('.html')) continue;

    const depth = relative(docsDir, dirname(full)).split(/[/\\]/).filter(Boolean).length;
    const prefix = depth === 0 ? './' : '../'.repeat(depth);

    let html = readFileSync(full, 'utf8');
    // /wyandanch-library/foo  →  ./foo  or  ../foo
    html = html.replaceAll(basePath + '/', prefix);
    // /wyandanch-library  (no trailing slash, e.g. canonical href)  →  .  or  ..
    const escapedBase = basePath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    html = html.replace(new RegExp(escapedBase + '(?=["\'])', 'g'), prefix.replace(/\/$/, '') || '.');
    writeFileSync(full, html, 'utf8');
    rewriteCount++;
  }
})(docsDir);

console.log(`Exported static site to ${docsDir} (rewrote ${rewriteCount} HTML files)`);

