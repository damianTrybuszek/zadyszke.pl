import { Component } from "react";
import sample_offer_12 from "../../graphics/tempImages/sample_offer_12.jpg";

class OfferImage12 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <img
        alt="Oferta - zdjęcie"
        src={sample_offer_12}
        width="300"
        height="225"
      />
    );
  }
}

export default OfferImage12;
