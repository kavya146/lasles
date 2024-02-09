import { Col, Container, Row } from "react-bootstrap";
import "./Overview.css";
import Button from "react-bootstrap/Button";

const Overview = () => {
  return (
    <>
      <div className="lasles-overview">
        <Container>
          <Row>
            <Col className="overview-left" lg={6}>
              <h1 className="h1-p-margin-bottom">
                Want anything to be <br></br> easy with <span>LaslesVPN</span>
              </h1>
              <p className="h1-p-margin-bottom">
                Provide a network for all your needs with ease and fun using
                <span>LaslesVPN</span> discover interesting features from us.
              </p>
              <Button className="getstarted-btn" variant="danger">
                Get Started
              </Button>
            </Col>
            <Col lg={6}>
              <img src="https://laslesvpn-landing.netlify.app/images/illustration-1.svg"></img>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Overview;
