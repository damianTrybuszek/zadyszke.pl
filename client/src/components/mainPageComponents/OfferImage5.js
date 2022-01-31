import { Component } from "react";
import sample_offer_5 from "../../graphics/tempImages/sample_offer_5.jpg";

class OfferImage5 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <img
        alt="Oferta - zdjęcie"
        src={sample_offer_5}
        width="300"
        height="225"
      />
    );
  }
}

export default OfferImage5;
