import { Component } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import NavbarTop from "../components/ui/NavbarTop";
import UserOffersButton from "../components/userPageComponents/UserOffersButton";
import UserOrdersButtonActive from "../components/userPageComponents/UserOrdersButtonActive";
import UserSafetyButton from "../components/userPageComponents/UserSafetyButton";
import UserInfoButton from "../components/userPageComponents/UserInfoButton";
import UserThemeBig from "../components/userPageComponents/UserThemeBig";
import OrdersListEmpty from "../components/userPageComponents/OrdersListEmpty";

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
                  <UserOrdersButtonActive />
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
                <OrdersListEmpty />
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
