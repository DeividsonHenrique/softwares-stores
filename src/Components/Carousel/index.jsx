/* eslint-disable react/prop-types */
import Slider from "react-slick";
import { Zoom } from "react-awesome-reveal";
import styled from "styled-components";


const Container = styled.div`
  width: 100%;
`

function ImageCarousel({ children }) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };

  return (
    <Container>
      <Zoom duration={1000}>
        <Slider {...settings}>{children}</Slider>
      </Zoom>
    </Container>
  );
}

export default ImageCarousel;
