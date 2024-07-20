import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Button,
  InputGroup,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { userLoginAction } from "../../Redux/Actions/UserAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// Api
import Api from "../../Api";

// style
import "../../components/Css/sass/Login.scss";
import ForgotPasswordLink from "./ForgotPasswordLink";

// Validation
const LoginSchema = Yup.object().shape({
  phone: Yup.string()
    .min(10, "phone number must be 10 digit")
    .max(10, "phone number must be 10 digit")
    .required("Phone Number is required"),

  password: Yup.string()
    .min(6, "password must 6 characters")
    .required("Password Required"),
});

const IyerLogin = () => {
  const [passwordShown, setpasswordShown] = useState(false);
  const [Phone, setPhone] = useState("");
  const [Password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const [registerResponse, setRegisterResponse] = useState({
    status: null,
    message: null,
  });

  // password shown
  const handlePasswordShow = () => {
    setpasswordShown(!passwordShown);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = async () => {
    console.log("phone", Phone);
    Api.post("iyer/login", {
      phone: Phone,
      password: Password,
    })
      .then(response => {
        console.log("response", response);
        setRegisterResponse({
          status: response.data?.status,
          message: response.data?.message,
        });
        if (response.data.token) {
          const role = response.data.role;
          console.log('first', response.data)
          const token = response.data.token;
          const userId = response.data.id;
          const data = { 
            isLogin: true,
            role: role,
            token: token,
            id: userId,
          };
          console.log(data);
          localStorage.setItem("USER_AUTH_STATE", true);
          localStorage.setItem("Role", role);
          localStorage.setItem("id", userId);
          // localStorage.setItem("username", response.data.data.username);
          localStorage.setItem("token", token);
  
          dispatch(userLoginAction(data));
            navigate("/iyer");
        }
      })
      .catch(err =>
        setRegisterResponse({
          status: err.response.data?.status,
          message: err.response.data?.message,
        })
      );
  };
  const showToast = () => {
    setShow(false);
  };
  return (
    <div>
      <ToastContainer position="top-end" style={{ zIndex: 100000 }}>
        <Toast onClose={() => showToast()} show={show} delay={3000} autohide>
          <Toast.Header>
            <strong
              className={`me-auto text-${
                registerResponse?.status === "Success" ? "success" : "danger"
              }`}
            >
              {registerResponse?.status}
            </strong>
          </Toast.Header>
          <Toast.Body>{registerResponse?.message} </Toast.Body>
          {/* <div className="d-flex justify-content-center mb-2 w-100">
        <Button onClick={() => navigate(-1)}>OK</Button>
      </div> */}
        </Toast>
      </ToastContainer>
      <Formik
        enableReinitialize={true}
        initialValues={{
          phone: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, actions) => {
          submitForm();
          setPhone("");
          setPassword("");
          setShow(true);

          actions.resetForm({
            values: { phone: "", password: "" },
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
              <FormGroup className="mb-3">
                <label style={{ color: "dark" }}>Phone Number :</label>
                <Field
                  className="form-control Input shadow-none"
                  name="Phone"
                  type="string"
                  autocomplete="off"
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

              <ForgotPasswordLink role="priest" />
              <div className="inputs d-flex justify-content-end ">
                <Button
                  className="signin-button shadow-none"
                  onClick={handleSubmit}
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
};

export default IyerLogin;
