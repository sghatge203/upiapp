import React from "react";
import { Row, Col } from "reactstrap";

const UpiForm = (props) => {
  const { handlePayment, handleChange, formData } = props;
  return (
    <div>
      <form>
        <Row className={"row-gutter"}>
          <Col xs="7">
            <input
              value={formData.mobile}
              name="mobile"
              placeholder="Enter your mobile..."
              onChange={handleChange}
              type="text"
              required
              className="form-control"
            />
          </Col>
          <Col xs="1">
            <div className="mt-1">@</div>
          </Col>
          <Col xs="4">
            <select
              id="bankId"
              value={formData.bankId}
              name="bankId"
              type="select"
              onChange={handleChange}
              required
              className="form-select"
            >
              <option value={""}>Select</option>
              <option value={"icici"}>icici</option>
              <option value={"ybl"}>ybl</option>
              <option value={"okhdfcbank"}>okhdfcbank</option>
              <option value={"okaxis"}>okaxis</option>
              <option value={"oksbi"}>oksbi</option>
            </select>
          </Col>
        </Row>
        <br />
        <Row className={"row-gutter"}>
          <Col md="4"></Col>
          <Col md="4">
            <input
              name="amount"
              value={formData.amount}
              placeholder="Amount"
              onChange={handleChange}
              type="text"
              className="form-control"
              required
            />
          </Col>
          <Col md="4"></Col>
        </Row>
        <br />
        <Row className={"row-gutter"}>
          <Col md="12" className="d-grid gap-2">
            <button
              type="submit"
              className="btn btn-primary pay-button btn-block btn-lg"
              onClick={handlePayment}
            >
              Request Money
            </button>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default UpiForm;
