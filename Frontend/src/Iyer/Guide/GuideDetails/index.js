import React, { useState } from "react";
import { Col, Container, Image, Card, Row, Form } from "react-bootstrap";
import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";
import "../guide.css";
import { useForm } from "react-hook-form";
import InputField from "../../../Pages/Admin/AddTempleList/TempleForm/TempleFormComponents/InputField";

export default function GuideDetails() {
  const [classDetails, setClassDetails] = useState({
    imageUrl: "https://wallpaperaccess.com/full/3346765.jpg",
    className: "Hanuman Chalisa ",
    discountAmount: "25,000",
    amount: "20,000",
    startDate: "1st November 2022",
    endDate: "30th November 2022",
    startTime: "11.00 AM",
    endTime: "12.00 PM",
    startDay: "Monday",
    endDay: "Friday",
    mode: "Offline",
    offline: "Inside Temple",
    Address: "Vadapalani murugan kovil",
    area: "vadapalani",
    district: "Chennai",
    state: "Tamil Nadu",
    pincode: "606603",
    mobile: "1234567890",
    email: "aaa@gmail.com",
    topics: [
      "Introducción",
      "Composer of Hanuman Chalisa",
      "About Lord Rama",
      "Introduce to you the benefits of Chanting the Shri Rama Mantra",
      "Included the guided meditation techniques to phrase the God Hanuman and Shri Rama",
      "About Lord Hanuman and his physical appearance",
      "Skills in Lord Hanuman",
    ],
    description:
      "Hanuman Chalisa is a timeless ode to devotion Lord Hanuman is known for his devotion to Lord Ram and is considered to be the embodiment of faith, surrender, and devotion. The 'Hanuman Chalisa' is composed by Saint Goswami Tulsidas, the author of the Tulsi Ramayana (Ramacharitamanasa). It is believed that an ailing Tulsidas composed the Hanuman Chalisa. Composing and singing the praises of Lord Hanuman, helped Tulsidas regain his health.Composed of 40 verses filled with praises for Lord Hanuman, the Hanuman Chalisa is composed in Avadhi. This dialect of Hindi was spoken in Ayodhya, Lord Rama’s birthplace. ",
  });

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  const commonProps = {
    errors,
    register,
  };

  const onSubmit = async (data) => {
    console.log("data", data);
  };

  return (
    <Layout>
      <div className="mt-5 pt-2 fullscreen">
        <Container>
          <div className="row my-5">
            {/* <h4
              className="pb-4"
              style={{ fontFamily: "arial" }}
            >{`${classDetails.className}`}</h4> */}
            <h3
              className="my-3"
              style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
            >
              {classDetails.className}
            </h3>
            <Col lg={8}>
              <div>
                <p style={{ textAlign: "justify" }}>
                  {classDetails.description}
                </p>
              </div>
            </Col>
            <Col className="px-5" lg={4}>
              <Image
                src={classDetails.imageUrl}
                alt="Pooja images"
                height={200}
                width="100%"
              />
            </Col>
          </div>
          <Row>
            <div className="mb-3">
              <h6
                className="ms-5 mb-3"
                style={{ textDecoration: "underline", fontWeight: "bold" }}
              >
                Training Class Timings & Details
              </h6>

              {/* Date and Timing */}
              <div className="d-flex justify-content-center my-3">
                <div
                  className=" px-5 py-3"
                  style={{ border: "1px solid gray", width: "80%" }}
                >
                  <h4
                    style={{
                      fontWeight: 700,
                      fontFamily: "Playfair Display, serif",
                      marginBottom: 20,
                    }}
                  >
                    Date & Timing
                  </h4>
                  <Row className="ms-3">
                    <Col
                      xs={3}
                      sm={3}
                      md={3}
                      lg={2}
                      className="d-flex justify-content-between"
                    >
                      <p style={{ fontWeight: "700" }}>Day</p>
                      <p>:</p>
                    </Col>
                    <Col>
                      <p>{`${classDetails.startDay} - ${classDetails.endDay}`}</p>
                    </Col>
                  </Row>
                  <Row className="ms-3">
                    <Col
                      xs={3}
                      sm={3}
                      md={3}
                      lg={2}
                      className="d-flex justify-content-between"
                    >
                      <p style={{ fontWeight: "700" }}>Time</p>
                      <p>:</p>
                    </Col>
                    <Col>
                      <p>{`${classDetails.startTime} - ${classDetails.endTime}`}</p>
                    </Col>
                  </Row>
                  <Row className="ms-3">
                    <Col
                      xs={3}
                      sm={3}
                      md={3}
                      lg={2}
                      className="d-flex justify-content-between"
                    >
                      <p style={{ fontWeight: "700" }}>Start Date</p>
                      <p>:</p>
                    </Col>
                    <Col>
                      <p>{`${classDetails.startDate}`}</p>
                    </Col>
                  </Row>
                  <Row className="ms-3">
                    <Col
                      xs={3}
                      sm={3}
                      md={3}
                      lg={2}
                      className="d-flex justify-content-between"
                    >
                      <p style={{ fontWeight: "700" }}>End Date</p>
                      <p>:</p>
                    </Col>
                    <Col>
                      <p>{`${classDetails.endDate}`}</p>
                    </Col>
                  </Row>
                </div>
              </div>

              {/* Mode */}
              <div className="d-flex justify-content-center my-3">
                <div
                  className=" px-5 py-3"
                  style={{ border: "1px solid gray", width: "80%" }}
                >
                  <h4
                    style={{
                      fontWeight: 700,
                      fontFamily: "Playfair Display, serif",
                      marginBottom: 20,
                    }}
                  >
                    Mode(Offline/Online)
                  </h4>
                  <Row className="ms-3">
                    <Col
                      xs={3}
                      sm={3}
                      md={3}
                      lg={2}
                      className="d-flex justify-content-between"
                    >
                      <p style={{ fontWeight: "700" }}>{classDetails.mode}</p>
                      <p>:</p>
                    </Col>
                    <Col>
                      {classDetails.mode === "Offline" ? (
                        <p>{`${classDetails.offline}`}</p>
                      ) : (
                        classDetails.mode === "Online" && (
                          <Link className="">
                            https://zoom.us/signin#/login
                          </Link>
                        )
                      )}
                    </Col>
                  </Row>
                </div>
              </div>

              {/* Location */}
              {classDetails.mode === "Offline" && (
                <div className="d-flex justify-content-center my-3">
                  <div
                    className=" px-5 py-3"
                    style={{ border: "1px solid gray", width: "80%" }}
                  >
                    <h4
                      style={{
                        fontWeight: 700,
                        fontFamily: "Playfair Display, serif",
                        marginBottom: 20,
                      }}
                    >
                      Location
                    </h4>
                    <Row className="ms-3">
                      <Col
                        xs={3}
                        sm={3}
                        md={3}
                        lg={2}
                        className="d-flex justify-content-between"
                      >
                        <p style={{ fontWeight: "700" }}>Address</p>
                        <p>:</p>
                      </Col>
                      <Col>
                        <p>{`${classDetails.Address},`}</p>
                      </Col>
                    </Row>
                    <Row className="ms-3">
                      <Col
                        xs={3}
                        sm={3}
                        md={3}
                        lg={2}
                        className="d-flex justify-content-between"
                      >
                        <p style={{ fontWeight: "700" }}>Area</p>
                        <p>:</p>
                      </Col>
                      <Col>
                        <p>{`${classDetails.area},`}</p>
                      </Col>
                    </Row>
                    <Row className="ms-3">
                      <Col
                        xs={3}
                        sm={3}
                        md={3}
                        lg={2}
                        className="d-flex justify-content-between"
                      >
                        <p style={{ fontWeight: "700" }}>District/City</p>
                        <p>:</p>
                      </Col>
                      <Col>
                        <p>{`${classDetails.district},`}</p>
                      </Col>
                    </Row>
                    <Row className="ms-3">
                      <Col
                        xs={3}
                        sm={3}
                        md={3}
                        lg={2}
                        className="d-flex justify-content-between"
                      >
                        <p style={{ fontWeight: "700" }}>State</p>
                        <p>:</p>
                      </Col>
                      <Col>
                        <p>{`${classDetails.state},`}</p>
                      </Col>
                    </Row>
                    <Row className="ms-3">
                      <Col
                        xs={3}
                        sm={3}
                        md={3}
                        lg={2}
                        className="d-flex justify-content-between"
                      >
                        <p style={{ fontWeight: "700" }}>Pincode</p>
                        <p>:</p>
                      </Col>
                      <Col>
                        <p>{`${classDetails.pincode}.`}</p>
                      </Col>
                    </Row>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-5 mb-3">
              <h6
                className="ms-5 mb-3"
                style={{ textDecoration: "underline", fontWeight: "bold" }}
              >
                In this course you will learn
              </h6>
              <div className="course-learn-style ms-5 ps-3">
                {classDetails.topics.map((item, index) => (
                  <div>{item}</div>
                ))}
              </div>
            </div>
            <hr />
            <Col lg={7}>
              <div className="mb-5">
                <h6
                  className="ms-1 mb-3"
                  style={{ textDecoration: "underline", fontWeight: "bold" }}
                >
                  Fees Structure
                </h6>
                <div className="ps-1 ms-3 my-3">
                  <p>if you know the price details</p>
                  <div
                    className=" ps-2 py-3"
                    style={{ border: "1px solid gray", width: "100%" }}
                  >
                    <h4
                      style={{
                        fontWeight: 700,
                        fontFamily: "Playfair Display, serif",
                        marginBottom: 20,
                      }}
                    >
                      Contact Us
                    </h4>
                    <Row className="ms-1">
                      <Col
                        xs={3}
                        sm={3}
                        md={3}
                        lg={2}
                        className="d-flex justify-content-between"
                      >
                        <p style={{ fontWeight: "700" }}>Mobile No.</p>
                        <p>:</p>
                      </Col>
                      <Col>
                        <p>{`${classDetails.mobile}`}</p>
                      </Col>
                    </Row>
                    <Row className="ms-1">
                      <Col
                        xs={3}
                        sm={3}
                        md={3}
                        lg={2}
                        className="d-flex justify-content-between"
                      >
                        <p style={{ fontWeight: "700" }}>Email</p>
                        <p>:</p>
                      </Col>
                      <Col>
                        <p>{`${classDetails.email}`}</p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={5} className="bg-white py-4 px-4 mb-3">
              <h5>Send your Enquiry Form</h5>
              <p className="mb-0">Please fill all the details</p>

                <Form
                  className="createFormPage__form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <Row>
                    <Col lg={6}>
                      <InputField
                        {...commonProps}
                        keyId="firstName"
                        name="First Name"
                      />
                    </Col>
                    <Col lg={6}>
                      <InputField
                        {...commonProps}
                        keyId="lastName"
                        name="Last Name"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6}>
                      <InputField {...commonProps} keyId="email" name="Email" />
                    </Col>
                    <Col lg={6}>
                      <InputField
                        {...commonProps}
                        keyId="phoneNumber"
                        name="Phone Number"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <InputField
                        {...commonProps}
                        keyId="message"
                        name="Message"
                        others={{ as: "textarea", rows: 3 }}
                      />
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-end mt-2">
                    <button
                      className="enquiry-button  mt-0"
                      style={{ color: "black" }}
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}
