import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Select } from "antd";
import axios from "axios";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Form,
  FormGroup,
  InputGroup,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

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
  selectPassword: Yup.string().required("Password is required"),
});

const StepThirdValidation = Yup.object().shape({
  kuladeivamName: Yup.string().required("Name is required"),
  selectkuladeivamCountry: Yup.string().required("Country Name is required"),
  selectkuladeivamState: Yup.string().required("State Name is required"),
  selectkuladeivamDistrict: Yup.string().required("District Name is required"),
  selectkuladeivamCity: Yup.string().required("City is required"),
  kuladeivamAddress: Yup.string().required("Area is required"),
  selectGroupName: Yup.string().required("Group Name is required"),
});

const CommunitySignUp = () => {
  const [step, setstep] = useState("first");
  const [Name, setName] = useState("");
  console.log("Name :>> ", Name);
  const [selectCountry, setselectCountry] = useState("");
  console.log("selectCountry :>> ", selectCountry);
  const [countryList, setcountryList] = useState([]);
  const [countryId, setCountryId] = useState("");
  const [selectState, setselectState] = useState("");
  const [stateId, setStateId] = useState("");
  const [stateList, setstateList] = useState([]);
  const [selectDistrict, setselectDistrict] = useState("");
  const [districtList, setdistrictList] = useState([]);

  const [districtId, setdistrictId] = useState("");
  const [selectCity, setselectCity] = useState("");
  // const [cityId, setcountryId] = useState("");
  const [CityId, setCityId] = useState("");
  const [cityList, setcityList] = useState([]);
  const [selectArea, setselectArea] = useState("");
  const [areaList, setareaList] = useState("");
  const [AreaId, setAreaId] = useState("");
  const [selectPin, setselectPin] = useState("");
  const [selectEmail, setselectEmail] = useState("");
  const [selectPhone, setselectPhone] = useState("");
  const [selectPassword, setselectPassword] = useState("");
  const [selectPasswordShown, setselectPasswordShown] = useState(false);
  const [selectAddress, setselectAddress] = useState("");
  const [kuladeivamName, setkuladeivamName] = useState("");
  const [selectkuladeivamCountry, setselectkuladeivamCountry] = useState("");
  const [selectkuladeivamState, setselectkuladeivamState] = useState("");
  const [selectkuladeivamDistrict, setselectkuladeivamDistrict] = useState("");
  const [selectkuladeivamCity, setselectkuladeivamCity] = useState("");
  const [kuladeivamcountryId, setkuladeivamCountryId] = useState("");
  const [kuladeivamstateId, setkuladeivamStateId] = useState("");
  const [kuladeivamdistrictId, setkuladeivamdistrictId] = useState("");
  const [kuladeivamCityId, setkuladeivamCityId] = useState("");
  // const [kuladeivamAreaId, setkuladeivamAreaId] = useState("");
  const [kuladeivamAddress, setkuladeivamAddress] = useState("");
  console.log("kuladeivamAddress :>> ", kuladeivamAddress);
  const [selectGroupName, setselectGroupName] = useState("");
  console.log("selectGroupName :>> ", selectGroupName);

  const handlePasswordShown = () => {
    setselectPasswordShown(!selectPasswordShown);
  };

  useEffect(() => {
    getCountry();
  }, []);

  // const handleSubmit = async () => {
  //   await Api.post ("/user_register/create").then((res) => {

  //   })

  // }
  const getCountry = async () => {
    await // axios.post(`${process.env.REACT_APP_DEV_BASE_URL}/communityRegister/login`, {

    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/country/getAll`)
      .then((res) => {
        const country = res.data;
        console.log("res :>> ", res);
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
        console.log(res);
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
      kuladevam: kuladeivamName,
      kuladevam_country: kuladeivamcountryId,
      kuladevam_state: kuladeivamstateId,
      kuladevam_district: kuladeivamdistrictId,
      kuladevam_city: kuladeivamCityId,
      kuladevam_address: kuladeivamAddress,
      pincode: selectPin,
      password: selectPassword,
    };
    axios
      .post(
        `${process.env.REACT_APP_DEV_BASE_URL}/community/registerCommunityAdmin`,
        data
      )
      .then((res) => {});
  };

  return (
    <div>
      <ToastContainer position="top-end">
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto text-success">Success</strong>
          </Toast.Header>
          <Toast.Body>Registration completed successfully</Toast.Body>
        </Toast>
      </ToastContainer>
      {step === "first" ? (
        <div>
          <Formik
            initialValues={{
              Name: Name,
              selectCountry: selectCountry,
              selectState: selectState,
              selectDistrict: selectDistrict,
              selectCity: selectCity,
            }}
            enableReinitialize
            validationSchema={StepFirstValidation}
            onSubmit={(values) => {
              setstep("second");
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
                <Col>
                  <Form>
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
                      <Select
                        showSearch
                        className=" shadow-none"
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
                          setselectCountry(e);
                          setCountryId(valueId.id);
                          setFieldValue("selectCountry", e);
                          getState(valueId.id);
                        }}
                      >
                        {countryList?.map((list, i) => {
                          return (
                            <Option value={list?.country} key={i}>
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
                      <Select
                        showSearch
                        name="selectState"
                        placeholder="Select State Name"
                        allowclear="true"
                        onBlur={handleBlur("selectState")}
                        value={selectState || undefined}
                        onChange={(e) => {
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
                          <Option value={list?.state} key={i}>
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
                      <Select
                        showSearch
                        name="selectDistrict"
                        placeholder="Select District Name*"
                        allowclear="true"
                        className="district shadow-none"
                        onBlur={handleBlur("selectDistrict")}
                        value={selectDistrict || undefined}
                        onChange={(e) => {
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
                          <Option value={list?.district} key={i}>
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
                      <Select
                        showSearch
                        name="selectCity"
                        placeholder="Select City Name*"
                        allowclear="true"
                        onBlur={handleBlur("selectCity")}
                        value={selectCity || undefined}
                        onChange={(e) => {
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
                          <Option value={list.city} key={i}>
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
                    <div className="d-flex justify-content-end mt-3">
                      <Button
                        className="signin-button shadow-none"
                        variant="primary"
                        onClick={handleSubmit}
                        style={{ width: "35%" }}
                      >
                        Next
                      </Button>
                    </div>
                  </Form>
                </Col>
              </div>
            )}
          </Formik>
        </div>
      ) : step === "second" ? (
        <div>
          <Formik
            initialValues={{
              selectArea: selectArea,
              selectPin: selectPin,
              selectAddress: selectAddress,
              selectEmail: selectEmail,
              selectPhone: selectPhone,
              selectPassword: selectPassword,
            }}
            enableReinitialize
            validationSchema={StepSecondValidation}
            onSubmit={(values) => {
              setstep("third");
              // submitForm();
              // setShow(true);
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
                    <Select
                      showSearch
                      name="selectArea"
                      placeholder="Select Area Name*"
                      allowclear="true"
                      onBlur={handleBlur("selectArea")}
                      value={selectArea || undefined}
                      onChange={(e) => {
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
                        <Option value={list.area_name} key={i}>
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
                  <div className="submitButton mt-4">
                    <Button
                      className="signin-button shadow-none"
                      variant="primary"
                      onClick={() => setstep("first")}
                      style={{ width: "35%" }}
                    >
                      Back
                    </Button>
                    <Button
                      className="signin-button shadow-none"
                      variant="primary"
                      onClick={handleSubmit}
                      style={{ width: "35%" }}
                    >
                      Next
                    </Button>
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      ) : (
        <div>
          <Formik
            initialValues={{
              kuladeivamName: kuladeivamName,
              selectkuladeivamCountry: selectkuladeivamCountry,
              selectkuladeivamState: selectkuladeivamState,
              selectkuladeivamDistrict: selectkuladeivamDistrict,
              selectkuladeivamCity: selectkuladeivamCity,
              kuladeivamAddress: kuladeivamAddress,
              selectGroupName: selectGroupName,
            }}
            enableReinitialize
            validationSchema={StepThirdValidation}
            onSubmit={(values) => {
              submitForm();
              setShow(true);
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
                  <FormGroup
                    style={{ flexDirection: "column", display: "flex" }}
                    className="my-3"
                  >
                    <label className="firstInput">
                      Kuladeivam Name{" "}
                      <span className="mb-0" style={{ color: "red" }}>
                        *
                      </span>
                    </label>
                    <input
                      name="kuladeivamName"
                      className="form-control shadow-none"
                      required
                      type="text"
                      placeholder="Enter name*"
                      onBlur={handleBlur("kuladeivamName")}
                      value={kuladeivamName}
                      onChange={(e) => {
                        setkuladeivamName(e.target.value);
                        setFieldValue("kuladeivamName", e.target.value);
                      }}
                    ></input>
                    {touched.kuladeivamName && errors.kuladeivamName && (
                      <p
                        style={{
                          color: "red",
                          fontSize: 14,
                          padding: 0,
                          margin: 0,
                        }}
                      >
                        {errors.kuladeivamName}
                      </p>
                    )}
                  </FormGroup>
                  <FormGroup
                    style={{ flexDirection: "column", display: "flex" }}
                    className="my-3"
                  >
                    <label className="firstInput">
                      Select Kuladievam Country{" "}
                      <span className="mb-0" style={{ color: "red" }}>
                        *
                      </span>
                    </label>
                    <Select
                      showSearch
                      className=" shadow-none"
                      name="selectkuladeivamCountry"
                      required
                      placeholder="Select Country Name*"
                      allowclear="true"
                      onBlur={handleBlur("selectkuladeivamCountry")}
                      value={selectkuladeivamCountry || undefined}
                      onChange={(e) => {
                        const valueId = countryList?.find(
                          (list) => list.country === e
                        );
                        setselectkuladeivamCountry(e);
                        setkuladeivamCountryId(valueId.id);
                        setFieldValue("selectkuladeivamCountry", e);
                        getState(valueId.id);
                      }}
                    >
                      {countryList?.map((list, i) => {
                        return (
                          <Option value={list?.country} key={i}>
                            {list?.country}
                          </Option>
                        );
                      })}
                    </Select>
                    {touched.selectkuladeivamCountry &&
                      errors.selectkuladeivamCountry && (
                        <p
                          style={{
                            color: "red",
                            fontSize: 14,
                            padding: 0,
                            margin: 0,
                          }}
                        >
                          {errors.selectkuladeivamCountry}
                        </p>
                      )}
                  </FormGroup>
                  <FormGroup
                    style={{ flexDirection: "column", display: "flex" }}
                    className="my-3"
                  >
                    <label className="firstInput">
                      Select Kuladeivam State{" "}
                      <span className="mb-0" style={{ color: "red" }}>
                        *
                      </span>
                    </label>
                    <Select
                      showSearch
                      name="selectkuladeivamState"
                      placeholder="Select State Name"
                      allowclear="true"
                      onBlur={handleBlur("selectkuladeivamState")}
                      value={selectkuladeivamState || undefined}
                      onChange={(e) => {
                        const valueId = stateList?.find(
                          (list) => list.state === e
                        );
                        setselectkuladeivamState(e);
                        setkuladeivamStateId(valueId.id);
                        getDistrict(valueId.id);
                        setFieldValue("selectkuladeivamState", e);
                      }}
                    >
                      {stateList?.map((list, i) => (
                        <Option value={list?.state} key={i}>
                          {list?.state}
                        </Option>
                      ))}
                    </Select>
                    {touched.selectkuladeivamState &&
                      errors.selectkuladeivamState && (
                        <p
                          style={{
                            color: "red",
                            fontSize: 14,
                            padding: 0,
                            margin: 0,
                          }}
                        >
                          {errors.selectkuladeivamState}
                        </p>
                      )}
                  </FormGroup>

                  <FormGroup
                    style={{ flexDirection: "column", display: "flex" }}
                    className="my-3"
                  >
                    <label className="firstInput">
                      Select Kuladeivam District{" "}
                      <span className="mb-0" style={{ color: "red" }}>
                        *
                      </span>
                    </label>
                    <Select
                      showSearch
                      name="selectkuladeivamDistrict"
                      placeholder="Select District Name*"
                      allowclear="true"
                      className="district shadow-none"
                      onBlur={handleBlur("selectkuladeivamDistrict")}
                      value={selectkuladeivamDistrict || undefined}
                      onChange={(e) => {
                        const valueId = districtList?.find(
                          (list) => list.district === e
                        );
                        setselectkuladeivamDistrict(e);
                        setkuladeivamdistrictId(valueId.id);
                        getCity(valueId.id);
                        setFieldValue("selectkuladeivamDistrict", e);
                      }}
                    >
                      {districtList?.map((list, i) => (
                        <Option value={list?.district} key={i}>
                          {" "}
                          {list?.district}
                        </Option>
                      ))}
                    </Select>
                    {touched.selectkuladeivamDistrict &&
                      errors.selectkuladeivamDistrict && (
                        <p
                          style={{
                            color: "red",
                            fontSize: 14,
                            padding: 0,
                            margin: 0,
                          }}
                        >
                          {errors.selectkuladeivamDistrict}
                        </p>
                      )}
                  </FormGroup>

                  <FormGroup
                    style={{ flexDirection: "column", display: "flex" }}
                    className="my-3"
                  >
                    <label className="firstInput">
                      Select Kuladeivam City{" "}
                      <span className="mb-0" style={{ color: "red" }}>
                        *
                      </span>
                    </label>
                    <Select
                      showSearch
                      name="selectkuladeivamCity"
                      placeholder="Select City Name*"
                      allowclear="true"
                      onBlur={handleBlur("selectkuladeivamCity")}
                      value={selectkuladeivamCity || undefined}
                      onChange={(e) => {
                        setFieldValue("selectkuladeivamCity", e);
                        const valueId = cityList?.find(
                          (list) => list.city === e
                        );
                        setselectkuladeivamCity(e);
                        getArea(valueId.id);
                        setkuladeivamCityId(valueId.id);
                      }}
                    >
                      {cityList?.map((list, i) => (
                        <Option value={list.city} key={i}>
                          {list?.city}
                        </Option>
                      ))}
                    </Select>
                    {touched.selectkuladievamCity &&
                      errors.selectkuladeivamCity && (
                        <p
                          style={{
                            color: "red",
                            fontSize: 14,
                            padding: 0,
                            margin: 0,
                          }}
                        >
                          {errors.selectkuladeivamCity}
                        </p>
                      )}
                  </FormGroup>
                  <FormGroup
                    style={{ flexDirection: "column", display: "flex" }}
                    className="my-3 "
                  >
                    <label className="firstInput">
                      Enter kuladeivamAddress{" "}
                      <span className="mb-0" style={{ color: "red" }}>
                        *
                      </span>
                    </label>
                    <textarea
                      name="selectAddress"
                      allowclear="true"
                      className="form-control Input shadow-none"
                      placeholder="Enter kuladeivamAddress*"
                      onBlur={handleBlur("kuladeivamAddress")}
                      value={kuladeivamAddress}
                      onChange={(e) => {
                        setkuladeivamAddress(e.target.value);
                        setFieldValue("kuladeivamAddress", e.target.value);
                      }}
                    />
                    {touched.kuladeivamAddress && errors.kuladeivamAddress && (
                      <p
                        style={{
                          color: "red",
                          fontSize: 14,
                          padding: 0,
                          margin: 0,
                        }}
                      >
                        {errors.kuladeivamAddress}
                      </p>
                    )}
                  </FormGroup>

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
                      className="form-control shadow-none"
                      required
                      type="text"
                      placeholder="Enter group name*"
                      onBlur={handleBlur("selectGroupName")}
                      value={selectGroupName}
                      onChange={(e) => {
                        setselectGroupName(e.target.value);
                        setFieldValue("selectGroupName", e.target.value);
                      }}
                    ></input>
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
                  <div className="submitButton mt-4">
                    <Button
                      className="signin-button shadow-none"
                      variant="primary"
                      onClick={() => setstep("second")}
                      style={{ width: "35%" }}
                    >
                      Back
                    </Button>
                    <Button
                      className="signin-button shadow-none"
                      variant="primary"
                      onClick={handleSubmit}
                      style={{ width: "35%" }}
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      )}
    </div>
  );
};
export default CommunitySignUp;
