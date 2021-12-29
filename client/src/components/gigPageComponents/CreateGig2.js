import { Component } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import OfferType from "./OfferType";
import tempImage from "../../graphics/tempImages/sample_offer_1.jpg";
import OfferRedosAmountSelect from "./OfferRedosAmountSelect";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Price from "./Price";

const Item = styled("div")(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.primary,
}));

class CreateGig2 extends Component {
  render() {
    return (
      <div>
        <Box
          component="form"
          noValidate
          sx={{ mt: 3, border: 1, borderRadius: 5, padding: 5 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Item>
                <Typography variant="h5" align="left">
                  Pakiety
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <OfferType title="Podstawowy" imageUrl={tempImage} />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <OfferType title="Standardowy" imageUrl={tempImage} />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <OfferType title="Premium" imageUrl={tempImage} />
              </Item>
            </Grid>

            <Grid item xs={2}>
              <Item>
                <Typography variant="h5" align="left">
                  Ilość Poprawek
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <OfferRedosAmountSelect />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <OfferRedosAmountSelect />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <OfferRedosAmountSelect />
              </Item>
            </Grid>

            <Grid item xs={2}>
              <Item>
                <Typography variant="h5" align="left">
                  Przyspieszona dostawa
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <CheckCircleOutlineIcon
                  sx={{ fontSize: (theme) => theme.shape.adIconSize }}
                />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <CheckCircleOutlineIcon
                  sx={{ fontSize: (theme) => theme.shape.adIconSize }}
                />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <CheckCircleOutlineIcon
                  sx={{ fontSize: (theme) => theme.shape.adIconSize }}
                />
              </Item>
            </Grid>

            <Grid item xs={2}>
              <Item>
                <Typography variant="h5" align="left">
                  Cena
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <Price price="10"/>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <Price price="50"/>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <Price price="600"/>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default CreateGig2;
