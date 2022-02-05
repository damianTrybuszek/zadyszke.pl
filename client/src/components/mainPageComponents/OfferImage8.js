import { Component } from "react";
import sample_offer_8 from "../../graphics/tempImages/sample_offer_8.jpg";

class OfferImage8 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <img
        alt="Oferta - zdjęcie"
        src={sample_offer_8}
        width="300"
        height="225"
      />
    );
  }
}

export default OfferImage8;
