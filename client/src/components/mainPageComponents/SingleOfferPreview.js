import { Component } from "react";
import OfferImage from "./OfferImage";
import Rating from "../ui/Rating";

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
