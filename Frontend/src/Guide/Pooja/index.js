import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Col, InputGroup, Form, Card, Button } from "react-bootstrap";
// import "../../Pages/Event/Events.scss";
import Select from "react-select";
import "./pooja.css";
import { Checkbox } from "antd";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function GPooja() {
  const [inside, setInside] = useState(false);
  const [outside, setOutside] = useState(false);
  const [all, setAll] = useState(true);
  const [search, setSearch] = useState("");
  const [languageValue, setLanguageValue] = useState("");
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

  const navigate = useNavigate();

  const [poojaList, setpoojaList] = useState([
    {
      imageUrl:
        "https://5.imimg.com/data5/CO/GL/MY-5671492/house-warming-catering-services-500x500.png",
      poojaName: "House Warming",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1542042161784-26ab9e041e89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwbWFycmlhZ2V8ZW58MHx8MHx8&w=1000&q=80",
      poojaName: "Marriage",
    },
    {
      imageUrl:
        "https://m.economictimes.com/thumb/msid-93728283,width-1200,height-900,resizemode-4,imgsize-118038/ganesh-chaturthi-2022-all-you-may-want-to-know-about-the-festival.jpg",
      poojaName: "Ganesh Charduthi",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-_zGjGZBn5JkfYBLcvm1MzZ4rNNXxD-ILf_eEaD1xLDnWsbSVaow7UOyrYSfLmJkWGw&usqp=CAU",
      poojaName: "Sasti",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIUdA4dIYKTB4j0ri55INqkYNqmcvqMm_pag&usqp=CAU",
      poojaName: "Pradhosam",
    },
  ]);

  return (
    <Layout>
      <div className="container-fluid mt-5 pt-2 fullscreen">
        <div className="row">
          <Col xs={3} md={3} lg={3} className="filter-cards px-0 py-5">
            <div className="ms-3">
              <h6 className="my-3">
                {/* <HiFilter style={{fontSize:22, color:"#08acb1"}}/> */}
                &nbsp;{"Filter Search"}
              </h6>
              <InputGroup className="mb-3 pe-3">
                <Form.Control
                  placeholder="Search Puja Names..."
                  aria-describedby="SearchTemple"
                />
                <InputGroup.Text id="SearchTemple">
                  <BsSearch />
                </InputGroup.Text>
              </InputGroup>

              <div className="d-flex justify-content-start ms-3 mt-2">
                <Checkbox
                  className="pooja-checkbox"
                  checked={all}
                  onChange={() => {
                    setOutside(false);
                    setInside(false);
                    setAll(!all);
                  }}
                />
                <label className="ms-2">All</label>
              </div>
              <div className="d-flex justify-content-start ms-3 mt-2">
                <Checkbox
                  className="pooja-checkbox"
                  checked={inside}
                  onChange={() => {
                    setOutside(false);
                    setAll(false);
                    setInside(!inside);
                  }}
                />
                <label className="ms-2">Inside Temple</label>
              </div>
              <div className="d-flex justify-content-start ms-3 mt-2">
                <Checkbox
                  className="pooja-checkbox"
                  checked={outside}
                  onChange={() => {
                    setInside(false);
                    setAll(false);
                    setOutside(!outside);
                  }}
                />
                <label className="ms-2">Outside Temple</label>
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
              <div className="d-flex justify-content-between me-3 mt-3">
                <Button
                  className="reset-button-style"
                  onClick={() => {
                    setLanguageValue("");
                    setInside(false);
                    setOutside(false);
                    setAll(true);
                  }}
                >
                  Reset
                </Button>
                <Button className="go-button">Go</Button>
              </div>
            </div>
          </Col>
          <Col className="right-content-pooja py-3 ms-5">
            <div className="row">
              <h5 className="mt-3 mb-0">PUJA'S LISTss</h5>
              {poojaList.map((item, index) => (
                <Col md={4} lg={4} className="mt-4">
                  <Card
                  className="card-alignment"
                    style={{
                      cursor: "pointer"
                    }}
                    onClick={() => {
                      navigate("/bookmyguide/puja/details",{ state: { item } });
                    }}
                  >
                    <Card.Img
                      variant="top"
                      alt="Pooja images"
                      src={item.imageUrl}
                      height={170}
                    />
                    <Card.Body>
                      <h6 className="text-center" style={{ fontSize: 14 }}>
                        {item.poojaName}
                      </h6>
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
