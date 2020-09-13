import React from "react";
import Paper from "@material-ui/core/Paper";

import Calculation from "./calculation";
import Result from "./finalResult";
import Buttons from "./buttons";

export default ({ calculation, result }) => (
  <Paper elevation={4} className="calculator">
    <Calculation calculation={calculation} />
    <Result result={result} />
    <Buttons />
  </Paper>
);
