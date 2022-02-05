import { Component } from "react";
import sample_offer_11 from "../../graphics/tempImages/sample_offer_11.jpg";

class OfferImage11 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <img
        alt="Oferta - zdjęcie"
        src={sample_offer_11}
        width="300"
        height="225"
      />
    );
  }
}

export default OfferImage11;
