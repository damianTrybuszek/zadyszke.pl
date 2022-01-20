import { Component } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import OutlinedTextbox from "./OutlinedTextbox";
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
  constructor() {
    super();
    this.state = {
      description: "",
      newQuestion: "",
      newAnswer: "",
      questions: [],
      answers: [],
    };
    this.handleDescriptionChage = this.handleDescriptionChage.bind(this);
    this.handleNewQuestionChange = this.handleNewQuestionChange.bind(this);
    this.handleNewAnswerChange = this.handleNewAnswerChange.bind(this);
    this.addNewQuestion = this.addNewQuestion.bind(this);
  }

  handleDescriptionChage(event) {
    this.setState({
      description: event.target.value,
    });
  }

  addNewQuestion() {
    this.state.questions.push(this.state.newQuestion);
    this.state.answers.push(this.state.newAnswer);
    this.setState(
      { questions: this.state.questions, answers: this.state.answers },
      () => console.log("Callback")
    );
  }

  handleNewQuestionChange(event) {
    this.setState({
      newQuestion: event.target.value,
    });
  }

  handleNewAnswerChange(event) {
    this.setState({
      newAnswer: event.target.value,
    });
  }

  render() {
    const faqLength = this.state.questions.length;
    const indices = Array.from(Array(faqLength).keys());
    const displayFaq = indices.map((i) => (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              <Box sx={{ border: 1, borderRadius: 3, padding: 1 }}>
                <Typography>{this.state.questions[i]}</Typography>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ border: 1, borderRadius: 3, padding: 1 }}>
              <Item>
                <Typography>{this.state.answers[i]}</Typography>
              </Item>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Item sx={{ visibility: "hidden" }}>
              <BackButton>Dodaj</BackButton>
            </Item>
          </Grid>
        </Grid>
      </div>
    ));

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
              <Box sx={{ border: 1, borderRadius: 3, padding: 1 }}>
                {displayFaq}
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Item>
                      <OutlinedTextbox
                        title="Pytanie"
                        handleChange={this.handleNewQuestionChange}
                      />
                    </Item>
                  </Grid>
                  <Grid item xs={4}>
                    <Item>
                      <OutlinedTextbox
                        title="Odpowiedź"
                        handleChange={this.handleNewAnswerChange}
                      />
                    </Item>
                  </Grid>
                  <Grid item xs={4}>
                    <Item>
                      <BackButton onClick={this.addNewQuestion}>
                        Dodaj
                      </BackButton>
                    </Item>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Item></Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <SaveButton
                  onClick={() => this.props.saveStateFromPage3(this.state)}
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

export default CreateGig3;
