import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import {
  getAreaList,
  getCityList,
  getDistrictList,
  getStateList,
} from "../utils";
import PrimeDropdown from "./TempleFormComponents/PrimeDropdown";
import InputField from "./TempleFormComponents/InputField";

const SecondGroup = ({ errors, control, countries, register }) => {
  const [district, setDistrict] = useState([]);
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [areas, setAreas] = useState([]);
  const godGenderList = [
    {
      id: 1,
      name: "Male",
    },
    {
      id: 2,
      name: "Female",
    },
    {
      id: 3,
      name: "Others",
    },
  ];
  const { state: locationState } = useLocation();

  const textAreaProps = {
    errors,
    register,
    others: {
      as: "textarea",
      rows: 3,
    },
  };

  useEffect(() => {
    if (locationState?.country_id) {
      getStateList(locationState?.country_id, setStates);
    }

    if (locationState?.state_id) {
      getDistrictList(locationState?.state_id, setDistrict);
    }

    if (locationState?.district_id) {
      getCityList(locationState?.district_id, setCities);
    }

    if (locationState?.city_id) {
      getAreaList(locationState?.city_id, setAreas);
    }
  }, []);

  const countryOnChangeHandler = (e) => {
    getStateList(e.target.value, setStates);
  };

  const statesOnChangeHandler = (e) => {
    getDistrictList(e.target.value, setDistrict);
  };

  const districtOnChangeHandler = (e) => {
    getCityList(e.target.value, setCities);
  };

  const cityOnChangeHandler = (e) => {
    getAreaList(e.target.value, setAreas);
  };

  const areasOnChangeHandler = () => {};
  console.log("countries:", { countries });

  return (
    <>
      <Row>
        <Col lg={4}>
          <PrimeDropdown
            controlKey="country_id"
            name="Country"
            optionLabel="country"
            optionValue="id"
            onChangeHandler={countryOnChangeHandler}
            list={countries}
            errors={errors}
            control={control}
          />
        </Col>

        <Col lg={4}>
          <PrimeDropdown
            controlKey="state_id"
            name="State"
            optionLabel="state"
            optionValue="id"
            onChangeHandler={statesOnChangeHandler}
            list={states}
            errors={errors}
            control={control}
          />
        </Col>

        <Col lg={4}>
          <PrimeDropdown
            controlKey="district_id"
            name="District"
            optionLabel="district"
            optionValue="id"
            onChangeHandler={districtOnChangeHandler}
            list={district}
            errors={errors}
            control={control}
          />
        </Col>
      </Row>

      <Row className="mb-4">
        <Col lg={4}>
          <PrimeDropdown
            controlKey="city_id"
            name="City"
            optionLabel="city"
            optionValue="id"
            onChangeHandler={cityOnChangeHandler}
            list={cities}
            errors={errors}
            control={control}
          />
        </Col>

        <Col lg={4}>
          <PrimeDropdown
            controlKey="area_id"
            name="Area"
            optionLabel="area_name"
            optionValue="area_id"
            onChangeHandler={areasOnChangeHandler}
            list={areas}
            errors={errors}
            control={control}
            // required={t}
          />
        </Col>
        <Col lg={4}>
          <Form.Group controlId="pincode">
            <Form.Label>Pincode</Form.Label>
            <Form.Control
              type="number"
              {...register("pincode", { required: true })}
            />
          </Form.Group>
        </Col>
        <Col lg={4}>
          <InputField
            {...textAreaProps}
            keyId="temple_address"
            name="Temple Address"
          />
        </Col>
        <Col lg={4}>
          <InputField {...textAreaProps} keyId="temple_map" name="Temple Map" />
        </Col>
        <Col lg={4}>
          <PrimeDropdown
            controlKey="godGender"
            name="God's Gender"
            optionLabel="name"
            optionValue="name"
            onChangeHandler={(e) => {}}
            list={godGenderList}
            errors={errors}
            control={control}
          />
        </Col>
      </Row>
    </>
  );
};

export default SecondGroup;
