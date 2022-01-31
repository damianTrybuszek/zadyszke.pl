import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleOfferPreview from "./SingleOfferPreview";
import OfferImage5 from "./OfferImage5";
import OfferImage6 from "./OfferImage6";
import OfferImage7 from "./OfferImage7";
import OfferImage8 from "./OfferImage8";

class RecommendedOffers2 extends Component {
  render() {
    return (
      <Container className="justify-content-md-center">
        <h1>Polecane</h1>
        <Row>
          <Col>
            <OfferImage5 />
            <SingleOfferPreview title="Przepiszę Ci PDF do Excela!" />
          </Col>
          <Col>
            <OfferImage6 />
            <SingleOfferPreview title="Zaprojektuję Ci logo!" />
          </Col>
          <Col>
            <OfferImage7 />
            <SingleOfferPreview title="Zaprojektuję Ci stronę WWW!" />
          </Col>
          <Col>
            <OfferImage8 />
            <SingleOfferPreview title="Doradzę Ci jak poprawnie prowadzić social media!" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RecommendedOffers2;
