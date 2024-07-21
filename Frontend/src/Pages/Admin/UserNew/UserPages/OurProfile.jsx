import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Toast } from "primereact/toast";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
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
  const [countries, setCountries] = useState([]);
  const [district, setDistrict] = useState([]);
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [areas, setAreas] = useState([]);
  const [password, setPassword] = useState("");
  const [areasvalue, setAreasValue] = useState([]);
  const { state: locationState } = useLocation();
  const toast = useRef(null);

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

  const userGetProfile = async (id) => {
    const userId = localStorage.getItem("id");
    axios
      .get(
        `${process.env.REACT_APP_DEV_BASE_URL}/userRegister/getOne/${userId}`
      )
      .then((resp) => {
        setValue("UserName", resp.data[0]?.UserName);
        setValue("Country", resp.data[0]?.CountryId);
        setValue("State", resp.data[0]?.StateId);
        setValue("District", resp.data[0]?.DistrictId);
        setValue("City", resp.data[0]?.CityId);
        setValue("Area", resp.data[0]?.AreaId);
        setValue("Pincode", resp.data[0]?.Pincode);
        setValue("EmailId", resp.data[0]?.EmailId);
        setValue("Phone", resp.data[0]?.Phone);
        setPassword(resp.data[0]?.password);
        if (resp.data[0]?.CountryId) {
          getStateList(resp.data[0]?.CountryId, setStates);
          getDistrictList(resp.data[0]?.StateId, setDistrict);
          getCityList(resp.data[0]?.DistrictId, setCities);
          getAreaList(resp.data[0]?.CityId, setAreas);
          setAreasValue(resp.data[0]?.CityId);
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
    const userId = localStorage.getItem("id");
    Api.put(`/userRegister/update/${userId}`, {
      UserName: data.UserName,
      CountryId: data.Country,
      StateId: data.State,
      DistrictId: data.District,
      CityId: data.City,
      AreaId: data.Area,
      Pincode: data.Pincode,
      EmailId: data.EmailId,
      Phone: data.Phone,
      Password: password,
    })
      .then((res) => {
        displayToaster();
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
              <InputField {...commonProps} keyId="UserName" name="UserName" />
            </Col>

            <Col lg={6}>
              {countries && (
                <PrimeDropdown
                  controlKey="Country"
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
                  controlKey="State"
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
                  controlKey="District"
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
                  controlKey="City"
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
                  controlKey="Area"
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
              <InputField {...commonProps} keyId="Pincode" name="Pincode" />
            </Col>
            <Col lg={6}>
              <InputField {...commonProps} keyId="EmailId" name="EmailId" />
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="Phone"
                name="PhoneNumber"
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

export default OurProfile;
