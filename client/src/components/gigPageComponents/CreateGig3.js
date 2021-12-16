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

class CreateGig3 extends Component {
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
                  label="Dodaj opis swojej usługi..."
                  autoFocus
                />
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <Typography variant="h4">FAQ</Typography>
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
                  label="Pytanie / Odpowiedź / Dodaj..."
                />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default CreateGig3;
