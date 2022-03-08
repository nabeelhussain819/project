import React from "react";
import myData from "./question.json";

export default function Result(props) {
  const data = myData.length - 1;
  const per = Math.round((props.data / data) * 100);
  const per2 = Math.round((props.change / data) * 100);

  const Parentdiv = {
    height: "50px",
    width: "98%",
    backgroundColor: "transparent",

    margin: 10,
    border: "2px solid black",
  };

  const Childdiv = {
    height: "100%",
    width: `${per}%`,
    backgroundColor: "black",

    textAlign: "left",
  };
  const SuperChild = {
    height: "100%",
    width: `${per2}%`,
    backgroundColor: "gray",

    textAlign: "right",

    position: "relative",
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,

    float: "Left",
  };
  const progresstext1 = {
    padding: 10,
    color: "black",
    fontWeight: 900,

    float: "Right",
  };
  return (
    <div>
      <span style={progresstext}> SCORE: {per}%</span>
      <span style={progresstext1}>MAX SCORE: {per2}%</span>
      <br /> 
      <div style={Parentdiv}>
        <div style={SuperChild}><div style={Childdiv}></div></div>
      </div>
    </div>
  );
}
