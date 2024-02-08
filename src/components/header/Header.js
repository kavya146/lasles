import { Button, Col, Container, Row } from "react-bootstrap";
import logo from "./logo.svg";
import "./header.css";
import HorizontalNav from "../navbar/horizontal/HorizontalNav";

const Header = () => {
  return (
    <header className={"lasles-header"}>
      <Container>
        <Row className="header-row" md={2} lg={3}>
          <Col md={6} lg={2}>
            <a href="#">
              <img src={logo} />
            </a>
          </Col>

          <Col lg={7} className="lasles-horizontalnav">
            <HorizontalNav />
          </Col>

          <Col lg={3}>
            <div>
              <a className="sign-in-btn" href="#signin">
                Sign In
              </a>
              <Button variant="outline-danger">Sign Up</Button>
            </div>
          </Col>

          <Col md={6}></Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
