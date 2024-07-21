import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "./OurService.css";
// import iyer from "../../components/Images/iyerlogo.png";
import calendar from "../../components/Images/calendarlogo.png";
import vendor from "../../components/Images/vendor1.png";
import blog from "../../components/Images/bloglogo.png";
import event from "../../components/Images/eventlogo.png";
import "./HomePage.scss";

const OurService = () => {
  const templeData = [
    // {
    //   name: "Puja",
    //   URL: "/bookmyiyer/puja",
    //   image: puja,
    // },
    // {
    //   name: "Iyer Booking",
    //   URL: "/bookmyiyer/priestbooking",
    //   image: iyer,
    // },
    {
      name: "Vendor Service",
      URL: "/bookmyiyer/vendorBooking",
      image: vendor,
    },
    {
      name: "Calendar",
      URL: "/bookmyiyer/calendar",
      image: calendar,
    },
    // {
    //   name: "Training",
    //   URL: "/bookmyiyer/training-class",
    //   image: training,
    // },
    // {
    //   name: "Guide",
    //   URL: "/bookmyiyer/guide",
    //   image: guide,
    // },
   
    {
      name: "Blog",
      URL: "/temple-blogs",
      image: blog,
    },
    {
      name: "Event",
      URL: "/events-list",
      image: event,
    },
  ];

  return (
    <>
      <Container>
        <section>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h2 className="title mt-3">Our Services</h2>
          </div>
          <Row className="g-5 mt-2">
            {templeData.map((list, i) => (
              <Col key={i} sm={4} lg={3} className="mb-4">
                <Card className="custom-card">
                  <Card.Body>
                    <Link to={list.URL} className="custom-link">
                      <div>
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <img
                            src={list?.image}
                            style={{ width: "130px", height: "130px" }}
                          />
                        </div>
                        <br />
                        <div
                        // style={{ display: "flex", justifyContent: "center" }}
                        >
                          <span className="mt-1">{list.name}</span>
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
    </>
  );
};

export default OurService;
