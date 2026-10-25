import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.slug}
                            initial={false}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card project-card"
                        >
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`Open ${project.title}`}><ExternalLink /></a>}
                                    </div>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title"><Link to={`/projects/${project.slug}`}>{project.title}</Link></h3>
                                <p className="project-desc">{project.description}</p>
                                <Link className="project-details-link" to={`/projects/${project.slug}`}>Explore {project.title} →</Link>
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
