import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { Col, InputGroup, Form, Card, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import "./training.css";
import axios from "axios";

export default function Training() {
  const [classlist, setclasslist] = useState([]);
  const [filtered, setFiltered] = useState([]);

  console.log("filtered", filtered);
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
      <div className="container mt-5 pt-2 fullscreen">
        <div className="right-content-pooja py-3">
          <div className="row">
            <div className="d-flex justify-content-between mt-3">
              <h5 className="mb-0">GUIDE LIST</h5>
              <InputGroup style={{ width: "30%" }}>
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
                  <Col md={4} lg={4} className="mt-4">
                    <Card
                      className="card-alignment"
                      style={{
                        height: "100%",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        alt="Pooja images"
                        src={item.images}
                        height={200}
                      />
                      <Card.Body
                        className="d-flex justify-content-center"
                        style={{ flexDirection: "column" }}
                      >
                        <h6 className="text-center" style={{ fontSize: 14 }}>
                          {item.class_name}
                        </h6>
                      </Card.Body>
                      <Card.Footer
                        className="text-center"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          navigate(
                            `/bookmyiyer/training-class/trainer-list/${item.id}`
                          );
                        }}
                      >
                        <Link
                          style={{ textDecoration: "none" }}
                        >{`Click here >>`}</Link>
                      </Card.Footer>
                    </Card>
                  </Col>
                ))
              : classlist.map((item, index) => (
                  <Col md={4} lg={4} className="mt-4">
                    <Card
                      className="card-alignment"
                      style={{
                        height: "100%",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        alt="Pooja images"
                        src={item.images}
                        height={200}
                      />
                      <Card.Body
                        className="d-flex justify-content-center"
                        style={{ flexDirection: "column" }}
                      >
                        <h6
                          className="text-center card-title"
                          style={{ fontSize: 16 }}
                        >
                          {item.class_name}
                        </h6>
                      </Card.Body>
                      <Card.Footer
                        className="text-center"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          navigate(
                            `/bookmyiyer/training-class/trainer-list/${item.id}`
                          );
                        }}
                      >
                        <Link
                          style={{ textDecoration: "none" }}
                        >{`Click here >>`}</Link>
                      </Card.Footer>
                    </Card>
                  </Col>
                ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
