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
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Api from "../../Api";
import "./../../components/Css/sass/SignUp.scss";

const StepFirstValidation = Yup.object().shape({
  Name: Yup.string().required("Name is required"),
  selectEmail: Yup.string()
    .email("invalid email address")
    .required("Email is required"),
  selectPhone: Yup.string()
    .min(10, "phonenumber must be 10 digit")
    .max(10, "phonenumber must be 10 digit")
    .required("Phone Number is required"),
  selectPassword: Yup.string()
    .min(6, "Password must be 6 characters")
    .required("Password is required"),
});

const UserSignup = () => {
  const [Name, setName] = useState("");
  const [selectEmail, setselectEmail] = useState("");
  const [selectPhone, setselectPhone] = useState("");
  const [selectPassword, setselectPassword] = useState("");
  const [selectPasswordShown, setselectPasswordShown] = useState(false);

  const [registerResponse, setRegisterResponse] = useState({
    status: null,
    message: null,
  });

  const handlePasswordShown = () => {
    setselectPasswordShown(!selectPasswordShown);
  };

  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const submitForm = async () => {
    Api.post("userRegister/create", {
      UserName: Name,

      EmailId: selectEmail,
      Phone: selectPhone,
      Password: selectPassword,
    })
      .then((res) => {
        console.log("res", res);
        setRegisterResponse({
          status: res.data?.status,
          message: res.data?.message,
        });
        if (res.data?.status === "Success") {
          setTimeout(() => {
            navigate("/login");
          }, 700);
        }
      })
      .catch((err) => {
        console.log("error", err);
        setRegisterResponse({
          status: err?.response.data?.status,
          message: err?.response.data?.message,
        });
      });
  };
  return (
    <div>
      <ToastContainer
        position="top-end"
        style={{ zIndex: 100000, marginTop: "8%" }}
      >
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

      <div>
        <Formik
          initialValues={{
            Name: Name,
            selectEmail: selectEmail,
            selectPhone: selectPhone,
            selectPassword: selectPassword,
          }}
          enableReinitialize
          validationSchema={StepFirstValidation}
          onSubmit={(values) => {
            submitForm(values);
          }}
        >
          {({
            touched,
            errors,
            values,
            handleBlur,
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
                    <label className="userSignUp_Input">
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
                    <label className="userSignUp_Input">
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
                    <label className="userSignUp_Input">
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
                    <label className="userSignUp_Input">
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
                  <div className="d-flex justify-content-end mt-3">
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
              </Col>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default UserSignup;
