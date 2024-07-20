// import React, { useState } from "react";
// import { InputGroup, Toast, ToastContainer } from "react-bootstrap";
// import * as Yup from "yup";
// import { Field, Formik } from "formik";
// import { Form, FormGroup } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import HeaderNavBar from "../../components/HeaderNavBar";
// import { Link } from "react-router-dom";

// //style
// import "../../components/Css/sass/AdminLogin.scss";

// // Api
// import Api from "../../Api";
// import { setAuthenticated } from "../../components/Redux_Toolkit/authSlice";

// import { userLoginAction } from "../../Redux/Actions/UserAction";
// import { useDispatch } from "react-redux";

// const LoginSchema = Yup.object().shape({
//   number: Yup.string().required("Number Is Required"),
//   password: Yup.string()
//     .min(4, "Password Must 4 Characters")
//     .max(15, "Password Must 15 Characters")
//     .required("Password Is Required"),
// });

// function CommunityAdmin() {
//   const [passwordShown, setpasswordShown] = useState(false);
//   const handlePasswordshown = () => {
//     setpasswordShown(!passwordShown);
//   };
//   const [Phone, setPhone] = useState("");
//   const [Password, setPassword] = useState("");
//   const [show, setShow] = useState(false);

//   const [registerResponse, setRegisterResponse] = useState({
//     status: null,
//     message: null,
//   });
//   console.log(
//     "🚀 ~ file: VendorLogin.js:97 ~ registerResponse",
//     registerResponse
//   );

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   async function submitForm() {
//     await axios({
//       method: "POST",
//       url: `${process.env.REACT_APP_DEV_BASE_URL}/login/community`,
//       data: { phone: Phone, password: Password },
//       withCredentials: true,
//     })
//       .then(result => {
//         console.log("result", result.data);
//         setRegisterResponse({
//           status: result.data?.status,
//           message: result.data?.message,
//         });
//         dispatch(setAuthenticated(result.data?.data?.isAuthenticated));
//         navigate(`/community/${result.data?.data.groupName}`);
//         localStorage.setItem("USER_AUTH_STATE", true);
//       localStorage.setItem("Role", "community");
//       localStorage.setItem("Group_Name", result.data?.data.groupName);
//       localStorage.setItem("id", result.data.data.id);
//       sessionStorage.setItem("Group_Name", result.data?.data.groupName);
//         sessionStorage.setItem(
//           "USER_AUTH_STATE",
//           result.data?.data?.isAuthenticated
//         );
//         sessionStorage.setItem("Group_Name", result.data?.data.groupName);
//       })

//       .catch(err =>
//         setRegisterResponse({
//           status: err.response.data?.status,
//           message: err.response.data?.message,
//         })
//       );
//   }
//   const showToast = () => {
//     setShow(false);
//   };

//   return (
//     <>
//       {/* <HeaderNavBar /> */}

//       {/* <div className="admin-login-bg">
//         <div className="admin-login-validation"> */}

//       <ToastContainer position="top-end" style={{ zIndex: 100000 }}>
//         <Toast onClose={() => showToast()} show={show} delay={3000} autohide>
//           <Toast.Header>
//             <strong
//               className={`me-auto text-${
//                 registerResponse?.status === "Success" ? "success" : "danger"
//               }`}
//             >
//               {registerResponse?.status}
//             </strong>
//           </Toast.Header>
//           <Toast.Body>{registerResponse?.message} </Toast.Body>
//           {/* <div className="d-flex justify-content-center mb-2 w-100">
//         <Button onClick={() => navigate(-1)}>OK</Button>
//       </div> */}
//         </Toast>
//       </ToastContainer>
//       <Formik
//         enableReinitialize={true}
//         initialValues={{
//           number: Phone,
//           password: Password,
//         }}
//         validationSchema={LoginSchema}
//         onSubmit={(values, actions) => {
//           submitForm();
//           setPhone("");
//           setPassword("");
//           setShow(true);

//           actions.resetForm({
//             values: { number: "", password: "" },
//           });
//         }}
//       >
//         {({
//           touched,
//           errors,
//           values,
//           handleBlur,
//           handleChange,
//           handleSubmit,
//           setFieldValue,
//         }) => (
//           <div>
//             <Form className="mainAdminLogin">
//               <FormGroup>
//                 {/* <h3 className="text-center admin-login-head mb-5 ">
//                       <b>Community Login</b>
//                     </h3> */}
//                 {/* <div className="maincontent ">
//                       <h5>Don't have an account ?</h5>
//                       <Link to="/signup">Signup Now</Link>
//                     </div> */}
//                 <label style={{ color: "dark" }}>
//                   Phone Number:
//                   {/* <b>Phone Number:</b> */}
//                 </label>
//                 <Field
//                   className="admin-login-input1 form-control"
//                   name="number"
//                   type="string"
//                   onBlur={handleBlur("number")}
//                   values={values.number}
//                   placeholder="Enter Phone Number"
//                   onChange={(e) => {
//                     handleChange("number");
//                     setPhone(e.target.value);
//                     setFieldValue("number", e.target.value);
//                   }}
//                 />
//                 {touched.number && errors.number && (
//                   <p
//                     style={{
//                       color: "red",
//                       fontSize: 16,
//                       padding: 0,
//                       margin: 0,
//                     }}
//                   >
//                     {errors.number}
//                   </p>
//                 )}
//               </FormGroup>
//               <br />
//               <FormGroup>
//                 <label style={{ color: "dark" }}>Password</label>
//                 <InputGroup className="adminLoginEyeicon">
//                   <Field
//                     className="admin-login-input2 form-control"
//                     name="password"
//                     type={passwordShown ? "text" : "password"}
//                     onBlur={handleBlur("password")}
//                     values={values.password}
//                     placeholder="Enter Password"
//                     onChange={(e) => {
//                       handleChange("password");
//                       setPassword(e.target.value);
//                       setFieldValue("password", e.target.value);
//                     }}
//                     onCopy={(e) => {
//                       e.preventDefault();
//                       return false;
//                     }}
//                     onPaste={(e) => {
//                       e.preventDefault();
//                       return false;
//                     }}
//                     style={{ height: "42px" }}
//                   />
//                   <InputGroup.Text className="admin-login-eyeicon">
//                     <FontAwesomeIcon
//                       icon={passwordShown ? faEye : faEyeSlash}
//                       style={{ cursor: "pointer" }}
//                       onClick={() => handlePasswordshown()}
//                     />
//                   </InputGroup.Text>
//                 </InputGroup>

//                 {touched.password && errors.password && (
//                   <p
//                     style={{
//                       color: "red",
//                       fontSize: 16,
//                       padding: 0,
//                       margin: 0,
//                     }}
//                   >
//                     {errors.password}
//                   </p>
//                 )}
//               </FormGroup>
//               <div className="d-flex justify-content-end m mt-3">
//                 {/* <button className="admin-login-button" onClick={handleSubmit}> */}
//                 <button
//                   className="signin-button shadow-none btn btn-primary "
//                   onClick={handleSubmit}
//                 >
//                   Login
//                 </button>
//               </div>
//             </Form>
//           </div>
//         )}
//       </Formik>
//       {/* </div>
//       </div> */}
//     </>
//   );
// }

// export default CommunityAdmin;

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
import { Link } from "react-router-dom";

//style
import "../../components/Css/sass/AdminLogin.scss";

// Api
import Api from "../../Api";
import { setAuthenticated } from "../../components/Redux_Toolkit/authSlice";

import { userLoginAction } from "../../Redux/Actions/UserAction";
import { useDispatch } from "react-redux";

const LoginSchema = Yup.object().shape({
  number: Yup.string().required("Number Is Required"),
  password: Yup.string()
    .min(4, "Password Must 4 Characters")
    .max(15, "Password Must 15 Characters")
    .required("Password Is Required"),
});

function CommunityAdmin() {
  const [passwordShown, setpasswordShown] = useState(false);
  const handlePasswordshown = () => {
    setpasswordShown(!passwordShown);
  };
  const [Phone, setPhone] = useState("");
  const [Password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function submitForm() {
    try {
      const result = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_DEV_BASE_URL}/login/community`,
        data: { phone: Phone, password: Password },
        withCredentials: true,
      });
      console.log("resulsst", result.data);
      dispatch(setAuthenticated(result.data?.data?.isAuthenticated));
      navigate(`/community/${result.data?.data.groupName}`);
      sessionStorage.setItem(
        "USER_AUTH_STATE",
        result.data?.data?.isAuthenticated
      );
      localStorage.setItem("USER_AUTH_STATE", true);
      localStorage.setItem("Role", "Community Admin");
      localStorage.setItem("Community_id", result.data?.data?.id);

      sessionStorage.setItem("Group_Name", result.data?.data.groupName);
    } catch (error) {
      console.log("Error", error);
    }
  }

  return (
    <>
      <HeaderNavBar />

      <div className="admin-login-bg">
        <div className="admin-login-validation">
          <Formik
            enableReinitialize={true}
            initialValues={{
              number: Phone,
              password: Password,
            }}
            validationSchema={LoginSchema}
            onSubmit={(values, actions) => {
              submitForm();
              setPhone("");
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
                <Form>
                  <FormGroup>
                    {/* <h3 className="text-center admin-login-head mb-5 ">
                      <b>Community Login</b>
                    </h3> */}
                    {/* <div className="maincontent ">
                      <h5>Don't have an account ?</h5>
                      <Link to="/signup">Signup Now</Link>
                    </div> */}
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
                        setPhone(e.target.value);
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

export default CommunityAdmin;
