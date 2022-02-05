import { Component } from "react";
import sample_offer_9 from "../../graphics/tempImages/sample_offer_9.jpg";

class OfferImage9 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <img
        alt="Oferta - zdjęcie"
        src={sample_offer_9}
        width="300"
        height="225"
      />
    );
  }
}

export default OfferImage9;
