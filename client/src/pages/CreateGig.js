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
      basicRedos: 0,
      standardRedos: 0,
      premiumRedos: 0,
      basicSpeedDelivery: false,
      standardSpeedDelivery: false,
      premiumSpeedDelivery: false,
      basicPrice: 0,
      standardPrice: 0,
      premiumPrice: 0,
      description: "",
      questions: [],
      answers: [],
      requirements: "",
      uploadedFiles: [],
      faq: [],
      offerCreated: {},
    };
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.submitOffer = this.submitOffer.bind(this);
    this.saveStateFromPage1 = this.saveStateFromPage1.bind(this);
    this.saveStateFromPage2 = this.saveStateFromPage2.bind(this);
    this.saveStateFromPage3 = this.saveStateFromPage3.bind(this);
    this.saveStateFromPage4 = this.saveStateFromPage4.bind(this);
    this.saveStateFromPage5 = this.saveStateFromPage5.bind(this);
  }

  saveStateFromPage1(data) {
    this.setState({
      title: data.title,
      category: data.category,
      subCategory: data.subCategory,
      tags: data.tags,
    });
  }

  saveStateFromPage2(data) {
    this.setState({
      basicRedos: data.basicRedos,
      standardRedos: data.standardRedos,
      premiumRedos: data.premiumRedos,
      basicSpeedDelivery: data.basicSpeedDelivery,
      standardSpeedDelivery: data.standardSpeedDelivery,
      premiumSpeedDelivery: data.premiumSpeedDelivery,
      basicPrice: data.basicPrice,
      standardPrice: data.standardPrice,
      premiumPrice: data.premiumPrice,
    });
  }

  saveStateFromPage3(data) {
    this.setState({
      description: data.description,
      questions: data.questions,
      answers: data.answers,
    });
  }

  saveStateFromPage4(data) {
    this.setState({ requirements: data.requirements });
  }

  saveStateFromPage5(data) {
    this.setState({ uploadedFiles: data.uploadedFiles });
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

  createFaqList() {
    let allFaq = [];
    for (let i = 0; i < this.state.questions.length; i++) {
      let tempQuestion = ["question", this.state.questions[i]];
      let tempAnswer = ["answer", this.state.answers[i]];
      let tempFaqEntry = [tempQuestion, tempAnswer];
      let tempFaqObject = Object.fromEntries(tempFaqEntry);
      allFaq.push(tempFaqObject);
    }
    this.setState({ faq: allFaq });
  }

  async submitOffer() {
    this.createFaqList();
    const data = await fetch("http://localhost:8080/api/offers", {
      method: "POST",
      body: JSON.stringify({
        title: this.state.title,
        category: this.state.category,
        subCategory: this.state.subCategory,
        description: this.state.description,
        tags: this.state.tags
          .map((tag) => ["name", tag])
          .map((tag) => Object.fromEntries([tag])),
        basicRedos: this.state.basicRedos,
        standardRedos: this.state.standardRedos,
        premiumRedos: this.state.premiumRedos,
        basicPrice: this.state.basicPrice,
        standardPrice: this.state.standardPrice,
        premiumPrice: this.state.premiumPrice,
        basicSpeedDelivery: this.state.basicSpeedDelivery,
        standardSpeedDelivery: this.state.standardSpeedDelivery,
        premiumSpeedDelivery: this.state.premiumSpeedDelivery,
        faq: this.state.faq,
        requirements: this.state.requirements,
        offerImages: this.state.uploadedFiles.map((image) =>
          Object.fromEntries([image])
        ),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());

    this.setState({
      offerCreated: data,
      activeStep: this.state.activeStep + 1,
    });
  }

  getStepContent(step) {
    switch (step) {
      case 0:
        return <CreateGig1 saveStateFromPage1={this.saveStateFromPage1} />;
      case 1:
        return <CreateGig2 saveStateFromPage2={this.saveStateFromPage2} />;
      case 2:
        return <CreateGig3 saveStateFromPage3={this.saveStateFromPage3} />;
      case 3:
        return <CreateGig4 saveStateFromPage4={this.saveStateFromPage4} />;
      case 4:
        return <CreateGig5 saveStateFromPage5={this.saveStateFromPage5} />;
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
                  {console.log(this.state.offerCreated)}
                  Gratulacje! Twoja oferta o numerze{" "}
                  {this.state.offerCreated.id} została stworzona!
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
