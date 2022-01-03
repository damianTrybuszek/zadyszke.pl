import { Component } from "react";
import NavbarTop from "../components/ui/NavbarTop";
import RecommendedOffersCarousel from "../components/mainPageComponents/RecommendedOffersCarousel.js";
import CategoriesAd from "../components/mainPageComponents/CategoriesAd.js";
import MainBanner from "../components/mainPageComponents/MainBanner"

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