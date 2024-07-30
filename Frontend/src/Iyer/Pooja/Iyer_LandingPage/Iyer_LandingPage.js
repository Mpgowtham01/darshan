import React, { useState } from "react";
import { Col, Row, Container, Card, Button, Modal } from "react-bootstrap";
import iyer from "../../../../src/Assets/iiyer.jpg";
import "./Iyer_LandingPage.scss";
import { Rate } from "antd";
import { BiSolidLike } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Layout from "../../Components/Layout";
const Iyer_LandingPage = () => {
  const navigate = useNavigate();
  const handleBackbtn = () => {
    navigate("/bookmyiyer/iyerlist");
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleNavigate = (prefill) => {
    navigate("/bookmyiyer/priestbooking", { state: { prefill } });
  };

  return (
    <Layout>
      <br />
      <br />
      <br />
      <div>
        <Container>
          <div>
            <Card className="mt-5">
              <Row className="p-3">
                <Col lg={8}>
                  <img
                    src={iyer}
                    alt=""
                    className="iyerReviewSection_img"
                  ></img>
                </Col>
                <Col lg={4} className="iyerRevie_rightSideContainer">
                  <div style={{ marginRight: "10px" }}>
                    <div className="rateingHeadingDiv_css">
                      <div className="rateingName_css">
                        <BiSolidLike style={{ color: "white" }} />{" "}
                      </div>
                      <h3 className="ms-2">Vijay</h3>
                    </div>

                    <div className="ratingCard_divs pt-2">
                      <Card className="rateingCard_css">4.8</Card>
                      <div className="mx-2">
                        <Rate count={5} value={5} />
                      </div>
                      <div>17 Ratings </div>
                      <div className="tick_icon_css">
                        {" "}
                        <TiTick />
                      </div>
                    </div>
                    <div className="rateingHeadingDiv_css">
                      <div className="font_sizeCss_container mt-2">
                        <div className="mt-1"> Tamil ,7 years Experience</div>
                        <div style={{ fontSize: "500" }} className="mt-1">
                          <CiLocationOn className="icon_logoCss" />{" "}
                          thambaram,Chennai
                        </div>
                      </div>
                    </div>
                    <div>
                      <address style={{ marginTop: "10px" }}>
                        plot No 15 15th streeth Nalmeiappar Nagar town
                        tirunelveli-645321
                      </address>
                    </div>
                    <div className="mt-3">
                      <Button onClick={handleShow}>Book Now</Button>
                      <Button
                        className="iyerLandingpage_backbtn ms-4"
                        onClick={handleBackbtn}
                      >
                        Back
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>
            <Card>
              <Row className="p-3">
                <Col lg={12}>
                  <h4>Quick Information</h4>
                  <Row className="py-3">
                    <Col lg={4} md={4}>
                      <div>
                        <h6 className="Quick_Information_heading">
                          Languages Spoken
                        </h6>
                        <div
                          className="Quick_Information_subHeading"
                          style={{ marginLeft: "10px" }}
                        >
                          Tamil,Malayalam
                        </div>
                      </div>
                    </Col>
                    <Col lg={4} md={4}>
                      <div>
                        <h6 className="Quick_Information_heading">
                          Year of Establishment
                        </h6>
                        <div
                          className="Quick_Information_subHeading"
                          style={{ marginLeft: "10px" }}
                        >
                          2001
                        </div>
                      </div>
                    </Col>
                    <Col lg={4} md={4}>
                      <div>
                        <h6 className="Quick_Information_heading">Timings</h6>

                        <Row>
                          <Col
                            className="Quick_Information_subHeading"
                            style={{ marginLeft: "10px" }}
                          >
                            Mon-Sun
                          </Col>
                          <Col>Open 24 Hrs</Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
            <Card>
              <Row className="p-3">
                <Col lg={12}>
                  <h4 className="mb-3">Services</h4>
                  <div className="iyerServicesDetails_container mb-1">
                    <div className="tick_icon_css1 me-2">
                      {" "}
                      <TiTick />
                    </div>{" "}
                    Marriage Astrology
                  </div>
                  <div className="iyerServicesDetails_container mb-1">
                    <div className="tick_icon_css1 me-2">
                      {" "}
                      <TiTick />
                    </div>{" "}
                    House Warming
                  </div>

                  <div className="iyerServicesDetails_container mb-1">
                    <div className="tick_icon_css1 me-2">
                      {" "}
                      <TiTick />
                    </div>{" "}
                    Ganesh Puja
                  </div>
                </Col>
              </Row>
            </Card>
            <Card className="mb-3">
              <div className="m-3">
                <h2>Reviews</h2>

                <Row className="review-overview">
                  <Col className="rating" lg={4}>
                    <center>
                      <div>
                        <h1>
                          <b>4.5</b>
                        </h1>
                        <p>184 reviews</p>
                      </div>
                      <div className="stars">
                        <FaStar color="gold" />
                        <FaStar color="gold" />
                        <FaStar color="gold" />
                        <FaStar color="gold" />
                        <FaStar color="gold" />
                      </div>
                    </center>
                  </Col>
                  <Col className="me-3" lg={7}>
                    <p className="review_paragraphyCss">
                      Reviews by Iyer. We perform checks on reviews
                    </p>
                    <div className="reiew_div">
                      <span>5 stars</span>
                      <div className="review-bar">
                        <div
                          className="filled-bar"
                          style={{ width: "83%" }}
                        ></div>
                      </div>
                      <span>153</span>
                    </div>
                    <div className="reiew_div">
                      <span>4 stars</span>
                      <div className="review-bar">
                        <div
                          className="filled-bar"
                          style={{ width: "9%" }}
                        ></div>
                      </div>
                      <span>17</span>
                    </div>
                    <div className="reiew_div">
                      <span>3 stars</span>
                      <div className="review-bar">
                        <div
                          className="filled-bar"
                          style={{ width: "2%" }}
                        ></div>
                      </div>
                      <span>4</span>
                    </div>
                    <div className="reiew_div">
                      <span>2 stars</span>
                      <div className="review-bar">
                        <div
                          className="filled-bar"
                          style={{ width: "1%" }}
                        ></div>
                      </div>
                      <span>2</span>
                    </div>
                    <div className="reiew_div">
                      <span>1 star</span>
                      <div className="review-bar">
                        <div
                          className="filled-bar"
                          style={{ width: "4%" }}
                        ></div>
                      </div>
                      <span>8</span>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card>
          </div>
        </Container>
        <Modal
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show}
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <div className="model_heading_">
              Is this Iyer is for yourself or someone else ?
            </div>
          </Modal.Header>
          <Modal.Footer>
            <Button
              variant="success"
              onClick={() => handleNavigate(true)}
              className="me-3"
            >
              For Myself
            </Button>
            <Button variant="primary" onClick={() => handleNavigate(false)}>
              For Someone elese
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <br />
    </Layout>
  );
};

export default Iyer_LandingPage;
