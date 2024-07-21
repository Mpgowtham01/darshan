import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Toast } from "primereact/toast";
import { useForm } from "react-hook-form";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import InputField from "../AddTempleList/TempleForm/TempleFormComponents/InputField";
import PrimeDropdown from "../AddTempleList/TempleForm/TempleFormComponents/PrimeDropdown";
// import { Toast } from "primereact/toast";
import {
  getAreaList,
  getCityList,
  getCountryList,
  getDistrictList,
  getStateList,
} from "../AddTempleList/utils";
import Api from "../../../Api";

function Vendordetailsv() {
  const [countries, setCountries] = useState([]);
  const [district, setDistrict] = useState([]);
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [areas, setAreas] = useState([]);
  const [password, setPassword] = useState("");
  const [areasvalue, setAreasValue] = useState([]);
  const { state: locationState } = useLocation();
  // console.log(locationState, "hhhhhhhhhhhhhhh");
  const toast = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    userGetProfile();
    getCountryList(setCountries);

    if (locationState?.temple_country) {
      getStateList(locationState?.temple_country, setStates);
    }

    if (locationState?.temple_state) {
      getDistrictList(locationState?.temple_state, setDistrict);
    }

    if (locationState?.temple_district) {
      getCityList(locationState?.temple_district, setCities);
    }

    if (locationState?.temple_city) {
      getAreaList(locationState?.temple_city, setAreas);
    }
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
    setAreasValue(e);
  };

  const userGetProfile = () => {
    const vendorId = localStorage.getItem("id");
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/vendor/getOne/${vendorId}`)
      .then((resp) => {
        console.log("object$$$$$ :>> ", resp.data[0]?.country_id);
        // api.get(`/vendor/getOne/${id}`).then((resp) => {
        setValue("vendor_name", resp.data[0]?.vendor_name);
        setValue("country_id", resp.data[0]?.country_id);
        setValue("state_id", resp.data[0]?.state_id);
        setValue("district_id", resp.data[0]?.district_id);
        setValue("city_id", resp.data[0]?.city_id);
        setValue("area_id", resp.data[0]?.area_id);
        setValue("address", resp.data[0]?.address);
        setValue("business_name", resp.data[0]?.business_name);
        setValue("phone_number", resp.data[0]?.phone_number);
        setPassword(resp.data[0]?.password);
        console.log("object234 :>> ", resp.data[0]?.country_id);
        if (resp.data[0]?.country_id) {
          getStateList(resp.data[0]?.country_id, setStates);
          getDistrictList(resp.data[0]?.state_id, setDistrict);
          getCityList(resp.data[0]?.district_id, setCities);
          getAreaList(resp.data[0]?.city_id, setAreas);
          setAreasValue(resp.data[0]?.area_id);
        }
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
    const vendorId = localStorage.getItem("id");
    Api.put(`/vendor/update/${vendorId}`, {
      vendor_name: data.vendor_name,
      country_id: data.country_id,
      state_id: data.state_id,
      district_id: data.district_id,
      city_id: data.city_id,
      area_id: data.area_id,
      business_name: data.business_name,
      phone_number: data.phone_number,
      address: data.address,
      Password: password,
    })
      .then((res) => {
        displayToaster();
      })
      .catch((err) => {
        console.log("error", err);
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
              <InputField
                {...commonProps}
                keyId="vendor_name"
                name="VendorName"
                type="name"
              />
            </Col>

            <Col lg={6}>
              {countries && (
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
              )}
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              {states && (
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
              )}
            </Col>
            <Col lg={6}>
              {district && (
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
              )}
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              {cities && (
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
              )}
            </Col>
            <Col lg={6}>
              {areas && (
                <PrimeDropdown
                  controlKey="area_id"
                  name="Area"
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
              <InputField
                {...commonProps}
                keyId="business_name"
                name="BusinessName"
              />
            </Col>
            <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="phone_number"
                name="PhoneNumber"
                isDisable={true}
              />
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="address"
                name="Address"
                // isDisable={true}
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

export default Vendordetailsv;
