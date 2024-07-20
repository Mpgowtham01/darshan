import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Calendar } from "primereact/calendar";
import { Toast } from "primereact/toast";
import "./YatraBooking.scss";
import { useForm } from "react-hook-form";
import Layout from "../../../components/Layout";
import { useLocation } from "react-router-dom";
import { Dropdown } from "primereact/dropdown";
import PrimeDropdown from "../../Admin/AddTempleList/TempleForm/TempleFormComponents/PrimeDropdown";
import Api from "../../../Api";
import {
  getAreaList,
  getCityList,
  getCountryList,
  getDistrictList,
  getStateList,
} from "../../Admin/AddTempleList/utils";

const YatraBookingForm = () => {
  const toast = useRef(null);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [cities, setCities] = useState([]);
  const [areas, setAreas] = useState([]);
  const { state: locationState } = useLocation();
  const [prefill, setPrefill] = useState(locationState?.prefill || false);

  useEffect(() => {
    if (prefill) {
      userGetDetails();
    }
    getCountryList(setCountries);

    if (locationState?.temple_country) {
      getStateList(locationState?.temple_country, setStates);
    }

    if (locationState?.temple_state) {
      getDistrictList(locationState?.temple_state, setDistricts);
    }

    if (locationState?.temple_district) {
      getCityList(locationState?.temple_district, setCities);
    }

    if (locationState?.temple_city) {
      getAreaList(locationState?.temple_city, setAreas);
    }
  }, [prefill, locationState]);

  const userGetDetails = async () => {
    const userId = localStorage.getItem("id");
    axios
      .get(
        `${process.env.REACT_APP_DEV_BASE_URL}/userRegister/getOne/${userId}`
      )
      .then((resp) => {
        const userData = resp.data[0];
        console.log("country:", userData.CountryId);
        setValue("UserName", userData.UserName);
        setValue("contactNumber", userData.Phone);
        setValue("email", userData.EmailId);
        setValue("address", userData.Address);
        setValue("dob", new Date(userData.Dob));
        setValue("gender", userData.Gender);
        setValue("emergencyContact", userData.EmergencyContact);
        setValue("packageType", userData.PackageType);
        setValue("travelDates", userData.TravelDates);
        setValue("numTravelers", userData.NumTravelers);
        setValue("mealPreference", userData.MealPreference);
        setValue("specialRequirements", userData.SpecialRequirements);
        setValue("identityProof", userData.IdentityProof);
        setValue("medical", userData.Medical);
        setValue("country", userData.CountryId);
        setValue("state", userData.StateId);
        setValue("district", userData.DistrictId);
        setValue("city", userData.CityId);
        setValue("area", userData.AreaId);

        if (userData.CountryId) {
          getStateList(userData.CountryId, setStates);
          getDistrictList(userData.StateId, setDistricts);
          getCityList(userData.DistrictId, setCities);
          getAreaList(userData.CityId, setAreas);
        }
      });
  };

  const onSubmit = async (data) => {
    await Api.post(
      `${process.env.REACT_APP_DEV_BASE_URL}/yatraBooking/createYatraBooking`,
      {
        id: localStorage.getItem("id"),
        ...data,
      }
    )
      .then((res) => {
        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Form submitted successfully",
          life: 3000,
        });
      })
      .catch((err) => console.log("Error: ", err));
  };

  return (
    <Layout>
      <Container>
        <Row className="justify-content-center">
          <Col lg={12} xl={10}>
            <div className="iyerBookingForm">
              <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="iyerBookingForm__header">
                  <h1 className="title">Yatra Booking</h1>
                </div>
                <Toast ref={toast} />

                <br />
                <h3>Traveler Information</h3>
                <div className="grid">
                  <div className="form-group">
                    <label htmlFor="UserName">Full Name</label>
                    <input
                      type="text"
                      id="UserName"
                      {...register("UserName")}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contactNumber">Contact Number</label>
                    <input
                      type="text"
                      id="contactNumber"
                      {...register("contactNumber")}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      {...register("email")}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <textarea
                      id="address"
                      // value={getValues("address")}
                      {...register("address")}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="dob">Date of Birth</label>
                    <Calendar
                      {...register("dob")}
                      id="dob"
                      dateFormat="dd/mm/yy"
                      className="date"
                      value={getValues("dob")}
                    ></Calendar>
                  </div>
                  <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <Dropdown
                      {...register("gender")}
                      id="gender"
                      options={[
                        { label: "Male", value: "male" },
                        { label: "Female", value: "female" },
                        { label: "Other", value: "other" },
                      ]}
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
                      {...register("emergencyContact")}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <br />
                <h3>Travel Details</h3>
                <div className="grid">
                  <div className="form-group">
                    <label htmlFor="travelDates">Travel Dates</label>
                    <Calendar
                      {...register("travelDates")}
                      id="travelDates"
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
                        onClick={() =>
                          setValue(
                            "numTravelers",
                            Math.max(1, getValues("numTravelers") - 1)
                          )
                        }
                      >
                        -
                      </Button>
                      <input
                        type="number"
                        id="numTravelers"
                        {...register("numTravelers")}
                        className="form-control centered-input"
                        min="1"
                        required
                      />
                      <Button
                        variant="outline-primary"
                        onClick={() =>
                          setValue(
                            "numTravelers",
                            getValues("numTravelers") + 1
                          )
                        }
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="mealPreference">Meal Preference</label>
                    <Dropdown
                      {...register("mealPreference")}
                      id="mealPreference"
                      options={[
                        { label: "Vegetarian", value: "vegetarian" },
                        { label: "Non-Vegetarian", value: "non-vegetarian" },
                        { label: "Vegan", value: "vegan" },
                      ]}
                      optionLabel="label"
                      optionValue="value"
                      className="primeSelect"
                      placeholder="Select meal preference"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="specialRequirements">
                      Special Requirements
                    </label>
                    <textarea
                      id="specialRequirements"
                      {...register("specialRequirements")}
                      className="form-control"
                    />
                  </div>
                </div>
                <br />
                <h3>Additional Information</h3>
                <div className="grid">
                  <div className="form-group">
                    <label htmlFor="identityProof">Identity Proof</label>
                    <input
                      type="file"
                      id="identityProof"
                      {...register("identityProof")}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="medical">Medical Information</label>
                    <textarea
                      id="medical"
                      {...register("medical")}
                      className="form-control"
                    />
                  </div>
                </div>
                <br />
                <h3>Address Information</h3>
                <div className="grid">
                  <div className="form-group">
                    <label htmlFor="country">Country</label>
                    {countries && (
                      <Dropdown
                        {...register("country")}
                        id="country"
                        options={countries}
                        optionLabel="country"
                        optionValue="id"
                        className="primeSelect"
                        onChange={(e) => {
                          setValue("country", e.value);
                          getStateList(e.value, setStates);
                        }}
                        value={getValues("country")}
                        placeholder="Select country"
                        required
                      />
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">State</label>
                    {states && (
                      <Dropdown
                        {...register("state")}
                        id="state"
                        options={states}
                        optionLabel="state"
                        optionValue="id"
                        className="primeSelect"
                        onChange={(e) => {
                          setValue("state", e.value);
                          getDistrictList(e.value, setDistricts);
                        }}
                        value={getValues("state")}
                        placeholder="Select state"
                        required
                      />
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="district">District</label>
                    {districts && (
                      <Dropdown
                        {...register("district")}
                        id="district"
                        options={districts}
                        optionLabel="district"
                        optionValue="id"
                        className="primeSelect"
                        onChange={(e) => {
                          setValue("district", e.value);
                          getCityList(e.value, setCities);
                        }}
                        value={getValues("district")}
                        placeholder="Select district"
                        required
                      />
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    {cities && (
                      <Dropdown
                        {...register("city")}
                        id="city"
                        options={cities}
                        optionLabel="city"
                        optionValue="id"
                        className="primeSelect"
                        onChange={(e) => {
                          setValue("city", e.value);
                          getAreaList(e.value, setAreas);
                        }}
                        value={getValues("city")}
                        placeholder="Select city"
                        required
                      />
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="area">Area</label>
                    {areas && (
                      <Dropdown
                        {...register("area")}
                        id="area"
                        options={areas}
                        optionLabel="area_name"
                        optionValue="area_id"
                        className="primeSelect"
                        placeholder="Select area"
                        value={getValues("area")}
                        required
                      />
                    )}
                  </div>
                </div>
                <div
                  className="form-group text-center"
                  style={{ marginTop: "20px" }}
                >
                  <Button
                    type="submit"
                    variant="primary"
                    className="custom-button"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default YatraBookingForm;
