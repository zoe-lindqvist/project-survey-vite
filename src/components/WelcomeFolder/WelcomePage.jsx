import React from 'react';
import './WelcomePage.css';

const WelcomePage = ({ startQuiz }) => {
  return (
    <div className="welcome-page">
      <header className="header">
        <h1 className="app-title">Paw Pops</h1>
        <div className="search-icon">
          <img src="/src/assets/search.png" alt="Search icon" className="search-image" />
        </div>
      </header>

      <div className="hero-section">
        <img src="/src/assets/hero.jpg" alt="Hero" className="hero-image" />
        <div className="hero-overlay">
          <h2 className="hero-title">Dive into Fun with Paw Pops!</h2>
          <button className="start-button" onClick={startQuiz}>Start the Quiz!</button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
