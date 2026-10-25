import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { render, routes } from '../dist-ssr/entry-server.js';
const origin = 'https://portfolio-akash-kr.vercel.app';
const template = await readFile('dist/index.html', 'utf8');
for (const route of [...routes, '/404']) {
    const { html, head } = render(route);
    const page = template.replace(/<title>.*?<\/title>/s, '').replace('</head>', `${head}</head>`).replace('<div id="root"></div>', `<div id="root">${html}</div>`);
    const destination = route === '/' ? 'dist/index.html' : route === '/404' ? 'dist/404.html' : `dist${route}.html`;
    await mkdir(destination.slice(0, destination.lastIndexOf('/')), { recursive: true });
    await writeFile(destination, page);
}
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(route => `<url><loc>${origin}${route}</loc></url>`).join('')}</urlset>\n`);
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);
await rm('dist-ssr', { recursive: true });
console.log(`Pre-rendered ${routes.length} pages and a noindex 404; generated sitemap and robots.txt.`);
