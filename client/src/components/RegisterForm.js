import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Form, Button, Container } from "react-bootstrap";
import RegisterButton from "./RegisterButton";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "../components/Card";
import { Col } from "react-bootstrap";
import { Typography } from "@mui/material";




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "FFE4CB",

}));

export default function RegisterForms() {

  return (
    <Container>

      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>

        <Col>
          <Typography variant="h3" padding="30%">
            Rejestracja
          </Typography>
        </Col>

        <Col>

          <Card>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Label>Imię</Form.Label>
                <Form.Control size="sm" type="firstName" placeholder="Wprowadź imię" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Nazwisko</Form.Label>
                <Form.Control size="sm" type="LastName" placeholder="Wprowadź nazwisko" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicNickName">
                <Form.Label>Nazwa użytkownika</Form.Label>
                <Form.Control size="sm" type="NickName" placeholder="Wprowadź nazwę użytkownika" />
              </Form.Group>


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

              <Form.Group className="mb-3" controlId="formBasicPasswordRepeated">
                <Form.Label>Powtórz hasło</Form.Label>
                <Form.Control size="sm" type="passwordRepeated" placeholder="Powtórz hasło" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Akceptuję warunki korzystania z serwisu" />
              </Form.Group>
            </Form>
            <RegisterButton />

          </Card>
        </Col>

      </Box>

    </Container>
  );
}
