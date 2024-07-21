import React, { useEffect, useState } from "react";
import "../../Booking/RoomBooking/RoomBookingUi.scss";
import { Row, Col, Divider, Button, Rate } from "antd";
import { FaHotel } from "react-icons/fa";
import { LuLocateFixed } from "react-icons/lu";
import { TbBrandDaysCounter } from "react-icons/tb";
import { FaRupeeSign, FaTelegramPlane } from "react-icons/fa";
import { tourPackage } from "./RoomBookingJson";
import { HomePageCard } from "./RoomBookingJson";
import { TekkingCard } from "./RoomBookingJson";
import { PiQuotesBold } from "react-icons/pi";
import OwlCarousel from "react-owl-carousel";
import Layout from "../../../components/Layout";
import Navbars from "./searchNavbar";
import bedRoom1 from "./../../../Assets/bedRoom1.jpg";
import { Modal } from "react-bootstrap";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Api from "../../../Api";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const [bookingListDetails, setBookingListDetails] = useState([]);

  const displayedCards = bookingListDetails.slice(0, 7);
  // const tourDetailsCards = tourPackage.slice(0, 3);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleNavigate = (prefill) => {
    navigate("/roombooking", { state: { prefill } });
  };
  const bookingDetails = () => {
    Api.get("/roombook/getroombooking").then((res) => {
      setBookingListDetails(res.data);
    });
  };
  useEffect(() => {
    bookingDetails();
  }, []);
  const option = {
    items: 4,
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
  };

  return (
    <div>
      <Layout>
        <br />
        <br />
        <br />
        <br />

        <Navbars />
        <div
          style={{ margin: "18px 70px 0px 70px" }}
          className="HomePageCardRow1"
        >
          <br />
          <div className="h4_homepage">Book Rooms Properties</div>
          {/* <br /> */}
          <div className="payment_homepages mt-3 mb-3">
            <div className="hotelBooking_heading_css">
            <div className="icons_view"></div>
            <div className="p_tag_homepage">Hotel Booking Guarantee</div>
            </div>
            <Divider type="vertical" className="divider" /> &nbsp;
            <div className="hotelBooking_heading_css">
            <div className="icons_views"></div>
            <div className="p_tag_homepage">Cheep & Best Package Guarantee</div>
            </div>
          </div>
          <Row style={{ marginBottom: "30px" }}>
            {displayedCards.map((data) => (
              <Col xs={24} md={6} lg={6} className="HomePageCardCol">
                <div className="homePageCard">
                  <div className="HomePageCardContainer">
                    <img
                      className="HomePagePicture"
                      src={`${process.env.REACT_APP_DEV_BASE_URL}${data.images}`}
                      alt="homePage pic"
                    />
                    <div style={{ paddingTop: "10px" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            fontWeight: "bold",
                            fontSize: "18px",
                            paddingBottom: "5px",
                              display:"flex",
                          alignItems:"center"
                          }}
                        >
                          <FaHotel
                            className="roomBooking_Icon"
                            style={{ paddingRight: "5px" }}
                          />{" "}
                          {data.hotelName}
                        </div>
                        {/* <div style={{ display: "flex", alignItems: "center" }}>
                        <AiFillStar style={{ marginRight: "5px" }} />{" "}
                        {data.rateing}
                      </div> */}
                      </div>
                      <div
                        style={{
                          fontWeight: "600",
                          fontSize: "16px",
                          color: "gray",
                          paddingBottom: "5px",
                            display:"flex",
                          alignItems:"center"
                        }}
                      >
                        <LuLocateFixed
                          className="roomBooking_Icon"
                          style={{ paddingRight: "5px" }}
                        />{" "}
                        Tirunelveli, India
                      </div>
                      <div
                        style={{
                          fontWeight: "600",
                          fontSize: "16px",
                          color: "grey",
                            display:"flex",
                          alignItems:"center"
                        }}
                      >
                        <div>
                          <TbBrandDaysCounter
                            className="roomBooking_Icon"
                            style={{ paddingRight: "9px" }}
                          />
                          6 days
                        </div>
                      </div>
                      <div className="tourPackageReviewContainer">
                        <div className="rating-leaf">
                          <div className="rating-score">
                            5
                            <span
                              style={{ fontSize: "14px", color: "#bdbdbd" }}
                            >
                              /5
                            </span>
                          </div>
                        </div>
                        <div style={{ paddingLeft: "10px" }}>(134 reviews)</div>
                      </div>
                      <div
                        style={{
                          fontWeight: "600",
                          fontSize: "17px",
                          color: "grey",
                          marginTop: "10px",
                          display:"flex",
                          justifyContent:"space-between",
                          alignItems:"center"
                        }}
                      >
                        <div><FaRupeeSign style={{ paddingRight: "5px" }} />

                        <del style={{ marginRight: "5px" }}>{data.price}</del>
                        <span style={{ color: "black" }}>
                         {data.offerPrice}
                        </span></div>
                        <div>
                      <Button
                        className="BookingNow_btnDiv me-3"
                        onClick={handleShow}
                      >
                        Book Now
                      </Button>
                    </div>
                        
                      </div>
                    </div>
                  

                    {/* <Rate allowHalf defaultValue={3.5} /> */}
                  </div>
                </div>
              </Col>
            ))}
            <Col xs={24} md={6} lg={6}>
              <div className="homePageCard">
                <div className="HomePageCardContainer">
                  <div className="HomeHotelExploreImg">
                    <div
                      className="HomeHotelExplore_ParaContainer"
                      style={{ padding: "10px" }}
                    >
                      <p className="HomeHotelExplore_Para">
                        Discover the great deals on hotels around the World
                      </p>
                      <Button className="HomeHotelExplore_GoNowBtn">
                        Go Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="backgroundImage_tekkingImage">
          <div style={{ margin: "18px 70px 0px 70px" }}>
            <h2 className="Home_tekkingImage_title">What Our User Say!</h2>

            <Row style={{ marginTop: "50px" }}>
              <OwlCarousel className="owl-theme" {...option}>
                {TekkingCard.map((data) => (
                  <Col lg={24} md={6}>
                    <div className="Home_tekkingContainer_Card">
                      <div>
                        <Row>
                          <Col lg={6}>
                            <img
                              className="Owl_carsouel_image"
                              src={data.image}
                              alt="image"
                            />
                          </Col>
                          <Col
                            lg={18}
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <div style={{ paddingLeft: "28px" }}>
                              <div className="TourReviewerName">
                                {data.UserName}
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Row style={{ marginTop: "10px" }}>
                          <div style={{ padding: "0px 15px" }}>
                            <p className="homeCardFontClass">
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout. The point of using
                              Lorem Ipsum
                            </p>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: "10px",
                              }}
                            >
                              <div>
                                {" "}
                                <Rate allowHalf defaultValue={2.5} />
                              </div>
                              <PiQuotesBold
                                style={{
                                  fontSize: "30px",
                                  color: "whitesmoke",
                                  transform: "rotate(180deg)",
                                }}
                              />
                            </div>
                          </div>
                        </Row>
                      </div>
                    </div>
                  </Col>
                ))}
              </OwlCarousel>
            </Row>
          </div>
          <center className="tekking_CenterHeading">Get the Latest News</center>
          <center style={{ marginTop: "50px" }}>
            <div className="homePageMailInput">
              <input className="homePageInput" placeholder="Enter your" />

              <FaTelegramPlane />
            </div>
          </center>
        </div>
        <Modal
          // {...props}

          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show}
          onHide={handleClose}
        >
          <Modal.Header closeButton >
            <div className="model_heading_">Is this Room booking is for yourself or someone else ?</div>
          </Modal.Header>
          <Modal.Footer>
            <Button className="btn_forMyself" onClick={() => handleNavigate(true)}>
              For Myself
            </Button>
            <Button className="btn_forSomeoneelese"  onClick={() => handleNavigate(false)}>
              For Someone elese
            </Button>
          </Modal.Footer>
        </Modal>
      </Layout>
    </div>
  );
};

export default HomePage;
