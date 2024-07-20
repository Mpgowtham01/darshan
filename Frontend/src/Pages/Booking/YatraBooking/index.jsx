import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
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

const YatraBooking = () => {
  const toast = useRef(null);
  const navigate = useNavigate();

  const packages = [
    {
      label: "5 Days: Varanasi - Allahabad - Ayodhya - Varanasi",
      value: "package1",
      description:
        "Immerse yourself in the spiritual essence of Varanasi, Allahabad, and Ayodhya over five days, visiting ancient temples and sacred sites.",
      duration: "5 Days",
      imageUrl:
        "https://images.pexels.com/photos/16747088/pexels-photo-16747088/free-photo-of-hindu-temple-on-the-bank-of-the-ganges-in-varanasi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "40,000",
    },
    {
      label: "4 Days: Rameswaram - Madurai - Kanyakumari",
      value: "package2",
      description:
        "Experience the divine journey through Rameswaram, Madurai, and Kanyakumari, exploring majestic temples and the southern tip of India in four days.",
      duration: "4 Days",
      imageUrl:
        "https://lh5.googleusercontent.com/CMEVz9F1LtoGrHVc0teLedAnRk2jM4wlLM4QgdXMIttfU7vA31O3ql1e_-vPPJO2DC8SLXGGWhxC0UO6N79eTG1lh84-SdDKtFbdWhxMNJIyAv38cEvohWj6BZhfgyjkr1EUP-H-NxDcTTq0uMlHhy4",
      price: "30,000",
    },
    {
      label: "6 Days: Puri - Bhubaneswar - Konark - Puri",
      value: "package3",
      description:
        "Discover the spiritual and architectural marvels of Puri, Bhubaneswar, and Konark, including the famous Jagannath Temple and Sun Temple over six days.",
      duration: "6 Days",
      imageUrl:
        "https://www.tripsavvy.com/thmb/wdbjlbZRP1QmjHSGja3zH7qA1w0=/3559x2357/filters:fill(auto,1)/_DSC0713_Snapseed_Fotor-56a3c23a3df78cf7727f07e8.jpg",
      price: "50,000",
    },
    {
      label: "3 Days: Tirupati - Kanchipuram - Mahabalipuram",
      value: "package4",
      description:
        "Explore the rich cultural and religious heritage of Tirupati, Kanchipuram, and Mahabalipuram over three days, visiting renowned temples and historical sites.",
      duration: "3 Days",
      imageUrl:
        "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_11162494701_20200130180527_20200130180558.png",
      price: "20,000",
    },
  ];

  const [filtered, setFiltered] = useState(packages);
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
  }, []);

  const handleFilterChange = () => {
    let filteredList = packages;

    if (days.length) {
      filteredList = filteredList.filter((pkg) =>
        days.some((day) => pkg.duration.startsWith(day))
      );
    }

    // Apply other filters as needed (country, state, district, city, area)

    setFiltered(filteredList);
  };

  useEffect(() => {
    handleFilterChange();
  }, [days, country, state, district, city, area]);

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
    setDays([]);
    setCountry(null);
    setState(null);
    setDistrict(null);
    setCity(null);
    setArea(null);
  };

  const handleCardClick = (route) => {
    navigate(route);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNavigate = (prefill) => {
    navigate("/yatrabooking/form", { state: { prefill } });
  };
  return (
    <Layout>
      <Row>
        <Col xs={3} md={2} lg={2}>
          <div
            style={{
              marginTop: "80px",
              backgroundColor: "white",
              width: "350px",
              paddingLeft: "30px",
              height: "100vh",
              position: "fixed",
            }}
          >
            <div style={{ paddingTop: "25px" }}>
              <h6>&nbsp;Filter Search</h6>
              <h6 style={{ paddingTop: "20px" }}>Days</h6>
              <Form.Group controlId="formDays" style={{ width: "280px" }}>
                <Select
                  style={{ width: "10px" }}
                  isMulti
                  options={daysOptions}
                  value={selectedDays}
                  onChange={handleDaysChange}
                />
              </Form.Group>

              <h6 style={{ marginTop: "6%" }}>Location</h6>
              <Form.Group controlId="country">
                <Form.Control
                  style={{ marginTop: "3%" }}
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
                <Form.Control
                  style={{ marginTop: "4%" }}
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
                <Form.Control
                  style={{ marginTop: "4%" }}
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
                <Form.Control
                  style={{ marginTop: "4%" }}
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
                <Form.Control
                  style={{ marginTop: "4%" }}
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
              <Button
                style={{
                  backgroundColor: "#000000b8",
                  border: "none",
                  marginLeft: "200px",
                  marginTop: "15px",
                }}
                onClick={resetFilters}
              >
                Reset
              </Button>
            </div>
          </div>
        </Col>

        <br />
        <Col md={10}>
          <h3 style={{ marginTop: "85px", paddingLeft: "120px" }}>
            Yatra Package
          </h3>
          <div className="form-group" style={{ marginTop: "2%" }}>
            {filtered.map((pkg) => (
              <Card
                style={{
                  width: "80%",
                  marginLeft: "12%",
                  minHeight: "20%",
                  maxHeight: "30%",
                  marginTop: "1%",
                  paddingTop: "0%",
                  paddingBottom: "2%",
                }}
                key={pkg.value}
              >
                <Row noGutters>
                  <Col md={4}>
                    <Card.Img
                      variant="top"
                      src={pkg.imageUrl}
                      style={{
                        width: "100%",
                        height: "220px",
                        marginLeft: "6%",
                        marginTop: "6%",
                      }}
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <h4 style={{ color: "darkblue" }}>{pkg.label}</h4>
                      <Card.Text style={{ marginTop: "2%" }}>
                        {pkg.description}
                      </Card.Text>
                      <h6>
                        <b>Duration:</b> {pkg.duration}
                      </h6>
                      <br></br>
                      <h6>
                        <b>Price:</b> ₹{pkg.price}
                      </h6>
                      <br></br>
                      <Button onClick={handleShow}>Book Now</Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
      <Modal
        // {...props}
        
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton style={{ fontWeight: "bold" }}>
          <h4>Is this booking is for yourself or someone else ?</h4>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="success" onClick={() => handleNavigate(true)}>
            For Myself
          </Button>
          <Button variant="primary" onClick={() => handleNavigate(false)}>
            For Someone elese
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
};

export default YatraBooking;

