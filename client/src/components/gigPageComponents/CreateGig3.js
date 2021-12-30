import { Component } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import OutlinedTextbox from "./OutlinedTextbox";
import Button from "@mui/material/Button";

const BackButton = styled(Button)(({ theme }) => ({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 20,
  padding: "17px 100px",
  border: "1px solid",
  borderRadius: 10,
  borderColor: theme.palette.primary.orange,
  lineHeight: 1,
  fontFamily: ["Poppins", "sans-serif"],
  color: theme.palette.primary.orange,
}));

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
          sx={{ mt: 3, border: 1, borderRadius: 5, padding: 5 }}
        >
          <Grid container spacing={2}>
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
                  label="Dodaj opis swojej usługi..."
                  autoFocus
                />
              </Item>
            </Grid>

            <Grid item xs={2}>
              <Item>
                <Typography variant="h5" align="left">
                  FAQ
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="h6" align="left">
                Dodaj informacje na temat najczęściej zadawanych pytań i
                odpowiedzi
              </Typography>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                spacing={2}
              >
                <Item>
                  <OutlinedTextbox title="Pytanie" />
                </Item>
                <Item>
                  <OutlinedTextbox title="Odpowiedź" />
                </Item>
                <Item>
                  <BackButton>Dodaj</BackButton>
                </Item>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default CreateGig3;
