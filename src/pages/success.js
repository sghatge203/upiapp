import React from "react";
import { Row, Col } from "reactstrap";
import success from "../success.jpg";
const Success = () => {
  return (
    <div>
      <Row>
        <Col sm="12">
          <div className="success-div">
            <img src={success} alt="success" className="height-190" />
            <div className="payment-title">Payment Successfull</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Success;
