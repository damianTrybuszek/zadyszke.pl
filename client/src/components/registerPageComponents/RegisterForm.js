import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Container } from "react-bootstrap";
import RegisterButton from "./RegisterButton";
import FacebookRegisterButton from "./FacebookRegisterButton";
import GoogleRegisterButton from "./GoogleRegisterButton";
import Box from "@mui/material/Box";
import FormBackground from "../loginPageComponents/FormBackground";
import { Col, Row } from "react-bootstrap";
import { Typography } from "@mui/material";

export default function RegisterForms() {
  const [error, setError] = useState(null);

  const [enteredName, setEnteredName] = useState("");
  const [enteredSurname, setEnteredSurname] = useState("");
  const [enteredLogin, setEnteredLogin] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredRepeatedPassword, setEnteredRepeatedPassword] = useState("");
  const [areTermsAccepted, setTermsAccepted] = useState(false);

  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredSurnameIsValid, setEnteredSurnameIsValid] = useState(false);
  const [enteredSurnameTouched, setEnteredSurnameTouched] = useState(false);
  const [enteredLoginIsValid, setEnteredLoginIsValid] = useState(false);
  const [enteredLoginTouched, setEnteredLoginTouched] = useState(false);
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [enteredPasswordIsValid, setEnteredPasswordIsValid] = useState(false);
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);
  const [enteredRepeatedPasswordIsValid, setEnteredRepeatedPasswordIsValid] =
    useState(false);
  const [enteredRepeatedPasswordTouched, setEnteredRepeatedPasswordTouched] =
    useState(false);

  let navigate = useNavigate();
  let formIsValid = false;

  if (
    enteredLoginIsValid &&
    enteredPasswordIsValid &&
    enteredNameIsValid &&
    enteredSurnameIsValid &&
    enteredEmailIsValid &&
    enteredRepeatedPasswordIsValid
  ) {
    formIsValid = true;
  }

  const enteredNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    console.log(enteredName);

    if (enteredName.trim() !== "") {
      setEnteredNameIsValid(true);
      return;
    }
  };

  const enteredSurnameChangeHandler = (event) => {
    setEnteredSurname(event.target.value);

    if (enteredSurname.trim() !== "") {
      setEnteredSurnameIsValid(true);
      return;
    }
  };

  const enteredEmailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    if (enteredEmail.trim() !== "") {
      setEnteredEmailIsValid(true);
      return;
    }
  };

  const enteredLoginChangeHandler = (event) => {
    setEnteredLogin(event.target.value);

    if (enteredLogin.trim() !== "") {
      setEnteredLoginIsValid(true);
      return;
    }
  };

  const enteredPasswordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    if (enteredPassword.trim() !== "") {
      setEnteredPasswordIsValid(true);
      return;
    }
  };

  const enteredPasswordRepeatedChangeHandler = (event) => {
    setEnteredRepeatedPassword(event.target.value);

    if (enteredRepeatedPassword.trim() !== "") {
      setEnteredRepeatedPasswordIsValid(true);
      return;
    }
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);

    if (event.target.value.trim() === "") {
      setEnteredNameIsValid(false);
    }
  };

  const surnameInputBlurHandler = (event) => {
    setEnteredSurnameTouched(true);

    if (event.target.value.trim() === "") {
      setEnteredSurnameIsValid(false);
    }
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);

    if (event.target.value.trim() === "") {
      setEnteredEmailIsValid(false);
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

  const passwordRepeatedInputBlurHandler = (event) => {
    setEnteredRepeatedPasswordTouched(true);

    if (event.target.value.trim() === "") {
      setEnteredRepeatedPasswordIsValid(false);
    }
  };

  const submitHandler = () => {
    if (formIsValid) {
    } else {
      const fetchTest = fetch("http://localhost:8080/api/users", {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          name: enteredName,
          surname: enteredSurname,
          username: enteredLogin,
          password: enteredPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.ok) {
          console.log(res);
          navigate("/");
        } else {
          return res.json().then((data) => {
            // show an error modal
            console.log(data);
          });
        }
      });
    }
  };

  const termsChangeHandler = () => {
    setTermsAccepted(!areTermsAccepted);
    console.log(areTermsAccepted);
    // if (areTermsAccepted === false) {
    //   setTermsAccepted(true);
    //   console.log(areTermsAccepted);
    // } else {
    //   setTermsAccepted(false);
    //   console.log(areTermsAccepted);
    // }
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
            <Box
              sx={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "repeat(1, 2fr)",
              }}
            >
              <Form onSubmit={formSubmissionHandler}>
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                  <Form.Label>Imię</Form.Label>
                  <Form.Control
                    size="sm"
                    type="firstName"
                    placeholder="Wprowadź imię"
                    onChange={enteredNameChangeHandler}
                    onBlur={nameInputBlurHandler}
                    value={enteredName}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLastName">
                  <Form.Label>Nazwisko</Form.Label>
                  <Form.Control
                    size="sm"
                    type="LastName"
                    placeholder="Wprowadź nazwisko"
                    onChange={enteredSurnameChangeHandler}
                    onBlur={surnameInputBlurHandler}
                    value={enteredSurname}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNickName">
                  <Form.Label>Nazwa użytkownika</Form.Label>
                  <Form.Control
                    size="sm"
                    type="NickName"
                    placeholder="Wprowadź nazwę użytkownika"
                    onChange={enteredLoginChangeHandler}
                    onBlur={loginInputBlurHandler}
                    value={enteredLogin}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Adres e-mail</Form.Label>
                  <Form.Control
                    size="sm"
                    type="email"
                    placeholder="Wprowadź adres email"
                    onChange={enteredEmailChangeHandler}
                    onBlur={emailInputBlurHandler}
                    value={enteredEmail}
                  />
                  <Form.Text className="text-muted">
                    Bez obaw, nikomu nie podamy Twojego adresu email.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Hasło</Form.Label>
                  <Form.Control
                    size="sm"
                    type="password"
                    placeholder="Wprowadź hasło"
                    onChange={enteredPasswordChangeHandler}
                    onBlur={passwordInputBlurHandler}
                    value={enteredPassword}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="formBasicPasswordRepeated"
                >
                  <Form.Label>Powtórz hasło</Form.Label>
                  <Form.Control
                    size="sm"
                    type="password"
                    placeholder="Powtórz hasło"
                    onChange={enteredPasswordRepeatedChangeHandler}
                    onBlur={passwordRepeatedInputBlurHandler}
                    value={enteredRepeatedPassword}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Akceptuję warunki korzystania z serwisu"
                    onChange={termsChangeHandler}
                    value={areTermsAccepted}
                  />
                </Form.Group>
                <RegisterButton />
                <p></p>
                <FacebookRegisterButton />
                <p></p>
                <GoogleRegisterButton />
              </Form>
            </Box>
          </FormBackground>
        </Col>
      </Row>
    </Container>
  );
}
