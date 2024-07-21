// import React from 'react'

// export default function CommunityProfile() {
//   return (
//     <div>CommunityProfile</div>
//   )
// }

import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Col,
  FormGroup,
  Form,
  InputGroup,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { Select } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import Api from "../../Api";
import { useDispatch } from "react-redux";
// import { userLoginAction } from "../../Redux/Actions/UserAction";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../../../../App.css"

const StepFirstValidation = Yup.object().shape({
  Name: Yup.string().required("Name is required"),
  selectCountry: Yup.string().required("Country Name is required"),
  selectState: Yup.string().required("State Name is required"),
  selectDistrict: Yup.string().required("District Name is required"),
  selectCity: Yup.string().required("City Name is required"),
});

const StepSecondValidation = Yup.object().shape({
  selectArea: Yup.string().required("Area Name is required"),
  selectPin: Yup.string().required("Pin is required"),
  selectAddress: Yup.string().required("Address is required"),
  selectEmail: Yup.string()
    .email("invalid email address")
    .required("Email is required"),
  selectPhone: Yup.string()
    .min(10, "phonenumber must be 10 digit")
    .max(10, "phonenumber must be 10 digit")
    .required("Phone Number is required"),
});
const StepThirdValidation = Yup.object().shape({
  selectGroupName: Yup.string().required("Group name is required"),
  selectFamilyName: Yup.string().required("Family name is required"),
  selectPassword: Yup.string().required("Password is required"),
});

const CommunityProfile = () => {
  const [Name, setName] = useState("");
  const [selectCountry, setselectCountry] = useState("");
  const [countryList, setcountryList] = useState([]);
  const [selectState, setselectState] = useState("");
  const [stateId, setStateId] = useState("");
  const [stateList, setstateList] = useState([]);

  const [countryId, setCountryId] = useState("");
  const [selectDistrict, setselectDistrict] = useState("");
  const [districtList, setdistrictList] = useState([]);

  const [districtId, setdistrictId] = useState("");
  const [selectCity, setselectCity] = useState("");
  const [CityId, setCityId] = useState("");
  const [cityList, setcityList] = useState([]);
  const [selectArea, setselectArea] = useState("");
  const [areaList, setareaList] = useState([]);
  const [AreaId, setAreaId] = useState("");
  const [selectPin, setselectPin] = useState("");
  const [selectEmail, setselectEmail] = useState("");
  const [selectPhone, setselectPhone] = useState("");
  const [selectPassword, setselectPassword] = useState("");
  const [selectPasswordShown, setselectPasswordShown] = useState(false);
  const [selectAddress, setselectAddress] = useState("");
  const [selectGroupName, setselectGroupName] = useState("");
  const [selectFamilyName, setselectFamilyName] = useState("");
  const [gNdata, setGNdata] = useState([]);
  const [fNdata, setFNdata] = useState([]);
  const [profileDetail, setProfileDetails] = useState([]);
  const ref = useRef();

  //   const [selectedGN, setSelectedGN] = useState("");
  const handlePasswordShown = () => {
    setselectPasswordShown(!selectPasswordShown);
  };

  useEffect(() => {
    getCountry();
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/community/getAllGroupName`)
      .then((response) => {
        setGNdata(response.data.result);
      });
    axios
      .get(
        `${process.env.REACT_APP_DEV_BASE_URL}/community/getCurrentUserFamilyName/${selectGroupName}`
      )
      .then((response) => {
        setFNdata(response.data.result);
      });
    getUserDetails();
  }, [selectGroupName]);

  const getUserDetails = async () => {
    const userId = sessionStorage.getItem("id");
    axios
      .get(
        `${process.env.REACT_APP_DEV_BASE_URL}/community/getoneUser/${userId}`
      )
      .then(async (res) => {
        const data = res.data.result[0];
        setName(data.name);
        setselectEmail(data.email_id);
        setselectPhone(data.phone_number);
        setselectPassword(data.password);
        setselectAddress(data.address);
        setselectGroupName(data.groupName);
        setselectFamilyName(data.familyName);
        setselectPin(data.pincode);
        await setselectCountry(getCountryValue(data.country));
        setCountryId(data.country);
        await setselectState(getstateValue(data.state));
        setStateId(data.state);
        await setselectDistrict(getdistrictValue(data.district));
        setdistrictId(data.district);
        setselectCity(getcityValue(data.city));
        setCityId(data.city);
        setselectArea(getareaValue(data.area));
        setAreaId(data.area);
      });
  };

  const getCountry = async () => {
    await // axios.post(`${process.env.REACT_APP_DEV_BASE_URL}/communityRegister/login`, {

    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/country/getAll`)
      .then((res) => {
        const country = res.data;
        setcountryList(country);
      });
  };

  const getState = async (id) => {
    await axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/state/getState/${id}`)
      .then((res) => {
        const state = res.data;
        setstateList(state);
      });
  };

  const getDistrict = async (id) => {
    await axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/district/getdistrict/${id}`)
      .then((res) => {
        const district = res.data;
        setdistrictList(district);
      });
  };

  const getCity = async (id) => {
    await axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/city/getCity/${id}`)
      .then((res) => {
        const city = res.data;
        setcityList(city);
      });
  };

  const getArea = async (id) => {
    await axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/area/getArea/${id}`)
      .then((res) => {
        const area_name = res.data;
        setareaList(area_name);
      });
  };

  const getCountryValue = (id) => {
     getState(id);
     return id
  };
  const getstateValue=(id) =>{
    getDistrict(id);
   return id;
  }

  const getdistrictValue =(id)=>{
    getCity(id);
    return id;
  }

  const getcityValue =(id)=>{
    getArea(id);
    return id;
  }

  const getareaValue = (id)=>{
return id
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Option } = Select;

  const [show, setShow] = useState(false);

  const submitForm = async () => {
    const data = {
      name: Name,
      phone_number: selectPhone,
      groupName: selectGroupName,
      email_id: selectEmail,
      country: countryId,
      state: stateId,
      district: districtId,
      city: CityId,
      area: AreaId,
      address: selectAddress,
      familyName: selectFamilyName,
      pincode: selectPin,
      password: selectPassword,
      selectGroupName: selectGroupName,
      selectFamilyName: selectFamilyName,
      selectPassword: selectPassword,
    };
    axios
      .post(
        `${process.env.REACT_APP_DEV_BASE_URL}/community/registerCommunityUser`,
        data
      )
      .then((res) => {
        console.log("res11111", res);
      });
  };

  return (
    <div>
      <div className="createFormPage">
        <div className="createFormPage__header">
          <h5 className="createFormPage__header--title">Profile</h5>
        </div>
        <Formik
          initialValues={{
            Name: Name,
            selectGroupName:selectGroupName,
            selectFamilyName:selectFamilyName,
            selectCountry: selectCountry,
            selectState: selectState,
            selectDistrict: selectDistrict,
            selectCity: selectCity,
            selectArea: selectArea,
            selectPin: selectPin,
            selectAddress: selectAddress,
            selectEmail: selectEmail,
            selectPhone: selectPhone,
            selectPassword: selectPassword
          }}
          enableReinitialize
          validationSchema={StepFirstValidation}
          onSubmit={(values) => {
            submitForm();
          }}
        >
          {({
            touched,
            errors,
            values,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <div className="my-3">
              <Form>
                <div className="row">
                  <Col sm={4}>
                    <FormGroup
                      style={{ flexDirection: "column", display: "flex" }}
                      className="my-3 "
                    >
                      <label className="firstInput">
                        Enter Name{" "}
                        <span className="mb-0" style={{ color: "red" }}>
                          *
                        </span>
                      </label>
                      <input
                        name="Name"
                        allowclear="true"
                        className="form-control Input shadow-none"
                        placeholder="Enter Name*"
                        onBlur={handleBlur("Name")}
                        value={Name}
                        onChange={(e) => {
                          setName(e.target.value);
                          setFieldValue("Name", e.target.value);
                        }}
                      />
                      {touched.Name && errors.Name && (
                        <p
                          style={{
                            color: "red",
                            fontSize: 14,
                            padding: 0,
                            margin: 0,
                          }}
                        >
                          {errors.Name}
                        </p>
                      )}
                    </FormGroup>
                  </Col>
                  <Col sm={4}>
                    <FormGroup
                      style={{ flexDirection: "column", display: "flex" }}
                      className="my-3"
                    >
                      <label className="firstInput">
                        Email{" "}
                        <span className="mb-0" style={{ color: "red" }}>
                          *
                        </span>
                      </label>
                      <input
                        name="selectEmail"
                        className="form-control shadow-none"
                        required
                        type="email"
                        placeholder="Enter Email*"
                        onBlur={handleBlur("selectEmail")}
                        value={selectEmail}
                        onChange={(e) => {
                          setselectEmail(e.target.value);
                          setFieldValue("selectEmail", e.target.value);
                        }}
                      ></input>
                      {touched.selectEmail && errors.selectEmail && (
                        <p
                          style={{
                            color: "red",
                            fontSize: 14,
                            padding: 0,
                            margin: 0,
                          }}
                        >
                          {errors.selectEmail}
                        </p>
                      )}
                    </FormGroup>
                  </Col>
                  <Col sm={4}>
                    <FormGroup
                      style={{ flexDirection: "column", display: "flex" }}
                      className="my-3"
                    >
                      <label className="firstInput">
                        Phone{" "}
                        <span className="mb-0" style={{ color: "red" }}>
                          *
                        </span>
                      </label>
                      <input
                        className="form-control shadow-none"
                        name="selectPhone"
                        placeholder="Enter the PhoneNumber*"
                        type="number"
                        onBlur={handleBlur("selectPhone")}
                        value={selectPhone}
                        disabled={true}
                        onChange={(e) => {
                          setselectPhone(e.target.value);
                          setFieldValue("selectPhone", e.target.value);
                        }}
                      ></input>
                      {touched.selectPhone && errors.selectPhone && (
                        <p
                          style={{
                            color: "red",
                            fontSize: 14,
                            padding: 0,
                            margin: 0,
                          }}
                        >
                          {errors.selectPhone}
                        </p>
                      )}
                    </FormGroup>
                  </Col>
                </div>
                <div className="row">
                  <Col sm={4}>
                    <FormGroup
                      style={{ flexDirection: "column", display: "flex" }}
                      className="my-3"
                    >
                      <label className="firstInput">
                        Group Name{" "}
                        <span className="mb-0" style={{ color: "red" }}>
                          *
                        </span>
                      </label>
                      <input
                            name="selectGroupName"
                            allowclear="true"
                            className="form-control Input shadow-none"
                            placeholder="Enter Name*"
                            disabled
                            onBlur={handleBlur("selectGroupName")}
                            value={values.selectGroupName}
                            onChange={(e) => {
                              setselectGroupName(e.target.value);
                              setFieldValue("selectGroupName", e.target.value);
                            }}
                          />

                      {touched.selectGroupName && errors.selectGroupName && (
                        <p
                          style={{
                            color: "red",
                            fontSize: 14,
                            padding: 0,
                            margin: 0,
                          }}
                        >
                          {errors.selectGroupName}
                        </p>
                      )}
                    </FormGroup>
                  </Col>
                  <Col sm={4}>
                    <FormGroup
                      style={{ flexDirection: "column", display: "flex" }}
                      className="my-3"
                    >
                      <label className="firstInput">
                        Family Name{" "}
                        <span className="mb-0" style={{ color: "red" }}>
                          *
                        </span>
                      </label>
                      <input
                            name="selectFamilyName"
                            allowclear="true"
                            className="form-control Input shadow-none"
                            placeholder="Enter family name*"
                            onBlur={handleBlur("selectFamilyName")}
                            value={values.selectFamilyName}
                            onChange={(e) => {
                              setselectFamilyName(e.target.value);
                              setFieldValue("selectFamilyName", e.target.value);
                            }}
                          />
                      {/* <Select showSearch
                        className="profile shadow-none"
                        name="selectFamilyName"
                        required
                        placeholder="Select Family Name*"
                        allowclear="true"
                        value={selectFamilyName || undefined}
                        onBlur={handleBlur("selectFamilyName")}
                        onChange={(e) => {
                          setselectFamilyName(e);
                        }}
                      >
                        {fNdata?.map((list, i) => {
                          // console.log(list)
                          return (
                            <Option value={list.family_name} key={i}>
                              {list.family_name}
                            </Option>
                          );
                        })}
                      </Select> */}

                      {touched.selectFamilyName && errors.selectFamilyName && (
                        <p
                          style={{
                            color: "red",
                            fontSize: 14,
                            padding: 0,
                            margin: 0,
                          }}
                        >
                          {errors.selectFamilyName}
                        </p>
                      )}
                    </FormGroup>
                  </Col>
                  <Col sm={4}>
                    <FormGroup
                      style={{ flexDirection: "column", display: "flex" }}
                      className="my-3"
                    >
                      <label className="firstInput">
                        Select Country{" "}
                        <span className="mb-0" style={{ color: "red" }}>
                          *
                        </span>
                      </label>
                      <Select showSearch
                        className="profile shadow-none"
                        name="selectCountry"
                        required
                        placeholder="Select Country Name*"
                        allowclear="true"
                        onBlur={handleBlur("selectCountry")}
                        value={selectCountry || undefined}
                        onChange={(e) => {
                          const valueId = countryList?.find(
                            (list) => list.country === e
                          );
                          console.log("e :>> ", e);
                          setselectCountry(e);
                          setCountryId(valueId.id);
                          setFieldValue("selectCountry", e);
                          getState(valueId.id);
                        }}
                      >
                        {countryList?.map((list, i) => {
                          // console.log(list)
                          return (
                            <Option value={list?.id} key={i}>
                              {list?.country}
                            </Option>
                          );
                        })}
                      </Select>
                      {touched.selectCountry && errors.selectCountry && (
                        <p
                          style={{
                            color: "red",
                            fontSize: 14,
                            padding: 0,
                            margin: 0,
                          }}
                        >
                          {errors.selectCountry}
                        </p>
                      )}
                    </FormGroup>
                  </Col>
                </div>
                <div className="row">
                  <Col sm={4}>
                    <FormGroup
                      style={{ flexDirection: "column", display: "flex" }}
                      className="my-3"
                    >
                      <label className="firstInput">
                        Select State{" "}
                        <span className="mb-0" style={{ color: "red" }}>
                          *
                        </span>
                      </label>
                      <Select showSearch
                      className="profile"
                        name="selectState"
                        placeholder="Select State Name"
                        allowclear="true"
                        onBlur={handleBlur("selectState")}
                        value={selectState || undefined}
                        onChange={(e) => {
                          console.log(e);
                          const valueId = stateList?.find(
                            (list) => list.state === e
                          );
                          setselectState(e);
                          setStateId(valueId.id);
                          getDistrict(valueId.id);
                          setFieldValue("selectState", e);
                        }}
                      >
                        {stateList?.map((list, i) => (
                          <Option value={list?.id} key={i}>
                            {list?.state}
                          </Option>
                        ))}
                      </Select>
                      {touched.selectState && errors.selectState && (
                        <p
                          style={{
                            color: "red",
                            fontSize: 14,
                            padding: 0,
                            margin: 0,
                          }}
                        >
                          {errors.selectState}
                        </p>
                      )}
                    </FormGroup>
                  </Col>
                  <Col sm={4}>
                    <FormGroup
                      style={{ flexDirection: "column", display: "flex" }}
                      className="my-3"
                    >
                      <label className="firstInput">
                        Select District{" "}
                        <span className="mb-0" style={{ color: "red" }}>
                          *
                        </span>
                      </label>
                      <Select showSearch
                        name="selectDistrict"
                        placeholder="Select District Name*"
                        allowclear="true"
                        className="profile district shadow-none"
                        onBlur={handleBlur("selectDistrict")}
                        value={selectDistrict || undefined}
                        onChange={(e) => {
                          console.log(e);
                          const valueId = districtList?.find(
                            (list) => list.district === e
                          );
                          setselectDistrict(e);
                          setdistrictId(valueId.id);
                          getCity(valueId.id);
                          setFieldValue("selectDistrict", e);
                        }}
                      >
                        {districtList?.map((list, i) => (
                          <Option value={list?.id} key={i}>
                            {" "}
                            {list?.district}
                          </Option>
                        ))}
                      </Select>
                      {touched.selectDistrict && errors.selectDistrict && (
                        <p
                          style={{
                            color: "red",
                            fontSize: 14,
                            padding: 0,
                            margin: 0,
                          }}
                        >
                          {errors.selectDistrict}
                        </p>
                      )}
                    </FormGroup>
                  </Col>
                  <Col sm={4}>
                    <FormGroup
                      style={{ flexDirection: "column", display: "flex" }}
                      className="my-3"
                    >
                      <label className="firstInput">
                        Select City{" "}
                        <span className="mb-0" style={{ color: "red" }}>
                          *
                        </span>
                      </label>
                      <Select showSearch
                        name="selectCity"
                        placeholder="Select City Name*"
                        allowclear="true"
                        className="profile"
                        onBlur={handleBlur("selectCity")}
                        value={selectCity || undefined}
                        onChange={(e) => {
                          console.log("wef", e);
                          setFieldValue("selectCity", e);
                          const valueId = cityList?.find(
                            (list) => list.city === e
                          );
                          setselectCity(e);
                          getArea(valueId.id);
                          setCityId(valueId.id);
                        }}
                      >
                        {cityList?.map((list, i) => (
                          <Option value={list.id} key={i}>
                            {list?.city}
                          </Option>
                        ))}
                      </Select>
                      {touched.selectCity && errors.selectCity && (
                        <p
                          style={{
                            color: "red",
                            fontSize: 14,
                            padding: 0,
                            margin: 0,
                          }}
                        >
                          {errors.selectCity}
                        </p>
                      )}
                    </FormGroup>
                  </Col>
                </div>
                <div className="row">
                  <Col sm={4}>
                    <FormGroup
                      style={{ flexDirection: "column", display: "flex" }}
                      className="my-3 "
                    >
                      <label className="firstInput">
                        Area{" "}
                        <span className="mb-0" style={{ color: "red" }}>
                          *
                        </span>
                      </label>
                      <Select showSearch
                        name="selectArea"
                        className="profile"
                        placeholder="Select Area Name*"
                        allowclear="true"
                        onBlur={handleBlur("selectArea")}
                        value={selectArea || undefined}
                        onChange={(e) => {
                          // console.log("wef",e)
                          setFieldValue("selectArea", e);
                          const valueId = areaList?.find(
                            (list) => list.area_name === e
                          );

                          console.log(valueId.area_id);
                          setselectArea(e);
                          setAreaId(valueId.area_id);
                        }}
                      >
                        {areaList?.map((list, i) => (
                          <Option value={list.area_id} key={i}>
                            {list?.area_name}
                          </Option>
                        ))}
                      </Select>
                      {touched.selectArea && errors.selectArea && (
                        <p
                          style={{
                            color: "red",
                            fontSize: 14,
                            padding: 0,
                            margin: 0,
                          }}
                        >
                          {errors.selectArea}
                        </p>
                      )}
                    </FormGroup>
                  </Col>
                  <Col sm={4}>
                    <FormGroup
                      style={{ flexDirection: "column", display: "flex" }}
                      className="my-3"
                    >
                      <label className="firstInput">
                        PinCode{" "}
                        <span className="mb-0" style={{ color: "red" }}>
                          *
                        </span>
                      </label>
                      <input
                        name="selectPin"
                        className="form-control Userpincode shadow-none"
                        required
                        type="number"
                        placeholder="Enter Pincode*"
                        onBlur={handleBlur("selectPin")}
                        value={selectPin}
                        onChange={(e) => {
                          setselectPin(e.target.value);
                          setFieldValue("selectPin", e.target.value);
                        }}
                      ></input>
                      {touched.selectPin && errors.selectPin && (
                        <p
                          style={{
                            color: "red",
                            fontSize: 14,
                            padding: 0,
                            margin: 0,
                          }}
                        >
                          {errors.selectPin}
                        </p>
                      )}
                    </FormGroup>
                  </Col>
                  <Col sm={4}>
                    <FormGroup
                      style={{ flexDirection: "column", display: "flex" }}
                      className="my-3"
                    >
                      <label className="firstInput">
                        Password{" "}
                        <span className="mb-0" style={{ color: "red" }}>
                          *
                        </span>
                      </label>
                      <InputGroup>
                        <input
                          name="selectPassword"
                          className="form-control shadow-none"
                          type={selectPasswordShown ? "text" : "password"}
                          placeholder="Enter Password*"
                          onBlur={handleBlur("selectPassword")}
                          value={values.selectPassword}
                          onChange={(e) => {
                            setselectPassword(e.target.value);
                            setFieldValue("selectPassword", e.target.value);
                          }}
                          onCopy={(e) => {
                            e.preventDefault();
                          }}
                          onPaste={(e) => {
                            e.preventDefault();
                          }}
                        />
                        <InputGroup.Text>
                          <FontAwesomeIcon
                            icon={selectPasswordShown ? faEye : faEyeSlash}
                            onClick={() => handlePasswordShown()}
                            size="1x"
                            style={{ cursor: "pointer" }}
                          />
                        </InputGroup.Text>
                      </InputGroup>
                      {touched.selectPassword && errors.selectPassword && (
                        <p
                          style={{
                            color: "red",
                            fontSize: 14,
                            padding: 0,
                            margin: 0,
                          }}
                        >
                          {errors.selectPassword}
                        </p>
                      )}
                    </FormGroup>
                  </Col>
                </div>
                <div className="row">
                  <Col sm={4}>
                    <FormGroup
                      style={{ flexDirection: "column", display: "flex" }}
                      className="my-3 "
                    >
                      <label className="firstInput">
                        Enter Address{" "}
                        <span className="mb-0" style={{ color: "red" }}>
                          *
                        </span>
                      </label>
                      <textarea
                        name="selectAddress"
                        allowclear="true"
                        className="form-control Input shadow-none"
                        placeholder="Enter Address*"
                        onBlur={handleBlur("selectAddress")}
                        value={selectAddress}
                        onChange={(e) => {
                          setselectAddress(e.target.value);
                          setFieldValue("selectAddress", e.target.value);
                        }}
                      />
                      {touched.selectAddress && errors.selectAddress && (
                        <p
                          style={{
                            color: "red",
                            fontSize: 14,
                            padding: 0,
                            margin: 0,
                          }}
                        >
                          {errors.selectAddress}
                        </p>
                      )}
                    </FormGroup>
                  </Col>
                </div>
                <div className="submitButton d-flex justify-content-end mt-2 ">
                  <Button
                    className="signin-button shadow-none"
                    variant="primary"
                    onClick={handleSubmit}
                    style={{ width: "30%" }}
                  >
                    Update
                  </Button>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default CommunityProfile;
