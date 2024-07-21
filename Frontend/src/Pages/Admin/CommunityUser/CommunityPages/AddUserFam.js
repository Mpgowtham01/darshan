import React, { useCallback, useState, useRef } from "react";
import { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";
import { Toast } from "primereact/toast";
import { Switch } from "antd";
import InputField from "../../AddTempleList/TempleForm/TempleFormComponents/InputField";
import PrimeDropdown from "../../AddTempleList/TempleForm/TempleFormComponents/PrimeDropdown";
// import ".././../Event/Events.scss";
import { Dropdown } from "primereact/dropdown";
import "../../../Event/Events.scss";
import {
  getAreaList,
  getCityList,
  getCountryList,
  getDistrictList,
  getStateList,
} from "../../../Admin/AddTempleList/utils";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Togglecheckbox } from "../../../Admin/Vendor/VendorList/ToggleSwitch";
import { Checkbox } from "antd";
import { InputSwitch } from "primereact/inputswitch";
import { boolean } from "yup";

export default function AddUser() {
  const navigate = useNavigate();
  const { state: locationState } = useLocation();

  const { id } = useParams();
  const [checked, setChecked] = useState(0);

  const toast = useRef(null);

  const [countries, setCountries] = useState([]);

  const [district, setDistrict] = useState([]);
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [areas, setAreas] = useState([]);

  const [areaValue, setAreaValue] = useState("");
  const [sex, setSex] = useState([]);
  const [relationship, setRelationship] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);

  const groupName = sessionStorage.getItem("Group_Name");
  const family_name = sessionStorage.getItem("Family_Name");

  const colors = {
    opacity: 0.7,
    cursor: "not-allowed",
  };

  const [gender] = useState([
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ]);
  const [relationshipType] = useState([
    { value: "Son", label: "Son" },
    { value: "Daughter", label: "Daughter" },
    { value: "Father", label: "Father" },
    { value: "Mother", label: "Mother" },
    { value: "Spouse", label: "Spouse" },
    { value: "Grandfather", label: "Grandfather" },
    { value: "GrandMother", label: "GrandMother" },
    { value: "Granddaughter", label: "Granddaughter" },
    { value: "Daughterinlaw", label: "Daughter in law" },
    { value: "Soninlaw", label: "Son in law" },
    { value: "Motherinlaw", label: "Mother in law" },
    { value: "Fatherinlaw", label: "Father in law" },
  ]);

  const name = [
    { value: "Male", gender: "Male" },
    { value: "Female", gender: "Female" },
  ];

  let defaultValues = {};

  if (locationState) {
    const {
      name,
      // nick_name,
      family_name,
      designation,
      sex,
      groupName,
      Country,
      District,
      State,
      City,
      Area,
      pin_code,
      address,
      description,
      relationship,
      isActive,
      password,
      phone_number,
    } = locationState;
    // Default Values when editing

    defaultValues = {
      name: name,
      // nick_name: nick_name,
      designation: designation,
      family_name: family_name,
      sex: sex,
      groupName: groupName,
      country: Country,
      state: State,
      district: District,
      city: City,
      area: Area,
      pincode: pin_code,
      address: address,
      description: description,
      relationship: relationship,
      isActive: checked,
      password: password,
      phone_number: phone_number,
    };
  }

  useEffect(() => {
    getCountryList(setCountries);

    if (locationState?.Country) {
      getStateList(locationState?.Country, setStates);
    }

    if (locationState?.State) {
      getDistrictList(locationState?.State, setDistrict);
    }

    if (locationState?.District) {
      getCityList(locationState?.District, setCities);
    }

    if (locationState?.City) {
      getAreaList(locationState?.City, setAreas);
    }
  }, []);

  // submit data to backend
  const onSubmit = async data => {
    const DATA = {
      name: data.name,
      designation: data.designation,
      family_name: data.family_name,
      sex: data.sex,
      groupName: data.groupName,
      country: data.country,
      state: data.state,
      district: data.district,
      city: data.city,
      area: data.area,
      email: "",
      pin_code: data.pincode,
      address: data.address,
      description: data.description,
      phone_number: data.phone_number,
      password: data.password,
      isActive: checked,
      relationship: data.relationship,
    };

    if (locationState) {
      axios
        .put(
          `${process.env.REACT_APP_DEV_BASE_URL}/community/communityAbstract/update/${locationState.id}`,
          DATA
        )
        .then(res => {
          navigate(-1);
        })
        .catch(error => console.log(error));
    } else {
      await axios
        .post(
          `${process.env.REACT_APP_DEV_BASE_URL}/community/communityAbstract/addmember`,
          DATA
        )
        .then(res => {
          navigate(-1);
        })
        .catch(error => console.log(error));
    }
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: locationState
      ? defaultValues
      : {
          name: "",
          // nick_name: "",
          designation: "",
          family_name: family_name,
          sex: "",
          groupName: groupName,
          country: null,
          state: null,
          district: null,
          city: null,
          area: null,
          pincode: "",
          address: "",
          description: "",
          phone_number: "",
          password: "",
          isActive: 0,
          relationship: "",
        },
  });

  const commonProps = {
    errors,
    register,
  };
  const genderOnChangeHandler = e => {
    setSex(e.target.value);
  };
  const relationshipOnChangeHandler = e => {
    setRelationship(e.target.value);
  };
  const countryOnChangeHandler = e => {
    getStateList(e, setStates);
  };

  const statesOnChangeHandler = e => {
    getDistrictList(e, setDistrict);
  };

  const districtOnChangeHandler = e => {
    getCityList(e, setCities);
  };

  const cityOnChangeHandler = e => {
    getAreaList(e, setAreas);
  };

  const areaOnChangeHandler = e => {
    setAreaValue(e);
  };

  return (
    <div className="createFormPage">
      <Toast ref={toast} />

      <Container>
        <div className="createFormPage__header">
          <h5 className="createFormPage__header--title">Add family member</h5>
        </div>
        <Form
          className="createFormPage__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Row className="mb-4">
            <Col lg={6}>
              <InputField {...commonProps} keyId="name" name="Name" />
            </Col>

            {/* <Col lg={6}>
              <InputField {...commonProps} keyId="nick_name" name="Nick Name" />
            </Col> */}
            <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="designation"
                name="Designation"
              />
            </Col>
          </Row>
          <Row>
            {/* <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="designation"
                name="Designation"
              />
            </Col> */}
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
                isDisable={true}
                name="Family Name"
              />
            </Col>
          </Row>
          <Row>
            {/* <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="family_name"
                isDisable={true}
                name="Family Name"
              />
            </Col> */}
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
            <Col lg={6}>
              {/* <InputField
                {...commonProps}
                keyId="relationship"
                name="Relationship"
                style={{ colors }}
              /> */}
              <PrimeDropdown
                controlKey="relationship"
                name="Relationship"
                optionLabel="label"
                optionValue="value"
                onChangeHandler={relationshipOnChangeHandler}
                list={relationshipType}
                errors={errors}
                control={control}
              />
            </Col>
          </Row>
          <Row>
            {" "}
            {/* <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="password"
                name="Password"
                style={{ colors }}
              />
            </Col> */}
            <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="password"
                name="Password"
                style={{ colors }}
              />
            </Col>
            <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="phone_number"
                name="Phone Number"
                style={{ colors }}
              />
            </Col>
          </Row>
          {/* <Row> */}{" "}
          {/* <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="family_list"
                name="Family List"
                style={{ colors }}
              />
            </Col> */}
          {/* <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="phone_number"
                name="Phone Number"
                style={{ colors }}
              />
            </Col>
            <Col lg={6}>
              <Form.Group controlId="isActive">
                <Form.Label>Active Status</Form.Label>
                <Switch
                  {...register("isActive", {
                    required: false,
                  })}
                  defaultChecked={
                    locationState ? locationState.isActive : checked
                  }
                  onChange={(e) => {
                    if (e) {
                      setChecked(1);
                    } else {
                      setChecked(0);
                    }
                  }}
                />
              </Form.Group>
            </Col>
          </Row> */}
          <Row>
            <Col lg={4}>
              <PrimeDropdown
                controlKey="country"
                name="Country"
                optionLabel="country"
                optionValue="id"
                onChangeHandler={e => {
                  countryOnChangeHandler(e.target.value);
                }}
                list={countries}
                errors={errors}
                control={control}
              />
            </Col>
            <Col lg={4}>
              <PrimeDropdown
                controlKey="state"
                name="State"
                optionLabel="state"
                optionValue="id"
                onChangeHandler={e => statesOnChangeHandler(e.target.value)}
                list={states}
                errors={errors}
                control={control}
              />
            </Col>
            <Col lg={4}>
              <PrimeDropdown
                controlKey="district"
                name="District"
                optionLabel="district"
                optionValue="id"
                onChangeHandler={e => districtOnChangeHandler(e.target.value)}
                list={district}
                errors={errors}
                control={control}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <PrimeDropdown
                controlKey="city"
                name="City"
                optionLabel="city"
                optionValue="id"
                onChangeHandler={e => cityOnChangeHandler(e.target.value)}
                list={cities}
                errors={errors}
                control={control}
              />
            </Col>
            <Col lg={4}>
              <PrimeDropdown
                controlKey="area"
                name="Area"
                optionLabel="area_name"
                optionValue="area_id"
                onChangeHandler={e => areaOnChangeHandler(e.target.value)}
                list={areas}
                errors={errors}
                control={control}
              />
            </Col>
            <Col lg={4}>
              <InputField {...commonProps} keyId="pincode" name="PinCode" />
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
          <hr />
          <div className="btnContainer ">
            <button
              type="submit"
              className="me-4 customBtn dark-text small"
              variant="primary"
              onClick={handleSubmit(onSubmit)}
            >
              Submit
            </button>
            <button
              type="button"
              className="customBtn small bg"
              variant="outline-danger"
              onClick={() => {
                navigate(-1);
              }}
            >
              Cancel
            </button>
          </div>
        </Form>
      </Container>
    </div>
  );
}
