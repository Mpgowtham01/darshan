import React, { useEffect, useState, useRef } from "react";
import { Row, Col, Form, Container } from "react-bootstrap";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik } from "formik";
import * as Yup from "yup";
import InputField from "../../AddTempleList/TempleForm/TempleFormComponents/InputField";

import { useLocation, useNavigate } from "react-router-dom";
import {
  getAreaList,
  getCityList,
  getCountryList,
  getDistrictList,
  getStateList,
} from "../../AddTempleList/utils";
import { Toast } from "primereact/toast";
import PrimeDropdown from "../../AddTempleList/TempleForm/TempleFormComponents/PrimeDropdown";
import { useForm } from "react-hook-form";
import "../kulaCss/AddMatrimonial.scss";

import { Calendar } from "primereact/calendar";
import axios from "axios";
import PrimeDate from "../../AddTempleList/TempleForm/TempleFormComponents/PrimeDate";
import PrimeTime from "../../AddTempleList/TempleForm/TempleFormComponents/PrimeTime";
import { format } from "date-fns";

const AddMatrimonial = () => {
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [district, setDistrict] = useState([]);
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [areas, setAreas] = useState([]);
  const [gender, setGender] = useState([]);
  const toast = useRef(null);

  const { state: locationState } = useLocation();
  const name = [
    { value: "Male", gender: "Male" },
    { value: "Female", gender: "Female" },
  ];

  const displayToaster = () => {
    toast.current.show({
      severity: "success",
      summary: "Done",
      detail: `MatrimonialForm ${locationState ? "is Updated" : "Created"}`,
      life: 3000,
    });
    setTimeout(() => {
      navigate("/kuladeivam/MatrimonialList");
    }, 1000);
  };

  const createEventData = DATA => {
    axios
      .post(
        `${process.env.REACT_APP_DEV_BASE_URL}/community/createMatrimonial`,
        DATA
      )
      .then(res => {
        displayToaster();
      });
  };

  const updateEventData = data => {
    console.log("updateee", data);
    axios
      .put(
        `${process.env.REACT_APP_DEV_BASE_URL}/community/updateMatrimonial/${locationState.id}`,
        data
      )
      .then(res => {
        console.log("updateevent:>> ", res.data);

        navigate(-1);
      });
  };

  let defaultValues = {};

  if (locationState) {
    const {
      name,
      phone_number,
      date_of_birth,
      gender,
      zodiac_sign,
      star,
      salary,
      address,
      description,
      country,
      district,
      state,
      city,
      area,
      education_qualification,
    } = locationState;

    // Default Values when editing
    defaultValues = {
      ...locationState,
      name: name,
      phone_number: phone_number,
      date_of_birth: new Date(date_of_birth),
      gender: gender,
      zodiac_sign: zodiac_sign,
      star: star,
      salary: salary,
      address: address,
      description: description,
      country: country,
      district: district,
      state: state,
      city: city,
      area: area,
      education_qualification: education_qualification,
    };
  }

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues: locationState ? defaultValues : {} });

  const commonProps = {
    errors,
    register,
  };

  useEffect(() => {
    getCountryList(setCountries);

    console.log("Temple Country", locationState?.country);
    if (locationState?.country) {
      getStateList(locationState?.country, setStates);
    }

    if (locationState?.state) {
      getDistrictList(locationState?.state, setDistrict);
    }

    if (locationState?.district) {
      getCityList(locationState?.district, setCities);
    }

    if (locationState?.city) {
      getAreaList(locationState?.city, setAreas);
    }
  }, []);

  const genderOnChangeHandler = e => {
    setGender(e.target.value);
  };

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
  const areasOnChangeHandler = () => {};

  const getFormData = data => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("date_of_birth", data.date_of_birth);
    formData.append("gender", data.gender);

    formData.append("zodiac_sign", data.zodiac_sign);
    formData.append("star", data.star);

    formData.append("salary", data.salary);
    formData.append("city", data.city);
    formData.append("country", data.country);
    formData.append("district", data.district);
    formData.append("state", data.state);
    formData.append("address", data.address);
    formData.append("area", data.area);
    formData.append("phone_number", data.phone_number);
    formData.append("description", data.description);
    formData.append("pincode", data.pincode);
    formData.append("education_qualification", data.education_qualification);

    console.log("form data", data);
    return formData;
  };

  const onSubmit = async data => {
    console.log("data", data);
    if (locationState) {
      //update
      updateEventData(getFormData(data));
    } else {
      createEventData(getFormData(data));
    }
  };
  return (
    <div className="createFormPage">
      <Toast ref={toast} />

      <Container>
        <div className="createFormPage__header">
          <h5 className="createFormPage__header--title">
            
          {locationState ? "Edit" : "Create"}  Matrimonial Profile
          </h5>
        </div>
        <Form
          className="createFormPage__form"
          onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col lg={6}>
              <InputField {...commonProps} keyId="name" name=" Name" />
            </Col>
            <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="education_qualification"
                name=" Education Qualification"
              />
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <PrimeTime
                errors={errors}
                control={control}
                name="Date Of Birth"
                controlId="date_of_birth"
              />
            </Col>
            <Col lg={6}>
              <PrimeDropdown
                controlKey="gender"
                name="Gender"
                optionLabel="gender"
                optionValue="value"
                onChangeHandler={genderOnChangeHandler}
                list={name}
                errors={errors}
                control={control}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="zodiac_sign"
                name=" Zodiac Sign"
              />
            </Col>
            <Col lg={6}>
              <InputField {...commonProps} keyId="star" name=" Star" />
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <InputField {...commonProps} keyId="salary" name="Salary" />
            </Col>
            <Col lg={6}>
              <PrimeDropdown
                controlKey="country"
                name="Country"
                optionLabel="country"
                optionValue="id"
                onChangeHandler={countryOnChangeHandler}
                list={countries}
                errors={errors}
                control={control}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <PrimeDropdown
                controlKey="state"
                name="State"
                optionLabel="state"
                optionValue="id"
                onChangeHandler={statesOnChangeHandler}
                list={states}
                errors={errors}
                control={control}
              />
            </Col>
            <Col lg={6}>
              <PrimeDropdown
                controlKey="district"
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
            <Col lg={6}>
              <PrimeDropdown
                controlKey="city"
                name="City"
                optionLabel="city"
                optionValue="id"
                onChangeHandler={cityOnChangeHandler}
                list={cities}
                errors={errors}
                control={control}
              />
            </Col>
            <Col lg={6}>
              <PrimeDropdown
                controlKey="area"
                name="Area"
                optionLabel="area_name"
                optionValue="area_id"
                onChangeHandler={areasOnChangeHandler}
                list={areas}
                errors={errors}
                control={control}
              />
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="description"
                name=" Description"
                others={{ as: "textarea", rows: 4 }}
              />
            </Col>
            <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="address"
                name="Address"
                others={{ as: "textarea", rows: 4 }}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Form.Group controlId="phone_number">
                <Form.Label> Phone Number</Form.Label>
                <Form.Control
                  {...register("phone_number", { required: true })}
                  type="number"
                  autoComplete="off"
                />
                {errors.phone_number && (
                  <Form.Text className="text-danger">
                    Number is required
                  </Form.Text>
                )}
              </Form.Group>
            </Col>
            <Col lg={6}>
              <InputField {...commonProps} keyId="pincode" name="Pincode" />
            </Col>
          </Row>

          <br />
          <button
            className="customBtn"
            style={{ color: "black" }}
            type="submit">
            Submit
          </button>
        </Form>
      </Container>
    </div>
  );
};

export default AddMatrimonial;
