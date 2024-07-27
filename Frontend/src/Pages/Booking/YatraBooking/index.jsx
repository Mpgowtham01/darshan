import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { LuClock3 } from "react-icons/lu";
import {
  Button,
  Col,
  Container,
  Row,
  Card,
  Form,
  Modal,
} from "react-bootstrap";
import { Toast } from "primereact/toast";
import { MultiSelect } from "primereact/multiselect";
import { Dropdown } from "primereact/dropdown";
import "./YatraBooking.scss";
import Layout from "../../../components/Layout";
import Select from "react-select";
import {
  getAreaList,
  getCityList,
  getCountryList,
  getDistrictList,
  getStateList,
} from "../../Admin/AddTempleList/utils";
import { Rate } from 'antd';
import axios from "axios";
import Badge from 'react-bootstrap/Badge';
import { LiaMoneyBillWaveSolid } from "react-icons/lia";


const YatraBooking = () => {
  const toast = useRef(null);
  const navigate = useNavigate();

  const [filtered, setFiltered] = useState([]);
  const [days, setDays] = useState([]);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [cities, setCities] = useState([]);
  const [areas, setAreas] = useState([]);
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [district, setDistrict] = useState(null);
  const [city, setCity] = useState(null);
  const [area, setArea] = useState(null);
  const [selectedDays, setSelectedDays] = useState([]);
  const [yatraData, setYatraData] = useState([]);
  const [selectImage, setSelectImage]= useState([]);
  const daysOptions = [
    { value: "1", label: "1 Day" },
    { value: "2", label: "2 Days" },
    { value: "3", label: "3 Days" },
    { value: "4", label: "4 Days" },
    { value: "5", label: "5 Days" },
    { value: "6", label: "6 Days" },
    { value: "7", label: "7 Days" },
  ];

  useEffect(() => {
    getCountryList(setCountries);
    getYatraPackages();
  }, []);
  const handleFilterChange = () => {
    let filteredList = yatraData;
  
    if (selectedDays.length) {
      filteredList = filteredList.filter((pkg) => {
        if (!pkg.duration) return false; // Ensure pkg.duration is defined
        return selectedDays.some((day) => pkg.duration.includes(day.label));
      });
    }
  
    // Apply other filters as needed (country, state, district, city, area)
  
    setFiltered(filteredList);
  };
  

    // Apply other filters as needed (country, state, district, city, area)

 

  useEffect(() => {
    handleFilterChange();
  }, [selectedDays, country, state, district, city, area, yatraData]);

  const countryOnChangeHandler = (value) => {
    setCountry(value);
    getStateList(value, setStates);
  };

  const stateOnChangeHandler = (value) => {
    setState(value);
    getDistrictList(value, setDistricts);
  };

  const districtOnChangeHandler = (value) => {
    setDistrict(value);
    getCityList(value, setCities);
  };

  const cityOnChangeHandler = (value) => {
    setCity(value);
    getAreaList(value, setAreas);
  };

  const handleDaysChange = (selectedOptions) => {
    setSelectedDays(selectedOptions);
  };

  const resetFilters = () => {
    setSelectedDays([]);
    setCountry(null);
    setState(null);
    setDistrict(null);
    setCity(null);
    setArea(null);
  };

  const handleCardClick = (id) => {
    navigate(`/yatrabooking/landingpage/${id}`);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNavigate = (prefill) => {
    navigate("/yatrabooking/landingpage"
      // , { state: { prefill } }
    );
  };

  const getYatraPackages = () => {
    axios.get(`${process.env.REACT_APP_DEV_BASE_URL}/yatrabook/getTrips`)
      .then(res => {
        setYatraData(res.data);
        setFiltered(res.data);
       
         // Initially set filtered list to all data
        console.log(res.data);
      
      }
    )
      .catch(error => console.log(error));
  };
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  console.log( "data",filtered);
  return (
    <Layout>
      <Row>
        <Col xs={3} md={2} lg={2}>
        <Card style={{width:"350px",height:"70vh",marginTop:"21vh",marginLeft:"5vh"}}>
          <div style={{  backgroundColor: "white", width: "350px", paddingLeft: "30px", height: "100vh" }}>
            <div style={{ paddingTop: "25px" }}>
              <h6>&nbsp;Filter Search</h6>
              <h6 style={{ paddingTop: "20px" }}>Days</h6>
              <Form.Group controlId="formDays" style={{ width: "280px" }}>
                <Select style={{ width: "10px" }}
                  isMulti
                  options={daysOptions}
                  value={selectedDays}
                  onChange={handleDaysChange}
                />
              </Form.Group>

              <h6 style={{ marginTop: "6%" }}>Location</h6>
              <Form.Group controlId="country">
                <Form.Control style={{ marginTop: "3%" }}
                  className="location-filter"
                  as="select"
                  value={country}
                  onChange={(e) => countryOnChangeHandler(e.target.value)}
                >
                  <option value="">Select Country</option>
                  {countries.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.country}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="state">
                <Form.Control style={{ marginTop: "4%" }}
                  className="location-filter"
                  as="select"
                  value={state}
                  onChange={(e) => stateOnChangeHandler(e.target.value)}
                >
                  <option value="">Select State</option>
                  {states.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.state}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="district">
                <Form.Control style={{ marginTop: "4%" }}
                  className="location-filter"
                  as="select"
                  value={district}
                  onChange={(e) => districtOnChangeHandler(e.target.value)}
                >
                  <option value="">Select District</option>
                  {districts.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.district}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="city">
                <Form.Control style={{ marginTop: "4%" }}
                  className="location-filter"
                  as="select"
                  value={city}
                  onChange={(e) => cityOnChangeHandler(e.target.value)}
                >
                  <option value="">Select City</option>
                  {cities.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.city}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="area">
                <Form.Control style={{ marginTop: "4%" }}
                  className="location-filter"
                  as="select"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                >
                  <option value="">Select Area</option>
                  {areas.map((a) => (
                    <option key={a.id} value={a.id}>
                      {a.area}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </div>
            <div>
              <Button style={{ backgroundColor: "#000000b8", border: "none", marginLeft: "200px", marginTop: "15px" }} onClick={resetFilters}>
                Reset
              </Button>
            </div>
          </div>
          </Card>
        </Col>

        <Col md={10}>
          <h3 style={{ marginTop: "85px", paddingLeft: "120px" }}>Yatra Package</h3>
          <div className="form-group" style={{ marginTop: "2%" }}>
            {filtered.map((pkg) => (
          
             <Card
             style={{
               width: "80%",
               marginLeft: "12%",
               height: expanded[pkg.id] ? "auto" : "300px",
               overflow: "hidden",
               marginTop: "1%",
               paddingTop: "0%",
               paddingBottom: "2%",
               marginBottom:"3%",
               boxShadow:"5px 5px 7px 7px rgba(0,0,0,0.1)"
             }}
             key={pkg.id}
           >
                <Row noGutters>
                  <Col md={4}>
                  <Card.Img
  alt="no image"
  variant="top"
  src={`${process.env.REACT_APP_DEV_BASE_URL}${pkg.mainImage ? pkg.mainImage : 'default-image-url'}`} // Use a default image if pkg.mainImage is invalid
  style={{ width: "100%", height: "255px", marginLeft: "6%", marginTop: "6%", borderRadius: "10px" }}
  onClick={() => handleCardClick(pkg.id)}
/>
          
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title>{pkg.title}</Card.Title>
                      <br></br>
                      <Card.Text>
                        {expanded[pkg.id] ? pkg.overview : `${pkg.overview.substring(0, 100)}...`}
                        <Button onClick={() => handleCardClick(pkg.id)} variant="link" style={{ fontSize: "14px" }}>See More</Button>
                      </Card.Text>
                     
                      <Card.Text>
                      <Rate disabled defaultValue={4}/>
                  <div style={{display:"flex",paddingTop:"2%"}}>
                  <LiaMoneyBillWaveSolid  size={26} style={{color:"green"}}/>&nbsp;&nbsp;&nbsp;
                    <h5 style={{textDecoration:"line-through",color:"red"}}>₹ {pkg.price}</h5><br></br>&nbsp;&nbsp;
                       <h5 style={{}}>₹ {pkg.offerPrice}</h5>
                       </div>
                 <div style={{display:"flex"}}>
                 <LuClock3 size={22} style={{color:"green"}}/>&nbsp;&nbsp;&nbsp;&nbsp;
                  <h5>{pkg.days}&nbsp;Days</h5>&nbsp;&nbsp;&nbsp;&nbsp;
                     
                   
                      {/* <Card.Text>
                        <strong>Location:</strong> {pkg.location}
                      </Card.Text> */}
                      <Button
                        style={{
                          backgroundColor: "green",
                          border: "none", 
                          marginRight: "5px",
                          marginLeft:"55vh"
                        }}
                        onClick={() => handleCardClick(pkg.id)}
                      >
                        View Details
                      </Button>
                      </div>
                      </Card.Text>
                      {/* <Button
                        style={{ backgroundColor: "#000000b8", border: "none" }}
                        onClick={() => handleNavigate(pkg)}
                      >
                        Book Now
                      </Button> */}
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
      <Toast ref={toast} />
     
    </Layout>
  );
};

export default YatraBooking;








// import React, { useState,useEffect, useRef,} from "react";
// import {useNavigate} from "react-router-dom";
// import { Button, Col, Container, Form, Row, Card, InputGroup } from "react-bootstrap";
// import { Calendar } from "primereact/calendar";
// import { Toast } from "primereact/toast";
// import "./YatraBooking.scss";
// import Layout from "../../../components/Layout";
// import { Dropdown } from "primereact/dropdown";
// import Api from "../../../Api";
// import { CiClock2 } from "react-icons/ci";
// import { LuClock3 } from "react-icons/lu";
// import {Select, Checkbox,} from "antd";
// import { BsSearch } from 'react-icons/bs';
// import {
//   getAreaList,
//   getCityList,
//   getCountryList,
//   getDistrictList,
//   getStateList,
// } from "../../Admin/AddTempleList/utils"

// const YatraBookingForm = () => {
//   const toast = useRef(null);
//   const packages = [
//     {
//       label: "5 Days: Varanasi - Allahabad - Ayodhya - Varanasi",
//       value: "package1",
//       description:
//         "Immerse yourself in the spiritual essence of Varanasi, Allahabad, and Ayodhya over five days, visiting ancient temples and sacred sites.",
//       duration: "5 Days",
//       imageUrl:"https://images.pexels.com/photos/16747088/pexels-photo-16747088/free-photo-of-hindu-temple-on-the-bank-of-the-ganges-in-varanasi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       price:"40,000"
//     },
//     {
//       label: "4 Days: Rameswaram - Madurai - Kanyakumari",
//       value: "package2",
//       description:
//         "Experience the divine journey through Rameswaram, Madurai, and Kanyakumari, exploring majestic temples and the southern tip of India in four days.",
//       duration: "4 Days",
//       imageUrl:"https://lh5.googleusercontent.com/CMEVz9F1LtoGrHVc0teLedAnRk2jM4wlLM4QgdXMIttfU7vA31O3ql1e_-vPPJO2DC8SLXGGWhxC0UO6N79eTG1lh84-SdDKtFbdWhxMNJIyAv38cEvohWj6BZhfgyjkr1EUP-H-NxDcTTq0uMlHhy4",
//       price:"30,000"
//     },
//     {
//       label: "6 Days: Puri - Bhubaneswar - Konark - Puri",
//       value: "package3",
//       description:
//         "Discover the spiritual and architectural marvels of Puri, Bhubaneswar, and Konark, including the famous Jagannath Temple and Sun Temple over six days.",
//       duration: "6 Days",
//       imageUrl:"https://www.tripsavvy.com/thmb/wdbjlbZRP1QmjHSGja3zH7qA1w0=/3559x2357/filters:fill(auto,1)/_DSC0713_Snapseed_Fotor-56a3c23a3df78cf7727f07e8.jpg",
//       price:"50,000",
//     },
//     {
//       label: "3 Days: Tirupati - Kanchipuram - Mahabalipuram",
//       value: "package4",
//       description:
//         "Explore the rich cultural and religious heritage of Tirupati, Kanchipuram, and Mahabalipuram over three days, visiting renowned temples and historical sites.",
//       duration: "3 Days",
//       imageUrl:"https://www.holidify.com/images/cmsuploads/compressed/shutterstock_11162494701_20200130180527_20200130180558.png",
//       price:"20,000",
//     },
//   ];
//   const [fullName, setFullName] = useState("");
//   const [contactNumber, setContactNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [address, setAddress] = useState("");
//   const [dob, setDob] = useState(null);
//   const [gender, setGender] = useState(null);
//   const [emergencyContact, setEmergencyContact] = useState("");
//   const [packageType, setPackageType] = useState(null);
//   const [travelDates, setTravelDates] = useState(null);
//   const [numTravelers, setNumTravelers] = useState(1);
//   const [accommodation, setAccommodation] = useState(null);
//   const [mealPreference, setMealPreference] = useState(null);
//   const [specialRequirements, setSpecialRequirements] = useState("");
//   const [transportMode, setTransportMode] = useState(null);
//   const [departureCity, setDepartureCity] = useState("");
//   const [returnCity, setReturnCity] = useState("");
//   const [transportClass, setTransportClass] = useState(null);
//   const [identityProof, setIdentityProof] = useState("");
//   const [medical, setMedical] = useState("");
//   const [filtered, setFiltered] = useState(packages);
//   const [languages, setLanguages] = useState([]);
//   const [countries, setCountries] = useState([]);
//   const [states, setStates] = useState([]);
//   const [districts, setDistricts] = useState([]);
//   const [cities, setCities] = useState([]);
//   const [areas, setAreas] = useState([]);
//   const [country, setCountry] = useState(null);
//   const [state, setState] = useState(null);
//   const [district, setDistrict] = useState(null);
//   const [city, setCity] = useState(null);
//   const [area, setArea] = useState(null);

//   const navigate = useNavigate();
//   useEffect(() => {
//     getCountryList(setCountries);
//   }, []);
//   // Example data fetching functions
  
//   const handleFilterChange = () => {
//     let filteredList = packages;

//     if (languages.length > 0) {
//       filteredList = filteredList.filter((guide) =>
//         languages.some((lang) => guide.languages.includes(lang))
//       );
//     }

//     // Apply other filters as needed (country, state, district, city, area)
//     // You can add similar filter conditions for other filters

//     setFiltered(filteredList);
//   };

//   useEffect(() => {
//     handleFilterChange();
//   }, [languages, country, state, district, city, area]);

//   const countryOnChangeHandler = (value) => {
//     setCountry(value);
//     getStateList(value, setStates);
//   };

//   const stateOnChangeHandler = (value) => {
//     setState(value);
//     getDistrictList(value, setDistricts);
//   };

//   const districtOnChangeHandler = (value) => {
//     setDistrict(value);
//     getCityList(value, setCities);
//   };

//   const cityOnChangeHandler = (value) => {
//     setCity(value);
//     getAreaList(value, setAreas);
//   };

//   const handleLanguageSelection = (lang) => {
//     if (languages.includes(lang)) {
//       setLanguages(languages.filter((l) => l !== lang));
//     } else {
//       setLanguages([...languages, lang]);
//     }
//   };

//   const resetFilters = () => {
//     setLanguages([]);
//     setCountry(null);
//     setState(null);
//     setDistrict(null);
//     setCity(null);
//     setArea(null);
//   };

//   const handleCardClick = (route) => {
//     navigate(route);
//   };

//   const genders = [
//     { label: "Male", value: "male" },
//     { label: "Female", value: "female" },
//     { label: "Other", value: "other" },
//   ];

//   const mealPreferences = [
//     { label: "Vegetarian", value: "vegetarian" },
//     { label: "Non-Vegetarian", value: "non-vegetarian" },
//     { label: "Vegan", value: "vegan" },
//   ];

//   const handlePackageSelect = (value) => {
//     setPackageType(value);
//   };
//  const handleSubmit = async (e) => {
//     e.preventDefault();
//     await Api.post(
//       `${process.env.REACT_APP_DEV_BASE_URL}/yatraBooking/createYatraBooking`,
//       {
//         fullName: fullName,
//       contactNumber: contactNumber,
//       email: email,
//       address: address,
//       dateOfBirth: dob,
//       gender: gender,
//       emergencyContact: emergencyContact,
//       travelDates: travelDates,
//       mealPreference: mealPreference,
//       specialRequirement: specialRequirements,
//       numberOfTravels: numTravelers,
//       }
//     )
//       .then((res) => {
//         console.log("response yatra", res);

//         toast.current.show({
//           severity: "success",
//           summary: "Success",
//           detail: "Form submitted successfully",
//           life: 3000,
//         });
//       })
//       .catch((err) => console.log("err :>> ", err));
//   };

//   const handleIncrement = (incrementValue) => {
//     setNumTravelers(numTravelers + incrementValue);
//   };

//   const handleDecrement = () => {
//     if (numTravelers > 1) {
//       setNumTravelers(numTravelers - 1);
//     }
//   };
//   const ReadMore = ({ children }) => {
//     const text = children;
//     const [isReadMore, setIsReadMore] = useState(true);
//     const toggleReadMore = () => {
//       setIsReadMore(!isReadMore);
//     };
//     return (
//       <p style={{ textAlign: "justify", lineHeight: 2 }}>
//         {isReadMore ? text.slice(0, 400) : text}
//         <span onClick={toggleReadMore} className="read-or-hide">
//           {isReadMore ? " ...Read More" : " Show Less"}
//         </span>
//       </p>
//     );
//   };

//   return (
//     <Layout>
//       <Container>
//         <Row>

      
//       <Col xs={3} md={2} lg={2}>
//             <div>
//               <h6>&nbsp;Filter Search</h6>
//               <div>
//                 <h6>Language</h6>
//                 <div>
//                   {["English", "Hindi", "Tamil", "Telugu", "Kannada", "Malayalam"].map((lang) => (
//                     <Button
//                       key={lang}
//                       variant={languages.includes(lang) ? "primary" : "outline-secondary"}
//                       className="guide-filter-btn"
//                       onClick={() => handleLanguageSelection(lang)}
//                     >
//                       {lang}
//                     </Button>
//                   ))}
//                 </div>
//               </div>
//               <h6>Location</h6>
//               <Form.Group controlId="country">
//                 <Form.Control className="location-filter"
//                   as="select"
//                   value={country}
//                   onChange={(e) => countryOnChangeHandler(e.target.value)}
//                 >
//                   <option value="">Select Country</option>
//                   {countries.map((c) => (
//                     <option key={c.id} value={c.id}>
//                       {c.country}
//                     </option>
//                   ))}
//                 </Form.Control>
//               </Form.Group>
//               <Form.Group controlId="state">
//                 <Form.Control className="location-filter"
//                   as="select"
//                   value={state}
//                   onChange={(e) => stateOnChangeHandler(e.target.value)}
//                 >
//                   <option value="">Select State</option>
//                   {states.map((s) => (
//                     <option key={s.id} value={s.id}>
//                       {s.state}
//                     </option>
//                   ))}
//                 </Form.Control>
//               </Form.Group>
//               <Form.Group controlId="district">
//                 <Form.Control className="location-filter"
//                   as="select"
//                   value={district}
//                   onChange={(e) => districtOnChangeHandler(e.target.value)}
//                 >
//                   <option value="">Select District</option>
//                   {districts.map((d) => (
//                     <option key={d.id} value={d.id}>
//                       {d.district}
//                     </option>
//                   ))}
//                 </Form.Control>
//               </Form.Group>
//               <Form.Group controlId="city">
//                 <Form.Control className="location-filter"
//                   as="select"
//                   value={city}
//                   onChange={(e) => cityOnChangeHandler(e.target.value)}
//                 >
//                   <option value="">Select City</option>
//                   {cities.map((c) => (
//                     <option key={c.id} value={c.id}>
//                       {c.city}
//                     </option>
//                   ))}
//                 </Form.Control>
//               </Form.Group>
//               <Form.Group controlId="area">
//                 <Form.Control className="location-filter"
//                   as="select"
//                   value={area}
//                   onChange={(e) => setArea(e.target.value)}
//                 >
//                   <option value="">Select Area</option>
//                   {areas.map((a) => (
//                     <option key={a.id} value={a.id}>
//                       {a.area}
//                     </option>
//                   ))}
//                 </Form.Control>
//               </Form.Group>
//               <div>
//                 <Button
//                   className="guide-filter-reset"
//                   onClick={resetFilters}
//                 >
//                   Reset
//                 </Button>
//                 {/* <Button className="guide-go-button">Go</Button> */}
//               </div>
//             </div>
//           </Col>
//            <br />
//                 <Col md={10}>
//                 <h3>Yatra Package</h3>

//                 <div className="form-group" style={{marginTop:"5%"}}>
                
//                     {filtered.map((pkg) => (
//                       // <Col md={12} key={pkg.value}>
//                         <Card style={{width:"80%", marginLeft:"20%",minHeight:"260px",marginBottom:"2%"}} key={pkg.id}>
//                           <Row>
//                           <Col lg={4}>
//                           <img src={pkg.imageUrl} style={{width:"100%",height:"215px",marginTop:"6%",marginBottom:"6%",marginLeft:"6%",borderRadius:"6px"}}></img>
//                           </Col>
//                           <Col lg={8}>
                          
//                          <div style={{marginTop:"2%",marginLeft:"2%",marginRight:"2%"}}
//                           className={`package-card ${
//                             packageType === pkg.value ? "selected" : ""
//                           }`}
//                           onClick={() => handlePackageSelect(pkg.value)}
//                         >
//                           <div>
//                             <h3 style={{color:"darkblue",fontWeight:"580"}}>{pkg.label}</h3>
//                           </div>
                         
//                           <div className="package-description" style={{marginTop:"2%"}}>
//                             <div>{pkg.description}</div>
//                           </div> 
//                      <div style={{display:"flex",flexDirection:"row",marginTop:"2%"}}>
//                             <h5 style={{color:"darkblue"}}>Price:</h5> &nbsp;<p style={{fontSize:"17px",fontWeight:"600"}}> ₹{pkg.price}</p>
//                             </div>
//                           <div className="package-duration">
//                           <LuClock3 size={17} />&nbsp; &nbsp;<span style={{fontSize:"15px",fontWeight:"450",paddingTop:"6px"}}>{pkg.duration}</span>
//                           </div>
//                          </div> 
//                         </Col>
//                          </Row>
//                         </Card>
//                           ))}
//                           </div>
//                 <br />
//                  </Col>
//           </Row>
//       </Container>
//     </Layout>
//      );
// };
        {/* <Row className="justify-content-center">
          <Col lg={12} xl={10}>
            <div className="iyerBookingForm">
              <form onSubmit={handleSubmit}>
                <div className="iyerBookingForm__header">
                  <h1 className="title">Yatra Booking</h1>
                </div>
                <Toast ref={toast} />

                <br />
                <h3>Traveler Information</h3>
                <div className="grid">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contactNumber">Contact Number</label>
                    <input
                      type="text"
                      id="contactNumber"
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <textarea
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="date">Date of Birth</label>
                    <Calendar
                      value={dob}
                      className="date"
                      id="date"
                      dateFormat="dd/mm/yy"
                      onChange={(e) => setDob(e.value)}
                    ></Calendar>
                  </div>
                  <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <Dropdown
                      value={gender}
                      id="gender"
                      onChange={(e) => setGender(e.value)}
                      options={genders}
                      optionLabel="label"
                      optionValue="value"
                      className="primeSelect"
                      placeholder="Select gender"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="emergencyContact">Emergency Contact</label>
                    <input
                      type="text"
                      id="emergencyContact"
                      value={emergencyContact}
                      onChange={(e) => setEmergencyContact(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <br />
                <h3>Travel Details</h3>
                <div className="grid">
                  <div className="form-group">
                    <label htmlFor="travelDates">Travel Dates</label>
                    <Calendar
                      value={travelDates}
                      id="travelDates"
                      onChange={(e) => setTravelDates(e.value)}
                      selectionMode="range"
                      dateFormat="dd/mm/yy"
                      className="date"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="numTravelers">Number of Travelers</label>
                    <div className="input-group">
                      <Button
                        variant="outline-primary"
                        onClick={handleDecrement}
                      >
                        -
                      </Button>
                      <input
                        type="number"
                        id="numTravelers"
                        value={numTravelers}
                        onChange={(e) => setNumTravelers(e.target.value)}
                        className="form-control centered-input"
                        min="1"
                        required
                      />
                      <Button
                        variant="outline-primary"
                        onClick={() => handleIncrement(1)}
                      >
                        +
                      </Button>
                    </div>
                  </div> */}
                  {/* <div className="form-group">
                    <label htmlFor="accommodation">
                      Accommodation Preference
                    </label>
                    <input
                      type="text"
                      id="accommodation"
                      value={accommodation}
                      onChange={(e) => setAccommodation(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div> */}
                  {/* <div className="form-group">
                    <label htmlFor="mealPreference">Meal Preference</label>
                    <Dropdown
                      value={mealPreference}
                      id="mealPreference"
                      onChange={(e) => setMealPreference(e.value)}
                      options={mealPreferences}
                      optionLabel="label"
                      optionValue="value"
                      className="primeSelect"
                      placeholder="Select meal preference"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="specialRequirements">
                      Special Requirements
                    </label>
                    <textarea
                      id="specialRequirements"
                      value={specialRequirements}
                      onChange={(e) => setSpecialRequirements(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div> */}
            
                {/* <h3>Transportation Details</h3>
                <div className="grid">
                  <div className="form-group">
                    <label htmlFor="transportMode">Mode of Transport</label>
                    <input
                      type="text"
                      id="transportMode"
                      value={transportMode}
                      onChange={(e) => setTransportMode(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="departureCity">Departure City</label>
                    <input
                      type="text"
                      id="departureCity"
                      value={departureCity}
                      onChange={(e) => setDepartureCity(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="returnCity">Return City</label>
                    <input
                      type="text"
                      id="returnCity"
                      value={returnCity}
                      onChange={(e) => setReturnCity(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>
                </div> */}
               
                        {/* <Col lg={2}>
                      <div style={{marginTop:"20%",marginLeft:"20%"}}>
                        <p style={{marginLeft:"65%"}}>from</p>
                        <h5  style={{fontWeight:"550"}}>₹{pkg.price}</h5>
                        </div>
                        </Col> */}
                        
                      {/* </Col> */}
                {/* <h3>Additional Information</h3>
                <div className="grid">
                  <div className="form-group">
                    <label htmlFor="identityProof">Identity Proof</label>
                    <input
                      type="file"
                      id="identityProof"
                      value={identityProof}
                      onChange={(e) => setIdentityProof(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="medical">Medical Information</label>
                    <textarea
                      id="medical"
                      value={medical}
                      onChange={(e) => setMedical(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div> */}
                {/* <div className="text-center mt-5">
                  <button className="customBtn bg">Submit</button>
                </div> */}
              {/* </form> */}
            {/* </div> */}
          {/* </Col>
        </Row> */}
    

// export default YatraBookingForm;
