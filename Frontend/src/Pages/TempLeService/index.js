import React, { useEffect } from "react";
import HeaderNavBar from "../../components/HeaderNavBar";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../TempLeService/Templservice.scss";
import Footer from "../../components/Footer";
import yatra from "../../components/Images/yatra.png";
import book from "../../components/Images/book.png";

function TempleService(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const templeData = [
    {
      name: "Yatra Booking",
      URL: "/yatrabooking",
      des:
        "an arrangement to have a place on a flight, a room in a hotel, etc. at a particular time in the future",
      image: yatra,
    },
    {
      name: "Room Booking",
      URL: "/roombooking",
      des:
        "an arrangement to have a place on a flight, a room in a hotel, etc. at a particular time in the future",
      image: book,
    },
  ];

  return (
    <div className="templeServiePage">
      <HeaderNavBar />

      <div className="ventor-cards">
        <div className="card-item">
          <section className="mt-5 mb-5">
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
                            <img src={list?.image} style={{ width: "100px" }} />
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
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default TempleService;
