import React from "react";

const Result = ({ calculation, result }) => {
  return (
    <div className="result-container">
      <div className="head">{calculation}</div>
      <div id="display" className="result">
        {result}
      </div>
    </div>
  );
};

export default Result;
