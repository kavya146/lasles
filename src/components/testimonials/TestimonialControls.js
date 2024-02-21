import { Container } from "react-bootstrap";
import "./TestimonialControl.css";
import { useState } from "react";

const TestmonialControl = ({ rightClick, leftClick, dotClick }) => {
  const [ind, setInd] = useState(0);
  return (
    <div className="control">
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "centre",
        }}
      >
        <div className="dots disabled">
          <div
            onClick={() => {
              dotClick(0);
              setInd(0);
            }}
            className={`dot ${ind === 0 ? "redb" : ""}`}
          ></div>
          <div
            onClick={() => {
              dotClick(1);
              setInd(1);
            }}
            className={`dot ${ind === 1 ? "redb" : ""}`}
          ></div>
          <div
            onClick={() => {
              dotClick(2);
              setInd(2);
            }}
            className={`dot ${ind === 2 ? "redb" : ""}`}
          ></div>
        </div>

        <div className="arrows">
          <div onClick={leftClick} className="arrow-left">
            <img src="https://laslesvpn-landing.netlify.app/images/arrow-left.svg"></img>
          </div>
          <div onClick={rightClick} className="arrow-right">
            <img src="https://laslesvpn-landing.netlify.app/images/arrow-right.svg"></img>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TestmonialControl;
