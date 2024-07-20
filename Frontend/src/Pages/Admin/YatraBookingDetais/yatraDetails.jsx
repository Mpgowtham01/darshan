import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Modal } from "react-bootstrap";
import { Row } from "antd";

const UserDetailsModal = ({ id, show, handleClose }) => {
  const [details, setDetails] = useState(null);

  const getIyerDetails = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_DEV_BASE_URL}/yatraBooking/getAllbyIdYatraBooking/${id}`
      );
      if (result.data?.length) {
        setDetails(result.data[0]);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    if (show) {
      getIyerDetails();
    }
  }, [show]);

  const result = [
    { key: "Name", value: details?.fullName },
    { key: "Email", value: details?.email },
    { key: "Contact Number", value: details?.contactNumber },
    { key: "Alternate Number", value: details?.emergencyContact },
    { key: "Gender", value: details?.gender },
    { key: "Number of Person", value: details?.numberOfTravels },
    { key: "Address", value: details?.address },
  ];

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Yatra's Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {result.map((item, index) => (
            <Row className="mb-3" key={index}>
              <Col className="fw-bold">{item.key}</Col>
              <Col>{item.value}</Col>
            </Row>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UserDetailsModal;
