import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  getFestivalDetails,
  getPariharam,
  getPriestFunctions,
} from "../../utils";
import PrimeDropdown from "../TempleFormComponents/PrimeDropdown";
import PrimeMultiselect from "../TempleFormComponents/PrimeMultiselect";
import InputField from "../TempleFormComponents/InputField";

const controlledByOptions = ["Public", "Private", "Government", "Others"];

const TempleDetailsGroup = ({ errors, control, register }) => {
  const [pariharam, setPariharam] = useState([]);
  const [festivals, setFestivals] = useState([]);
  const [functions, setFunctions] = useState([]);

  const textFieldProps = {
    errors,
    register,
  };

  useEffect(() => {
    getPariharam(setPariharam);
    getFestivalDetails(setFestivals);
    // getFunctionDetails(setFunctions);
    getPriestFunctions(setFunctions);
  }, []);

  return (
    <>
      <Row className="mt-5">
        <Col lg={4}>
          <PrimeMultiselect
            controlKey="pariharam"
            name="Pariharam"
            optionLabel="pariharam_name"
            optionValue="pariharam_id"
            list={pariharam}
            errors={errors}
            control={control}
            required={false}
          />
        </Col>

        <Col lg={4}>
          <PrimeMultiselect
            controlKey="festival_ids"
            name="Festival"
            optionLabel="festival_name"
            optionValue="festival_id"
            list={festivals}
            errors={errors}
            control={control}
            required={false}
          />
        </Col>

        <Col lg={4}>
          <PrimeMultiselect
            controlKey="functionsInsideTemple"
            name="Function Inside Temple"
            optionValue="id"
            optionLabel="function_name"
            list={functions}
            errors={errors}
            control={control}
            required={false}
          />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col lg={4}>
          <PrimeDropdown
            controlKey="control_by"
            name="Control By"
            onChangeHandler={() => {}}
            list={controlledByOptions}
            errors={errors}
            control={control}
          />
        </Col>

        <Col lg={4}>
          <InputField
            {...textFieldProps}
            name="Incharge name"
            keyId={"incharge_name"}
            required={false}
          />
        </Col>

        <Col lg={4}>
          <InputField
            {...textFieldProps}
            name="Phone number"
            keyId={"phone_number"}
            required={false}
          />
        </Col>

        <Col lg={4}>
          <InputField
            {...textFieldProps}
            name="Temple Mail id"
            keyId={"temple_mailid"}
            required={false}
          />
        </Col>

        <Col lg={4}>
          <InputField
            {...textFieldProps}
            name="Website"
            keyId={"temple_website"}
            required={false}
          />
        </Col>
        <Col lg={4}>
          <InputField
            {...textFieldProps}
            name="Latitude"
            keyId={"Latitude"}
            required={true}
          />
        </Col>
        <Col lg={4} className="mt-2">
          <InputField
            {...textFieldProps}
            name="Longitude"
            keyId={"Longitude"}
            required={true}
          />
        </Col>
      </Row>
    </>
  );
};

export default TempleDetailsGroup;
