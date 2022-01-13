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

const paddingBottomValue = 5;

const Item = styled("div")(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.primary,
}));

class UserInfo extends Component {
  render() {
    return (
      <div>
        <NavbarTop />

        <Box sx={{ display: "grid" }}>
          <Grid container spacing={5}>
            <Grid
              direction="column"
              justifyContent="center"
              item
              xs={2}
              marginLeft={5}
            >
              <Grid paddingBottom={paddingBottomValue}>
                <Item>
                  <UserInfoButtonActive />
                </Item>
              </Grid>
              <Grid paddingBottom={paddingBottomValue}>
                <Item>
                  <UserSafetyButton />
                </Item>
              </Grid>
              <Grid paddingBottom={paddingBottomValue}>
                <Item>
                  <UserOrdersButton />
                </Item>
              </Grid>
              <Grid paddingBottom={paddingBottomValue}>
                <Item>
                  <UserOffersButton />
                </Item>
              </Grid>
            </Grid>

            <Grid
              direction="column"
              justifyContent="center"
              item
              xs
            >
                   <Grid paddingBottom={paddingBottomValue}>
                <Item>
                  <UserDescription />
                </Item>
              </Grid>
              <Grid paddingBottom={paddingBottomValue}>
                <Item>
                  <UserSkills />
                </Item>
              </Grid>
              <Grid paddingBottom={paddingBottomValue}>
                <Item>
                  <UserEducation />
                </Item>
              </Grid>
              <Grid paddingBottom={paddingBottomValue}>
                <Item>
                  <UserCertificates />
                </Item>
              </Grid>
            </Grid>
            <Grid item xs={2} marginRight={5}>
              <Item>
                <UserTheme />
              </Item>
            </Grid>
          </Grid>

          </Box>
      </div>
    );
  }
}

export default UserInfo;
