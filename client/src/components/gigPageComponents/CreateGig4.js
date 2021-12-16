import { Component } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled("div")(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.primary,
}));

class CreateGig4 extends Component {
  render() {
    return (
      <div>
        <Box
          component="form"
          noValidate
          sx={{ mt: 3, border: 1, borderRadius: 5 }}
        >
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Item>
                <Typography variant="h4">Dodaj opis swoich wymagań</Typography>
              </Item>
              <Item>
                <TextField
                  sx={{ label: { color: "white" } }}
                  name="title"
                  multiline={true}
                  rows={5}
                  required
                  fullWidth
                  id="title"
                  label="Uwzględnij wszystkie potrzebne Ci informacje aby zacząć pracę nad projektem klienta..."
                  autoFocus
                />
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <Typography variant="h4">Opis</Typography>
              </Item>
              <Item>
                <TextField
                  sx={{ label: { color: "white" } }}
                  name="title"
                  multiline={true}
                  rows={5}
                  required
                  fullWidth
                  id="title"
                  label="Dodaj swoje pytania i wymagania względem oferty..."
                />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default CreateGig4;
