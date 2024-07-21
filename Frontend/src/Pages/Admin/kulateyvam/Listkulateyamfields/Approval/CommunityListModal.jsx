import { Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Modal } from "react-bootstrap";

const CommunityListModal = ({ id, show, handleClose }) => {
  const [details, setDetails] = useState(null);
  console.log(
    "🚀 ~ file: CommunityListModal.jsx:8 ~ CommunityListModal ~ details",
    details
  );
  const getSingleUser = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_DEV_BASE_URL}/community/getoneUser/${id}`
      );
      if (result.data?.length !== 0) {
        // setDetails(result.data[0]);
        setDetails(result.data.result[0]);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    // if (show) {
    getSingleUser();
    // }
  }, []);

  console.log(details, "details");

  const result = [
    { key: "Name", value: details?.name },
    { key: "Address", value: details?.address },
    { key: "Country", value: details?.country },
    { key: "State", value: details?.state },
    { key: "District", value: details?.district },
    { key: "City", value: details?.city },
    { key: "Area", value: details?.area },
    { key: "Designation", value: details?.designation },
    { key: "Family Name", value: details?.familyName },
    { key: "Group Name", value: details?.groupName },
  ];

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Community Details</Modal.Title>
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

export default CommunityListModal;
