import { Component } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import OffersListEmpty from "../components/userPageComponents/OffersListEmpty";
import NavbarTop from "../components/ui/NavbarTop";
import UserOffersButtonActive from "../components/userPageComponents/UserOffersButtonActive";
import UserOrdersButton from "../components/userPageComponents/UserOrdersButton";
import UserSafetyButton from "../components/userPageComponents/UserSafetyButton";
import UserInfoButton from "../components/userPageComponents/UserInfoButton";
import UserThemeBig from "../components/userPageComponents/UserThemeBig";

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
                  <UserOffersButtonActive />
                </Item>
              </Grid>
            </Grid>

            <Grid item xs>
              <Item>
                <OffersListEmpty />
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
