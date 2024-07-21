import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineUser, AiOutlineBell } from "react-icons/ai";
import { FaPrayingHands } from "react-icons/fa";

//style
import "../../components/Css/sass/Iyerdashboard.scss";

function Iyerdashboard() {
  return (
    <div className="iyerdashboard-head mb-5">
      <Row className="maincontent my-5 " style={{ marginLeft: "13%" }}>
        <Col md={3} sm={12}>
          <div className="content">
            <h4>
              <AiOutlineUser /> Temple
            </h4>
            <h6>136</h6>
          </div>
        </Col>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Col md={3} sm={12}>
          <div className="content">
            <h4>
              <AiOutlineBell /> Iyer Booking
            </h4>{" "}
            <h6>36</h6>
          </div>
        </Col>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Col md={3} sm={12}>
          <div className="content">
            <h4>
              <FaPrayingHands /> Gods
            </h4>
            <h6>50</h6>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={3} sm={12} style={{ marginLeft: "12%" }}>
          <h5> Gods List</h5>
          <br />
          <div>
            <p className="sub-content">Ayyapan</p>
          </div>

          <div>
            <p className="sub-content">Sai Baba</p>
          </div>

          <div>
            <p className="sub-content">Buddha</p>
          </div>

          <div>
            <p className="sub-content">Ragavendra</p>
          </div>
        </Col>
        <Col md={7} sm={12}>
          <div className="templelist-content mx-5 mt-5">
            <br />
            <h5> &nbsp; &nbsp;Temple List</h5>
            <ul>
              <li className="content-lists">&nbsp;Gangotri Temple</li>
              <li className="content-lists"> &nbsp;Yamunotri Temple</li>
              <li className="content-lists"> &nbsp;Hari Ki Pauri Temple</li>
              <li className="content-lists"> &nbsp;Neelkanth Mahadev Temple</li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Iyerdashboard;
