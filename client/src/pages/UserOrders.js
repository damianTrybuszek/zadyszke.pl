import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import OffersListEmpty from "../components/userPageComponents/OffersListEmpty";
import NavbarTop from "../components/ui/NavbarTop";
import UserOffersButton from "../components/userPageComponents/UserOffersButton";
import UserOrdersButtonActive from "../components/userPageComponents/UserOrdersButtonActive";
import lady_banner from "../graphics/tempImages/main_banner_lady_cutoff.png";
import sample_profile_picture from "../graphics/tempImages/sample_profile_picture.png";
import UserSafetyButton from "../components/userPageComponents/UserSafetyButton";
import UserInfoButton from "../components/userPageComponents/UserInfoButton";
import { Typography } from "@mui/material";
import UserThemeBig from "../components/userPageComponents/UserThemeBig";
import { Repeat } from "@mui/icons-material";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
}));

class UserInfo extends Component {
  render() {
    return (
      <div>
        <NavbarTop />

        <Box sx={{ width: "100%", display: 'grid', gridTemplateColumns:'repeat(15, 1fr)', gap:5, gridAutoRows:'repeat(15, 1fr)'}}>
          <Item sx={{ gridRow: '2', gridColumn: '2/5', display: 'grid'}}><UserInfoButton /></Item>
          <Item sx={{ gridRow: '3', gridColumn: '2/5', display: 'grid'}}><UserSafetyButton /></Item>
          <Item sx={{ gridRow: '4', gridColumn: '2/5', display: 'grid'}}><UserOrdersButtonActive /></Item>
          <Item sx={{ gridRow: '5', gridColumn: '2/5', display: 'grid'}}><UserOffersButton /></Item>


          <Item sx={{ gridRow: '2/8', gridColumn: '12/15'}}><UserThemeBig /></Item>
          </Box>
      </div>
    );
  }
}

export default UserInfo;