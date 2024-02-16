import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import SubscribeLeft from "./SubscribeLeft";
import SubscribeButton from "./SubscribeButton";
import HelpLeft from "./HelpLeft";
import Product from "./Product";
import Engage from "./Engage";
import EarnMoney from "./EarnMoney";

const Footer = () => {
  return (
    <div style={{ paddingTop: "50px" }}>
      <Container className="lasles-footer">
        <Col className="subscribe-col">
          <Row>
            <SubscribeLeft />
          </Row>
          <Row>
            <SubscribeButton />
          </Row>
        </Col>
      </Container>
      <Footer2 />
    </div>
  );
};

const Footer2 = () => {
  return (
    <div>
      <Container>
        <Col className="help-left-col">
          <Row style={{ width: "60%" }}>
            <HelpLeft />
          </Row>
          <Row>
            <Product />
          </Row>
          <Row>
            <Engage />
          </Row>
          <Row>
            <EarnMoney />
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default Footer;
