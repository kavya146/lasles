import { Col, Container, Row } from "react-bootstrap";
import "./Overview.css";
import Button from "react-bootstrap/Button";

const Overview = () => {
  return (
    <>
      <div className="lasles-overview">
        <Container>
          <Row className="reverse-img-small-screen">
            <Col className="overview-left" lg={6}>
              <h1 className="h1-overview">
                Want anything to be <br></br> easy with{" "}
                <span style={{ fontWeight: "800" }}>LaslesVPN</span>
              </h1>
              <p className="p-overview">
                Provide a network for all your needs with ease and fun using
                <span style={{ color: "black" }}> LaslesVPN</span> discover
                interesting features from us.
              </p>
              <Button className="getstarted-btn" variant="danger">
                Get Started
              </Button>
            </Col>
            <Col lg={6}>
              <img
                className="mobile-view-img"
                src="https://laslesvpn-landing.netlify.app/images/illustration-1.svg"
              ></img>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Overview;
