import { Component } from "react";
import sample_offer_6 from "../../graphics/tempImages/sample_offer_6.jpg";

class OfferImage6 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <img
        alt="Oferta - zdjęcie"
        src={sample_offer_6}
        width="300"
        height="225"
      />
    );
  }
}

export default OfferImage6;
