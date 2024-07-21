import React, { useState, useEffect } from "react";
import { Col, Form, Card, Button, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import guide1 from "../../components/Images/gettyimages-689647616-612x612.jpg";
import guide2 from "../../components/Images/travel-guide.jpg";
import guide3 from "../../components/Images/gettyimages-1140617056-612x612.jpg";
import {
  getAreaList,
  getCityList,
  getCountryList,
  getDistrictList,
  getStateList,
} from "../../../src/Pages/Admin/AddTempleList/utils";

import "./guide.css";

export default function Guide() {
  const initialGuides = [
    {
      id: 1,
      guide_name: "Guide 1",
      imageUrl: guide1,
      languages: ["English", "Hindi"],
    },
    {
      id: 2,
      guide_name: "Guide 2",
      imageUrl: guide2,
      languages: ["Tamil", "Telugu"],
    },
    {
      id: 3,
      guide_name: "Guide 3",
      imageUrl: guide3,
      languages: ["Kannada", "Malayalam"],
    },
  ];

  const [filtered, setFiltered] = useState(initialGuides);
  const [languages, setLanguages] = useState([]);
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

  const navigate = useNavigate();

  useEffect(() => {
    getCountryList(setCountries);
  }, []);

  const handleFilterChange = () => {
    let filteredList = initialGuides;

    if (languages.length > 0) {
      filteredList = filteredList.filter((guide) =>
        languages.some((lang) => guide.languages.includes(lang))
      );
    }

    // Apply other filters as needed (country, state, district, city, area)
    // You can add similar filter conditions for other filters

    setFiltered(filteredList);
  };

  useEffect(() => {
    handleFilterChange();
  }, [languages, country, state, district, city, area]);

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

  const handleLanguageSelection = (lang) => {
    if (languages.includes(lang)) {
      setLanguages(languages.filter((l) => l !== lang));
    } else {
      setLanguages([...languages, lang]);
    }
  };

  const resetFilters = () => {
    setLanguages([]);
    setCountry(null);
    setState(null);
    setDistrict(null);
    setCity(null);
    setArea(null);
  };

  return (
    <Layout>
      <br />
      <div className="mt-5 pt-2">
  <div className="row">
    <Col xs={3} md={3} lg={3} className="filter-cards">
            <div className="ms-3 filter-div pb-5">
              <h6 className="my-2 pt-3">&nbsp;Filter Search</h6>
              <div className="">
                <h6 className="my-3">Language</h6>
                <div className="language-buttons ms-0 pt-2">
                  {["English", "Hindi", "Tamil", "Telugu", "Kannada", "Malayalam"].map((lang) => (
                    <Button
                      key={lang}
                      variant={languages.includes(lang) ? "primary" : "outline-secondary"}
                      className="guide-filter-btn"
                      onClick={() => handleLanguageSelection(lang)}
                    >
                      {lang}
                    </Button>
                  ))}
                </div>
              </div>
              <h6 className="my-3 ms-2">Location</h6>
              <Form.Group controlId="country" className="ms-2 me-2">
                <Form.Control className="location-filter"
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
              <Form.Group controlId="state" className="ms-2 me-2 mt-3">
                <Form.Control className="location-filter"
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
              <Form.Group controlId="district" className="ms-2 me-2 mt-3">
                <Form.Control className="location-filter"
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
              <Form.Group controlId="city" className="ms-2 me-2 mt-3">
                <Form.Control className="location-filter"
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
              <Form.Group controlId="area" className="ms-2 me-2 mt-3">
                <Form.Control className="location-filter"
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
              <div className="d-flex justify-content-between me-3 mt-3">
                <Button
                  className="guide-filter-reset"
                  onClick={resetFilters}
                >
                  Reset
                </Button>
                {/* <Button className="guide-go-button">Go</Button> */}
              </div>
            </div>
          </Col>
          <Col className="right-content-pooja py-3 ms-5 me-3">
            <div className="d-flex justify-content-between mt-3">
              <h5 className="mb-0">GUIDE LIST</h5>
              <InputGroup style={{ width: "30%" }}>
                <Form.Control
                  onChange={(e) =>
                    setFiltered(
                      initialGuides.filter((guide) =>
                        guide.guide_name
                          .toLowerCase()
                          .includes(e.target.value.toLowerCase())
                      )
                    )
                  }
                  placeholder="Search Guide Names..."
                  aria-describedby="SearchGuide"
                />
                <InputGroup.Text id="SearchGuide">
                  <BsSearch />
                </InputGroup.Text>
              </InputGroup>
            </div>
            <div className="row mt-4">
              {filtered.map((item) => (
                <Col md={4} lg={4} className="mt-4" key={item.id}>
                  <Card className="guide-card-alignment" style={{ height: "100%" }}>
                    <Card.Img className=" guide-card-img"
                      variant="top"
                      alt="guide images"
                      src={item.imageUrl}
                      height={220}
                    />
                    <Card.Body
                      className="d-flex justify-content-center"
                      style={{ flexDirection: "column", backgroundColor:"white" }}
                    >
                      <h6 className="" style={{ fontSize: 14 ,color:"black"}}>
                        Name: {item.guide_name}
                      </h6>
                      <p className="" style={{ fontSize: 13 }}>
                        Languages: {item.languages.join(", ")}
                      </p>
                    </Card.Body>
                    <Card.Footer
                      className="text-center mb-3"
                      style={{
                        backgroundColor: "white",
                        borderTop: "none",
                      }}
                    >
                      <Button className="guide-profile-btn">
                      <Link 
                        to={`/guide-profile/${item.id}`}
                        className="view-profile-link"
                      >
                        View Profile
                      </Link>
                      </Button>
                    </Card.Footer>
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
