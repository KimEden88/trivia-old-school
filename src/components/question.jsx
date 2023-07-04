/* eslint-disable react/prop-types */
//imports
import { useState } from 'react';
import './question.css';
import Result from './result';

//My question component:

export default function Question({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [storedUserData, setStoredUserData] = useState([]);

  //move to next Question
  const handleNextQuestionClick = () => {
    handleData(questions[currentQuestionIndex]);
    {
      //console.log(questions[currentQuestionIndex]);
    }
    //Resetting the selectedAnswer when moving to next question.
    setSelectedAnswer(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    //console.log(answer);
  };
  //user data
  const handleData = (data) => {
    setStoredUserData(() => [
      ...storedUserData,
      {
        questionIndex: data.id,
        question: data.question,
        answer: selectedAnswer,
        correctAnswer: data.correctAnswer,
        isCorrect: selectedAnswer === data.correctAnswer,
      },
    ]);
  };

  return (
    <>
      {questions && currentQuestionIndex < questions.length ? (
        <div
          className="questionCard"
          key={questions[currentQuestionIndex].id}
        >
          <h2 className="question">
            {questions[currentQuestionIndex].question}
          </h2>
          <ul>
            {questions[currentQuestionIndex].answers.map((answer) => (
              <button
                type="button"
                key={answer}
                onClick={() => handleAnswerClick(answer)}
                className={`answerBtn options ${
                  selectedAnswer === answer ? 'selected' : ''
                }`}
              >
                {answer}
              </button>
            ))}
          </ul>
          {selectedAnswer && (
            <button
              className="nextBtn"
              onClick={() => handleNextQuestionClick()}
              type="submit"
            >
              Next Question
            </button>
          )}
        </div>
      ) : (
        <>
          <Result storedUserData={storedUserData} />
        </>
      )}
    </>
  );
}
