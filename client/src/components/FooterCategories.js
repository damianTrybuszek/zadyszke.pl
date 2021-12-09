import { Typography } from "@mui/material";
import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class FooterCategories extends Component {
  constructor(props) {
    super(props);
    this.copyright = <div></div>;
  }

  render(props) {
    return (
      <Container>
        <Row>
          <Col item xs={2}>
            <Row>
              <Typography variant="h5">Kategorie</Typography>
            </Row>
            <Row>
              <Typography variant="subtitle1">Kategoria 1</Typography>
            </Row>
            <Row>
              <Typography variant="subtitle1">Kategoria 2</Typography>
            </Row>
            <Row>
              <Typography variant="subtitle1">Kategoria 3</Typography>
            </Row>
          </Col>
          <Col item xs={2}>
            <Row>
              <Typography variant="h5">O nas</Typography>
            </Row>
            <Row>
              <Typography variant="subtitle1">O nas 1</Typography>
            </Row>
            <Row>
              <Typography variant="subtitle1">O nas 2</Typography>
            </Row>
            <Row>
              <Typography variant="subtitle1">O nas 3</Typography>
            </Row>
          </Col>
          <Col item xs={2}>
            <Row>
              <Typography variant="h5">Wsparcie</Typography>
            </Row>
            <Row>
              <Typography variant="subtitle1">Wsparcie 1</Typography>
            </Row>
            <Row>
              <Typography variant="subtitle1">Wsparcie 2</Typography>
            </Row>
            <Row>
              <Typography variant="subtitle1">Wsparcie 3</Typography>
            </Row>
          </Col>
          <Col item xs={3}>
            <Row>
              <Typography variant="h5">Warunki Użytkowania</Typography>
            </Row>
            <Row>
              <Typography variant="subtitle1">Warunki Użytkowania 1</Typography>
            </Row>
            <Row>
              <Typography variant="subtitle1">Warunki Użytkowania 2</Typography>
            </Row>
            <Row>
              <Typography variant="subtitle1">Warunki Użytkowania 3</Typography>
            </Row>
          </Col>
          <Col item xs={3}>
            <Row>
              <Typography variant="h5">Polityka Prywatności</Typography>
            </Row>
            <Row>
              <Typography variant="subtitle1">
                Polityka Prywatności 1
              </Typography>
            </Row>
            <Row>
              <Typography variant="subtitle1">
                Polityka Prywatności 2
              </Typography>
            </Row>
            <Row>
              <Typography variant="subtitle1">
                Polityka Prywatności 3
              </Typography>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>{this.props.copyright}</Col>
        </Row>
      </Container>
    );
  }
}

export default FooterCategories;
