import { Component } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CategorySelect from "./CategorySelect";
import SubcategorySelect from "./SubcategorySelect";
import TagsSelect from "./TagsSelect"

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
          sx={{ mt: 3, border: 1, borderRadius: 5, padding: 5 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Item>
                <Typography variant="h5" align="left">
                  Dodaj opis wymagań
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
              <Typography variant="subtitle2" align="left">
                  Uwzględnij wszystkie potrzebne Ci informacje aby zacząć pracę nad projektem klienta
                </Typography>
              </Item>
            </Grid>

            <Grid item xs={2}>
              <Item>
                <Typography variant="h5" align="left">
                  Opis
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={10}>
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

export default CreateGig4;
