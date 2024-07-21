import React, { useCallback, useState, useRef } from "react";
import { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";
import { Toast } from "primereact/toast";
import { Switch } from "antd";
import InputField from "../AddTempleList/TempleForm/TempleFormComponents/InputField";
import PrimeDropdown from "../AddTempleList/TempleForm/TempleFormComponents/PrimeDropdown";
import { Dropdown } from "primereact/dropdown";
import "../../Event/Events.scss";
import {
  getAreaList,
  getCityList,
  getCountryList,
  getDistrictList,
  getStateList,
} from "../../Admin/AddTempleList/utils";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Togglecheckbox } from "../../Admin/Vendor/VendorList/ToggleSwitch";
import { Checkbox } from "antd";
import { InputSwitch } from "primereact/inputswitch";
import { boolean } from "yup";

export default function CommunityForm() {
  const navigate = useNavigate();
  const { state: locationState } = useLocation();
  console.log(
    "🚀 ~ file: CommunityFormFam.js ~ line 30 ~ CommunityForm ~ locationState",
    locationState
  );

  const groupName = sessionStorage.getItem("Group_Name");
  const familyName = sessionStorage.getItem("Family_Name");
  const [checked, setChecked] = useState(0);

  const toast = useRef(null);

  const [countries, setCountries] = useState([]);
  const [district, setDistrict] = useState([]);
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [areas, setAreas] = useState([]);
  const [areaValue, setAreaValue] = useState("");
  const [sex, setSex] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [data, setData] = useState({
    name: "",
    email: "",
    designation: "",
    family_name: "",
    sex: "",
    groupName: groupName,
    Country: null,
    State: null,
    District: null,
    City: null,
    Area: null,
    pin_code: "",
    address: "",
    description: "",
    phone_number: "",
    password: "",
    isActive: 0,
    relationship: "",
  });

  const colors = {
    opacity: 0.7,
    cursor: "not-allowed",
  };

  const [gender] = useState([
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ]);

  const name = [
    { value: "Male", gender: "Male" },
    { value: "Female", gender: "Female" },
  ];

  useEffect(() => {
    getCountryList(setCountries);
    getUserDetails();
  }, []);

  // submit data to backend
  const onSubmit = async (list) => {
    console.log(
      "🚀 ~ file: CommunityFormFam.js ~ line 138 ~ onSubmit ~ data",
      list,
      "post triggered"
    );
    console.log(data, "data");
    const DATA = {
      name: list.name,
      email: list.email,
      designation: list.designation,
      family_name: list.family_name,
      sex: list.sex,
      groupName: data.groupName,
      country: list.Country,
      state: list.State,
      district: list.District,
      city: list.City,
      area: list.Area,
      pin_code: list.pin_code,
      address: list.address,
      description: list.description,
      phone_number: list.phone_number,
      password: data.password,
      isActive: checked,
      relationship: list.relationship,
    };

     await axios
        .put(
          `${process.env.REACT_APP_DEV_BASE_URL}/community/communityAbstract/update/${data.id}`,
          DATA
        )
        .then((res) => {
          navigate(-1);
        })
        .catch((error) => console.log(error));
  };

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValue: data,
  });

  const getUserDetails = async () => {
    const userId = sessionStorage.getItem("id");
    axios
      .get(
        `${process.env.REACT_APP_DEV_BASE_URL}/community//communityAbstract/${userId}`
      )
      .then(async (res) => {
        const data = res.data.result[0];
        setData(data);
        reset(data);
        if (data?.Country) {
          getStateList(data?.Country, setStates);
        }
    
        if (data?.State) {
          getDistrictList(data?.State, setDistrict);
        }
    
        if (data?.District) {
          getCityList(data?.District, setCities);
        }
    
        if (data?.City) {
          getAreaList(data?.City, setAreas);
        }
      });
  };

  const commonProps = {
    errors,
    register,
  };
  const genderOnChangeHandler = (e) => {
    setSex(e.target.value);
  };
  const countryOnChangeHandler = (e) => {
    getStateList(e, setStates);
  };

  const statesOnChangeHandler = (e) => {
    getDistrictList(e, setDistrict);
  };

  const districtOnChangeHandler = (e) => {
    getCityList(e, setCities);
  };

  const cityOnChangeHandler = (e) => {
    getAreaList(e, setAreas);
  };

  const areaOnChangeHandler = (e) => {
    setAreaValue(e);
  };

  return (
    <div className="createFormPage">
      <Toast ref={toast} />

      <Container>
        <div className="createFormPage__header">
          <h5 className="createFormPage__header--title">Profile</h5>
        </div>
        <Form
          className="createFormPage__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Row className="mb-4">
            <Col lg={6}>
              <InputField {...commonProps} keyId="name" name="Name" />
            </Col>

            <Col lg={6}>
              <PrimeDropdown
                controlKey="sex"
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
              <InputField {...commonProps} keyId="email" name="Email" />
            </Col>
            <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="relationship"
                name="Relationship"
                style={{ colors }}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="groupName"
                name="Group Name"
                isDisable={true}
                style={{ colors }}
              />
            </Col>
            <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="family_name"
                name="Family Name"
              />
            </Col>
          </Row>
          <Row>
            {" "}
            <Col lg={6}>
              <InputField
            
                {...commonProps}
                keyId="phone_number"
                name="Phone Number"
                isDisable={true}
                style={{ colors }}
                // disabled={true}
              />
            </Col>
            {/* <Col lg={6}>
              <Form.Group controlId="isActive">
                <Form.Label>Active Status</Form.Label>
                <Switch
                  {...register("isActive", {
                    required: false,
                  })}
                  defaultChecked={
                    locationState ? locationState.isActive : checked
                  }
                  onChange={e => {
                    if (e) {
                      setChecked(1);
                    } else {
                      setChecked(0);
                    }
                  }}
                />
              </Form.Group>
            </Col> */}
          </Row>

          <Row>
            <Col lg={4}>
              <PrimeDropdown
                controlKey="Country"
                name="Country"
                optionLabel="country"
                optionValue="id"
                onChangeHandler={(e) => countryOnChangeHandler(e.target.value)}
                list={countries}
                errors={errors}
                control={control}
              />
            </Col>
            <Col lg={4}>
              <PrimeDropdown
                controlKey="State"
                name="State"
                optionLabel="state"
                optionValue="id"
                onChangeHandler={(e) => statesOnChangeHandler(e.target.value)}
                list={states}
                errors={errors}
                control={control}
              />
            </Col>
            <Col lg={4}>
              <PrimeDropdown
                controlKey="District"
                name="District"
                optionLabel="district"
                optionValue="id"
                onChangeHandler={(e) => districtOnChangeHandler(e.target.value)}
                list={district}
                errors={errors}
                control={control}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <PrimeDropdown
                controlKey="City"
                name="City"
                optionLabel="city"
                optionValue="id"
                onChangeHandler={(e) => cityOnChangeHandler(e.target.value)}
                list={cities}
                errors={errors}
                control={control}
              />
            </Col>
            <Col lg={4}>
              <PrimeDropdown
                controlKey="Area"
                name="Area"
                optionLabel="area_name"
                optionValue="area_id"
                onChangeHandler={(e) => areaOnChangeHandler(e.target.value)}
                list={areas}
                errors={errors}
                control={control}
              />
            </Col>
            <Col lg={4}>
              <InputField {...commonProps} keyId="pin_code" name="PinCode" />
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="address"
                name="Address"
                others={{ as: "textarea", rows: 4 }}
              />
            </Col>
            <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="description"
                name=" Description"
                others={{ as: "textarea", rows: 4 }}
              />
            </Col>
          </Row>
          <Row>
            {" "}
            <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="designation"
                name="Designation"
              />
            </Col>
          </Row>
          <div className="btnContainer ">
            <button
              type="submit"
              className="me-4 customBtn dark-text small"
              variant="primary"
              onClick={handleSubmit(onSubmit)}
            >
              Update
            </button>
          </div>
        </Form>
      </Container>
    </div>
  );
}
