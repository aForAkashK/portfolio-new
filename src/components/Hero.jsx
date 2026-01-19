import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-text"
                >
                    <span className="hero-badge">Available for work</span>
                    <h1 className="hero-title">
                        Building Digital <br />
                        <span className="gradient-text">Experiences</span>
                    </h1>
                    <p className="hero-subtitle">
                        I'm a Full Stack Developer specializing in building exceptional digital experiences.
                        Currently focused on building accessible, human-centered products.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="primary-btn">
                            View Projects <ArrowRight size={20} />
                        </a>
                        <div className="social-links">
                            <a href="#" className="social-link"><Github size={24} /></a>
                            <a target='_blank' href="https://www.linkedin.com/in/akash-kumar-4b42541b2" className="social-link "><Linkedin size={24} /></a>
                            <a href="mailto:mailmeatakashkr@gmail.com" className="social-link"><Mail size={24} /></a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
