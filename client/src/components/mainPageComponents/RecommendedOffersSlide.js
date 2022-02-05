import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleOfferPreview from "./SingleOfferPreview";
import OfferImage1 from "./OfferImage";
import OfferImage2 from "./OfferImage2";
import OfferImage3 from "./OfferImage3";
import OfferImage4 from "./OfferImage4";

class RecommendedOffers extends Component {
  render() {
    return (
      <Container className="justify-content-md-center">
        <h1>Polecane</h1>
        <Row>
          <Col>
            <OfferImage1 />
            <SingleOfferPreview title="Doradzę jak poprawnie sadzić kwiatki w domu!" />
          </Col>
          <Col>
            <OfferImage2 />
            <SingleOfferPreview title="Doradzę jak nagradzać psa, żeby się słuchał!" />
          </Col>
          <Col>
            <OfferImage3 />
            <SingleOfferPreview title="Napiszę Ci Riff na gitarze!" />
          </Col>
          <Col>
            <OfferImage4 />
            <SingleOfferPreview title="Zaśpiewam Ci dowolny tekst!" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RecommendedOffers;
