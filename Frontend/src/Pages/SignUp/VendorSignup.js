// import React, { useState } from "react";
// import {
//   Button,
//   Col,
//   FormGroup,
//   Row,
//   Form,
//   Container,
//   InputGroup,
// } from "react-bootstrap";
// import { Formik, ErrorMessage, Field, replace } from "formik";
// import * as Yup from "yup";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

// import { Radio, Space, Select } from "antd";

// const StepFirstValidation = Yup.object().shape({
//   VendorName: Yup.string().required("VendorName is required"),
//   BusinessName: Yup.string().required("BusinessName is required"),
//   selectCountryCode: Yup.string().required("selectCountryCode is required"),
//   selectCountry: Yup.string().required("selectCountry is required"),
//   selectState: Yup.string().required("selectState is required"),
// });

// const StepSecondValidation = Yup.object().shape({
//   selectDistrick: Yup.string().required("selectDistrick is required"),
//   selectCity: Yup.string().required("selectCity is required"),
//   selectArea: Yup.string().required("selectArea is required"),
//   selectHotelAddress: Yup.string().required("selectHotelAddress is required"),
// });
// const StepThirdValidation = Yup.object().shape({
//   selectPin: Yup.string().required("selectPin is required"),
//   selectPhone: Yup.string()
//     .min(10, "phonenumber must be 10 digit")
//     .max(10, "phonenumber must be 10 digit")
//     .required("selectPhone is required"),
//   selectPassword: Yup.string().required("selectPassword is required"),
// });

// const VendorSignup = () => {
//   const [step, setstep] = useState("first");
//   const [VendorName, setVendorName] = useState("");
//   const [BusinessName, setBusinessName] = useState("");
//   const [selectCountryCode, setselectCountryCode] = useState("");
//   const [codeList, setcodeList] = useState([
//     { id: 11, name: "+91-" },
//     { id: 12, name: "+210-" },
//     { id: 13, name: "+004-" },
//   ]);
//   const [selectCountry, setselectCountry] = useState("");
//   const [countryList, setcountryList] = useState([
//     { id: 11, name: "India" },
//     { id: 12, name: "USA" },
//     { id: 13, name: "Australia" },
//   ]);
//   const [selectState, setselectState] = useState("");
//   const [StateList, setStateList] = useState([
//     { id: 11, name: "Tamil Nadu" },
//     { id: 12, name: "Kerala" },
//     { id: 13, name: "Goa" },
//   ]);
//   const [selectDistrick, setselectDistrick] = useState("");
//   const [DistrickList, setDistrickList] = useState([
//     { id: 11, name: "Chennai" },
//     { id: 12, name: "Madurai" },
//     { id: 13, name: "Trichy" },
//   ]);
//   const [selectCity, setselectCity] = useState("");
//   const [cityList, setCityList] = useState([
//     { id: 11, name: "Tambaram" },
//     { id: 12, name: "Guindy" },
//     { id: 13, name: "Mount Road" },
//   ]);

//   const [selectArea, setselectArea] = useState("");
//   const [AreaList, setAreaList] = useState([
//     { id: 11, name: "Tondiarpet" },
//     { id: 12, name: "Washermenpet" },
//     { id: 13, name: "Tiruvottiyur" },
//   ]);
//   const [selectPin, setselectPin] = useState("");
//   const [selectPhone, setselectPhone] = useState("");
//   const [selectPassword, setselectPassword] = useState("");
//   const [selectPasswordShown, setselectPasswordShown] = useState(false);
//   const [selectHotelAddress, setselectHotelAddress] = useState("");

//   const handlePasswordShown = () => {
//     setselectPasswordShown(!selectPasswordShown);
//   };
//   const { Option } = Select;

//   return (
//     <div>
//       {step === "first" ? (
//         <div>
//           <Formik
//             initialValues={{
//               VendorName: VendorName,
//               BusinessName: BusinessName,
//               selectCountryCode: selectCountryCode,
//               selectCountry: selectCountry,
//               selectState: selectState,
//             }}
//             enableReinitialize
//             validationSchema={StepFirstValidation}
//             onSubmit={(values) => {
//               setstep("second");
//             }}
//           >
//             {({
//               touched,
//               errors,
//               values,
//               handleBlur,
//               handleChange,
//               handleSubmit,
//               setFieldValue,
//             }) => (
//               <div className="my-3">
//                 <Col>
//                   <Form>
//                     <FormGroup
//                       style={{ flexDirection: "column", display: "flex" }}
//                       className="my-2"
//                       firstInput
//                     >
//                       <label className="userSignUp_Input">
//                         Vendor Name{" "}
//                         <span className="mb-0" style={{ color: "red" }}>
//                           *
//                         </span>
//                       </label>
//                       <input
//                         className="form-control Input shadow-none"
//                         placeholder="Enter Vendor Name*"
//                         allowClear
//                         onBlur={handleBlur("VendorName")}
//                         value={VendorName}
//                         onChange={(e) => {
//                           setVendorName(e.target.value);
//                           setFieldValue("VendorName", e.target.value);
//                         }}
//                       />
//                       {touched.VendorName && errors.VendorName && (
//                         <p
//                           style={{
//                             color: "red",
//                             fontSize: 14,
//                             padding: 0,
//                             margin: 0,
//                           }}
//                         >
//                           {errors.VendorName}
//                         </p>
//                       )}
//                     </FormGroup>
//                     <FormGroup
//                       style={{ flexDirection: "column", display: "flex" }}
//                       className="my-2"
//                     >
//                       <label className="userSignUp_Input">
//                         Business Name{" "}
//                         <span className="mb-0" style={{ color: "red" }}>
//                           *
//                         </span>
//                       </label>
//                       <input
//                         className="form-control Input shadow-none"
//                         placeholder="Enter Business Name*"
//                         onBlur={handleBlur("BusinessName")}
//                         value={BusinessName}
//                         onChange={(e) => {
//                           setBusinessName(e.target.value);
//                           setFieldValue("BusinessName", e.target.value);
//                         }}
//                       />
//                       {touched.BusinessName && errors.BusinessName && (
//                         <p
//                           style={{
//                             color: "red",
//                             fontSize: 14,
//                             padding: 0,
//                             margin: 0,
//                           }}
//                         >
//                           {errors.BusinessName}
//                         </p>
//                       )}
//                     </FormGroup>
//                     <FormGroup
//                       style={{ flexDirection: "column", display: "flex" }}
//                       className="my-2"
//                     >
//                       <label className="userSignUp_Input">
//                         Select Country Code{" "}
//                         <span className="mb-0" style={{ color: "red" }}>
//                           *
//                         </span>
//                       </label>
//                       <Select showSearch
//                         name="selectCountryCode"
//                         placeholder="Select Country Code"
//                         onBlur={handleBlur("selectCountryCode")}
//                         value={selectCountryCode || undefined}
//                         allowClear
//                         onChange={(e) => {
//                           setselectCountryCode(e);
//                           setFieldValue("selectCountryCode", e);
//                         }}
//                       >
//                         {codeList?.map((list, i) => (
//                           <Option value={list?.name}>{list?.name}</Option>
//                         ))}
//                       </Select>
//                       {touched.selectCountryCode && errors.selectCountryCode && (
//                         <p
//                           style={{
//                             color: "red",
//                             fontSize: 14,
//                             padding: 0,
//                             margin: 0,
//                           }}
//                         >
//                           {errors.selectCountryCode}
//                         </p>
//                       )}
//                     </FormGroup>

//                     {/* coutryName */}

//                     <FormGroup
//                       style={{ flexDirection: "column", display: "flex" }}
//                       className="my-2"
//                     >
//                       <label className="userSignUp_Input">
//                         Select Country{" "}
//                         <span className="mb-0" style={{ color: "red" }}>
//                           *
//                         </span>
//                       </label>
//                       <Select showSearch
//                         name="selectCountry"
//                         required
//                         placeholder="Select Country"
//                         onBlur={handleBlur("selectCountry")}
//                         value={selectCountry || undefined}
//                         onChange={(e) => {
//                           console.log(e);
//                           setselectCountry(e);
//                           setFieldValue("selectCountry", e);
//                         }}
//                       >
//                         {countryList?.map((list, i) => (
//                           <Option value={list?.name}>{list?.name}</Option>
//                         ))}
//                       </Select>
//                       {touched.selectCountry && errors.selectCountry && (
//                         <p
//                           style={{
//                             color: "red",
//                             fontSize: 14,
//                             padding: 0,
//                             margin: 0,
//                           }}
//                         >
//                           {errors.selectCountry}
//                         </p>
//                       )}
//                     </FormGroup>
//                     <FormGroup
//                       style={{ flexDirection: "column", display: "flex" }}
//                       className="my-2"
//                     >
//                       <label className="userSignUp_Input">
//                         Select State{" "}
//                         <span className="mb-0" style={{ color: "red" }}>
//                           *
//                         </span>
//                       </label>
//                       <Select showSearch
//                         name="selectState"
//                         placeholder="Select State*"
//                         onBlur={handleBlur("selectState")}
//                         value={selectState || undefined}
//                         onChange={(e) => {
//                           console.log(e);
//                           setselectState(e);
//                           setFieldValue("selectState", e);
//                         }}
//                       >
//                         {StateList?.map((list, i) => (
//                           <Option value={list?.name}>{list?.name}</Option>
//                         ))}
//                       </Select>
//                       {touched.selectState && errors.selectState && (
//                         <p
//                           style={{
//                             color: "red",
//                             fontSize: 14,
//                             padding: 0,
//                             margin: 0,
//                           }}
//                         >
//                           {errors.selectState}
//                         </p>
//                       )}
//                     </FormGroup>

//                     <div className="d-flex justify-content-end mt-3">
//                       <Button
//                         className="signin-button shadow-none"
//                         variant="primary"
//                         onClick={handleSubmit}
//                         style={{ width: "35%" }}
//                       >
//                         Next
//                       </Button>
//                     </div>
//                   </Form>
//                 </Col>
//               </div>
//             )}
//           </Formik>
//         </div>
//       ) : step === "second" ? (
//         <div>
//           <Formik
//             initialValues={{
//               selectDistrick: selectDistrick,
//               selectCity: selectCity,
//               selectArea: selectArea,
//               selectHotelAddress: selectHotelAddress,
//             }}
//             enableReinitialize
//             validationSchema={StepSecondValidation}
//             onSubmit={(values) => {
//               setstep("third");
//             }}
//           >
//             {({
//               touched,
//               errors,
//               values,
//               handleBlur,
//               handleSubmit,
//               setFieldValue,
//             }) => (
//               <div className="my-3">
//                 <Form>
//                   <FormGroup
//                     style={{ flexDirection: "column", display: "flex" }}
//                     className="my-3"
//                   >
//                     <label className="userSignUp_Input">
//                       Select Districk{" "}
//                       <span className="mb-0" style={{ color: "red" }}>
//                         *
//                       </span>
//                     </label>
//                     <Select showSearch
//                       name="selectDistrick"
//                       placeholder="Select Districk*"
//                       allowClear
//                       onBlur={handleBlur("selectDistrick")}
//                       value={selectDistrick || undefined}
//                       onChange={(e) => {
//                         console.log(e);
//                         setselectDistrick(e);
//                         setFieldValue("selectDistrick", e);
//                       }}
//                     >
//                       {DistrickList?.map((list, i) => (
//                         <Option value={list?.name}>{list?.name}</Option>
//                       ))}
//                     </Select>
//                     {touched.selectDistrick && errors.selectDistrick && (
//                       <p
//                         style={{
//                           color: "red",
//                           fontSize: 14,
//                           padding: 0,
//                           margin: 0,
//                         }}
//                       >
//                         {errors.selectDistrick}
//                       </p>
//                     )}
//                   </FormGroup>

//                   <FormGroup
//                     style={{ flexDirection: "column", display: "flex" }}
//                     className="my-2"
//                   >
//                     <label className="userSignUp_Input">
//                       Select City{" "}
//                       <span className="mb-0" style={{ color: "red" }}>
//                         *
//                       </span>
//                     </label>
//                     <Select showSearch
//                       name="selectCity"
//                       placeholder="Select City*"
//                       allowClear
//                       onBlur={handleBlur("selectCity")}
//                       value={selectCity || undefined}
//                       onChange={(e) => {
//                         console.log(e);
//                         setselectCity(e);
//                         setFieldValue("selectCity", e);
//                       }}
//                     >
//                       {cityList?.map((list, i) => (
//                         <Option value={list?.name}>{list?.name}</Option>
//                       ))}
//                     </Select>
//                     {touched.selectCity && errors.selectCity && (
//                       <p
//                         style={{
//                           color: "red",
//                           fontSize: 14,
//                           padding: 0,
//                           margin: 0,
//                         }}
//                       >
//                         {errors.selectCity}
//                       </p>
//                     )}
//                   </FormGroup>
//                   <FormGroup
//                     style={{ flexDirection: "column", display: "flex" }}
//                     className="my-2"
//                     firstInput
//                   >
//                     <label className="userSignUp_Input">
//                       Area{" "}
//                       <span className="mb-0" style={{ color: "red" }}>
//                         *
//                       </span>
//                     </label>
//                     <input
//                       className="form-control Input shadow-none"
//                       placeholder="Enter Area name*"
//                       allowClear
//                       onBlur={handleBlur("selectArea")}
//                       value={selectArea}
//                       onChange={(e) => {
//                         setselectArea(e.target.value);
//                         setFieldValue("selectArea", e.target.value);
//                       }}
//                     />
//                     {touched.selectArea && errors.selectArea && (
//                       <p
//                         style={{
//                           color: "red",
//                           fontSize: 14,
//                           padding: 0,
//                           margin: 0,
//                         }}
//                       >
//                         {errors.selectArea}
//                       </p>
//                     )}
//                   </FormGroup>
//                   <FormGroup
//                     style={{ flexDirection: "column", display: "flex" }}
//                     className="my-2"
//                     firstInput
//                   >
//                     <label className="userSignUp_Input">
//                      Hotel Address{" "}
//                       <span className="mb-0" style={{ color: "red" }}>
//                         *
//                       </span>
//                     </label>
//                     <textarea
//                       className="form-control Input shadow-none"
//                       placeholder="Enter Hotel Address*"
//                       allowClear
//                       onBlur={handleBlur("selectHotelAddress")}
//                       value={selectHotelAddress}
//                       onChange={(e) => {
//                         setselectHotelAddress(e.target.value);
//                         setFieldValue("selectHotelAddress", e.target.value);
//                       }}
//                     />
//                     {touched.selectHotelAddress && errors.selectHotelAddress && (
//                       <p
//                         style={{
//                           color: "red",
//                           fontSize: 14,
//                           padding: 0,
//                           margin: 0,
//                         }}
//                       >
//                         {errors.selectHotelAddress}
//                       </p>
//                     )}
//                   </FormGroup>
//                   <FormGroup>
//                     <div className="submitButton mt-3">
//                       <Button
//                         className="signin-button shadow-none"
//                         variant="primary"
//                         onClick={() => setstep("first")}
//                         style={{ width: "35%" }}
//                       >
//                         Back
//                       </Button>
//                       <Button
//                         className="signin-button shadow-none"
//                         variant="primary"
//                         onClick={handleSubmit}
//                         style={{ width: "35%" }}
//                       >
//                         Next
//                       </Button>
//                     </div>
//                   </FormGroup>
//                 </Form>
//               </div>
//             )}
//           </Formik>
//         </div>
//       ) : (
//         step === "third" && (
//           <div>
//             <Formik
//               initialValues={{
//                 selectPin: selectPin,
//                 selectPhone: selectPhone,
//                 selectPassword: selectPassword,
//               }}
//               enableReinitialize
//               validationSchema={StepThirdValidation}
//               onSubmit={(values) => {
//                 setstep("third");
//               }}
//             >
//               {({
//                 touched,
//                 errors,
//                 values,
//                 handleBlur,
//                 handleChange,
//                 handleSubmit,
//                 setFieldValue,
//               }) => (
//                 <div className="my-3">
//                   <Form>
//                     <FormGroup
//                       style={{ flexDirection: "column", display: "flex" }}
//                       className="my-2"
//                     >
//                       <label className="userSignUp_Input">
//                        Pincode{" "}
//                         <span className="mb-0" style={{ color: "red" }}>
//                           *
//                         </span>
//                       </label>
//                       <input
//                         name="selectPin"
//                         className="form-control shadow-none"
//                         required
//                         type="number"
//                         placeholder="Enter Pincode*"
//                         onBlur={handleBlur("selectPin")}
//                         value={selectPin}
//                         onChange={(e) => {
//                           setselectPin(e.target.value);
//                           setFieldValue("selectPin", e.target.value);
//                         }}
//                       ></input>
//                       {touched.selectPin && errors.selectPin && (
//                         <p
//                           style={{
//                             color: "red",
//                             fontSize: 14,
//                             padding: 0,
//                             margin: 0,
//                           }}
//                         >
//                           {errors.selectPin}
//                         </p>
//                       )}
//                     </FormGroup>
//                     <FormGroup
//                       style={{ flexDirection: "column", display: "flex" }}
//                       className="my-2"
//                     >
//                       <label className="userSignUp_Input">
//                         PhoneNumber{" "}
//                         <span className="mb-0" style={{ color: "red" }}>
//                           *
//                         </span>
//                       </label>
//                       <input
//                         className="form-control shadow-none"
//                         name="selectPhone"
//                         type="number"
//                         placeholder="Enter  PhoneNumber*"
//                         allowClear
//                         onBlur={handleBlur("selectPhone")}
//                         value={selectPhone}
//                         onChange={(e) => {
//                           setselectPhone(e.target.value);
//                           setFieldValue("selectPhone", e.target.value);
//                         }}
//                       ></input>
//                       {touched.selectPhone && errors.selectPhone && (
//                         <p
//                           style={{
//                             color: "red",
//                             fontSize: 14,
//                             padding: 0,
//                             margin: 0,
//                           }}
//                         >
//                           {errors.selectPhone}
//                         </p>
//                       )}
//                     </FormGroup>

//                     <FormGroup
//                       style={{ flexDirection: "column", display: "flex" }}
//                       className="my-3"
//                     >
//                       <label className="userSignUp_Input">
//                         Password{" "}
//                         <span className="mb-0" style={{ color: "red" }}>
//                           *
//                         </span>
//                       </label>
//                       <InputGroup>
//                         <input
//                           name="selectPassword"
//                           className="form-control shadow-none"
//                           type={selectPasswordShown ? "text" : "password"}
//                           placeholder="Enter Password*"
//                           onBlur={handleBlur("selectPassword")}
//                           value={values.selectPassword}
//                           onChange={(e) => {
//                             setselectPassword(e.target.value);
//                             setFieldValue("selectPassword", e.target.value);
//                           }}
//                           onCopy={(e) => {
//                             e.preventDefault();
//                           }}
//                           onPaste={(e) => {
//                             e.preventDefault();
//                           }}
//                         />
//                         <InputGroup.Text>
//                           <FontAwesomeIcon
//                             icon={selectPasswordShown ? faEye : faEyeSlash}
//                             onClick={() => handlePasswordShown()}
//                             size="1x"
//                             style={{ cursor: "pointer" }}
//                           />
//                         </InputGroup.Text>
//                       </InputGroup>
//                       {touched.selectPassword && errors.selectPassword && (
//                         <p
//                           style={{
//                             color: "red",
//                             fontSize: 14,
//                             padding: 0,
//                             margin: 0,
//                           }}
//                         >
//                           {errors.selectPassword}
//                         </p>
//                       )}
//                     </FormGroup>
//                     <FormGroup>
//                       <div className="submitButton mt-3">
//                         <Button
//                           className="signin-button shadow-none"
//                           variant="primary"
//                           onClick={() => setstep("second")}
//                           style={{ width: "35%" }}
//                         >
//                           Back
//                         </Button>
//                         <Button
//                           className="signin-button shadow-none"
//                           variant="primary"
//                           onClick={handleSubmit}
//                           style={{ width: "35%" }}
//                         >
//                           Submit
//                         </Button>
//                       </div>
//                     </FormGroup>
//                   </Form>
//                 </div>
//               )}
//             </Formik>
//           </div>
//         )
//       )}
//     </div>
//   );
// };
// export default VendorSignup;

import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  FormGroup,
  Row,
  Form,
  Container,
  InputGroup,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { Formik, ErrorMessage, Field, replace } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Api from "../../Api";
import { Radio, Space, Select } from "antd";
import { useNavigate } from "react-router-dom";

const StepFirstValidation = Yup.object().shape({
  VendorName: Yup.string().required("VendorName is required"),
  BusinessName: Yup.string().required("BusinessName is required"),
  // selectCountryCode: Yup.string().required("selectCountryCode is required"),
  selectCountry: Yup.string().required("selectCountry is required"),
  selectState: Yup.string().required("selectState is required"),
});

const StepSecondValidation = Yup.object().shape({
  selectDistrict: Yup.string().required("selectDistrick is required"),
  selectCity: Yup.string().required("selectCity is required"),
  selectArea: Yup.string().required("selectArea is required"),
  selectHotelAddress: Yup.string().required("select Address is required"),
});
const StepThirdValidation = Yup.object().shape({
  selectPin: Yup.string().required("selectPin is required"),
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

  const [step, setstep] = useState("first");
  const [VendorName, setVendorName] = useState("");
  const [BusinessName, setBusinessName] = useState("");
  const [selectCountryCode, setselectCountryCode] = useState("");
  const [codeList, setcodeList] = useState([]);
  const [selectCountry, setselectCountry] = useState("");
  const [countryList, setcountryList] = useState([]);
  const [countryId, setCountryId] = useState("");

  const [selectState, setselectState] = useState("");
  const [stateId, setStateId] = useState("");
  const [stateList, setstateList] = useState([]);
  const [selectDistrict, setselectDistrict] = useState("");
  const [districtId, setdistrictId] = useState("");
  const [districtList, setdistrictList] = useState([]);
  const [selectCity, setselectCity] = useState("");
  const [cityId, setcityId] = useState("");
  const [cityList, setcityList] = useState([]);

  const [selectArea, setselectArea] = useState("");
  const [areaList, setareaList] = useState("");
  const [AreaId, setAreaId] = useState("");
  const [selectPin, setselectPin] = useState("");
  const [selectPhone, setselectPhone] = useState("");
  const [selectPassword, setselectPassword] = useState("");
  const [selectPasswordShown, setselectPasswordShown] = useState(false);
  const [selectHotelAddress, setselectHotelAddress] = useState("");
  const [registerResponse, setRegisterResponse] = useState({
    status: null,
    message: null,
  });
  const [vendorType, setVendorType] = useState("");
  const handlePasswordShown = () => {
    setselectPasswordShown(!selectPasswordShown);
  };

  useEffect(() => {
    getCountry();
  }, []);
  console.log("sdfsd", selectPin);
  const getCountry = async () => {
    await Api.get("country/getAll").then(res => {
      const country = res.data;
      setcountryList(country);
    });
  };

  const getState = async id => {
    await Api.get(`state/getState/${id}`).then(res => {
      const state = res.data;
      setstateList(state);
    });
  };
  const getDistrict = async id => {
    await Api.get(`district/getdistrict/${id}`).then(res => {
      const district = res.data;
      setdistrictList(district);
    });
  };
  const getCity = async id => {
    await Api.get(`city/getCity/${id}`).then(res => {
      const city = res.data;
      setcityList(city);
    });
  };
  const getArea = async id => {
    await Api.get(`area/getArea/${id}`).then(res => {
      const area_name = res.data;
      setareaList(area_name);
    });
  };
  const [show, setShow] = useState(false);

  const { Option } = Select;
  const submitForm = async () => {
    Api.post("vendor/register", {
      vendor_name: VendorName,
      business_name: BusinessName,
      vendorType: vendorType,
      // country_code_id: selectCountryCode,
      country_id: countryId,
      state_id: stateId,
      district_id: districtId,
      city_id: cityId,
      area_id: AreaId,
      pincode: selectPin,
      phone_number: selectPhone,
      password: selectPassword,
      address: selectHotelAddress,
    })
      .then(response => {
        console.log("response", response);
        setRegisterResponse({
          status: response.data?.status,
          message: response.data?.message,
        });
      })
      .catch(err =>
        setRegisterResponse({
          status: err.response.data?.status,
          message: err.response.data?.message,
        })
      );
  };

  // const showToast = () => {
  //   setShow(false);
  // };

  return (
    <div>
      <ToastContainer position="top-end" style={{ zIndex: 100000, marginTop: "1%" }}>
        <Toast onClose={() => setShow(false)} show={show}>
          <Toast.Header>
            <strong
              className={`me-auto text-${registerResponse?.status === "Success" ? "success" : "danger"
                }`}>
              {registerResponse?.status}
            </strong>{" "}
          </Toast.Header>
          <Toast.Body>{registerResponse?.message}</Toast.Body>
          <div className="d-flex justify-content-center mb-2 w-100">
            <Button onClick={() => navigate(-1)}>OK</Button>
          </div>
        </Toast>
      </ToastContainer>
      {step === "first" ? (
        <div>
          <Formik
            initialValues={{
              VendorName: VendorName,
              BusinessName: BusinessName,
              // selectCountryCode: selectCountryCode,
              selectCountry: selectCountry,
              selectState: selectState,
            }}
            enableReinitialize
            validationSchema={StepFirstValidation}
            onSubmit={values => {
              setstep("second");
            }}>
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
                <Col>
                  <Form>
                    <FormGroup
                      style={{ flexDirection: "column", display: "flex" }}
                      className="my-2"
                      firstInput>
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
                        onChange={e => {
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
                          }}>
                          {errors.VendorName}
                        </p>
                      )}
                    </FormGroup>
                    <FormGroup
                      style={{ flexDirection: "column", display: "flex" }}
                      className="my-2">
                      <label className="userSignUp_Input">
                        Business Name{" "}
                        <span className="mb-0" style={{ color: "red" }}>
                          *
                        </span>
                      </label>
                      <input
                        className="form-control Input shadow-none"
                        placeholder="Enter Business Name*"
                        onBlur={handleBlur("BusinessName")}
                        value={BusinessName}
                        onChange={e => {
                          setBusinessName(e.target.value);
                          setFieldValue("BusinessName", e.target.value);
                        }}
                      />
                      {touched.BusinessName && errors.BusinessName && (
                        <p
                          style={{
                            color: "red",
                            fontSize: 14,
                            padding: 0,
                            margin: 0,
                          }}>
                          {errors.BusinessName}
                        </p>
                      )}
                    </FormGroup>

                    <FormGroup
                      style={{ flexDirection: "column", display: "flex" }}
                      className="my-2">
                      <label className="userSignUp_Input">
                        Select Country{" "}
                        <span className="mb-0" style={{ color: "red" }}>
                          *
                        </span>
                      </label>
                      <Select
                        showSearch
                        name="selectCountry"
                        required
                        placeholder="Select Country"
                        onBlur={handleBlur("selectCountry")}
                        value={selectCountry || undefined}
                        onChange={e => {
                          const valueId = countryList?.find(
                            list => list.country === e
                          );
                          setCountryId(valueId.id);
                          setselectCountry(e);
                          setFieldValue("selectCountry", e);
                          getState(valueId.id);
                        }}>
                        {countryList?.map((list, i) => (
                          <Option value={list?.country} key={i}>
                            {list?.country}
                          </Option>
                        ))}
                      </Select>
                      {touched.selectCountry && errors.selectCountry && (
                        <p
                          style={{
                            color: "red",
                            fontSize: 14,
                            padding: 0,
                            margin: 0,
                          }}>
                          {errors.selectCountry}
                        </p>
                      )}
                    </FormGroup>
                    <FormGroup
                      style={{ flexDirection: "column", display: "flex" }}
                      className="my-2">
                      <label className="userSignUp_Input">
                        Select State{" "}
                        <span className="mb-0" style={{ color: "red" }}>
                          *
                        </span>
                      </label>
                      <Select
                        showSearch
                        name="selectState"
                        placeholder="Select State*"
                        onBlur={handleBlur("selectState")}
                        value={selectState || undefined}
                        onChange={e => {
                          console.log(e);
                          const valueId = stateList?.find(
                            list => list.state === e
                          );
                          setStateId(valueId.id);
                          getDistrict(valueId.id);
                          setFieldValue("selectState", e);
                        }}>
                        {stateList?.map((list, i) => (
                          <Option value={list?.state} key={i}>
                            {list?.state}
                          </Option>
                        ))}
                      </Select>
                      {touched.selectState && errors.selectState && (
                        <p
                          style={{
                            color: "red",
                            fontSize: 14,
                            padding: 0,
                            margin: 0,
                          }}>
                          {errors.selectState}
                        </p>
                      )}
                    </FormGroup>

                    <div className="d-flex justify-content-end mt-3">
                      <Button
                        className="signin-button shadow-none"
                        variant="primary"
                        onClick={handleSubmit}
                        style={{ width: "35%" }}>
                        Next
                      </Button>
                    </div>
                  </Form>
                </Col>
              </div>
            )}
          </Formik>
        </div>
      ) : step === "second" ? (
        <div>
          <Formik
            initialValues={{
              selectDistrict: selectDistrict,
              selectCity: selectCity,
              selectArea: selectArea,
              selectHotelAddress: selectHotelAddress,
            }}
            enableReinitialize
            validationSchema={StepSecondValidation}
            onSubmit={values => {
              console.log(values);
              setstep("third");
            }}>
            {({
              touched,
              errors,
              values,
              handleBlur,
              handleSubmit,
              setFieldValue,
            }) => (
              <div className="my-3">
                <Form>
                  <FormGroup
                    style={{ flexDirection: "column", display: "flex" }}
                    className="my-3">
                    <label className="userSignUp_Input">
                      Select District{" "}
                      <span className="mb-0" style={{ color: "red" }}>
                        *
                      </span>
                    </label>
                    <Select
                      showSearch
                      name="selectDistrict"
                      placeholder="Select District*"
                      allowclear="true"
                      onBlur={handleBlur("selectDistrict")}
                      value={selectDistrict || undefined}
                      onChange={e => {
                        console.log(e);
                        const valueId = districtList?.find(
                          list => list.district === e
                        );
                        setselectDistrict(e);
                        setdistrictId(valueId.id);
                        getCity(valueId.id);
                        setFieldValue("selectDistrict", e);
                      }}>
                      {districtList?.map((list, i) => (
                        <Option value={list?.district} key={i}>
                          {" "}
                          {list?.district}
                        </Option>
                      ))}
                    </Select>
                    {touched.selectDistrict && errors.selectDistrict && (
                      <p
                        style={{
                          color: "red",
                          fontSize: 14,
                          padding: 0,
                          margin: 0,
                        }}>
                        {errors.selectDistrict}
                      </p>
                    )}
                  </FormGroup>

                  <FormGroup
                    style={{ flexDirection: "column", display: "flex" }}
                    className="my-2">
                    <label className="userSignUp_Input">
                      Select City{" "}
                      <span className="mb-0" style={{ color: "red" }}>
                        *
                      </span>
                    </label>
                    <Select
                      showSearch
                      name="selectCity"
                      placeholder="Select City*"
                      allowclear="true"
                      onBlur={handleBlur("selectCity")}
                      value={selectCity || undefined}
                      onChange={e => {
                        console.log(e);
                        setFieldValue("selectCity", e);
                        const valueId = cityList?.find(list => list.city === e);
                        setselectCity(e);
                        getArea(valueId.id);
                        setcityId(valueId.id);
                      }}>
                      {cityList?.map((list, i) => (
                        <Option value={list?.city} key={i}>
                          {list?.city}
                        </Option>
                      ))}
                    </Select>
                    {touched.selectCity && errors.selectCity && (
                      <p
                        style={{
                          color: "red",
                          fontSize: 14,
                          padding: 0,
                          margin: 0,
                        }}>
                        {errors.selectCity}
                      </p>
                    )}
                  </FormGroup>
                  <FormGroup
                    style={{ flexDirection: "column", display: "flex" }}
                    className="my-2"
                    firstInput>
                    <label className="userSignUp_Input">
                      Area{" "}
                      <span className="mb-0" style={{ color: "red" }}>
                        *
                      </span>
                    </label>
                    <Select
                      showSearch
                      name="selectArea"
                      placeholder="Select Area Name*"
                      allowclear="true"
                      onBlur={handleBlur("selectArea")}
                      value={selectArea || undefined}
                      onChange={e => {
                        setFieldValue("selectArea", e);
                        const valueId = areaList?.find(
                          list => list.area_name === e
                        );

                        setselectArea(e);
                        setAreaId(valueId.area_id);
                      }}>
                      {areaList &&
                        areaList?.map((list, i) => (
                          <Option value={list.area_name} key={i}>
                            {list?.area_name}
                          </Option>
                        ))}
                    </Select>
                    {touched.selectArea && errors.selectArea && (
                      <p
                        style={{
                          color: "red",
                          fontSize: 14,
                          padding: 0,
                          margin: 0,
                        }}>
                        {errors.selectArea}
                      </p>
                    )}
                  </FormGroup>
                  <FormGroup
                    style={{ flexDirection: "column", display: "flex" }}
                    className="my-2"
                    firstInput>
                    <label className="userSignUp_Input">
                      Address{" "}
                      <span className="mb-0" style={{ color: "red" }}>
                        *
                      </span>
                    </label>
                    <textarea
                      className="form-control Input shadow-none"
                      placeholder="Enter Hotel Address*"
                      allowclear="true"
                      onBlur={handleBlur("selectHotelAddress")}
                      value={selectHotelAddress}
                      onChange={e => {
                        setselectHotelAddress(e.target.value);
                        setFieldValue("selectHotelAddress", e.target.value);
                      }}
                    />
                    {touched.selectHotelAddress && errors.selectHotelAddress && (
                      <p
                        style={{
                          color: "red",
                          fontSize: 14,
                          padding: 0,
                          margin: 0,
                        }}>
                        {errors.selectHotelAddress}
                      </p>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <div className="submitButton mt-3">
                      <Button
                        className="signin-button shadow-none"
                        variant="primary"
                        onClick={() => setstep("first")}
                        style={{ width: "35%" }}>
                        Back
                      </Button>
                      <Button
                        className="signin-button shadow-none"
                        variant="primary"
                        onClick={handleSubmit}
                        style={{ width: "35%" }}>
                        Next
                      </Button>
                    </div>
                  </FormGroup>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      ) : (
        step === "third" && (
          <div>
            <Formik
              initialValues={{
                selectPin: selectPin,
                selectPhone: selectPhone,
                selectPassword: selectPassword,
              }}
              enableReinitialize
              validationSchema={StepThirdValidation}
              onSubmit={values => {
                submitForm("third");
                setShow(true);
              }}>
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
                      className="my-2">
                      <label className="userSignUp_Input">
                        Pincode{" "}
                        <span className="mb-0" style={{ color: "red" }}>
                          *
                        </span>
                      </label>
                      <input
                        name="selectPin"
                        className="form-control shadow-none"
                        required
                        type="number"
                        placeholder="Enter Pincode*"
                        onBlur={handleBlur("selectPin")}
                        value={selectPin}
                        onChange={e => {
                          console.log("eeeee", e.target.value);
                          setselectPin(e.target.value);
                          setFieldValue("selectPin", e.target.value);
                        }}></input>
                      {touched.selectPin && errors.selectPin && (
                        <p
                          style={{
                            color: "red",
                            fontSize: 14,
                            padding: 0,
                            margin: 0,
                          }}>
                          {errors.selectPin}
                        </p>
                      )}
                    </FormGroup>
                    <FormGroup
                      style={{ flexDirection: "column", display: "flex" }}
                      className="my-2">
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
                        onChange={e => {
                          setselectPhone(e.target.value);
                          setFieldValue("selectPhone", e.target.value);
                        }}></input>
                      {touched.selectPhone && errors.selectPhone && (
                        <p
                          style={{
                            color: "red",
                            fontSize: 14,
                            padding: 0,
                            margin: 0,
                          }}>
                          {errors.selectPhone}
                        </p>
                      )}
                    </FormGroup>

                    <FormGroup
                      style={{ flexDirection: "column", display: "flex" }}
                      className="my-3">
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
                          onChange={e => {
                            setselectPassword(e.target.value);
                            setFieldValue("selectPassword", e.target.value);
                          }}
                          onCopy={e => {
                            e.preventDefault();
                          }}
                          onPaste={e => {
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
                          }}>
                          {errors.selectPassword}
                        </p>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <div className="submitButton mt-3">
                        <Button
                          className="signin-button shadow-none"
                          variant="primary"
                          onClick={() => setstep("second")}
                          style={{ width: "35%" }}>
                          Back
                        </Button>
                        <Button
                          className="signin-button shadow-none"
                          variant="primary"
                          onClick={handleSubmit}
                          style={{ width: "35%" }}>
                          Submit
                        </Button>
                      </div>
                    </FormGroup>
                  </Form>
                </div>
              )}
            </Formik>
          </div>
        )
      )}
    </div>
  );
};
export default VendorSignup;
