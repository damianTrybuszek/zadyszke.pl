import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Form, Button, Container } from "react-bootstrap";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "../components/Card";
import { Col } from "react-bootstrap";
import { Typography } from "@mui/material";
import LoginButton from "./LoginButton";
import GoogleLoginButton from "./GoogleLoginButton";
import FacebookLoginButton from "./FacebookLoginButton";





const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "FFE4CB",

}));

export default function RegisterForms() {

  return (
    <Container>

      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 2fr)', pt: 10 }}>

        <Col>
          <Typography variant="h3" marginTop="40%" marginLeft="20%">
            Logowanie
          </Typography>
        </Col>

        <Col>

          <Card>
            <Form>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Adres e-mail</Form.Label>
                <Form.Control size="sm" type="email" placeholder="Wprowadź adres email" />
                <Form.Text className="text-muted">
                  Bez obaw, nikomu nie podamy Twojego adresu email.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Hasło</Form.Label>
                <Form.Control size="sm" type="password" placeholder="Wprowadź hasło" />
              </Form.Group>

            </Form>
            <LoginButton />
            <p></p>
            <FacebookLoginButton />
            <p></p>
            <GoogleLoginButton />
            <p></p>
          </Card>
        </Col>

      </Box>

    </Container>
  );
}
