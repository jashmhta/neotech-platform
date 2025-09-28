import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      title: "QUANTUM SECURITY",
      description: "Post-quantum cryptography ensures your assets remain secure against future quantum computing threats with military-grade encryption.",
      icon: "🔐",
      gradient: "linear-gradient(45deg, #8a2be2, #00ffff)"
    },
    {
      title: "INFINITE SCALABILITY",
      description: "Revolutionary sharding technology processes millions of transactions per second with zero congestion and minimal fees.",
      icon: "⚡",
      gradient: "linear-gradient(45deg, #00ffff, #ff6b6b)"
    },
    {
      title: "ZERO-KNOWLEDGE PRIVACY",
      description: "Complete transaction privacy using advanced zk-SNARKs while maintaining full transparency and auditability.",
      icon: "👁️",
      gradient: "linear-gradient(45deg, #ff6b6b, #8a2be2)"
    },
    {
      title: "AI-POWERED GOVERNANCE",
      description: "Smart contract governance powered by machine learning algorithms for optimal decision making and resource allocation.",
      icon: "🤖",
      gradient: "linear-gradient(45deg, #8a2be2, #ff6b6b)"
    },
    {
      title: "CROSS-CHAIN INTEROPERABILITY",
      description: "Seamlessly connect with any blockchain network through our universal bridge protocol and atomic swaps.",
      icon: "🌐",
      gradient: "linear-gradient(45deg, #00ffff, #8a2be2)"
    },
    {
      title: "SUSTAINABLE CONSENSUS",
      description: "Energy-efficient proof-of-stake mechanism that reduces carbon footprint by 99.9% compared to traditional mining.",
      icon: "🌱",
      gradient: "linear-gradient(45deg, #ff6b6b, #00ffff)"
    }
  ];

  return (
    <section className="features" id="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">
            REVOLUTIONARY
            <br />
            <span className="gradient-text">TECHNOLOGY</span>
          </h2>
          <p className="features-subtitle">
            Built for the next decade of decentralized innovation with cutting-edge technology
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{'--gradient': feature.gradient}}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;