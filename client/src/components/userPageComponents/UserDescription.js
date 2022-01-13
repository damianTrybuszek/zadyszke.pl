import { Component } from "react";
import { Container} from "react-bootstrap";
import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../ui/style.css";

const Item = styled("div")(({ theme }) => ({}));

class UserDescription extends Component {
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
              <Typography variant="h5" textAlign="left">
                Opis:
              </Typography>
            </Item>
            <Item>
              <Link
                to="/user/description/add"
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

export default UserDescription;
