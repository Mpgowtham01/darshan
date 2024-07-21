import React, { useState, useEffect, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { getCountryList, getStateList, getDistrictList, getCityList, getAreaList } from '../Admin/AddTempleList/utils'; // Adjust the import path as necessary

// PrimeReact components
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { Messages } from "primereact/messages";
import { Button } from "primereact/button";
import { Fieldset } from "primereact/fieldset";
import { Password } from "primereact/password";
const TrainerProfile = () => {
  const messages = useRef(null);
  const navigate = useNavigate();
  const id = localStorage.getItem("id");

  const [trainerData, setTrainerData] = useState({
    trainerName: "",
    countryName: "",
    stateName: "",
    districtName: "",
    cityName: "",
    areaName: "",
    pincode: "",
    address: "",
    email: "",
    phone: "",
    aboutMe: "",
    selectPassword: "",
  });

  const [countryList, setCountryList] = useState([]);
  console.log('countryList', countryList)
  const [stateList, setStateList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [areaList, setAreaList] = useState([]);

  useEffect(() => {
    if (id) {
      fetchTrainerData();
    } else {
      console.error("No trainer ID found");
    }
    getCountryList();
  }, [id]);

  const getCountryList = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_DEV_BASE_URL}/country/getAll`
      );
      console.log('response', response)
      setCountryList(
        response.data.map((country) => ({
          label: country.country,
          value: country.id,
        }))
      );
    } catch (error) {
      console.error("Error fetching country list:", error);
    }
  };

  const getStateList = async (countryId) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_DEV_BASE_URL}/state/getState/${countryId}`
      );
      console.log('state response', response)
      setStateList(
        response.data.map((state) => ({ label: state.state, value: state.id }))
      );
    } catch (error) {
      console.error("Error fetching state list:", error);
    }
  };

  const getDistrictList = async (stateId) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_DEV_BASE_URL}/district/getdistrict/${stateId}`
      );
      console.log('district response:', response)
      setDistrictList(
        response.data.map((district) => ({
          label: district.district,
          value: district.id,
        }))
      );
    } catch (error) {
      console.error("Error fetching district list:", error);
    }
  };

  const getCityList = async (districtId) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_DEV_BASE_URL}/city/getCity/${districtId}`
      );
      setCityList(
        response.data.map((city) => ({ label: city.city, value: city.id }))
      );
    } catch (error) {
      console.error("Error fetching city list:", error);
    }
  };

  const getAreaList = async (cityId) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_DEV_BASE_URL}/area/getArea/${cityId}`
      );
      console.log("area:",response)
      setAreaList(
        response.data.map((area) => ({ label: area.area_name, value: area.area_id }))
      );
    } catch (error) {
      console.error("Error fetching area list:", error);
    }
  };

  const fetchTrainerData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_DEV_BASE_URL}/trainer/getSingleTrainer/${id}`
      );
      console.log("trainer data:",response)
      const trainerDetails = response.data[0];
      setTrainerData(trainerDetails);
      fetchDependentLists(trainerDetails);
      console.log("trainer details:", trainerDetails);
    } catch (error) {
      console.error("Error fetching trainer data:", error);
    }
  };

  const fetchDependentLists = async (trainerData) => {
    try {
      if (trainerData.countryName) {
        await getStateList(trainerData.countryName);
      }
      if (trainerData.stateName) {
        await getDistrictList(trainerData.stateName);
      }
      if (trainerData.districtName) {
        await getCityList(trainerData.districtName);
      }
      if (trainerData.cityName) {
        await getAreaList(trainerData.cityName);
      }
    } catch (error) {
      console.error("Error fetching dependent lists:", error);
    }
  };

  const handleDelete = async () => {
    try {
    } catch (error) {
      console.error("Error deleting trainer profile:", error);
    }
  };

  const handleSubmit = async (values) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_DEV_BASE_URL}/trainer/updateTrainer/${id}`,
        values
      );
      console.log("Update response:", response.data);
    } catch (error) {
      console.error("Error updating trainer profile:", error);
    }
  };
console.log(trainerData.countryName)
console.log(trainerData.stateId)
  return (
    <div className="container mt-4">
      <h2>Trainer Profile</h2>
      <Formik
        enableReinitialize
        initialValues={{
          Name: trainerData.trainerName,
          selectCountry: trainerData.countryId,
          selectState: trainerData.stateId,
          selectDistrict: trainerData.districtId,
          selectCity: trainerData.cityId,
          selectArea: trainerData.areaName,
          selectPin: trainerData.pincode,
          selectAddress: trainerData.address,
          selectEmail: trainerData.email,
          selectPhone: trainerData.phone,
          aboutMe: trainerData.aboutMe,
          selectPassword: "",
        }}
        validationSchema={Yup.object().shape({})}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <Fieldset legend="Trainer Profile">
              <Row>
                <Col lg={4}>
                  <div className="p-field">
                    <label htmlFor="formName">Name</label>
                    <InputText
                      id="formName"
                      name="Name"
                      value={values.Name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      readOnly={!id}
                    />
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="p-field">
                    <label htmlFor="formCountry">Country</label>
                    <Dropdown
                      id="formCountry"
                      name="selectCountry"
                      value={values.selectCountry}
                      options={countryList}
                      onChange={(e) => {
                        const countryId = e.value;
                        setFieldValue("selectCountry", countryId);
                        setFieldValue("selectState", "");
                        setFieldValue("selectDistrict", "");
                        setFieldValue("selectCity", "");
                        setFieldValue("selectArea", "");
                        getStateList(countryId);
                      }}
                      onBlur={handleBlur}
                      placeholder="Select Country"
                      optionLabel="label"
                      optionValue="value"
                      disabled={!id}
                    />
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="p-field">
                    <label htmlFor="formState">State</label>
                    <Dropdown
                      id="formState"
                      name="selectState"
                      value={values.selectState}
                      options={stateList}
                      onChange={(e) => {
                        const stateId = e.value;
                        setFieldValue("selectState", stateId);
                        setFieldValue("selectDistrict", "");
                        setFieldValue("selectCity", "");
                        setFieldValue("selectArea", "");
                        getDistrictList(stateId);
                      }}
                      onBlur={handleBlur}
                      placeholder="Select State"
                      optionLabel="label"
                      optionValue="value"
                      disabled={!id}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <div className="p-field">
                    <label htmlFor="formDistrict">District</label>
                    <Dropdown
                      id="formDistrict"
                      name="selectDistrict"
                      value={values.selectDistrict}
                      options={districtList}
                      onChange={(e) => {
                        const districtId = e.value;
                        setFieldValue("selectDistrict", districtId);
                        setFieldValue("selectCity", "");
                        setFieldValue("selectArea", "");
                        getCityList(districtId);
                      }}
                      onBlur={handleBlur}
                      placeholder="Select District"
                      optionLabel="label"
                      optionValue="value"
                      disabled={!id}
                    />
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="p-field">
                    <label htmlFor="formCity">City</label>
                    <Dropdown
                      id="formCity"
                      name="selectCity"
                      value={values.selectCity}
                      options={cityList}
                      onChange={(e) => {
                        const cityId = e.value;
                        setFieldValue("selectCity", cityId);
                        setFieldValue("selectArea", "");
                        getAreaList(cityId);
                      }}
                      onBlur={handleBlur}
                      placeholder="Select City"
                      optionLabel="label"
                      optionValue="value"
                      disabled={!id}
                    />
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="p-field">
                    <label htmlFor="formArea">Area</label>
                    <Dropdown
                      id="formArea"
                      name="selectArea"
                      value={values.selectArea}
                      options={areaList}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Select Area"
                      optionLabel="label"
                      optionValue="value"
                      disabled={!id}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <div className="p-field">
                    <label htmlFor="formPin">Pincode</label>
                    <InputText
                      id="formPin"
                      name="selectPin"
                      value={values.selectPin}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      readOnly={!id}
                    />
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="p-field">
                    <label htmlFor="formAddress">Address</label>
                    <InputText
                      id="formAddress"
                      name="selectAddress"
                      value={values.selectAddress}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      readOnly={!id}
                    />
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="p-field">
                    <label htmlFor="formEmail">Email</label>
                    <InputText
                      id="formEmail"
                      name="selectEmail"
                      value={values.selectEmail}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      readOnly={!id}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <div className="p-field">
                    <label htmlFor="formPhone">Phone</label>
                    <InputText
                      id="formPhone"
                      name="selectPhone"
                      value={values.selectPhone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      readOnly={!id}
                    />
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="p-field">
                    <label htmlFor="formAboutMe">About Me</label>
                    <InputTextarea
                      id="formAboutMe"
                      name="aboutMe"
                      value={values.aboutMe}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={3}
                      readOnly={!id}
                    />
                  </div>
                </Col>
                <Col lg={4}>
                  {/* <div className="p-field">
                <label htmlFor="formPassword">Password</label>
                <Password
                  id="formPassword"
                  name="selectPassword"
                  value={values.selectPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  feedback={false}
                />
              </div> */}
                </Col>
              </Row>
              <div className="p-field">
                <Button
                  type="submit"
                  label="Update Profile"
                  className="p-button-primary"
                  disabled={isSubmitting}
                />
                <Button
                  type="button"
                  label="Delete Profile"
                  className="p-button-danger"
                  onClick={handleDelete}
                />
              </div>
            </Fieldset>
          </form>
        )}
      </Formik>
      <Messages ref={messages} />
    </div>
  );
};

export default TrainerProfile;
