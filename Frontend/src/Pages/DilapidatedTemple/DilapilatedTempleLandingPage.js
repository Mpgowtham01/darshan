import React from "react";
import CustomNav from "../../components/HeaderNavBar/CustomNav";
import CustomNavF from "../../components/Footer/index";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function DilapilatedTempleLandingPage() {
  const { state: location } = useLocation();

  return (
    <div className="home-1 py-10" style={{ background: "none" }}>
      <CustomNav />
      <Container>
        <h3 className="mt-5 mb-4">{location?.name}</h3>
        <Row className="mb-4">
          <Col>
            <img
              style={{
                paddingTop: "10px",
                borderRadius: "10px",
                width: "100%",
                height: "50vh",
              }}
              src={location?.imageUrl}
              alt="none"
            />
          </Col>
          <Col style={{ paddingTop: "2%" }}>
            <div>
              <Card style={{ padding: "10px" }}>
                <p style={{ padding: "10px", marginTop: "10px" }}>
                  {location?.description}
                </p>
                <Button
                  style={{
                    borderRadius: "10px",
                    padding: "10px",
                    fontWeight: "bold",
                    marginTop: "20px",
                  }}
                >
                  Donate Us
                </Button>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
      <CustomNavF />
    </div>
  );
}

export default DilapilatedTempleLandingPage;
