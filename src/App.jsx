import WelcomePage from './components/WelcomeFolder/WelcomePage.jsx';
import QuestionPage from './components/QuestionFolder/Question.jsx';
import './App.css';

const App = () => {
  const [startQuiz, setStartQuiz] = useState(false);

  // Function to handle the quiz start
  const handleStartQuiz = () => {
    setStartQuiz(true);  // This will change the state to start the quiz
  };

  return (
    <div className="App">
      {/* Pass the handleStartQuiz function as a prop to WelcomePage */}
      {!startQuiz ? (
        <WelcomePage onStartQuiz={handleStartQuiz} />) : (
        <QuestionPage />
      )}
    </div>
  );
};

export default App;
