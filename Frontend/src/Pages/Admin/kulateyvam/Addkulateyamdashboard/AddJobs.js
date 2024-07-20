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
import axios from "axios";

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
    { value: "M", gender: "male" },
    { value: "F", gender: "female" },
  ];

  const displayToaster = () => {
    toast.current.show({
      severity: "success",
      summary: "Done",
      detail: `Job Form ${locationState ? "is Updated" : "Created"}`,
      life: 3000,
    });
    // setTimeout(() => {
    //   navigate("/kuladeivam/JobList");
    // }, 1000);
  };

  const createEventData = (DATA) => {
    axios
      .post(`${process.env.REACT_APP_DEV_BASE_URL}/community/createJob`, DATA)
      .then((res) => {
        displayToaster();
      });
  };

  const updateEventData = (data) => {
    axios
      .put(
        `${process.env.REACT_APP_DEV_BASE_URL}/community/updateJob/${locationState.id}`,
        data
      )
      .then((res) => {
        navigate(-1);
      });
  };

  let defaultValues = {};

  if (locationState) {
    const {
      position,
      qualification,
      groupId,
      gender,

      address,
      description,
      country,
      district,
      state,
      city,
    } = locationState;

    // Default Values when editing
    defaultValues = {
      ...locationState,
      position: position,
      qualification: qualification,
      groupId: groupId,
      gender: gender,

      address: address,
      description: description,
      country: country,
      district: district,
      state: state,
      city: city,
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

  const genderOnChangeHandler = (e) => {
    setGender(e.target.value);
  };
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

  // const getFormData = (DATA, mainImage) => {
  //   const formData = new FormData();
  //   formData.append("event_image", mainImage);

  //   return formData;
  // };

  const getFormData = (data) => {
    const formData = new FormData();
    formData.append("position", data.position);
    formData.append("qualification", data.qualification);
    formData.append("gender", data.gender);
    formData.append("groupId", data.groupId);
    formData.append("city", data.city);
    formData.append("country", data.country);
    formData.append("district", data.district);
    formData.append("state", data.state);
    formData.append("address", data.address);
    formData.append("description", data.description);

    return formData;
  };

  const onSubmit = async (data) => {
    if (locationState) {
      //update
      updateEventData(getFormData(data));
    } else {
      //create
      createEventData(getFormData(data));
      // getFormData(DATA, eventImage)
      // getFormData(data);
    }
  };
  return (
    <div className="createFormPage">
      <Toast ref={toast} />

      <Container>
        <div className="createFormPage__header">
          <h5 className="createFormPage__header--title"> {locationState ? "Edit" : "Create"} Jobs</h5>
        </div>
        <Form
          className="createFormPage__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Row>
            <Col lg={6}>
              <InputField {...commonProps} keyId="position" name=" Position" />
            </Col>
            <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="qualification"
                name="Qualification"
              />
            </Col>
          </Row>
          <Row>
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
            <Col lg={6}>
              <InputField {...commonProps} keyId="groupId" name="Group ID" />
            </Col>
          </Row>

          <Row>
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
          </Row>
          <Row>
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

          <br />
          <button
            className="customBtn"
            style={{ color: "black" }}
            type="submit"
          >
            Submit
          </button>
        </Form>
      </Container>
    </div>
  );
};

export default AddMatrimonial;
