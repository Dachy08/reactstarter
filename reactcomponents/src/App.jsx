import React from 'react';
import './App.css';
import { FaUser, FaShoppingCart, FaBars } from 'react-icons/fa';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo-container">
          <div className="logo-circle">VA</div>
          <span className="logo-text">Virtual Assistant</span>
        </div>
        <nav className="navigation">
          <ul className="nav-links">
            <li><a href="#services">Services and Pricing</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav-icons">
            <a href="#account"><FaUser /></a>
            <a href="#cart"><FaShoppingCart /></a>
            <a href="#menu" className="menu-icon"><FaBars /></a>
          </div>
        </nav>
      </header>
      
      <section className="hero">
        <div className="hero-content">
          <h1>Virtual Assistant<br />at Your Service</h1>
          <p>I'm a title. Click here to edit me.</p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="hero-right"></div>
      </section>
    </div>
  );
}

export default App;