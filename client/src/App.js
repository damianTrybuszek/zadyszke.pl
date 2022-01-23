import React from "react";
import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainNotLoggedInPage from "./pages/MainNotLoggedIn";
import MainLoggedInPage from "./pages/MainLoggedIn";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import CreateGigPage from "./pages/CreateGig";
import Footer from "./components/ui/Footer";
import UserInfo from "./pages/UserInfo";
import UserSafety from "./pages/UserSafety";
import UserOrders from "./pages/UserOrders";
import UserOffers from "./pages/UserOffers";
import CreateProfile from "./pages/CreateProfile";
// import Offer from "./pages/Offer"

const theme = createTheme({
  palette: {
    background: "#2F303A",
    primary: {
      main: "#ecbf9533",
      white: "#FFFFFF",
      black: "#000000",
      orange: "#ED8627",
    },
    secondary: {
      main: "#2F303A",
      white: "#FFFFFF",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#000000",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    mainBannerOrange: {
      color: "#ED8627",
      fontWeight: 400,
      fontSize: "2.125rem",
    },
    mainBannerRegular: {
      color: "#FFFFFF",
      fontWeight: 400,
      fontSize: "2.125rem",
    },
  },

  shape: {
    adIconSize: 50,
    adIconSizeLarge: 200,
  },
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
            <Route path="/create-gig" element={<CreateGigPage />} />
            <Route path="/user/info" element={<UserInfo />} />
            <Route path="/user/safety" element={<UserSafety />} />
            <Route path="/user/orders" element={<UserOrders />} />
            <Route path="/user/offers" element={<UserOffers />} />
            <Route path="/create-profile" element={<CreateProfile />} />
            {/* <Route path="/offer/" element={<Offer />} /> */}
          </Routes>
          <Footer />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
