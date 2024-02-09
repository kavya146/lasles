import { Button, Col, Container, Row } from "react-bootstrap";
import logo from "./logo.svg";
import "./header.css";
import HorizontalNav from "../navbar/horizontal/HorizontalNav";
import { useState } from "react";
import VerticalNav from "../navbar/vertical/VerticalNav";

const Header = () => {
  const [menuState, setMenuState] = useState(false);

  const menuClick = (e) => {
    if (menuState === true) {
      setMenuState(false);
    } else {
      setMenuState(true);
    }
  };

  return (
    <>
      <div className={"lasles-header"}>
        <Container>
          <Row className="header-row" xs={1} sm={1} md={1} lg={3}>
            <Col className="mobile-header" xs={1} sm={1} md={1} lg={2}>
              <a href="#">
                <img src={logo} />
              </a>
              <MenuIcon menuClick={menuClick} />
            </Col>

            <Col lg={7} className="lasles-horizontalnav">
              <HorizontalNav />
            </Col>

            <Col lg={3} className="lasles-sign-btn">
              <Button variant="light" className="sign-in-btn" href="#signin">
                Sign In
              </Button>
              <Button variant="outline-danger">Sign Up</Button>
            </Col>
          </Row>
        </Container>
      </div>
      <VerticalNav menuOpen={!menuState} />
    </>
  );
};

const MenuIcon = ({ menuClick }) => {
  return (
    <div onClick={menuClick}>
      <div className="menu-bar"></div>
      <div className="menu-bar"></div>
      <div className="menu-bar"></div>
    </div>
  );
};

export default Header;
