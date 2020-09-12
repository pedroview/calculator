import React from "react";
import Paper from "@material-ui/core/Paper";

import Calculation from "./calculation";
import Result from "./result";
import Buttons from "./buttons";

export default () => (
  <Paper elevation={4} className="calculator">
    <Calculation />
    <Result />
    <Buttons />
  </Paper>
);
