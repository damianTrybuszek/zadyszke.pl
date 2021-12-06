import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleOfferPreview from "./SingleOfferPreview";

class RecommendedOffers extends Component {
  render() {
    return (
      <Container className="justify-content-md-center">
        <h1>Polecane</h1>
        <Row>
          <Col>
            <SingleOfferPreview />
          </Col>
          <Col>
            <SingleOfferPreview />
          </Col>
          <Col>
            <SingleOfferPreview />
          </Col>
          <Col>
            <SingleOfferPreview />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RecommendedOffers;
