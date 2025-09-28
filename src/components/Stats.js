import React, { useEffect, useState, useRef } from 'react';
import './Stats.css';

const Stats = () => {
  const [counters, setCounters] = useState({
    transactions: 0,
    users: 0,
    security: 0,
    uptime: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          startCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const startCounters = () => {
    const targets = {
      transactions: 2500000,
      users: 150000,
      security: 100,
      uptime: 99.99
    };

    const duration = 2500;
    const steps = 100;
    const stepTime = duration / steps;

    Object.keys(targets).forEach(key => {
      const target = targets[key];
      const increment = target / steps;
      let current = 0;
      
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        setCounters(prev => ({ 
          ...prev, 
          [key]: key === 'uptime' ? parseFloat(current.toFixed(2)) : Math.floor(current)
        }));
      }, stepTime);
    });
  };

  const stats = [
    {
      number: counters.transactions.toLocaleString() + '+',
      label: 'TRANSACTIONS PROCESSED',
      description: 'Lightning-fast transactions',
      icon: '⚡'
    },
    {
      number: counters.users.toLocaleString() + '+',
      label: 'ACTIVE USERS',
      description: 'Growing community',
      icon: '👥'
    },
    {
      number: counters.security + '%',
      label: 'SECURITY SCORE',
      description: 'Military-grade protection',
      icon: '🛡️'
    },
    {
      number: counters.uptime + '%',
      label: 'UPTIME GUARANTEE',
      description: 'Always available',
      icon: '🚀'
    }
  ];

  return (
    <section className="stats" ref={statsRef}>
      <div className="stats-container">
        <div className="stats-header">
          <h2 className="stats-title">
            TRUSTED BY
            <br />
            <span className="gradient-text">MILLIONS</span>
          </h2>
          <p className="stats-subtitle">
            Join the fastest-growing decentralized platform in the world
          </p>
        </div>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-description">{stat.description}</div>
              <div className="stat-progress">
                <div className="progress-bar" style={{animationDelay: `${index * 0.2}s`}}></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="stats-visual">
          <div className="pulse-ring pulse-ring-1"></div>
          <div className="pulse-ring pulse-ring-2"></div>
          <div className="pulse-ring pulse-ring-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Stats;