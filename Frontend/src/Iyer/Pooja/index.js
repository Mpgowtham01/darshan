import React, { useEffect, useState } from "react";
import { Col, InputGroup, Form, Card, Button } from "react-bootstrap";
import Select from "react-select";
import "./pooja.css";
import { Checkbox } from "antd";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import Api from "../../Api";

export default function Pooja() {
  const navigate = useNavigate();
  const handleCardClick = (item) => {
    console.log("item :>> ", item);
    navigate(
      `/bookmyiyer/puja/details/${item.id}`,
      localStorage.setItem("item", item.poojaName)
    );
  };

  const [poojasList, setAllPooja] = useState([]);

  useEffect(() => {
    getAllPooja();
  }, []);

  const getAllPooja = () => {
    Api.get("/pooja/getAll").then((res) => {
      console.log("res :>> ", res);
      setAllPooja(res.data);
    });
  };

  return (
    <Layout>
      <br />
      <div className="mt-5 pt-2">
        <div className="row">
          <Col className="right-content-pooja py-3 ms-5">
            <div className="row">
              <h5 className="mt-3 mb-0">PUJA'S LIST</h5>
              {poojasList.map((item, index) => (
                <Col md={3} lg={3} className="mt-4">
                  <Card
                    className="card-alignment"
                    style={{
                      cursor: "pointer",
                    }}
                    // onClick={() => {
                    //   navigate(`/bookmyiyer/puja/details/${item.id}`);
                    // }}
                    onClick={() => handleCardClick(item)}
                  >
                    <Card.Img
                      variant="top"
                      alt="Pooja images"
                      src={item.image}
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
