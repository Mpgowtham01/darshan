import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Layout from "../../components/Layout";
import Spinner from "../AllTemplesPage/Spinner";
import "./AboutUsPage.scss";
import DOMPurify from "dompurify";
import {
  UserOutlined,
  UsergroupAddOutlined,
  TranslationOutlined,
  QqOutlined,
  AntDesignOutlined,
  RedditOutlined,
} from "@ant-design/icons";
import iyerImage from "./iyer1.jpg";
import vendorImage from "./vendor shp.jpg";
import iyerTraining from "./iyerTraining.jpg"
import userImage from "./templeCrowd.jpg"
import guideImage from "./guideImage1.jpg"
import communityImage from "./cmmunity.jpeg"
import { useNavigate } from "react-router-dom";

const AboutUsPage = () => {
  const [aboutDetails, setAboutDetails] = useState(null);
  const [showLoading, setShowLoading] = useState(false);
  const navigate = useNavigate();

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const handleNavigate = () => {
    navigate("/login");
  };
  const screenSizeVariation = screenSize.dynamicWidth < 1041;

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  const card = [
    {
      svg: userImage,
      name: "User",
      content:
        "Common users visit the temple project to access various types of information, including temple location, contact details, opening hours, upcoming events, religious services, and cultural activities.Click here to get more details.",
      link: "User",
    },
    {
      svg: vendorImage,
      name: "Vendor",
      content:
        "Is easier than you probably thought. There are budget hotels and lodges near the temple. You can share this on website, get more business lead. We have available in 1000+ user, they are directly approach you. Click here to get more details.",
      link: "Vendor",
    },
    {
      svg: iyerImage,
      name: "Iyer",
      content:
        "Join our network. If you are experienced iyers for all types of Poojas, Homams, Marriage, Satyanarayan Pooja, Griha Pravesh Pooja .Create you’re Account by clicking on Registration. All your orders will be safe. Our user will directly contact you for book Poojas and other functions. If you want more details click here",
      link: "Iyer",
    },
    {
      svg: iyerTraining,
      name: "Trainer",
      content:
        " Devotional book that will change your life! Because there is nothing more powerful or life-changing than God’s Word. Our aim is to spread devotional knowledge to the qualified candidates to build our culture. If you are a Hindu priest in any of the Veda, it's right time to join with us. Click here to move forward.",
      link: "Trainer",
    },
    {
      svg:guideImage,
      name: "Guide",
      content:
        "The new guides that will make it easier for you to connect with travelers from all over! Hiring a Guide for a tour to temple is a great service to experience the new learning in an essentially new way. The Guides are professionally well educated individuals with a destination and Proficient in foreign languages. If you need more details click here.",
      link: "Guide",
    },
    // {
    //   svg: communityImage,
    //   name: "Community",
    //   content:
    //     "A family-god is more than just a place of worship. It also play a central role in the community. Admin create a community, then you can add a Photos and other kovil function images. ",
    //   link: "Community",
    // },
  ];

  const getAboutDetails = async () => {
    try {
      setShowLoading(true);
      const result = await axios.get(
        `${process.env.REACT_APP_DEV_BASE_URL}/about/getOne`
      );
      if (result.data?.status === "Success" && result.data?.result?.length) {
        setShowLoading(false);
        setAboutDetails(result.data.result[0]);
      }
    } catch (error) {
      console.log(error);
      setShowLoading(false);
    }
  };

  useEffect(() => {
    getAboutDetails();
  }, []);

  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(
      aboutDetails?.description?.replaceAll("\n", "<br/>")
    ),
  });

  return (
    <Layout>
      <div className="aboutUsPage">
        {showLoading && (
          <div className="text-center mx-auto my-5 pt-5">
            <Spinner />
          </div>
        )}

        <Container>
          <Row>
            <Col lg={10}>
              <h1 className="aboutUsPage__title">{aboutDetails?.title}</h1>
              <div
                className="aboutUsPage__content"
                dangerouslySetInnerHTML={sanitizedData()}
              ></div>
            </Col>
          </Row>
        </Container>
      </div>
      <Row style={{ paddingInline: "70px", paddingBlock: "40px" }}>
       
                 {card.map((ele, index) => (

        <Col lg={6}>
          <div className="mb-3">
            <center>
              <img src={ele.svg} alt="image" className="AboutUsIyerImage" />
            </center>
          </div>
          <center >
            <div className="AboutusIyerHeading mb-2">{ele.name}</div>
            <p style={{height:"110px",fontSize:"15px"}}>
              {ele.content}
            </p>
            <div>
              {" "}
              <Button className="aboutUsReigerButton mb-5" onClick={handleNavigate}>
                Register by
              </Button>
            </div>
          </center>
        </Col>
          ))}
      </Row>
    </Layout>
  );
};

export default AboutUsPage;
