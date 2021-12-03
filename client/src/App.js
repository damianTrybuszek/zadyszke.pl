import React from "react";
import { Component } from "react";
import { Route, Routes } from "react-router-dom";

import MainNotLoggedInPage from "./pages/MainNotLoggedIn";
import MainLoggedInPage from "./pages/MainLoggedIn";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Routes>
          <Route exact path="/" element={<MainNotLoggedInPage />} />
          <Route path="/logged-in" element={<MainLoggedInPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
