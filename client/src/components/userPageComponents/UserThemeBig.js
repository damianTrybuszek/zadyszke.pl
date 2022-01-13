import { Component } from "react";
import { Container} from "react-bootstrap";
import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import sample_profile_picture from "../../graphics/tempImages/sample_profile_picture.png";
import { Typography } from "@mui/material";
import "../ui/style.css";

const Item = styled("div")(({ theme }) => ({
  textAlign: "center",
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
          <Grid
            alignItems="flex-start"
            direction="column"
            justifyContent="center"
          >
            <Grid paddingBottom={1}>
              <Item>
                <img
                  alt="Banner - zdjęcie"
                  src={sample_profile_picture}
                  height="80%"
                  width="80%"
                />
              </Item>
            </Grid>
            <Grid paddingBottom={1}>
              <Item>
                <Typography variant="h4">Super użytkownik</Typography>
              </Item>
            </Grid>
            <Grid>
              <Item>
                <Typography variant="body2">Aktywny od: 01.01.2022</Typography>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
  }
}

export default UserTheme;
