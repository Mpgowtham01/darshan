import React from "react";
import { Card, Col, Row } from "antd";
import {
  BellFilled,
  CalendarFilled,
  CaretRightFilled,
} from "@ant-design/icons";
import "antd/dist/antd.min.css";
import { BsFillPersonFill } from "react-icons/bs";

import { FaPrayingHands } from "react-icons/fa";
//style
import "../../components/Css/sass/Userdashboard.scss";

const Userdashboard = () => {
  return (
    <div className="UserDashboard">
      <div className="userDashboardmain">
        <Row className="secondRow">
          <Col xs={12} sm={12} md={4}>
            <Card className="secondRowCard">
              <div className="secondRowContent">
                <div style={{ fontSize: "20px", color: "#6E7F8E" }}>
                  <BellFilled />
                </div>
                <div className="paracontent">
                  <p className="temple m-0">Temple </p>
                  <p className="para m-0">500</p>
                </div>
              </div>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={4}>
            <Card className="secondRowCard">
              <div className="secondRowContent">
                <div style={{ fontSize: "20px", color: "#6E7F8E" }}>
                  <BsFillPersonFill />
                </div>
                <div className="paracontent">
                  <p className="temple m-0">Iyer</p>
                  <p className="para m-0">156</p>
                </div>
              </div>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={4}>
            <Card className="secondRowCard">
              <div className="secondRowContent">
                <div style={{ fontSize: "20px", color: "#6E7F8E" }}>
                  <CalendarFilled />
                </div>
                <div className="paracontent">
                  <p className="temple m-0">Events</p>
                  <p className="para m-0">50</p>
                </div>
              </div>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={4}>
            <Card className="secondRowCard">
              <div className="secondRowContent">
                <div>
                  {/* <img
                    src={Prayhand}
                    style={{ width: 25, marginTop: "8px" }}
                  ></img> */}
                  <FaPrayingHands />
                </div>
                <div className="paracontent">
                  <p className="temple m-0">Gods</p>
                  <p className="para m-0">50</p>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        <Row className="ThirdRow">
          <Col md={4} className="ThirdRowFirstcol">
            <p className="ThirdRowTemple">
              Temple <CaretRightFilled />
            </p>
          </Col>
          <Col md={20} className="thirdRowSecondCol">
            <Row className="thirdRowSecondCol">
              <Col xs={24} sm={24} md={7}>
                <Card className="ThirdRowCard">Badrinath Temple.</Card>
              </Col>
              <Col xs={24} sm={24} md={7}>
                <Card className="ThirdRowCard">Konark Sun Temple.</Card>
              </Col>
              <Col xs={24} sm={24} md={7}>
                <Card className="ThirdRowCard">Somnath Temple</Card>
              </Col>
              <Col xs={24} sm={24} md={7}>
                <Card className="ThirdRowCard ">Sanchi Stupa.</Card>
              </Col>
              <Col xs={24} sm={24} md={7}>
                <Card className="ThirdRowCard">Vaishno Devi</Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="fivthRow">
          <Col md={4} className="fivthRowFirstCol">
            <p className="FivethRowTemple">
              Events <CaretRightFilled />
            </p>
          </Col>
          <Col xs={24} sm={24} md={6}>
            <Card className="fivthRowCard">Shasti</Card>
          </Col>
          <Col xs={24} sm={24} md={6}>
            <Card className="fivthRowCard">Pradosam</Card>
          </Col>
          <Col xs={24} sm={24} md={6}>
            <Card className="fivthRowCard">Fullmoon Day</Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Userdashboard;
