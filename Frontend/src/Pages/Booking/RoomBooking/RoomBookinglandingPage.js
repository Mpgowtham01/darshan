import React, { useState, useEffect } from "react";
import "./../YatraBooking/YatraBookingLandingpg.css";

import { Card } from "react-bootstrap";
import Layout from "../../../components/Layout";
import { Accordion, AccordionTab } from "primereact/accordion";
import { useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import { Button } from "primereact/button";
import { IoLocationSharp } from "react-icons/io5";
import { PiFlagCheckeredFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";
import { Modal } from "react-bootstrap";
import { FaIndianRupeeSign } from "react-icons/fa6";
import axios from "axios";
import DOMPurify from "dompurify";

function RoomBookinglandingPage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const handleNavigate = (prefill) => {
    navigate("/roombooking", { state: { prefill } });
  };
  const { id } = useParams();

  const [activeIndex, setActiveIndex] = useState([0, 1, 2]);
  const [packageDetails, setPackageDetails] = useState(null);
  const [DeffaultImage, setDeffaultImage] = useState(null);
  console.log('DeffaultImage', DeffaultImage)
  const [selectedImage, setSelectedImage] = useState(DeffaultImage);
  console.log('selectedImagess', selectedImage)
  console.log('DeffaultImage', DeffaultImage)
  // const DeffaultImages = `${process.env.REACT_APP_DEV_BASE_URL}${DeffaultImage}`;
  const sanitizedMap = () => ({
    __html: DOMPurify.sanitize(packageDetails?.hotelMap.replaceAll("\n", "<br/>"), {
      ALLOWED_TAGS: ["iframe"],
    }),
  });
  useEffect(() => {
    if (DeffaultImage) {
      setSelectedImage(DeffaultImage);
    }
  }, [DeffaultImage]);
  const onTabChange = (e) => {
    setActiveIndex(e.index);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  useEffect(() => {
    const fetchPackageDetails = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_DEV_BASE_URL}/roombook/getroombooking/${id}`
        );
        const data = response?.data[0];

        setPackageDetails(data);

        data.subImages = JSON.parse(data.subImages);
        if (typeof data.what_is_included === "string") {
          data.what_is_included = data.what_is_included
            .split("\n")
            .map((item) => item.trim())
            .filter((item) => item);
        }

        if (data.subImages && data.subImages.length > 0) {
          setDeffaultImage(data.subImages[0]);

          setSelectedImage(data.subImages);
        }
      } catch (error) {
        console.error("Error fetching package details:", error);
      }
    };

    fetchPackageDetails();
  }, [id]);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  if (!packageDetails) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      <div className="yatra-booking-container">
        <h3 className="page-title pt-2 mb-0 ">
          <b>{packageDetails?.hotelName}</b>
        </h3>
        <div className="roomBooking_AddressCss">{packageDetails?.address} </div>
        <div className="image-gallery">
          <div className="sidebar">
            {packageDetails?.subImages.map((image, index) => (
              <img
                src={`${process.env.REACT_APP_DEV_BASE_URL}${image}`}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail ${
                  selectedImage === image ? "selected" : ""
                }`}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
          <div className="main-image">
            <img
              className="selected-image"
              src={`${process.env.REACT_APP_DEV_BASE_URL}${selectedImage}`}
              alt="Selected"
            />
          </div>
          <div>
            <Card className="price-card">
              <div style={{ marginLeft: "5%", marginTop: "8%",marginRight:"5%" }}>
                <div className="roomBookingDetails_Container mb-1">
                  <div className="roomBookingDetails_heading">Price : </div>{" "}
                  <div style={{ marginLeft: "10px" }}>
                    &nbsp;
                    <FaIndianRupeeSign style={{ fontSize: "15px" }} />
                    <del className="delprice_details" style={{ color: "red" }}>
                      {" "}
                      {packageDetails?.price}
                    </del>
                    &nbsp;&nbsp;
                  </div>
                  <div
                    className="delprice_details"
                    style={{ fontWeight: "700" }}
                  >
                    {packageDetails?.offerPrice}
                  </div>
                </div>
                <div className="roomBookingDetails_Container mb-2">
                  <div className="roomBookingDetails_heading">Check in : </div>{" "}
                  <div
                    className="delprice_details"
                    style={{ fontWeight: "500", marginLeft: "10px" }}
                  >
                    {packageDetails?.checkin.slice(0,5)}
                  </div>
                </div>
                <div className="roomBookingDetails_Container mb-2">
                  <div className="roomBookingDetails_heading">Check Out : </div>{" "}
                  <div
                    className="delprice_details"
                    style={{ fontWeight: "500", marginLeft: "10px" }}
                  >
                    {packageDetails?.checkout.slice(0,5)}
                  </div>
                </div>
                {/* <div className="roomBookingDetails_Container mb-2">
                  <div className="roomBookingDetails_heading">
                    Booking Data :
                  </div>{" "}
                  <div
                    className="delprice_details"
                    style={{ fontWeight: "500", marginLeft: "10px" }}
                  >
                    {formatDate(packageDetails?.created_at)}
                  </div>
                </div> */}
                <div className="map-container pt-2">
    <div dangerouslySetInnerHTML={sanitizedMap()} />
  </div>
                {/* <div className="mb-2">
                  <div className="roomBookingDetails_heading">Address :</div>{" "}
                  <div
                    className="delprice_details"
                    style={{ marginLeft: "20px", fontWeight: "500" }}
                  >
                    {packageDetails?.address}
                  </div>
                </div> */}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "7%",
                  marginBottom: "10px",
                }}
              >
                <Button
                  style={{ backgroundColor: "green", fontSize: "18px" }}
                  onClick={handleShow}
                >
                  <b>Book Now</b>
                </Button>
              </div>
            </Card>
          </div>
        </div>
   
        <div className="package-contents">
          <hr></hr>

          <Accordion
            multiple
            activeIndex={activeIndex}
            onTabChange={onTabChange}
          >
            <AccordionTab header="Facilities">
              <div className="AccordionTab_class_Roombooking">
                {packageDetails?.facilities}
              </div>
            </AccordionTab>
            <AccordionTab header="Childrens">
              <div className="AccordionTab_class_Roombooking">
                {packageDetails?.childrenAndBeds}
              </div>
            </AccordionTab>
            <AccordionTab header="Pets">
              <div className="AccordionTab_class_Roombooking">
                {packageDetails?.pets}
              </div>
            </AccordionTab>
            <AccordionTab header="Cancelation Policy">
              <div className="AccordionTab_class_Roombooking">
                {packageDetails?.cancelationPolicy}
              </div>
            </AccordionTab>
          </Accordion>
        </div>
        <div className="review-section">
          <h2>Reviews</h2>
          <br></br>
          <div className="review-overview">
            <div className="rating">
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
            </div>
            <div className="review-breakdown">
              <p style={{ marginLeft: "15vh" }}>
                Reviews by Yatra travelers. We perform checks on reviews
              </p>
              <div className="review-row">
                <span>5 stars</span>
                <div className="review-bar">
                  <div className="filled-bar" style={{ width: "83%" }}></div>
                </div>
                <span>153</span>
              </div>
              <div className="review-row">
                <span>4 stars</span>
                <div className="review-bar">
                  <div className="filled-bar" style={{ width: "9%" }}></div>
                </div>
                <span>17</span>
              </div>
              <div className="review-row">
                <span>3 stars</span>
                <div className="review-bar">
                  <div className="filled-bar" style={{ width: "2%" }}></div>
                </div>
                <span>4</span>
              </div>
              <div className="review-row">
                <span>2 stars</span>
                <div className="review-bar">
                  <div className="filled-bar" style={{ width: "1%" }}></div>
                </div>
                <span>2</span>
              </div>
              <div className="review-row">
                <span>1 star</span>
                <div className="review-bar">
                  <div className="filled-bar" style={{ width: "4%" }}></div>
                </div>
                <span>8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        // {...props}

        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <div className="model_heading_Room" >
            Is this Room booking is for yourself or someone else ?
          </div>
        </Modal.Header>
        <Modal.Footer>
          <Button
            className="btn_forMyself"
            onClick={() => handleNavigate(true)}
          >
            For Myself
          </Button>
          <Button
            className="btn_forSomeoneelese"
            onClick={() => handleNavigate(false)}
          >
            For Someone elese
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
}

export default RoomBookinglandingPage;
