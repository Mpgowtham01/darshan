import React, { useState } from "react";
import { InputGroup } from "react-bootstrap";
import * as Yup from "yup";
import { Field, Formik } from "formik";
import { Form, FormGroup } from "react-bootstrap";

//style
import "../components/Css/sass/AdminLogin.scss";

const LoginSchema = Yup.object().shape({
  number: Yup.string().required("Number Is Required"),

  email: Yup.string().required("Email Is Required"),
});

function ForgetPassword() {
  return (
    <div className="admin-login-bg">
      <div className="admin-login-validation">
        <Formik
          initialValues={{
            number: "",
            email: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {}}
        >
          {({
            touched,
            errors,
            values,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <div>
              <Form>
                <FormGroup className="mb-3">
                  <h3 className="text-center admin-login-head mb-5 ">
                    <b>Forget Password</b>
                  </h3>
                  <Field
                    className="admin-login-input1"
                    name="email"
                    type="email"
                    onBlur={handleBlur("email")}
                    values={values.number}
                    placeholder="Email"
                    onChange={handleChange("email")}
                  />
                  {touched.email && errors.email && (
                    <p
                      style={{
                        color: "red",
                        fontSize: 16,
                        padding: 0,
                        margin: 0,
                      }}
                    >
                      {errors.email}
                    </p>
                  )}
                </FormGroup>
                <FormGroup className="mb-3">
                  <InputGroup className="">
                    <Field
                      className="forget-input2 "
                      name="number"
                      type="number"
                      onBlur={handleBlur("number")}
                      values={values.number}
                      placeholder="Verfication code"
                      onChange={handleChange("number")}
                    />
                </InputGroup>
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
                <div className="d-flex justify-content-center">
                  <button className="admin-login-button" onClick={handleSubmit}>
                    <b>Submit</b>
                  </button>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default ForgetPassword;
