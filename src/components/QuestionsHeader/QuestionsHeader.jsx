/* eslint-disable react/prop-types */
import logo from "../assets/logo.png";

export const QuestionsHeader = ({ currentQuestion, totalQuestions }) => {
  return (
    <div className="quiz-container">
      {/* Logo */}
      <img src={logo} alt="Paw Pop Logo" className="quiz-logo" />

      {/* Progress Bar */}
      <div className="progress-bar">
        {Array.from({ length: totalQuestions }, (_, index) => (
          <div
            key={index}
            className={`dot ${index < currentQuestion ? "active" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
};
