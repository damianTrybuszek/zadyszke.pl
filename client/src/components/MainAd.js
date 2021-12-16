import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import classes from "./MainAd.module.css";
import GreenRectangle from "../graphics/customIcons/green_rectangle.png";
import BlueRectangle from "../graphics/customIcons/blue_rectangle.png";
import GreenCross from "../graphics/customIcons/green_cross.png";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
}));

const tiers = [
  {
    symbol: GreenRectangle,
    title: "Za dyszkę",
    price: "10",
    description: ["Najprostsze i najszybsze rozwiązania", "na każdą kieszeń"],
    chipText: "Przedział cenowy",
    chipVariant: "outlined",
  },
  {
    symbol: BlueRectangle,
    title: "Do 50",
    price: "50",
    description: ["Personalizowane rozwiązania", "dla Twoich potrzeb"],
    chipText: "dostosowany",
    chipVariant: "outlined",
  },
  {
    symbol: GreenCross,
    title: "Premium",
    price: "100+",
    description: [
      "Całkowite pakiety rozwiązań spełniające",
      " wszystkie, nawet największe wymagania",
    ],
    chipText: "do Twoich potrzeb",
    chipVariant: "outlined",
  },
];

function PricingContent() {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      {/* Hero unit */}
      <Container disableGutters component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h2"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Rozwiązania na każdą kieszeń
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={4}>
              <Box sx={{ border: 1, borderColor: "primary.main" }}>
                <Card>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{
                      align: "center",
                      variant: "h4",
                      color: (theme) => theme.palette.primary.orange,
                    }}
                    action={tier.title === "Premium" ? <StarIcon /> : null}
                    subheaderTypographyProps={{
                      align: "center",
                    }}
                    sx={{
                      backgroundColor: (theme) => theme.palette.primary.main,
                    }}
                  />
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mb: 2,
                      }}
                    >
                      <Stack>
                        <Item>
                          <img
                            alt="Symbol"
                            src={tier.symbol}
                            width="100"
                            height="100"
                          ></img>
                        </Item>
                        <Item>
                          <Typography
                            component="h3"
                            variant="h4"
                            color="text.primary"
                          >
                            PLN {tier.price}
                          </Typography>
                        </Item>
                      </Stack>
                    </Box>
                    <ul>
                      {tier.description.map((line) => (
                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="center"
                          key={line}
                        >
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions className={classes.card__actions}>
                    <Chip
                      label={tier.chipText}
                      variant={tier.chipVariant}
                      color="warning"
                      className={classes.chip}
                    />
                  </CardActions>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
