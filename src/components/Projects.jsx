import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-featured online store built with React, Node.js, and MongoDB. Includes payment integration and admin dashboard.",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
    },
    {
        title: "Task Management App",
        description: "A collaborative task manager with real-time updates using Socket.io and React.",
        tags: ["React", "Socket.io", "Express", "Redux"],
        image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80"
    },
    {
        title: "Weather Dashboard",
        description: "A beautiful weather application providing detailed forecasts and historical data visualization.",
        tags: ["React", "Chart.js", "OpenWeatherMap API"],
        image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card project-card"
                        >
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href="#" className="project-link" aria-label={`View ${project.title} source code`}><Github /></a>
                                        <a href="#" className="project-link" aria-label={`View ${project.title} live demo`}><ExternalLink /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
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
