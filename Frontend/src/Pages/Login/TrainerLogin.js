import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Field, Formik } from "formik";
import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Button,
  InputGroup,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
// import { TrainerLoginAction } from "../../Redux/Actions/CommunityAction";
import { setAuthenticated } from "../../components/Redux_Toolkit/authSlice";
import ForgotPasswordLink from "./ForgotPasswordLink";
import { userLoginAction } from "../../Redux/Actions/UserAction";

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
});

const TrainerLogin = () => {
  const [passwordShown, setpasswordShown] = useState(false);
  const [Phone, setPhone] = useState("");
  const [Password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const [registerResponse, setRegisterResponse] = useState({
    status: "",
    message: "",
  });

  const dispatch = useDispatch();
  const handlePasswordShow = () => {
    setpasswordShown(!passwordShown);
  };

  const navigate = useNavigate();
  const submitForm = async () => {
    axios
      .post(`${process.env.REACT_APP_DEV_BASE_URL}/trainer/login`, {
        phone_number: Phone,
        password: Password,
      })
      .then((response) => {
        if (response.data.token) {
          const role = response.data.role;
          const token = response.data.token;
          const userId = response.data.id;
          const data = {
            isLogin: true,
            role: role,
            token: token,
            id: userId,
          };
          setRegisterResponse({
            status: response.data?.status,
            message: response.data?.message,
          });
          showToast();
          dispatch(userLoginAction(data));
          sessionStorage.setItem("USER_AUTH_STATE", true);
          localStorage.setItem("id",userId)
          setTimeout(() => {
            navigate("/trainer");
          }, 700);
        }
      })
      .catch((err) =>
        setRegisterResponse({
          status: err.response.data?.status,
          message: err.response.data?.message,
        })
      );
  };

  const showToast = () => {
    setShow(true);
  };
  return (
    <div>
      <ToastContainer
        position="top-end"
        style={{ zIndex: 100000, marginTop: "1%" }}
      >
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
          password: "",
          phone: "",
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
                <label style={{ color: "dark" }}>phone Number:</label>
                <Field
                  className="form-control Input shadow-none"
                  name="Phone"
                  type="string"
                  autoComplete="off"
                  onBlur={handleBlur("phone")}
                  values={values.phone}
                  placeholder="Enter your phone number"
                  onChange={(e) => {
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
                    onChange={(e) => {
                      handleChange("password");
                      setPassword(e.target.value);
                      setFieldValue("password", e.target.value);
                    }}
                    onCopy={(e) => {
                      e.preventDefault();
                      return false;
                    }}
                    onPaste={(e) => {
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
};

export default TrainerLogin;
