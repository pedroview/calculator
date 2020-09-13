import React, { useState, useEffect } from "react";
import * as math from "mathjs";

import Result from "./finalResult";
import Buttons from "./buttons";
import Author from "./developer";
import Calculator from "./calculator";
import "./calculator.css";

const isOperator = /[*+\-/]/,
  endsWithOperator = /[*+\-/]$/,
  startsWithOperator = /^[*+\-/]/,
  startsWithZero = /^0/;

export default () => {
  useEffect(() => {
    // save project to localstorage on app first load
    localStorage.setItem("PedroView Project", "Calculator");
  }, []);
  const [currVal, setCurrVal] = useState("0");
  const [prevVal, setPrevVal] = useState("0");
  const [maxPrevVal, setMaxPrevVal] = useState("0");
  const [operations, setOperations] = useState([]);
  const [isEvaluated, setIsEvaluated] = useState(false);

  return <Calculator calculation={currVal} result={prevVal} />;
  return (
    <div id="container" className="container">
      <div className="calculator-container">
        <Result calculation={currVal} result={prevVal} />
        <Buttons
          clear={handleClear}
          numbers={handleNumbers}
          operations={handleOperations}
          decimal={handleDecimal}
          result={handleResult}
        />
      </div>
      <Author authur="Maduekwe Pedro" github="https://github.com/pedroview" />
    </div>
  );
};
