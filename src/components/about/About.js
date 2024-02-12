import { Col, Container, Row } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div className="about-style">
      <Container>
        <Row>
          <Col className="about-col-style" lg={4}>
            <img src="https://laslesvpn-landing.netlify.app/images/location-icon.svg"></img>
            <div>
              <p>
                <b>30+</b>
              </p>
              <p>Locations</p>
            </div>
          </Col>
          <Col className="about-col-style" lg={4}>
            <img src="https://laslesvpn-landing.netlify.app/images/server-icon.svg"></img>
            <div>
              <p>
                <b>50+</b>
              </p>
              <p>Servers</p>
            </div>
          </Col>
          <Col className="about-col-style" lg={4}>
            <img src="https://laslesvpn-landing.netlify.app/images/user-icon.svg"></img>
            <div>
              <p>
                <b>90+</b>
              </p>
              <p>Users</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
