import * as React from "react";
import { Form, Button, Container } from "react-bootstrap";
import RegisterButton from "./RegisterButton";
import FacebookRegisterButton from "./FacebookRegisterButton";
import GoogleRegisterButton from "./GoogleRegisterButton";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import FormBackground from "../components/FormBackground";
import { Col, Row } from "react-bootstrap";
import { Typography } from "@mui/material";




export default function RegisterForms() {

  return (
    <Container>


      <Row>
        <Col>
          <Typography variant="h3" marginTop="40%" marginLeft="20%">
            Rejestracja
          </Typography>
        </Col>
        <Col>
          <FormBackground>
            <Box sx={{ width: "100%", display: 'grid', gridTemplateColumns: 'repeat(1, 2fr)' }}>

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
              <p></p>
              <FacebookRegisterButton />
              <p></p>
              <GoogleRegisterButton />
            </Box>
          </FormBackground>
        </Col>
      </Row>
    </Container>
  );
}
