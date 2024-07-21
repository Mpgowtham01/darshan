import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import HeaderNavBar from "../../components/HeaderNavBar";
import Footer from "../../components/Footer";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Image, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { BsAwardFill } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { HiStar } from "react-icons/hi";
import ContactPopup from "./ventorcontact";
import VendorEnquiry from "./enquiry";
// import axios from "axios";
import Api from "../../Api";
import TextArea from "antd/lib/input/TextArea";
const DetailsPage = () => {
  const [vendorDetails, setVendorDetails] = useState(null);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const IDs = searchParams.get("Id");

  const [final, setFinal] = useState([]);
  const [suggestVendor, setSuggestedVendor] = useState(null);

  const [suggestFilter, setSuggestFilter] = useState(null);
  console.log("line100", suggestFilter);

  const [vendorCityId, setVendorCityId] = useState();

  const [vendorCategoriesList, setVendorCategoriesList] = useState(null);
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    getVendorCategoriesList();
  }, [params.id]);

  useEffect(() => {
    getSuggestVendorCategoriesList();
  }, [vendorCategoriesList]);

  // useEffect(() => {
  //   filterVendor();
  // }, [suggestVendor]);

  const getVendorCategoriesList = () => {
    Api.get(`/vendor/servicevendor/details/${params.id}`)
      .then((res) => {
        setVendorCityId(res.data[0].city);
        setVendorCategoriesList(res.data);
      })
      .catch((error) => console.log(error));
  };

  const getSuggestVendorCategoriesList = () => {
    Api.get(
      `/vendor/servicevendor/${vendorCategoriesList &&
        vendorCategoriesList[0].categoryid}`
    )
      .then((res) => {
        console.log(res.data, "line56");
        const vendorFilter = res.data;
        const vendorCityIdFilter = vendorFilter.filter(
          (vendor) => vendor.city === vendorCityId
        );
        setSuggestedVendor(res.data);
        setSuggestFilter(vendorCityIdFilter);
      })
      .catch((error) => console.log(error));
  };

  // const filterVendor = () => {
  //   const filterValue =
  //     suggestVendor &&
  //     suggestVendor.filter((e) => {
  //       return e.id !== vendorCategoriesList[0].vendorId;
  //     });
  //   setSuggestFilter(filterValue);
  // };

  return (
    <>
      <div>
        <HeaderNavBar />
        <div className="flex_caegorydetails">
          <div className="flex_caegorydetails-right" style={{ width: "470%" }}>
            {/* <div className="ventor-title ventor-card"> */}
            {/* <div >
                <h4>
                  {vendorCategoriesList
                    ? vendorCategoriesList[0].name
                    : "title"}
                </h4>
              </div> */}
            <div style={{ marginTop: "9%" }}>
              <h4 style={{ marginLeft: "57px" }}>
                {vendorCategoriesList ? vendorCategoriesList[0].name : "title"}
              </h4>
            </div>

            {/* <Breadcrumb className="breadcrumb">
                <Breadcrumb.Item
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Home
                </Breadcrumb.Item>
                <Breadcrumb.Item
                  onClick={() => {
                    navigate("/temple-service");
                  }}
                >
                  TempleService
                </Breadcrumb.Item>
                <Breadcrumb.Item
                  onClick={(item) => {
                    navigate(`/user/Temple/Templeservice?categoryId${item}`);
                  }}
                >
                  {vendorCategoriesList
                    ? vendorCategoriesList[0].categoryname
                    : "title"}
                </Breadcrumb.Item>
                <Breadcrumb.Item active>
                  {vendorCategoriesList
                    ? vendorCategoriesList[0].name
                    : "title"}
                </Breadcrumb.Item>
              </Breadcrumb> */}
            {/* </div> */}
            <div
              className="filter detail-card height_check  col-lg-8  "
              style={{ display: "flex" }}
            >
              {vendorCategoriesList &&
                vendorCategoriesList.map((ele) => (
                  <>
                    <Image
                      src={`${process.env.REACT_APP_DEV_BASE_URL}${ele.photo}`}
                      className="card_image"
                      style={{ borderRadius: "5px" }}
                    />
                    <div className="card-right mt-3 ">
                      <span style={{ fontSize: "14px" }}>
                        <HiLocationMarker
                          style={{ color: "#005C78", marginBottom: "4px" }}
                        />{" "}
                        {ele.address}
                      </span>
                      <p style={{ fontSize: "26px" }}>{ele.name}</p>
                      <span>
                        <BsCheckCircleFill
                          style={{ color: "#005C78", marginBottom: "4px" }}
                        />{" "}
                        Verified Services
                      </span>
                      <div className="wrapper">
                        <div>
                          <p style={{ fontSize: "18px", marginTop: "20px" }}>
                            Rs.{ele.price}
                            <span
                              style={{
                                fontSize: "14px",
                                opacity: "0.6",
                                marginLeft: "6px",
                              }}
                            >
                              onwards
                            </span>{" "}
                          </p>
                        </div>
                        <div>
                          <p style={{ fontSize: "14px", fontWeight: "500" }}>
                            Rating
                            <span>
                              {" "}
                              <br />
                              <HiStar
                                style={{
                                  color: "#FFD700",
                                  marginBottom: "6px",
                                }}
                              />{" "}
                              4.8
                            </span>
                          </p>
                        </div>
                      </div>
                      <p style={{ fontSize: "18px" }}>Connect to this Vendor</p>
                      <div className="contact-btn d-flex btn-lg">
                        <VendorEnquiry />
                        <ContactPopup />
                      </div>
                    </div>
                  </>
                ))}
            </div>
            {vendorCategoriesList &&
              vendorCategoriesList.map((item) => (
                <div
                  style={{
                    margin: "20px 50px 60px 60px",
                  }}
                >
                  <Accordion defaultActiveKey="0" flush style={{}}>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header className="accordion">
                        Details
                      </Accordion.Header>
                      <Accordion.Body>{item.details}</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header className="accordion">
                        Price
                      </Accordion.Header>
                      <Accordion.Body>
                        <h6 className="mb-2">
                          <span className="me-2">Price :</span>
                          <del>{item.price}Rs</del>
                        </h6>
                        <h6>
                          <span className="me-2">OfferPrice :</span>
                          {item.offerPrice}Rs
                        </h6>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header className="accordion">
                        Feedback
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                        {/* <TextArea> */}
                        {/* </TextArea> */}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              ))}
          </div>

          <div className="inner_wrap_categorydetails">
            <div className="suggest-ventor  col-lg-8">
              <div
                className="suggest-title ventor-title"
                style={{ marginLeft: "52px", marginTop: "30%" }}
              >
                <h4 className="suggested_vendor">Suggested Vendor</h4>
              </div>
            </div>
            <div className="row">
              {suggestFilter &&
                suggestFilter.map((item) => (
                  <div
                    className="card-detail  col-sm-6"
                    style={{ boxSizing: "border-box", cursor: "pointer" }}
                    onClick={() => {
                      navigate(`/user/Temple/vendor/${item.vendorId}`);
                    }}
                  >
                    <div className="top-image">
                      <Image
                        src={`${process.env.REACT_APP_DEV_BASE_URL}${item.photo}`}
                        className="suggest-img"
                        style={{ width: "100%", height: "210px" }}
                        onClick={() =>
                          navigate(`/user/Temple/vendor/${item.vendorId}`)
                        }
                      />
                    </div>
                    <div className="bottom-details">
                      <h4 style={{ fontSize: "20px" }}> {item.name}</h4>
                      <p style={{ float: "right", fontSize: "14px" }}>
                        <span
                          style={{ marginBottom: "20px", fontWeight: "500" }}
                        >
                          {" "}
                          <br />
                          <HiStar
                            style={{ color: "#FFD700", marginBottom: "6px" }}
                          />{" "}
                          4.8
                        </span>
                      </p>
                      <p>
                        <HiLocationMarker
                          style={{ color: "#005C78", marginBottom: "4px" }}
                        />
                        {item.location}
                      </p>
                      <div className="down">
                        <p>Starting Price</p>
                        <p>
                          Rs.{item.price}
                          <span style={{ fontSize: "12px", opacity: "0.6" }}>
                            onwards
                          </span>
                          <span>
                            <BsCheckCircleFill
                              style={{
                                color: "#005C78",
                                marginBottom: "10px",
                                float: "right",
                              }}
                            />
                          </span>
                        </p>
                        <div className=" d-grid gap-2 ">
                          <VendorEnquiry />
                          <ContactPopup />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* card dtails */}

        {/* suggest vendor */}
        {/* <div className="suggest-ventor">
          <div
            className="suggest-title ventor-title"
            style={{ marginLeft: "52px", marginTop: "20px" }}
          >
            <h3>Suggest Vendors</h3>
          </div>
        </div>
        <div className="row">
          {suggestFilter &&
            suggestFilter.map((item) => (
              <div
                className="card-detail  col-sm-3"
                style={{ boxSizing: "border-box" }}
              >
                <div className="top-image">
                  <Image
                    src={item.categoryimage}
                    className="suggest-img"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="bottom-details">
                  <h4 style={{ fontSize: "20px" }}> {item.name}</h4>
                  <p style={{ float: "right", fontSize: "14px" }}>
                    <span style={{ marginBottom: "20px", fontWeight: "500" }}>
                      {" "}
                      <br />
                      <HiStar
                        style={{ color: "#FFD700", marginBottom: "6px" }}
                      />{" "}
                      4.8
                    </span>
                  </p>
                  <p>
                    <HiLocationMarker
                      style={{ color: "#005C78", marginBottom: "4px" }}
                    />
                    {item.location}
                  </p>
                  <div className="down">
                    <p>Starting Price</p>
                    <p>
                      Rs.{item.price}
                      <span style={{ fontSize: "12px", opacity: "0.6" }}>
                        onwards
                      </span>
                      <span>
                        <BsCheckCircleFill
                          style={{
                            color: "#005C78",
                            marginBottom: "10px",
                            float: "right",
                          }}
                        />
                      </span>
                    </p>
                    <div className=" d-grid gap-2 ">
                      <VendorEnquiry />
                      <ContactPopup />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default DetailsPage;
