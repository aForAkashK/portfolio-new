import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Contact from './components/Contact';
import AllArticles from './pages/AllArticles';

import { Helmet } from 'react-helmet-async';

// Home page component with all sections
const HomePage = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Services />
    <Projects />
    <Experience />
    <Blog />
    <Contact />
  </>
);

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check system preference or local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(systemPrefersDark);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Helmet>
          <title>Akash Kumar | Full Stack Developer & Mobile App Expert</title>
          <meta name="description" content="Portfolio of Akash Kumar, a Full Stack Developer with 4.5+ years of experience in React, React Native, Next.js, and Node.js. Specializing in high-performance web and mobile applications." />
          <meta name="keywords" content="Akash Kumar, Full Stack Developer, React Developer, React Native Developer, Next.js, Node.js, Web Development, Mobile App Development, Portfolio" />
          <meta name="author" content="Akash Kumar" />
          <link rel="canonical" href="https://your-portfolio-url.com" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://your-portfolio-url.com" />
          <meta property="og:title" content="Akash Kumar | Full Stack Developer" />
          <meta property="og:description" content="Experienced Full Stack Developer building scalable web and mobile applications with modern technologies." />
          <meta property="og:image" content="https://your-portfolio-url.com/og-image.jpg" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://your-portfolio-url.com" />
          <meta property="twitter:title" content="Akash Kumar | Full Stack Developer" />
          <meta property="twitter:description" content="Experienced Full Stack Developer building scalable web and mobile applications with modern technologies." />
          <meta property="twitter:image" content="https://your-portfolio-url.com/og-image.jpg" />
        </Helmet>
        <Background />
        <Navbar toggleTheme={toggleTheme} isDark={isDark} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles" element={<AllArticles />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="container">
            <p>© {new Date().getFullYear()} Portfolio. Built with React & Framer Motion.</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
