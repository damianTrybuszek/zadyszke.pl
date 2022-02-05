import { Component } from "react";
import OfferImage from "./OfferImage";
import Rating from "../ui/Rating";
import { Typography } from "@mui/material";


class SingleOfferPreview extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
      {/* <OfferImage offerName={this.props.offerName}/> */}
      <Typography variant="h6">
      {this.props.title}
      </Typography>
      <Rating />
      </div>
      );
    }
  }
  
  export default SingleOfferPreview;
  