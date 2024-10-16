import React, { useState } from 'react';
import logo from '../../assets/logo.png'; 
import frogImage from '../../assets/frog.png'; 
import positiveIcon from '../../assets/positive.png';  
import negativeIcon from '../../assets/negative.png';  
import './Question.css';

const QuizPage = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null); 

  const handleAnswerClick = (answer) => {
    if (answer === 'Lungs') {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setSelectedAnswer(answer);
  };

  return (
    <div className="quiz-container">
      <img src={logo} alt="Paw Pop Logo" className="quiz-logo" />
      
      <div className="progress-bar">
        <div className="dot active"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>

      <div className="quiz-question">
        <h2>Which of the following adaptations helps frogs breathe in water and on land?</h2>
        <img src={frogImage} alt="Frog" className="animal-image" />
      </div>

      <div className="answer-options">
        {['Gills', 'Lungs', 'Scales', 'Fins'].map((answer) => (
          <button
            key={answer}
            className={`answer-button ${selectedAnswer === answer ? (isCorrect ? 'positive' : 'negative') : ''}`}
            onClick={() => handleAnswerClick(answer)}
          >
            {answer}
            {selectedAnswer === answer && (
              <img
                src={isCorrect ? positiveIcon : negativeIcon}  
                alt={isCorrect ? 'Correct' : 'Incorrect'}
                className="checkmark"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizPage;
