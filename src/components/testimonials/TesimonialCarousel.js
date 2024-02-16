import { Button, Carousel } from "react-bootstrap";
import TestimonialTemplate from "./TestimonialTemplate";
import "./carousel.css";

const TestimonialCarousel = () => {
  return (
    <div className="carousel-root">
      <TestimonialTemplate
        className="lasles-testmonial"
        url={"https://laslesvpn-landing.netlify.app/images/customer-1.png"}
        heading="Viezh Robert"
        subtext="Warsaw, Poland"
        desc="Wow... I am very happy to use this VPN, it turned out to be more
        than my expectations and so far there have been no problems.
        LaslesVPN always the best."
        rating="4.5"
      />

      <TestimonialTemplate
        className="lasles-testmonial"
        url={"https://laslesvpn-landing.netlify.app/images/customer-2.png"}
        heading="Yessica Christy"
        subtext="Shanxi, China"
        desc="I like it because I like to travel far and still can connect with
              high speed."
        rating="4.5"
      />
      <TestimonialTemplate
        className="lasles-testmonial"
        url={"https://laslesvpn-landing.netlify.app/images/customer-3.png"}
        heading="Kim Young Jou"
        subtext="Seoul, South Korea"
        desc="
        “This is very unusual for my business that currently requires a
        virtual private network that has high security.”
      "
        rating="4.5"
      />
    </div>
  );
};

export default TestimonialCarousel;
