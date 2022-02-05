import { Component } from "react";
import NavbarTop from "../components/ui/NavbarTop";
import RecommendedOffersCarousel from "../components/mainPageComponents/RecommendedOffersCarousel.js";
import CategoriesAd from "../components/mainPageComponents/CategoriesAd.js";
import MainBanner from "../components/mainPageComponents/MainBanner"
import MainAd from "../components/mainPageComponents/MainAd"
import MainInstruction from "../components/mainPageComponents/MainInstruction";

class MainNotLoggedInPage extends Component {
  render() {
    return (
      <div>
        <NavbarTop />
        <MainBanner />
        <RecommendedOffersCarousel />
        <MainAd />
        <MainInstruction />
        <CategoriesAd />
        <RecommendedOffersCarousel />
      </div>

    );
  }
}

export default MainNotLoggedInPage;