import React from "react";
import ReactDOM from "react-dom";

// Material UI
import { MuiThemeProvider } from "@material-ui/core";
// component entry and main css
import "./index.css";
import Calculator from "./component";
import theme from "./source/theme";

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Calculator />,
  </MuiThemeProvider>,
  document.getElementById("root")
);
