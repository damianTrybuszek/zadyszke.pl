import React from "react";
import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import MainNotLoggedInPage from "./pages/MainNotLoggedIn";
import MainLoggedInPage from "./pages/MainLoggedIn";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ED8627",
      white: "#FFFFFF"
    },
    secondary: {
      main: "#2F303A",
      white: "#FFFFFF"
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#000000"
    }
  },
  typography: {
    fontFamily: "Poppins"
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route exact path="/" element={<MainNotLoggedInPage />} />
            <Route path="/logged-in" element={<MainLoggedInPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
