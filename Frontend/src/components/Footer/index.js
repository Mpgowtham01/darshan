import React from "react";
import "../Css/sass/Footer.scss";
import { Row, Col } from "antd";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { PiAddressBookLight } from "react-icons/pi";
import { FiPhoneCall } from "react-icons/fi";
import { FiInfo } from "react-icons/fi";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Button } from "primereact/button";
import temple from "../../components/Images/darshanJourneylogo.jpg";
import TempleIcon from "../../components/Images/templeicon2.svg";
// import "./Footer.css"

function Footer() {
  return (
    <div className="conatiner">
      <div className="footer-bg">
        <div className="footer-content">
          <Row>
            <Col
              md={8}
              xs={24}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div>
                <h3>Contact Us</h3>
                <p>
                  <FiPhoneCall />
                  &nbsp;&nbsp;9606518855
                </p>
                <p>
                  <FiInfo />
                  &nbsp;&nbsp;hello@cognextech.com
                </p>
                <p>
                  <PiAddressBookLight />
                  &nbsp;&nbsp;3/76 Rajiv Gandhi salai,OMR,Semmancheri,
                  <br/>
                  chennai-600119
                </p>
              </div>
            </Col>
            <Col md={8} xs={12}>
              <div className="about-us-div">
                <h3>
                  <img src={TempleIcon} alt="templeicon"></img>&nbsp;Dharshan
                  Journey
                </h3>
                <p>
                  Discover the rich cultural and spiritual heritage of India
                  through our comprehensive directory of Hindu temples. Our
                  website is dedicated to providing detailed information and
                  history about temples from every corner of India. Whether you
                  are planning a pilgrimage, seeking spiritual enlightenment, or
                  simply exploring the architectural marvels of Hinduism, our
                  platform serves as your guide.
                </p>
                <br />
                <a href="https://www.facebook.com/DarshanJourney/">
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/templ.online/">
                  <AiFillInstagram />
                </a>
                <a href="https://twitter.com/OnlineTempl">
                  <FaTwitter />
                </a>
                <a href="https://www.youtube.com/channel/UC1EANqR21m1HfAQtakRsUcA">
                  <FaYoutube />
                </a>
              </div>
            </Col>
            <Col md={8} style={{ display: "flex", justifyContent: "center" }}>
              <div className="subscribe-div">
                <div>
                  <h3>Stay Connected</h3>
                  <p> Subscribe to our Newsletter & stay updated</p>
                  <p>
                    <img src={temple} alt="temple"></img>&nbsp;&nbsp;{" "}
                    <b> Dharshan Journey </b>
                  </p>
                  <input
                    type="text"
                    placeholder="Enter Your Name.."
                    className="Footeremail-input1"
                  ></input>
                </div>
                <div>
                  <input
                    className="Footeremail-input"
                    type="text"
                    placeholder="Enter Your Email.."
                  ></input>
                  <div className="sub-btn-div">
                    <Button className="sub-btn">Subscribe</Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <hr></hr>
        </div>
        <div className="final-footer">
          <Row>
            <Col md={18}>
              <p className="final-footer-ptag">
                <img src={temple} alt="temple1"></img> &nbsp;&nbsp;Copyright
                <AiOutlineCopyrightCircle /> 2024 Aroganam
              </p>
            </Col>
            <Col md={6}>
              <p className="privacy-policy">Privacy Policy</p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Footer;
