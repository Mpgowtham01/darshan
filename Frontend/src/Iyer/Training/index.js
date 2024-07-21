import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { Col, InputGroup, Form, Card } from "react-bootstrap";
import { Button } from "primereact/button";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import "./training.scss";
import axios from "axios";

export default function Training() {
  const [classlist, setclasslist] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    gettrainingList();
  }, []);

  const gettrainingList = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/trainerclasslist/getAll`)
      .then((res) => {
        setclasslist(res.data);
      });
  };

  const handleFilterBlogByText = (e) => {
    const re = RegExp(
      `.*${e.target.value
        .toLowerCase()
        .split("")
        .join(".*")}.*`
    );

    const newData = classlist.filter((list) =>
      list.class_name.toLowerCase().match(re)
    );

    setFiltered(newData);

    if (e.target.value == "") {
      setFiltered(classlist);
    }
  };

  return (
    <Layout>
      <br />
      <div className="container mt-5 pt-2 fullscreen">
        <div className="right-content-pooja py-3">
          <div className="row">
            <div className="d-flex justify-content-between mt-3">
              <h5 className="mb-0">TRAINING CLASS LIST</h5>
              <InputGroup style={{ width: "30%", marginTop: "5vh" }}>
                <Form.Control
                  onChange={handleFilterBlogByText}
                  placeholder="Search Puja Names..."
                  aria-describedby="SearchTemple"
                />
                <InputGroup.Text id="SearchTemple">
                  <BsSearch />
                </InputGroup.Text>
              </InputGroup>
            </div>
            {filtered.length > 0
              ? filtered.map((item, index) => (
                  <div className="flip-card">
                    <Col md={4} lg={4} className="mt-4  flip-card-inner">
                      <Card
                        className="card-alignment flip-card-front"
                        style={{
                          height: "100%",
                        }}
                      >
                        <Card.Img
                          style={{ borderRadius: "5px", position: "absolute" }}
                          variant="top"
                          alt="Pooja images"
                          src={`${process.env.REACT_APP_DEV_BASE_URL}${item.images}`}
                          height={338}
                        />

                        <Card.Body
                          className="d-flex justify-content-center"
                          style={{
                            flexDirection: "column",
                          }}
                        >
                          <h6
                            className="text-center training-title"
                            style={{ fontSize: 16 }}
                          >
                            {item.class_name}
                          </h6>
                        </Card.Body>
                      </Card>
                      <div className="flip-card-back">
                        <h3 style={{ fontSize: 16, fontWeight: 700 }}>
                          Description
                        </h3>
                        <p>{item.description}</p>
                        <div className="click">
                          <button
                            className="button-78"
                            onClick={() => {
                              navigate(
                                `/bookmyiyer/training-class/trainer-list/${item.id}`
                              );
                            }}
                          >
                            <h6
                              style={{
                                fontsize: "14px",
                                marginLeft: "-0.8vh",
                                alignItems: "center",
                                marginTop: "-0.8vh",
                                color: "white",
                                fontWeight: "500",
                              }}
                            >{`Click here >>`}</h6>
                          </button>
                        </div>
                      </div>
                    </Col>
                  </div>
                ))
              : classlist.map((item, index) => (
                  <div className="flip-card">
                    <Col md={4} lg={4} className="mt-4  flip-card-inner">
                      <Card
                        className="card-alignment flip-card-front"
                        style={{
                          height: "100%",
                        }}
                      >
                        <Card.Img
                          style={{ borderRadius: "5px", position: "absolute" }}
                          variant="top"
                          alt="Pooja images"
                          src={`${process.env.REACT_APP_DEV_BASE_URL}${item.images}`}
                          height={338}
                        />

                        <Card.Body
                          className="d-flex justify-content-center"
                          style={{
                            flexDirection: "column",
                          }}
                        >
                          <h6
                            className="text-center training-title"
                            style={{ fontSize: 16 }}
                          >
                            {item.class_name}
                          </h6>
                        </Card.Body>
                      </Card>
                      <div className="flip-card-back">
                        <h3 style={{ fontSize: 16, fontWeight: 700 }}>
                          Description
                        </h3>
                        <p>{item.description}</p>
                        <div className="click">
                          <button
                            className="button-78"
                            onClick={() => {
                              navigate(
                                `/bookmyiyer/training-class/trainer-list/${item.id}`
                              );
                            }}
                          >
                            <h6
                              style={{
                                fontsize: "14px",
                                marginLeft: "-0.8vh",
                                alignItems: "center",
                                marginTop: "-0.8vh",
                                color: "white",
                                fontWeight: "500",
                              }}
                            >{`Click here >>`}</h6>
                          </button>
                        </div>
                      </div>
                    </Col>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
