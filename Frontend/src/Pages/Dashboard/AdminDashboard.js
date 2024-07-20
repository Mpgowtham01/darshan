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
import { useNavigate } from "react-router-dom";

import "../../../src/components/Css/sass/Dashboard.scss";

const AdminDashboard = () => {
  const [temple, setTemple] = useState([]);
  const [blog, setBlog] = useState([]);
  const [user, setUser] = useState([]);
  const [vendor, setVendor] = useState([]);
  const [community, setCommunity] = useState([]);
  const [communityUser, setCommunityUser] = useState([]);
  const [Training, setTraining] = useState([]);
  const [iyer, setIyer] = useState([]);
  useEffect(() => {
    getTempleData();
    getblogdetails();
    getUserList();
    getVendorList();
    getTrainerList();
    getCommunityAdmin();
    getCommunityUser();
  }, []);

  // const getTempleData = () => {
  //   axios
  //     .get(`${process.env.REACT_APP_DEV_BASE_URL}/temple/getAllInActive`)
  //     .then(res => {
  //       setTemple(res.data);
  //     })
  //     .catch(error => console.log(error));
  // };

  // const getTempleData = () => {
  //   const id=localStorage.getItem("id")
  //   axios
  //     .get(`${process.env.REACT_APP_DEV_BASE_URL}/temple/getTempleBasedOnUserId/${id}`)
  //     .then((res) => {
  //       setTemple(res.data);
  //     })
  //     .catch((error) => console.log(error));
  // };

  const getTempleData = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/temple/getAll/admin`)
      .then((res) => {
        setTemple(res.data);
      })
      .catch((error) => console.log(error));
  };

  const getUserList = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/userRegister/getApproveUser`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => console.log(error));
  };

  const getVendorList = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/vendor/vendorApprove`)
      .then((res) => {
        setVendor(res.data.results);
      })
      .catch((error) => console.log(error));
  };

  const getTrainerList = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/training/getApproveTrainer`)
      .then((res) => {
        console.log("object@@ :>> ", res);
        setTraining(res.data);
      })
      .catch((error) => console.log(error));
  };

  const getblogdetails = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/blog/getAll`)
      .then((res) => {
        setBlog(res.data);
      })
      .catch((error) => console.log(error));
  };

  const getCommunityAdmin = () => {
    axios
      .get(
        `${process.env.REACT_APP_DEV_BASE_URL}/community/approvedCommunityAdmin`
      )
      .then((res) => {
        setCommunity(res.data);
      })
      .catch((error) => console.log(error));
  };

  const getCommunityUser = () => {
    axios
      .get(
        `${process.env.REACT_APP_DEV_BASE_URL}/community/approvedCommunityUser`
      )
      .then((res) => {
        setCommunityUser(res.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="UserDashboard p-5">
      <Row>
        <Col xs={24} sm={24} md={10} lg={7} className="cardss d-flex ">
          <div className="cardicon ">
            <BellOutlined />{" "}
          </div>
          <div className="templetext ">
            <h2 className="cardcont">Temples</h2>
            <p className="cardcount">{temple.length}</p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={10} lg={7} className="cardss d-flex ">
          <div className="cardicon">
            <FormOutlined />{" "}
          </div>
          <div className="templetext ">
            <h2 className="cardcont">Blog</h2>
            <p className="cardcount">{blog.length}</p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={10} lg={7} className="cardss d-flex ">
          <div className="cardicon">
            <AppstoreAddOutlined />{" "}
          </div>
          <div className="templetext ">
            <h2 className="cardcont">Iyer</h2>
            <p className="cardcount">{iyer.length}</p>
          </div>
        </Col>

        <Col xs={24} sm={24} md={10} lg={7} className="cardss d-flex ">
          <div className="cardicon">
            <UsergroupAddOutlined />{" "}
          </div>
          <div className="templetext ">
            <h2 className="cardcont">User</h2>
            <p className="cardcount">{user.length}</p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={10} lg={7} className="cardss d-flex ">
          <div className="cardicon">
            <UserOutlined />{" "}
          </div>
          <div className="templetext ">
            <h2 className="cardcont">Vendor</h2>
            <p className="cardcount">{vendor.length}</p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={10} lg={7} className="cardss d-flex ">
          <div className="cardicon">
            <UserSwitchOutlined />{" "}
          </div>
          <div className="templetext ">
            <h2 className="cardcont">Community</h2>
            <p className="cardcount">{community.length}</p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={10} lg={7} className="cardss d-flex ">
          <div className="cardicon">
            <UsergroupAddOutlined />{" "}
          </div>
          <div className="templetext ">
            <h2 className="cardcont">Community User</h2>
            <p className="cardcount">{communityUser.length}</p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={10} lg={7} className="cardss d-flex ">
          <div className="cardicon">
            <UsergroupAddOutlined />{" "}
          </div>
          <div className="templetext ">
            <h2 className="cardcont">Trainer</h2>
            <p className="cardcount">{Training.length}</p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={10} lg={7} className="cardss d-flex ">
          <div className="cardicon">
            <UsergroupAddOutlined />{" "}
          </div>
          <div className="templetext ">
            <h2 className="cardcont">Guide</h2>
            <p className="cardcount">{0}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default AdminDashboard;
