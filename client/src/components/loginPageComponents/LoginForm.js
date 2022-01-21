import React, { useState,useEffect } from "react";
import  { useNavigate } from 'react-router-dom';
import { Form,  Container } from "react-bootstrap";
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

  const [isLogin, setIsLogin] = useState(false);
  
  let navigate = useNavigate();
  let formIsValid = false;

  if (enteredLoginIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  useEffect(() => {
    if (enteredLoginIsValid) {
      console.log("Login is valid!");
    }
  }, [enteredLoginIsValid]);

  useEffect(() => {
    if (enteredPasswordIsValid) {
      console.log("Password is valid!");
    }
  }, [enteredPasswordIsValid]);

  const enteredLoginChangeHandler = (event) => {
    setEnteredLogin(event.target.value);

    if (enteredLogin.trim() !== "") {
      setEnteredLoginIsValid(true);
      return;
    }
  };

  const enteredPasswordHandler = (event) => {
    setEnteredPassword(event.target.value);

    if (enteredPassword.trim() !== "") {
      setEnteredPasswordIsValid(true);
      return;
    }
  };

  const loginInputBlurHandler = (event) => {
    setEnteredLoginTouched(true);

    if (event.target.value.trim() === "") {
      setEnteredLoginIsValid(false);
    }
  };

  const passwordInputBlurHandler = (event) => {
    setEnteredPasswordTouched(true);

    if (event.target.value.trim() === "") {
      setEnteredPasswordIsValid(false);
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault(); //to prevent sending HTTP request instantly, page would be reloaded

    setEnteredLoginTouched(true);
    setEnteredPasswordTouched(true);

    if (enteredLogin.trim() === "") {
      setEnteredLoginIsValid(false);
      return;
    }

    setEnteredLoginIsValid(true);

    if (enteredPassword === "") {
      setEnteredPasswordIsValid(false);
      return;
    }

    setEnteredPasswordIsValid(true);

    submitHandler();
    // checkUserCredentials();

    setEnteredLogin("");
    setEnteredPassword("");
  };

  const submitHandler = () => {

    if (isLogin) {
    } else {
      const fetchTest = 
      fetch("http://localhost:8080/api/users/validate-login", {
        method: "POST",
        body: JSON.stringify({
          email: enteredLogin,
          password: enteredPassword
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.ok) {
          console.log(res);
          navigate('/');
        } else {
          return res.json().then((data) => {
            // show an error modal
            console.log(data);
          });
        }
      });
    }
  };

  const loginInputIsInvalid = !enteredLoginIsValid && enteredLoginTouched;
  const passwordInputIsInvalid =
    !enteredPasswordIsValid && enteredPasswordTouched;

  async function checkUserCredentials() {
    try {
    const response = await fetch(
      "http://localhost:8080/api/users/validate-login",
      {
        method: "POST",
        body: JSON.stringify({
          email: "chip4@gmail.com",
          password: "password"
        }),
        headers: {
          "Content-Type": "application/json",

        },
      }
    );
    const data = await response.json();
    console.log(data); }
    catch (error) {
      console.log(error.message);
    }
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
                    onBlur={loginInputBlurHandler}
                    value={enteredLogin}
                  />
                  <Form.Text className="text-muted">
                    {loginInputIsInvalid && (
                      <p>Pole login nie może być puste</p>
                    )}
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
                    onBlur={passwordInputBlurHandler}
                    value={enteredPassword}
                  />
                  <Form.Text className="text-muted">
                    {passwordInputIsInvalid && (
                      <p>Pole hasło nie może być puste</p>
                    )}
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
