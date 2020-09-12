import React, { useState, useEffect } from "react";
import * as math from "mathjs";

import Result from "./finalResult";
import Buttons from "./operators";
import Author from "./developer";
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

  const maxDigitWarning = () => {
    setPrevVal("MAX DIGIT LIMIT");
    setMaxPrevVal(prevVal);

    setTimeout(() => {
      setPrevVal(maxPrevVal);
    }, 1000);
  };

  const handleClear = () => {
    setCurrVal("0");
    setPrevVal("0");
    setMaxPrevVal("0");
    setOperations([]);
    setIsEvaluated(false);
  };

  const handleNumbers = (e) => {
    let currVal_ = currVal;
    let prevVal_ = prevVal;
    let value = e.target.value;

    if (!prevVal_.includes("DIGIT")) {
      if (prevVal_.length > 10) {
        maxDigitWarning();
      } else if (isEvaluated) {
        setCurrVal(value);
        setPrevVal(value);
        setOperations([]);
        setIsEvaluated(false);
      } else {
        if (prevVal.includes(".")) {
          setCurrVal(currVal_ + value);
          setPrevVal(prevVal_ + value);
        } else {
          let currVal = currVal_.replace(startsWithZero, "");
          let prevVal = prevVal_.replace(startsWithZero, "");

          if (prevVal_ === "0" && value === "0") return;

          if (isOperator.test(prevVal)) {
            prevVal = value;
          } else {
            prevVal += value;
          }

          setCurrVal(currVal + value);
          setPrevVal(prevVal);
        }
      }
    }
  };

  const handleOperations = (e) => {
    let value = e.target.value;

    if (isEvaluated) {
      setCurrVal(prevVal + value);
      setPrevVal(value);
      setOperations([value]);
      setIsEvaluated(false);
    } else {
      if (isOperator.test(prevVal)) {
        let currVal_ = currVal.replace(endsWithOperator, value);
        let slicedOps = operations.slice(0, operations.length - 1);

        setCurrVal(currVal_);
        setPrevVal(value);
        setOperations([...slicedOps, value]);
      } else {
        if (prevVal.includes("DIGIT")) return;

        setCurrVal(currVal + value);
        setPrevVal(value);
        setOperations([...operations, value]);
      }
    }
  };

  const handleResult = () => {
    if (isEvaluated) return;

    if (startsWithOperator.test(currVal) && endsWithOperator.test(currVal)) {
      let sliced = currVal.slice(0, currVal.length - 1);
      if (sliced[0] === "-" || sliced[0] === "+") {
        let result = math.eval(sliced);
        setCurrVal(sliced + "=" + String(result));
        setPrevVal(String(result));
        setIsEvaluated(true);
      } else {
        return;
      }
    } else if (startsWithOperator.test(currVal)) {
      let sliced = currVal.slice();
      if (sliced[0] === "-" || sliced[0] === "+") {
        let result = math.eval(sliced);

        setCurrVal(sliced + "=" + String(result));
        setPrevVal(String(result));
        setIsEvaluated(true);
      }
    } else if (endsWithOperator.test(currVal)) {
      let sliced = currVal.slice(0, currVal.length - 1);
      let result = math.eval(sliced);

      setCurrVal(sliced + "=" + String(result));
      setPrevVal(String(result));
      setIsEvaluated(true);
    } else {
      let sliced = currVal.slice();
      let result = math.eval(sliced);
      setCurrVal(sliced + "=" + String(result));
      setPrevVal(String(result));
      setIsEvaluated(true);
    }
  };

  const handleDecimal = (e) => {
    if (isEvaluated) {
      setCurrVal("0" + e.target.value);
      setPrevVal("0" + e.target.value);
      setIsEvaluated(false);
    } else {
      if (prevVal.includes(".")) {
        return;
      } else {
        if (prevVal.includes("DIGIT")) return;

        setCurrVal(this.state.currVal + e.target.value);
        setPrevVal(this.state.prevVal + e.target.value);
      }
    }
  };

  return (
    <div id="container" className="container">
      <div className="calculator-container">
        <Result head={currVal} result={prevVal} />
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
