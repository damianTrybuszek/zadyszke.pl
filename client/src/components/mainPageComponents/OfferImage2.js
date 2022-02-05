import { Component } from "react";
import sample_offer_2 from "../../graphics/tempImages/sample_offer_2.jpg";

class OfferImage2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <img
        alt="Oferta - zdjęcie"
        src={sample_offer_2}
        width="300"
        height="225"
      />
    );
  }
}

export default OfferImage2;
