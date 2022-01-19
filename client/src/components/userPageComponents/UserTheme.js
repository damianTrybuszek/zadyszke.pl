import { Component } from "react";
import { Container } from "react-bootstrap";
import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import sample_profile_picture from "../../graphics/tempImages/sample_profile_picture.png";
import { Typography } from "@mui/material";
import "../ui/style.css";

const Item = styled("div")(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.primary,
}));

class UserTheme extends Component {
  render() {
    return (
      <Container className="userTheme">
        <Box
          sx={{
            width: "100%",
            display: "grid",
          }}
        >
          <Grid alignItems="flex-start">
            <Item>
              <img
                alt="Banner - zdjęcie"
                src={sample_profile_picture}
                width="100%"
                height="100%"
              />
            </Item>
            <Item>
              <Typography variant="h5">Super użytkownik</Typography>
            </Item>
            <Item>
              <Typography variant="h7">Miasto: Kraków</Typography>
            </Item>
          </Grid>
        </Box>
      </Container>
    );
  }
}

export default UserTheme;
