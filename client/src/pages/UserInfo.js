import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import OffersListEmpty from "../components/userPageComponents/OffersListEmpty";
import NavbarTop from "../components/ui/NavbarTop";
import UserOffersButton from "../components/userPageComponents/UserOffersButton";
import UserOrdersButton from "../components/userPageComponents/UserOrdersButton.js";
import lady_banner from "../graphics/tempImages/main_banner_lady_cutoff.png";
import sample_profile_picture from "../graphics/tempImages/sample_profile_picture.png";
import UserSafetyButton from "../components/userPageComponents/UserSafetyButton";
import UserInfoButtonActive from "../components/userPageComponents/UserInfoButtonActive";
import { Typography } from "@mui/material";
import UserTheme from "../components/userPageComponents/UserTheme";
import { Repeat } from "@mui/icons-material";
import UserDescription from "../components/userPageComponents/UserDescription";
import UserQualities from "../components/userPageComponents/UserQualities";
import UserSkills from "../components/userPageComponents/UserSkills";
import UserEducation from "../components/userPageComponents/UserEducation";
import UserCertificates from "../components/userPageComponents/UserCertificates";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
}));

class UserInfo extends Component {
  render() {
    return (
      <div>

        <NavbarTop />
        <Box sx={{ width: "100%", display: 'grid', gridTemplateColumns:'repeat(15, 1fr)', gap:5, gridAutoRows:'repeat(15, 1fr)'}}>
          <Item sx={{ gridRow: '2', gridColumn: '2/5', display: 'grid' }}><UserInfoButtonActive /></Item>
          <Item sx={{ gridRow: '3', gridColumn: '2/5', display: 'grid'}}><UserSafetyButton /></Item>
          <Item sx={{ gridRow: '4', gridColumn: '2/5', display: 'grid'}}><UserOrdersButton /></Item>
          <Item sx={{ gridRow: '5', gridColumn: '2/5', display: 'grid'}}><UserOffersButton /></Item>
          
          <Item sx={{ gridRow: '2/8', gridColumn: '12/15'}}><UserTheme /></Item>
          <Item sx={{ gridRow: '2/4', gridColumn: '5/12'}}><UserDescription /></Item>
          <Item sx={{ gridRow: '4/6', gridColumn: '5/12'}}><UserSkills /></Item>
          <Item sx={{ gridRow: '6/10', gridColumn: '5/12'}}><UserEducation /></Item>
          <Item sx={{ gridRow: '10/14', gridColumn: '5/12'}}><UserCertificates /></Item>
          </Box>
      </div>
    );
  }
}

export default UserInfo;
