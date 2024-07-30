import React, { useEffect, useRef } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import yatra from "../../components/Images/yatra.png";
import book from "../../components/Images/book.png";
import Layout from "../../components/Layout";
import guide from "../../components/Images/guidelogo.png";
import training from "../../components/Images/training.png";
import iyer from "../../components/Images/iyerlogo.png";

const Vendorservice = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  const templeData = [
    // {
    //   name: "Iyer Booking",
    //   URL: "/bookmyiyer/priestbooking",
    //   des:
    //     "an arrangement to have a place on a flight, a room in a hotel, etc. at a particular time in the future",
    //   image: iyer,
    // },
    {
      name: "Iyer Booking",
      URL: "/bookmyiyer/puja",
      des:
        "an arrangement to have a place on a flight, a room in a hotel, etc. at a particular time in the future",
      image: iyer,
    },
    {
      name: "Yatra Booking",
      URL: "/yatrabooking",
      des:
        "an arrangement to have a place on a flight, a room in a hotel, etc. at a particular time in the future",
      image: yatra,
    },
    {
      name: "Room Booking",
      URL: "/roombookingDetails",
      des:
        "an arrangement to have a place on a flight, a room in a hotel, etc. at a particular time in the future",
      image: book,
    },

    {
      name: "Training",
      URL: "/bookmyiyer/training-class",
      des:
        "an arrangement to have a place on a flight, a room in a hotel, etc. at a particular time in the future",
      image: training,
    },
    {
      name: "Guide",
      URL: "/bookmyiyer/guide",
      des:
        "an arrangement to have a place on a flight, a room in a hotel, etc. at a particular time in the future",
      image: guide,
    },
  ];

  return (
    <>
      <Layout>
        <br />
        <br />
        <Container ref={headingRef}>
          <section className="mb-5">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h2 className="title mt-5">Vendor Services</h2>
            </div>
            <Row className="g-4 mt-2">
              {templeData.map((list, i) => (
                <Col key={i} sm={4} lg={4}>
                  <Card className="vendorservice_card">
                    <Card.Body>
                      <Link to={list.URL} className="custom-link">
                        <div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <img
                              src={list?.image}
                              alt="templeimages"
                              style={{ width: "100px" }}
                            />
                          </div>
                          <br />
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              marginBottom: "8px",
                            }}
                          >
                            <span className="mt-3">{list.name}</span>
                          </div>
                          <div>
                            <p style={{ color: "black", fontSize: "12px" }}>
                              {list.des}
                            </p>
                            <button className="vendor_btn mt-2">View</button>
                          </div>
                        </div>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </section>
        </Container>
      </Layout>
    </>
  );
};

export default Vendorservice;
