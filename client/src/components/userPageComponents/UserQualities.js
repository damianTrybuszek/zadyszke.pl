import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import NavbarTop from "../ui/NavbarTop";
import NewOfferButton from "./NewOfferButton";
import UserOrdersButton from "./UserOrdersButton.js";
import lady_banner from "../../graphics/tempImages/main_banner_lady_cutoff.png";
import sample_profile_picture from "../../graphics/tempImages/sample_profile_picture.png";
import UserSafetyButton from "./UserSafetyButton";
import FormBackground from "../loginPageComponents/FormBackground";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { CenterFocusStrong, Repeat } from "@mui/icons-material";
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
            <Link to="/user/certificates/add" style={{ textDecoration: "none" }}>
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
