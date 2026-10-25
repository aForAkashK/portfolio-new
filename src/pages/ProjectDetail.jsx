import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import NotFound from './NotFound';

const details = {
    'dear-future': { purpose: 'Dear Future makes it possible to write a message today and revisit it later. It is designed for personal reflections and letters to loved ones on meaningful dates.', features: ['Write letters to yourself or loved ones.', 'Schedule messages for a future date.', 'Receive notifications when scheduled messages arrive.'] },
    rulebreaker: { purpose: 'Rulebreaker brings three different mental challenges into one browser arcade. Each game asks players to question their first instinct and adapt as they play.', features: ['Pattern Break: read the rule and find the exception.', 'Reverse Reflex: follow the command unless the rule flips.', 'Memory Shift: remember the board and identify what changed.', 'Return for another run and challenge your personal best.'] },
    securekey: { purpose: 'SecureKey brings password management to a mobile interface, with credentials stored locally on the device and features focused on secure access.', features: ['Manage credentials in one place.', 'Store passwords locally with encrypted storage.', 'Use biometric authentication to access credentials.'] },
    linksafe: { purpose: 'LinkSafe helps users keep useful links organized on their device. Categories and search make saved bookmarks easier to find again.', features: ['Save and organize bookmarks locally.', 'Group links into categories.', 'Preview links and search saved bookmarks.'] },
    groupify: { purpose: 'Groupify combines shared tasks and expenses in a group workspace. It helps members coordinate responsibilities and keep track of shared costs.', features: ['Create groups and assign tasks.', 'Keep tasks updated with real-time synchronization.', 'Track shared expenses alongside group work.'] },
};
export default function ProjectDetail() {
    const { slug } = useParams();
    const project = projects.find(item => item.slug === slug);
    if (!project) return <NotFound />;
    const detail = details[slug];
    return <article className="project-detail container">
        <Link className="back-link" to="/#projects">← All projects</Link>
        <h1>{project.title}</h1>
        <p className="project-intro">{project.description}</p>
        <img className="project-detail-image" src={project.image} alt={`${project.title} application preview`} width="1280" height="720" />
        <section><h2>About the project</h2><p>{detail.purpose}</p></section>
        <section><h2>Key features</h2><ul>{detail.features.map(feature => <li key={feature}>{feature}</li>)}</ul></section>
        <section><h2>Project highlights</h2><div className="project-tags">{project.tags.map(tag => <span className="project-tag" key={tag}>{tag}</span>)}</div></section>
        {project.liveUrl && <a className="primary-btn" href={project.liveUrl} target="_blank" rel="noopener noreferrer">{project.liveUrl.includes('play.google.com') ? 'View on Google Play' : 'Play Rulebreaker'} ↗</a>}
        <section><h2>Explore more projects</h2><div className="related-projects">{projects.filter(item => item.slug !== slug).map(item => <Link key={item.slug} to={`/projects/${item.slug}`}>{item.title} →</Link>)}</div></section>
        <Link className="back-link" to="/#contact">Discuss a web or mobile app project →</Link>
    </article>;
}
