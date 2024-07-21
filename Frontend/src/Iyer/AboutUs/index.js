import React from "react";
import Layout from "../../components/Layout";
import { Col, Row, Container, Image } from "react-bootstrap";
//import officePujaImage from '../../components/Images/officePujaImage.png';
import officePuja from '../../components/Images/officePuja.jpeg';

export default function AboutUs() {
  return ( 
    <Layout>
      <div className="mt-5 pt-2">
        <Container className="py-5">
          <div className="row my-4">
            <Col
              className="p-5"
              style={{
                backgroundColor: "white",
                // backgroundImage: `url(${officePujaImage})`,
                backgroundImage: `url(${officePuja})`,
                backgroundSize: "cover", // Optionally, adjust the background size
                backgroundPosition: "center", // Optionally, adjust the background position
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <h6 className="mb-4"  style={{ color: "white" }}>WHAT WE DO</h6>
              <h3 className="mb-4"  style={{ color: "white" }}>
                We provide Puja Services for all your needs!
              </h3>
              <p  style={{ color: "white" }}>We also do pujas on following occasions</p>
              <p  style={{ color: "white" }}>
                * Varalakshmi Puja * Sumangali Puja * New office opening Puja *
                Ayudha Puja. {/*We also do pujas on */}
              </p>
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div
                className="px-2 d-flex justify-content-center"
                style={{ position: "relative" }}
              >
                <Image
                  src="https://roofandfloor.thehindu.com/real-estate-blog/wp-content/uploads/sites/14/2019/01/House-Warming-Featured-2-840x480.jpg"
                  alt="Pooja images"
                  height={200}
                  width="50%"
                />
              </div>
              <div
                className="px-2"
                style={{ marginTop: "-28%", position: "inherit" }}
              >
                <Image
                  src="https://images.pexels.com/photos/5759233/pexels-photo-5759233.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Pooja images"
                  height={200}
                  width="50%"
                />
              </div>
            </Col>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
