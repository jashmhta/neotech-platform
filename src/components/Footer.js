import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">NEOTECH</h3>
            <p className="footer-tagline">
              Building the future of decentralized technology with quantum-resistant security and infinite scalability.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <span>Discord</span>
              </a>
              <a href="#" className="social-link">
                <span>Twitter</span>
              </a>
              <a href="#" className="social-link">
                <span>GitHub</span>
              </a>
              <a href="#" className="social-link">
                <span>Telegram</span>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Platform</h4>
              <a href="#">Documentation</a>
              <a href="#">API Reference</a>
              <a href="#">SDK Downloads</a>
              <a href="#">Whitepaper</a>
              <a href="#">Roadmap</a>
            </div>
            
            <div className="footer-column">
              <h4>Community</h4>
              <a href="#">Discord Server</a>
              <a href="#">Twitter Updates</a>
              <a href="#">GitHub Repository</a>
              <a href="#">Telegram Group</a>
              <a href="#">Reddit Community</a>
            </div>
            
            <div className="footer-column">
              <h4>Resources</h4>
              <a href="#">Blog & News</a>
              <a href="#">Help Center</a>
              <a href="#">System Status</a>
              <a href="#">Security Audits</a>
              <a href="#">Bug Bounty</a>
            </div>
            
            <div className="footer-column">
              <h4>Developers</h4>
              <a href="#">Getting Started</a>
              <a href="#">Code Examples</a>
              <a href="#">Testnet Faucet</a>
              <a href="#">Developer Tools</a>
              <a href="#">Grant Program</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-legal">
            <p>&copy; {currentYear} NeoTech. All rights reserved.</p>
            <div className="legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
          <div className="footer-badge">
            <span className="badge">🚀 Built with cutting-edge technology</span>
          </div>
        </div>
      </div>
      
      <div className="footer-glow"></div>
    </footer>
  );
};

export default Footer;