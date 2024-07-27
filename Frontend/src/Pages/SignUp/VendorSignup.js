import React, { useState } from "react";
import {
  Button,
  Col,
  FormGroup,
  Form,
  InputGroup,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Api from "../../Api";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";

const StepFirstValidation = Yup.object().shape({
  VendorName: Yup.string().required("VendorName is required"),
  selectPhone: Yup.string()
    .min(10, "phonenumber must be 10 digit")
    .max(10, "phonenumber must be 10 digit")
    .required("selectPhone is required"),
  selectPassword: Yup.string()
    .min(6, "Password must be 6 characters")
    .required("Password is required"),
});

const VendorSignup = () => {
  const navigate = useNavigate();

  const [VendorName, setVendorName] = useState("");
  const [BusinessName, setBusinessName] = useState("");
  const [selectPhone, setselectPhone] = useState("");
  const [selectPassword, setselectPassword] = useState("");
  const [selectPasswordShown, setselectPasswordShown] = useState(false);
  const [registerResponse, setRegisterResponse] = useState({
    status: null,
    message: null,
  });
  const [vendorType, setVendorType] = useState("");
  const handlePasswordShown = () => {
    setselectPasswordShown(!selectPasswordShown);
  };

  const [show, setShow] = useState(false);

  const { Option } = Select;
  const submitForm = async () => {
    try {
      const response = await Api.post("vendor/register", {
        vendor_name: VendorName,
        vendorType: vendorType,
        phone_number: selectPhone,
        password: selectPassword,
      });

      setRegisterResponse({
        status: response.data?.status,
        message: response.data?.message,
      });

      if (response.data?.status === "Success") {
        setTimeout(() => {
          navigate("/login");
        }, 700);
      }
    } catch (err) {
      console.log("err :>> ", err);
      setRegisterResponse({
        status: err.response?.data?.status,
        message: err.response?.data?.message,
      });
    }
  };

  return (
    <div>
      <ToastContainer
        position="top-end"
        style={{ zIndex: 100000, marginTop: "1%" }}
      >
        <Toast onClose={() => setShow(false)} show={show}>
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
          <div className="d-flex justify-content-center mb-2 w-100">
            <Button onClick={() => navigate(-1)}>OK</Button>
          </div>
        </Toast>
      </ToastContainer>

      <div>
        <Formik
          initialValues={{
            VendorName: VendorName,
            BusinessName: BusinessName,
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
                    className="my-3"
                    firstInput
                  >
                    <label className="userSignUp_Input">
                      Vendor Type{" "}
                      <span className="mb-0" style={{ color: "red" }}>
                        *
                      </span>
                    </label>
                    <Select
                      className="form-control Input shadow-none"
                      value={vendorType}
                      onChange={(value) => setVendorType(value)}
                    >
                      <Option value="Vendor">Vendor</Option>
                      <Option value="Iyer">Iyer</Option>
                    </Select>
                    <label className="userSignUp_Input">
                      {vendorType} Name{" "}
                      <span className="mb-0" style={{ color: "red" }}>
                        *
                      </span>
                    </label>
                    <input
                      className="form-control Input shadow-none"
                      placeholder={`Enter ${vendorType} Name*`}
                      allowclear="true"
                      onBlur={handleBlur("VendorName")}
                      value={VendorName}
                      onChange={(e) => {
                        setVendorName(e.target.value);
                        setFieldValue("VendorName", e.target.value);
                      }}
                    />
                    {touched.VendorName && errors.VendorName && (
                      <p
                        style={{
                          color: "red",
                          fontSize: 14,
                          padding: 0,
                          margin: 0,
                        }}
                      >
                        {errors.VendorName}
                      </p>
                    )}
                  </FormGroup>

                  <FormGroup
                    style={{ flexDirection: "column", display: "flex" }}
                    className="my-3"
                  >
                    <label className="userSignUp_Input">
                      PhoneNumber{" "}
                      <span className="mb-0" style={{ color: "red" }}>
                        *
                      </span>
                    </label>
                    <input
                      className="form-control shadow-none"
                      name="selectPhone"
                      type="number"
                      placeholder="Enter  PhoneNumber*"
                      allowclear="true"
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
export default VendorSignup;
