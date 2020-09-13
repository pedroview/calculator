const handleClear = ({ value, calculation, setCalculation, setFinalResult }) => {
  if (value === "one") {
    let newCal = calculation;
    if (newCal.length) {
      newCal = newCal.substring(0, newCal.length - 1);
      setCalculation(newCal);
    }
  } else {
    setCalculation(0);
    setFinalResult(0);
  }
};

const handleValue = ({ value, calculation, setCalculation }) => {
  if (!calculation || calculation.length <= 24) {
    setCalculation(`${calculation === 0 ? value : `${calculation}${value}`}`);
  }
};

const resolveCalculation = ({ calculation, setFinalResult }) => {
  setFinalResult(eval(calculation));
};

const handleOperator = ({ key, calculation, setFinalResult }) => {
  const number = eval(calculation);
  switch (key) {
    case "sqrt":
      setFinalResult(Math.sqrt(number));
      break;
    case "cbrt":
      setFinalResult(Math.cbrt(number));
      break;
    case "rand":
      setFinalResult(Math.round(Math.random(number) * 10));
      break;
    default:
      break;
  }
};

export { handleClear, handleValue, resolveCalculation, handleOperator };
