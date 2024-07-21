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

const VendorDashboard = () => {
  useEffect(() => {
    getTempleData();
    getblogdetails();
    getBussiness();
  }, []);
  const vendorId = localStorage.getItem("id");
  const [temple, setTemple] = useState([]);
  const [blog, setBlog] = useState([]);
  const [bussinessName, setBussniessName] = useState([]);
  const getTempleData = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/temple/getAll/admin`)
      .then((res) => {
        setTemple(res.data.length);
      })
      .catch((error) => console.log(error));
  };

  const getblogdetails = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/blog/getAll`)
      .then((res) => {
        setBlog(res.data.length);
      })
      .catch((error) => console.log(error));
  };

  const getBussiness = () => {
    axios
      .get(
        `${process.env.REACT_APP_DEV_BASE_URL}/vendor/getAdBasedOnUserId/${vendorId}`
      )
      .then((res) => {
        setBussniessName(res.data.length);
      });
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
            <h2 className="cardcont">Blog</h2>
            <p className="cardcount">{blog}</p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={10} lg={7} className="cards d-flex ">
          <div className="cardicon">
            <AppstoreAddOutlined />{" "}
          </div>
          <div className="templetext ">
            <h2 className="cardcont">my Bussiness</h2>
            <p className="cardcount">{bussinessName}</p>
          </div>
        </Col>

        {/* <Col xs={24} sm={24} md={10} lg={7} className="cards d-flex ">
          <div className="cardicon">
            <UsergroupAddOutlined />{" "}
          </div>
          <div className="templetext ">
            <h2 className="cardcont">User</h2>
            <p className="cardcount">330</p>
          </div>
    </Col>
        <Col xs={24} sm={24} md={10} lg={7} className="cards d-flex ">
          <div className="cardicon">
            <UserOutlined />{" "}
          </div>
          <div className="templetext ">
            <h2 className="cardcont">Vendor</h2>
            <p className="cardcount">222</p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={10} lg={7} className="cards d-flex ">
          <div className="cardicon">
            <UserSwitchOutlined />{" "}
          </div>
          <div className="templetext ">
            <h2 className="cardcont">Iyer</h2>
            <p className="cardcount">156</p>
          </div>
        </Col> */}
      </Row>
    </div>
  );
};
export default VendorDashboard;
