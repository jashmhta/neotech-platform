import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero">
      <div 
        className="cursor-glow" 
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200
        }}
      />
      
      <nav className="navbar">
        <div className="nav-brand">
          <span className="logo">NEOTECH</span>
        </div>
        <div className="nav-links">
          <a href="#home">HOME</a>
          <a href="#features">FEATURES</a>
          <a href="#technology">TECHNOLOGY</a>
          <a href="#community">COMMUNITY</a>
        </div>
        <button className="cta-button">LAUNCH APP</button>
      </nav>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            THE FUTURE OF
            <br />
            <span className="gradient-text">DECENTRALIZED</span>
            <br />
            TECHNOLOGY
          </h1>
          <p className="hero-subtitle">
            QUANTUM-RESISTANT • INFINITELY SCALABLE • ZERO-KNOWLEDGE PRIVACY
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">EXPLORE PLATFORM</button>
            <button className="secondary-btn">VIEW WHITEPAPER</button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="floating-elements">
            <div className="element element-1"></div>
            <div className="element element-2"></div>
            <div className="element element-3"></div>
            <div className="element element-4"></div>
            <div className="element element-5"></div>
          </div>
          <div className="neural-network">
            <div className="node node-1"></div>
            <div className="node node-2"></div>
            <div className="node node-3"></div>
            <div className="connection connection-1"></div>
            <div className="connection connection-2"></div>
            <div className="connection connection-3"></div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span>SCROLL TO EXPLORE</span>
      </div>
    </section>
  );
};

export default Hero;