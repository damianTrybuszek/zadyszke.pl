import { Component } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";


const Item = styled("div")(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.primary,
}));

class CreateGig6 extends Component {
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
                  OPUBLIKUJ
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <Typography variant="h4" align="center">
                  Preview
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default CreateGig6;
