import React, { useState } from "react";
import logo from "../../assets/logo.png";
import birdImage from "../../assets/bird.jpeg";
import "./QuestionFive.css";

const QuestionFive = ({ onNext, onScoreChange }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [wrongAttempts, setWrongAttempts] = useState(0); 

  const handleAnswerClick = (event) => {
    const answer = event.target.value;
    setSelectedAnswer(answer);
    if (answer === "Sing a cheerful song") {
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
    <div className="quiz-container-five">
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
            className={`dot ${index === 4 ? "active" : ""}`} 
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>

      <div className="quiz-question">
        <h2>What do birds do to show they are happy?</h2>
        <img src={birdImage} alt="A bird" className="animal-image" />
      </div>
      <div className="answer-options">
        <label htmlFor="dropdown" className="answer-label">
          <select
            id="dropdown"
            value={selectedAnswer}
            onChange={handleAnswerClick}
            className={`dropdown-five ${isCorrect === true ? "correct" : isCorrect === false ? "incorrect" : ""}`}
          >
            <option value="" disabled>Select an answer</option>
            <option value="Do a little dance">Do a little dance</option>
            <option value="Fluff up their feathers">Fluff up their feathers</option>
            <option value="Fly in circles">Fly in circles</option>
            <option value="Sing a cheerful song">Sing a cheerful song</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default QuestionFive;
