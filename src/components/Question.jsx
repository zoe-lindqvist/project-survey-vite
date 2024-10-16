/* eslint-disable react/prop-types */
// src/components/Question.jsx
import { Dropdown } from "./Dropdown";

export const Question = ({ question, onAnswer, onNext }) => {
  const handleInputChange = (e) => onAnswer(e.target.value);

  return (
    <div>
      <h2>{question.text}</h2>
      {question.type === "text" && (
        <input type="text" onChange={handleInputChange} required />
      )}
      {question.type === "radio" &&
        question.options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              name="radio"
              value={option}
              onChange={handleInputChange}
              required
            />
            {option}
          </label>
        ))}
      {question.type === "select" && (
        <Dropdown options={question.options} onChange={handleInputChange} />
      )}
      <button onClick={onNext}>Next</button>
    </div>
  );
};
