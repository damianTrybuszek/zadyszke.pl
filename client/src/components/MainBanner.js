import { Typography } from "@mui/material";
import { Component } from "react";
import LadyBanner from "../graphics/tempImages/main_banner_lady_cutoff.png";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import SearchBar from "./SearchBar";
import Stack from "@mui/material/Stack";
import Card from "./Card";
import CategoryButton from "./CategoryButton";

const Item = styled("div")(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.primary,
}));

class MainBanner extends Component {
  render() {
    return (
      <Container>
        <Card>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={9}>
                <Item>
                  <Grid
                    container
                    spacing={2}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid item xs={3}>
                      <Item>
                        <Typography variant="h2">Masz pomysł?</Typography>
                      </Item>
                    </Grid>
                    <Grid item xs={3}>
                      <Item>
                        <Typography variant="mainBannerRegular">
                          Zrealizuj go z pomocą
                        </Typography>
                        {"  "}
                        <Typography variant="mainBannerOrange">
                          EKSPERTÓW
                        </Typography>
                      </Item>
                    </Grid>
                    <Grid item xs={3}>
                      <Item>
                        <SearchBar />
                      </Item>
                    </Grid>
                    <Grid item xs={3}>
                      <Item>
                        <Stack
                          direction="row"
                          spacing={2}
                          justifyContent="space-evenly"
                          alignItems="center"
                        >
                          <Item>
                            <Typography variant="h6">Popularne:</Typography>
                          </Item>
                          <Item>
                            <CategoryButton categoryName="Muzyka" />
                          </Item>
                          <Item>
                            <CategoryButton categoryName="Logo" />
                          </Item>
                          <Item>
                            <CategoryButton categoryName="Chat Bot" />
                          </Item>
                        </Stack>
                      </Item>
                    </Grid>
                  </Grid>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                  >
                    <Grid item xs={12}>
                      <Item>
                        <img
                          alt="Banner - zdjęcie"
                          src={LadyBanner}
                          width="150%"
                          height="100%"
                        />
                      </Item>
                    </Grid>
                  </Grid>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Container>
    );
  }
}

export default MainBanner;
