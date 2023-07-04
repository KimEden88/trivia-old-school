import { useEffect, useState } from 'react';
import axios from 'axios';
import Question from './question';

export default function QuestionForm() {
  const [questions, setQuestions] = useState([]);

  const getQuestionsFromApi = () => {
    axios
      .get('https://wd40-trivia.onrender.com/api/questions')
      .then((questions) => setQuestions(questions.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getQuestionsFromApi();
  }, []);

  return (
    <div className="questionForm">
      {questions.length > 0 && <Question questions={questions} />}
    </div>
  );
}
