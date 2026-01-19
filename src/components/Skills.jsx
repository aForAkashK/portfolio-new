import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    "React", "JavaScript", "TypeScript", "Node.js",
    "HTML5", "CSS3", "Tailwind CSS", "Git",
    "Next.js", "GraphQL", "MongoDB", "PostgreSQL"
];

const Skills = () => {
    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
                <ul className="skills-grid">
                    {skills.map((skill, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="glass-card skill-card"
                        >
                            {skill}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Skills;
