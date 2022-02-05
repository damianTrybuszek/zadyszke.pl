import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Box from "@mui/material/Box";
import sample_offer_1 from "../../graphics/tempImages/sample_offer_3.jpg";
import sample_offer_2 from "../../graphics/tempImages/sample_offer_8.jpg";
import sample_offer_3 from "../../graphics/tempImages/sample_offer_11.jpg";

function OfferPicturesSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Box mt={2}>
      <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
        <Carousel.Item>
          <img
            alt="Oferta - zdjęcie"
            src={sample_offer_1}
            width="300"
            height="225"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="Oferta - zdjęcie"
            src={sample_offer_2}
            width="300"
            height="225"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="Oferta - zdjęcie"
            src={sample_offer_3}
            width="300"
            height="225"
          />
        </Carousel.Item>
      </Carousel>
    </Box>
  );
}

export default OfferPicturesSlider;
