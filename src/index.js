import React from "react";
import ReactDOM from "react-dom";
// Material UI
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import amber from "@material-ui/core/colors/amber";
import green from "@material-ui/core/colors/green";
// component entry and main css
import Calculator from "./component";
import "./index.css";

const theme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: {
      main: green.A400,
    },
    spacing: 24,
  },
  overrides: {
    MuiPaper: {
      root: {
        overflow: "hidden",
        margin: 5,
        boxSizing: "border-box",
      },
      rounded: {
        borderRadius: 5,
      },
    },
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Calculator />,
  </MuiThemeProvider>,
  document.getElementById("root")
);
