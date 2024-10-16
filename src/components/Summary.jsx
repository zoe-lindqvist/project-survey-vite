/* eslint-disable react/prop-types */
// src/components/Summary.jsx
export const Summary = ({ answers }) => (
  <div>
    <h2>Summary of Your Answers</h2>
    <ul>
      {answers.map((answer, index) => (
        <li key={index}>{answer}</li>
      ))}
    </ul>
  </div>
);
