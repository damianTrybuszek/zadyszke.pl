import * as React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: '#ED8627',
    },
  },
});

export default function BasicButtons() {
  return (
    <ThemeProvider theme={theme}>
        <Button variant="text" style={{ width: "100%" }}>
          Anuluj
        </Button>
    </ThemeProvider>
  );
}
