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

import TextField from "@mui/material/TextField";

const Item = styled("div")(({ theme }) => ({}));

class UserDescription extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      descriptions: "",
      stan: "",
      editMode: false,
    };
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
              {/* <Item>
              <Typography variant="body2" textAlign="left">
              {this.state.descriptions.username}
              </Typography>
            </Item> */}

              <Item>
                <TextField
                  sx={{ label: { color: "white" } }}
                  variant="standard"
                  margin="none"
                  name="title"
                  disableUnderline={true}
                  multiline={true}
                  // rows={5}
                  required
                  fullWidth
                  id="title"
                  // label="Opis..."
                  autoFocus
                  defaultValue={this.state.descriptions.username}
                  // value={this.state.descriptions.username}
                  onChange={this.handleDescriptionChange}
                />
              </Item>
            </Grid>
            <Grid item xs={11}>
              <Item></Item>
            </Grid>
            <Grid item xs={1}>
              <Item>
                <AddButton />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
  }
}

export default UserDescription;
