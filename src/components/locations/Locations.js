import { Col, Container, Row } from "react-bootstrap";
import "./Locations.css";

const Locations = () => {
  return (
    <div className="lasles-location">
      <Container>
        <Row>
          <Col>
            <h3>
              Huge Global Network <br></br>of Fast VPN
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              See LaslesVPN everywhere to make it easier for you when you move
              <br></br>
              locations.
            </p>
          </Col>
        </Row>

        <Row>
          <Col className="map-style">
            <img
              className="img-centre"
              src="https://laslesvpn-landing.netlify.app/images/locations.svg"
            ></img>
          </Col>
        </Row>

        <Row style={{ alignItems: "center" }}>
          <Col>
            <img src="https://laslesvpn-landing.netlify.app/images/netflix-logo.png"></img>
          </Col>
          <Col>
            <img src="https://laslesvpn-landing.netlify.app/images/reddit-logo.png"></img>
          </Col>
          <Col>
            <img src="https://laslesvpn-landing.netlify.app/images/amazon-logo.png"></img>
          </Col>
          <Col>
            <img src="https://laslesvpn-landing.netlify.app/images/discord-logo.png"></img>
          </Col>
          <Col>
            <img src="https://laslesvpn-landing.netlify.app/images/spotify-logo.png"></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Locations;
