import React, { useState } from "react";
import { Col, Container, Image, Button } from "react-bootstrap";
import Layout from "../../Components/Layout";
import "./poojadetails.css";
import { useLocation, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const { state: location } = useLocation();
console.log('location', location)
const handleBookNow = () => {
  navigate(`/bookmyiyer/iyerlist`, { state: location });
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
                <h4 className="text-center mb-2">{location?.item?.poojaName}</h4>
                <ReadMore className=" d-flex justify-content-center">
                  {location?.item?.description}
                </ReadMore>
              </div>
            </Col>
            <Col className="px-5">
              <Image
                src={location?.item?.image}
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
                  onClick={handleBookNow}
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
