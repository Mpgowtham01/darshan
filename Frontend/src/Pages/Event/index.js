import React, { useState, useEffect } from "react";
// import background from "../../components/Images/god.jpeg";
import { Card, Col, Row } from "react-bootstrap";

import Select from "react-select";
//style
import "../Event/Events.scss";
import HeaderNavBar from "../../components/HeaderNavBar";
import Footer from "../../components/Footer";
import Api from "../../Api";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment/moment";
import { Calendar } from "primereact/calendar";
// import { Value } from "sass";

export default function Events() {
  const [opendate, setOpendate] = useState(false);
  const [opencategories, setOpencategories] = useState(false);
  const [menuCollapse, setmenuCollapse] = useState(false);
  const menuIconClick = () => {
    menuCollapse ? setmenuCollapse(false) : setmenuCollapse(true);
  };
  const [menuCollapse2, setmenuCollapse2] = useState(false);
  const menuIconClick2 = () => {
    menuCollapse2 ? setmenuCollapse2(false) : setmenuCollapse2(true);
  };
  const [menuCollapse3, setmenuCollapse3] = useState(false);
  const menuIconClick3 = () => {
    menuCollapse3 ? setmenuCollapse3(false) : setmenuCollapse3(true);
  };
  const [CategoryList, setCategoryList] = useState([]);

  const [templeData, setTempleData] = useState([]);
  {
    console.log("object :>> ", templeData);
  }
  const [eventDate, setEventDate] = useState("");
  const [category, setcategory] = useState();
  const navigate = useNavigate();
  // const params = useParams();

  useEffect(() => {
    getCategoryList();
    templeGetAll();

    // axios
    //   .get("http://localhost:4000/event/getAll")
    //   .then((res) => {
    //     // console.log("res", res);
    //     setTempleData(res.data);
    //   })
    //   .catch((err) => console.log(err));
  }, []);

  const templeEventPage = (events) => {
    console.log("object@@@@:>> ", events);
    navigate(`/eventtempledetails/${events.temple_eventid}`);
  };

  const templeGetAll = async () => {
    await Api.get(`${process.env.REACT_APP_DEV_BASE_URL}/event/getAll`).then((res) => {
      setTempleData(res.data);
      console.log("data",setTempleData);
    });
  };

  const getCategoryList = async () => {
    await Api.get("blogeventcategory/getcategories").then((res) => {
      setCategoryList(res.data);
    });
  };

  const getCategoriesList = async (id) => {
    Api.get(`templeevent/categoryfilter/${id}`).then((res) => {
      setTempleData(res.data);
    });
  };
  const getTempleEvent = async (dateValue) => {
    const value = moment(dateValue).format("YYYY/MM/DD");
    Api.post(`templeevent/filterevent`, {
      date: value,
    }).then((res) => {
      console.log("res", res);
      setTempleData(res.data);
    });
  };
console.log("temple data",templeData);
  return (
    <div>
      <HeaderNavBar />
      <br />
      <div className="container-fluid bg-light fullscreen ">
        <div className="row mt-4">
          <Col md={4} lg={3}>
            <div className="allTemplePage__leftSection">
              <div className="allTemplePage__leftSection--container">
                <h2 className="title" style={{ marginTop: "15px" }}>
                  Advance Search
                </h2>
                <div className="card1 mt-4" border="light">
                  <div
                    className="datecard p-2"
                    style={{ backgroundColor: "lightgray", borderRadius: 8 }}
                  >
                    <div
                      className="date"
                      onClick={() => setOpendate(!opendate)}
                      aria-expanded={opendate}
                    >
                      <div className="closemenu ps-1" onClick={menuIconClick}>
                        {menuCollapse ? (
                          <IoIosArrowUp className="me-2" />
                        ) : (
                          <IoIosArrowDown className="me-2" />
                        )}{" "}
                        Date
                      </div>
                    </div>
                  </div>
                  <Card.Body className="bg-white">
                    <Collapse in={opendate}>
                      <div>
                        <Calendar
                          value={eventDate}
                          style={{ height: 36, width: "100%" }}
                          placeholder="Date"
                          className="mt-4 ps-2"
                          onChange={(e) => {
                            setEventDate(e.target.value);
                            getTempleEvent(e.target.value);
                          }}
                        ></Calendar>
                        <div
                          className="reset-event-style ms-2"
                          onClick={() => {
                            setEventDate("");
                            templeGetAll();
                          }}
                        >
                          <p className="d-flex justify-content-center align-items-center event-reset-btn">
                            Reset
                          </p>
                        </div>
                      </div>
                    </Collapse>
                  </Card.Body>
                </div>
                <div className="card3 mt-3 ">
                  <div
                    className="categoriescard p-2"
                    style={{ backgroundColor: "lightgray", borderRadius: 8 }}
                  >
                    <div
                      className="categories"
                      onClick={() => setOpencategories(!opencategories)}
                      aria-controls="categories-buttons"
                      aria-expanded={opencategories}
                    >
                      <div className="closemenu ps-1" onClick={menuIconClick3}>
                        {menuCollapse3 ? (
                          <IoIosArrowUp className="me-2" />
                        ) : (
                          <IoIosArrowDown className="me-2" />
                        )}{" "}
                        Categories
                      </div>
                    </div>
                  </div>
                  <div>
                    <Collapse in={opencategories}>
                      <div>
                        <Select
                          className="mt-4 ms-2"
                          placeholder="select Event"
                          value={category}
                          onChange={(e) => {
                            setcategory(e);
                            getCategoriesList(e.value);
                            // setSelectSubCategories(e);
                            // setDetails({ ...details, subCategoriesId: e.value });
                          }}
                          options={CategoryList.map((list) => ({
                            label: list.category_name,
                            value: list.id,
                          }))}
                        />
                        <div
                          className="reset-event-style ms-2"
                          onClick={() => {
                            setcategory("");
                            templeGetAll();
                          }}
                        >
                          <p className=" d-flex justify-content-center align-items-center event-reset-btn">
                            Reset
                          </p>
                        </div>
                      </div>
                    </Collapse>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <div className="col-md-7 col-lg-9 p-5 mt-3">
            <h3 className="eventcolor fw-bold" style={{ marginTop: "5px" }}>
              Events List
            </h3>
            <Row className="eventss_templesList ">
              {templeData &&
                templeData.map((events, i) => (
                  <Col xs={12} sm={12} md={4} key={i}>
                    {/* {console.log("Image URL:", `${process.env.REACT_APP_DEV_BASE_URL}${events?.event_image}`)} */}
                    <Card
                      className="pt-4"
                      onClick={() => templeEventPage(events)}
                    >
                      <Card.Img
                        variant="top"
                        alt="Event images"
                        src={`${process.env.REACT_APP_DEV_BASE_URL}${events?.event_image}`}
                      />
                      <Card.Body 
                     
                      >
                        <Card.Title>
                          {events.event_name}
                          <br />
                          {events.address}
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
