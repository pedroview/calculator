import React from "react";
import ReactDOM from "react-dom";

// component entry and mui theme config
import Calculator from "./component/calculator";
import theme from "./source/theme";

// Material UI
import { MuiThemeProvider } from "@material-ui/core";


ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Calculator />,
  </MuiThemeProvider>,
  document.getElementById("root")
);
