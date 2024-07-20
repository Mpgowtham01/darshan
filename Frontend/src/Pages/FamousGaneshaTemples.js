import React from "react";
import "../components/Css/sass/FamousGaneshaTemples.scss";
import { Row, Col, Card, Button } from "react-bootstrap";
import naramuga from "../components/Images/nara.png";
import Ganapatheeswarar from "../components/Images/gana.png";
import Khabartheesar from "../components/Images/khaba.png";
import Puliakulam from "../components/Images/pulia.png";
import SreeVinayakar from "../components/Images/sree.png";
import SriSenpaga from "../components/Images/sri.png";
import { useLocation, useNavigate } from "react-router-dom";

const list = [
  {
    Id: 1,
    Image: naramuga,
    Content: "Naramuga Vinayakar Temple",
  },
  {
    Id: 1,
    Image: Ganapatheeswarar,
    Content: "Ganapatheeswarar Temple",
  },
  {
    Id: 1,
    Image: Khabartheesar,
    Content: "Khabartheesar Karpaga Nathar Temple",
  },
 
  {
    Id: 1,
    Image: Puliakulam,
    Content: "Puliakulam Vinayakar Temple",
  },

  {
    Id: 1,
    Image: SreeVinayakar,
    Content: "Sree Vinayakar Temple",
  },
  {
    Id: 1,
    Image: SriSenpaga,
    Content: "Sri Senpaga Vinayakar Temple",
  },
];
const FamousGaneshaTemples = () => {
  const {state} = useLocation();
  
  return (
    <div className="famousganeshapage">
      {console.log(state,"pop")}
      <div className="templesnames ">
        <h1 className="text-light p-5 ">
          <b>Famous Ganesh Temples</b>{" "}
        </h1>

        <Row className="templeRow p-4">
          <Col xs={12} sm={12} md={6} lg={3}>
            <Card className="templeRowCard">
              Kanipakam Vinayakar Temple, Chitoor
            </Card>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3}>
            <Card className="templeRowCard">
              Manakula Vinayakar Temple, Pondicherry
            </Card>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3}>
            <Card className="templeRowCard">
              Madhur Mahaganapathi Temple,Kerala
            </Card>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3}>
            <Card className="templeRowCard">
              Madhur Mahaganapathi Temple,Kerala
            </Card>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3}>
            <Card className="templeRowCard">
              Madhur Mahaganapathi Temple,Kerala
            </Card>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3}>
            <Card className="templeRowCard">
              Madhur Mahaganapathi Temple,Kerala
            </Card>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3}>
            <Card className="templeRowCard">
              Madhur Mahaganapathi Temple,Kerala
            </Card>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3}>
            <Card className="templeRowCard">
              Madhur Mahaganapathi Temple,Kerala
            </Card>
          </Col>
        </Row>

        <div className="d-flex justify-content-center p-5">
          <input placeholder="Search Temple Names..." className="searchbox" />
          <button className="searchboxicon px-3" enterButton="Search">
            Search
          </button>
        </div>
      </div>

      <Row>
        <div>
          <h1 className="text-dark p-5">
            <b>Ganesha Temples</b>
          </h1>
        </div>

        {list.map((list, i) => (
          <Col xs={12} sm={12} md={4}>
            <div key={i}>
              <img
                src={list.Image}
                className="GaneshTempleImage p-3"
                
              />
              <div className="text-center text-dark GaneshTempleName mt-3 mb-5">
                {list.Content}
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <div className="p-5 text-end">
        <Button className="viewall" variant="light">
          View All
        </Button>
      </div>
      {/* </Container> */}
    </div>
  );
};
export default FamousGaneshaTemples;
