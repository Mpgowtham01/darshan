import React, { useEffect } from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Carousel, Image } from "antd";

//style
import "./../../components/Css/sass/TempleDescription.scss";
import axios from "axios";
import HeaderNavBar from "../../components/HeaderNavBar";
import Footer from "../../components/Footer";

const TempleDescription = props => {
  console.log("ytfytdtrvc", props);

  const location = useLocation();

  console.log("location hook", location);
  const [templeDetail, setTempleDetail] = useState([]);
  const [image, setImages] = useState([]);
  const [templeData, setTempleData] = useState(null);
  const params = useParams();

  const [Ganeshtmpl, setGaneshtmpl] = useState([
    {
      id: 1,
      name: "Karpaga Vinayagar-pillayar patti",
      content: "pillayar patti",
      imageUrl: "/images/godimg1.png",
    },
    {
      id: 2,
      name: "  Madhur Maluganapathi Temple ",
      content: "Vellore",
      imageUrl: "/images/godimg2.png",
    },
    {
      id: 3,
      name: " Rockfort uchi Pilayar kovil- Trichy",
      content: "Trichy",
      imageUrl: "/images/godimg3.png",
    },
  ]);

  useEffect(() => {
    const templeId = params.id;
    axios
      .get(`http://localhost:4000/home/getTempleOne/${templeId}`)
      .then(response => {
        setTempleData(response.data[0]);
      });
  }, []);

  return (
    <>
      <HeaderNavBar />

      <Container>
        <div className="templeDescription">
          <h1 className="templeDescription__title">
            {templeData?.temple_name}
          </h1>
          <img
            src={`http://localhost:4000${templeData?.main_image}`}
            alt="Temple logo"
            className="templeDescription__coverImg"
          />

          <div className="templeDescription__content">
            <p className="templeDescription__content--para">
              {templeData?.description}
            </p>

            <div className="templeDescription__content--block">
              <h4 className="title">Location</h4>
              <p>
                <span className="fw-normal">Location:</span>
                <span className="fw-bold ms-1">
                  {templeData?.city}, {templeData?.district}(dist)
                </span>
                <br />
                <span className="fw-normal">State:</span>
                <span className="fw-bold ms-1">{templeData?.state}</span>
                <br />
                <span className="fw-normal"> Country:</span>
                <span className="fw-bold ms-1">{templeData?.country}</span>
              </p>
            </div>

            <div className="templeDescription__content--block">
              <h4 className="title">Timing</h4>
              <div className="blockContent ms-0 ms-md-5">
                <span className="d-block">
                  Morning Hours: {templeData?.temple_amotime} to{" "}
                  {templeData?.temple_amctime}
                </span>
                <span className="d-block">
                  Evening Hours: {templeData?.temple_pmotime} to{" "}
                  {templeData?.temple_pmctime}
                </span>
              </div>
            </div>

            <div className="templeDescription__content--block">
              <h4 className="title">Entry fee</h4>
              <p className="blockContent ms-0 ms-md-5">
                Special Entry Darshan Ticket: {templeData?.entryFee}
              </p>
            </div>

            <div className="templeDescription__content--block">
              <h4 className="title">Best Time to visit</h4>
              <p className="blockContent ms-0 ms-md-5">
                {templeData?.bestTimeToVisit}
              </p>
            </div>

            <div className="templeDescription__content--block">
              <h4 className="title">Festival</h4>
              <p className="blockContent ms-0 ms-md-5">
                {templeData?.FestivalNames}
              </p>
            </div>

            <div className="templeDescription__content--images">
              <h3 className="title">Related Temples</h3>

              <Row>
                {Ganeshtmpl.map((item, i) => (
                  <Col sm={12} md={4} key={i} className="mt-3">
                    <img src={item.imageUrl} />
                    <h6 className="text-black text-center fw-bold mb-2 mt-3">
                      {item.name}
                    </h6>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default TempleDescription;
