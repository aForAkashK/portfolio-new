import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [statusMessage, setStatusMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: 'c3700df6-1b72-4dfb-862e-c847af1c7036',
                    name: formState.name,
                    email: formState.email,
                    message: formState.message,
                    subject: `Portfolio Contact from ${formState.name}`,
                    from_name: 'Portfolio Website'
                })
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setStatusMessage('Thank you! Your message has been sent successfully.');
                setFormState({ name: '', email: '', message: '' });
                // Reset status after 5 seconds
                setTimeout(() => {
                    setStatus('idle');
                    setStatusMessage('');
                }, 5000);
            } else {
                throw new Error(result.message || 'Something went wrong');
            }
        } catch (error) {
            setStatus('error');
            setStatusMessage('Oops! Something went wrong. Please try again.');
            setTimeout(() => {
                setStatus('idle');
                setStatusMessage('');
            }, 5000);
        }
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
                        initial={false}
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
                                    <a href="tel:+918209200000">+91 82092*****</a>
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
                        initial={false}
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
                                disabled={status === 'loading'}
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
                                disabled={status === 'loading'}
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
                                disabled={status === 'loading'}
                            ></textarea>
                        </div>

                        {/* Status Message */}
                        {statusMessage && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`form-status ${status}`}
                            >
                                {status === 'success' && <CheckCircle size={18} />}
                                {status === 'error' && <AlertCircle size={18} />}
                                <span>{statusMessage}</span>
                            </motion.div>
                        )}

                        <button
                            type="submit"
                            className="submit-btn"
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? (
                                <>
                                    <Loader size={18} className="spin" /> Sending...
                                </>
                            ) : (
                                <>
                                    Send Message <Send size={18} />
                                </>
                            )}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

