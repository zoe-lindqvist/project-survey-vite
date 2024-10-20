// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import koalaImage from "../../assets/koala.jpeg";
import "./QuestionSix.css";

// eslint-disable-next-line react/prop-types
const QuestionSix = ({ onNext, onNavigateToQuestion }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswerClick = (event) => {
    const answer = event.target.value;
    setSelectedAnswer(answer);
    if (answer === "Hug a tree") {
      setIsCorrect(true);
      setTimeout(() => {
        onNext(); // Move to the next question after a short delay
      }, 1000);
    } else {
      setIsCorrect(false);
    }
  };

  const handleDotClick = (questionIndex) => {
    if (onNavigateToQuestion) {
      onNavigateToQuestion(questionIndex);
    }
  };

  return (
    <div className="quiz-container-six">
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
            className={`dot ${index === 5 ? "active" : ""}`} // Marks the 5th question
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>

      <div className="quiz-question">
        <h2 aria-live="polite">
          What do koalas do when they are feeling sleepy?
        </h2>
        <img src={koalaImage} alt="A bird" className="animal-image" />
      </div>

      <div className="answer-options">
        <label htmlFor="dropdown" className="answer-label">
          <select
            id="dropdown"
            value={selectedAnswer}
            onChange={handleAnswerClick}
            className={`dropdown-six ${
              isCorrect === true
                ? "correct"
                : isCorrect === false
                ? "incorrect"
                : ""
            }`}
          >
            <option value="" disabled>
              Select an answer
            </option>
            <option value="Curl up in a ball">Curl up in a ball</option>
            <option value="Hug a tree">Hug a tree</option>
            <option value="Fly in circles">Yawn adorably</option>
            <option value="Sing a cheerful song">Wiggle their ears</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default QuestionSix;
