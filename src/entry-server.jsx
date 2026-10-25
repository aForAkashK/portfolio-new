import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MotionConfig } from 'framer-motion';
import App from './App';
import { projects } from './data/projects';
export const routes = ['/', '/articles', ...projects.map(project => `/projects/${project.slug}`)];
export function render(url) {
    const context = {};
    HelmetProvider.canUseDOM = false;
    const html = renderToString(<HelmetProvider context={context}><StaticRouter location={url}><MotionConfig reducedMotion="always"><App /></MotionConfig></StaticRouter></HelmetProvider>);
    const { helmet } = context;
    return { html, head: ['title', 'meta', 'link', 'script'].map(key => helmet[key].toString()).join('\n') };
}
