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
import UserTheme from "../components/UserTheme";
import { Repeat } from "@mui/icons-material";
import style from '../components/style.css'

const Item = styled("div")(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.primary,
}));


class OffersListEmpty extends Component {
  render() {
    return (
      <div>
        <div className="offerList">
          <Box sx={{ width: "100%", display: 'grid', gridTemplateColumns: 'repeat(15, 1fr)', gap: 5, gridAutoRows: 'repeat(4, 1fr)' }}>
            <Item sx={{ gridRow: '2', gridColumn: '2/16', display: 'grid' }}><Typography variant="h5">Wygląda na to, że nie masz jeszcze ogłoszeń.</Typography></Item>
            <Item sx={{ gridRow: '3', gridColumn: '8/15', display: 'grid' }}><NewOfferButton /></Item>
          </Box>
        </div>
      </div>
    );
  };
};

export default OffersListEmpty;
