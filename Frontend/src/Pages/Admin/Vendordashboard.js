import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineUser, AiTwotoneCalendar } from "react-icons/ai";
import { FaPrayingHands } from "react-icons/fa";

//style
import "../../components/Css/sass/Vendordashboard.scss";

function Vendordashboard() {
  return (
    <div className="vendordashoard-head">
      <Row className="first-content my-5 ">
        <Col md={3} sm={12}>
          <div className="content-1">
            <h4>
              <AiOutlineUser />
              Temple
            </h4>
            <h6>500</h6>
          </div>
        </Col>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Col md={5} sm={12}>
          <div className="content-1">
            <h4>
              <AiTwotoneCalendar />
              festival Events
            </h4>
            <h6>70</h6>
          </div>
        </Col>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Col md={3} sm={12}>
          <div className="content-1">
            <h4>
              <FaPrayingHands />
              Gods
            </h4>
            <h6>50</h6>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={4} sm={12} style={{ marginLeft: "13%" }}>
          <div className="templelist-content-1 mx-5">
            <br />
            <h5> &nbsp; &nbsp;Temple List</h5>
            <ul className="templelist-content-1-list">
              <li>&nbsp;Gangotri Temple</li>
              <li> &nbsp;Yamunotri Temple</li>
              <li> &nbsp;Hari Ki Pauri Temple</li>
              <li> &nbsp;Neelkanth Mahadev Temple</li>
            </ul>
          </div>
        </Col>
        <Col md={3} sm={12} className="sub-content-title">
          <h5> Gods List</h5>
          <br />
          <div>
            <p className="sub-content-1">Ayyapan</p>
          </div>
          <div>
            <p className="sub-content-1">Sai Baba</p>
          </div>
          <div>
            <p className="sub-content-1">Buddha</p>
          </div>
          <div>
            <p className="sub-content-1">Ragavendra</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Vendordashboard;
