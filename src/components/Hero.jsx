import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container hero-content">
                <motion.div
                    initial={false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-text"
                >
                    <span className="hero-badge">Available for work</span>
                    <h1 className="hero-title">
                        Akash Kumar <br />
                        <span className="gradient-text">Full Stack &amp; React Native Developer</span>
                    </h1>
                    <p className="hero-subtitle">
                        I build web and mobile applications with React, React Native, Next.js, and Node.js.
                        Explore my work, including Dear Future, SecureKey, and the Rulebreaker arcade.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="primary-btn">
                            View Projects <ArrowRight size={20} />
                        </a>
                        <div className="social-links">
                            <a target='_blank' href="https://github.com/aForAkashK" className="social-link"><Github size={24} /></a>
                            <a target='_blank' href="https://www.linkedin.com/in/akash-kumar-4b42541b2" className="social-link "><Linkedin size={24} /></a>
                            <a target='_blank' href="mailto:mailmeatakashkr@gmail.com" className="social-link"><Mail size={24} /></a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
