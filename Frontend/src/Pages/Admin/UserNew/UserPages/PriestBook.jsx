import React, { useEffect, useState, useRef } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Toast } from "primereact/toast";
import {
  getAreaList,
  getCityList,
  getDistrictList,
  getStateList,
} from "../../../Admin/AddTempleList/utils";
import "../../../Booking/PriestBooking/PriestBooking.scss";
import Api from "../../../../Api";

const PriestBooking = () => {
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
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [priestName, setPriestName] = useState("");
  const [priestContact, setPriestContact] = useState("");
  const [priestEmail, setPriestEmail] = useState("");
  const [priestAddress, setPriestAddress] = useState("");

  const [serviceType, setServiceType] = useState("");
  const [serviceDuration, setServiceDuration] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");

  const countries = useSelector((state) => state?.allTemples?.countryList);
  console.log("countries :>> ", countries);
  const serviceTypes = [
    { label: "Marriage", value: "Marriage" },
    { label: "House Warming", value: "House Warming" },
    { label: "Ganesh Chaturthi", value: "Ganesh Chaturthi" },
    { label: "Sasti", value: "Sasti" },
    { label: "Pradhosam", value: "Pradhosam" },


  ];
  const serviceDurationOptions = [
    { label: "1-2 hours", value: "1-2 hours" },
    { label: "2-3 hours", value: "2-3 hours" },
    { label: "3-4 hours", value: "3-4 hours" },
    { label: "4-5 hours", value: "4-5 hours" },
  ];

  const toast = useRef(null);

  useEffect(() => {
    if (!countryValue || !stateValue || !district || !city) {
      return setDisableSubmitBtn(true);
    }

    setDisableSubmitBtn(false);
  }, [countryValue, stateValue, district, city]);

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

  const userId = localStorage.getItem("id");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await Api.post(
      `${process.env.REACT_APP_DEV_BASE_URL}/iyerbooking/createNewBooking`,
      {
        userId: userId,
        country: countryValue,
        state: stateValue,
        district: district,
        city: city,
        servicetype: serviceType,
        specialInstruction: specialInstructions,
        duration: serviceDuration,
        area: area,
        date: date,
        time: time,
        name: priestName,
        email: priestEmail,
        contact: priestContact,
        address: priestAddress,
      }
    )
      .then((res) => {
        console.log("response iyer", res);

        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Form submitted successfully",
          life: 3000,
        });
      })
      .catch((err) => console.log("err :>> ", err));
  };

  return (
    <div>
      <Row className="justify-content-center">
        <Col lg={12} xl={10}>
          <div
            className="iyerBookingForm"
            style={{ padding: "30px 0px 30px 0px" }}
          >
            <Toast ref={toast} />
            <Form onSubmit={handleSubmit}>
              <div className="iyerBookingForm__header">
                <h1 className="title">Priest Booking</h1>
              </div>
              <h3>Service</h3>
              <div className="grid">
                <div className="form-group">
                  <label htmlFor="serviceType">Service Type</label>
                  <Dropdown
                    filter
                    value={serviceType}
                    id="serviceType"
                    onChange={(e) => setServiceType(e.value)}
                    optionLabel="label"
                    optionValue="value"
                    options={serviceTypes}
                    className="primeSelect"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="specialInstructions">
                    Special Instructions
                  </label>
                  <input
                    id="specialInstructions"
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                    className="form-control"
                  ></input>
                </div>

                <div className="form-group">
                  <label htmlFor="serviceDuration">Service Duration</label>
                  <Dropdown
                    id="serviceDuration"
                    value={serviceDuration}
                    options={serviceDurationOptions}
                    onChange={(e) => setServiceDuration(e.value)}
                    optionLabel="label"
                    placeholder="Select a duration"
                    className="primeSelect"
                  />
                </div>
              </div>
              <br />
              <h3>Service Location</h3>
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
                    className="date"
                    id="date"
                    dateFormat="dd/mm/yy"
                    onChange={(e) => setDate(e.value)}
                  ></Calendar>
                </div>

                <div className="form-group">
                  <label htmlFor="time">Time</label>
                  <Calendar
                    value={time}
                    id="time"
                    className="date"
                    timeOnly
                    hourFormat="12"
                    onChange={(e) => setTime(e.value)}
                  ></Calendar>
                </div>
              </div>
              <br />
              <h3>Priest Details</h3>
              <div className="grid">
                <div className="form-group">
                  <label htmlFor="priestName">Name</label>
                  <input
                    type="text"
                    id="priestName"
                    value={priestName}
                    onChange={(e) => setPriestName(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="priestContact">Contact Number</label>
                  <input
                    type="number"
                    id="priestContact"
                    value={priestContact}
                    onChange={(e) => setPriestContact(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="priestEmail">Email</label>
                  <input
                    type="email"
                    id="priestEmail"
                    value={priestEmail}
                    onChange={(e) => setPriestEmail(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="priestAddress">Address</label>
                  <textarea
                    type="text"
                    id="priestAddress"
                    value={priestAddress}
                    onChange={(e) => setPriestAddress(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="text-center mt-5">
                <button
                  type="submit"
                  disabled={disableSubmitBtn}
                  className="customBtn bg"
                >
                  Submit
                </button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PriestBooking;
