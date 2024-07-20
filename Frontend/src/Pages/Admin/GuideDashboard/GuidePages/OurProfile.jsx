import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Toast } from "primereact/toast";
import { useForm } from "react-hook-form";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import InputField from "../../AddTempleList/TempleForm/TempleFormComponents/InputField";
import PrimeDropdown from "../../AddTempleList/TempleForm/TempleFormComponents/PrimeDropdown";
// import { Toast } from "primereact/toast";
import {
  getAreaList,
  getCityList,
  getCountryList,
  getDistrictList,
  getStateList,
} from "../../AddTempleList/utils";
import Api from "../../../../Api";

function OurProfile() {
  const navigate =useNavigate()
  const id = localStorage.getItem("guide_id");
  const [countries, setCountries] = useState([]);

  const [district, setDistrict] = useState([]);
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  console.log('states', states)
  const [areas, setAreas] = useState([]);
  const [password, setPassword] = useState("");
  const [areasvalue, setAreasValue] = useState([]);
  const { state: locationState } = useLocation();

  const toast = useRef(null);

  useEffect(() => {
    userGetProfile();
    getCountryList(setCountries);

    // if (locationState?.temple_country) {
    //   getStateList(locationState?.temple_country, setStates);
    // }

    // if (locationState?.temple_state) {
    //   getDistrictList(locationState?.temple_state, setDistrict);
    // }

    // if (locationState?.temple_district) {
    //   getCityList(locationState?.temple_district, setCities);
    // }

    // if (locationState?.temple_city) {
    //   getAreaList(locationState?.temple_city, setAreas);
    // }
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

  const areaOnChangeHandler = (e) => {
    console.log('first', e)
    setAreasValue(e);
  };

  const userGetProfile = async () => {
    
    axios
      .get(
        `${process.env.REACT_APP_DEV_BASE_URL}/guideregister/getOne/${id}`
      )
      .then((resp) => {
        console.log('firstresp', resp)
        if (resp.data[0]?.countryId) {  
          getStateList(resp.data[0]?.countryId, setStates);
          getDistrictList(resp.data[0]?.stateId, setDistrict);
          getCityList(resp.data[0]?.districtId, setCities);
          getAreaList(resp.data[0]?.cityId, setAreas);
          setAreasValue(resp.data[0]?.cityId);
        }
        console.table(resp.data[0],'xxxxxxxxxxxxxxxxxxxxxxxx');
        setValue("guideName", resp.data[0]?.guideName);
        setValue("countryId", resp.data[0]?.countryId);
        setValue("stateId", resp.data[0]?.stateId);
        setValue("districtId", resp.data[0]?.districtId);
        setValue("cityId", resp.data[0]?.cityId); 
        setValue("areaId", resp.data[0]?.areaId);
        setValue("pincode", resp.data[0]?.pincode); 
        setValue("emailId", resp.data[0]?.EmailId);
        setValue("aboutme", resp.data[0]?.aboutme);
        setValue("language_knows", resp.data[0]?.language_knows);
        setValue("phone", resp.data[0]?.phone);  
        setPassword(resp.data[0]?.password);  
       
      });
  };
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  const commonProps = {
    errors,
    register,
  };

  const displayToaster = () => {
    toast.current.show({
      severity: "success",
      summary: "Done",
      detail: `Profile details updated successfully`,
      life: 3000,
    });
    
  };

  const onSubmit = async (data) => {
    // const userId = localStorage.getItem("id");
   console.log('datadata', data)
    Api.put(`/guideregister/update/${id}`, {
      guideName: data.guideName,
      countryId: data.countryId,
      stateId: data.stateId,
      districtId: data.districtId,
      cityId: data.cityId,
      areaId: data.areaId,
      pincode: data.pincode,
      emailId: data.emailId,
      phone: data.phone,
      aboutme:data.aboutme,
      language_knows:data.language_knows,
      Password: password,
    })
      .then((res) => {
        displayToaster();
        // Navigate(-1)
      })
      .catch((err) => {
        toast.current.show({
          severity: "error",
          summary: "Error",
          detail: "Something went wrong,please try again!!!",
          life: 3000,
        });
      });
  };
  return (
    <div className="createFormPage">
      <Container>
      <Toast ref={toast} />

        <div className="createFormPage__header">
          <h5 className="createFormPage__header--title">Our Profile</h5>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col mg={6}>
              <InputField {...commonProps} keyId="guideName" name="GuideName" />
            </Col>

            <Col lg={6}>
              {countries && (
                <PrimeDropdown
                  controlKey="countryId"
                  name="countryId"
                  optionLabel="country"
                  optionValue="id"
                  onChangeHandler={countryOnChangeHandler}
                  list={countries}
                  errors={errors}
                  control={control}
                  />
           
              )}
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              {states && (
                <PrimeDropdown
                  controlKey="stateId"
                  name="stateId"
                  optionLabel="state"
                  optionValue="id"
                  onChangeHandler={statesOnChangeHandler}
                  list={states}
                  errors={errors}
                  control={control}
                />
              )}
            </Col>
            <Col lg={6}>
              {district && (
                <PrimeDropdown
                  controlKey="districtId"
                  name="districtId"
                  optionLabel="district"
                  optionValue="id"
                  onChangeHandler={districtOnChangeHandler}
                  list={district}
                  errors={errors}
                  control={control}
                />
              )}
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              {cities && (
                <PrimeDropdown
                  controlKey="cityId"
                  name="cityId"
                  optionLabel="city"
                  optionValue="id"
                  onChangeHandler={cityOnChangeHandler}
                  list={cities}
                  errors={errors}
                  control={control}
                />
              )}
            </Col>
            <Col lg={6}>
              {areas && (
                <PrimeDropdown
                  controlKey="areaId"
                  name="areaId"
                  optionLabel="area_name"
                  optionValue="area_id"
                  onChangeHandler={areaOnChangeHandler}
                  list={areas}
                  errors={errors}
                  control={control}
                />
              )}
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <InputField {...commonProps} keyId="pincode" name="Pincode" />
            </Col>
            <Col lg={6}>
              <InputField {...commonProps} keyId="emailId" name="EmailId" />
            </Col>
            <Col lg={6}>
              <InputField {...commonProps} keyId="aboutme" name="About Me" />
            </Col>
            <Col lg={6}>
              <InputField {...commonProps} keyId="language_knows" name="Language Knows" />
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="phone"
                name="PhoneNumber"
                isDisable={true}
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
}

export default OurProfile;
