import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import App from '../App';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

const routes = [
  '/',
  '/works',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
  '/works/caption-hype',
  '/works/caption-hype/privacy',
  '/works/caption-hype/terms',
];

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

for (const route of routes) {
  const helmetContext: { helmet?: HelmetServerState } = {};

  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={route}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;
  const headTags = helmet
    ? [helmet.title.toString(), helmet.meta.toString(), helmet.link.toString(), helmet.script.toString()].join('\n')
    : '';

  let html = template
    .replace(/<title>.*?<\/title>\s*<meta name="description"[^>]*\/>/s, headTags)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  const outDir = route === '/' ? distDir : path.join(distDir, route);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  console.log(`Prerendered ${route} -> ${path.relative(distDir, path.join(outDir, 'index.html')) || 'index.html'}`);
}
