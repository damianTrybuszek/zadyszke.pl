import React, { useState, useCallback } from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import "../ui/style.css";
import ChangePasswordButton from "../userPageComponents/ChangePasswordButton.js"
import TwoStepVerificationSwitch from "../userPageComponents/TwoStepVerificationSwitch.js"

const Item = styled("div")(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.primary,
}));

function ChangePassword() {
  const [error, setError] = useState(null);

  async function checkUserCredentials(user) {
    const response = await fetch(
      "https://localhost:300/api/users/validate-login",
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  return (

      <Box
        sx={{
          width: "100%",
          display: "grid",
          gap: 1,
        }}
      >
        <Grid container spacing={2}>
        <Grid item xs={2}>
        <Item>
          <Typography variant="body1" align="left">
            Hasło
          </Typography>
        </Item>
        </Grid>

        <Grid item xs={8}>
        <Item>
          <TextField
            sx={{ label: { color: "white" } }}
            name="password"
            hintText="Password"
            floatingLabelText="Password"
            type="password"
            multiline={false}
            rows={1}
            required
            fullWidth
            id="password"
            label="Zmień hasło"
            autoFocus
            size="small"
            
          />
          <Typography variant="body2" align="left">
            Ostatnia zmiana hasła:
          </Typography>
        </Item>
        </Grid>

        <Grid item xs={2}>
          <Item><ChangePasswordButton/></Item>
        </Grid>






        <Grid item xs={2}>
        <Item>
          <Typography variant="body1" align="left">
            Weryfikacja dwuetapowa
          </Typography>
        </Item>
        </Grid>

       <Grid item xs={8}>
        <Item>
          <TextField
            sx={{ label: { color: "white" } }}
            name="phoneNumber"
            multiline={false}
            rows={1}
            required
            fullWidth
            id="phoneNumber"
            label="Wprowadź numer telefonu"
            autoFocus
            size="small"
          />
          <Typography variant="body2" align="left">
            Numer telefonu: 123 456 789
          </Typography>
          <Typography variant="body2" align="left">
            Na ten numer będziesz otrzymywać kody.
          </Typography>
        </Item>
        </Grid>

        <Grid item xs={2}>
        <Item>
          <TwoStepVerificationSwitch/>
        </Item>
        </Grid>
        </Grid>
        
      </Box>

  );
}

export default ChangePassword;
