import * as React from "react";
import { Component } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NavbarTop from "../components/ui/NavbarTop";
import Grid from "@mui/material/Grid";

import CreateGig1 from "../components/gigPageComponents/CreateGig1";
import CreateGig2 from "../components/gigPageComponents/CreateGig2";
import CreateGig3 from "../components/gigPageComponents/CreateGig3";
import CreateGig4 from "../components/gigPageComponents/CreateGig4";
import CreateGig5 from "../components/gigPageComponents/CreateGig5";
import CreateGig6 from "../components/gigPageComponents/CreateGig6";

const steps = [
  "Informacje podstawowe",
  "Cennik",
  "Opis",
  "Wymagania",
  "Galeria",
  "Opublikuj",
];

const NextButton = styled(Button)(({ theme }) => ({
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

const BackButton = styled(Button)(({ theme }) => ({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 25,
  padding: "10px 100px",
  border: "1px solid",
  borderColor: theme.palette.primary.orange,
  lineHeight: 1,
  fontFamily: ["Poppins", "sans-serif"],
  color: theme.palette.primary.white,
}));

class CreateGig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      title: "",
      category: "",
      subCategory: "",
      tags: [],
    };
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.submitOffer = this.submitOffer.bind(this);
    this.saveStateFromPage1 = this.saveStateFromPage1.bind(this);
  }

  saveStateFromPage1(data) {
    this.setState({
      title: data.title,
      category: data.category,
      subCategory: data.subCategory,
      tags: data.tags,
    });
  }

  handleNext() {
    this.setState({
      activeStep: this.state.activeStep + 1,
    });
  }

  handleBack() {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
  }

  submitOffer() {
    console.log("Offer submited");
  }

  getStepContent(step) {
    switch (step) {
      case 0:
        return <CreateGig1 saveStateFromPage1={this.saveStateFromPage1} />;
      case 1:
        return <CreateGig2 />;
      case 2:
        return <CreateGig3 />;
      case 3:
        return <CreateGig4 />;
      case 4:
        return <CreateGig5 />;
      case 5:
        return <CreateGig6 />;
      default:
        throw new Error("Unknown step");
    }
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <NavbarTop />
        <Container component="main" sx={{ mb: 4 }}>
          <Box mt={2}>
            <Typography component="h1" variant="h4" align="center">
              Stwórz Ofertę
            </Typography>
          </Box>
          <Box
            sx={{
              mt: 3,
            }}
          >
            <Stepper activeStep={this.state.activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          <React.Fragment>
            {this.state.activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Gratulacje! Twoja oferta została stworzona!
                </Typography>
                <Typography variant="subtitle1">
                  Teraz nie pozostaje już nic innego jak czekać, aż ktoś ją
                  wykupi i będziecie mogli razem działać.
                </Typography>
                <Box mb={30}></Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {this.getStepContent(this.state.activeStep)}
                <Grid container direction="row" spacing={2}>
                  <Grid item xs={6}>
                    <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                      {this.state.activeStep !== 0 && (
                        <BackButton
                          onClick={this.handleBack}
                          sx={{ mt: 3, ml: 1 }}
                        >
                          Wróć
                        </BackButton>
                      )}{" "}
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      {this.state.activeStep === steps.length - 1 ? (
                        <NextButton
                          variant="contained"
                          onClick={this.submitOffer}
                          sx={{ mt: 3, ml: 1 }}
                        >
                          Zakończ
                        </NextButton>
                      ) : (
                        <NextButton
                          variant="contained"
                          onClick={this.handleNext}
                          sx={{ mt: 3, ml: 1 }}
                        >
                          Dalej
                        </NextButton>
                      )}
                    </Box>
                  </Grid>
                </Grid>
              </React.Fragment>
            )}
          </React.Fragment>
        </Container>
      </div>
    );
  }
}

export default CreateGig;
