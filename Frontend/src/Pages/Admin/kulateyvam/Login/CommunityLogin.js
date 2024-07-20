import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Field, Formik } from "formik";
import React, { useState } from "react";
import { Button, Form, FormGroup, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

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

const CommunityLogin = () => {
  const [passwordShown, setpasswordShown] = useState(false);
  const [Phone, setPhone] = useState("");
  const [Password, setPassword] = useState("");
  // const [password, setPassword] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");

  const handlePasswordShow = () => {
    setpasswordShown(!passwordShown);
  };

  const submitForm = async () => {
    axios
      .post(`${process.env.REACT_APP_DEV_BASE_URL}/communityRegister/login`, {
        phone: Phone,
        password: Password,
      })
      .then((response) => {
        if (response.data.token) {
          const role = response.data.role;
          const token = response.data.token;
          const communityId = response.data.id;
          const data = {
            isLogin: true,
            role: role,
            token: token,
            id: communityId,
          };
          //    dispatch(
          // communityLoginAction(data))
          // navigate("/dashboard" )
        } else {
          console.log(
            "response",
            response.data.error ? response.data.error : response.data.error1
          );
        }
      });
  };

  return (
    <div>
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
                  autocomplete="off"
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

              <div className="mb-2 d-flex justify-content-end">
                <a href="#" className="forgerpassword">
                  Forget Your Password?
                </a>
              </div>
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

export default CommunityLogin;
