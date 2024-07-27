import React, { useState } from "react";
import { InputGroup } from "react-bootstrap";
import * as Yup from "yup";
import { Field, Formik } from "formik";
import { Form, FormGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HeaderNavBar from "../../components/HeaderNavBar";

//style
import "../../components/Css/sass/AdminLogin.scss";

// Api
import Api from "../../Api";

import { userLoginAction } from "../../Redux/Actions/UserAction";
import { useDispatch } from "react-redux";

const LoginSchema = Yup.object().shape({
  number: Yup.string().required("Number Is Required"),
  password: Yup.string()
    .min(4, "Password Must 4 Characters")
    .max(15, "Password Must 15 Characters")
    .required("Password Is Required"),
});

function AdminLogin() {
  const [passwordShown, setpasswordShown] = useState(false);
  const handlePasswordshown = () => {
    setpasswordShown(!passwordShown);
  };
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = async () => {
    Api.post("users/login", {
      phone_number: phoneNumber,
      password: password,
    }).then((response) => {
      if (response.data.data.token) {
        const role = response.data.data.role_name;
        const token = response.data.data.token;
        const userId = response.data.data.user_id;
        const data = {
          isLogin: true,
          role: role,
          token: token,
          id: userId,
        };
        localStorage.setItem("USER_AUTH_STATE", true);
        localStorage.setItem("Role", "admin");
        dispatch(userLoginAction(data));
        navigate("/admin");
        sessionStorage.setItem("USER_AUTH_STATE", true);
      } else {
        console.log(
          "response",
          response.data.data.error
            ? response.data.data.error
            : response.data.data.error1
        );
      }
    });
  };

  return (
    <>
      {/* <HeaderNavBar /> */}

      <div className="admin-login1-bg">
        <div className="admin-login1-validation">
          <Formik
            enableReinitialize={true}
            initialValues={{
              number: phoneNumber,
              password: password,
            }}
            validationSchema={LoginSchema}
            onSubmit={(values, actions) => {
              submitForm();
              setPhoneNumber("");
              setPassword("");
              actions.resetForm({
                values: { number: "", password: "" },
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
              <div>
                <Form className="mainAdminLogin1">
                  <FormGroup>
                    <h3 className="text-center admin-login-head mb-5 ">
                      <b>Admin Login</b>
                    </h3>
                    <label style={{ color: "dark" }}>
                      <b>Phone Number:</b>
                    </label>
                    <Field
                      className="admin-login-input1 form-control"
                      name="number"
                      type="string"
                      onBlur={handleBlur("number")}
                      values={values.number}
                      placeholder="Enter Phone Number"
                      onChange={(e) => {
                        handleChange("number");
                        setPhoneNumber(e.target.value);
                        setFieldValue("number", e.target.value);
                      }}
                    />
                    {touched.number && errors.number && (
                      <p
                        style={{
                          color: "red",
                          fontSize: 16,
                          padding: 0,
                          margin: 0,
                        }}
                      >
                        {errors.number}
                      </p>
                    )}
                  </FormGroup>
                  <br />
                  <FormGroup>
                    <label style={{ color: "dark" }}>
                      <b>Password</b>:
                    </label>
                    <InputGroup className="adminLoginEyeicon">
                      <Field
                        className="admin-login-input2 form-control"
                        name="password"
                        type={passwordShown ? "text" : "password"}
                        onBlur={handleBlur("password")}
                        values={values.password}
                        placeholder="Enter Password"
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
                      <InputGroup.Text className="admin-login-eyeicon">
                        <FontAwesomeIcon
                          icon={passwordShown ? faEye : faEyeSlash}
                          style={{ cursor: "pointer" }}
                          onClick={() => handlePasswordshown()}
                        />
                      </InputGroup.Text>
                    </InputGroup>

                    {touched.password && errors.password && (
                      <p
                        style={{
                          color: "red",
                          fontSize: 16,
                          padding: 0,
                          margin: 0,
                        }}
                      >
                        {errors.password}
                      </p>
                    )}
                  </FormGroup>
                  <div className="d-flex justify-content-center adminLoginButton">
                    <button
                      className="admin-login-button"
                      onClick={handleSubmit}
                    >
                      <b>Submit</b>
                    </button>
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
