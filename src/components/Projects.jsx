import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "SecureKey",
        description: "A secure password manager that stores all your credentials locally on your device. Features encrypted storage, biometric authentication, and a clean intuitive interface for managing passwords safely.",
        tags: ["React Native", "AsyncStorage", "Encryption", "Biometrics"],
        image: "/projects/securekey.png"
    },
    {
        title: "LinkSafe",
        description: "A beautiful bookmark manager that stores your favorite links locally with an elegant UI. Organize links with categories, preview thumbnails, and quick search functionality.",
        tags: ["React Native", "Local Storage", "Link Preview", "Categories"],
        image: "/projects/linksafe.png"
    },
    {
        title: "Groupify",
        description: "A real-time group collaboration app for managing tasks and splitting expenses. Create groups, assign tasks with live updates, and track shared expenses like Splitwise.",
        tags: ["React Native", "Firebase", "Real-time Sync", "Expense Tracking"],
        image: "/projects/groupify.png"
    },
    {
        title: "Dear Future",
        description: "Write heartfelt messages to be delivered in the future. Schedule letters to yourself or loved ones, and receive them on special dates with beautiful notification experiences.",
        tags: ["React Native", "Firebase", "Push Notifications", "Scheduling"],
        image: "/projects/dearfuture.png"
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
