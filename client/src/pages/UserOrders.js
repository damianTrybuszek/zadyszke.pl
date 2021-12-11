import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "../components/Card";
import NavbarTop from "../components/NavbarTop";
import Footer from "../components/Footer";
import RecommendedOffersCarousel from "../components/RecommendedOffersCarousel.js";
import lady_banner from "../graphics/tempImages/main_banner_lady_cutoff.png";
import SearchBar from "../components/SearchBar";
import JoinButton from "../components/JoinButton";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
}));

class MainNotLoggedInPage extends Component {
  render() {
    return (
      <div>
        <NavbarTop />

        <Container>
          <Card>
            <Box sx={{ width: "100%" }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <Item xs={6}>
                    <Typography variant="h3">Masz pomysł?</Typography>

                    <Typography variant="h3">
                      Zrealizuj go z pomocą EKSPERTÓW
                    </Typography>

                    <SearchBar />
                    <JoinButton></JoinButton>
                  </Item>
                </Grid>

                <Grid
                  container
                  xs={6}
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-end"
                >
                  <Item xs={6}>
                    <img
                      alt="Banner - zdjęcie"
                      src={lady_banner}
                      width="450"
                      height="100%"
                    />
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Container>

        <RecommendedOffersCarousel />

        <Footer />

      </div>
    );
  }
}

export default MainNotLoggedInPage;
