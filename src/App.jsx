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
import QuestionEight from "./components/QuestionEight/QuestionEight.jsx";
import ConfirmationPage from "./components/ConfirmationFolder/ConfirmationPage.jsx"; 

import "./App.css";

const App = () => {
  const [startQuiz, setStartQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0); 
  const [score, setScore] = useState(160); 

  const handleStartQuiz = () => {
    setStartQuiz(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleScoreChange = (pointsToDeduct) => {
    setScore(score - pointsToDeduct); // This is for the passing down the function to handle the end score
  };

  return (
    <div className="App">
      {!startQuiz ? (
        <WelcomePage onStartQuiz={handleStartQuiz} />
      ) : (
        <>
          {currentQuestion === 0 && (
            <QuestionOne onNext={handleNextQuestion} onScoreChange={handleScoreChange} />
          )}
          {currentQuestion === 1 && (
            <QuestionTwo onNext={handleNextQuestion} onScoreChange={handleScoreChange} />
          )}
          {currentQuestion === 2 && (
            <QuestionThree onNext={handleNextQuestion} onScoreChange={handleScoreChange} />
          )}
          {currentQuestion === 3 && (
            <QuestionFour onNext={handleNextQuestion} onScoreChange={handleScoreChange} />
          )}
          {currentQuestion === 4 && (
            <QuestionFive onNext={handleNextQuestion} onScoreChange={handleScoreChange} />
          )}
          {currentQuestion === 5 && (
            <QuestionSix onNext={handleNextQuestion} onScoreChange={handleScoreChange} />
          )}
          {currentQuestion === 6 && (
            <QuestionSeven onNext={handleNextQuestion} onScoreChange={handleScoreChange} />
          )}
          {currentQuestion === 7 && (
            <QuestionEight onNext={handleNextQuestion} onScoreChange={handleScoreChange} />
          )}
          {currentQuestion === 8 && <ConfirmationPage score={score} />}
        </>
      )}
    </div>
  );
};

export default App;
