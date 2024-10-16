/* eslint-disable react/prop-types */
// src/components/WelcomePage.jsx
export const WelcomePage = ({ startQuiz }) => (
  <div>
    <p>Welcome to our quiz!</p>
    <button onClick={startQuiz}>Start Quiz</button>
  </div>
);
