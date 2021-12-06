import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "../components/Card";
import NavbarTop from "../components/NavbarTop";

class MainNotLoggedInPage extends Component {
  render() {
    return (
      <div>
        <NavbarTop />
        <Container>
        <Card>
          <Row>
            <Col> 
            <h1>Masz pomysł? Zrealizuj go z pomocą EKSPERTÓW</h1>
          </Col>
          <Col> 
            <h1>Masz pomysł? Zrealizuj go z pomocą EKSPERTÓW</h1>
          </Col>
        </Row>
        </Card>
        </Container>
      </div>
    );
  }
}

export default MainNotLoggedInPage;
