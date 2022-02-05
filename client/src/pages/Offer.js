import { Component } from "react";
import { styled } from "@mui/material/styles";
import NavbarTop from "../components/ui/NavbarTop";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import OfferImage from "../graphics/tempImages/sample_offer_1.jpg";

const Item = styled("div")(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.main,
}));

const displayedOffer = {
  title: "Stworzę Ci najlepszy riff na świecie!",
  imgurl: "../graphics/tempImages/sample_offer_1.jpg",
};

class Offer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <NavbarTop />
        <Grid
          container
          spacing={2}
          justifyContent="flex-start"
          direction="row"
          alignItems="center"
        >
          <Grid item xs={6}>
            <Item>
              <Typography variant="h5">{displayedOffer.title}</Typography>
              <img
                alt="Oferta - zdjęcie"
                src={OfferImage}
                width="50%"
                height="50%"
              />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>Hello World</Item>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Offer;
