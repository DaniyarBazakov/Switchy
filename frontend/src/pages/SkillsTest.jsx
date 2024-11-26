import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SkillsTest.css";

const SkillsTest = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "What do you enjoy most?",
      options: [
        "Working with numbers",
        "Solving problems",
        "Creating designs",
        "Helping others",
      ],
    },
    {
      question: "What type of work environment do you prefer?",
      options: [
        "Structured office",
        "Dynamic and changing",
        "Creative studio",
        "Collaborative team",
      ],
    },
    {
      question: "Which task sounds most enjoyable?",
      options: [
        "Analyzing data",
        "Building things",
        "Brainstorming ideas",
        "Organizing events",
      ],
    },
    {
      question: "What skill do you want to improve?",
      options: [
        "Technical expertise",
        "Project management",
        "Artistic abilities",
        "Communication skills",
      ],
    },
    {
      question: "How do you like to solve challenges?",
      options: [
        "Using logic",
        "Thinking outside the box",
        "Researching",
        "Talking to people",
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerClick = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  const recommendedPaths = [
    "Data Analyst",
    "UX Designer",
    "Software Developer",
    "Project Manager",
    "Marketing Specialist",
  ];

  return (
    <div className="skills-test">
      {!showResults ? (
        <div className="question-container">
          <h2 className="question">{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="option-button"
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="results-container">
          <h2 className="results-title">Your Recommended Career Paths</h2>
          <ul className="results-list">
            {recommendedPaths.slice(0, 3).map((path, index) => (
              <li key={index} className="result-item">
                {path}
              </li>
            ))}
          </ul>
          <button className="restart-button" onClick={resetQuiz}>
            Retake the Test
          </button>
          <button
            className="start-journey-button"
            onClick={() => navigate("/login")}
          >
            Start Your Journey
          </button>
        </div>
      )}
    </div>
  );
};

export default SkillsTest;
