import * as React from "react";
import { Component } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NavbarTop from "../components/NavbarTop";

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

class CreateGig extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 0,
    };
    this.handleNext = this.handleNext.bind(this)
    this.handleBack = this.handleBack.bind(this)
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

  getStepContent(step) {
    switch (step) {
      case 0:
        return <CreateGig1 />;
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
    return (
      <div>
        <NavbarTop />
        <CssBaseline />
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Box mt={2}>
            <Typography component="h1" variant="h4" align="center">
              Stwórz Ofertę
            </Typography>
          </Box>
          <Stepper activeStep={this.state.activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
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
              </React.Fragment>
            ) : (
              <React.Fragment>
                {this.getStepContent(this.state.activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {this.state.activeStep !== 0 && (
                    <Button onClick={this.handleBack} sx={{ mt: 3, ml: 1 }}>
                      Wróć
                    </Button>
                  )}
                  {" "}
                  <Button
                    variant="contained"
                    onClick={this.handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {this.state.activeStep === steps.length - 1
                      ? "Zakończ"
                      : "Dalej"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Container>
      </div>
    );
  }
}

export default CreateGig;
