import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const codeSnippets = [
    "const future = await build();",
    "import { Magic } from 'universe';",
    "<Akash />",
    "while(true) { elevate(); }",
    "git push origin master",
    "npm install reality-check",
    "if (gravity) { defy(); }",
    "console.log('Floating...');",
    "display: flex; flex-direction: up;",
    "justify-content: space-between;",
    "array.reduce((acc, curr) => acc + curr)",
    "return <Dream />;"
];

const Background = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="background-container" aria-hidden="true">
            {/* Dynamic Gradient Background */}
            <div
                className="mesh-gradient"
                style={{
                    background: `
            radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, var(--accent-primary) 0%, transparent 20%),
            radial-gradient(circle at ${1200 - mousePosition.x}px ${800 - mousePosition.y}px, var(--accent-secondary) 0%, transparent 20%)
          `,
                    opacity: 0.15,
                    transition: 'background 0.2s ease'
                }}
            />

            {/* Antigravity Blobs */}
            <motion.div
                className="blob blob-purple"
                animate={{
                    y: [0, -50, 0],
                    x: [0, 30, 0],
                    scale: [1, 1.1, 1],
                    rotate: [0, 20, 0]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="blob blob-pink"
                animate={{
                    y: [0, 60, 0],
                    x: [0, -40, 0],
                    scale: [1, 1.2, 1],
                    rotate: [0, -15, 0]
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Floating Code Snippets */}
            {codeSnippets.map((snippet, index) => (
                <motion.div
                    key={index}
                    initial={{
                        x: (index * 173) % 1200,
                        y: 900,
                        opacity: 0
                    }}
                    animate={{
                        y: -100,
                        opacity: [0, 0.8, 0.8, 0] // Increased opacity
                    }}
                    transition={{
                        duration: 25 + (index * 7) % 15, // Slower duration
                        repeat: Infinity,
                        ease: "linear",
                        delay: (index * 3) % 20
                    }}
                    className="code-snippet"
                    style={{
                        left: `${(index * 17) % 90}%`,
                        fontSize: `${1 + (index % 3) * 0.2}rem`, // Slightly larger font
                    }}
                >
                    {snippet}
                </motion.div>
            ))}

            {/* Grid Overlay Patches */}
            <div
                className="grid-overlay"
                style={{
                    top: '70%',
                    left: '85%',
                    width: '150px',
                    height: '150px',
                    maskImage: 'radial-gradient(circle, black 30%, transparent 60%)',
                    WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 60%)',
                    backgroundImage: 'linear-gradient(var(--text-secondary) 1px, transparent 1px), linear-gradient(90deg, var(--text-secondary) 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                    opacity: 0.08
                }}
            />
            <div
                className="grid-overlay"
                style={{
                    bottom: '20%',
                    right: '10%',
                    width: '350px',
                    height: '350px',
                    maskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
                    WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
                    backgroundImage: 'linear-gradient(var(--text-secondary) 1px, transparent 1px), linear-gradient(90deg, var(--text-secondary) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    opacity: 0.08
                }}
            />
        </div>
    );
};

export default Background;
