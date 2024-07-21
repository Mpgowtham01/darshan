import React, { useState } from "react";
import useFetch from "../Admin/AddTempleList/TempleForm/TempleRoutesGroup/useFetch";
import { Modal } from "react-bootstrap";

const PoojaModalTab = ({ poojaName, timings, description, frequent, poojaNameId, poojas }) => {
  const [show, setShow] = useState(false);
  const titleStyles = { fontFamily: "var(--secondary-font)", fontWeight: "500", marginBottom: "10px" };
  const subTitleStyles = { fontFamily: "var(--primary-font)", fontSize: "1rem", color: "var(--secondary-color)", fontWeight: 600 };

  const pooja = poojas.find((item) => item.FunctionID === poojaNameId);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <Modal
        centered
        show={show}
        className="amenitiesTabModal"
        onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="amenityName">{poojaName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className="mt-2" style={titleStyles}>When:- <span style={subTitleStyles} >{frequent}</span> </h5>
          <h5 className="mt-2" style={titleStyles}>Timings:- <span style={subTitleStyles} >{timings}</span> </h5>
          <div className="mt-3">
            <h5 style={titleStyles}>About Pooja conducted by temple</h5>
            <p>{description}</p>
          </div>

          <div className="mt-3">
            <h5 style={titleStyles}>Description</h5>
            <p>{pooja?.Description}</p>
          </div>

          <div className="mt-2">
            <h5 style={titleStyles}>Additional Information</h5>
            <p>{pooja?.AdditionalInformation}</p>
          </div>
        </Modal.Body>
      </Modal>

      <div className="amenityTab" onClick={handleShow}>
        <h6 className="amenityName" style={{ fontSize: "13px", padding: "12px 6px" }}><span>{poojaName}</span><span className="d-block">({frequent})</span></h6>
      </div>
    </>
  );
};

const PoojaTabs = ({ poojaFields }) => {
  const [poojas] = useFetch("Functions", `functions/getAll`);
  const parsedPooja = eval(poojaFields);

  console.log(parsedPooja, "poojas");

  return (
    <div className="templeDetails__left--amenities">
      <h2 className="title mb-3">Pooja Name</h2>

      <div className="tabsList">
        {parsedPooja?.map((item) => (
          <PoojaModalTab key={item.id} {...item} poojas={poojas} />
        ))}
      </div>
    </div>
  );
};

export default PoojaTabs;
