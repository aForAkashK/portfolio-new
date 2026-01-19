import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Globe, Code } from 'lucide-react';

const services = [
    {
        icon: <Globe size={40} />,
        title: "Web Development",
        description: "Building responsive and performant web applications using modern technologies like React and Node.js."
    },
    {
        icon: <Smartphone size={40} />,
        title: "Mobile Development",
        description: "Creating native-like mobile experiences for iOS and Android using React Native."
    },
    {
        icon: <Code size={40} />,
        title: "UI/UX Design",
        description: "Designing intuitive and beautiful user interfaces that provide great user experiences."
    }
];

const Services = () => {
    return (
        <section id="services" className="section">
            <div className="container">
                <h2 className="section-title">My <span className="gradient-text">Services</span></h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card service-card"
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
