import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FooterCategories from "./FooterCategories";

function Copyright() {
  return (
    <Typography variant="body1" color="text.secondary">
      {"Copyright © zadyszke.pl "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      mt={5}
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: '50vh',
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) => theme.palette.primary.main,
        }}
      >
        <FooterCategories copyright={Copyright()} />
      </Box>
    </Box>
  );
}
