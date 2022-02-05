import * as React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
      <Button variant="contained" type="submit" style={{width:'100%'}}>Zarejestruj się</Button>
    </ThemeProvider>
  );
}
