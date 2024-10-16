import React, { useState } from 'react';
import WelcomePage from './components/WelcomeFolder/WelcomePage.jsx';
import QuestionPage from './components/QuestionFolder/Question.jsx';
import './App.css';

const App = () => {
  const [startQuiz, setStartQuiz] = useState(false);

  const handleStartQuiz = () => {
    setStartQuiz(true);  
  };

  return (
    <div className="App">
      {!startQuiz ? (
        <WelcomePage onStartQuiz={handleStartQuiz} />) : (
        <QuestionPage />
      )}
    </div>
  );
};

export default App;
