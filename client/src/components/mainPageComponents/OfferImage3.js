import { Component } from "react";
import sample_offer_3 from "../../graphics/tempImages/sample_offer_3.jpg";

class OfferImage3 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <img
        alt="Oferta - zdjęcie"
        src={sample_offer_3}
        width="300"
        height="225"
      />
    );
  }
}

export default OfferImage3;
