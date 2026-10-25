# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## SEO and deployment

`npm run build` produces static HTML for the homepage, articles index, and every
project in `src/data/projects.js`. It also generates `dist/sitemap.xml`,
`dist/robots.txt`, and a noindex `dist/404.html`. Deploy the `dist` directory with
`npm run build` as the build command. Each project URL must serve its own generated
HTML file; avoid rewriting every request to the homepage.

The production origin is `https://portfolio-akash-kr.vercel.app`, configured in
`src/components/Seo.jsx` and `scripts/prerender.mjs`. Update both if the domain
changes. Project copy and links live in `src/data/projects.js` and
`src/pages/ProjectDetail.jsx`. Articles are fetched from Medium in the browser;
the article feed is not included in the static HTML.

After deployment, verify the site in Google Search Console, submit `/sitemap.xml`,
and inspect `/`, `/articles`, and project URLs using URL Inspection. Check PageSpeed
Insights against the deployed site. Search Console ownership must be completed
using your Google account; this repository does not contain verification tokens.
