import { Component } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import sample_profile_picture from "../../graphics/tempImages/sample_profile_picture.png";
import ChangePhotoButton from "./ChangePhotoButton"
import AddButtonGoogle from "./AddButtonGoogle"
import AddButtonFacebook from "./AddButtonFacebook"
import AddButtonInstagram from "./AddButtonInstagram"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';


const Item = styled("div")(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.primary,
}));

class CreateProfile3 extends Component {
  render() {
    return (
      <div>
        <Box
          component="form"
          noValidate
          sx={{ padding: 5 }}
        >
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
                Badania dowodzą, że ludzie chętniej kupują od ludzi z którymi czują bardziej osobistą więź, 
                więc nie ma na co czekać - dodaj swoje konta social media, dzięki którym łatwiej Cię odnajdą.
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
                <GoogleIcon fontSize="large"/> Google
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
                <FacebookIcon fontSize="large"/> Facebook
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
                <InstagramIcon fontSize="large"/> Instagram
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
                <Typography variant="h5" align="left" >
                  Zdjęcie profilowe
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={3} paddingBottom={5}>
              <Item>
              <img
                alt="Banner - zdjęcie"
                src={sample_profile_picture}
                width="100%"
                height="100%"
              />
              </Item>
            </Grid>
            <Grid item xs={2}>
              <Item>
                
              </Item>
            </Grid>

            <Grid item xs={3}>
              <Item>

              <ChangePhotoButton />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
              <Typography variant="h5" align="left">
                  Opis
                </Typography>
              </Item>
            </Grid>

            <Grid item xs={8}>
              <Item>
                <TextField
                  sx={{ label: { color: "white" } }}
                  name="description"
                  multiline={true}
                  rows={5}
                  fullWidth
                  id="title"
                  label="Opis"
                  autoFocus
                  
                />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default CreateProfile3;
