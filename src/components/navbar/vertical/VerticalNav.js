import { Container } from "react-bootstrap";
import fb from "./facebook.svg";
import twitter from "./twitter.svg";
import insta from "./instagram.svg";

const VerticalNav = ({ menuOpen }) => {
  return (
    <div
      className="md-display-none"
      style={{
        display: `${menuOpen === true ? "none" : "flex"}`,
        background: "#0b132a",
        height: "calc(100vh - 80px)",
        color: "white",
        padding: "20px",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontSize: "x-larger", fontWeight: "700" }}>
        <div style={{ marginBottom: "20px" }}>About</div>
        <div style={{ marginBottom: "20px" }}>Features</div>
        <div style={{ marginBottom: "20px" }}>Pricing</div>
        <div style={{ marginBottom: "20px" }}>Testmonials</div>
        <div style={{ marginBottom: "20px" }}>Help</div>
        <div
          style={{
            height: "2px",
            width: "100px",
            backgroundColor: "white",
            marginBottom: "20px",
          }}
        ></div>
        <div style={{ marginBottom: "20px" }}>Sign In</div>
        <div>Sign Up</div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <a href="https://www.facebook.com/">
          <img src={fb}></img>
        </a>
        <a href="https://Twitter.com/">
          <img src={twitter}></img>
        </a>
        <a href="https://www.Instagram.com/">
          <img src={insta}></img>
        </a>
      </div>
    </div>
  );
};
export default VerticalNav;
