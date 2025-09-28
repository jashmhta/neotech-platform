import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Features />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;