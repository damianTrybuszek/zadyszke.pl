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

class CreateGig1 extends Component {
  render() {
    return (
      <div>
        <Box
          component="form"
          noValidate
          sx={{ mt: 3, border: 1, borderRadius: 5, padding: 5 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Item>
                <Typography variant="h5" align="left">
                  Tytuł
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
                  label="Wykonam / Zaprojektuję / Stworzę..."
                  autoFocus
                />
              </Item>
            </Grid>

            <Grid item xs={2}>
              <Item>
                <Typography variant="h5" align="left">
                  Kategoria
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={5}>
              <Item>
                <CategorySelect />
              </Item>
            </Grid>
            <Grid item xs={5}>
              <Item>
                <SubcategorySelect/>
              </Item>
            </Grid>

            <Grid item xs={2}>
              <Item>
                <Typography variant="h5" align="left">
                  Tagi
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={10}>
              <Item>
                <TagsSelect/>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default CreateGig1;
