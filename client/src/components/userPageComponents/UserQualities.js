import { Component } from "react";
import { Container } from "react-bootstrap";
import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../ui/style.css";

const Item = styled("div")(({ theme }) => ({}));

class UserQualities extends Component {
  render() {
    return (
      <Container className="userDescription">
        <Box
          sx={{
            width: "100%",
            display: "grid",
          }}
        >
          <Grid alignItems="flex-start">
            <Item>
              <Typography variant="h6" textAlign="left">
                Umiejętności:
              </Typography>
            </Item>
            <Item>
              <Link to="/user/skills/add" style={{ textDecoration: "none" }}>
                <Typography variant="h6" textAlign="right" color="#ED8627">
                  Dodaj
                </Typography>
              </Link>
            </Item>
            <Item>
              <Typography variant="h6" textAlign="left">
                Edukacja:
              </Typography>
            </Item>
            <Item>
              <Link to="/user/education/add" style={{ textDecoration: "none" }}>
                <Typography variant="h6" textAlign="right" color="#ED8627">
                  Dodaj
                </Typography>
              </Link>
            </Item>
            <Item>
              <Typography variant="h6" textAlign="left">
                Certyfikaty:
              </Typography>
            </Item>
            <Item>
              <Link
                to="/user/certificates/add"
                style={{ textDecoration: "none" }}
              >
                <Typography variant="h6" textAlign="right" color="#ED8627">
                  Dodaj
                </Typography>
              </Link>
            </Item>
          </Grid>
        </Box>
      </Container>
    );
  }
}

export default UserQualities;
