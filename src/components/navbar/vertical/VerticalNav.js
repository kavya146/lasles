import { Container } from "react-bootstrap";

const VerticalNav = ({ menuOpen }) => {
  return (
    <div
      style={{
        display: `${menuOpen === true ? "none" : "block"}`,
        background: "#0b132a",
        height: "calc(100vh - 80px)",
        color: "white",
      }}
    >
      <div>
        <div>About</div>
        <div>Features</div>
        <div>Pricing</div>
        <div>Testmonials</div>
        <div>Help</div>
        <div
          style={{ height: "2px", width: "100px", backgroundColor: "black" }}
        ></div>
        <div>Sign In</div>
        <div>Sign Up</div>
      </div>
    </div>
  );
};
export default VerticalNav;
