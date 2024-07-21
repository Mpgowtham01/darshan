import { Dropdown } from "primereact/dropdown";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Layout from "../../../../components/Layout";
import {
  getAreaList,
  getCityList,
  getDistrictList,
  getStateList,
} from "../../../Admin/AddTempleList/utils";
import "./IyerBookingForm.scss";
import { Calendar } from "primereact/calendar";

const IyerBookingForm = () => {
  const [disableSubmitBtn, setDisableSubmitBtn] = useState(true);

  const [stateList, setStateList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [areaList, setAreaList] = useState([]);

  const [countryValue, setCountryValue] = useState(null);
  const [stateValue, setStateValue] = useState(null);
  const [district, setDistrict] = useState(null);
  const [city, setCity] = useState(null);
  const [area, setArea] = useState(null);
  const [functionAddress, setFunctionAddress] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [priestLanguage, setLanguage] = useState(null);

  const countries = useSelector((state) => state?.allTemples?.countryList);

  useEffect(() => {
    if (!countryValue || !stateValue || !district || !city || !area) {
      return setDisableSubmitBtn(true);
    }

    setDisableSubmitBtn(false);
  }, [countryValue, stateValue, district, city, area]);

  const countryOnChangeHandler = (e) => {
    setCountryValue(e.value);
    getStateList(e.value, setStateList);
  };

  const statesOnChangeHandler = (e) => {
    setStateValue(e.value);
    getDistrictList(e.value, setDistrictList);
  };

  const districtOnChangeHandler = (e) => {
    setDistrict(e.value);
    getCityList(e.value, setCityList);
  };

  const cityOnChangeHandler = (e) => {
    setCity(e.value);
    getAreaList(e.value, setAreaList);
  };

  const areasOnChangeHandler = (e) => {
    setArea(e.value);
  };

  return (
    <Layout>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} xl={6}>
            <div className="iyerBookingForm">
              <Form>
                <div className="iyerBookingForm__header">
                  <h1 className="title">Priest Booking</h1>
                </div>

                <div className="grid">
                  <div className="form-group">
                    <label htmlFor="country">Select Country</label>
                    <Dropdown
                      filter
                      value={countryValue}
                      id="country"
                      onChange={countryOnChangeHandler}
                      optionLabel="country"
                      optionValue="id"
                      options={countries}
                      className="primeSelect"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="state">Select State</label>
                    <Dropdown
                      filter
                      value={stateValue}
                      id="state"
                      onChange={statesOnChangeHandler}
                      optionLabel="state"
                      optionValue="id"
                      options={stateList}
                      className="primeSelect"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="district">Select District</label>
                    <Dropdown
                      filter
                      value={district}
                      id="district"
                      onChange={districtOnChangeHandler}
                      optionLabel="district"
                      optionValue="id"
                      options={districtList}
                      className="primeSelect"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="city">Select City</label>
                    <Dropdown
                      filter
                      value={city}
                      id="city"
                      onChange={cityOnChangeHandler}
                      optionLabel="city"
                      optionValue="id"
                      options={cityList}
                      className="primeSelect"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="area">Select Area</label>
                    <Dropdown
                      filter
                      value={area}
                      id="area"
                      onChange={areasOnChangeHandler}
                      optionLabel="area_name"
                      optionValue="area_id"
                      options={areaList}
                      className="primeSelect"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <Calendar
                      value={date}
                      id="date"
                      dateFormat="dd/mm/yy"
                      touchUI
                      onChange={(e) => setDate(e.value)}
                    ></Calendar>
                  </div>

                  <div className="form-group">
                    <label htmlFor="time">Time</label>
                    <Calendar
                      value={time}
                      id="time"
                      timeOnly
                      hourFormat="12"
                      touchUI
                      onChange={(e) => setTime(e.value)}
                    ></Calendar>
                  </div>

                  <div className="form-group"></div>
                </div>

                <div className="text-center mt-5">
                  <button disabled={disableSubmitBtn} className="customBtn bg">
                    Submit
                  </button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default IyerBookingForm;
