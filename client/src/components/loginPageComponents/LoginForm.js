import React, { useState, useCallback, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Form, Button, Container } from "react-bootstrap";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import FormBackground from "./FormBackground";
import { Col, Row } from "react-bootstrap";
import { Typography } from "@mui/material";
import LoginButton from "./LoginButton";
import GoogleLoginButton from "./GoogleLoginButton";
import FacebookLoginButton from "./FacebookLoginButton";

function LoginForm() {
  const [error, setError] = useState(null);
  const [enteredLogin, setEnteredLogin] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredLoginIsValid, setEnteredLoginIsValid] = useState(false);
  const [enteredLoginTouched, setEnteredLoginTouched] = useState(false);
  const [enteredPasswordIsValid, setEnteredPasswordIsValid] = useState(false);
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);

  useEffect(() => {
    if (enteredLoginIsValid) {
      console.log('Login is valid!');
    }
  }, [enteredLoginIsValid]);

  useEffect(() => {
    if (enteredPasswordIsValid) {
      console.log('Login is valid!');
    }
  }, [enteredPasswordIsValid]);

  const enteredLoginChangeHandler = (event) => {
    setEnteredLogin(event.target.value);
  };

  const enteredPasswordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault(); //to prevent sending HTTP request instantly, page would be reloaded

    setEnteredLoginTouched(true);
    setEnteredPasswordTouched(true);

    // console.log(enteredLogin);

    if(enteredLogin.trim() == '') {
      setEnteredLoginIsValid(false);
      return;
    }

    setEnteredLoginIsValid(true);

    if(enteredPassword == '') {
      setEnteredPasswordIsValid(false);
      return;
    }

    setEnteredPasswordIsValid(true);

    setEnteredLogin("");
    setEnteredPassword("");
  };

  const InputReader = (props) => {};

  const loginInputIsInvalid =!enteredLoginIsValid && enteredLoginTouched;
  const passwordInputIsInvalid =!enteredPasswordIsValid && enteredPasswordTouched;

  // const fetchLoginHandler = useCallback(async () => {
  //   setError(null);
  //   try {
  //     const response = await fetch('');
  //     if (!response.ok) {
  //       throw new Error('Something went wrong!');
  //     }
  //     } catch (error) {
  //       setError(error.message)

  //   }
  // }, []);
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
      <Row>
        <Col>
          <Typography variant="h3" marginTop="40%" marginLeft="20%">
            Logowanie
          </Typography>
        </Col>
        <Col>
          <FormBackground>
            <Box
              sx={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "repeat(1, 2fr)",
              }}
            >
              <Form onSubmit={formSubmissionHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Adres e-mail</Form.Label>
                  <Form.Control
                    size="sm"
                    type="email"
                    placeholder="Wprowadź adres email"
                    onChange={enteredLoginChangeHandler}
                    value={enteredLogin}
                  />
                  <Form.Text className="text-muted">
                  {loginInputIsInvalid && <p>Pole login nie może być puste</p>}
                    Bez obaw, nikomu nie podamy Twojego adresu email.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Hasło</Form.Label>
                  <Form.Control
                    size="sm"
                    type="password"
                    placeholder="Wprowadź hasło"
                    onChange={enteredPasswordHandler}
                    value={enteredPassword}
                  />
                  <Form.Text className="text-muted">
                  {passwordInputIsInvalid && <p>Pole hasło nie może być puste</p>}
                  </Form.Text>
                </Form.Group>

                <LoginButton />
                {error && <p>{error}</p>}
                {!error && <p></p>}
                <FacebookLoginButton />
                <p></p>
                <GoogleLoginButton />
              </Form>
            </Box>
          </FormBackground>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginForm;
