import React, { useState } from "react";
import { Radio, Input, Space } from "antd";
import UserLogin from "./UserLogin";
import VendorLogin from "./VendorLogin";
import IyerLogin from "./IyerLogin";
import GuideLogin from "./guideLogin";
import { Row, Col, Container, Button } from "react-bootstrap";
import * as Yup from "yup";
import { Checkbox } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import HeaderNavBar from "../../components/HeaderNavBar";
import { Link, useLocation } from "react-router-dom";
import Community from "../AdminLogin/CommunityAdmin";
import image from "../../../src/Pages/AboutUs/ad4.jpg";
import image1 from "../../../src/Pages/AboutUs/ad2.jpg";

import image2 from "../../../src/Pages/AboutUs/ad5.jpg";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
// style
import "../../components/Css/sass/Login.scss";
// import CommunityLogin from "./CommunityHeaderAndMember/CommunityLogin";
import TrainerLogin from "./TrainerLogin";

// Validation
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("invalid email address")
    .required("Email Required"),

  password: Yup.string()
    .min(6, "password must 6 characters")
    .required("Password Required"),
});

const Login = () => {
  const { state } = useLocation();
  const [role, setrole] = useState("User");
  console.log("first", role);

  const [a, setA] = useState(state);
  console.log("first", a);
  const [passwordShown, setpasswordShown] = useState(false);

  const onChange = (e) => {
    setrole(e.target.value);
    setA(e.target.value);
  };

  // password shown
  const handlePasswordShow = () => {
    setpasswordShown(!passwordShown);
  };

  const stateCheck = typeof state !== "object" ? (state ? a : role) : role;

  return (
    <>
      <HeaderNavBar />
      <br />
      <br />
      <br />
      <div className="login-secion" style={{backgroundColor:"#01204E",height:"91.5vh"}}>
        <Row>
          <Col xs={12} sm={12} md={7}>
            <div className="login_page_image_Container pt-5">
              {/* <div className="login_left_sideAd mt-5"></div> */}
              <Carousel className="login_left_sideAd">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    style={{ height: "70vh",borderRadius:"5px" }}
                    src={image}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    style={{ height: "70vh",borderRadius:"5px" }}
                    src={image1}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    style={{ height: "70vh",borderRadius:"5px" }}
                    src={image2}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
          <Col xs={12} sm={12} md={5} className="pe-5 ps-5">
            <div style={{ display: "flex" }} className="login_page_Container">
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
                          User Login
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
                          Vendor Login
                        </div>
                      </center>
                    </Col>
                  </Row>
                </div>
                <div className="right-content py-5 px-5">
                  <h4
                    className="d-flex justify-content-center"
                    style={{
                      fontWeight: "bold",
                      fontFamily: "sans-serif",
                      color: "white",
                    }}
                  >
                    {`${stateCheck + " " + "Login"}`}
                  </h4>
                  <div className="maincontent mt-2 pb-2">
                    <h5 style={{ color: "white" }}>Don't have an account ?</h5>
                    <Link to="/signup" state={a}  style={{color:"#F9D689"}}>
                      Signup Now
                    </Link>
                  </div>
                  {state &&
                    typeof state === "string" &&
                    (a === "User" ? (
                      <UserLogin role={role} />
                    ) : a === "Vendor" ? (
                      <VendorLogin />
                    ) : a === "Iyer" ? (
                      <IyerLogin />
                    ) : a === "Trainer" ? (
                      <TrainerLogin />
                    ) : a === "Guide" ? (
                      <GuideLogin />
                    ) : (
                      a === "Community" && <Community />
                    ))}
                  {(typeof state !== "string" || !state) &&
                    (role === "User" ? (
                      <UserLogin role={role} />
                    ) : role === "Vendor" ? (
                      <VendorLogin />
                    ) : role === "Iyer" ? (
                      <IyerLogin />
                    ) : role === "Trainer" ? (
                      <TrainerLogin />
                    ) : role === "Guide" ? (
                      <GuideLogin />
                    ) : (
                      role === "Community" && <Community />
                    ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Login;
