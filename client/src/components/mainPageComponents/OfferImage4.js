import { Component } from "react";
import sample_offer_4 from "../../graphics/tempImages/sample_offer_4.jpg";

class OfferImage4 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <img
        alt="Oferta - zdjęcie"
        src={sample_offer_4}
        width="300"
        height="225"
      />
    );
  }
}

export default OfferImage4;
