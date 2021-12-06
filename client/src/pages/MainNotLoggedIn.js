import { Component } from "react";
import NavbarTop from "../components/NavbarTop";
import RecommendedOffersCarousel from "../components/RecommendedOffersCarousel.js";

class MainNotLoggedInPage extends Component {
  render() {
    return (
      <div>
        <NavbarTop />
        <h1>Main page for users that are not logged in</h1>
        <RecommendedOffersCarousel/>
      </div>
    );
  }
}

export default MainNotLoggedInPage;
