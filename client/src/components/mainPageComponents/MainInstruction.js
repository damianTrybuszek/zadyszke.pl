import { Component } from "react";
import { Container } from "react-bootstrap";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";

const Item = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
}));

class MainInstruction extends Component {
  render() {
    return (
      <Box
        mt={10}
        sx={{ backgroundColor: (theme) => theme.palette.secondary.main }}
      >
        <Container>
          <Typography variant="h3" align="center">
            Jak to działa?
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item>
                <HowToRegIcon
                  sx={{
                    fontSize: (theme) => theme.shape.adIconSizeLarge,
                    color: (theme) => theme.palette.primary.orange,
                  }}
                />
                <Typography variant="h5" align="center">
                  1. Zarejestruj się za darmo
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                {" "}
                <PersonAddAltIcon
                  sx={{
                    fontSize: (theme) => theme.shape.adIconSizeLarge,
                    color: (theme) => theme.palette.primary.orange,
                  }}
                />
                <Typography variant="h5" align="center">
                  2. Stwórz swój profil
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                {" "}
                <LocalAtmIcon
                  sx={{
                    fontSize: (theme) => theme.shape.adIconSizeLarge,
                    color: (theme) => theme.palette.primary.orange,
                  }}
                />
                <Typography variant="h5" align="center">
                  3. Zacznij zarabiać
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }
}

export default MainInstruction;
