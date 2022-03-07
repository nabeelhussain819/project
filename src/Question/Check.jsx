import React, { useState } from "react";
import myData from "./question.json";
import Result from "./Result";

function Hello() {
  const [question, setQuestion] = useState(1);
  const [show, setShow] = useState(false);
  const [score, setScore] = useState(1);
  const answerClick = (isCorrect) => {
    const nextQuestion = question + 1;
    if (nextQuestion < myData.length) {
      const notHello = false;
      setShow(notHello);
      setQuestion(nextQuestion);
    } else {
      setQuestion(20);
    }
  };
  const result = (isCorrect) => {
    if (!isCorrect) {
      const newScore = score + 1;
      setScore(newScore);
      console.log(score);
    }
    const hello = true;
    setShow(hello);
  };
  if (question === myData.length) {
    return <Result data={score - 1} />;
  }

  const Results = () => (
    <div id="results" className="search-results">
      Some Results
    </div>
  );

  return (
    <>
      <h1>Question no{question}</h1>
      <h3>{unescape(myData[question].question)}</h3>
      {myData[question].incorrect_answers.map((data) => {
        return (
          <>
            <button className="answers" onClick={result} value={unescape(data)}>
              {unescape(data)}
            </button>
          </>
        );
      })}
      <button
        className="answers"
        onClick={() =>
          result(unescape(myData[question].correct_answer).isCorrect)
        }
        value={unescape(myData[question].correct_answer)}
      >
        {unescape(myData[question].correct_answer)}
      </button>
      {show === true ? (
        <>
          {" "}
          <button className="answers" onClick={answerClick}>
            next
          </button>
        </>
      ) : null}
    </>
  );
}

export default Hello;
