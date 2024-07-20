import React from "react";
import { Col, Row } from "react-bootstrap";
import InputField from "./TempleFormComponents/InputField";

const TextAreaGroups = ({ register, errors }) => {
  const textAreaProps = {
    errors,
    register,
    others: {
      as: "textarea",
      rows: 3,
    },
  };

  return (
    <>
      <Row className="mt-4">
        <Col lg={4}>
          <Col>
            <InputField
              {...textAreaProps}
              keyId="temple_history"
              name="Temple History"
            />
          </Col>
        </Col>

        <Col lg={4}>
          <InputField
            {...textAreaProps}
            keyId="pooja_timings"
            name="Pooja Timings"
          />
        </Col>

        <Col lg={4}>
          <InputField
            {...textAreaProps}
            keyId="temple_prasadam"
            name="Prasadam"
            required={false}
          />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col lg={4}>
          <InputField
            {...textAreaProps}
            others={{
              ...textAreaProps.others,
              placeholder: "example: Rope car system, By Walk",
            }}
            keyId="ways_to_reach"
            name="Ways to reach temple"
          />
        </Col>
        <Col lg={4}>
          <InputField
            {...textAreaProps}
            keyId="temple_tree"
            name="Temple Tree"
            required={false}
          />
        </Col>

        <Col lg={4}>
          <InputField
            {...textAreaProps}
            required={false}
            keyId="temple_additional"
            name="Temple Additional Details"
          />
        </Col>
      </Row>
    </>
  );
};

export default TextAreaGroups;
