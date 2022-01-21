import { Component } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import NavbarTop from "../components/ui/NavbarTop";
import UserOffersButton from "../components/userPageComponents/UserOffersButton";
import UserOrdersButton from "../components/userPageComponents/UserOrdersButton.js";
import UserSafetyButtonActive from "../components/userPageComponents/UserSafetyButtonActive";
import UserInfoButton from "../components/userPageComponents/UserInfoButton";
import UserThemeBig from "../components/userPageComponents/UserThemeBig";
import SafetyForm from "../components/userPageComponents/SafetyForm";

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
                  <UserInfoButton />
                </Item>
              </Grid>
              <Grid paddingBottom={paddingBottomValue}>
                <Item>
                  <UserSafetyButtonActive />
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

            <Grid item xs>
              <Item>
                <SafetyForm />
              </Item>
            </Grid>
            <Grid item xs={2} marginRight={5}>
              <Item>
                <UserThemeBig />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default UserInfo;
