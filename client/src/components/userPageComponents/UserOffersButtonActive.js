import * as React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ED8627",
      textColor: "#ffffff",
    },
  },
});

export default function BasicButtons() {
  return (
    <ThemeProvider theme={theme}>
      <Link to="/user/offers">
        <Button variant="contained" style={{ width: "100%" }}>
          Twoje oferty
        </Button>
      </Link>
    </ThemeProvider>
  );
}
