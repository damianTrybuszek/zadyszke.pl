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

export default function SearchButton() {
  return (
    <ThemeProvider theme={theme}>
      <Button size="medium" variant="outlined">Szukaj</Button>
    </ThemeProvider>
  );
}
