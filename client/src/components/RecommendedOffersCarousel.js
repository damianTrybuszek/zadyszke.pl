import React, { useState} from "react";
import RecommendedOffersSlide from "./RecommendedOffersSlide";
import Carousel from "react-bootstrap/Carousel";

function RecommendedOffersCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <RecommendedOffersSlide />
      </Carousel.Item>
      <Carousel.Item>
        <RecommendedOffersSlide />
      </Carousel.Item>
      <Carousel.Item>
        <RecommendedOffersSlide />
      </Carousel.Item>
    </Carousel>
  );
}

export default RecommendedOffersCarousel
