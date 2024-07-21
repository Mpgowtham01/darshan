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
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const[matrimonialCount,setMatrimonialCount]=useState([]);
  const[jobCount,setJobCount]=useState([]);
  const params = useParams();
console.log('matrimonialCount', matrimonialCount)
console.log('jobCount', jobCount)
    useEffect(() => {
      getCountMatrimonial();
      getCountJob();
    }, []);


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
        console.log(res, "@@@@@@@@@$$$$$$$$$$");
        setJobCount(res.data.result);
      })
      .catch(error => console.log(error));
  };
  return (
    <div className="Dashboard p-5">
      <Row>
        <Col xs={24} sm={24} md={10} lg={7} className="cards d-flex ">
          <div className="cardicon ">
            <BellOutlined />{" "}
          </div>
          <div className="templetext">
            <h2 className="cardcont">Members</h2>
            <p className="cardcount">3</p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={10} lg={7} className="cards d-flex ">
          <div className="cardicon">
            <FormOutlined />{" "}
          </div>
          <div className="templetext ">
            <h2 className="cardcont">Matrimonial</h2>
            <p className="cardcount">{matrimonialCount.length}</p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={10} lg={7} className="cards d-flex ">
          <div className="cardicon">
            <AppstoreAddOutlined />{" "}
          </div>
          <div className="templetext ">
            <h2 className="cardcont">Jobs</h2>
            <p className="cardcount">{jobCount.length}</p>
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
        </Col> */}
       
      </Row>
    </div>
  );
};
export default Dashboard;
