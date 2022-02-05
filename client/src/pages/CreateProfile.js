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

import CreateProfile1 from "../components/createProfileComponents/CreateProfile1";
import CreateProfile2 from "../components/createProfileComponents/CreateProfile2";
import CreateProfile3 from "../components/createProfileComponents/CreateProfile3";
import CreateProfile4 from "../components/createProfileComponents/CreateProfile4";


const steps = [
  "Twoje dane",
  "Twoje kwalifikacje",
  "Połączone konta",
  "Bezpieczeństwo konta",
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

class CreateProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 0,
    };
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
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
        return <CreateProfile1 />;
      case 1:
        return <CreateProfile2 />;
      case 2:
        return <CreateProfile3 />;
      case 3:
        return <CreateProfile4 />;
      default:
        throw new Error("Unknown step");
    }
  }

  render() {
    return (
      <div>
        <NavbarTop />
        <Container component="main" sx={{ mb: 4 }}>
          <Box mt={2}>
            <Typography component="h1" variant="h4" align="center">
              Stwórz Profil
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
                  Gratulacje! Twój profil został stworzony!
                </Typography>
                <Typography variant="subtitle1">
                  Teraz nie pozostaje już nic innego jak stworzyć własne oferty.
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
                      <NextButton
                        variant="contained"
                        onClick={this.handleNext}
                        sx={{ mt: 3, ml: 1 }}
                      >
                        {this.state.activeStep === steps.length - 1
                          ? "Zakończ"
                          : "Dalej"}
                      </NextButton>
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

export default CreateProfile;