import React from "react";
import { Col, Row } from "react-bootstrap";
import { getStateList } from "../../utils";
import PrimeDropdown from "../PrimeDropdown";

const BusRoutes = ({ countries }) => {
  const [district, setDistrict] = useState(null);
  const [cities, setCities] = useState(null);
  const [states, setStates] = useState([]);
  const [areas, setAreas] = useState([]);

  const countryOnChangeHandler = e => {
    getStateList(e.target.value, setStates);
  };

  const statesOnChangeHandler = e => {
    getDistrictList(e.target.value, setDistrict);
  };

  const districtOnChangeHandler = e => {
    getCityList(e.target.value, setCities);
  };

  const cityOnChangeHandler = e => {
    getAreaList(e.target.value, setAreas);
  };
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

      <Row>
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
      </Row>
    </>
  );
};

export default BusRoutes;
