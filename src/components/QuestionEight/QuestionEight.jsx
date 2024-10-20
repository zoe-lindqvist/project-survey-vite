// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import pandaImage from "../../assets/panda.jpeg";
import positiveIcon from "../../assets/positive.png"; // Correct icon
import negativeIcon from "../../assets/negative.png"; // Incorrect icon
import "./QuestionEight.css";

// eslint-disable-next-line react/prop-types
const QuestionEight = ({ onNext, onNavigateToQuestion }) => {
  const [isCorrect, setIsCorrect] = useState(null);
  const [droppedAnswer, setDroppedAnswer] = useState(""); // For the dropped answer

  const handleDragStart = (event, answer) => {
    event.dataTransfer.setData("text/plain", answer); // Set the dragged answer
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const answer = event.dataTransfer.getData("text/plain"); // Get the dropped answer
    setDroppedAnswer(answer);
    if (answer === "Berries") {
      setIsCorrect(true);
      setTimeout(() => {
        onNext(); // Move to the next question after a short delay
      }, 1000);
    } else {
      setIsCorrect(false);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Allows the drop
  };

  const handleDotClick = (questionIndex) => {
    if (onNavigateToQuestion) {
      onNavigateToQuestion(questionIndex);
    }
  };

  return (
    <div className="quiz-container-eight">
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
            className={`dot ${index === 7 ? "active" : ""}`} 
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>

      <div className="quiz-question">
        <h2 aria-live="polite">Red pandas love snacking on bamboo, but what other treat do they enjoy that might surprise you?</h2>
        <img src={pandaImage} alt="Panda" className="animal-image" />
      </div>

      <div className="answer-options">
        {[
          "Berries",
          "Ice cream",
          "Popcorn",
          "Chocolate",
        ].map((answer) => (
          <div
            key={answer}
            className="draggable-answer"
            draggable
            onDragStart={(event) => handleDragStart(event, answer)}
          >
            {answer}
          </div>
        ))}
      </div>

      <div
        className="drop-zone"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        Drop your answer here!
        {droppedAnswer && (
          <div className="icon-container">
            <p>You chose: {droppedAnswer}</p>
            <img
              src={isCorrect ? positiveIcon : negativeIcon}
              alt={isCorrect ? "Correct answer" : "Incorrect answer"}
              className="result-icon"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionEight;
