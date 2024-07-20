import React, { useState, useRef } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Calendar } from "primereact/calendar";
import { Toast } from "primereact/toast";
import Layout from "../../../components/Layout";
import { Dropdown } from "primereact/dropdown";
import {
  getAreaList,
  getCityList,
  getDistrictList,
  getStateList,
} from "../../Admin/AddTempleList/utils";
import { useSelector } from "react-redux";
import Api from "../../../Api";

const RoomBookingForm = () => {
  const toast = useRef(null);

  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState(null);
  const [gender, setGender] = useState(null);
  const [emergencyContact, setEmergencyContact] = useState("");
  const [travelDates, setTravelDates] = useState(null);
  const [numTravelers, setNumTravelers] = useState(1);
  const [numRooms, setNumRooms] = useState(1);
  const [mealPreference, setMealPreference] = useState(null);
  const [specialRequirements, setSpecialRequirements] = useState("");
  const [identityProof, setIdentityProof] = useState("");
  const [medical, setMedical] = useState("");

  const [stateList, setStateList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [areaList, setAreaList] = useState([]);

  const [countryValue, setCountryValue] = useState(null);
  const [stateValue, setStateValue] = useState(null);
  const [district, setDistrict] = useState(null);
  const [city, setCity] = useState(null);
  const [area, setArea] = useState(null);
  const countries = useSelector((state) => state?.allTemples?.countryList);
  const userid = localStorage.getItem("id");
  const genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  const mealPreferences = [
    { label: "Vegetarian", value: "vegetarian" },
    { label: "Non-Vegetarian", value: "non-vegetarian" },
    { label: "Vegan", value: "vegan" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Api.post(
      `${process.env.REACT_APP_DEV_BASE_URL}/roomBooking/createRoomBooking`,
      {
        id: userid,
        fullName: fullName,
        contactNumber: contactNumber,
        email: email,
        address: address,
        gender: gender,
        emergencyContact: emergencyContact,
        numberOfTravels: numTravelers,
        numberOfRooms: numRooms,
        country_id: countryValue,
        state_id: stateValue,
        district_id: district,
        city_id: city,
        area_id: area,
        checkIn_out: travelDates,
        medicalInfo: medical,
      }
    )
      .then((res) => {
        console.log("response yatra", res);

        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Form submitted successfully",
          life: 3000,
        });
      })
      .catch((err) => console.log("err :>> ", err));
  };

  const handleIncrement = (incrementValue) => {
    setNumTravelers(numTravelers + incrementValue);
  };

  const handleDecrement = () => {
    if (numTravelers > 1) {
      setNumTravelers(numTravelers - 1);
    }
  };
  const handleRoomsIncrement = (incrementValue) => {
    setNumRooms(numRooms + incrementValue);
  };

  const handleRoomsDecrement = () => {
    if (numTravelers > 1) {
      setNumRooms(numRooms - 1);
    }
  };

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
          <Col lg={12} xl={10}>
            <div className="iyerBookingForm">
              <Form onSubmit={handleSubmit}>
                <div className="iyerBookingForm__header">
                  <h1 className="title">Room Booking</h1>
                </div>
                <Toast ref={toast} />
                <h3>Travel Details</h3>
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
                  <div></div>
                  <div className="form-group">
                    <label htmlFor="travelDates">
                      Check-In date -- Check-Out date
                    </label>
                    <Calendar
                      value={travelDates}
                      id="travelDates"
                      onChange={(e) => setTravelDates(e.value)}
                      selectionMode="range"
                      dateFormat="dd/mm/yy"
                      className="date"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="numTravelers">Number of Travelers</label>
                    <div className="input-group">
                      <Button
                        variant="outline-primary"
                        onClick={handleDecrement}
                      >
                        -
                      </Button>
                      <input
                        type="number"
                        id="numTravelers"
                        value={numTravelers}
                        onChange={(e) => setNumTravelers(e.target.value)}
                        className="form-control centered-input"
                        min="1"
                        required
                      />
                      <Button
                        variant="outline-primary"
                        onClick={() => handleIncrement(1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="numTravelers">Number of Rooms</label>
                    <div className="input-group">
                      <Button
                        variant="outline-primary"
                        onClick={handleRoomsDecrement}
                      >
                        -
                      </Button>
                      <input
                        type="number"
                        id="numTravelers"
                        value={numRooms}
                        onChange={(e) => setNumRooms(e.target.value)}
                        className="form-control centered-input"
                        min="1"
                        required
                      />
                      <Button
                        variant="outline-primary"
                        onClick={() => handleRoomsIncrement(1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
                <br />
                <h3>Traveler Information</h3>
                <div className="grid">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contactNumber">Contact Number</label>
                    <input
                      type="text"
                      id="contactNumber"
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <Dropdown
                      value={gender}
                      id="gender"
                      onChange={(e) => setGender(e.value)}
                      options={genders}
                      optionLabel="label"
                      optionValue="value"
                      className="primeSelect"
                      placeholder="Select gender"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="emergencyContact">Emergency Contact</label>
                    <input
                      type="text"
                      id="emergencyContact"
                      value={emergencyContact}
                      onChange={(e) => setEmergencyContact(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <textarea
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <br />

                <br />
                <h3>Additional Information</h3>
                <div className="grid">
                  <div className="form-group">
                    <label htmlFor="medical">Medical Information</label>
                    <textarea
                      id="medical"
                      value={medical}
                      onChange={(e) => setMedical(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="identityProof">Identity Proof</label>
                    <input
                      type="file"
                      id="identityProof"
                      value={identityProof}
                      onChange={(e) => setIdentityProof(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="text-center mt-5">
                  <button type="submit" className="customBtn bg">
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

export default RoomBookingForm;
