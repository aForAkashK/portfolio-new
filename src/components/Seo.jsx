import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { projects } from '../data/projects';

export const siteUrl = 'https://portfolio-akash-kr.vercel.app';
export default function Seo() {
    const { pathname } = useLocation();
    const path = pathname.replace(/\/$/, '') || '/';
    const project = projects.find(item => path === `/projects/${item.slug}`);
    const isHome = path === '/';
    const isArticles = path === '/articles';
    const missing = !isHome && !isArticles && !project;
    const title = project ? `${project.title} | Akash Kumar’s Projects` : isArticles ? 'Development Articles | Akash Kumar' : missing ? 'Page Not Found | Akash Kumar' : 'Akash Kumar | Full Stack & React Native Developer';
    const description = project ? project.description : isArticles ? 'Explore articles by Akash Kumar about software development, web applications, and mobile development.' : 'Akash Kumar is a Full Stack and React Native developer building web and mobile apps with React, Next.js, and Node.js. Explore projects and get in touch.';
    const url = `${siteUrl}${isHome ? '/' : path}`;
    const image = `${siteUrl}/og-image.png`;
    const person = { '@type': 'Person', '@id': `${siteUrl}/#person`, name: 'Akash Kumar', url: `${siteUrl}/`, jobTitle: 'Full Stack & React Native Developer', sameAs: ['https://github.com/aForAkashK', 'https://www.linkedin.com/in/akash-kumar-4b42541b2'], knowsAbout: ['React', 'React Native', 'Next.js', 'Node.js'] };
    const schema = { '@context': 'https://schema.org', '@graph': [person, { '@type': project ? 'WebPage' : isArticles ? 'CollectionPage' : 'ProfilePage', '@id': url, url, name: title, description, ...(isHome ? { mainEntity: { '@id': person['@id'] } } : project ? { about: { '@type': 'SoftwareApplication', name: project.title, description, image: `${siteUrl}${project.image}`, ...(project.liveUrl ? { url: project.liveUrl } : {}), author: { '@id': person['@id'] } } } : {}) }] };
    return <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="Akash Kumar" />
        <meta name="robots" content={missing ? 'noindex, follow' : 'index, follow'} />
        {!missing && <link rel="canonical" href={url} />}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Akash Kumar" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:image:alt" content="Akash Kumar — Full Stack & React Native Developer" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        {!missing && <script type="application/ld+json">{JSON.stringify(schema).replace(/</g, '\\u003c')}</script>}
    </Helmet>;
}
