import React, { useEffect, useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Field, Formik } from "formik";
import {
  Button,
  Form,
  FormGroup,
  InputGroup,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { Select } from "antd";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
// import { communityLoginAction } from "../../Redux/Actions/CommunityAction";
import { setAuthenticated } from "../../../components/Redux_Toolkit/authSlice";
import ForgotPasswordLink from "../ForgotPasswordLink";
import "../../../components/Css/sass/Login.scss";

// Validation
const LoginSchema = Yup.object().shape({
  // email: Yup.string().email("invalid email address").required("Email Required"),
  phone: Yup.string()
    .min(10, "phone number must be 10 digit")
    .max(10, "phone number must be 10 digit")
    .required("Phone Number is required"),

  password: Yup.string()
    .min(6, "password must 6 characters")
    .required("Password Required"),
  // groupName: Yup.string().required("Group Name is required"),
  // familyName: Yup.string().required("Family Name is required"),
});

export default function HeaderLogin() {
  const params = useParams();
  const { groupName, id } = params;

  const [passwordShown, setpasswordShown] = useState(false);
  const [Phone, setPhone] = useState("");
  const [Password, setPassword] = useState("");
  // const [groupName, setGroupName] = useState(groupName);
  const [familyName, setFamilyName] = useState("");
  const [famname, setFamname] = useState([]);
  const [show, setShow] = useState(false);

  console.log("🚀 ~ file: HeaderLogin.js:41 ~ HeaderLogin ~ famname", famname);
  const [selectGroupName, setselectGroupName] = useState("");
  const [gNdata, setGNdata] = useState([]);
  const [registerResponse, setRegisterResponse] = useState({
    status: null,
    message: null,
  });
  console.log(
    "🚀 ~ file: HeaderSignup.js:101 ~ registerResponse",
    registerResponse
  );

  const dispatch = useDispatch();

  const handlePasswordShow = () => {
    setpasswordShown(!passwordShown);
  };

  const navigate = useNavigate();
  const { Option } = Select;

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_DEV_BASE_URL}/community/getCurrentUserFamilyNames/${groupName}`
      )
      .then(res => {
        setFamname(res.data.result);
      });
  }, [groupName]);

  async function submitForm() {
    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_DEV_BASE_URL}/login/communityuser`,
      data: {
        phone: Phone,
        password: Password,
        groupName: groupName,
        familyName: famname[0].familyName,
      },
      withCredentials: true,
    })
      .then(result => {
        dispatch(setAuthenticated(result.data?.data?.isAuthenticated));
        navigate(`/communityUser/${result.data?.data.groupName}`);
        sessionStorage.setItem("id", result.data?.data?.id);
        sessionStorage.setItem(
          "USER_AUTH_STATE",
          result.data?.data?.isAuthenticated
        );
        sessionStorage.setItem("Group_Name", result.data?.data.groupName);
        sessionStorage.setItem("Family_Name", famname[0].familyName);
        localStorage.setItem("USER_AUTH_STATE", true);
        localStorage.setItem("Role", "communityUser");
        localStorage.setItem("Group_Name", result.data?.data.groupName);
        localStorage.setItem("id", result.data.data.id);
        sessionStorage.setItem("Group_Name", result.data?.data.groupName);
        sessionStorage.setItem("Family_Name", famname[0].familyName);
        setRegisterResponse({
          status: result.data?.status,
          message: result.data?.message,
        });
      })
      .catch(err =>
        setRegisterResponse({
          status: err.response.data?.status,
          message: err.response.data?.message,
        })
      );
  }

  return (
    <div>
      {" "}
      <ToastContainer position="top-end">
        <Toast
          onClose={() => setShow(false)}
          show={show}
          className="mt-5"
          delay={3000}
          autohide
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
          {/* <Toast.Body>{registerResponse?.status}</Toast.Body> */}
          <Toast.Body>{registerResponse?.message} </Toast.Body>
          {/* <div className="d-flex justify-content-center mb-2 w-100">
            <Button onClick={() => navigate(-1)}>OK</Button>
          </div> */}
        </Toast>
      </ToastContainer>
      <Formik
        enableReinitialize={true}
        initialValues={{
          password: "",
          phone: "",
          groupName: groupName,
          familyName: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, actions) => {
          submitForm();
          setPhone("");
          setPassword("");
          setFamilyName("");
          setShow(true);
          actions.resetForm({
            values: {
              phone: "",
              password: "",
              groupName: groupName,
              familyName: "",
            },
          });
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
              {/* <FormGroup
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
                  onBlur={handleBlur("groupName")}
                  value={values.groupName}
                  onChange={e => {
                    setFieldValue("groupName", e);
                  }}
                />
                {touched.groupName && errors.groupName && (
                  <p
                    style={{
                      color: "red",
                      fontSize: 14,
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    {errors.groupName}
                  </p>
                )}
              </FormGroup>
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
                <Select
                  showSearch
                  className=" shadow-none"
                  name="familyName"
                  required
                  placeholder="Select Country Name*"
                  allowclear="true"
                  onBlur={handleBlur("familyName")}
                  value={familyName || undefined}
                  onChange={e => {
                    setFamilyName(e);
                    setFieldValue("familyName", e);
                  }}
                >
                  {famname?.map((list, i) => {
                    // console.log(list)
                    return (
                      <Option value={list?.familyName} key={i}>
                        {list?.familyName}
                      </Option>
                    );
                  })}
                </Select> */}
              {/* //////////////////////////////////////////////// */}
              {/* <input
              name="familyName"
              allowclear="true"
              className="form-control Input shadow-none"
              placeholder="Enter family name*"
              onBlur={handleBlur("familyName")}
              value={values.familyName}
              onChange={(e) => {
                setFamilyName(e.target.value);
                setFieldValue("familyName", e.target.value);
              }}
            /> */}
              {/* ///////////////////////////////////// */}

              {/* {touched.familyName && errors.familyName && (
                  <p
                    style={{
                      color: "red",
                      fontSize: 14,
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    {errors.familyName}
                  </p>
                )}
              </FormGroup> */}

              <FormGroup className="mb-3">
                <label style={{ color: "dark" }}>phone Number:</label>
                <Field
                  className="form-control Input shadow-none"
                  name="Phone"
                  type="string"
                  autoComplete="off"
                  onBlur={handleBlur("phone")}
                  values={values.phone}
                  placeholder="Enter your phone number"
                  onChange={e => {
                    handleChange("phone");
                    setPhone(e.target.value);
                    setFieldValue("phone", e.target.value);
                  }}
                />
                {touched.phone && errors.phone && (
                  <p
                    style={{
                      color: "red",
                      fontSize: 16,
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    {errors.phone}
                  </p>
                )}
              </FormGroup>

              <FormGroup className="mb-3">
                <label style={{ color: "dark" }}>Password :</label>
                <InputGroup className="input-group ">
                  <Field
                    className="form-control Input shadow-none"
                    name="password"
                    type={passwordShown ? "text" : "password"}
                    values={values.password}
                    placeholder="Enter your Password"
                    onChange={e => {
                      handleChange("password");
                      setPassword(e.target.value);
                      setFieldValue("password", e.target.value);
                    }}
                    onCopy={e => {
                      e.preventDefault();
                      return false;
                    }}
                    onPaste={e => {
                      e.preventDefault();
                      return false;
                    }}
                  />
                  <InputGroup.Text>
                    <FontAwesomeIcon
                      icon={passwordShown ? faEye : faEyeSlash}
                      onClick={() => handlePasswordShow()}
                      size="1x"
                      style={{ cursor: "pointer" }}
                    />
                  </InputGroup.Text>
                </InputGroup>
                {touched.password && errors.password && (
                  <p
                    style={{
                      color: "red",
                      fontSize: 16,
                      padding: 0,
                      marginBottom: 0,
                    }}
                  >
                    {errors.password}
                  </p>
                )}
              </FormGroup>

              <ForgotPasswordLink role="community" />
              <div className="inputs d-flex justify-content-end ">
                <Button
                  className="signin-button shadow-none"
                  onClick={handleSubmit}
                  // style={{width: "30%"}}
                >
                  Login
                </Button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}
