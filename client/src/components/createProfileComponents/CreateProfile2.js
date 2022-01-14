import { Component } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import SpecialisationSelect from "./SpecialisationSelect";
import ProficiencySelect from "./ProficiencySelect"

const Item = styled("div")(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.primary,
}));

class CreateProfile2 extends Component {
  render() {
    return (
      <div>
        <Box component="form" noValidate sx={{ padding: 5 }}>
          <Grid container spacing={2} paddingBottom={5}>
            <Grid item xs={12}>
              <Item>
                <Typography variant="h5" align="left">
                  Twoje kwalifikacje
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <Typography variant="body2" align="left">
                  Ok, czas się wykazać u zachęcić ludzi do kupowania! Kreatywnie
                  opisz co umiesz robić, jak się tego nauczyłeś i co możesz
                  zaoferować swoim potencjalnym klientom.
                </Typography>
              </Item>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item>
                <Typography variant="h5" align="left" paddingBottom={5}>
                  Twoja specjalizacja
                </Typography>
              </Item>
            </Grid>

            <Grid item xs={4}>
              
                <SpecialisationSelect />
          
            </Grid>
            <Grid item xs={4}>
              <Item>
                
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <Typography variant="h5" align="left">
                  Umiejętności
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={4} paddingBottom={5}>
              <Item>
              <TextField
                  sx={{ label: { color: "white" } }}
                  name="skills"
                  multiline={true}
                  rows={1}
                  fullWidth
                  id="skills"
                  label="Wpisz umiejętności"
                  autoFocus
                  size="small"
                />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <ProficiencySelect />
              </Item>
            </Grid>

            <Grid item xs={3}>
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

export default CreateProfile2;
