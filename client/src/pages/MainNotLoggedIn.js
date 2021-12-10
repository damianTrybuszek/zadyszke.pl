import { Component } from "react";
import NavbarTop from "../components/NavbarTop";
import RecommendedOffersCarousel from "../components/RecommendedOffersCarousel.js";
import CategoriesAd from "../components/CategoriesAd.js";
import MainBanner from "../components/MainBanner"

class MainNotLoggedInPage extends Component {
  render() {
    return (
      <div>
        <NavbarTop />
        <MainBanner />
        <RecommendedOffersCarousel />
        <CategoriesAd />
      </div>

    );
  }
}

export default MainNotLoggedInPage;