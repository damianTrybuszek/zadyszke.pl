import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import NavbarTop from "../components/NavbarTop";
import NewOfferButton from "../components/NewOfferButton";
import UserOrdersButton from "../components/UserOrdersButton.js";
import lady_banner from "../graphics/tempImages/main_banner_lady_cutoff.png";
import sample_profile_picture from "../graphics/tempImages/sample_profile_picture.png";
import UserSafetyButton from "../components/UserSafetyButton";
import FormBackground from "../components/FormBackground";
import { Typography } from "@mui/material";

import { CenterFocusStrong, Repeat } from "@mui/icons-material";
import "./style.css";

const Item = styled("div")(({ theme }) => ({
  textAlign: "center",
}));

class OffersListEmpty extends Component {
  render() {
    return (
      <Container className="userTheme">
        <Box
          sx={{
            width: "100%",
            display: "grid",
          }}
        >
          <Grid alignItems="flex-start">
            <Item>
              <img
                alt="Banner - zdjęcie"
                src={sample_profile_picture}
                width="200"
                height="100%"
              />
            </Item>
            <Item>
              <Typography variant="h5">Super użytkownik</Typography>
            </Item>
            <Item>
              <Typography variant="h7">Miasto: Kraków</Typography>
            </Item>
          </Grid>
        </Box>
      </Container>
    );
  }
}

export default OffersListEmpty;
