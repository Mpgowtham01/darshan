import React, { memo } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Dropdown } from "primereact/dropdown";
import useFetch from "./useFetch";

const DistanceField = memo(({ handleRoute, currentNumber, kilometer }) => {
  return (
    <Col lg={4}>
      <Form.Group controlId="distance">
        <Form.Label>Distance(Km)</Form.Label>
        <Form.Control
          value={kilometer}
          type="number"
          onChange={e => {
            handleRoute(currentNumber, "kilometer", e.target.value);
          }}
        />
      </Form.Group>
    </Col>
  );
});

const RoutesToReachToTemple = ({ countries, currentNumber, handleRoute, handleRemove, route, country, countryName, state, stateName, district, districtName, cityName, kilometer, id }) => {
  const [statesList] = useFetch(country, `state/getState/${country}`);
  const [districtList] = useFetch(state, `district/getdistrict/${state}}`);
  const [citiesList] = useFetch(district, `city/getCity/${district}}`);

  const routeTypesOptions = [
    "Nearest Bustand",
    "Nearest Airport",
    "Nearest Railway Staion",
    "Nearest Taxistand",
  ];

  const onCountryChange = async e => {
    handleRoute(currentNumber, "country", e.value.id);
    handleRoute(currentNumber, "countryName", e.value.country);
  };

  const onStateChange = e => {
    handleRoute(currentNumber, "state", e.value.id);
    handleRoute(currentNumber, "stateName", e.value.state);
  };

  const onDistrictChange = e => {
    handleRoute(currentNumber, "district", e.value.id);
    handleRoute(currentNumber, "districtName", e.value.district);
  };

  const onCityChange = e => {
    handleRoute(currentNumber, "city", e.value.id);
    handleRoute(currentNumber, "cityName", e.value.city);
  };

  const selectedCountryTemplate = (option, props) => {
    if (option) {
      return (
        <div className="country-item country-item-value">
          <div>{option}</div>
        </div>
      );
    }

    if (props.value) {
      return <span>{props.value}</span>;
    }

    return <span>{props.placeholder}</span>;
  };

  return (
    <div className="mt-3">
      {currentNumber >= 1 && (
        <Button
          variant="danger"
          className="mb-4"
          onClick={() => {
            handleRemove(id);
          }}>
          Remove
        </Button>
      )}
      <Row className="mt-3">
        <Col lg={4}>
          <Form.Label>Select Route</Form.Label>
          <Dropdown
            filter
            value={route}
            onChange={e => {
              handleRoute(currentNumber, "route", e.value);
            }}
            placeholder="Select a Route"
            options={routeTypesOptions}
            className="primeSelect"
            showClear
          />
        </Col>

        <Col lg={4}>
          <Form.Label>Select Country</Form.Label>
          <Dropdown
            value={countryName}
            filter
            placeholder="Select a country"
            options={countries}
            onChange={onCountryChange}
            optionLabel="country"
            valueTemplate={selectedCountryTemplate}
            className="primeSelect"
          />
        </Col>

        <Col lg={4}>
          <Form.Label>Select State</Form.Label>
          <Dropdown
            value={stateName}
            filter
            placeholder="Select a State"
            options={statesList}
            onChange={onStateChange}
            optionLabel="state"
            valueTemplate={selectedCountryTemplate}
            className="primeSelect"
          />
        </Col>
      </Row>

      <Row className="mt-3">
        <Col lg={4}>
          <Form.Label>Select District</Form.Label>
          <Dropdown
            value={districtName}
            filter
            placeholder="Select a district"
            options={districtList}
            onChange={onDistrictChange}
            optionLabel="district"
            valueTemplate={selectedCountryTemplate}
            className="primeSelect"
          />
        </Col>

        <Col lg={4}>
          <Form.Label>Select City</Form.Label>
          <Dropdown
            value={cityName}
            filter
            placeholder="Select a city"
            options={citiesList}
            onChange={onCityChange}
            optionLabel="city"
            valueTemplate={selectedCountryTemplate}
            className="primeSelect"
          />
        </Col>

        <DistanceField
          kilometer={kilometer}
          handleRoute={handleRoute}
          currentNumber={currentNumber}
        />
      </Row>
    </div>
  );
};

export default memo(RoutesToReachToTemple);
