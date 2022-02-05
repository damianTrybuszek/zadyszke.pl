import * as React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#A11616",
      textColor: "#ffffff",
      // primaryTextColor: "#ffffff",
    },
  },
});

export default function BasicButtons() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" style={{width:'100%'}}> Rejestracja przez google </Button>
    </ThemeProvider>
  );
}
