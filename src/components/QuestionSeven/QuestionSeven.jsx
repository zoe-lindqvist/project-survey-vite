// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import dolphinImage from "../../assets/dolphin.png";
import positiveIcon from "../../assets/positive.png"; // Correct icon
import negativeIcon from "../../assets/negative.png"; // Incorrect icon
import "./QuestionSeven.css";

// eslint-disable-next-line react/prop-types
const QuestionSeven = ({ onNext, onNavigateToQuestion }) => {
  const [isCorrect, setIsCorrect] = useState(null);
  const [droppedAnswer, setDroppedAnswer] = useState(""); // For the dropped answer

  const handleDragStart = (event, answer) => {
    event.dataTransfer.setData("text/plain", answer); // Set the dragged answer
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const answer = event.dataTransfer.getData("text/plain"); // Get the dropped answer
    setDroppedAnswer(answer);
    if (answer === "Blow bubbles") {
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
    <div className="quiz-container-seven">
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
            className={`dot ${index === 6 ? "active" : ""}`} // Marks the 5th question
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>

      <div className="quiz-question">
        <h2 aria-live="polite">What do dolphins do when they are excited?</h2>
        <img src={dolphinImage} alt="A dolphin" className="animal-image" />
      </div>

      <div className="answer-options">
        {[
          "Jump out of the water",
          "Blow bubbles",
          "Splash their tails",
          "Make happy squeaks",
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

export default QuestionSeven;
