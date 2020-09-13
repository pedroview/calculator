// Material UI
import { createMuiTheme } from "@material-ui/core";
import amber from "@material-ui/core/colors/amber";
import green from "@material-ui/core/colors/green";

export default () =>
  createMuiTheme({
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
