import { Component } from "react";
import NavbarTopCopy from "../components/ui/NavbarTopCopy";
import RecommendedOffersCarousel from "../components/mainPageComponents/RecommendedOffersCarousel.js";
import CategoriesAd from "../components/mainPageComponents/CategoriesAd.js";
import MainBanner from "../components/mainPageComponents/MainBanner"
import MainAd from "../components/mainPageComponents/MainAd"
import MainInstruction from "../components/mainPageComponents/MainInstruction";

class MainLoggedInPage extends Component {
  render() {
    return (
      <div>
        <div>
        <NavbarTopCopy />
        <MainBanner />
        <MainAd />
        <MainInstruction />
        <CategoriesAd />
        <RecommendedOffersCarousel />
      </div>
      </div>
    );
  }
}

export default MainLoggedInPage;
