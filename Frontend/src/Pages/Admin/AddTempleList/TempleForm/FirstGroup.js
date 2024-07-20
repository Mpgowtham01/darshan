import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import PrimeDropdown from "./TempleFormComponents/PrimeDropdown";
import PrimeMultiselect from "./TempleFormComponents/PrimeMultiselect";

const FirstGroup = ({
  register,
  errors,
  control,
  godList,
  othergod_id,
  main_god_id,
}) => {
  const [otherGodList, setOtherGodList] = useState([]);
  const [otherGodIds, setOtherGodIds] = useState([]);

  const defaultOtherGodList = othergod_id
    ? godList.filter(item => item.main_god_id != main_god_id)
    : otherGodList;

  const handleMainGod = e => {
    if (otherGodIds?.includes(e.target.value)) {
      setOtherGodList([]);
    } else {
      setOtherGodList(
        godList.filter(item => item.main_god_id != e.target.value)
      );
    }
  };

  const handleOtherGod = e => {
    console.log("Other god value", e.target.value);
    setOtherGodIds(() => e.target.value);

    if (e.target.value == null) {
      setOtherGodList(godList);
    }
  };

  return (
    <>
      <Row className="mb-4">
        <Col lg={4}>
          <Form.Group className="mb-3" controlId="templeName">
            <Form.Label>Temple Name</Form.Label>
            <Form.Control
              {...register("temple_name", { required: true })}
              type="text"
            />
            {errors.temple_name && (
              <Form.Text className="text-danger">
                Temple Name is required
              </Form.Text>
            )}
          </Form.Group>
        </Col>

        <Col lg={4}>
          <PrimeDropdown
            controlKey="main_god_id"
            name="Main God"
            optionLabel="god_name"
            optionValue="main_god_id"
            onChangeHandler={handleMainGod}
            list={godList}
            errors={errors}
            control={control}
          />
        </Col>

        <Col lg={4}>
          <PrimeMultiselect
            required={false}
            controlKey="othergod_id"
            name="Other God"
            optionLabel={"god_name"}
            optionValue="main_god_id"
            onChangeHandler={handleOtherGod}
            list={defaultOtherGodList}
            errors={errors}
            control={control}
          />
        </Col>
      </Row>
    </>
  );
};

export default FirstGroup;
