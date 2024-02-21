import React, { useState } from "react";
import "./Carousel.css"; // Import your CSS file for styling
import TestmonialControl from "../testimonials/TestimonialControls";

const CustomCarousel = ({ items, rightClick, leftClick, dotClick }) => {
  console.log(items);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className="ccarousel-container">
      <div className="ccarousel">
        {items.map((item, index) => (
          <div
            key={index}
            className={`ccarousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <TestmonialControl
        dotClick={dotClick}
        leftClick={leftClick}
        rightClick={rightClick}
      />
    </div>
  );
};

export default CustomCarousel;
