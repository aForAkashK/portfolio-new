import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
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

import Seo from './components/Seo';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';

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
      <div className="app">
        <Seo />
        <Background />
        <Navbar toggleTheme={toggleTheme} isDark={isDark} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles" element={<AllArticles />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer className="footer">
          {/* //suggest a small change in footer */}
          <div className="container">
            <p>© {new Date().getFullYear()} Portfolio. Built with ❤️ by Akash Kumar</p>
          </div>
        </footer>
      </div>
  );
}

export default App;
