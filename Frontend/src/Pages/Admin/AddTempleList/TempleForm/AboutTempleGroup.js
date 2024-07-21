import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { getGroupTable, getSpeciality } from "../utils";
import PrimeDropdown from "./TempleFormComponents/PrimeDropdown";
import PrimeMultiselect from "./TempleFormComponents/PrimeMultiselect";
import { Rate } from 'antd';
import { useForm, Controller } from "react-hook-form";

const AboutTempleGroup = ({ register, errors, control }) => {
  const [groupTable, setGroupTable] = useState([]);
  const [speciality, setSpeciality] = useState([]);
  const [starTemple, setStarTemple] = useState(5); // Start with 5 as the initial value

  const touristList = [
    {
      id: 1,
      name: "Yes"
    },
    {
      id: 2,
      name: "No"
    }
  ];

  useEffect(() => {
    getGroupTable(setGroupTable);
    getSpeciality(setSpeciality);
  }, []);

  return (
    <>
      <Row>
        <Col lg={4}>
          <PrimeDropdown
            controlKey="grouptable_id"
            name="Group"
            optionLabel="group_name"
            optionValue="id"
            onChangeHandler={() => {}}
            list={groupTable}
            errors={errors}
            control={control}
          />
        </Col>

        <Col lg={4}>
          <PrimeMultiselect
            controlKey="speciality_id"
            name="Speciality"
            optionLabel="speciality_name"
            optionValue="id"
            onChangeHandler={(e) => {}}
            list={speciality}
            errors={errors}
            control={control}
          />
        </Col>
        <Col lg={4}>
          <Form.Group controlId="temple_year">
            <Form.Label>Temple Start Date</Form.Label>
            <Form.Control {...register("temple_year", { required: true })} />
            {errors.temple_year && (
              <Form.Text className="text-danger">Temple Year is required</Form.Text>
            )}
          </Form.Group>
        </Col>
        <Col lg={4}>
          <Form.Group controlId="starTemple">
            <Form.Label>Star Temple</Form.Label>
            <Controller
              name="starTemple"
              control={control}
              defaultValue={starTemple}
              render={({ field }) => (
                <Rate
                  count={5}
                  onChange={(value) => {
                    field.onChange(value); // Set the value to the selected rating
                    setStarTemple(value); // Update the starTemple state
                  }}
                  value={field.value} // Use field value for the component value
                />
              )}
              rules={{ required: true }}
            />
            {errors.starTemple && (
              <Form.Text className="text-danger">Star Temple is required</Form.Text>
            )}
          </Form.Group>
        </Col>
        <Col lg={4}>
          <PrimeDropdown
            controlKey="tourist_id"
            name="This is Tourist place"
            optionLabel="name"
            optionValue="id"
            onChangeHandler={(e) => {}}
            list={touristList}
            errors={errors}
            control={control}
          />
        </Col>
      </Row>
    </>
  );
};

export default AboutTempleGroup;
