import { Component } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddButtonGoogle from "./AddButtonGoogle";
import AddButtonFacebook from "./AddButtonFacebook";
import AddButtonInstagram from "./AddButtonInstagram";
import AddButtonSite from "./AddButtonSite";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";

const Item = styled("div")(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.primary,
}));

class CreateProfile3 extends Component {
  render() {
    return (
      <div>
        <Box component="form" noValidate sx={{ padding: 5 }}>
          <Grid container spacing={2} paddingBottom={5}>
            <Grid item xs={12}>
              <Item>
                <Typography variant="h5" align="left">
                  Połączone konta
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <Typography variant="body2" align="left">
                  Badania dowodzą, że ludzie chętniej kupują od ludzi z którymi
                  czują bardziej osobistą więź, więc nie ma na co czekać - dodaj
                  swoje konta social media, dzięki którym łatwiej Cię odnajdą.
                </Typography>
              </Item>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item>
                <Typography variant="h5" align="left" paddingBottom={5}>
                  Social media
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Typography variant="h5" align="left" paddingBottom={5}>
                  <GoogleIcon fontSize="large" /> Google
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={2}>
              <Item>
                <AddButtonGoogle />
              </Item>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={6}>
              <Item>
                <Typography variant="h5" align="left" paddingBottom={5}>
                  <FacebookIcon fontSize="large" /> Facebook
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={2}>
              <Item>
                <AddButtonFacebook />
              </Item>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={6}>
              <Item>
                <Typography variant="h5" align="left" paddingBottom={5}>
                  <InstagramIcon fontSize="large" /> Instagram
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={2}>
              <Item>
                <AddButtonInstagram />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <Typography variant="h5" align="left">
                  Strona internetowa
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={6} paddingBottom={5}>
              <Item>
                <TextField
                  sx={{ label: { color: "white" } }}
                  name="site"
                  multiline={true}
                  rows={1}
                  fullWidth
                  id="site"
                  label="Strona internetowa"
                  autoFocus
                  size="small"
                />
              </Item>
            </Grid>

            <Grid item xs={2}>
              <Item>
                <AddButtonSite />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default CreateProfile3;
