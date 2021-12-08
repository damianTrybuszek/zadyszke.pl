import { Component } from "react";
import { Typography } from "@mui/material";
import smallCategory from "./smallCategory";

class CategoriesAd extends Component {
  render(props) {
    return (
      <div>
        <Typography>Biznes</Typography>
        <smallCategory title="Biznes" imagePath="../graphics/icons/money-location.svg" />
      </div>
    );
  }
}

export default CategoriesAd;
