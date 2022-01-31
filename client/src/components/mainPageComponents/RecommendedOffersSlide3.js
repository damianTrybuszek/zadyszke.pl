import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleOfferPreview from "./SingleOfferPreview";
import OfferImage9 from "./OfferImage9";
import OfferImage10 from "./OfferImage10";
import OfferImage11 from "./OfferImage11";
import OfferImage12 from "./OfferImage12";

class RecommendedOffers3 extends Component {
  render() {
    return (
      <Container className="justify-content-md-center">
        <h1>Polecane</h1>
        <Row>
          <Col>
            <OfferImage9 />
            <SingleOfferPreview title="Doradzę Ci jak tworzyć YouTube!" />
          </Col>
          <Col>
            <OfferImage10 />
            <SingleOfferPreview title="Napiszę Ci melodię do dowolnego tekstu!" />
          </Col>
          <Col>
            <OfferImage11 />
            <SingleOfferPreview title="Policzę Ci podatek!" />
          </Col>
          <Col>
            <OfferImage12 />
            <SingleOfferPreview title="Napiszę Ci skrypt w Python!" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RecommendedOffers3;
