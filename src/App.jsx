import React, { useState } from "react";
import "./App.css";

const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Tool Markup Language",
      "Hyper Text Markup Language",
      "High Text Markup Language",
      "Hyperlinks Text Mark Language"
    ],
    correctAnswer: 1
  },
  {
    question: "How do you select an element with id container?",
    options: ["#container", "*container", "container", ".container"],
    correctAnswer: 0
  },
  {
    question: "Which CSS property adds space inside an element?",
    options: ["spacing", "border", "padding", "margin"],
    correctAnswer: 2
  },
  {
    question: "Which hook is used for state in React?",
    options: ["useRef", "useEffect", "useState", "useMemo"],
    correctAnswer: 2
  },
  {
    question: "Which attribute opens a link in a new tab?",
    options: ["open", "_blank", "new", "link"],
    correctAnswer: 1
  }
];

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(-1);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  function nextQuestion() {

    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedOption(-1);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(-1);
    setShowResult(false);
  }

  return (
    <div className="quiz-container">

      <h2>Quiz Application</h2>

      {showResult ? (
        <div className="result-box">
          <h3>Quiz Finished 🥳</h3>
          <p>Your Score: {score} / {questions.length}</p>
          <button onClick={restartQuiz}>Restart Quiz 🔄</button>
        </div>
      ) : (
        <div className="question-box">

          <h4>Question {currentQuestion + 1}/{questions.length}</h4>
          <p>{questions[currentQuestion].question}</p>

          {questions[currentQuestion].options.map(function(option, index) {
            return (
              <div key={index} className="option">
                <input
                  type="radio"
                  name="option"
                  checked={selectedOption === index}
                  onChange={() => setSelectedOption(index)}
                />
                <label>{option}</label>
              </div>
            );
          })}

         <div className="btn-group">

              {currentQuestion > 0 && (
                <button onClick={() => setCurrentQuestion(currentQuestion - 1)}>
                  Previous
                </button>
              )}

              {currentQuestion < questions.length - 1 && (
                <button disabled={selectedOption === -1} onClick={nextQuestion}>
                  Next
                </button>
              )}

              {currentQuestion === questions.length - 1 && (
                <button disabled={selectedOption === -1} onClick={nextQuestion}>
                  Submit
                </button>
              )}

            </div>

        </div>
      )}
    </div>
  );
}
export default App;

