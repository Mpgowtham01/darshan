import React from 'react'
import {Row, Col} from "antd"
import {FaBookOpen} from "react-icons/fa"
import {FaUsers, FaMoneyBillAlt} from "react-icons/fa"
import {TiTick} from "react-icons/ti"
import {BiMessageAltError} from "react-icons/bi"

function TrainerDashboard() {
  return (
    <div className="UserDashboard p-5">
    <Row>
      <Col xs={24} sm={24} md={10} lg={7} className="cardss d-flex ">
        <div className="cardicon ">
          <FaBookOpen />{" "}
        </div>
        <div className="templetext ">
          <h2 className="cardcont">Coure</h2>
          <p className="cardcount">1</p>
        </div>
      </Col>
      <Col xs={24} sm={24} md={10} lg={7} className="cardss d-flex ">
        <div className="cardicon ">
          <FaUsers />{" "}
        </div>
        <div className="templetext ">
          <h2 className="cardcont">Student List</h2>
          <p className="cardcount">20</p>
        </div>
      </Col>
      <Col xs={24} sm={24} md={10} lg={7} className="cardss d-flex ">
        <div className="cardicon ">
          <TiTick />{" "}
        </div>
        <div className="templetext ">
          <h2 className="cardcont">Completed Course</h2>
          <p className="cardcount">5</p>
        </div>
      </Col>
      <Col xs={24} sm={24} md={10} lg={7} className="cardss d-flex ">
        <div className="cardicon ">
          <BiMessageAltError />{" "}
        </div>
        <div className="templetext ">
          <h2 className="cardcont">Student Request</h2>
          <p className="cardcount">20</p>
        </div>
      </Col>
      <Col xs={24} sm={24} md={10} lg={7} className="cardss d-flex ">
        <div className="cardicon ">
          <FaMoneyBillAlt />{" "}
        </div>
        <div className="templetext ">
          <h2 className="cardcont">Amount Received</h2>
          <p className="cardcount">0</p>
        </div>
      </Col>
      </Row>
    </div>
  )
}

export default TrainerDashboard