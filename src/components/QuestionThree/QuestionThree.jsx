import React, { useState } from "react";
import logo from "../../assets/logo.png";
import foxImage from "../../assets/fox.jpeg";
import positiveIcon from "../../assets/positive.png";
import negativeIcon from "../../assets/negative.png";
import "./QuestionThree.css";

const QuestionThree = ({ onNext, onScoreChange }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [wrongAttempts, setWrongAttempts] = useState(0); 

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    if (answer === "Their tails") {
      setIsCorrect(true);
      setTimeout(() => {
        onScoreChange(wrongAttempts * 5); 
        onNext(); 
      }, 1000);
    } else {
      setIsCorrect(false);
      setWrongAttempts(wrongAttempts + 1); 
    }
  };

  return (
    <div className="quiz-container-three">
      <img src={logo} alt="Paw Pop Logo" className="quiz-logo" />

      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow="2"
        aria-valuemin="1"
        aria-valuemax="8"
        aria-label="Quiz progress"
      >
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className={`dot ${index === 3 ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
      
      <div className="quiz-question">
        <h2>What do foxes use to communicate with each other?</h2>
        <img src={foxImage} alt="A fox" className="animal-image" />
      </div>
      <div className="answer-options">
        {["Their ears", "Their paws", "Their noses", "Their tails"].map((answer) => (
          <label key={answer} className="answer-label">
            <input
              type="radio"
              name="answer"
              value={answer}
              checked={selectedAnswer === answer}
              onChange={() => handleAnswerClick(answer)}
            />
            {answer}
            {selectedAnswer === answer && (
              <img
                src={isCorrect ? positiveIcon : negativeIcon}
                alt={isCorrect ? "Correct answer" : "Incorrect answer"}
                className="checkmark"
              />
            )}
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuestionThree;
