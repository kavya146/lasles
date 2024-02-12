import { Button } from "react-bootstrap";
import "./Plan.css";
import logo from "./pricinglogo.svg";

const PremiumPlan = () => {
  return (
    <div className="lasles-plan">
      <div className="plan-box-style">
        <div>
          <div className="pricing-logo">
            <img src={logo}></img>
          </div>
          <h3>Premium Plan</h3>

          <div>
            <ul>
              <li>Unlimited Bandwitch</li>
              <li>Encrypted Connection</li>
              <li>Yes Traffic Logs</li>
              <li>Works On All Devices</li>
              <li>Connect Anyware</li>
              <li>Get New Features</li>
            </ul>
          </div>
        </div>

        <div className="plan-footer">
          <h3>
            $12
            <span style={{ fontWeight: "lighter" }}>/ mo</span>
          </h3>
          <Button className="select-style" variant="outline-danger">
            Select
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PremiumPlan;
