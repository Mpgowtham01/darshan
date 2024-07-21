import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AmenitiesTabs from "./AmenitiesTabs";
import { MdOutlineAirplanemodeActive } from "react-icons/md";
import { FaBusAlt, FaCarSide } from "react-icons/fa";
import { WiTrain } from "react-icons/wi";
import Carousel from "react-bootstrap/Carousel";
import { Table, Modal } from "react-bootstrap";
import { BiRupee } from "react-icons/bi";
import dayjs from "dayjs";
import axios from "axios";
import DOMPurify from "dompurify";
import PoojaTabs from "./PoojaTabs";
import ScrollToTop from "react-scroll-to-top";
import { Card, Col, Row } from "react-bootstrap";
import { FaStar, FaRegStar } from "react-icons/fa";
import { MdStars } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import CorrectIcon from "../../components/Images/correcticon.svg";
import WrongIcon from "../../components/Images/wrongicon.svg";
const RouteTypeIcon = ({ route }) => {
  if (route?.includes("Bustand")) {
    return <FaBusAlt />;
  }

  if (route?.includes("Airport")) {
    return <MdOutlineAirplanemodeActive />;
  }

  if (route?.includes("Railway")) {
    return <WiTrain />;
  }

  return <FaCarSide icon="fa-solid fa-van-shuttle" />;
};

const LeftSection = ({ city }) => {
  const { state: location } = useLocation();
  console.log("location :>> ", location);
  const [additionalDetail, setAdditionalDetail] = useState();
  const [videoUrl, setVideoUrl] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [showModal, setShowModal] = useState(false);
  const bookingFields = location?.bookingFields
    ? eval(location?.bookingFields)
    : null;

  const sanitizedMap = () => ({
    __html: DOMPurify.sanitize(location?.temple_map.replaceAll("\n", "<br/>"), {
      ALLOWED_TAGS: ["iframe"],
    }),
  });

  const condition = (key) => location[key] && location[key] !== "null";

  const mainImage = location?.main_image
    ? `${location?.main_image}`
    : "/images/imageNotFound.png";

  const subImages = location?.sub_images?.length
    ? location.sub_images.split(",")
    : [];
  const carouselImages = [mainImage, ...subImages];
  const getAdditionalDetails = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_DEV_BASE_URL}/temple/getAdditionalById/${location?.id}`
      );
      if (result?.data?.status === "Success" && result.data?.result) {
        setAdditionalDetail(result.data.result);
        // Set video URL and YouTube URL if available
        if (result.data.result.additionalData[0]?.videoFile) {
          setVideoUrl(
            `${process.env.REACT_APP_DEV_BASE_URL}${result.data.result.additionalData[0]?.videoFile}`
          );
        }
        if (result.data.result.additionalData[0]?.youtubeUrl) {
          setYoutubeUrl(result.data.result.additionalData[0]?.youtubeUrl);
        }
      }
    } catch (error) {
      console.error("Error fetching additional details:", error);
    }
  };

  useEffect(() => {
    getAdditionalDetails();
  }, []);
  const renderStarRating = (rating) => {
    const filledStars = parseInt(rating); // Get integer value of rating
    const starArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= filledStars) {
        starArray.push(
          <FaStar
            key={i}
            className="star-filled"
            style={{ color: "#ffcc00", fontSize: "32px", marginRight: "1vh" }}
          />
        );
      } else {
        starArray.push(
          <FaRegStar
            key={i}
            className="star-empty"
            style={{ fontSize: "32px", marginRight: "1vh" }}
          />
        );
      }
    }
    return starArray;
  };
  return (
    <>
      <div className="templeDetails__left">
        <div className="templeDetails__left--header">
          <h1 className="title">
            {location?.temple_name},{city}
          </h1>
        </div>

        {/* <Carousel> */}
        {carouselImages.map((item) => (
          // <Carousel.Item key={item}>
          <img
            className="temp_HistoryImg"
            alt={item || "Carousel"}
            src={`${process.env.REACT_APP_DEV_BASE_URL}${item}`}
          />
          // </Carousel.Item>
        ))}
        {/* </Carousel> */}

        {/* <div className="templeDetails__left--history">
          <h2 className="temp_Details_heading mb-3">History</h2>
          <p className="ms-2 ms-md-3">{location?.temple_history}</p>
        </div> */}

        <div className="templeDetails__left--sections">
          {condition("temple_additional") && (
            <Card className="Card_BackgrundColor">
              <h2 className="temp_Details_heading mb-3">History</h2>
              <p className="description">{location?.temple_history}</p>
            </Card>
          )}

          <Row>
            <Col lg={5} md={6} xs={12}>
              <Card className="Card_BackgrundColor">
                <h2 className="temp_Details_heading mb-3">Location</h2>

                <Row className="mb-2">
                  <Col lg={6} md={6} xs={12}>
                    {" "}
                    <span className="tempSub_filed ms-2">Location :</span>
                  </Col>
                  <Col lg={6} md={6} xs={12}>
                    {" "}
                    <span>{location?.temple_address}</span>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col lg={6} md={6} xs={12}>
                    {" "}
                    <span className="tempSub_filed ms-2">Country :</span>
                  </Col>
                  <Col lg={6} md={6} xs={12}>
                    {" "}
                    <span>{location?.Countryname}</span>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col lg={6} md={6} xs={12}>
                    {" "}
                    <span className="tempSub_filed ms-2">State :</span>
                  </Col>
                  <Col lg={6} md={6} xs={12}>
                    {" "}
                    <span>{location?.Statename}</span>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col lg={6} md={6} xs={12}>
                    {" "}
                    <span className="tempSub_filed ms-2">District :</span>
                  </Col>
                  <Col lg={6} md={6} xs={12}>
                    {" "}
                    <span>{location?.Districtname}</span>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col lg={6} md={6} xs={12}>
                    {" "}
                    <span className="tempSub_filed ms-2">City :</span>
                  </Col>
                  <Col lg={6} md={6} xs={12}>
                    {" "}
                    <span>{location?.Cityname}</span>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg={7} md={6} xs={12}>
              <Card className="Card_BackgrundColor">
                <h2 className="temp_Details_heading mb-3">Contact Details</h2>

                <Row className="mb-2">
                  <Col lg={5} md={6} xs={12}>
                    {" "}
                    <span className="tempSub_filed ms-2">Owned by :</span>
                  </Col>
                  <Col lg={7} md={6} xs={12}>
                    {" "}
                    <span>{location?.control_by}</span>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col lg={5} md={6} xs={12}>
                    {" "}
                    <span className="tempSub_filed ms-2">Incharge Name :</span>
                  </Col>
                  <Col lg={7} md={6} xs={12}>
                    {" "}
                    <span>{location?.incharge_name}</span>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col lg={5} md={6} xs={12}>
                    {" "}
                    <span className="tempSub_filed ms-2">Phone Number :</span>
                  </Col>
                  <Col lg={7} md={6} xs={12}>
                    {" "}
                    <span>{location?.phone_number}</span>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col lg={5} md={6} xs={12}>
                    {" "}
                    <span className="tempSub_filed ms-2">Mail Id :</span>
                  </Col>
                  <Col lg={7} md={6} xs={12}>
                    {" "}
                    <span>{location?.temple_mailid}</span>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col lg={5} md={6} xs={12}>
                    {" "}
                    <span className="tempSub_filed ms-2">Website :</span>
                  </Col>
                  <Col lg={7} md={6} xs={12}>
                    {" "}
                    <span>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="tempSub_filed"
                        href={location?.temple_website}
                      >
                        Click here
                      </a>
                    </span>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <Card className="Card_BackgrundColor">
            <h2 className="temp_Details_heading mb-3">Booking</h2>
            <Table striped bordered hover>
              <thead>
                <tr className="bg-secondary">
                  <th>Particulars</th>
                  <th>Days</th>
                  <th>Morning Time</th>
                  <th>Evening Time</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {bookingFields?.map((item, index) => (
                  <tr key={index}>
                    <td>{item?.bookingField?.name}</td>
                    <td>
                      {item?.days?.length == 7
                        ? "Everyday"
                        : item?.days?.join(", ")}
                    </td>
                    <td>{dayjs(item?.morningTime).format("hh:mm A")}</td>
                    <td>{dayjs(item?.eveningTime).format("hh:mm A")}</td>
                    <td className="d-flex align-items-center">
                      <BiRupee /> {item?.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
          <Row>
            <Col>
              <Card className="Card_BackgrundColor">
                <h2 className="temp_Details_heading mb-3">
                  Temple Opening Timings
                </h2>
                <div className="description ms-2 ms-md-3">
                  <p className="flex">
                    <span className="tempSub_filed">Morning Hours:</span>
                    <span className="ms-2">
                      {location?.temple_amotime &&
                        dayjs(location?.temple_amotime).format("hh:mm A")}{" "}
                      {location?.temple_amctime &&
                        dayjs(location?.temple_amctime).format("hh:mm A")}
                    </span>
                  </p>
                  <p className="flex">
                    <span className="tempSub_filed">Evening Hours:</span>
                    <span className="ms-2">
                      {location?.temple_pmotime &&
                        dayjs(location?.temple_pmotime).format("hh:mm A")}{" "}
                      -{" "}
                      {location?.temple_pmctime &&
                        dayjs(location?.temple_pmctime).format("hh:mm A")}
                    </span>
                  </p>
                </div>
              </Card>
            </Col>
            <Col lg={6}>
              {additionalDetail?.pariharam?.length ? (
                <Card className="Card_BackgrundColor">
                  <h2 className="temp_Details_heading mb-3">Pariharm's</h2>
                  <ul className="description ms-2 ms-md-3">
                    {additionalDetail.pariharam.map((item, index) => (
                      <li
                        key={index}
                        className="pb-1 fw-normal"
                        style={{ fontSize: "1rem", fontWeight: 600 }}
                      >
                        {item?.pariharam_name}
                      </li>
                    ))}
                  </ul>
                </Card>
              ) : (
                []
              )}
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              {" "}
              {additionalDetail?.otherGods?.length ? (
                <Card className="Card_BackgrundColor">
                  <h2 className="temp_Details_heading mb-3">Other God's</h2>
                  <ul className="description ms-2 ms-md-3">
                    {additionalDetail.otherGods.map((item, index) => (
                      <li
                        key={index}
                        className="pb-1 fw-normal"
                        style={{ fontSize: "1rem", fontWeight: 600 }}
                      >
                        {item?.god_name}
                      </li>
                    ))}
                  </ul>
                </Card>
              ) : (
                []
              )}{" "}
            </Col>
            <Col lg={6}>
              {additionalDetail?.festival?.length ? (
                <Card className="Card_BackgrundColor">
                  <h2 className="temp_Details_heading mb-2">Festival's</h2>
                  <ul className="description ms-2 ms-md-3">
                    {additionalDetail.festival.map((item, index) => (
                      <li
                        key={index}
                        className="pb-1 fw-normal"
                        style={{ fontSize: "1rem", fontWeight: 600 }}
                      >
                        {item?.festival_name}
                      </li>
                    ))}
                  </ul>
                </Card>
              ) : (
                []
              )}{" "}
            </Col>
          </Row>

          <Row>
            {/* <Col lg={6}> */}
            {/* <Card className="Card_BackgrundColor">
                <h2 className="temp_Details_heading mb-3">Video</h2>
                {videoUrl && (
                  <div>
                    <p>
                      <a
                        onClick={() => setShowModal(true)}
                        style={{
                          cursor: "pointer",
                          color: "#1e90ff",
                          textDecoration: "none",
                        }}
                      >
                        Click here to view video
                      </a>
                    </p>
                    <Modal show={showModal} onHide={() => setShowModal(false)}>
                      <Modal.Header closeButton>
                        <Modal.Title>Temple Video</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <video width="100%" controls>
                          <source src={videoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </Modal.Body>
                    </Modal>
                  </div>
                )}
              </Card> */}
            {/* </Col> */}
            <Col lg={4}>
              {location?.temple_tree && (
                <Card className="Card_BackgrundColor">
                  <h2 className="temp_Details_heading mb-3">Temple Tree</h2>
                  <div className="description ms-2 ms-md-3">
                    {location?.temple_tree}
                  </div>
                </Card>
              )}
            </Col>
            <Col lg={4}>
              {youtubeUrl && (
                <Card className="Card_BackgrundColor">
                  <h2 className="temp_Details_heading mb-3">YouTube</h2>
                  <div className="description">
                    <a
                      href={youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit our YouTube Channel
                    </a>
                  </div>
                </Card>
              )}
            </Col>

            <Col lg={4}>
              {additionalDetail?.additionalData && (
                <Card className="Card_BackgrundColor">
                  <h2 className="temp_Details_heading mb-3">Tourist Spot</h2>
                  <div>
                    {location?.tourist_id && location?.tourist_id != "null" ? (
                      <img
                        src={CorrectIcon}
                        alt="correct"
                        style={{ width: "30px", height: "20px" }}
                      />
                    ) : (
                      <img
                        src={WrongIcon}
                        alt="wrong"
                        style={{ width: "30px", height: "20px" }}
                      />
                    )}
                  </div>
                </Card>
              )}
            </Col>
          </Row>

          {/* {location?.pooja_timings && (
            <section>
              <h2 className="title">Pooja Timings</h2>
              <div className="description ms-2 ms-md-3">
                {location?.pooja_timings}
              </div>
            </section>
          )} */}
          <PoojaTabs poojaFields={location?.poojaFields} />
          <AmenitiesTabs aminities={location?.aminity} />
          <Card className="Card_BackgrundColor mt-5">
            <h2 className="temp_Details_heading mb-3">Routes to reach</h2>
            <div className="description ms-2 ms-md-3">
              <p>
                <span className="fw-bold ">Ways To Reach:</span>
                <span className="ms-2 mb-2">{location?.ways_to_reach}</span>
              </p>
              <div>
                <span className="fw-bold">Temple Map:-</span>
                <div
                  className="w-100 mt-4"
                  dangerouslySetInnerHTML={sanitizedMap()}
                ></div>
              </div>

              <div className="mt-4">
                {location?.temple_bus_route &&
                  eval(location.temple_bus_route).map((item, index) => {
                    return (
                      <>
                        {item?.route ? (
                          <div key={`${item.id}${index}`}>
                            <h6 className="fw-bold routeType">
                              {item?.route} <RouteTypeIcon route={item.route} />
                            </h6>
                            <p>
                              <span className="mx-3">{item?.countryName}</span>
                              <span className="mx-3">{item?.stateName}</span>
                              <span className="mx-3">{item?.districtName}</span>
                              <span className="mx-3">{item?.cityName}</span>
                              <span className="mx-3">{item?.kilometer} </span>
                            </p>
                          </div>
                        ) : (
                          []
                        )}
                      </>
                    );
                  })}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default LeftSection;
