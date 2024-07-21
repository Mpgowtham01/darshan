import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillTwitterSquare,
  AiFillGooglePlusSquare,
} from "react-icons/ai";
//import temple from "../../../../components/Images/Blacklogo.png";
import temple from "../../../../components/Images/darshanJourneylogo.jpg"

export default function Footer() {
  return (
    <div style={{ backgroundColor: "white", height: 300, color: "black" }}>
      <Container>
        <div className="row pt-3">
          <Col className="">
            <div>
              <h5 className="mb-2" style={{ color: "black" }}>
                Terms
              </h5>
              <div className="footer-link">
                <Link style={{ color: "black" }}>Privacy</Link>
              </div>
              <div className="footer-link">
                <Link style={{ color: "black" }}>Disclaimer</Link>
              </div>
              <div className="footer-link">
                <Link style={{ color: "black" }}>Terms and Condition</Link>
              </div>
              <div className="footer-link">
                <Link style={{ color: "black" }}>Cancel and Return Policy</Link>
              </div>
              <div className="footer-link">
                <Link style={{ color: "black" }}>
                  Delivery and Shipping Policy
                </Link>
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <h5 className="mb-2" style={{ color: "black" }}>
                Contact us
              </h5>
              <div className="d-flex justify-content-start align-items-center mb-2">
                <label>Phone:</label>
                <p className="mb-0">&nbsp;{"+91 8867929955"}</p>
              </div>
              <div
                className="d-flex justify-content-start align-items-center"
                style={{ fontWeight: "none" }}>
                <label>E-mail:</label>
                <p className="mb-0">&nbsp;{"darshanjourney24@gmail.com"}</p>
              </div>
            </div>
          </Col>
          <Col
            className="d-flex justify-content-center"
            style={{ flexDirection: "column" }}>
            <div className="text-center">
              <img style={{ width: "200px" }} src={temple}></img>
            </div>
            <div>
              <p>©&nbsp;&nbsp;2022&nbsp;Greendata Digital Private Limited.</p>
            </div>
            <div className="text-center">
              <AiFillFacebook style={{ fontSize: 36, marginRight: 10 }} />
              <AiFillYoutube style={{ fontSize: 40, marginRight: 10 }} />
              <AiFillTwitterSquare style={{ fontSize: 36, marginRight: 10 }} />
              <AiFillGooglePlusSquare
                style={{ fontSize: 36, marginRight: 10 }}
              />
            </div>
          </Col>
        </div>
      </Container>
    </div>
  );
}
