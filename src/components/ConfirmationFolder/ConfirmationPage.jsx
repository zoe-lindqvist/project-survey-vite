import React from 'react';
import './ConfirmationPage.css';
import starImage from '../../assets/star.png';
import logoImage from '../../assets/logo.png'; 

const ConfirmationPage = ({ score }) => {  
  let title = "";
  let subtitle = "";

  // Determine the title and subtitle based on the score
  if (score < 40) {
    title = "Good Effort!";
    subtitle = "Maybe next time is the charm!";
  } else if (score >= 40 && score < 80) {
    title = "Nice job!";
    subtitle = "Good to have an animal lover among us!";
  } else if (score >= 80 && score < 120) {
    title = "Good job!";
    subtitle = "Almost a perfect score, what an expert!";
  } else {
    title = "Perfect Scorer!";
    subtitle = "Your flawless quiz performance sets a new standard of excellence!";
  }

  return (
    <div className="confirmation-container">
      <img src={logoImage} alt="Quiz Logo" className="confirmation-logo" />
      <img src={starImage} alt="Star" className="confirmation-star" />
      <h1 className="confirmation-title">{title}</h1>
      <p className="confirmation-subtitle">{subtitle}</p>
      <div className="score-box">
        <span className="score">{score} points</span> 
      </div>
    </div>
  );
};

export default ConfirmationPage;
