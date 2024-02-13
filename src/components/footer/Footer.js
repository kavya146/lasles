import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import SubscribeLeft from "./SubscribeLeft";
import SubscribeButton from "./SubscribeButton";

const Footer = () => {
  return (
    <div className="lasles-footer">
      <Container>
        <Col className="footer-col">
          <Row>
            <SubscribeLeft />
          </Row>
          <Row>
            <SubscribeButton />
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default Footer;
