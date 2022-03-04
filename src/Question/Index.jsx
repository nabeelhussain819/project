import React, { useState, useEffect } from "react";
import myData from "./question.json";
import "./question.css";

function Index() {
  let count = 1;

  return (
    <>
      {myData.map((item) => {
        return (
          <>
            <div class="card">
              <div class="container">
              <h1 className="num">Question No:{count++}</h1>{" "}
              <p className="type">{unescape(item.category)}</p>
              <h3>{unescape(item.question)}</h3>
            {item.incorrect_answers.map((data)=>{
                return(
                    <>
                    <p className="answers">{unescape(data)}</p>
                    
                    </>
                )
            })}<p >{unescape(item.correct_answer)}</p>
              </div>
            </div>
            
         
           
          </>
        );
      })}
    </>
  );
}

export default Index;
