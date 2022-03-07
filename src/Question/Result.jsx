import React from "react";
import myData from "./question.json";

export default function Result(props) {
  console.log(props.data);
  const data = myData.length - 1;
  const per = Math.round((props.data / data) * 100);
  console.log(per)
  const Parentdiv = {
    height: "12px",
    width: "98%",
    backgroundColor: "gray",
    borderRadius: 40,
    margin: 10,
  };

  const Childdiv = {
    height: "100%",
    width: `${per}%`,
    backgroundColor: "green",
    borderRadius: 40,
    textAlign: "right",
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };

  return (
    <div>
      your total result is {props.data} out of {data}
      <div style={Parentdiv}>
        <div style={Childdiv}>
          <span style={progresstext}>{(per)}%</span>
        </div>
      </div>
    </div>
  );
}
