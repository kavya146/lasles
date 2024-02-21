import { Col, Container, Row } from "react-bootstrap";
import "./Testimonial.css";
import TestimonialTemplate from "./TestimonialTemplate";
import TestimonialCarousel from "./TesimonialCarousel";
import { useState } from "react";

const Testimonial = () => {
  const [items, setItems] = useState([
    <TestimonialTemplate
      className="lasles-testmonial red"
      url={"https://laslesvpn-landing.netlify.app/images/customer-1.png"}
      heading="Viezh Robert"
      subtext="Warsaw, Poland"
      desc="Wow... I am very happy to use this VPN, it turned out to be more
  than my expectations and so far there have been no problems.
  LaslesVPN always the best."
      rating="4.5"
    />,
    <TestimonialTemplate
      className="lasles-testmonial"
      url={"https://laslesvpn-landing.netlify.app/images/customer-2.png"}
      heading="Yessica Christy"
      subtext="Shanxi, China"
      desc="I like it because I like to travel far and still can connect with
      high speed."
      rating="4.5"
    />,
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
    />,
  ]);
  const mainlist = [
    <TestimonialTemplate
      className="lasles-testmonial red"
      url={"https://laslesvpn-landing.netlify.app/images/customer-1.png"}
      heading="Viezh Robert"
      subtext="Warsaw, Poland"
      desc="Wow... I am very happy to use this VPN, it turned out to be more
  than my expectations and so far there have been no problems.
  LaslesVPN always the best."
      rating="4.5"
    />,
    <TestimonialTemplate
      className="lasles-testmonial"
      url={"https://laslesvpn-landing.netlify.app/images/customer-2.png"}
      heading="Yessica Christy"
      subtext="Shanxi, China"
      desc="I like it because I like to travel far and still can connect with
      high speed."
      rating="4.5"
    />,
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
    />,
  ];

  const dotClick = (number) => {
    debugger;
    const newItems = [];
    newItems.push(mainlist[number]);
    for (let i = 0; i < items.length; i++) {
      if (i !== number) newItems.push(mainlist[i]);
    }
    setItems([...newItems]);
  };

  const rightClick = () => {
    const newList = [];
    newList.push(items[items.length - 1]);
    for (let i = 0; i < items.length - 1; i++) {
      newList.push(items[i]);
    }
    setItems([...newList]);
  };

  const leftClick = () => {
    const newList = [];
    for (let i = 1; i < items.length; i++) {
      newList.push(items[i]);
    }
    newList.push(items[0]);
    setItems([...newList]);
  };
  return (
    <Container id="testimonials" style={{ overflow: "hidden" }}>
      <TestimonialCarousel
        leftClick={leftClick}
        rightClick={rightClick}
        dotClick={dotClick}
        items={items}
      />
    </Container>
  );
};

export default Testimonial;
