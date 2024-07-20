import React, { useState } from "react";
import homeImage from "../../components/Images/1.png";
import homeCarosal1 from "../../components/Images/5.png";
import homeCarosal2 from "../../components/Images/3.png";
import homeCarosal3 from "../../components/Images/4.png";
import TempleList from "./TempleList";
import Layout from "../../components/HomeLayout";
import "./HomePage.scss";
import ChatBot from "react-simple-chatbot";
import { BsFillChatLeftFill } from "react-icons/bs";
import { Carousel } from "react-bootstrap";
import OurServices from "./OurServices";

const HomePage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const step = [
    {
      id: "1",
      message: "What is your name?",
      trigger: "name",
    },
    {
      id: "name",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: "Hi {previousValue}! We are providing these services:",
      trigger: "service-question",
    },
    {
      id: "service-question",
      options: [
        { value: "iyerBooking", label: "Iyer Booking", trigger: "iyerBooking" },
        {
          value: "templeService",
          label: "Temple Services",
          trigger: "templeService",
        },
        { value: "addTemple", label: "Add Temple", trigger: "addTemple" },
      ],
    },
    {
      id: "iyerBooking",
      message: "Booking iyer facility for Functions",
      trigger: "7",
    },
    {
      id: "templeService",
      message: "Services for all temples",
      trigger: "7",
    },
    {
      id: "addTemple",
      message: "Users can add new temples",
      trigger: "7",
    },
    {
      id: "7",
      message: "Do you have any other queries about this service?",
      trigger: "query",
    },
    {
      id: "query",
      options: [
        { value: "yes", label: "Yes", trigger: "query-yes" },
        { value: "no", label: "No", trigger: "end-message" },
      ],
    },
    {
      id: "query-yes",
      message: "Contact our customer team at +91 9791036735",
      end: true,
    },
    {
      id: "end-message",
      message: "Thanks!",
      end: true,
    },
  ];

  return (
    <Layout>
      <div className="homePage">
        <div className="homePage__hero">
          {/* <div className="carousel-caption">
            <h1 className="caption-title"></h1>
            <p className="caption-subtitle"></p>
          </div> */}
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            interval={2000}
            pause="hover"
            style={{ marginTop: "10vh" }}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={homeImage}
                alt="First slide"
              />
              {/* <Carousel.Caption
                className="carousel-caption"
                style={{ paddingLeft: "80vh", paddingBottom: "35vh" }}
              >
                <h2 className="caption-title">Welcome to Darshan Journey</h2>
                <p className="caption-subtitle">
                  Embark on a spiritual adventure and discover the divine.
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={homeCarosal1}
                alt="Second slide"
              />
              {/* <Carousel.Caption
                className="carousel-caption"
                style={{ paddingBottom: "38vh", paddingLeft: "88vh" }}
              >
                <h3 className="caption-title">Experience the Divine</h3>
                <p className="caption-subtitle">
                  Discover the serenity and beauty of sacred temples. Join us on
                  a path of tranquility and spiritual awakening. Find peace and
                  solace in every visit.
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={homeCarosal2}
                alt="Third slide"
              />
              {/* <Carousel.Caption
                className="carousel-caption"
                style={{ paddingLeft: "78vh", paddingBottom: "35vh" }}
              >
                <h3 className="caption-title">Embrace the Spiritual Journey</h3>
                <p className="caption-subtitle">
                  Explore the rich heritage and spiritual essence of our
                  temples. Embark on a journey that enlightens the soul and
                  connects you with the divine.
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={homeCarosal3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="homePage__templesList">
          <TempleList />
        </div>
        <div className="mt-3 mb-5">
          <OurServices />
        </div>
        <div className="bot-content-style">
          <ChatBot floating={true} steps={step} />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
