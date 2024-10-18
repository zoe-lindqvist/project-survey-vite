/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import WelcomePage from "./components/WelcomeFolder/WelcomePage.jsx";
import QuestionOne from "./components/QuestionOne/QuestionOne";
import QuestionTwo from "./components/QuestionTwo/QuestionTwo.jsx";
import QuestionThree from "./components/QuestionThree/QuestionThree.jsx";
import QuestionFour from "./components/QuestionFour/QuestionFour.jsx";
import QuestionFive from "./components/QuestionFive/QuestionFive.jsx";
import QuestionSix from "./components/QuestionSix/QuestionSix.jsx";
import QuestionSeven from "./components/QuestionSeven/QuestionSeven.jsx";

import "./App.css";

const App = () => {
  const [startQuiz, setStartQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0); // This tracks the current question

  const handleStartQuiz = () => {
    setStartQuiz(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="App">
      {!startQuiz ? (
        <WelcomePage onStartQuiz={handleStartQuiz} />
      ) : (
        <>
          {currentQuestion === 0 && <QuestionOne onNext={handleNextQuestion} />}
          {currentQuestion === 1 && <QuestionTwo onNext={handleNextQuestion} />}
          {currentQuestion === 2 && (
            <QuestionThree onNext={handleNextQuestion} />
          )}
          {currentQuestion === 3 && (
            <QuestionFour onNext={handleNextQuestion} />
          )}
          {currentQuestion === 4 && (
            <QuestionFive onNext={handleNextQuestion} />
          )}
          {currentQuestion === 5 && <QuestionSix onNext={handleNextQuestion} />}
          {currentQuestion === 6 && (
            <QuestionSeven onNext={handleNextQuestion} />
          )}
          {currentQuestion === 7 && (
            <QuestionEight onNext={handleNextQuestion} />
          )}
        </>
      )}
    </div>
  );
};

export default App;
