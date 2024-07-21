import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Select } from "antd";
import axios from "axios";
import { Field, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { setAuthenticated } from "../../../../components/Redux_Toolkit/authSlice";
import ForgotPasswordLink from "../../../Login/ForgotPasswordLink";
// import { communityLoginAction } from "../../Redux/Actions/CommunityAction";
// import { setAuthenticated } from "../../components/Redux_Toolkit/authSlice";
// import { userLoginAction } from "../../Redux/Actions/UserAction";

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
  groupName: Yup.string().required("Group Name is required"),
});

const CommunityLogin = () => {
  const [passwordShown, setpasswordShown] = useState(false);
  const [Phone, setPhone] = useState("");
  const [Password, setPassword] = useState("");
  const [groupName, setGroupName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [selectGroupName, setselectGroupName] = useState("");
  const [gNdata, setGNdata] = useState([]);

  const dispatch = useDispatch();

  const handlePasswordShow = () => {
    setpasswordShown(!passwordShown);
  };

  console.log(groupName, "groupname");

  const navigate = useNavigate();
  const { Option } = Select;

  useEffect(() => {
    // getCountry();
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/community/getAllGroupName`)
      .then((response) => {
        console.log(response.data.result, "responseof groupName");
        setGNdata(response.data.result);
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_DEV_BASE_URL}/community/getCurrentUserFamilyName`,
        {
          familyName: familyName,
        }
      )
      .then((res) => {
        console.log(res, "result");
      });
  }, [groupName]);

  // async function submitForm() {
  //   try {
  //     const result = await axios({
  //       method: "POST",
  //       url: `${process.env.REACT_APP_DEV_BASE_URL}/login/community`,
  //       data: { phone: Phone, password: Password, groupName: groupName },
  //       // data: { phone: Phone, password: Password, group: groupName},

  //       withCredentials: true,
  //     });
  //     console.log("result", result.data);
  //     dispatch(setAuthenticated(result.data?.data?.isAuthenticated));
  //     navigate(`/community/${result.data?.data.groupName}`);
  //     sessionStorage.setItem(
  //       "USER_AUTH_STATE",
  //       result.data?.data?.isAuthenticated
  //     );
  //   } catch (error) {
  //     console.log("Error", error);
  //   }
  // }

  async function submitForm() {
    try {
      const result = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_DEV_BASE_URL}/login/communityuser`,
        data: {
          phone: Phone,
          password: Password,
          groupName: groupName,
          familyName: familyName,
        },
        withCredentials: true,
      });
      console.log("result", result.data);
      dispatch(setAuthenticated(result.data?.data?.isAuthenticated));
      navigate(
        `/communityUser/${result.data?.data.groupName}`
      );
      sessionStorage.setItem(
        "USER_AUTH_STATE",
        result.data?.data?.isAuthenticated
      );
      sessionStorage.setItem("Group_Name", result.data?.data.groupName);
    } catch (error) {
      console.log("Error", error);
    }
  }

  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={{
          password: "",
          phone: "",
          groupName: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, actions) => {
          submitForm();
          setPhone("");
          setPassword("");
          setGroupName("");
          setFamilyName("");
          actions.resetForm({
            values: { phone: "", password: "", groupName: "", familyName },
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
              <FormGroup
                style={{ flexDirection: "column", display: "flex" }}
                className="my-3"
              >
                <label className="firstInput">
                  Group Name{" "}
                  <span className="mb-0" style={{ color: "red" }}>
                    *
                  </span>
                </label>
                <Select showSearch
                  className=" shadow-none"
                  name="selectGroupName"
                  required
                  placeholder="Select Group Name*"
                  allowclear="true"
                  onBlur={handleBlur("selectGroupName")}
                  onChange={(e) => {
                    setGroupName(e);
                    setFieldValue("groupName", e);
                  }}
                >
                  {gNdata?.map((list, i) => {
                    // console.log(list)
                    return (
                      <Option value={list.groupname} key={i}>
                        {list.groupname}
                      </Option>
                    );
                  })}
                </Select>

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
                <Select showSearch
                  className=" shadow-none"
                  name="selectFamilyName"
                  required
                  placeholder="Select Family Name*"
                  allowclear="true"
                  onBlur={handleBlur("selectFamilyName")}
                  onChange={(e) => {
                    setGroupName(e);
                    setFieldValue("selectFamilyName", e);
                  }}
                >
                  {gNdata?.map((list, i) => {
                    // console.log(list)
                    return (
                      <Option value={list.groupname} key={i}>
                        {list.groupname}
                      </Option>
                    );
                  })}
                </Select>

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

export default CommunityLogin;
