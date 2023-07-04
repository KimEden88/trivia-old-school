import './result.css';
export default function Result({ storedUserData }) {
  console.log('I need that:', storedUserData);

  const HandleReload = () => {
    window.location.reload();
  };

  let correctAnswers = 0;

  const resultElements = storedUserData.map((result, index) => {
    if (result.isCorrect) {
      correctAnswers++;
    }

    return (
      <div
        className="line"
        key={index}
      >
        <h3>{result.question}</h3>
        <h5 className={result.isCorrect ? 'correctAnswer' : 'incorrectAnswer'}>
          {result.answer}
        </h5>
        {!result.isCorrect && <h5>Correct answer: {result.correctAnswer}</h5>}
      </div>
    );
  });

  return (
    <div className="result">
      <h1>Your Score:</h1>
      <span
        className={correctAnswers < 3 ? 'bad' : 'good'}
      >{`${correctAnswers} out of ${storedUserData.length}`}</span>
      {resultElements}
      <button
        className="nextBtn"
        onClick={HandleReload}
      >
        Restart!
      </button>
    </div>
  );
}
