import { build } from 'esbuild';
import { copyFile } from 'node:fs/promises';
await build({
  entryPoints: ['src/shop-carousel.jsx'], bundle: true, minify: true,
  outfile: 'site/assets/shop-carousel.js', jsx: 'automatic',
  define: { 'process.env.NODE_ENV': '"production"' },
  target: ['es2020'], legalComments: 'linked',
  banner: { js: '/*! CircularCarousel by React Bits / David Haz. MIT + Commons Clause. See react-bits-license.txt. */' }
});

await copyFile('src/components/CircularCarousel/LICENSE.md', 'site/assets/react-bits-license.txt');
