import { Component } from "react";
import NavbarTop from "../components/NavbarTop";
import RecommendedOffersCarousel from "../components/RecommendedOffersCarousel.js";
import CategoriesAd from "../components/CategoriesAd.js";
import MainBanner from "../components/MainBanner"
import MainAd from "../components/MainAd"
import MainInstruction from "../components/MainInstruction";

class MainNotLoggedInPage extends Component {
  render() {
    return (
      <div>
        <NavbarTop />
        <MainBanner />
        <MainAd />
        <MainInstruction />
        <CategoriesAd />
        <RecommendedOffersCarousel />
      </div>

    );
  }
}

export default MainNotLoggedInPage;