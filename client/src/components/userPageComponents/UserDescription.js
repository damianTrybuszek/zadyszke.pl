import { Component } from "react";
import { Container } from "react-bootstrap";
import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
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
      stan: "",
      isEditing: false,
      descriptionEmpty: true,
      textFieldValue: "",

    };
    this.editingModeOn = this.editingModeOn.bind(this);
    this.editingModeOff = this.editingModeOff.bind(this);
    this.saveContent = this.saveContent.bind(this);

  }

  componentDidMount() {
    const headers = { "Content-Type": "application/json" };
    fetch("http://localhost:8080/api/users/1", { headers })
      .then((response) => response.json())
      .then(
        (data) => {
          this.setState({
            descriptions: data,
            isLoaded: true,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  checkUserCredentials() {
    const response = fetch(
      "https://localhost:300/api/users/validate-login",
      {
        method: "POST",
        body: JSON.stringify(this.state.descriptions),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data =  response.json();
    console.log(data);
  }

  editingModeOn() {
    this.setState({ isEditing: true });
  }

  editingModeOff() {
    this.setState({ isEditing: false });
  }

//   handleTextFieldChange(event) {
//     this.setState({
//         textFieldValue: event.target.value
//     });
// }

  saveContent(){
    this.setState({ isEditing: false })
    
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
                    defaultValue={this.state.descriptions.username}
                    // value={this.state.textFieldValue} 
                    // onChange={this.handleTextFieldChange} 
                  />
                </Item>
              ) : (
                <Item>
                  <Typography variant="body2" textAlign="left">
                    {this.state.descriptions.username}
                  </Typography>
                </Item>
              )}
            </Grid>
            <Grid item xs={10}>
              <Item></Item>
            </Grid>
            <Grid item xs={1}>
            {this.state.isEditing ? 
            <Item onClick={this.editingModeOff}>
                  <CancelButton />
                  </Item>
                :
                <Item></Item>
                }

            </Grid>
            <Grid item xs={1}>
              {this.state.isEditing ? (
                <Item onClick={this.saveContent}>
                  <SaveButton />
                </Item>
              ) : this.state.descriptionEmpty ? (
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
