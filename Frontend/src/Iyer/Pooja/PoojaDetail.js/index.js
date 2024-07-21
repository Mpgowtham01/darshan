import React, { useEffect, useState } from "react";
import { Col, Container, Image, Card, Button } from "react-bootstrap";
import Layout from "../../Components/Layout";
import "./poojadetails.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Api from "../../../Api";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p style={{ textAlign: "justify", lineHeight: 2 }}>
      {isReadMore ? text?.slice(0, 400) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? " ...Read More" : " Show Less"}
      </span>
    </p>
  );
};

export default function PoojaDetail() {
  const [poojaLists, setAllPooja] = useState();
  const navigate = useNavigate();
  const handleCardClick = (path) => {
    navigate(path);
  };
  const { id } = useParams();

  useEffect(() => {
    getOnePooja();
  }, []);

  const getOnePooja = () => {
    Api.get(`/pooja/getbyid/${id}`).then((res) => {
      setAllPooja(res.data);
    });
  };

  return (
    <Layout>
      <div className="container-fluid mt-5 pt-2 fullscreen">
        <Container>
          <div className="row my-5">
            <Col
              className="d-flex justify-content-center align-items-start"
              md={6}
              lg={6}
            >
              <div
                className="d-flex justify-content-center mt-4 mx-5"
                style={{ flexDirection: "column" }}
              >
                <h4 className="text-center mb-2">{poojaLists?.poojaName}</h4>
                <ReadMore className=" d-flex justify-content-center">
                  {poojaLists?.description}
                </ReadMore>
              </div>
            </Col>
            <Col className="px-5">
              <Image
                src={poojaLists?.image}
                alt="Pooja images"
                height={300}
                width="100%"
              />
            </Col>
          </div>
          <div className="section-content">
            <div className="overlay-style">
              <h2 style={{ color: "white" }}>Book Your Iyer with one click</h2>
              <div
                className="d-flex justify-content-center mt-3"
                style={{ position: "relative" }}
              >
                <Button
                  className="book-style me-1"
                  onClick={() => navigate("/bookmyiyer/iyerlist")}
                >
                  Book Now !
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
