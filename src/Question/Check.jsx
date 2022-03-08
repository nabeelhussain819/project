import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import myData from "./question.json";
import Result from "./Result";

function Hello() {
  const [question, setQuestion] = useState(0);
  const [show, setShow] = useState(false);
  const [score, setScore] = useState(1);
  const [style, setStyle] = useState("cont");
  const [blur, setBlur] = useState(false);
  const [comment, setComment] = useState("Sorry ! ");
  const answerClick = (isCorrect) => {
    const nextQuestion = question + 1;
    if (nextQuestion < myData.length) {
      const notHello = false;
      setShow(notHello);
      setStyle("cont");
      setComment("Sorry !");
      setBlur(false);
      setQuestion(nextQuestion);
    } else {
      setQuestion(20);
    }
  };
  const result = (isCorrect) => {
    if (!isCorrect) {
      const newScore = score + 1;
      setComment("Correct !");
      setScore(newScore);
      setStyle("cont2");
      setBlur(true);
    }
    setBlur(true);
    setStyle("cont2");
    const hello = true;
    setShow(hello);
  };

  if (question === myData.length) {
    return <Result data={score - 1} change={question} />;
  }

  return (
    <>
      <ProgressBar data={question} />
      <div style={{ marginTop: "120px" }}>
        <div style={{ float: "left", marginLeft: "120px" }}>
          <h1>
            Question {question} Out of {myData.length}
          </h1>
          <p style={{ float: "left" }}>{unescape(myData[question].category)}</p>
        </div>
        <br />
        <br />
        <div style={{ marginTop: "120px" }}>
          <h3>{unescape(myData[question].question)}</h3>
          {myData[question].incorrect_answers.map((data) => {
            return (
              <>
                <button
                  className="answers"
                  onClick={result}
                  disabled={blur}
                  value={unescape(data)}
                >
                  {unescape(data)}
                </button>
              </>
            );
          })}

          <button
            className={style}
            onClick={() =>
              result(unescape(myData[question].correct_answer).isCorrect)
            }
            value={unescape(myData[question].correct_answer)}
            disabled={blur}
          >
            {unescape(myData[question].correct_answer)}
          </button>
          <br />

          {show === true ? (
            <>
              <h1>{comment}</h1>
              <button className="answers1" onClick={answerClick}>
                next Question
              </button>
            </>
          ) : null}
        </div>
      </div>
      <div style={{ marginTop: "5%" }}>
        <Result data={score - 1} change={question} />
      </div>
    </>
  );
}

export default Hello;
