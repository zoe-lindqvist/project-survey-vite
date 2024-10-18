// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import otterImage from "../../assets/otter.jpeg";
import positiveIcon from "../../assets/positive.png";
import negativeIcon from "../../assets/negative.png";
import "./QuestionTwo.css";

const QuestionTwo = ({ onNext }) => {
  // Accept onNext as a prop
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswerClick = (answer) => {
    if (answer === "Each others paws") {
      setIsCorrect(true);
      setTimeout(() => {
        onNext(); // Move to the next question after a short delay
      }, 1000);
    } else {
      setIsCorrect(false);
    }
    setSelectedAnswer(answer);
  };

  return (
    <div className="quiz-container-two">
      <img src={logo} alt="Paw Pop Logo" className="quiz-logo" />

      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow="2"
        aria-valuemin="1"
        aria-valuemax="8"
        aria-label="Quiz progress"
      >
        <div className="dot"></div>
        <div className="dot active"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>

      <div className="quiz-question">
        <h2 aria-live="polite">
          What do otters hold in their paws while they sleep to stay together?
        </h2>
        <img src={otterImage} alt="An otter" className="animal-image" />
      </div>

      <div className="answer-options">
        {["Shells", "Seaweed", "Rocks", "Each others paws"].map((answer) => (
          <button
            key={answer}
            className={`answer-button ${
              selectedAnswer === answer
                ? isCorrect
                  ? "positive"
                  : "negative"
                : ""
            }`}
            onClick={() => handleAnswerClick(answer)}
            aria-pressed={selectedAnswer === answer}
            aria-label={`Answer: ${answer}`}
          >
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
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionTwo;
