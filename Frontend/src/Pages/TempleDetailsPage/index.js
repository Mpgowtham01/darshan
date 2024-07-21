import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import LeftSection from "./LeftSection";
import NearByVendor from "./NearByVendor";
import RightSection from "./RightSection";
import "./TempleDetails.scss";

const TempleDetailsPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !params?.state ||
      !params?.district ||
      !params?.godname ||
      !params?.city
    ) {
      return navigate("/", { replace: true });
    }
  }, []);

  const { godname, city } = params;

  return (
    <>
      <Layout>
        <div className="templeDetails">
          <Container>
            <Row className="gx-5">
              <Col lg={8}>
                <LeftSection godname={godname} city={city} />
              </Col>

              <Col lg={4}>
                <div className="templeDetais__right">
                  <RightSection />
                </div>
              </Col>
            </Row>
            <Row>
              <NearByVendor />
            </Row>
          </Container>
        </div>
      </Layout>
    </>
  );
};

export default TempleDetailsPage;
