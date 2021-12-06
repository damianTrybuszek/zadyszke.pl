import { Component } from "react";
import OfferImage from "../components/OfferImage";
import Rating from "../components/Rating";

class SingleOfferPreview extends Component {
  render() {
    return (
      <div>
        <OfferImage />
        <h4>This is a sample title, fetch me up!</h4>
        <Rating />
      </div>
    );
  }
}

export default SingleOfferPreview;
