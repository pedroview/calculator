import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";

import "./calculator.css";
import { Calculation, FinalResult, Buttons, Developer } from "./";
import { handleClear, handleValue, resolveCalculation, handleOperator } from "../source/calcFunc";

export default () => {
  // save user input here
  const [calculation, setCalculation] = useState(0);
  // save resullt of calculation
  const [finalResult, setFinalResult] = useState(0);

  // save state and setstate in an object
  const stateObj = {
    calculation,
    setCalculation,
    finalResult,
    setFinalResult,
  };

  return (
    <Paper elevation={4} className="calculator">
      {/* display user input here */}
      <Calculation calculation={calculation} />
      {/* display result f calculation here */}
      <FinalResult result={finalResult} />
      {/* buttons in calculator */}
      <Buttons
        clear={(value) => handleClear({ value, ...stateObj })}
        handleValue={(value) => handleValue({ value, ...stateObj })}
        resolveCalculation={() => resolveCalculation({ ...stateObj })}
        handleOperator={(key) => handleOperator({ key, ...stateObj })}
      />
      {/* display developer info here */}
      <Developer authur="Maduekwe Pedro" portfolio="https://pedrojr.netlify.app" />
    </Paper>
  );
};
