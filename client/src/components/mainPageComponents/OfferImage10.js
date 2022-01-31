import { Component } from "react";
import sample_offer_10 from "../../graphics/tempImages/sample_offer_10.jpg";

class OfferImage10 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <img
        alt="Oferta - zdjęcie"
        src={sample_offer_10}
        width="300"
        height="225"
      />
    );
  }
}

export default OfferImage10;
