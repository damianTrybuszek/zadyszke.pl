import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import OffersListEmpty from "../components/OffersListEmpty";
import NavbarTop from "../components/NavbarTop";
import UserOffersButton from "../components/UserOffersButton";
import UserOrdersButton from "../components/UserOrdersButton.js";
import lady_banner from "../graphics/tempImages/main_banner_lady_cutoff.png";
import sample_profile_picture from "../graphics/tempImages/sample_profile_picture.png";
import UserSafetyButton from "../components/UserSafetyButton";
import UserInfoButtonActive from "../components/UserInfoButtonActive";
import { Typography } from "@mui/material";
import UserTheme from "../components/UserTheme";
import { Repeat } from "@mui/icons-material";
import UserDescription from "../components/UserDescription";
import UserQualities from "../components/UserQualities";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
}));

class UserInfo extends Component {
  render() {
    return (
      <div>
        <NavbarTop />

        <Box sx={{ width: "100%", display: 'grid', gridTemplateColumns:'repeat(15, 1fr)', gap:5, gridAutoRows:'repeat(15, 1fr)'}}>
          <Item sx={{ gridRow: '2', gridColumn: '2/5', display: 'grid'}}><UserInfoButtonActive /></Item>
          <Item sx={{ gridRow: '3', gridColumn: '2/5', display: 'grid'}}><UserSafetyButton /></Item>
          <Item sx={{ gridRow: '4', gridColumn: '2/5', display: 'grid'}}><UserOrdersButton /></Item>
          <Item sx={{ gridRow: '5', gridColumn: '2/5', display: 'grid'}}><UserOffersButton /></Item>

          <Item sx={{ gridRow: '2/5', gridColumn: '5/12' }}><OffersListEmpty /></Item>
          <Item sx={{ gridRow: '2/7', gridColumn: '12/15'}}><UserTheme /></Item>
          <Item sx={{ gridRow: '7/8', gridColumn: '12/15'}}><UserDescription /></Item>
          <Item sx={{ gridRow: '8/10', gridColumn: '12/15'}}><UserQualities /></Item>
          </Box>
      </div>
    );
  }
}

export default UserInfo;
