import { Component } from "react";
import { Container } from "react-bootstrap";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import PaidIcon from "@mui/icons-material/Paid";
import BrushIcon from "@mui/icons-material/Brush";
import TranslateIcon from "@mui/icons-material/Translate";
import AnimationIcon from "@mui/icons-material/Animation";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import CodeIcon from "@mui/icons-material/Code";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";

const Item = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
}));

class CategoriesAd extends Component {
  render() {
    return (
      <Box
        mt={10}
        sx={{ backgroundColor: (theme) => theme.palette.primary.main }}
      >
        <Container>
          <Typography
            variant="h3"
            align="center"
            sx={{ color: (theme) => theme.palette.primary.orange }}
          >
            Wybieraj spośród 100+ kategorii
          </Typography>
          <Stack
            mt={2}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Item>
              <Typography variant="h5">Biznes</Typography>
              <PaidIcon sx={{ fontSize: (theme) => theme.shape.adIconSize }} />
            </Item>
            <Item>
              <Typography variant="h5">Grafika</Typography>
              <BrushIcon sx={{ fontSize: (theme) => theme.shape.adIconSize }} />
            </Item>
            <Item>
              <Typography variant="h5">Tłumaczenia</Typography>
              <TranslateIcon
                sx={{ fontSize: (theme) => theme.shape.adIconSize }}
              />
            </Item>
            <Item>
              <Typography variant="h5">Animacje</Typography>
              <AnimationIcon
                sx={{ fontSize: (theme) => theme.shape.adIconSize }}
              />
            </Item>
            <Item>
              <Typography variant="h5">Wideo</Typography>
              <OndemandVideoIcon
                sx={{ fontSize: (theme) => theme.shape.adIconSize }}
              />
            </Item>
            <Item>
              <Typography variant="h5">Muzyka</Typography>
              <MusicNoteIcon
                sx={{ fontSize: (theme) => theme.shape.adIconSize }}
              />
            </Item>
            <Item>
              <Typography variant="h5">Audio</Typography>
              <GraphicEqIcon
                sx={{ fontSize: (theme) => theme.shape.adIconSize }}
              />
            </Item>
            <Item>
              <Typography variant="h5">Programowanie</Typography>
              <CodeIcon sx={{ fontSize: (theme) => theme.shape.adIconSize }} />
            </Item>
            <Item>
              <Typography variant="h5">Dane</Typography>
              <AutoGraphIcon
                sx={{ fontSize: (theme) => theme.shape.adIconSize }}
              />
            </Item>
          </Stack>
        </Container>
      </Box>
    );
  }
}

export default CategoriesAd;
