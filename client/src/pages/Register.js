import { Component } from "react";
import NavbarTop from "../components/NavbarTop";
import { Form, Button, Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

class RegisterPage extends Component {
  render() {
    return (
      <div>
        
        <NavbarTop />

        <Container>
          <Row>
            <Col>
              <h2>Rejestracja</h2>
           </Col>
            <Col>
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


  <Button variant="primary" type="submit">
    Dołącz
  </Button>
</Form>
</Col>
</Row>
        </Container>
      </div>
    );
  }
}

export default RegisterPage;
