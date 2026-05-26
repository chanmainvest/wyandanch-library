/**
 * Build the Next.js app and copy the static export into docs/ for GitHub Pages.
 *
 * Next.js writes the export to out/ (see output: 'export' in next.config.mjs).
 * The docs/ folder is the publish root for github.io — HTML/CSS/JS only.
 */

import { spawnSync } from 'child_process';
import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'out');
const docsDir = join(root, 'docs');

function runNextBuild() {
  const nextBin = join(root, 'node_modules', 'next', 'dist', 'bin', 'next');
  const result = spawnSync(process.execPath, [nextBin, 'build'], {
    cwd: root,
    stdio: 'inherit',
  });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

function replaceDocsFromOut() {
  if (!existsSync(outDir)) {
    console.error('Static export missing: expected out/ after next build.');
    process.exit(1);
  }

  if (existsSync(docsDir)) {
    rmSync(docsDir, { recursive: true, force: true });
  }
  mkdirSync(docsDir, { recursive: true });

  cpSync(outDir, docsDir, { recursive: true });
  writeFileSync(join(docsDir, '.nojekyll'), '\n', 'utf8');

  console.log(`Exported static site to ${docsDir}`);
}

runNextBuild();
replaceDocsFromOut();
