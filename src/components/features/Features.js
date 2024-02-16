import { Col, Container, Row } from "react-bootstrap";
import "./Features.css";

const Features = () => {
  return (
    <div className="lasles-features">
      <Container>
        <Row>
          <Col lg={6}>
            <img
              className="mobile-view-img"
              src="https://laslesvpn-landing.netlify.app/images/illustration-2.svg"
            ></img>
          </Col>
          <Col lg={6}>
            <h2 className="features-title">
              We Provide Many <br></br>Features You Can Use
            </h2>
            <p>
              You can explore the features that we provide with fun and<br></br>{" "}
              have their own functions each feature.
            </p>
            <ul>
              <li>Powerfull online protection.</li>
              <li>Internet without borders.</li>
              <li>Supercharged VPN</li>
              <li>No specific time limits.</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Features;
