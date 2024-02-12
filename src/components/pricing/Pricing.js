import { Col, Container, Row } from "react-bootstrap";
import "./Pricing.css";
import FreePlan from "../pricingbox/Freeplan";
import StandardPlan from "../pricingbox/Standard";
import PremiumPlan from "../pricingbox/Premium";

const Pricing = () => {
  return (
    <div className="lasles-pricing">
      <Container>
        <div>
          <h2 className="pricing-h2">Choose Your Plan</h2>
          <p className="pricing-p">
            Lets choose the package that is best for you and explore it happily
            and
            <br></br>
            cheerfully.
          </p>
        </div>
        <Row>
          <Col lg={4}>
            <FreePlan />
          </Col>
          <Col lg={4}>
            <StandardPlan />
          </Col>
          <Col lg={4}>
            <PremiumPlan />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Pricing;
