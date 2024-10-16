import React from 'react';
import Header from '../HeaderFolder/Header';
import backgroundImage from '../../assets/background.jpeg'; // Importing image as a module
import './WelcomePage.css';

const WelcomePage = ({ onStartQuiz }) => {  // Accept the prop here
  return (
    <div className="welcome-container">
      <img src={backgroundImage} alt="Background" className="background-image" />
      <Header />
      <div className="welcome-content">
        <div className="welcome-text">
          <h1>Take a Paw-some Quiz Adventure!</h1>
          <p>Test your knowledge on cute animals and collect rewards as you go!</p>
          {/* Add the onClick event to trigger the quiz start */}
          <button className="start-button" onClick={onStartQuiz}>
            Start this quiz!
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
