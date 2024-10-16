// src/App.jsx
import { useState } from "react";
import { Header } from "./components/HeaderFolder/Header";
import WelcomePage from "./components/WelcomeFolder/WelcomePage";
import { Question } from "./components/QuestionFolder/Question";
import { Summary } from "./components/SummaryFolder/Summary";
import { SubmitBtn } from "./components/SubmitbtnFolder/SubmitBtn";

export const App = () => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    { text: "What is your favorite mood-boosting activity?", type: "text" },
    {
      text: "Does music make you happy?",
      type: "radio",
      options: ["Yes, absolutely", "No, I like the silence"],
    },
    {
      text: "What is your go-to happy song?",
      type: "select",
      options: ["Song 1", "Song 2", "Song 3"],
    },
  ];

  const startQuiz = () => setStarted(true);

  const handleAnswer = (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = answer;
    setAnswers(updatedAnswers);
  };

  const nextQuestion = () => setCurrentQuestion(currentQuestion + 1);

  const submitQuiz = () => setSubmitted(true);

  return (
    <div>
      <Header
        title="The Science of Happiness"
        subtitle="Everyday Joy Boosters Survey"
      />
      {!started && <WelcomePage startQuiz={startQuiz} />}
      {started && !submitted && currentQuestion < questions.length && (
        <Question
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
          onNext={nextQuestion}
        />
      )}
      {submitted && <Summary answers={answers} />}
      {started && currentQuestion === questions.length && !submitted && (
        <SubmitBtn onClick={submitQuiz} />
      )}
    </div>
  );
};
