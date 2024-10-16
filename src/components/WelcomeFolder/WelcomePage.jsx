/* eslint-disable react/prop-types */
import Header from "../HeaderFolder/Header";
import backgroundImage from "../../assets/background.jpeg";
import "./WelcomePage.css";

const WelcomePage = ({ onStartQuiz }) => {
  return (
    <div
      className="welcome-container"
      role="main"
      aria-labelledby="welcome-heading"
    >
      <img
        src={backgroundImage}
        alt="Background image with a cute giraffe"
        className="background-image"
      />
      <Header />
      <div className="welcome-content">
        <div className="welcome-text">
          <h1 id="welcome-heading">Take a Paw-some Quiz Adventure!</h1>
          <p>
            Test your knowledge on cute animals and collect rewards as you go!
          </p>
          <button
            className="start-button"
            onClick={onStartQuiz}
            aria-label="Start the quiz"
          >
            Start this quiz!
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
