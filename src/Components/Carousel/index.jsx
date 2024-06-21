/* eslint-disable react/prop-types */
import Slider from "react-slick";
import styles from "./Carousel.module.css";
import { Zoom } from "react-awesome-reveal";

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
    <div className={styles.container}>
      <Zoom duration={1000}>
        <Slider {...settings}>{children}</Slider>
      </Zoom>
    </div>
  );
}

export default ImageCarousel;
