// import React, { useState, useEffect } from "react";
// import {
//   Button,
//   Col,
//   FormGroup,
//   Form,
//   InputGroup,
//   Toast,
//   ToastContainer,
// } from "react-bootstrap";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import { Select } from "antd";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import Api from "../../Api";
// import { useNavigate } from "react-router-dom";

// const StepFirstValidation = Yup.object().shape({
//   IyerName: Yup.string().required("IyerName is required"),
//   selectCountry: Yup.string().required("selectCountry is required"),
//   selectState: Yup.string().required("selectState is required"),
//   selectDistrict: Yup.string().required("selectDistrict is required"),
//   selectCity: Yup.string().required("selectCity is required"),
// });

// const StepSecondValidation = Yup.object().shape({
//   selectArea: Yup.string().required("selectArea is required"),
//   selectPin: Yup.string().required("selectPin is required"),
//   selectPhone: Yup.string()
//     .min(10, "phonenumber must be 10 digit")
//     .max(10, "phonenumber must be 10 digit")
//     .required("PhoneNumber is required"),
//   selectSecondPhone: Yup.string()
//     .nullable()
//     .min(10, "phonenumber must be 10 digit")
//     .max(10, "phonenumber must be 10 digit"),

//   selectHotelAddress: Yup.string().required("Address is required"),
// });

// const StepThirdValidation = Yup.object().shape({
//   selectWhatsapp: Yup.string()
//     .nullable()
//     .min(10, "phonenumber must be 10 digit")
//     .max(10, "phonenumber must be 10 digit"),
//   selectEmail: Yup.string()
//     .nullable()
//     .email("Please enter valid email"),
//   selectPassword: Yup.string()
//     .min(6, "Password must be 6 characters")
//     .required("Password is required"),
//   selectInFunction: Yup.string().required("Inside Function is required"),
//   selectOutFunction: Yup.string().required("Outside Function is required"),
// });

// const IyerSignup = () => {
//   const navigate = useNavigate();
//   const [step, setstep] = useState("first");
//   const [IyerName, setIyerName] = useState("");
//   const [selectCountry, setselectCountry] = useState("");
//   const [countryList, setcountryList] = useState([]);
//   const [conutryId, setCountryId] = useState("");

//   const [selectState, setselectState] = useState("");
//   const [StateList, setStateList] = useState([]);
//   const [stateId, setStateId] = useState("");
//   const [selectDistrict, setselectDistrict] = useState("");

//   const [districtId, setdistrictId] = useState("");
//   const [districtList, setdistrictList] = useState([]);
//   const [selectCity, setselectCity] = useState("");
//   const [cityList, setcityList] = useState([]);
//   const [CityId, setCityId] = useState([]);
//   const [selectOutFunction, setselectOutFunction] = useState("");
//   const [OutFunctionList, setOutFunctionList] = useState([]);
//   const [selectInFunction, setselectInFunction] = useState("");
//   const [InFunctionList, setInFunctionList] = useState([]);
//   const [AreaId, setAreaId] = useState([]);
//   const [selectArea, setselectArea] = useState("");
//   const [areaList, setareaList] = useState("");
//   const [selectPin, setselectPin] = useState("");
//   const [selectEmail, setselectEmail] = useState("");
//   const [selectPhone, setselectPhone] = useState("");
//   const [selectSecondPhone, setselectSecondPhone] = useState("");
//   const [selectPassword, setselectPassword] = useState("");
//   const [selectPasswordShown, setselectPasswordShown] = useState(false);
//   const [selectHotelAddress, setselectHotelAddress] = useState("");
//   const [registerResponse, setRegisterResponse] = useState({
//     status: null,
//     message: null,
//   });
//   console.log(
//     "🚀 ~ file: IyerSignup.js:920 ~ IyerSignup ~ registerResponse",
//     registerResponse
//   );
//   console.log(selectOutFunction);
//   const handlePasswordShown = () => {
//     setselectPasswordShown(!selectPasswordShown);
//   };

//   useEffect(() => {
//     getCountry();
//   }, []);

//   const getCountry = async () => {
//     await Api.get("country/getAll").then((res) => {
//       const country = res.data;
//       setcountryList(country);
//     });
//   };
//   const getstate = async (id) => {
//     await Api.get(`state/getState/${id}`).then((res) => {
//       const state = res.data;
//       setStateList(state);
//     });
//   };
//   const getDistrict = async (id) => {
//     await Api.get(`district/getdistrict/${id}`).then((res) => {
//       const district = res.data;
//       setdistrictList(district);
//     });
//   };
//   const getCity = async (id) => {
//     await Api.get(`city/getCity/${id}`).then((res) => {
//       const city = res.data;
//       setcityList(city);
//     });
//   };
//   const getArea = async (id) => {
//     await Api.get(`area/getArea/${id}`).then((res) => {
//       const area = res.data;
//       setareaList(area);
//     });
//   };

//   // const getInFunction = async (id) => {
//   //   await Api.get(`insidefunction/getall`).then((res) => {
//   //     // console.log(res.data)
//   //     const InFunction = res.data;
//   //     setInFunctionList(InFunction);
//   //   });
//   // };
//   // const getOutFunction = async (id) => {
//   //   await Api.get(`functionOutsideTemple/getAll`).then((res) => {
//   //     console.log(res.data);
//   //     const OutFunction = res.data;
//   //     setOutFunctionList(OutFunction);
//   //   });
//   // };

//   const { Option } = Select;
//   const [show, setShow] = useState(false);

//   const submitForm = async () => {
//     console.log("object");
//     Api.post(`${process.env.REACT_APP_DEV_BASE_URL}/iyer/register`, {
//       name: IyerName,
//       country: conutryId,
//       state: stateId,
//       district: districtId,
//       city: CityId,
//       inside_temple: selectInFunction,
//       outside_temple: selectOutFunction,
//       area: AreaId,
//       // address: selectHotelAddress,
//       pincode: selectPin,
//       phone: selectPhone,
//       // secondary_number: selectSecondPhone,
//       // whatsapp_number: selectWhatsapp,
//       email: selectEmail,
//       password: selectPassword,
//       // aboutyourself: selectAbout,
//       // language_name:selectLaungauge
//     })
//       .then((res) => {
//         console.log("response iyer", res);
//         setRegisterResponse({
//           status: res.data?.status,
//           message: res.data?.message,
//         });
//       })
//       .catch((err) =>
//         setRegisterResponse({
//           status: err.response.data?.status,
//           message: err.response.data?.message,
//         })
//       );
//   };

//   return (
//     <div>
//       <ToastContainer position="top-center">
//         <Toast onClose={() => setShow(false)} show={show}>
//           <Toast.Header>
//             <strong
//               className={`me-auto text-${
//                 registerResponse?.status === "Success" ? "success" : "danger"
//               }`}
//             >
//               {registerResponse?.status}
//             </strong>
//           </Toast.Header>
//           <Toast.Body>{registerResponse?.message}</Toast.Body>
//           <div className="d-flex justify-content-center mb-2 w-100">
//             <Button onClick={() => navigate(-1)}>OK</Button>
//           </div>
//         </Toast>
//       </ToastContainer>
//       {step === "first" ? (
//         <div>
//           <Formik
//             initialValues={{
//               IyerName: IyerName,
//               selectCountry: selectCountry,
//               selectState: selectState,
//               selectDistrict: selectDistrict,
//               selectCity: selectCity,
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
//                     >
//                       <label className="firstInput">
//                         Iyer Name{" "}
//                         <span className="mb-0" style={{ color: "red" }}>
//                           *
//                         </span>
//                       </label>
//                       <input
//                         className="form-control Input shadow-none"
//                         placeholder="Enter Iyer Name*"
//                         allowclear="true"
//                         onBlur={handleBlur("IyerName")}
//                         value={IyerName}
//                         onChange={(e) => {
//                           console.log(e.target.value);
//                           setIyerName(e.target.value);
//                           setFieldValue("IyerName", e.target.value);
//                         }}
//                       />
//                       {touched.IyerName && errors.IyerName && (
//                         <p
//                           style={{
//                             color: "red",
//                             fontSize: 14,
//                             padding: 0,
//                             margin: 0,
//                           }}
//                         >
//                           {errors.IyerName}
//                         </p>
//                       )}
//                     </FormGroup>
//                     <FormGroup
//                       style={{ flexDirection: "column", display: "flex" }}
//                       className="my-2"
//                     >
//                       <label className="firstInput">
//                         Select Country{" "}
//                         <span className="mb-0" style={{ color: "red" }}>
//                           *
//                         </span>
//                       </label>
//                       <Select
//                         showSearch
//                         name="selectCountry"
//                         required
//                         placeholder="Select Country*"
//                         allowclear="true"
//                         onBlur={handleBlur("selectCountry")}
//                         value={selectCountry || undefined}
//                         onChange={(e) => {
//                           const valueId = countryList?.find(
//                             (list) => list.country === e
//                           );
//                           console.log(e);
//                           setselectCountry(e);
//                           setCountryId(valueId.id);
//                           setFieldValue("selectCountry", e);
//                           getstate(valueId.id);
//                         }}
//                       >
//                         {countryList?.map((list, i) => (
//                           <Option value={list?.country} key={i}>
//                             {list?.country}
//                           </Option>
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
//                       <label className="firstInput">
//                         Select State{" "}
//                         <span className="mb-0" style={{ color: "red" }}>
//                           *
//                         </span>
//                       </label>
//                       <Select
//                         showSearch
//                         name="selectState"
//                         placeholder="Select State*"
//                         onBlur={handleBlur("selectState")}
//                         value={selectState || undefined}
//                         onChange={(e) => {
//                           const valueId = StateList?.find(
//                             (list) => list.state === e
//                           );
//                           console.log(e);
//                           setselectState(e);
//                           getDistrict(valueId.id);
//                           setStateId(valueId.id);
//                           setFieldValue("selectState", e);
//                         }}
//                       >
//                         {StateList?.map((list, i) => (
//                           <Option value={list?.state} k={i}>
//                             {list?.state}
//                           </Option>
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
//                     <FormGroup
//                       style={{ flexDirection: "column", display: "flex" }}
//                       className="my-3"
//                     >
//                       <label className="firstInput">
//                         Select District{" "}
//                         <span className="mb-0" style={{ color: "red" }}>
//                           *
//                         </span>
//                       </label>
//                       <Select
//                         showSearch
//                         name="selectDistrict"
//                         placeholder="Select District*"
//                         allowclear="true"
//                         onBlur={handleBlur("selectDistrict")}
//                         value={selectDistrict || undefined}
//                         onChange={(e) => {
//                           console.log(e);
//                           const valueId = districtList?.find(
//                             (list) => list.district === e
//                           );
//                           setselectDistrict(e);
//                           setdistrictId(valueId.id);
//                           getCity(valueId.id);
//                           setFieldValue("selectDistrict", e);
//                         }}
//                       >
//                         {districtList?.map((list, i) => (
//                           <Option value={list?.district} key={i}>
//                             {" "}
//                             {list?.district}
//                           </Option>
//                         ))}
//                       </Select>
//                       {touched.selectDistrict && errors.selectDistrict && (
//                         <p
//                           style={{
//                             color: "red",
//                             fontSize: 14,
//                             padding: 0,
//                             margin: 0,
//                           }}
//                         >
//                           {errors.selectDistrict}
//                         </p>
//                       )}
//                     </FormGroup>

//                     <FormGroup
//                       style={{ flexDirection: "column", display: "flex" }}
//                       className="my-2"
//                     >
//                       <label className="firstInput">
//                         Select City{" "}
//                         <span className="mb-0" style={{ color: "red" }}>
//                           *
//                         </span>
//                       </label>
//                       <Select
//                         showSearch
//                         name="selectCity"
//                         placeholder="Select City*"
//                         allowclear="true"
//                         onBlur={handleBlur("selectCity")}
//                         value={selectCity || undefined}
//                         onChange={(e) => {
//                           console.log(e);
//                           setFieldValue("selectCity", e);
//                           const valueId = cityList?.find(
//                             (list) => list.city === e
//                           );
//                           setselectCity(e);
//                           getArea(valueId.id);
//                           setCityId(valueId.id);
//                         }}
//                       >
//                         {cityList?.map((list, i) => (
//                           <Option value={list.city} key={i}>
//                             {list?.city}
//                           </Option>
//                         ))}
//                       </Select>
//                       {touched.selectCity && errors.selectCity && (
//                         <p
//                           style={{
//                             color: "red",
//                             fontSize: 14,
//                             padding: 0,
//                             margin: 0,
//                           }}
//                         >
//                           {errors.selectCity}
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
//       ) : (
//         <div>
//           <Formik
//             initialValues={{
//               selectArea: selectArea,
//               selectPin: selectPin,
//               selectPhone: selectPhone,
//               selectSecondPhone: selectSecondPhone,
//               selectHotelAddress: selectHotelAddress,
//             }}
//             enableReinitialize
//             validationSchema={StepSecondValidation}
//             onSubmit={(values) => {
//               submitForm();
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
//                 <Form>
//                   <FormGroup
//                     style={{ flexDirection: "column", display: "flex" }}
//                     className="my-2"
//                   >
//                     <label className="firstInput">
//                       Area{" "}
//                       <span className="mb-0" style={{ color: "red" }}>
//                         *
//                       </span>
//                     </label>
//                     <Select
//                       showSearch
//                       name="selectArea"
//                       placeholder="Select Area Name*"
//                       allowclear="true"
//                       onBlur={handleBlur("selectArea")}
//                       value={selectArea || undefined}
//                       onChange={(e) => {
//                         setFieldValue("selectArea", e);
//                         const valueId = areaList?.find(
//                           (list) => list.area_name === e
//                         );

//                         setselectArea(e);
//                         setAreaId(valueId.area_id);
//                       }}
//                     >
//                       {areaList?.map((list, i) => (
//                         <Option value={list.area_name} key={i}>
//                           {list?.area_name}
//                         </Option>
//                       ))}
//                     </Select>
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
//                   >
//                     <label className="firstInput">
//                       Pincode{" "}
//                       <span className="mb-0" style={{ color: "red" }}>
//                         *
//                       </span>
//                     </label>
//                     <input
//                       name="selectPin"
//                       type="number"
//                       className="form-control Input shadow-none"
//                       placeholder="Enter Pincode*"
//                       onBlur={handleBlur("selectPin")}
//                       value={selectPin}
//                       onChange={(e) => {
//                         console.log(e.target.value);
//                         setselectPin(e.target.value);
//                         setFieldValue("selectPin", e.target.value);
//                       }}
//                     />
//                     {touched.selectPin && errors.selectPin && (
//                       <p
//                         style={{
//                           color: "red",
//                           fontSize: 14,
//                           padding: 0,
//                           margin: 0,
//                         }}
//                       >
//                         {errors.selectPin}
//                       </p>
//                     )}
//                   </FormGroup>
//                   <FormGroup
//                     style={{ flexDirection: "column", display: "flex" }}
//                     className="my-3"
//                   >
//                     <label className="firstInput">
//                       Phone Number{" "}
//                       <span className="mb-0" style={{ color: "red" }}>
//                         *
//                       </span>
//                     </label>
//                     <input
//                       className="form-control shadow-none"
//                       name="selectPhone"
//                       type="number"
//                       placeholder="Enter PhoneNumber*"
//                       onBlur={handleBlur("selectPhone")}
//                       value={selectPhone}
//                       onChange={(e) => {
//                         console.log(e.target.value);
//                         setselectPhone(e.target.value);
//                         setFieldValue("selectPhone", e.target.value);
//                       }}
//                     ></input>
//                     {touched.selectPhone && errors.selectPhone && (
//                       <p
//                         style={{
//                           color: "red",
//                           fontSize: 14,
//                           padding: 0,
//                           margin: 0,
//                         }}
//                       >
//                         {errors.selectPhone}
//                       </p>
//                     )}
//                   </FormGroup>

//                   {/* <FormGroup
//                     style={{ flexDirection: "column", display: "flex" }}
//                     className="my-3"
//                   >
//                     <label className="firstInput">Secondary Number </label>
//                     <input
//                       className="form-control shadow-none"
//                       type="number"
//                       name="selectSecondPhone"
//                       placeholder="Enter Secondary PhoneNumber*"
//                       onBlur={handleBlur("selectSecondPhone")}
//                       value={selectSecondPhone}
//                       onChange={e => {
//                         console.log(e.target.value);
//                         setselectSecondPhone(e.target.value);
//                         setFieldValue("selectSecondPhone", e.target.value);
//                       }}
//                     ></input>
//                     {touched.selectSecondPhone && errors.selectSecondPhone && (
//                       <p
//                         style={{
//                           color: "red",
//                           fontSize: 14,
//                           padding: 0,
//                           margin: 0,
//                         }}
//                       >
//                         {errors.selectSecondPhone}
//                       </p>
//                     )}
//                   </FormGroup> */}

//                   {/* <FormGroup
//                     style={{ flexDirection: "column", display: "flex" }}
//                     className="my-2"
//                   >
//                     <label className="firstInput">
//                       Address{" "}
//                       <span className="mb-0" style={{ color: "red" }}>
//                         *
//                       </span>
//                     </label>
//                     <textarea
//                       name="selectHotelAddress"
//                       className="form-control Input shadow-none"
//                       placeholder="Enter Address*"
//                       onBlur={handleBlur("selectHotelAddress")}
//                       value={selectHotelAddress}
//                       onChange={(e) => {
//                         console.log(e.target.value);
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
//                   </FormGroup> */}
//                   {/* <FormGroup
//                     style={{ flexDirection: "column", display: "flex" }}
//                     className="my-2"
//                   >
//                     <label className="firstInput">
//                       About Your Self{" "}
//                       <span className="mb-0" style={{ color: "red" }}>
//                         *
//                       </span>
//                     </label>
//                     <input
//                       name="selectAbout"
//                       className="form-control Input shadow-none"
//                       placeholder="Enter About Your Self*"
//                       onBlur={handleBlur("selectAboutYourSelf")}
//                       value={selectAbout}
//                       onChange={e => {
//                         console.log(e.target.value);
//                         setselectAbout(e.target.value);
//                         setFieldValue("selectAbout", e.target.value);
//                       }}
//                     />
//                     {touched.selectAbout && errors.selectAbout && (
//                       <p
//                         style={{
//                           color: "red",
//                           fontSize: 14,
//                           padding: 0,
//                           margin: 0,
//                         }}
//                       >
//                         {errors.selectAbout}
//                       </p>
//                     )}
//                   </FormGroup> */}
//                   <FormGroup
//                     style={{ flexDirection: "column", display: "flex" }}
//                     className="my-3"
//                   >
//                     <label className="firstInput">Email</label>
//                     <input
//                       name="selectEmail"
//                       className="form-control shadow-none"
//                       type="email"
//                       placeholder="Enter Email*"
//                       onBlur={handleBlur("selectEmail")}
//                       value={selectEmail}
//                       onChange={(e) => {
//                         console.log(e.target.value);
//                         setselectEmail(e.target.value);
//                         setFieldValue("selectEmail", e.target.value);
//                       }}
//                     ></input>
//                     {touched.selectEmail && errors.selectEmail && (
//                       <p
//                         style={{
//                           color: "red",
//                           fontSize: 14,
//                           padding: 0,
//                           margin: 0,
//                         }}
//                       >
//                         {errors.selectEmail}
//                       </p>
//                     )}
//                   </FormGroup>
//                   <FormGroup
//                     style={{ flexDirection: "column", display: "flex" }}
//                     className="my-3"
//                   >
//                     <label className="firstInput">
//                       Password{" "}
//                       <span className="mb-0" style={{ color: "red" }}>
//                         *
//                       </span>
//                     </label>
//                     <InputGroup>
//                       <input
//                         name="selectPassword"
//                         className="form-control shadow-none"
//                         type={selectPasswordShown ? "text" : "password"}
//                         placeholder="Enter Password*"
//                         onBlur={handleBlur("selectPassword")}
//                         value={values.selectPassword}
//                         onChange={(e) => {
//                           setselectPassword(e.target.value);
//                           setFieldValue("selectPassword", e.target.value);
//                         }}
//                         onCopy={(e) => {
//                           e.preventDefault();
//                         }}
//                         onPaste={(e) => {
//                           e.preventDefault();
//                         }}
//                       />
//                       <InputGroup.Text>
//                         <FontAwesomeIcon
//                           icon={selectPasswordShown ? faEye : faEyeSlash}
//                           onClick={() => handlePasswordShown()}
//                           size="1x"
//                           style={{ cursor: "pointer" }}
//                         />
//                       </InputGroup.Text>
//                     </InputGroup>
//                     {touched.selectPassword && errors.selectPassword && (
//                       <p
//                         style={{
//                           color: "red",
//                           fontSize: 14,
//                           padding: 0,
//                           margin: 0,
//                         }}
//                       >
//                         {errors.selectPassword}
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
//                         submit
//                       </Button>
//                     </div>
//                   </FormGroup>
//                 </Form>
//               </div>
//             )}
//           </Formik>
//         </div>
//       )}
//     </div>
//   );
// };

// export default IyerSignup;

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
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Api from "../../Api";
import { userLoginAction } from "../../Redux/Actions/UserAction";

const StepFirstValidation = Yup.object().shape({
  Name: Yup.string().required("Name is required"),
  selectCountry: Yup.string().required("Country Name is required"),
  selectState: Yup.string().required("State Name is required"),
  selectDistrict: Yup.string().required("District Name is required"),
  selectCity: Yup.string().required("City Name is required"),
});

const StepSecondValidation = Yup.object().shape({
  selectArea: Yup.string().required("Area Name is required"),
  selectPin: Yup.string().required("Pin is required"),
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

const IyerSignup = () => {
  const [step, setstep] = useState("first");
  const [Name, setName] = useState("");
  const [selectCountry, setselectCountry] = useState("");
  const [countryList, setcountryList] = useState([]);
  const [countryId, setCountryId] = useState("");
  const [selectState, setselectState] = useState("");
  const [stateId, setStateId] = useState("");
  const [stateList, setstateList] = useState([]);
  const [selectDistrict, setselectDistrict] = useState("");
  const [districtList, setdistrictList] = useState([]);

  const [districtId, setdistrictId] = useState([]);
  const [selectCity, setselectCity] = useState("");
  // const [cityId, setcountryId] = useState("");
  const [CityId, setCityId] = useState([]);
  const [cityList, setcityList] = useState([]);
  const [selectArea, setselectArea] = useState("");
  const [areaList, setareaList] = useState("");
  const [AreaId, setAreaId] = useState("");
  const [selectPin, setselectPin] = useState("");
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

  useEffect(() => {
    getCountry();
  }, []);

  const getCountry = async () => {
    await Api.get("country/getAll").then((res) => {
      const country = res.data;
      setcountryList(country);
    });
  };

  const getState = async (id) => {
    await Api.get(`state/getState/${id}`).then((res) => {
      const state = res.data;
      setstateList(state);
    });
  };

  const getDistrict = async (id) => {
    await Api.get(`district/getdistrict/${id}`).then((res) => {
      const district = res.data;
      setdistrictList(district);
    });
  };
  const getCity = async (id) => {
    await Api.get(`city/getCity/${id}`).then((res) => {
      const city = res.data;
      console.log(res);
      setcityList(city);
    });
  };
  const getArea = async (id) => {
    await Api.get(`area/getArea/${id}`).then((res) => {
      const area_name = res.data;
      setareaList(area_name);
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Option } = Select;

  const [show, setShow] = useState(false);

  const submitForm = async () => {
    Api.post("iyer/register", {
      name: Name,
      country: countryId,
      state: stateId,
      district: districtId,
      city: CityId,
      area: AreaId,
      pincode: selectPin,
      email: selectEmail,
      phone: selectPhone,
      password: selectPassword,
    })
      .then((res) => {
        console.log("res", res);
        setRegisterResponse({
          status: res.data?.status,
          message: res.data?.message,
        });
        setTimeout(() => {
          navigate("/login");
        }, 700);
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

      {step === "first" ? (
        <div>
          <Formik
            initialValues={{
              Name: Name,
              selectCountry: selectCountry,
              selectState: selectState,
              selectDistrict: selectDistrict,
              selectCity: selectCity,
            }}
            enableReinitialize
            validationSchema={StepFirstValidation}
            onSubmit={(values) => {
              setstep("second");
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
                <Col>
                  <Form>
                    <FormGroup
                      style={{ flexDirection: "column", display: "flex" }}
                      className="my-3 "
                    >
                      <label className="firstInput">
                        Iyer Name
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
                      <label className="firstInput">
                        Select Country{" "}
                        <span className="mb-0" style={{ color: "red" }}>
                          *
                        </span>
                      </label>
                      <Select
                        showSearch
                        className=" shadow-none"
                        name="selectCountry"
                        required
                        placeholder="Select Country Name*"
                        allowclear="true"
                        onBlur={handleBlur("selectCountry")}
                        value={selectCountry || undefined}
                        onChange={(e) => {
                          const valueId = countryList?.find(
                            (list) => list.country === e
                          );
                          setselectCountry(e);
                          setCountryId(valueId.id);
                          setFieldValue("selectCountry", e);
                          getState(valueId.id);
                        }}
                      >
                        {countryList?.map((list, i) => {
                          // console.log(list)
                          return (
                            <Option value={list?.country} key={i}>
                              {list?.country}
                            </Option>
                          );
                        })}
                      </Select>
                      {touched.selectCountry && errors.selectCountry && (
                        <p
                          style={{
                            color: "red",
                            fontSize: 14,
                            padding: 0,
                            margin: 0,
                          }}
                        >
                          {errors.selectCountry}
                        </p>
                      )}
                    </FormGroup>
                    <FormGroup
                      style={{ flexDirection: "column", display: "flex" }}
                      className="my-3"
                    >
                      <label className="firstInput">
                        Select State{" "}
                        <span className="mb-0" style={{ color: "red" }}>
                          *
                        </span>
                      </label>
                      <Select
                        showSearch
                        name="selectState"
                        placeholder="Select State Name"
                        allowclear="true"
                        onBlur={handleBlur("selectState")}
                        value={selectState || undefined}
                        onChange={(e) => {
                          console.log(e);
                          const valueId = stateList?.find(
                            (list) => list.state === e
                          );
                          setselectState(e);
                          setStateId(valueId.id);
                          getDistrict(valueId.id);
                          setFieldValue("selectState", e);
                        }}
                      >
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
                          }}
                        >
                          {errors.selectState}
                        </p>
                      )}
                    </FormGroup>

                    <FormGroup
                      style={{ flexDirection: "column", display: "flex" }}
                      className="my-3"
                    >
                      <label className="firstInput">
                        Select District{" "}
                        <span className="mb-0" style={{ color: "red" }}>
                          *
                        </span>
                      </label>
                      <Select
                        showSearch
                        name="selectDistrict"
                        placeholder="Select District Name*"
                        allowclear="true"
                        className="district shadow-none"
                        onBlur={handleBlur("selectDistrict")}
                        value={selectDistrict || undefined}
                        onChange={(e) => {
                          console.log(e);
                          const valueId = districtList?.find(
                            (list) => list.district === e
                          );
                          setselectDistrict(e);
                          setdistrictId(valueId.id);
                          getCity(valueId.id);
                          setFieldValue("selectDistrict", e);
                        }}
                      >
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
                          }}
                        >
                          {errors.selectDistrict}
                        </p>
                      )}
                    </FormGroup>

                    <FormGroup
                      style={{ flexDirection: "column", display: "flex" }}
                      className="my-3"
                    >
                      <label className="firstInput">
                        Select City{" "}
                        <span className="mb-0" style={{ color: "red" }}>
                          *
                        </span>
                      </label>
                      <Select
                        showSearch
                        name="selectCity"
                        placeholder="Select City Name*"
                        allowclear="true"
                        onBlur={handleBlur("selectCity")}
                        value={selectCity || undefined}
                        onChange={(e) => {
                          console.log("wef", e);
                          setFieldValue("selectCity", e);
                          const valueId = cityList?.find(
                            (list) => list.city === e
                          );
                          setselectCity(e);
                          getArea(valueId.id);
                          setCityId(valueId.id);
                        }}
                      >
                        {cityList?.map((list, i) => (
                          <Option value={list.city} key={i}>
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
                          }}
                        >
                          {errors.selectCity}
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
                        Next
                      </Button>
                    </div>
                  </Form>
                </Col>
              </div>
            )}
          </Formik>
        </div>
      ) : (
        <div>
          <Formik
            initialValues={{
              selectArea: selectArea,
              selectPin: selectPin,
              selectEmail: selectEmail,
              selectPhone: selectPhone,
              selectPassword: selectPassword,
            }}
            enableReinitialize
            validationSchema={StepSecondValidation}
            onSubmit={(values) => {
              submitForm();
              setShow(true);
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
                    className="my-3 "
                  >
                    <label className="firstInput">
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
                      onChange={(e) => {
                        // console.log("wef",e)
                        setFieldValue("selectArea", e);
                        const valueId = areaList?.find(
                          (list) => list.area_name === e
                        );

                        console.log(valueId.area_id);
                        setselectArea(e);
                        setAreaId(valueId.area_id);
                      }}
                    >
                      {areaList?.map((list, i) => (
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
                        }}
                      >
                        {errors.selectArea}
                      </p>
                    )}
                  </FormGroup>
                  <FormGroup
                    style={{ flexDirection: "column", display: "flex" }}
                    className="my-3"
                  >
                    <label className="firstInput">
                      PinCode{" "}
                      <span className="mb-0" style={{ color: "red" }}>
                        *
                      </span>
                    </label>
                    <input
                      name="selectPin"
                      className="form-control Userpincode shadow-none"
                      required
                      type="number"
                      placeholder="Enter Pincode*"
                      onBlur={handleBlur("selectPin")}
                      value={selectPin}
                      onChange={(e) => {
                        setselectPin(e.target.value);
                        setFieldValue("selectPin", e.target.value);
                      }}
                    ></input>
                    {touched.selectPin && errors.selectPin && (
                      <p
                        style={{
                          color: "red",
                          fontSize: 14,
                          padding: 0,
                          margin: 0,
                        }}
                      >
                        {errors.selectPin}
                      </p>
                    )}
                  </FormGroup>
                  <FormGroup
                    style={{ flexDirection: "column", display: "flex" }}
                    className="my-3"
                  >
                    <label className="firstInput">
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
                    <label className="firstInput">
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
                    <label className="firstInput">
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
                  <div className="submitButton mt-4">
                    <Button
                      className="signin-button shadow-none"
                      variant="primary"
                      onClick={() => setstep("first")}
                      style={{ width: "35%" }}
                    >
                      Back
                    </Button>
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
              </div>
            )}
          </Formik>
        </div>
      )}
    </div>
  );
};
export default IyerSignup;
