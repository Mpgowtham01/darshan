import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Api from "../../Api";
import axios from "axios";
import Layout from "../../components/HomeLayout";

export default function EventTempleDetails() {
  const [templeData, setTempleData] = useState();
  const [CategoryList, setCategoryList] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  console.log("params", params);
  useEffect(() => {
    templeGetOne();
    // getCategoryList();
    // axios
    //   .get(`http://localhost:4000/event/detailOne/${params.id}`)
    //   .then((res) => {
    //     console.log("res", res);
    //     setTempleData(res.data);
    //   })
    //   .catch((err) => console.log(err));
  }, []);

  const templeGetOne = async () => {
    await Api.get(`${process.env.REACT_APP_DEV_BASE_URL}/event/detailOne/${params.id}`)
      .then(res => {
        console.log("res", res);
        setTempleData(res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <Layout>
    <div className="container mt-4"style={{paddingTop:"14vh",paddingBottom:"10vh"}}>
      {templeData &&
        templeData.map((events, i) => (
          <>
            <Row>
              <Card style={{marginTop:"-2vh"}}>
                <Row>
                <Col lg={5} style={{marginLeft:"7vh"}}>
                <h2 className="text-dark m-2 fw-bold mt-4">{events.event_name}</h2>
                  <img
                    className="templedetailimage p-2"
                    src={`${process.env.REACT_APP_DEV_BASE_URL}${events.event_image}`}
                    height={400}
                    width={"100%"}
                  />
                  <div className="templedtl mb-4" style={{marginTop:"2vh"}}>
                      <h5 className=" text-dark p-2">
                        <b> Description: </b> </h5>
                        
                        <p style={{marginTop:"2vh",marginLeft:"1vh"}}>{events.description}{" "}</p>
                     
                    </div>
                </Col>
               
             
              
                {/* <hr></hr> */}
                <Col lg={6} style={{paddingTop:"10.5vh"}}>
                <h5 style={{color:"orange"}}>Event Details:</h5>
                <br></br>
                  <p className=" text-dark p-2 ">
                    <b> Date: </b> {events.event_startdate} to{" "}
                    {events.event_enddate}{" "}
                  </p>
                  <p className="text-dark p-2">
                    {" "}
                    <b>Location:</b> {events.address}
                  </p>
                  <p className="text-dark p-2">
                    <b>Price: </b>
                    {events.price}
                  </p>
                    <div>
                      {/* <label for="" class="pt-3">Address</label> <br></br> */}
                      <p className="text-dark p-2">
                        {" "}
                        <b>Address:</b> <br></br> {events.address},{" "}
                        {events.cityName}, {events.DistrictName},{" "}
                        {events.CountryName}
                      </p>
                    </div>
                </Col>
                
                </Row>
              </Card>
            </Row>
        
          </>
        ))}
    </div>
    </Layout>
  );
}
