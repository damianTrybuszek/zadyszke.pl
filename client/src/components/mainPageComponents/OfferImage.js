import { Component } from "react";
import sample_offer_1 from "../../graphics/tempImages/sample_offer_1.jpg";

class OfferImage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <img
        alt="Oferta - zdjęcie"
        src={sample_offer_1}
        width="300"
        height="225"
      />
    );
  }
}

export default OfferImage;
