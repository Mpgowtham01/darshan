import React, { useState, useEffect } from "react";
import { Col, Row } from "antd";
import "antd/dist/antd.min.css";
import axios from "axios";
import {FaMoneyBill } from "react-icons/fa"
import {GiByzantinTemple} from "react-icons/gi"
import {TbBrandBooking} from "react-icons/tb"

const UserDashboard = () => {
  const [templeList, setTempleList] = useState([]);
  const [blog, setBlog] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    getTempleData();
     getblogdetails();
  }, []);
  
  const getTempleData = () => {
    const id=localStorage.getItem("id")
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/temple/getTempleBasedOnUserId/${id}`)
      .then((res) => {
        setTempleList(res.data);
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

  
  return (
    <div className="Dashboard py-5">
      <Row className="d-flex justify-between">
        <Col xs={24} sm={24} md={10} lg={7} className="cards d-flex ">
          <div className="cardicon ">
            <GiByzantinTemple />{" "}
          </div>
          <div className="templetext ">
            <h2 className="cardcont">Temples</h2>
            <p className="cardcount">{templeList.length}</p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={10} lg={7} className="cards d-flex ">
          <div className="cardicon">
            <TbBrandBooking />{" "}
          </div>
          <div className="templetext ">
            <h2 className="cardcont">Priest Booking</h2>
            <p className="cardcount">{0}</p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={10} lg={7} className="cards d-flex flex-wrap">
          <div className="cardicon">
          <FaMoneyBill />{" "}
          </div>
          <div className="templetext ">
            <h3 className="cardcont">Transaction</h3>
            <p className="cardcount">{0}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default UserDashboard;
