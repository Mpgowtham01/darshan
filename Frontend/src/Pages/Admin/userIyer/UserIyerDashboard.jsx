import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "antd";
import {
  UserOutlined,
  BellOutlined,
  FormOutlined,
  AppstoreAddOutlined,
  UsergroupAddOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.min.css";
import axios from "axios";
import Modal from "./Modal.js"; // Ensure correct import path

const UserIyerDashboard = () => {
  useEffect(() => {
    getTempleData();
    getData();
  }, []);

  const [temple, setTemple] = useState(0);
  const [userData, setUserData] = useState();
  console.log("userData :>> ", userData);
  const [showModal, setShowModal] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const id = localStorage.getItem("id");
  const getTempleData = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/temple/getAll/admin`)
      .then((res) => {
        setTemple(res.data.length);
      })
      .catch((error) => console.log(error));
  };
  const getData = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/iyer/getOneIyer/${id}`)
      .then((res) => {
        setUserData(res.data.length);
      })
      .catch((error) => console.log(error));
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowModal(false);
    // Additional logic here to handle selected option
  };

  return (
    <div className="Dashboard p-5">
      <Row>
        <Col xs={24} sm={24} md={10} lg={7} className="cards d-flex ">
          <div className="cardicon ">
            <BellOutlined />{" "}
          </div>
          <div className="templetext ">
            <h2 className="cardcont">Temples</h2>
            <p className="cardcount">{temple}</p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={10} lg={7} className="cards d-flex ">
          <div className="cardicon">
            <FormOutlined />{" "}
          </div>
          <div className="templetext ">
            <h2 className="cardcont">Iyer Booking</h2>
            <p className="cardcount">20</p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={10} lg={7} className="cards d-flex ">
          <div className="cardicon">
            <AppstoreAddOutlined />{" "}
          </div>
          <div className="templetext ">
            <h2 className="cardcont">Gods</h2>
            <p className="cardcount">500</p>
          </div>
        </Col>
      </Row>
      {showModal && (
        <Modal
          handleOptionSelect={handleOptionSelect}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default UserIyerDashboard;
