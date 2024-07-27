import React, { useEffect, useState } from "react";
import { Col, Card, Form } from "react-bootstrap";
import "./pooja.css";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import Api from "../../Api";
import image from "../../components/Images/loginTem.jpg";
import image1 from "../../components/Images/logintem1.jpg";

export default function Pooja() {
  const navigate = useNavigate();

  const [AuspiciousList, setAllPooja] = useState([]);
  const [InAuspiciousList, setInauspicious] = useState([]);
  const [selectedList, setSelectedList] = useState("auspicious");

  const handleCardClick = (item) => {
    const value={
      item:item,
      select:selectedList
    }
    navigate(`/bookmyiyer/puja/details`, { state: value });
  };

  useEffect(() => {
    getAllPooja();
    getInauspicious();
  }, []);

  const getAllPooja = () => {
    Api.get("/pooja/getAll").then((res) => {
      console.log("res :>> ", res);
      setAllPooja(res.data);
    });
  };
  const getInauspicious = () => {
    Api.get("/inauspicious/getAll").then((res) => {
      console.log("res :>> ", res);
      setInauspicious(res.data);
    });
  };

  return (
    <Layout>
      <br />
      <div className="mt-5 pt-2">
        <div className="row">
          <Col className="right-content-pooja py-3 ms-5 mt-3">
            <div className="row">
              {["radio"].map((type) => (
                <div
                  key={`inline-${type}`}
                  className="mb-3"
                  style={{ cursor: "pointer" }}
                >
                  <Form.Check
                    inline
                    label="AUSPICIOUS LIST (சுபகாரியம்)"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                    checked={selectedList === "auspicious"}
                    onChange={() => setSelectedList("auspicious")}
                    style={{ fontSize: "16px" }}
                  />
                  <Form.Check
                    inline
                    label="INAUSPICIOUS LIST (அபகாரியம்)"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                    checked={selectedList === "inauspicious"}
                    onChange={() => setSelectedList("inauspicious")}
                    style={{ fontSize: "16px" }}
                  />
                </div>
              ))}

              {(selectedList === "auspicious"
                ? AuspiciousList
                : InAuspiciousList
              ).map((item, index) => (
                <Col md={2} lg={2} className="mt-4" key={index}>
                  <Card
                    className="card-alignment"
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => handleCardClick(item)}
                  >
                    <Card.Img
                      variant="top"
                      alt="Pooja images"
                      src={item.image}
                      height={100}
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
      <br />
      <br />
    </Layout>
  );
}
