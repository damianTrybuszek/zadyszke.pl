import { Component } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import OfferType from "./OfferType";
import tempImage from "../../graphics/tempImages/sample_offer_1.jpg";
import OfferRedosAmountSelect from "./OfferRedosAmountSelect";
import Price from "./Price";
import Button from "@mui/material/Button";

const SaveButton = styled(Button)(({ theme }) => ({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 25,
  padding: "10px 100px",
  border: "1px solid",
  borderColor: theme.palette.primary.orange,
  lineHeight: 1,
  fontFamily: ["Poppins", "sans-serif"],
  backgroundColor: theme.palette.primary.orange,
  color: theme.palette.primary.white,
}));

const Item = styled("div")(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.primary,
}));

const BasicCheckbox = styled(Checkbox)(({ theme }) => ({
  color: "white",
  boxShadow: "white",
}));

class CreateGig2 extends Component {
  constructor() {
    super();
    this.state = {
      basicRedos: 0,
      standardRedos: 0,
      premiumRedos: 0,
      basicSpeedDelivery: false,
      standardSpeedDelivery: false,
      premiumSpeedDelivery: false,
      basicPrice: 0,
      standardPrice: 0,
      premiumPrice: 0,
    };
    this.handleBasicRedosChange = this.handleBasicRedosChange.bind(this);
    this.handleStandardRedosChange = this.handleStandardRedosChange.bind(this);
    this.handlePremiumRedosChange = this.handlePremiumRedosChange.bind(this);
    this.handleBasicSpeedDeliveryChange =
      this.handleBasicSpeedDeliveryChange.bind(this);
    this.handleStandardSpeedDeliveryChange =
      this.handleStandardSpeedDeliveryChange.bind(this);
    this.handlePremiumSpeedDeliveryChange =
      this.handlePremiumSpeedDeliveryChange.bind(this);
    this.handleBasicPriceChange = this.handleBasicPriceChange.bind(this);
    this.handleStandardPriceChange = this.handleStandardPriceChange.bind(this);
    this.handlePremiumPriceChange = this.handlePremiumPriceChange.bind(this);
  }

  handleBasicRedosChange(event) {
    this.setState({
      basicRedos: event.target.value,
    });
  }

  handleStandardRedosChange(event) {
    this.setState({
      standardRedos: event.target.value,
    });
  }

  handlePremiumRedosChange(event) {
    this.setState({
      premiumRedos: event.target.value,
    });
  }

  handleBasicSpeedDeliveryChange() {
    this.setState({
      basicSpeedDelivery: !this.state.basicSpeedDelivery,
    });
  }

  handleStandardSpeedDeliveryChange() {
    this.setState({
      standardSpeedDelivery: !this.state.standardSpeedDelivery,
    });
  }

  handlePremiumSpeedDeliveryChange() {
    this.setState({
      premiumSpeedDelivery: !this.state.premiumSpeedDelivery,
    });
  }

  handleBasicPriceChange(event) {
    this.setState({
      basicPrice: event.target.value,
    });
  }

  handleStandardPriceChange(event) {
    this.setState({
      standardPrice: event.target.value,
    });
  }

  handlePremiumPriceChange(event) {
    this.setState({
      premiumPrice: event.target.value,
    });
  }

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
                <OfferRedosAmountSelect
                  handleChange={this.handleBasicRedosChange}
                  changesAmount={this.state.basicRedos}
                />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <OfferRedosAmountSelect
                  handleChange={this.handleStandardRedosChange}
                  changesAmount={this.state.standardRedos}
                />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <OfferRedosAmountSelect
                  handleChange={this.handlePremiumRedosChange}
                  changesAmount={this.state.premiumRedos}
                />
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
                <BasicCheckbox
                  size="large"
                  onChange={this.handleBasicSpeedDeliveryChange}
                />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <BasicCheckbox
                  size="large"
                  onChange={this.handleStandardSpeedDeliveryChange}
                />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <BasicCheckbox
                  size="large"
                  onChange={this.handlePremiumSpeedDeliveryChange}
                />
              </Item>
            </Grid>

            <Grid item xs={2}>
              <Item>
                <Typography variant="h5" align="left">
                  Cena (PLN)
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <Price
                  priceVale={this.state.basicPrice}
                  handleChange={this.handleBasicPriceChange}
                />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <Price
                  priceVale={this.state.standardPrice}
                  handleChange={this.handleStandardPriceChange}
                />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <Price
                  priceVale={this.state.premiumPrice}
                  handleChange={this.handlePremiumPriceChange}
                />
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item></Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <SaveButton
                  onClick={() => this.props.saveStateFromPage2(this.state)}
                >
                  Zapisz
                </SaveButton>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default CreateGig2;
