import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formState);
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
                <div className="contact-container">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="contact-info"
                    >
                        <h3 className="contact-subtitle">Let's Talk</h3>
                        <p className="contact-desc">
                            I'm currently available for freelance projects and full-time opportunities.
                            If you have a project that needs some creative touch, I'd love to hear about it.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="contact-icon"><Mail size={20} /></div>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:mailmeatakashkr@gmail.com">mailmeatakashkr@gmail.com</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon"><Phone size={20} /></div>
                                <div>
                                    <h4>Phone</h4>
                                    <a href="tel:+1234567890">+91 82092*****</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon"><MapPin size={20} /></div>
                                <div>
                                    <h4>Location</h4>
                                    <p>Hyderabad, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="glass-card contact-form"
                        onSubmit={handleSubmit}
                    >
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formState.name}
                                onChange={handleChange}
                                required
                                className="form-input"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formState.email}
                                onChange={handleChange}
                                required
                                className="form-input"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formState.message}
                                onChange={handleChange}
                                required
                                className="form-input form-textarea"
                                placeholder="Tell me about your project..."
                                rows="5"
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn">
                            Send Message <Send size={18} />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
