import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        role: "Software Developer",
        company: "Xebia It Architect",
        period: "Jul 2024 - Present",
        description: "Spearheaded the development of a secure, high-performance mobile banking application using React Native. Implemented critical financial features, optimized app performance, and ensured strict security compliance."
    },
    {
        role: "Frontend Developer",
        company: "Ne - Group",
        period: "Oct 2021 - Jul 2024",
        description: "Developed and maintained websites using React and Node.js. Collaborated with designers to implement pixel-perfect UIs."
    },
    {
        role: "Full stack Intern",
        company: "C360 Softwares",
        period: "Mar 2021 - Sep 2021",
        description: "Assisted in the development of the main product. Fixed bugs and implemented small features."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="timeline-item"
                        >
                            <div className="timeline-dot"></div>
                            <div className="glass-card timeline-content">
                                <div className="timeline-header">
                                    <h3 className="timeline-role">
                                        <Briefcase size={18} style={{ display: 'inline-block', marginRight: '0.5rem', color: 'var(--accent-primary)' }} />
                                        {exp.role}
                                    </h3>
                                    <span className="timeline-company">{exp.company}</span>
                                </div>
                                <div className="timeline-period">
                                    <Calendar size={14} /> {exp.period}
                                </div>
                                <p className="timeline-desc">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
