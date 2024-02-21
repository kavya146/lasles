import { Button, Carousel } from "react-bootstrap";
import TestimonialTemplate from "./TestimonialTemplate";
import "./carousel.css";
import CustomCarousel from "../carousel/Carousel";

const TestimonialCarousel = ({ items, rightClick, leftClick, dotClick }) => {
  return (
    <div className="carousel-root">
      <CustomCarousel
        leftClick={leftClick}
        rightClick={rightClick}
        items={items}
        dotClick={dotClick}
      ></CustomCarousel>
    </div>
  );
};

export default TestimonialCarousel;
