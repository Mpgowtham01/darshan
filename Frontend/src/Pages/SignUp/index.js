import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Radio, Space, Select } from "antd";
import { Link, useLocation } from "react-router-dom";
import UserSignup from "./UserSignup";
import VendorSignup from "./VendorSignup";
import IyerSignup from "./IyerSignup";
import HeaderNavBar from "../../components/HeaderNavBar";
// import GuideSignup from "./GuideSignup";
import GuideSignup from "./GuideSignup";

// Style
import "../../components/Css/sass/SignUp.scss";
import CommunitySignUp from "./ComminitySignup";
import TrainerSignup from "./TrainerSignup";
import CommunityUserSignUp from "./CommunityHeaderMemberSignup/CommunityUserSignUp";
import { RobotFilled } from "@ant-design/icons";
import image from "../../../src/Pages/AboutUs/ad4.jpg";
import image1 from "../../../src/Pages/AboutUs/ad2.jpg";

import image2 from "../../../src/Pages/AboutUs/ad5.jpg";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => {
  const { state } = useLocation();
  const [role, setrole] = useState("User");
  const [a, setA] = useState(state);

  const { Option } = Select;

  const onChange = (e) => {
    // console.log(e)

    setrole(e.target.value);
    setA(e.target.value);
  };
  const stateCheck = typeof state !== "object" ? (state ? a : role) : role;

  return (
    <>
      <HeaderNavBar />
      {/* <br /> */}
      {/* <br /> */}
      <div className="login-section" style={{ backgroundColor: "#01204E" }}>
        <Row>
          {/* <Col
            xs={12}
            sm={12}
            md={4}
            lg={4}
            className="d-grid align-items-center mt-2"
          >
            <div className="left-content">
              <h3
                className="mb-3"
                style={{ fontWeight: "bold", fontFamily: "sans-serif" }}
              >
                Sign Up
              </h3>

              {typeof state !== "object" && state ? (
                <Radio.Group onChange={onChange} value={a}>
                  <Space direction="vertical">
                    <Radio value={"User"} className="login-options">
                      User Sign Up
                    </Radio>
                    <Radio value={"Vendor"} className="login-options">
                      Vendor Sign Up
                    </Radio>
                 
                  </Space>
                </Radio.Group>
              ) : (
                <Radio.Group onChange={onChange} value={role}>
                  <Space direction="vertical">
                    <Radio value={"User"} className="login-options">
                      User Sign Up
                    </Radio>
                    <Radio value={"Vendor"} className="login-options">
                      Vendor Sign Up
                    </Radio>
                  
                  </Space>
                </Radio.Group>
              )}
            </div>
          </Col> */}
          <Col xs={12} sm={12} md={7} className="pt-5">
            <div className="login_page_image_Container  pt-5">
              {/* <div className="login_left_sideAd mt-5"></div> */}
              <Carousel className="login_left_sideAd">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    style={{ height: "70vh", borderRadius: "5px" }}
                    src={image}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    style={{ height: "70vh", borderRadius: "5px" }}
                    src={image1}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    style={{ height: "70vh", borderRadius: "5px" }}
                    src={image2}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
          <Col xs={12} sm={12} md={5} className="pe-5 ps-5  pt-5">
            <div
              style={{ display: "flex" }}
              className="login_page_Container  pt-5"
            >
              <div className="login_right_content pe-5">
                <div className="right-content py-2 px-2 mb-2">
                  <Row>
                    <Col lg={6}>
                      <center>
                        <div
                          className="login_Tab_btn"
                          onClick={() =>
                            onChange({ target: { value: "User" } })
                          }
                        >
                          User SignUp
                        </div>
                      </center>
                    </Col>
                    <Col lg={6}>
                      <center>
                        <div
                          className="login_Tab_btn"
                          onClick={() =>
                            onChange({ target: { value: "Vendor" } })
                          }
                        >
                          Vendor SignUp
                        </div>
                      </center>
                    </Col>
                  </Row>
                </div>
                <div className="right-content py-4 px-5">
                  <h4
                    className="d-flex justify-content-center mb-1"
                    style={{
                      fontWeight: "bold",
                      fontFamily: "sans-serif",
                      color: "white",
                    }}
                  >
                    {`${stateCheck + " " + "Sign Up"}`}
                  </h4>
                  <div className="maincontent ">
                    <h5 style={{ color: "white" }}>
                      Already have an account ?
                    </h5>
                    <Link to="/login" state={a} style={{ color: "#F9D689" }}>
                      Sign in!
                    </Link>
                  </div>
                  {/* {role === "User" ? (
                <UserSignup />
              ) : role === "Vendor" ? (
                <VendorSignup />
              ) : role === "Iyer" && <IyerSignup />} */}

                  {state &&
                    typeof state === "string" &&
                    (() => {
                      if (a === "User") {
                        return <UserSignup />;
                      }

                      if (a === "Vendor") {
                        return <VendorSignup />;
                      }

                      if (a === "Iyer") {
                        return <IyerSignup />;
                      }
                      if (a === "Trainer") {
                        return <TrainerSignup />;
                      }
                      if (a === "Guide") {
                        return <GuideSignup />;
                      }
                      if (a === "Community") {
                        return <CommunitySignUp />;
                      }
                      // if (state === "CommunityUser") {
                      //   return <CommunityUserSignUp />;
                      // }
                    })()}
                  {(typeof state !== "string" || !state) &&
                    (() => {
                      if (role === "User") {
                        return <UserSignup />;
                      }

                      if (role === "Vendor") {
                        return <VendorSignup />;
                      }

                      if (role === "Iyer") {
                        return <IyerSignup />;
                      }
                      if (role === "Trainer") {
                        return <TrainerSignup />;
                      }
                      if (role === "Guide") {
                        return <GuideSignup />;
                      }
                      if (role === "Community") {
                        return <CommunitySignUp />;
                      }
                      // if (state === "CommunityUser") {
                      //   return <CommunityUserSignUp />;
                      // }
                    })()}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default SignUp;
