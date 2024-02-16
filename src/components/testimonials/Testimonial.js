import { Col, Container, Row } from "react-bootstrap";
import "./Testimonial.css";
import TestimonialTemplate from "./TestimonialTemplate";
import TestimonialCarousel from "./TesimonialCarousel";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  return (
    <Container style={{ overflow: "hidden" }}>
      <TestimonialCarousel />
      <TestimonialSlider />
    </Container>
  );
};

export default Testimonial;
