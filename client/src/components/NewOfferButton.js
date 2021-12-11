import * as React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
      textColor: "#ED8627",
      primaryTextColor: "#ED8627",
    },
  },
});

export default function BasicButtons() {
  return (
    <ThemeProvider theme={theme}>
      <Link to="/user/offer/new">
        <Button variant="contained" style={{width:'100%'}}>Stwórz ogłoszenie</Button>
      </Link>
    </ThemeProvider>
  );
}
