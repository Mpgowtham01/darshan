import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Radio, Select, Space } from "antd";
import { ErrorMessage, Field, Formik, replace } from "formik";
import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  InputGroup,
  Row,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Api from "../../Api";
import { userLoginAction } from "../../Redux/Actions/UserAction";

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
  aboutMe: Yup.string().required("About us is required"),
});
const StepThirdValidation = Yup.object().shape({
  
  selectEmail: Yup.string()
    .email("invalid email address")
    .required("Email is required"),
  selectPhone: Yup.string()
    .min(10, "phonenumber must be 10 digit")
    .max(10, "phonenumber must be 10 digit")
    .required("Phone Number is required"),
  selectlanguage_knows:Yup.array()
  .min(1, "Mininum choose any one")
  .required("language_knows is Required"),

  selectPassword: Yup.string()
  .min(6, "Password must be 6 characters")
  .required("Password is required"),
});

const GuideSignup = () => {
  const [step, setstep] = useState("first","second");
  const [Name, setName] = useState("");
  const [selectCountry, setselectCountry] = useState("");
  const [countryList, setcountryList] = useState([]);
  const [countryId, setCountryId] = useState("");
  const [selectState, setselectState] = useState("");
  const [stateId, setStateId] = useState("");
  const [stateList, setstateList] = useState([]);
  const [selectDistrict, setselectDistrict] = useState("");
  const [districtList, setdistrictList] = useState([]);

  const [districtId, setdistrictId] = useState([]);
  const [selectCity, setselectCity] = useState("");
  // const [cityId, setcountryId] = useState("");
  const [CityId, setCityId] = useState([]);
  const [cityList, setcityList] = useState([]);
  const [selectArea, setselectArea] = useState("");
  const [areaList, setareaList] = useState("");
  const [AreaId, setAreaId] = useState("");
  const [selectPin, setselectPin] = useState("");
  const [selectAddress, setselectAddress] = useState("");
  const [selectEmail, setselectEmail] = useState("");
  const [selectPhone, setselectPhone] = useState("");
  const [selectPassword, setselectPassword] = useState("");
  const [selectPasswordShown, setselectPasswordShown] = useState(false);  
  const [aboutMe, setaboutMe] = useState("");

  const [language_knows, setlanguage_knows] = useState([
    {
      id: 1,
      name: "Tamil",
    },
    {
      id: 2,
      name: "Telugu",
    },
    {
      id: 3,
      name: "Malayalam",
    },
    {
      id: 4,
      name: "Kannada",
    },
    {
      id: 5,
      name: "Hindi",
    },
    {
      id: 6,
      name: "Marathi",
    },
    {
      id: 7,
      name: "French",
    },
    {
      id: 8,
      name: "English",
    },
    {
      id: 9,
      name: "Chinese",
    },
  ]);
  
  const [selectlanguage_knows, setselectlanguage_knows] = useState([]);
console.log('xxxxxxxxxxx',selectlanguage_knows)
  const [registerResponse, setRegisterResponse] = useState({
    status: null,
    message: null,
  });

  const handlePasswordShown = () => {
    setselectPasswordShown(!selectPasswordShown);
  };

  useEffect(() => {
    getCountry();
  }, []);

  const getCountry = async () => {
    await Api.get("country/getAll").then(res => {
      const country = res.data;
      setcountryList(country);
    });
  };

  const getState = async id => {
    await Api.get(`state/getState/${id}`).then(res => {
      const state = res.data;
      setstateList(state);
    });
  };

  const getDistrict = async id => {
    await Api.get(`district/getdistrict/${id}`).then(res => {
      const district = res.data;
      setdistrictList(district);
    });
  };
  const getCity = async id => {
    await Api.get(`city/getCity/${id}`).then(res => {
      const city = res.data;
      console.log(res);
      setcityList(city);
    });
  };
  const getArea = async id => {
    await Api.get(`area/getArea/${id}`).then(res => {
      const area_name = res.data;
      setareaList(area_name);
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Option } = Select;

  const [show, setShow] = useState(false);

  const submitForm = async () => {
    Api.post("/guideregister/registerGuide", {
      name: Name,
      country: countryId,
      state: stateId,
      district: districtId,
      city: CityId,
      area: AreaId,
      pincode: selectPin,
      address: selectAddress,
      emailId: selectEmail,
      aboutme: aboutMe,
      language_knows:selectlanguage_knows,
      phone: selectPhone,
      password: selectPassword,
    })
      .then(res => {
        console.log("res", res);
        setRegisterResponse({
          status: res.data?.status,
          message: res.data?.message,
        });
        setTimeout(() => {
          navigate("/login");
        }, 700);
      })
      .catch(err => {
        console.log("error", err);
        setRegisterResponse({
          status: err?.response.data?.status,
          message: err?.response.data?.message,
        });
      });
  };
  return (
    <div>
      <ToastContainer position="top-end">
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <strong
              className={`me-auto text-${
                registerResponse?.status === "Success" ? "success" : "danger"
              }`}
            >
              {registerResponse?.status}
            </strong>
          </Toast.Header>
          <Toast.Body>{registerResponse?.message}</Toast.Body>
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
            onSubmit={values => {
              submitForm();

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
        )  : step === "second" ?(
        <div>
          <Formik
            initialValues={{
              selectArea: selectArea,
              selectPin: selectPin,
              selectAddress: selectAddress,
              aboutMe:aboutMe,
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
                    <Select showSearch
                      name="selectArea"
                      placeholder="Select Area Name*"
                      allowclear="true"
                      onBlur={handleBlur("selectArea")}
                      value={selectArea || undefined}
                      onChange={e => {
                        // console.log("wef",e)
                        setFieldValue("selectArea", e);
                        const valueId = areaList?.find(
                          list => list.area_name === e
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
            
                  <FormGroup
                  style={{ flexDirection: "column", display: "flex" }}
                  className="my-3 "
                >
                  <label className="firstInput">
                    About Us{" "}
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
                    onChange={e => {
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
             
              selectEmail: selectEmail,
              selectPhone: selectPhone,
              selectlanguage_knows:language_knows,
              selectPassword: selectPassword,
            }}
            enableReinitialize
            validationSchema={StepThirdValidation}
            onSubmit={values => {
              submitForm();
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
                  
                <FormGroup
                  style={{ flexDirection: "column", display: "flex" }}
                  className="my-3"
                >
                  <label className="firstInput">
                    Select language_knows{" "}
                    <span className="mb-0" style={{ color: "red" }}>
                      *
                    </span>
                  </label>
                  <Select
                    showSearch
                    className="language_knows shadow-none"
                    name="selectlanguage_knows"
                    required
                    mode="multiple"
                    style={{ width: "100%" }}
                    placeholder="Select Language Knows*"
                    allowclear="true"
                    onBlur={handleBlur("selectlanguage_knows")}
                    value={selectlanguage_knows|| undefined}
                    onChange={e => {
                      setselectlanguage_knows(e);
                      setFieldValue("selectlanguage_knows", e);

                    }}
                  >
                    {language_knows?.map((list, i) => {
                      return (
                        <Option value={list?.name} key={i}>
                          {list?.name}
                        </Option>
                      );
                    })}
                  </Select>
                  {touched.selectlanguage_knows && errors.selectlanguage_knows && (
                    <p
                      style={{
                        color: "red",
                        fontSize: 14,
                        padding: 0,
                        margin: 0,
                      }}
                    >
                      {errors.selectlanguage_knows}
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
export default GuideSignup;
