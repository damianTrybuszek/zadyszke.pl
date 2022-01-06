import React, { useState, useCallback } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Form, Button, Container } from "react-bootstrap";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Col, Row } from "react-bootstrap";
import { Typography } from "@mui/material";
import "../ui/style.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
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
    <Container>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(10, 1fr)",
          gap: 1,
          gridAutoRows: "repeat(15, 1fr)",
        }}
      >
        <Item sx={{ gridRow: "1/3", gridColumn: "1/3" }}>Hasło</Item>
        <Item sx={{ gridRow: "3/6", gridColumn: "1/3" }}>
          <p class='text-sm-left'>Weryfikacja dwuetapowa</p>
        </Item>
        <Item sx={{ gridRow: "1/3", gridColumn: "3/9" }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                size="sm"
                type="password"
                placeholder="Wprowadź hasło"
              />
            </Form.Group>
          </Form>
        </Item>
        <Item sx={{ gridRow: "3/6", gridColumn: "3/9" }}>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="formBasicPhoneNumber"
            >
              <Form.Control
                size="sm"
                type="password"
                placeholder="Wprowadź hasło"
              />
              <Form.Text>
                <p>Twój numer telefonu: +48 123 456 789.</p>
                <p>Na ten numer wyślemy kody.</p>
              </Form.Text>
            </Form.Group>
          </Form>
        </Item>
      </Box>
    </Container>
  );
}

export default ChangePassword;
