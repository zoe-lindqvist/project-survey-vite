import React from 'react';
import './WelcomePage.css';

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <header className="header">
        <h1 className="app-title">Paw Pops</h1>
        <div className="search-icon">
          <img src="/src/assets/search.png" alt="Search icon" className="search-image" />
        </div>
      </header>

      <main className="content">
        <h2 className="welcome-title">Learn through surveys</h2>

        <div className="card">
          <img src="/src/assets/dolphin.png" alt="Sea Creatures" className="card-image" />
          <div className="card-text">
            <h3 className="card-title">Dive into sea creatures</h3>
            <p className="card-points">
              <span className="lightning-icon">⚡</span> 1,250 points
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WelcomePage;
