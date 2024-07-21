import React from "react";
import { Container, Col, Card, Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import { useForm } from "react-hook-form";
import InputField from "../../Pages/Admin/AddTempleList/TempleForm/TempleFormComponents/InputField";
import { FaMobileAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import "../ContactUS/ContactUs.scss";
import contactImg from "../../components/Images/aejaz-memon-KdQ6oZUDCd0-unsplash (1).jpg";
import mailIcon from "../../components/Images/mailicon2.svg";
import phIcon from "../../components/Images/callicon2.svg";
import locationIcon from "../../components/Images/locateicon.svg";
import { MdArrowForward } from "react-icons/md";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      mobile: "",
      email: "",
      description: "",
      location: "",
    },
  });

  const commonProps = {
    errors,
    register,
  };

  const onSubmit = async (data) => {
    try {
      await axios.post(`${process.env.REACT_APP_DEV_BASE_URL}/contactus/create`, data);
      toast.success('Contact form submitted successfully!');
      reset(); // Reset form fields after successful submission
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast.error('Failed to submit contact form.');
    }
  };

  return (
    <Layout>
      <div>
        <div className="contact-us-container">
          <div className="cnt-img-container">
            <img className="contact-img" src={contactImg} alt="Contact Us" />
          </div>
          <div className="contact-htag">
            <h1>Contact Us</h1>
          </div>
          <div>
            <Card className="contact-us-card">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Row className="contact-us-row">
                  <Col lg={4}>
                    <InputField {...commonProps} keyId="name" name="Name" />
                  </Col>
                  <Col lg={4}>
                    <InputField {...commonProps} keyId="mobile" name="Mobile" />
                  </Col>
                  <Col lg={4}>
                    <InputField {...commonProps} keyId="email" name="E-mail" />
                  </Col>
                </Row>
                <Row className="contact-us-row">
                  <Col lg={6}>
                    <InputField {...commonProps} keyId="location" name="Location" />
                  </Col>
                  <Col lg={6}>
                    <InputField
                      {...commonProps}
                      keyId="description"
                      name="Description"
                      others={{ as: "textarea", rows: 4 }}
                    />
                  </Col>
                </Row>
                <div className="cnt-btn">
                  <button className="customBtn" style={{ color: "black" }} type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </Card>
          </div>
          <div className="contact-cards">
            <Row className="contact-card-row">
              <Col lg={4}>
                <Card className="cnt-cards1">
                  <h6 className="cnt-card-htag">SEND EMAIL<MdArrowForward /></h6>
                  <h5>Email Address</h5>
                  <div className="ptag-container">
                    <p>darshanjourney24@gmail.com</p>
                    <p className="cnt-ptag">hello123example@gmail.com</p>
                  </div>
                  <img src={mailIcon} className="contact-icon" alt="Email" />
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="cnt-cards2">
                  <h6 className="cnt-card-htag">CALL US NOW<MdArrowForward /></h6>
                  <h5>Phone Number</h5>
                  <div className="ptag-container">
                    <p>+91 8867929955</p>
                    <p className="cnt-ptag">+91 9876543210</p>
                  </div>
                  <img src={phIcon} className="contact-icon" alt="Phone" />
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="cnt-cards3">
                  <h6 className="cnt-card-htag">FIND US HERE<MdArrowForward /></h6>
                  <h5>Location</h5>
                  <p className="cnt-location-ptag">
                    48, opp. Hundai Showroom, Krishna Reddy Industrial Area, Muneshwara Nagar, Bengaluru, Karnataka 560068
                  </p>
                  <img src={locationIcon} className="contact-icon" alt="Location" />
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </Layout>
  );
}
