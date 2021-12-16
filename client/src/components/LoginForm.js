import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Form, Button, Container } from "react-bootstrap";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import FormBackground from "../components/FormBackground";
import { Col, Row} from "react-bootstrap";
import { Typography } from "@mui/material";
import LoginButton from "./LoginButton";
import GoogleLoginButton from "./GoogleLoginButton";
import FacebookLoginButton from "./FacebookLoginButton";



export default function LoginForms() {
  return (
    <Container>
      <Row>
        <Col>
          <Typography variant="h3" marginTop="40%" marginLeft="20%">
            Logowanie
          </Typography>
        </Col>
        <Col>
          <FormBackground>
            <Box sx={{ width: "100%", display: 'grid', gridTemplateColumns: 'repeat(1, 2fr)' }}>
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
            </Box>
          </FormBackground>
        </Col>
      </Row>
    </Container>
  );
}
