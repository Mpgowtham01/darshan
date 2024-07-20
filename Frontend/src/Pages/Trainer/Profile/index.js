import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Col,
  FormGroup,
  Form,
  Container,
  InputGroup,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { Select, Popover } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import Api from "../../Api";
import { useDispatch } from "react-redux";
// import { userLoginAction } from "../../Redux/Actions/UserAction";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Tabs } from "antd";
import "../trainer.css";
import { HiPlusCircle } from "react-icons/hi";

const StepFirstValidation = Yup.object().shape({
  Name: Yup.string().required("Name is required"),
  selectEmail: Yup.string()
    .email("invalid email address")
    .required("Email is required"),
  selectPhone: Yup.string()
    .min(10, "phonenumber must be 10 digit")
    .max(10, "phonenumber must be 10 digit")
    .required("Phone Number is required"),
});

const StepSecondValidation = Yup.object().shape({
  selectCountry: Yup.string().required("Country Name is required"),
  selectState: Yup.string().required("State Name is required"),
  selectDistrict: Yup.string().required("District Name is required"),
  selectCity: Yup.string().required("City Name is required"),
  selectArea: Yup.string().required("Area Name is required"),
  selectPin: Yup.string().required("Pin is required"),
  selectAddress: Yup.string().required("Address is required"),
});

const StepThirdValidation = Yup.object().shape({
  aboutMe: Yup.string().required("About us is required"),
  selectCourseList: Yup.array()
    .min(1, "Mininum choose any one")
    .required("Course List is Required"),
  selectPassword: Yup.string().required("Password is required"),
});

export default function Profile() {
  const [step, setstep] = useState("first");
  const [Name, setName] = useState("");
  const [selectCountry, setselectCountry] = useState("");
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
  const [areaList, setareaList] = useState([]);
  const [AreaId, setAreaId] = useState("");
  const [selectPin, setselectPin] = useState("");
  const [selectEmail, setselectEmail] = useState("");
  const [selectPhone, setselectPhone] = useState("");
  const [selectWhatsapp, setselectWhatsapp] = useState("");
  const [aboutMe, setaboutMe] = useState("");
  const [courseList, setcourseList] = useState([
    {
      id: 1,
      name: "Hanuman Chalisa",
    },
    {
      id: 2,
      name: "Tiruppavai",
    },
    {
      id: 3,
      name: "Lakshmi Nrisimha karavalambam",
    },
    {
      id: 4,
      name: "Sri Rama Pancharatnam",
    },
  ]);
  const [selectCourseList, setselectCourseList] = useState([]);
  const [selectPassword, setselectPassword] = useState("");
  const [selectPasswordShown, setselectPasswordShown] = useState(false);
  const [selectAddress, setselectAddress] = useState("");
  const [alternativePhone, setalternativePhone] = useState("");
  const [imagePreview, setimagePreview] = useState("");
  const [open, setOpen] = useState(false);

  const image =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg==";

  const handlePasswordShown = () => {
    setselectPasswordShown(!selectPasswordShown);
  };
const ref=useRef()

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Option } = Select;

  const fileUploadAction = () => ref.current.click();

  const removeImage = () => {
    setimagePreview("");
  };

  const fileUploadInputChange = async (e) => {
    const file = e.target.files[0];
    const type = file?.type?.split("/")[0];
    const base64 = await convertBase64(file);
    setimagePreview(base64)
  };

  // Convert Image to Base64
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  useEffect(() => {
    getCountry();
  }, []);

  const getCountry = async () => {
    await axios
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

  return (
    <div>
      <Container className="bg-white" style={{ borderRadius: 8 }}>
        <div className="row">
          <Col lg={3} className="pt-5">
            <div className="d-flex justify-content-center align-items-center mt-5">
              <img
                src={imagePreview ? imagePreview : image}
                alt="Logo"
                className="profile-image-style"
              />
            </div>

            <div
              className="d-flex justify-content-end"
              style={{
                width: "80%",
                marginTop: -8,
              }}
            >
              <Popover
                content={
                  <div>
                    <a
                      onClick={() => {
                        setOpen(false);
                        fileUploadAction();
                      }}
                    >
                      Choose Profile
                    </a>
                    <br />
                    <hr />
                    <a
                      onClick={() => {
                        setOpen(false);
                        removeImage();
                      }}
                    >
                      Remove Profile
                    </a>
                  </div>
                }
                trigger="click"
                open={open}
              >
                <HiPlusCircle
                  style={{ fontSize: 25, cursor: "pointer" }}
                  onClick={() => setOpen(true)}
                />
              </Popover>
            </div>
            <input
              type="file"
              name="courseImage"
              accept="image/*"
              className="fileToUpload"
              ref={ref}
              id="fileToUpload"
              style={{ display: "none" }}
              onChange={(e) => fileUploadInputChange(e)}
            />
            <div
              style={{
                fontWeight: 700,
                fontFamily: "Playfair Display, serif",
                marginBottom: 20,
                marginTop: 10,
              }}
            >
              <h6 className="text-center mb-2">John David</h6>
              <h6 className="text-center mb-2">john@gmail.com</h6>
              <h6 className="text-center">9876543210</h6>
            </div>
          </Col>
          <Col className="py-2">
            <Tabs activeKey={step}>
              <Tabs.TabPane
                tab="Personal Details"
                key="first"
                onClick={() => setstep("first")}
              >
                <Formik
                  initialValues={{
                    Name: Name,
                    selectEmail: selectEmail,
                    selectPhone: selectPhone,
                    selectWhatsapp: selectWhatsapp,
                    alternativePhone: alternativePhone,
                  }}
                  enableReinitialize
                  // validationSchema={StepFirstValidation}
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
                    <div className="my-3" style={{ width: "80%" }}>
                      <Form>
                        <div className="row">
                          <Col>
                            <FormGroup
                              style={{
                                flexDirection: "column",
                                display: "flex",
                              }}
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
                          <Col>
                            <FormGroup
                              style={{
                                flexDirection: "column",
                                display: "flex",
                              }}
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
                        </div>
                        <div className="row">
                          <Col>
                            <FormGroup
                              style={{
                                flexDirection: "column",
                                display: "flex",
                              }}
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
                                disabled
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
                          </Col>
                          <Col>
                            <FormGroup
                              style={{
                                flexDirection: "column",
                                display: "flex",
                              }}
                              className="my-3"
                            >
                              <label className="firstInput">
                                Whatsapp Number{" "}
                              </label>
                              <input
                                className="form-control shadow-none"
                                name="selectWhatsapp"
                                placeholder="Enter the whatsapp number"
                                type="number"
                                onBlur={handleBlur("selectWhatsapp")}
                                value={selectWhatsapp}
                                onChange={(e) => {
                                  setselectWhatsapp(e.target.value);
                                  setFieldValue(
                                    "selectWhatsapp",
                                    e.target.value
                                  );
                                }}
                              ></input>
                              {touched.selectWhatsapp && errors.selectWhatsapp && (
                                <p
                                  style={{
                                    color: "red",
                                    fontSize: 14,
                                    padding: 0,
                                    margin: 0,
                                  }}
                                >
                                  {errors.selectWhatsapp}
                                </p>
                              )}
                            </FormGroup>
                          </Col>
                        </div>
                        <div className="row">
                          <Col lg={6}>
                            <FormGroup
                              style={{
                                flexDirection: "column",
                                display: "flex",
                              }}
                              className="my-3"
                            >
                              <label className="firstInput">
                                Alternative Phone Number{" "}
                                <span className="mb-0" style={{ color: "red" }}>
                                  *
                                </span>
                              </label>
                              <input
                                className="form-control shadow-none"
                                name="alternativePhone"
                                placeholder="Enter the PhoneNumber*"
                                type="number"
                                onBlur={handleBlur("alternativePhone")}
                                value={alternativePhone}
                                onChange={(e) => {
                                  setalternativePhone(e.target.value);
                                  setFieldValue(
                                    "alternativePhone",
                                    e.target.value
                                  );
                                }}
                              ></input>
                            </FormGroup>
                          </Col>
                        </div>
                        <div className="d-flex justify-content-end mt-3">
                          <Button
                            className="next-button shadow-none"
                            variant="primary"
                            onClick={handleSubmit}
                            style={{ width: "30%" }}
                          >
                            Next
                          </Button>
                        </div>
                      </Form>
                    </div>
                  )}
                </Formik>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Address" key="second">
                <Formik
                  initialValues={{
                    selectCountry: selectCountry,
                    selectState: selectState,
                    selectDistrict: selectDistrict,
                    selectCity: selectCity,
                    selectArea: selectArea,
                    selectPin: selectPin,
                    selectAddress: selectAddress,
                  }}
                  enableReinitialize
                  // validationSchema={StepSecondValidation}
                  onSubmit={(values) => {
                    setstep("third");
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
                    <div className="my-3" style={{ width: "80%" }}>
                      <Form>
                        <div className="row">
                          <Col>
                            <FormGroup
                              style={{
                                flexDirection: "column",
                                display: "flex",
                              }}
                              className="my-3"
                            >
                              <label className="firstInput">
                                Select Country{" "}
                                <span className="mb-0" style={{ color: "red" }}>
                                  *
                                </span>
                              </label>
                              <Select showSearch
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
                              style={{
                                flexDirection: "column",
                                display: "flex",
                              }}
                              className="my-3"
                            >
                              <label className="firstInput">
                                Select State{" "}
                                <span className="mb-0" style={{ color: "red" }}>
                                  *
                                </span>
                              </label>
                              <Select showSearch
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
                        </div>
                        <div className="row">
                          <Col>
                            <FormGroup
                              style={{
                                flexDirection: "column",
                                display: "flex",
                              }}
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
                                className="district shadow-none"
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
                              style={{
                                flexDirection: "column",
                                display: "flex",
                              }}
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
                        </div>
                        <div className="row">
                          <Col>
                            <FormGroup
                              style={{
                                flexDirection: "column",
                                display: "flex",
                              }}
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
                              style={{
                                flexDirection: "column",
                                display: "flex",
                              }}
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
                        </div>
                        <div className="row">
                          <Col lg={6}>
                            <FormGroup
                              style={{
                                flexDirection: "column",
                                display: "flex",
                              }}
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
                                  setFieldValue(
                                    "selectAddress",
                                    e.target.value
                                  );
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

                        <div className="submitButton mt-3">
                          <Button
                            className="next-button shadow-none"
                            variant="primary"
                            onClick={() => setstep("first")}
                            style={{ width: "30%" }}
                          >
                            Back
                          </Button>
                          <Button
                            className="next-button shadow-none"
                            variant="primary"
                            onClick={handleSubmit}
                            style={{ width: "30%" }}
                          >
                            Next
                          </Button>
                        </div>
                      </Form>
                    </div>
                  )}
                </Formik>
              </Tabs.TabPane>
              <Tabs.TabPane tab="About Us" key="third">
                <Formik
                  initialValues={{
                    aboutMe: aboutMe,
                    selectCourseList: selectCourseList,
                    selectPassword: selectPassword,
                  }}
                  enableReinitialize
                  // validationSchema={StepThirdValidation}
                  onSubmit={(values) => {
                    alert("dvxb");
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
                    <div className="my-3" style={{ width: "80%" }}>
                      <Form>
                        <FormGroup
                          style={{ flexDirection: "column", display: "flex" }}
                          className="my-3 "
                        >
                          <label className="firstInput">
                            About Me{" "}
                            <span className="mb-0" style={{ color: "red" }}>
                              *
                            </span>
                          </label>
                          <textarea
                            name="aboutMe"
                            allowclear="true"
                            className="form-control Input shadow-none"
                            placeholder="Enter Aboutus*"
                            onBlur={handleBlur("aboutMe")}
                            value={aboutMe}
                            onChange={(e) => {
                              setaboutMe(e.target.value);
                              setFieldValue("aboutMe", e.target.value);
                            }}
                          />
                          {touched.aboutMe && errors.aboutMe && (
                            <p
                              style={{
                                color: "red",
                                fontSize: 14,
                                padding: 0,
                                margin: 0,
                              }}
                            >
                              {errors.aboutMe}
                            </p>
                          )}
                        </FormGroup>
                        <FormGroup
                          style={{ flexDirection: "column", display: "flex" }}
                          className="my-3"
                        >
                          <label className="firstInput">
                            Select Course List{" "}
                            <span className="mb-0" style={{ color: "red" }}>
                              *
                            </span>
                          </label>
                          <Select showSearch
                            className="courseList shadow-none"
                            name="selectCourseList"
                            required
                            mode="multiple"
                            style={{ width: "100%" }}
                            placeholder="Select Course Name*"
                            allowclear="true"
                            onBlur={handleBlur("selectCourseList")}
                            value={selectCourseList || undefined}
                            onChange={(e) => {
                              setselectCourseList(e);
                            }}
                          >
                            {courseList?.map((list, i) => {
                              return (
                                <Option value={list?.id} key={i}>
                                  {list?.name}
                                </Option>
                              );
                            })}
                          </Select>
                          {touched.selectCourseList && errors.selectCourseList && (
                            <p
                              style={{
                                color: "red",
                                fontSize: 14,
                                padding: 0,
                                margin: 0,
                              }}
                            >
                              {errors.selectCourseList}
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
                        <div className="submitButton mt-5">
                          <Button
                            className="next-button shadow-none"
                            variant="primary"
                            onClick={() => setstep("second")}
                            style={{ width: "30%" }}
                          >
                            Back
                          </Button>
                          <Button
                            className="next-button shadow-none"
                            variant="primary"
                            onClick={handleSubmit}
                            style={{ width: "30%" }}
                          >
                            Submit
                          </Button>
                        </div>
                      </Form>
                    </div>
                  )}
                </Formik>
              </Tabs.TabPane>
            </Tabs>
          </Col>
        </div>
      </Container>
    </div>
  );
}
