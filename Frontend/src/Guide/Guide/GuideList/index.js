import React, { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import { Col, InputGroup, Form, Card, Button, Image } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "antd";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  getAreaList,
  getCityList,
  getCountryList,
  getDistrictList,
  getStateList,
} from "../../../Pages/Admin/AddTempleList/utils.js";
import "../training.css";
import axios from "axios";

const trainerlist = [
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
    trainerName: "Arulnathan",
    trainerDescription:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    startDate: "1st November 2022",
    endDate: "30th November 2022",
    startTime: "11.00 AM",
    endTime: "12.00 PM",
    language: "Tamil",
    startDay: "Monday",
    endDay: "Friday",
    mode: "Offline",
    offline: "Inside Temple",
    Address: "Vadapalani murugan kovil",
    area: "vadapalani",
    district: "Chennai",
    state: "Tamil Nadu",
    pincode: "606603",
    description:
      "Hanuman Chalisa is a timeless ode to devotion Lord Hanuman is known for his devotion to Lord Ram and is considered to be the embodiment of faith, surrender, and devotion. The 'Hanuman Chalisa' is composed by Saint Goswami Tulsidas, the author of the Tulsi Ramayana (Ramacharitamanasa). It is believed that an ailing Tulsidas composed the Hanuman Chalisa. Composing and singing the praises of Lord Hanuman, helped Tulsidas regain his health.Composed of 40 verses filled with praises for Lord Hanuman, the Hanuman Chalisa is composed in Avadhi. This dialect of Hindi was spoken in Ayodhya, Lord Rama’s birthplace. ",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
    trainerName: "Rajaenthan",
    trainerDescription:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    startDate: "1st November 2022",
    endDate: "30th November 2022",
    startTime: "11.00 AM",
    endTime: "12.00 PM",
    startDay: "Monday",
    endDay: "Friday",
    mode: "Online",
    language: "Telugu",
    offline: "Inside Temple",
    Address: "Vadapalani murugan kovil",
    area: "vadapalani",
    district: "Chennai",
    state: "Tamil Nadu",
    pincode: "606603",
  },
];
export default function GTrainerList() {
  const [language, setLanguage] = useState([
    {
      label: "Tamil",
      value: "Tamil",
      disabled: false,
    },
    {
      label: "Telugu",
      value: "Telugu",
      disabled: false,
    },
    {
      label: "Kannada",
      value: "Kannada",
      disabled: false,
    },
    {
      label: "Hindi",
      value: "Hindi",
      disabled: false,
    },
    {
      label: "Malayalam",
      value: "Malayalam",
      disabled: false,
    },
    {
      label: "Marathi",
      value: "Marathi",
      disabled: false,
    },
  ]);
  const [classDetail, setclassDetail] = useState({
    
  });
  const [classlist, setclasslist] = useState(trainerlist);
  const [online, setonline] = useState(false);
  const [offline, setoffline] = useState(false);
  const [all, setAll] = useState(true);
  const [search, setSearch] = useState("");
  const [languageValue, setLanguageValue] = useState("");
  const [countries, setCountries] = useState([]);
  const [district, setDistrict] = useState([]);
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [country, setcountry] = useState(null);
  const [state, setstate] = useState(null);
  const [dist, setdistrict] = useState(null);
  const [city, setcity] = useState(null);

  const navigate = useNavigate();
  const params = useParams();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    initialValues: {
      country: country,
      state: state,
      disctrict: dist,
      city: city,
    },
  });

  const commonProps = {
    errors,
    register,
  };

  useEffect(() => {
    getTrainingDetails()
    getCountryList(setCountries);
  }, []);

  const getTrainingDetails =()=>{
    const id = params.id
    axios
    .get(`${process.env.REACT_APP_DEV_BASE_URL}/trainerclasslist/getone/${id}`)
    .then((res) => {
      setclassDetail(res.data[0]);
    });
  }

  const countryOnChangeHandler = (e) => {
    getStateList(e, setStates);
  };

  const statesOnChangeHandler = (e) => {
    getDistrictList(e, setDistrict);
  };

  const districtOnChangeHandler = (e) => {
    getCityList(e, setCities);
  };

  const cityOnChangeHandler = (e) => {};

  return (
    <Layout>
      <div className="container-fluid mt-5 pt-2 fullscreen">
        <div className="row">
          <Col xs={3} md={3} lg={3} className="filter-cards px-0 pb-5">
            <div className="ms-3">
              <h6 className="my-2">
                {/* <HiFilter style={{fontSize:22, color:"#08acb1"}}/> */}
                &nbsp;{"Filter Search"}
              </h6>

              <div className="d-flex justify-content-start ms-3 mt-2">
                <Checkbox
                  className="pooja-checkbox"
                  checked={all}
                  onChange={() => {
                    setoffline(false);
                    setonline(false);
                    setAll(!all);
                  }}
                />
                <label className="ms-2">All</label>
              </div>
              <div className="d-flex justify-content-start ms-3 mt-2">
                <Checkbox
                  className="pooja-checkbox"
                  checked={online}
                  onChange={() => {
                    setoffline(false);
                    setAll(false);
                    setonline(!online);
                  }}
                />
                <label className="ms-2">Online Class</label>
              </div>
              <div className="d-flex justify-content-start ms-3 mt-2">
                <Checkbox
                  className="pooja-checkbox"
                  checked={offline}
                  onChange={() => {
                    setonline(false);
                    setAll(false);
                    setoffline(!offline);
                  }}
                />
                <label className="ms-2">Offline Class</label>
              </div>
              <div>
                <h6 className="my-3 ms-2">Language</h6>
                <div className="d-flex ms-2" style={{ flexWrap: "wrap" }}>
                  {language.map((item, index) => {
                    return (
                      <p
                        key={item.label}
                        className={`${
                          item.value === languageValue
                            ? "language-list enable-option"
                            : "language-list"
                        }`}
                        onClick={(e) => {
                          setLanguageValue(item.value);
                        }}
                      >
                        {item.label}
                      </p>
                    );
                  })}
                </div>
              </div>
              <div>
                <h6 className="my-3 ms-2">Location</h6>
                <Form.Group controlId="country" className=" ms-2 me-2">
                  <Dropdown
                    className="training-list-style"
                    filter
                    id="country"
                    value={country}
                    placeholder="Country"
                    onChange={(e) => {
                      countryOnChangeHandler(e.target.value);
                      setcountry(e.target.value);
                    }}
                    options={countries}
                    optionLabel="country"
                    optionValue="id"
                    showClear
                  />
                </Form.Group>
                <Form.Group controlId="state" className=" ms-2 me-2 mt-3">
                  <Dropdown
                    className="training-list-style"
                    filter
                    id="state"
                    value={state}
                    placeholder="State"
                    onChange={(e) => {
                      statesOnChangeHandler(e.target.value);
                      setstate(e.target.value);
                    }}
                    options={states}
                    optionLabel="state"
                    optionValue="id"
                    showClear
                  />
                </Form.Group>
                <Form.Group controlId="district" className=" ms-2 me-2 mt-3">
                  <Dropdown
                    className="training-list-style"
                    filter
                    id="district"
                    value={dist}
                    placeholder="District"
                    onChange={(e) => {
                      districtOnChangeHandler(e.target.value);
                      setdistrict(e.target.value);
                    }}
                    options={district}
                    optionLabel="district"
                    optionValue="id"
                    showClear
                  />
                </Form.Group>
                <Form.Group controlId="city" className="ms-2 me-2 mt-3">
                  <Dropdown
                    className="training-list-style"
                    filter
                    id="city"
                    value={city}
                    placeholder="City"
                    onChange={(e) => {
                      cityOnChangeHandler(e.target.value);
                      setcity(e.target.value);
                    }}
                    options={cities}
                    optionLabel="city"
                    optionValue="id"
                    showClear
                  />
                </Form.Group>
              </div>
              <div className="d-flex justify-content-between me-3 mt-3">
                <Button
                  className="reset-button-style"
                  onClick={() => {
                    setLanguageValue("");
                    setonline(false);
                    setoffline(false);
                    setcountry(null);
                    setstate(null);
                    setdistrict(null);
                    setcity(null);
                    setAll(true);
                  }}
                >
                  Reset
                </Button>
                <Button className="go-button">Go</Button>
              </div>
            </div>
          </Col>
          <Col className="right-content-pooja py-3 ms-5 me-3">
            <div>
              <h3
                className="my-3"
                style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
              >
                {classDetail.class_name}
              </h3>
              <div className="d-flex justify-content-center">
                <Image
                  alt="Pooja images"
                  width="60%"
                  style={{ objectFit: "contain" }}
                  src={classDetail.image}
                  height={300}
                />
              </div>
              <p className="mt-4 mx-5" style={{textAlign:"justify"}}>{classDetail.description}</p>
            </div>
            <div className="row mt-5 mb-3">
              <h5>Trainer's List</h5>
              {classlist.map((list, index) => (
                <Col lg={6} className="mt-3">
                  <Card style={{ height: "100%" }}>
                    <Card.Body>
                      <div className="row">
                        <Col
                          md={3}
                          lg={3}
                          className="d-flex justify-content-center align-items-center"
                        >
                          <Image
                            alt="Pooja images"
                            width="100%"
                            style={{ objectFit: "contain" }}
                            src={list.imageUrl}
                            height={100}
                          />
                        </Col>
                        <Col
                          md={9}
                          lg={9}
                          className="pe-3 d-flex justify-content-center"
                          style={{ flexDirection: "column" }}
                        >
                          <h6 className="mb-1">{list.trainerName}</h6>
                          <p className="ellipse-text mb-0">
                            {list.trainerDescription}
                          </p>
                        </Col>
                      </div>
                      <hr />
                      <div className="d-flex mx-3" style={{ flexWrap: "wrap" }}>
                        <p
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          Language :&nbsp;
                        </p>
                        <p>&nbsp;{`${list.language}`}</p>
                      </div>
                      <div className="d-flex mx-3" style={{ flexWrap: "wrap" }}>
                        <p
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          Mode :&nbsp;
                        </p>
                        <p>&nbsp;{`${list.mode}`}</p>
                      </div>
                      <div
                        className="d-flex justify-content-start  mx-3"
                        style={{ flexWrap: "wrap" }}
                      >
                        <p
                          className="mb-0"
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          Address :&nbsp;
                        </p>
                        <p className="mb-0" style={{ width: "80%" }}>
                          &nbsp;
                          {`${list.Address}, ${list.area}, ${list.district}, ${list.state} - ${list.pincode}`}
                        </p>
                      </div>
                      <div className="d-flex justify-content-end mt-3 mb-2 me-3">
                        <Link
                          to={`/bookmyiyer/training-class/details/${index}`}
                          style={{ textDecoration: "underline" }}
                        >{`View details >>>`}</Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </div>
          </Col>
        </div>
      </div>
    </Layout>
  );
}
