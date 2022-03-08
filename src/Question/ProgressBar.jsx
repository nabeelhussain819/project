import React from "react";
import myData from "./question.json";

function ProgressBar(props) {
  const data = myData.length - 1;
  const per = Math.round((props.data / data) * 100);

  const Parentdiv = {
    height: "15px",
    width: "98%",
    backgroundColor: "transparent",
  };

  const Childdiv = {
    height: "100%",
    width: `${per}%`,
    backgroundColor: "gray",
    textAlign: "right",
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };
  return (
    <div>
      {" "}
      <div>
        <div style={Parentdiv}>
          <div style={Childdiv}></div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
