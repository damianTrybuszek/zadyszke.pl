import { Container } from "react-bootstrap";
import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import "../ui/style.css";
import AddButton from "./AddButton";
import EditButton from "./EditButton";
import SaveButton from "./SaveButton";
import CancelButton from "./CancelButton";

import TextField from "@mui/material/TextField";

const Item = styled("div")(({ theme }) => ({}));
class UserDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      descriptions: "",
      description: "",
      stan: "",
      isEditing: false,
      isEmpty: true,
      textFieldValue: "",
      value: "",
    };
    this.editingModeOn = this.editingModeOn.bind(this);
    this.editingModeOff = this.editingModeOff.bind(this);
    this.saveContent = this.saveContent.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.changeEmptinessStatus = this.changeEmptinessStatus.bind(this);
  }

  // componentDidMount() {
  //   const headers = { "Content-Type": "application/json" };
  //   fetch("http://localhost:8080/api/users/1", { headers })
  //     .then((response) => response.json())
  //     .then(
  //       (data) => {
  //         this.setState({
  //           descriptions: data,
  //           isLoaded: true,
  //         });
  //       },
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error,
  //         });
  //       }
  //     );
  // }

  // sendData() {
  //   const response = fetch(
  //     "https://localhost:300/api/users/validate-login",
  //     {
  //       method: "POST",
  //       body: JSON.stringify(this.state.descriptions),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   const data =  response.json();
  //   console.log(data);
  // }

  editingModeOn() {
    this.setState({ isEditing: true });
  }

  editingModeOff() {
    this.setState({ isEditing: false });
  }

  handleCancel() {
    this.setState({ value: this.state.description });
    this.setState({ isEditing: false });
  }

  changeEmptinessStatus() {
    if (this.state.value.length > 0) {
      this.setState({ isEmpty: false });
    } else {
      this.setState({ isEmpty: true });
    }
  }

  saveContent() {
    this.setState({ description: this.state.value });
    this.setState({ isEditing: false });
    this.changeEmptinessStatus();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  }

  render() {
    return (
      <Container className="userDescription">
        <Box
          sx={{
            width: "100%",
            display: "grid",
          }}
        >
          <Grid container alignItems="flex-start">
            <Grid item xs={12}>
              <Item>
                <Typography variant="h5" textAlign="left">
                  Opis:
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12}>
              {this.state.isEditing ? (
                <Item>
                  <TextField
                    sx={{ label: { color: "white" } }}
                    variant="standard"
                    margin="none"
                    disableUnderline={true}
                    multiline={true}
                    required
                    fullWidth
                    id="description"
                    autoFocus
                    defaultValue={this.state.description}
                    onChange={event=> this.setState({value: event.target.value})}
                    value={this.state.value}
                    // onSubmit={this.handleChange}
                  />
                </Item>
              ) : (
                <Item>
                  <Typography variant="body2" textAlign="left">
                    {this.state.description}
                  </Typography>
                </Item>
              )}
            </Grid>
            <Grid item xs={10}>
              <Item></Item>
            </Grid>
            <Grid item xs={1}>
              {this.state.isEditing ? (
                <Item onClick={this.handleCancel}>
                  <CancelButton />
                </Item>
              ) : (
                <Item></Item>
              )}
            </Grid>
            <Grid item xs={1}>
              {this.state.isEditing ? (
                <Item onClick={this.saveContent}>
                  <SaveButton />
                </Item>
              ) : this.state.isEmpty ? (
                <Item onClick={this.editingModeOn}>
                  <AddButton />
                </Item>
              ) : (
                <Item onClick={this.editingModeOn}>
                  <EditButton />
                </Item>
              )}
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
  }
}

export default UserDescription;
