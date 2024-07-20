import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  FormGroup,
  Form,
  InputGroup,
  Toast,
  ToastContainer,
  Container,
  Row,
} from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { Layout, Select } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import Api from "../../Api";
import { useDispatch } from "react-redux";
import { setAuthenticated } from "../../../components/Redux_Toolkit/authSlice";
// import { userLoginAction } from "../../Redux/Actions/UserAction";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
import axios from "axios";
import UserLayout from "../../Admin/Communitywebpage/Components/Layout";
import "../../../components/Css/sass/Login.scss";

const StepFirstValidation = Yup.object().shape({
  Name: Yup.string().required("Name is required"),
  selectGroupName: Yup.string().required("Group name is required"),
  selectFamilyName: Yup.string().required("Family name is required"),
  selectEmail: Yup.string()
    .email("invalid email address")
    .required("Email is required"),
  selectPhone: Yup.string()
    .min(10, "phonenumber must be 10 digit")
    .max(10, "phonenumber must be 10 digit")
    .required("Phone Number is required"),
  sex: Yup.string().required("sex is required"),
  relationship: Yup.string().required("relationship is required"),
});

const StepSecondValidation = Yup.object().shape({
  selectCountry: Yup.string().required("Country Name is required"),
  selectState: Yup.string().required("State Name is required"),
  selectDistrict: Yup.string().required("District Name is required"),
  selectCity: Yup.string().required("City Name is required"),
  selectArea: Yup.string().required("Area Name is required"),
  selectPin: Yup.string().required("Pin is required"),
});
const StepThirdValidation = Yup.object().shape({
  selectAddress: Yup.string().required("Address is required"),
  selectPassword: Yup.string()
  .min(6, "Password must be 6 characters")
  .required("Password is required"),
  designation: Yup.string().required("designation is required"),
  description: Yup.string().required("description is required"),
});

export default function MemberSignup(props) {
  const params = useParams();
  const { groupName, id, state } = params;
  const [role, setrole] = useState("Header");

  const onChange = e => {
    setrole(e.target.value);
  };
  const [step, setstep] = useState("first");
  const [Name, setName] = useState("");
  const [nickName, setNickName] = useState("");
  const [selectCountry, setselectCountry] = useState("");
  const [countryList, setcountryList] = useState([]);
  const [selectState, setselectState] = useState("");
  const [stateId, setStateId] = useState("");
  const [stateList, setstateList] = useState([]);
  const [sex, setsex] = useState("");
  const [relationship, setrelationship] = useState("");
  const [description, setDecription] = useState("");
  const [designation, setDesignation] = useState("");
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
  const [selectGroupName, setselectGroupName] = useState(groupName);
  const [selectFamilyName, setselectFamilyName] = useState("");

  const [gNdata, setGNdata] = useState([]);
  const [fNdata, setFNdata] = useState([]);
  console.log("🚀 ~ file: MemberSignup.js:98 ~ fNdata", fNdata);
  //   const [selectedGN, setSelectedGN] = useState("");
  const [registerResponse, setRegisterResponse] = useState({
    status: null,
    message: null,
  });
  console.log(
    "🚀 ~ file: HeaderSignup.js:101 ~ registerResponse",
    registerResponse
  );

  const [gender] = useState([
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ]);
  const [familyName] = [
    fNdata?.map(ele => {
      // console.log(ele.family_name);
      return { value: ele.family_name, label: ele.family_name };
    }),
  ];

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
  // const [dropdownFamName, setDropdownFamName] = useState([]);
  const handlePasswordShown = () => {
    setselectPasswordShown(!selectPasswordShown);
  };

  useEffect(() => {
    getCountry();
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/community/getAllGroupName`)
      .then(response => {
        console.log(response.data.result, "responseof groupName");
        setGNdata(response.data.result);
      });
    axios
      .get(
        `${process.env.REACT_APP_DEV_BASE_URL}/community/getCurrentUserFamilyName/${selectGroupName}`
      )
      .then(response => {
        console.log(response.data.result, "responseof groupName");
        setFNdata(response.data.result);
      });
  }, [selectGroupName]);

  const getCountry = async () => {
    await // axios.post(`${process.env.REACT_APP_DEV_BASE_URL}/communityRegister/login`, {

    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/country/getAll`)
      .then(res => {
        const country = res.data;
        setcountryList(country);
      });
  };

  const getState = async id => {
    await axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/state/getState/${id}`)
      .then(res => {
        const state = res.data;
        setstateList(state);
      });
  };

  const getDistrict = async id => {
    await axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/district/getdistrict/${id}`)
      .then(res => {
        const district = res.data;
        setdistrictList(district);
      });
  };
  const getCity = async id => {
    await axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/city/getCity/${id}`)
      .then(res => {
        const city = res.data;
        console.log(res);
        setcityList(city);
      });
  };
  const getArea = async id => {
    await axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/area/getArea/${id}`)
      .then(res => {
        const area_name = res.data;
        console.log("area_name :>> ", area_name);
        setareaList(area_name);
      });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Option } = Select;

  const [show, setShow] = useState(false);

  const submitForm = async () => {
    const data = {
      name: Name,
      designation: designation,
      description: description,
      sex: sex,
      relationship: relationship,
      phone_number: selectPhone,
      groupName: selectGroupName,
      email: selectEmail,
      country: countryId,
      state: stateId,
      district: districtId,
      city: CityId,
      area: AreaId,
      address: selectAddress,
      family_name: selectFamilyName,
      pin_code: selectPin,
      password: selectPassword,
    };
    axios
      .post(
        `${process.env.REACT_APP_DEV_BASE_URL}/community/communityAbstract/addmember`,
        data
      )
      .then(res => {
        console.log("res", res);
        setShow(true);
        dispatch(setAuthenticated(res.data?.data?.isAuthenticated));
        navigate(`/CommunityTemple/${groupName}/signin`);
        sessionStorage.setItem("id", res.data?.data?.id);
        sessionStorage.setItem(
          "USER_AUTH_STATE",
          res.data?.data?.isAuthenticated
        );
        sessionStorage.setItem("Group_Name", groupName);
        sessionStorage.setItem("Family_Name", selectFamilyName);
        setRegisterResponse({
          status: res.data?.status,
          message: res.data?.message,
        });
      })
      .catch(err =>
        setRegisterResponse({
          status: err.response.data?.status,
          message: err.response.data?.message,
        })
      );
  };
  return (
    <div>
      <div>
        <ToastContainer position="top-end">
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
            className="mt-5"
          >
            <Toast.Header className={`me-auto`}>
              <strong
                className={`me-auto text-${
                  registerResponse?.status === "Success" ? "success" : "danger"
                }`}
              >
                {registerResponse?.status}
              </strong>
            </Toast.Header>
            <Toast.Body>{registerResponse?.message} </Toast.Body>
            <div className="d-flex justify-content-center mb-2 w-100">
              <Button onClick={() => navigate(-1)}>OK</Button>
            </div>
          </Toast>
        </ToastContainer>
        {step === "first" ? (
          <div>
            <Formik
              initialValues={{
                Name: Name,
                selectGroupName: groupName,
                selectFamilyName: selectFamilyName,
                selectEmail: selectEmail,
                selectPhone: selectPhone,
                sex: sex,
                relationship: relationship,
              }}
              enableReinitialize
              validationSchema={StepFirstValidation}
              onSubmit={values => {
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
                  <Form>
                    <Row>
                      <Col>
                        <FormGroup
                          style={{ flexDirection: "column", display: "flex" }}
                          className="mt-3"
                        >
                          <label className="firstInput">
                            Enter Name
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
                            onChange={e => {
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
                      <Col>
                        <FormGroup
                          style={{
                            flexDirection: "column",
                            display: "flex",
                          }}
                          className="mt-3 "
                        >
                          <label className="firstInput">
                            Gender{" "}
                            <span className="mb-0" style={{ color: "red" }}>
                              *
                            </span>
                          </label>
                          <Select
                            className=" shadow-none"
                            name="sex"
                            required
                            showSearch
                            placeholder="Select gender*"
                            allowclear="true"
                            onBlur={handleBlur("sex")}
                            value={sex || undefined}
                            onChange={e => {
                              setsex(e);
                              setFieldValue("sex", e);
                            }}
                          >
                            {gender?.map((list, i) => {
                              return (
                                <Option value={list?.value} key={i}>
                                  {list?.value}
                                </Option>
                              );
                            })}
                          </Select>
                          {touched.sex && errors.sex && (
                            <p
                              style={{
                                color: "red",
                                fontSize: 14,
                                padding: 0,
                                margin: 0,
                              }}
                            >
                              {errors.sex}
                            </p>
                          )}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        {/* <FormGroup
                          style={{ flexDirection: "column", display: "flex" }}
                          className="mt-3"
                        >
                          <label className="firstInput">
                            Enter Relationship{" "}
                            <span className="mb-0" style={{ color: "red" }}>
                              *
                            </span>
                          </label>
                          <input
                            name="relationship"
                            allowclear="true"
                            className="form-control Input shadow-none"
                            placeholder="Enter relationship*"
                            onBlur={handleBlur("relationship")}
                            value={relationship}
                            onChange={e => {
                              setrelationship(e.target.value);
                              setFieldValue("relationship", e.target.value);
                            }}
                          />
                          {touched.relationship && errors.relationship && (
                            <p
                              style={{
                                color: "red",
                                fontSize: 14,
                                padding: 0,
                                margin: 0,
                              }}
                            >
                              {errors.relationship}
                            </p>
                          )}
                        </FormGroup> */}
                        <FormGroup
                          style={{
                            flexDirection: "column",
                            display: "flex",
                          }}
                          className="mt-3 "
                        >
                          <label className="firstInput">
                            Relationship{" "}
                            <span className="mb-0" style={{ color: "red" }}>
                              *
                            </span>
                          </label>
                          <Select
                            className=" shadow-none"
                            name="relationship"
                            required
                            showSearch
                            placeholder="Select relationship*"
                            allowclear="true"
                            onBlur={handleBlur("relationship")}
                            value={relationship || undefined}
                            onChange={e => {
                              setrelationship(e);
                              setFieldValue("relationship", e);
                            }}
                          >
                            {relationshipType?.map((list, i) => {
                              return (
                                <Option value={list?.value} key={i}>
                                  {list?.value}
                                </Option>
                              );
                            })}
                          </Select>
                          {touched.relationship && errors.relationship && (
                            <p
                              style={{
                                color: "red",
                                fontSize: 14,
                                padding: 0,
                                margin: 0,
                              }}
                            >
                              {errors.relationship}
                            </p>
                          )}
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup
                          style={{ flexDirection: "column", display: "flex" }}
                          className="mt-3"
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
                            onChange={e => {
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
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup
                          style={{ flexDirection: "column", display: "flex" }}
                          className="mt-3"
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
                            onChange={e => {
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
                      <Col>
                        {/* <FormGroup
                          style={{ flexDirection: "column", display: "flex" }}
                          className="mt-3"
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
                            onChange={e => {
                              setselectFamilyName(e.target.value);
                              setFieldValue("selectFamilyName", e.target.value);
                            }}
                          />
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
                        </FormGroup> */}
                        <FormGroup
                          style={{
                            flexDirection: "column",
                            display: "flex",
                          }}
                          className="mt-3 "
                        >
                          <label className="firstInput">
                            Family Name{" "}
                            <span className="mb-0" style={{ color: "red" }}>
                              *
                            </span>
                          </label>
                          <Select
                            className=" shadow-none"
                            name="selectFamilyName"
                            required
                            showSearch
                            placeholder="Select family name*"
                            allowclear="true"
                            onBlur={handleBlur("selectFamilyName")}
                            value={selectFamilyName || undefined}
                            onChange={e => {
                              setselectFamilyName(e);
                              setFieldValue("selectFamilyName", e);
                            }}
                          >
                            {familyName?.map(list => {
                              return (
                                <Option value={list?.value} key={list.label}>
                                  {list?.value}
                                </Option>
                              );
                            })}
                          </Select>
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
                    </Row>

                    <div className="row">
                      <Col>
                        <FormGroup
                          style={{
                            flexDirection: "column",
                            display: "flex",
                          }}
                          className="mt-3"
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
                            onChange={e => {
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
                </div>
              )}
            </Formik>
          </div>
        ) : step === "second" ? (
          <div>
            <Formik
              initialValues={{
                selectCountry: selectCountry,
                selectState: selectState,
                selectDistrict: selectDistrict,
                selectCity: selectCity,
                selectArea: selectArea,
                selectPin: selectPin,
              }}
              enableReinitialize
              validationSchema={StepSecondValidation}
              onSubmit={values => {
                setstep("third");
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
                <div className="mt-3">
                  <Col>
                    <Form>
                      <Row>
                        <Col>
                          <FormGroup
                            style={{ flexDirection: "column", display: "flex" }}
                            className="mt-3"
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
                              onChange={e => {
                                const valueId = countryList?.find(
                                  list => list.country === e
                                );
                                setselectCountry(e);
                                setCountryId(valueId.id);
                                setFieldValue("selectCountry", e);
                                getState(valueId.id);
                              }}
                            >
                              {countryList?.map((list, i) => {
                                // console.log(list)
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
                        </Col>
                        <Col>
                          <FormGroup
                            style={{ flexDirection: "column", display: "flex" }}
                            className="mt-3"
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
                              onChange={e => {
                                console.log(e);
                                const valueId = stateList?.find(
                                  list => list.state === e
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
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormGroup
                            style={{ flexDirection: "column", display: "flex" }}
                            className="mt-3"
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
                              onChange={e => {
                                console.log(e);
                                const valueId = districtList?.find(
                                  list => list.district === e
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
                        </Col>
                        <Col>
                          <FormGroup
                            style={{ flexDirection: "column", display: "flex" }}
                            className="mt-3"
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
                              onChange={e => {
                                console.log("wef", e);
                                setFieldValue("selectCity", e);
                                const valueId = cityList?.find(
                                  list => list.city === e
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
                        </Col>
                      </Row>
                      <Row>
                        <Col>
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
                              onChange={e => {
                                setFieldValue("selectArea", e);
                                const valueId = areaList?.find(
                                  list => list.area_name === e
                                );
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
                        </Col>
                        <Col>
                          <FormGroup
                            style={{ flexDirection: "column", display: "flex" }}
                            className="mt-3"
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
                              onChange={e => {
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
                      </Row>

                      <div className="submitButton my-4">
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
                  </Col>
                </div>
              )}
            </Formik>
          </div>
        ) : (
          <Formik
            initialValues={{
              selectAddress: selectAddress,
              designation: designation,
              description: description,
              selectPassword: selectPassword,
            }}
            enableReinitialize
            validationSchema={StepThirdValidation}
            onSubmit={values => {
              //   setstep("third");
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
              <div className="mt-3">
                <Form>
                  <Row>
                    <Col xs={12} sm={6} md={6}>
                      <FormGroup
                        style={{ flexDirection: "column", display: "flex" }}
                        className="mt-3 "
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
                          onChange={e => {
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
                    <Col>
                      <FormGroup
                        style={{ flexDirection: "column", display: "flex" }}
                        className="mt-3 "
                      >
                        <label className="firstInput">
                          Description{" "}
                          <span className="mb-0" style={{ color: "red" }}>
                            *
                          </span>
                        </label>
                        <textarea
                          name="description"
                          allowclear="true"
                          className="form-control Input shadow-none"
                          placeholder="Enter description*"
                          onBlur={handleBlur("description")}
                          value={description}
                          onChange={e => {
                            setDecription(e.target.value);
                            setFieldValue("description", e.target.value);
                          }}
                        />
                        {touched.description && errors.description && (
                          <p
                            style={{
                              color: "red",
                              fontSize: 14,
                              padding: 0,
                              margin: 0,
                            }}
                          >
                            {errors.description}
                          </p>
                        )}
                      </FormGroup>
                    </Col>
                  </Row>

                  <FormGroup
                    style={{ flexDirection: "column", display: "flex" }}
                    className="mt-3 "
                  >
                    <label className="firstInput">
                      designation{" "}
                      <span className="mb-0" style={{ color: "red" }}>
                        *
                      </span>
                    </label>
                    <textarea
                      name="designation"
                      allowclear="true"
                      className="form-control Input shadow-none"
                      placeholder="Enter designation*"
                      onBlur={handleBlur("designation")}
                      value={designation}
                      onChange={e => {
                        setDesignation(e.target.value);
                        setFieldValue("designation", e.target.value);
                      }}
                    />
                    {touched.designation && errors.designation && (
                      <p
                        style={{
                          color: "red",
                          fontSize: 14,
                          padding: 0,
                          margin: 0,
                        }}
                      >
                        {errors.designation}
                      </p>
                    )}
                  </FormGroup>
                  <FormGroup
                    style={{ flexDirection: "column", display: "flex" }}
                    className="mt-3"
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
                        onChange={e => {
                          setselectPassword(e.target.value);
                          setFieldValue("selectPassword", e.target.value);
                        }}
                        onCopy={e => {
                          e.preventDefault();
                        }}
                        onPaste={e => {
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

                  <div className="submitButton mt-4 mb-3">
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
        )}
      </div>
    </div>
  );
}
