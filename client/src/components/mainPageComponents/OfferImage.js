import { Component } from "react";
import sample_offer_1 from "../../graphics/tempImages/sample_offer_1.jpg";

class OfferImage extends Component {
  render() {
    return (
      <img
        alt="Oferta - zdjęcie"
        src={sample_offer_1}
        width="100%"
        height="100%"
      />
    );
  }
}

export default OfferImage;
