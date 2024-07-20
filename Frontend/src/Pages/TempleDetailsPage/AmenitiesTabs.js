import React, { useState } from "react";
import useFetch from "../Admin/AddTempleList/TempleForm/TempleRoutesGroup/useFetch";
import { Modal } from "react-bootstrap";
import { Popover } from "antd";

const AmenityTab = ({ amenityName, AmenitiesId, userDefinedAminities, amenityDescription }) => {
  const [show, setShow] = useState(false);

  const aminity = userDefinedAminities.find(
    item => item.AmenitiesId == AmenitiesId
  );
  // console.log("Aminity", amenityName, aminity?.amenityStatus);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (aminity?.amenityStatus) {
      setShow(true);
    }
  };

  const content = (
    <div>
      <h6 className="mb-1">{amenityName}</h6>
      <p>{aminity?.amenityDescription}</p>
    </div>
  );
  return (
    <>
      <Modal
        centered
        show={show}
        className="amenitiesTabModal"
        onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="amenityName">{amenityName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{aminity?.amenityDescription}</Modal.Body>
      </Modal>
      <Popover content={content} >

      <div
        className={`amenityTab ${!aminity?.amenityStatus && "opacityDown"}`}
        >
        <img src={`/images/amenities/${amenityDescription}`} alt="Amenity icon" />
        <h6 className="amenityName">{amenityName}</h6>
      </div>
      </Popover>

    </>
  );
};

const AmenitiesTabs = ({ aminities }) => {
  const [amenitiesList] = useFetch("Amenities", `amemities/getAll`);
  const userDefinedAminities = eval(aminities);

  return (
    <div className="templeDetails__left--amenities">
      <h2 className="title mb-3">Amenities</h2>

      <div className="tabsList">
        {amenitiesList?.map(item => (
          <AmenityTab
            key={`AdminDefined${item.AmenitiesId}`}
            userDefinedAminities={userDefinedAminities}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default AmenitiesTabs;
