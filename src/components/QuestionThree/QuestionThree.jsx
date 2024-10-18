// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import foxImage from "../../assets/fox.jpeg";
import positiveIcon from "../../assets/positive.png";
import negativeIcon from "../../assets/negative.png";
import "./QuestionThree.css";

// eslint-disable-next-line react/prop-types
const QuestionThree = ({ onNext, onNavigateToQuestion }) => {
  // Accept onNext and onNavigateToQuestion as props
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    if (answer === "Their tails") {
      setIsCorrect(true);
      setTimeout(() => {
        onNext(); // Move to the next question after a short delay
      }, 1000);
    } else {
      setIsCorrect(false);
    }
  };

  // Function to handle clicking on a dot
  const handleDotClick = (questionIndex) => {
    if (onNavigateToQuestion) {
      onNavigateToQuestion(questionIndex);
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
            className={`dot ${index === 2 ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>

      <div className="quiz-question">
        <h2 aria-live="polite">
          What do foxes use to communicate with each other?
        </h2>
        <img src={foxImage} alt="A fox" className="animal-image" />
      </div>

      <div className="answer-options">
        {["Their ears", "Their paws", "Their noses", "Their tails"].map(
          (answer) => (
            <label key={answer} className="answer-label">
              <input
                type="radio"
                name="answer"
                value={answer}
                checked={selectedAnswer === answer}
                onChange={() => handleAnswerClick(answer)}
                aria-label={`Answer: ${answer}`}
              />
              {answer}
              {selectedAnswer === answer && (
                <img
                  src={isCorrect ? positiveIcon : negativeIcon}
                  alt={
                    isCorrect
                      ? "Correct answer selected"
                      : "Incorrect answer selected"
                  }
                  className="checkmark"
                  aria-live="assertive"
                />
              )}
            </label>
          )
        )}
      </div>
    </div>
  );
};

export default QuestionThree;
