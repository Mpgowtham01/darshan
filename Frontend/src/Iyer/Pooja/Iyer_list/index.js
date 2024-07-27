import React, { useState, useEffect } from "react";
import { Col, Form, Card, Button, InputGroup,  Modal,
} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  getAreaList,
  getCityList,
  getCountryList,
  getDistrictList,
  getStateList,
} from "../../../../src/Pages/Admin/AddTempleList/utils";
import Layout from "../../../components/Layout";
import Api from "../../../Api";
import { Divider, Rate, DatePicker } from "antd";

export default function Iyer_list(props) {
  const [filtered, setFiltered] = useState([]);
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
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleNavigate = (prefill) => {
    navigate("/boomyiyer/priestbooking", { state: { prefill } });
  };
  const { state: location } = useLocation();
  console.log('location', location)
  const navigate = useNavigate();
  useEffect(() => {
    getAllIyer();
  }, []);

  const getAllIyer = () => {
    Api.get("/iyer/getAllIyer").then((res) => {
      console.log("res :>> ", res);
      setFiltered(res.data);
    });
  };

  useEffect(() => {
    getCountryList(setCountries);
  }, []);

  const handleFilterChange = () => {
    let filteredList = filtered;

    if (languages.length > 0) {
      filteredList = filteredList.filter((guide) =>
        languages.some((lang) => (guide.languagename || []).includes(lang))
      );
    }
    setFiltered(filteredList);
  };

  console.log("filtered :>> ", filtered);
  console.log("languages :>> ", languages);

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
      <div className="mt-5 pt-2 pb-4">
        <div className="row">
          <Col xs={3} md={3} lg={3} >
          <Card style={{height:"95%",marginTop:"2vh",marginLeft:"2vh"}}>
            <div className="ms-4 filter-div pb-5">
              <h6 className="my-2 pt-3 pb-3">&nbsp;Filter Search</h6>
              <h6>{location?.select === "auspicious" ? "AUSPICIOUS LIST (சுபகாரியம்)" : "INAUSPICIOUS LIST (அபகாரியம்)"}</h6>
              <div className="">
          <label style={{marginTop:"2vh"}}>Language</label>
                <div className="language-buttons ms-0 pt-2">
                  {[
                    "English",
                    "Hindi",
                    "Tamil",
                    "Telugu",
                    "Kannada",
                    "Malayalam",
                  ].map((lang) => (
                    <Button style={{width:"auto",fontSize:'11.5px'}}
                      key={lang}
                      variant={
                        languages.includes(lang)
                          ? "primary"
                          : "outline-secondary"
                      }
                      className="guide-filter-btn"
                      onClick={() => handleLanguageSelection(lang)}
                    >
                      {lang}
                    </Button>
                  ))}
                </div>
              </div>
              <label style={{marginTop:"1vh"}}>Date</label>
              <DatePicker style={{ width: "100%",height:"37px",borderRadius:"5px",border:'1px solid gray' }} />
              <label style={{marginTop:"1vh"}}>Place</label>
              <InputGroup style={{ width: "100%" }}>
                <Form.Control
                  onChange={(e) =>
                    setFiltered(
                      filtered.filter((guide) =>
                        guide.iyername
                          .toLowerCase()
                          .includes(e.target.value.toLowerCase())
                      )
                    )
                  }
                  placeholder="Search Place"
                  aria-describedby="SearchGuide"
                />
                <InputGroup.Text id="SearchGuide">
                  <BsSearch />
                </InputGroup.Text>
              </InputGroup>
              {/* <Form.Group controlId="country" className="ms-2 me-2">
                <Form.Control
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
              <Form.Group controlId="state" className="ms-2 me-2 mt-3">
                <Form.Control
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
              <Form.Group controlId="district" className="ms-2 me-2 mt-3">
                <Form.Control
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
              <Form.Group controlId="city" className="ms-2 me-2 mt-3">
                <Form.Control
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
              <Form.Group controlId="area" className="ms-2 me-2 mt-3">
                <Form.Control
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
              </Form.Group> */}
              <div className="d-flex justify-content-between me-3 mt-3">
                <Button className="guide-filter-reset" onClick={resetFilters}>
                  Reset
                </Button>
              </div>
            </div>
            </Card>
          </Col>
          <Col className="right-content-pooja py-3 ms-5 me-3">
            {/* <div className="d-flex justify-content-between mt-3">
              <h5 className="mb-0">IYER LIST</h5>
              <InputGroup style={{ width: "30%" }}>
                <Form.Control
                  onChange={(e) =>
                    setFiltered(
                      filtered.filter((guide) =>
                        guide.iyername
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
            </div> */}
            <div className="row mt-4">
              {filtered.map((item) => (
                <Col md={12} lg={4} sm={12} className="mt-2 me-3" key={item.iyerId}>
                  <Card
                    className="guide-card-alignment"
                    style={{ height: "100%" }}
                  >
                  {  console.log('item', item)}
                    <Card.Img
                      className="guide-card-img"
                      variant="top"
                      alt="guide images"
                      src={`${process.env.REACT_APP_DEV_BASE_URL}${item.imageUrl}`}
                      height={220}
                    />
                    <Card.Body
                      className="d-flex justify-content-center"
                      style={{
                        flexDirection: "column",
                        backgroundColor: "white",
                      }}
                    >
                      <div className="iyer_listCardReviewContainer">
                        <div className="iyer__listCardContainer">
                          <div
                            className=""
                            style={{  color: "black" }}
                          >
                           <span style={{fontWeight:"600"}}> Name :</span> {item.iyername}
                          </div>
                          <div className="pt-2" >
                          <span style={{fontWeight:"600"}}> Languages :</span> {item.languagename}
                          </div>
                          <div className="pt-2" >
                          <span style={{fontWeight:"600"}}> District :</span> {item.iyerDistrict}
                          </div>
                          <div className="pt-2" >
                          <span style={{fontWeight:"600"}}> Place :</span> {item.iyerCity}
                          </div>
                        </div>
                        <div>
                          {" "}
                          <div><Rate count={5} value={item.iyerReviewData} /></div>

                          <div className="review_btn_css"> Review <span>134</span></div>

                        </div>
                      </div>
                    </Card.Body>
                    <Card.Footer
                      className="text-center mb-3"
                      style={{
                        backgroundColor: "white",
                        borderTop: "none",
                      }}
                    >
                      <Button className="guide-profile-btn" onClick={handleShow}>
                        {/* <Link
                          to={`/boomyiyer/priestbooking`}
                          className="view-profile-link"
                        > */}
                          Book Iyer
                        {/* </Link> */}
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </div>
          </Col>
          <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <div className="model_heading_">Is this Iyer is for yourself or someone else ?</div>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="success" onClick={() => handleNavigate(true)} className="me-3">
            For Myself
          </Button>
          <Button variant="primary" onClick={() => handleNavigate(false)}>
            For Someone elese
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
      </div>
    </Layout>
  );
}
