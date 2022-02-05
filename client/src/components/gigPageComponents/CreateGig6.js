import { Component } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import OfferPicturesSlider from "./OfferPicturesSlider";
import OfferVersions from "./OfferVersions";

const displayedOffer = {
  title: "Stworzę Ci najlepszy riff na świecie!",
  content:
    "Za jedynie 10 złotych napiszę Ci kilka sekund muzyki, które zmienią życie każdego!",
};

const KupTerazButton = styled(Button)(({ theme }) => ({
  marginTop: 10,
  boxShadow: "none",
  textTransform: "none",
  fontSize: 25,
  padding: "10px 50",
  border: "1px solid",
  borderColor: theme.palette.primary.orange,
  lineHeight: 1,
  fontFamily: ["Poppins", "sans-serif"],
  backgroundColor: theme.palette.primary.orange,
  color: theme.palette.primary.white,
  minWidth: 350,
}));

const KontaktZeSprzedawcaButton = styled(Button)(({ theme }) => ({
  marginTop: 10,
  boxShadow: "none",
  textTransform: "none",
  fontSize: 25,
  padding: "10px 50",
  border: "1px solid",
  borderColor: theme.palette.primary.orange,
  lineHeight: 1,
  fontFamily: ["Poppins", "sans-serif"],
  color: theme.palette.primary.white,
  minWidth: 350,
}));

const Item = styled("div")(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.primary,
}));

class CreateGig6 extends Component {
  render() {
    return (
      <div>
        <Box
          component="form"
          noValidate
          sx={{ mt: 3, border: 1, borderRadius: 5, padding: 5 }}
        >
          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" align="left">
              OPUBLIKUJ
            </Typography>
          </Box>
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
              </Item>
              <Item>
                <OfferPicturesSlider />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ border: 1, padding: 5 }}>
                <Item>
                  <OfferVersions />
                </Item>
                <Item>
                  <KupTerazButton>Kup teraz</KupTerazButton>
                </Item>
                <Item>
                  <KontaktZeSprzedawcaButton>
                    Kontakt ze sprzedawcą
                  </KontaktZeSprzedawcaButton>
                </Item>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <Typography variant="h5" align="center">
                  OPIS
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <Typography variant="h6" align="left">
                  {displayedOffer.content}
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default CreateGig6;
