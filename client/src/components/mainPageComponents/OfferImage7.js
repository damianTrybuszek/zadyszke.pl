import { Component } from "react";
import sample_offer_7 from "../../graphics/tempImages/sample_offer_7.jpg";

class OfferImage7 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <img
        alt="Oferta - zdjęcie"
        src={sample_offer_7}
        width="300"
        height="225"
      />
    );
  }
}

export default OfferImage7;
