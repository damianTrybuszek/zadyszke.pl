import { Component } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import sample_profile_picture from "../../graphics/tempImages/sample_profile_picture.png";
import ChangePhotoButton from "./ChangePhotoButton"

const Item = styled("div")(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.primary,
}));

class CreateProfile1 extends Component {
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
                  Dane personalne
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <Typography variant="body2" align="left">
                  Powiedz nam coś więcej o sobie. Te informacje zostaną wyświetlone na Twoim profilu, 
                  aby potencjalni klienci mogli Cię lepiej poznać. 
                </Typography>
              </Item>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item>
                <Typography variant="h5" align="left" paddingBottom={5}>
                  Imię i nazwisko
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <TextField
                  sx={{ label: { color: "white" } }}
                  name="name"
                  multiline={false}
                  rows={1}
                  required
                  fullWidth
                  id="title"
                  label="Imię"
                  autoFocus
                  size="small"
                />
              </Item>
            </Grid>

            <Grid item xs={4}>
              <Item>
                <TextField
                  sx={{ label: { color: "white" } }}
                  name="lastName"
                  multiline={false}
                  rows={1}
                  required
                  fullWidth
                  id="title"
                  label="Nazwisko"
                  autoFocus
                  size="small"
                />
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

export default CreateProfile1;
