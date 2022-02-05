import { Component } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const SaveButton = styled(Button)(({ theme }) => ({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 25,
  padding: "10px 100px",
  border: "1px solid",
  borderColor: theme.palette.primary.orange,
  lineHeight: 1,
  fontFamily: ["Poppins", "sans-serif"],
  backgroundColor: theme.palette.primary.orange,
  color: theme.palette.primary.white,
}));

const Item = styled("div")(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.primary,
}));

class CreateGig5 extends Component {
  constructor() {
    super();
    this.state = {
      selectedFile: null,
      uploadedFiles: [],
    };
  }

  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] }, () =>
      this.state.uploadedFiles.push(["imagePath", event.target.files[0].name])
    );
  };

  render() {
    console.log(this.state);
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
                  STWÓRZ GALERIĘ
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <Typography variant="subtitle2" align="left">
                  Uwzględnij wszystkie potrzebne Ci informacje aby zacząć pracę
                  nad projektem klienta
                </Typography>
              </Item>
            </Grid>

            <Grid item xs={2}>
              <Item>
                <Typography variant="h5" align="left">
                  Zdjęcia
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <Box sx={{ border: 1, borderRadius: 2, padding: 5 }}>
                  <Typography variant="subtitle2" align="center">
                    <input type="file" onChange={this.onFileChange} />
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <Box sx={{ border: 1, borderRadius: 2, padding: 5 }}>
                  <Typography variant="subtitle2" align="center">
                    <input type="file" onChange={this.onFileChange} />
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <Box sx={{ border: 1, borderRadius: 2, padding: 5 }}>
                  <Typography variant="subtitle2" align="center">
                    <input type="file" onChange={this.onFileChange} />
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              <Item>
                <Typography variant="subtitle2" align="left">
                  Dodaj conajmniej jedno zdjęcie
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item></Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <SaveButton
                  onClick={() => this.props.saveStateFromPage5(this.state)}
                >
                  Zapisz
                </SaveButton>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default CreateGig5;
