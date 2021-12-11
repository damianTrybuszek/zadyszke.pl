import { Component } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Card from "../Card";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled("div")(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.primary,
}));

class CreateGig1 extends Component {
  render() {
    return (
      <div>
          <Box component="form" noValidate sx={{ mt: 3, border: 1, borderRadius: 5 }}>
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Grid item xs={12}>
                <Item>
                  <Typography variant="h4">Tytuł</Typography>
                </Item>
                <Item>
                  <TextField
                    name="title"
                    multiline={true}
                    rows={5}
                    required
                    fullWidth
                    id="title"
                    label="Wykonam / Zaprojektuję / Stworzę..."
                    autoFocus
                  />
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <Typography variant="h4">Kategoria</Typography>
                </Item>
                <Item>
                  <TextField
                    name="title"
                    multiline={true}
                    rows={5}
                    required
                    fullWidth
                    id="title"
                    label="Wykonam / Zaprojektuję / Stworzę..."
                  />
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <Typography variant="h4">Tagi</Typography>
                </Item>
                <Item>
                  <TextField
                    name="title"
                    multiline={true}
                    rows={5}
                    required
                    fullWidth
                    id="title"
                    label="Minimum 3 tagi"
                  />
                </Item>
              </Grid>
            </Grid>
          </Box>
      </div>
    );
  }
}

export default CreateGig1;
