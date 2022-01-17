import { Component } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import EmailVerificationButton from "./EmailVerificationButton";
import AddPhoneNumber from "./AddPhoneNumber";

import { Link } from "react-router-dom";

const Item = styled("div")(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.primary,
}));

class CreateProfile3 extends Component {
  render() {
    return (
      <div>
        <Box component="form" noValidate sx={{ padding: 5 }}>
          <Grid container spacing={2} paddingBottom={5}>
            <Grid item xs={12}>
              <Item>
                <Typography variant="h5" align="left">
                  Bezpieczeństwo konta
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <Typography variant="body2" align="left">
                  Uzupełnij poniższe dane, żebyśmy w razie potrzeby mogli
                  zweryfikować Twoją tożsamość. Pamiętaj, nie udostępniaj ich
                  nikomu, są one kluczowe dla Twojego bezpieczeństwa!
                </Typography>
              </Item>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item>
                <Typography variant="h5" align="left" paddingBottom={5}>
                  Email
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={5}>
              <Item>
                <Typography variant="body1" align="left" paddingBottom={5}>
                  Zweryfikuj swój adres email klikając <Link to>tutaj</Link>.
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <EmailVerificationButton />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <Typography variant="h5" align="left" paddingBottom={5}>
                  Numer telefonu
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={5}>
              <Item>
                <Typography variant="body1" align="left" paddingBottom={5}>
                  Dodaj numer telefonu.
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <AddPhoneNumber />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default CreateProfile3;
