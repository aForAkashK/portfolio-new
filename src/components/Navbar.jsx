import React, { useEffect, useState } from 'react';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ toggleTheme, isDark }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Blog', href: '#blog' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <a href="#home" className="logo">
                    Port<span className="gradient-text">folio.</span>
                </a>

                {/* Desktop Menu */}
                <div className="desktop-menu">
                    {links.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link">
                            {link.name}
                        </a>
                    ))}
                    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button className="resume-btn">
                        Resume <Download size={16} />
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="mobile-actions">
                    <button onClick={toggleTheme} className="theme-toggle mobile-theme-toggle" aria-label="Toggle Theme">
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle mobile menu">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mobile-menu glass-card"
                    >
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="mobile-nav-link"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="resume-btn mobile-resume-btn">
                            Resume <Download size={16} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
