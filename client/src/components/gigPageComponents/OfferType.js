import { Component } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

class OfferType extends Component {
  constructor(props) {
    super(props);
    this.title = "Tytuł";
    this.imageUrl = "";
  }
  render() {
    return (
      <Box>
        <Typography variant="h6" align="center">
          {this.props.title}
        </Typography>
        <img
          alt="Oferta - zdjęcie"
          src={this.props.imageUrl}
          width="250"
          height="175"
        />
      </Box>
    );
  }
}

export default OfferType;
