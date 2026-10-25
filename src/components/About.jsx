import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <motion.div
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="about-content"
                >
                    <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
                    <div className="glass-card about-card">
                        <p className="about-text">
                            With over 4.5 years of experience in the software industry, I am a passionate developer specializing in building high-quality mobile and web applications. My expertise lies in the React ecosystem, including React.js, React Native, and Next.js.
                        </p>
                        <p className="about-text">
                            I thrive on solving complex problems and creating seamless user experiences across platforms. Whether it's crafting a responsive web app or a performant mobile application, I bring a depth of knowledge and a commitment to excellence to every project.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
