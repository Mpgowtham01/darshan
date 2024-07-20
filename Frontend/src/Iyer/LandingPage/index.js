import React, { useState } from "react";
import { Button, Col, Container } from "react-bootstrap";
import { BiSmile } from "react-icons/bi";
import { FaFire, FaUserPlus } from "react-icons/fa";
import { MdFormatQuote } from "react-icons/md";
import "./landingpage.css";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";

const data = [
  {
    content:
      "We have booked a priest with someother website, but the priest didn’t pick the call. Then I found priest.com, I called them just 3 hours before the event and they arranged 2 Priest for house warming with all materials. Kudos",
    name: "Dr. VASANTHAKUMAR",
    qualification: "Doctor",
    area: "Adyar",
    district: "Chennai",
  },
  {
    content:
      "We have booked a priest with someother website, but the priest didn’t pick the call. Then I found priest.com, I called them just 3 hours before the event and they arranged 2 Priest for house warming with all materials. Kudos",
    name: "ER.SIVANANDHAA",
    qualification: "Doctor",
    area: "Adyar",
    district: "Chennai",
  },
  {
    content:
      "We have booked a priest with someother website, but the priest didn’t pick the call. Then I found priest.com, I called them just 3 hours before the event and they arranged 2 Priest for house warming with all materials. Kudos",
    name: "Dr. VASANTHAKUMAR",
    qualification: "Doctor",
    area: "Adyar",
    district: "Chennai",
  },
];
function LandingPage() {
  const [Testimonials] = useState(data);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/priestbooking");
  };
  const handleRedirect = () => {
    navigate("/bookmyiyer/contact-us");
  };
  return (
    <Layout>
      <br />
      <div className="mt-5 pt-2">
        <div className="section-content">
          <div className="overlay-style">
            <h2 style={{ color: "white" }}>Book Your Iyer with one click</h2>
            <div
              className="d-flex justify-content-center mt-3"
              style={{ position: "relative" }}
            >
              <Button className="book-style me-1" onClick={handleClick}>
                Book Now !
              </Button>
              <Button className="contact-style ms-1" onClick={handleRedirect}>
                Contact
              </Button>
            </div>
          </div>
        </div>

        {/* Second Content */}
        <Container style={{ backgroundColor: "#f4fafd" }}>
          <div className="why-content" style={{ flexDirection: "column" }}>
            <h2 className="mb-3">Why priestbooking?</h2>
            <p style={{ width: "80%", fontSize: 16, textAlign: "center" }}>
              On time arrival of priest, completing pujas on time with quality.
              Bringing puja materials to the venue. Below is our success count.
            </p>
            <div className="row mt-3" style={{ width: "100%" }}>
              <Col
                className="d-flex justify-content-center"
                style={{ flexDirection: "column" }}
              >
                <div className="d-flex justify-content-center align-items-center">
                  <FaUserPlus
                    style={{ fontSize: 36, color: "#08acb1", marginRight: 10 }}
                  />
                  <h4>15,000+</h4>
                </div>
                <h6 className="text-center mt-3" style={{ color: " #FF9800" }}>
                  PRIESTS AROUND THE WORLD
                </h6>
              </Col>
              <Col
                className="d-flex justify-content-center"
                style={{ flexDirection: "column" }}
              >
                <div className="d-flex justify-content-center align-items-center">
                  <BiSmile
                    style={{ fontSize: 36, color: "#08acb1", marginRight: 10 }}
                  />
                  <h4>15,000+</h4>
                </div>
                <h6 className="text-center mt-3" style={{ color: " #FF9800" }}>
                  HAPPY CLIENTS
                </h6>
              </Col>
              <Col
                className="d-flex justify-content-center"
                style={{ flexDirection: "column" }}
              >
                <div className="d-flex justify-content-center align-items-center">
                  <FaFire
                    style={{ fontSize: 36, color: "#08acb1", marginRight: 10 }}
                  />
                  <h4>15,000+</h4>
                </div>
                <h6 className="text-center mt-3" style={{ color: " #FF9800" }}>
                  PUJAS COMPLETED
                </h6>
              </Col>
            </div>
          </div>
        </Container>
        {/* Second Content end*/}

        {/* Third Content */}
        {/* <Container>
          <div className="row py-5">
            <Col
              sm={12}
              md={4}
              lg={4}
              className="d-flex justify-content-between align-items-center px-2 mt-4"
              style={{ flexDirection: "column" }}
            >
              <div
                className="p-4"
                style={{ borderRadius: 50, backgroundColor: "#03a9f4" }}
              >
                <BiCalendar style={{ fontSize: 50, color: "white" }} />
              </div>
              <h6 className="text-center my-4" style={{letterSpacing:2}}>
                Muhurtham dates and Discount Calendar
              </h6>
              <p className="text-center">
                Find list of Muhurtham dates in 2019 with discount calendar. We
                provide upto 20% discount on normal days.
              </p>
              <Button className="calendar-button">Check Dates</Button>
            </Col>
            <Col
              sm={12}
              md={4}
              lg={4}
              className="d-flex justify-content-between align-items-center px-2 mt-4"
              style={{ flexDirection: "column" }}
            >
              <div
                className="p-4"
                style={{ borderRadius: 50, backgroundColor: "#FF9800" }}
              >
                <HiUserGroup style={{ fontSize: 50, color: "white" }} />
              </div>
              <h6 className="text-center my-4" style={{letterSpacing:2}}>Join our network</h6>
              <p className="text-center">
                If you are a hindu priest in any of the veda, it’s right time to
                join with us. Fill the form provided in the below button and
                join us today!
              </p>
              <Button className="calendar-button">Join Us</Button>
            </Col>
            <Col
              className="d-flex justify-content-between align-items-center px-2 mt-4"
              style={{ flexDirection: "column" }}
            >
              <div
                className="p-4"
                style={{ borderRadius: 50, backgroundColor: "#8c239f" }}
              >
                <FaMagic style={{ fontSize: 50, color: "white" }} />
              </div>
              <h6 className="text-center my-4" style={{letterSpacing:2}}>Astrology Consultation</h6>
              <p className="text-center">
                Get an appointment now with our astrologer consultant for
                marriage matching, life problems, doshams etc. Our prediction
                will be 99.9% accurate.
              </p>
              <Button className="calendar-button">Fix an Appointment</Button>
            </Col>
          </div>
        </Container> */}
        {/* Third content end */}

        {/* Fourth Content */}
        <Container className="pt-5 pb-5">
          <h2 className="text-center mt-3">Client Testimonials</h2>
          <h5 className="text-center mt-3">
            Don’t take our word for it – here’s what our clients say:
          </h5>
          <div className="row mt-4">
            {Testimonials.map((list, index) => (
              <Col>
                <div className="text-center mb-2">
                  <MdFormatQuote style={{ fontSize: 32, color: "#08acb1" }} />
                </div>
                <p className="text-center">{list.content}</p>
                <h6 className="text-center mt-4 mb-3">{list.name}</h6>
              </Col>
            ))}
          </div>
        </Container>
        {/* Fourth Content End */}
      </div>
    </Layout>
  );
}

export default LandingPage;
