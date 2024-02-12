import { Button } from "react-bootstrap";
import "./Plan.css";
import logo from "./pricinglogo.svg";

const FreePlan = () => {
  return (
    <div className="lasles-plan">
      <div className="plan-box-style">
        <div>
          <div className="pricing-logo">
            <img src={logo}></img>
          </div>
          <h3>Free Plan</h3>

          <div>
            <ul>
              <li>Unlimited Bandwitch</li>
              <li>Encrypted Connection</li>
              <li>No Traffic Logs</li>
              <li>Works On All Devices</li>
            </ul>
          </div>
        </div>

        <div className="plan-footer">
          <h3>Free</h3>
          <Button className="select-style" variant="outline-danger">
            Select
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FreePlan;
