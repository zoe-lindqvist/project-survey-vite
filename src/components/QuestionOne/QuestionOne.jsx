import React, { useState } from "react";
import logo from "../../assets/logo.png";
import frogImage from "../../assets/frog.png";
import positiveIcon from "../../assets/positive.png";
import negativeIcon from "../../assets/negative.png";
import "./QuestionOne.css";

const QuestionOne = ({ onNext }) => { // Accept onNext as a prop
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswerClick = (answer) => {
    if (answer === "Lungs") {
      setIsCorrect(true);
      setTimeout(() => {
        onNext(); // Move to the next question after a short delay
      }, 1000); // Delay to show feedback
    } else {
      setIsCorrect(false);
    }
    setSelectedAnswer(answer);
  };

  return (
    <div className="quiz-container-one">
      <img src={logo} alt="Paw Pop Logo" className="quiz-logo" />

      <div className="progress-bar" role="progressbar" aria-valuenow="1" aria-valuemin="1" aria-valuemax="8" aria-label="Quiz progress">
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
        <h2 aria-live="polite">
          Which of the following adaptations helps frogs breathe in water and on land?
        </h2>
        <img src={frogImage} alt="A frog" className="animal-image" />
      </div>

      <div className="answer-options">
        {["Gills", "Lungs", "Scales", "Fins"].map((answer) => (
          <button
            key={answer}
            className={`answer-button ${selectedAnswer === answer ? (isCorrect ? "positive" : "negative") : ""}`}
            onClick={() => handleAnswerClick(answer)}
            aria-pressed={selectedAnswer === answer}
            aria-label={`Answer: ${answer}`}
          >
            {answer}
            {selectedAnswer === answer && (
              <img
                src={isCorrect ? positiveIcon : negativeIcon}
                alt={isCorrect ? "Correct answer selected" : "Incorrect answer selected"}
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

export default QuestionOne;
