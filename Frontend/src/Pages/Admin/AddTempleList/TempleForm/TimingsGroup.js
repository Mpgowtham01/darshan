import React from "react";
import { Col, Row } from "react-bootstrap";
import PrimeDate from "./TempleFormComponents/PrimeDate";

const TimingsGroup = ({ errors, control }) => {
  return (
    <div className="timingsGroup mt-5">
      <Row>
        <Col lg={6}>
          <h3 className="timingsGroup__title">Morning Time</h3>
          <Row>
            <Col lg={6}>
              <PrimeDate
                errors={errors}
                control={control}
                name="Temple Opening Time"
                controlId="temple_amotime"
              />
            </Col>

            <Col lg={6}>
              <PrimeDate
                errors={errors}
                control={control}
                name="Temple closing Time"
                controlId="temple_amctime"
              />
            </Col>
          </Row>
        </Col>

        <Col lg={6}>
          <h3 className="timingsGroup__title">Evening Time</h3>
          <Row>
            <Col lg={6}>
              <PrimeDate
                errors={errors}
                control={control}
                name="Temple Opening Time"
                controlId="temple_pmotime"
              />
            </Col>

            <Col lg={6}>
              <PrimeDate
                errors={errors}
                control={control}
                name="Temple closing Time"
                controlId="temple_pmctime"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default TimingsGroup;
