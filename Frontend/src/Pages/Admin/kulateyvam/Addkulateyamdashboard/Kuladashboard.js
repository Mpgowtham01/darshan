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
import "../../../../../src/components/Css/sass/KulaDashboard.scss";

const Kuladashboard = () => {
  const[community,setCommunity]=useState([]);
  const[communityUser,setCommunityUser]=useState([]);
  const[matrimonialCount,setMatrimonialCount]=useState([]);
  const[jobCount,setJobCount]=useState([]);
  useEffect(() => {
    getCommunityAdmin();
    getCommunityUser();
    getCountMatrimonial();
    getCountJob();
  }, []);


  const getCommunityAdmin=()=>{
    axios
    .get(`${process.env.REACT_APP_DEV_BASE_URL}/community/approvedCommunityAdmin`)
    .then(res => {
      setCommunity(res.data);
    })
    .catch(error => console.log(error));
  }

  const getCommunityUser=()=>{
    axios
    .get(`${process.env.REACT_APP_DEV_BASE_URL}/community/approvedCommunityUser`)
    .then(res => {
      setCommunityUser(res.data);
    })
    .catch(error => console.log(error));
  }

  const getCountMatrimonial = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/community/getAllMatrimonials/sum`)
      .then(res => {
        setMatrimonialCount(res.data.result);
      })
      .catch(error => console.log(error));
  };

  const getCountJob = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/community/getAllJob/sum`)
      .then(res => {
        setJobCount(res.data.result);
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="UserDashboard p-5">
      <Row>
        <Col xs={24} sm={24} md={10} lg={7} className="cards d-flex ">
          <div className="cardicon ">
            <BellOutlined />{" "}
          </div>
          <div className="templetext">
            <h2 className="cardcont">Community</h2>
            <p className="cardcount">{community.length}</p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={10} lg={7} className="cards d-flex ">
          <div className="cardicon">
            <FormOutlined />{" "}
          </div>
          <div className="templetext ">
            <h2 className="cardcont">Community User</h2>
            <p className="cardcount">{communityUser.length}</p>
          </div>
        </Col>
        {/* <Col xs={24} sm={24} md={10} lg={7} className="cards d-flex ">
          <div className="cardicon">
            <AppstoreAddOutlined />{" "}
          </div>
          <div className="templetext ">
            <h2 className="cardcont">Pending List</h2>
            <p className="cardcount">0</p>
          </div>
        </Col> */}
        <Col xs={24} sm={24} md={10} lg={7} className="cards d-flex ">
          <div className="cardicon">
            <UsergroupAddOutlined />{" "}
          </div>
          <div className="templetext ">
            <h2 className="cardcont">Matrimonial</h2>
            <p className="cardcount">{matrimonialCount.length}</p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={10} lg={7} className="cards d-flex ">
          <div className="cardicon">
            <UserOutlined />{" "}
          </div>
          <div className="templetext ">
            <h2 className="cardcont">Jobs</h2>
            <p className="cardcount">{jobCount.length}</p>
          </div>
        </Col>
      
      </Row>
    </div>
  );
};
export default Kuladashboard;
