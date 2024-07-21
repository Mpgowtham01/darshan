import React from "react";
import { InputSwitch } from "primereact/inputswitch";
import { Col, Form, Row } from "react-bootstrap";

const SingleAmenity = React.memo(
  ({
    currentNumber,
    amenityName,
    handleUpdateAmenities,
    amenityStatus,
    AmenitiesId,
    amenityDescription,
  }) => {
    const handleUpdateSwitch = e =>
      handleUpdateAmenities(currentNumber, "amenityStatus", !amenityStatus);

    const handleUpdateDescription = e => {
      handleUpdateAmenities(
        currentNumber,
        "amenityDescription",
        e.target.value.replace(/(\r\n|\n|\r)/gm, "")
      );
    };

    return (
      <>
        <Col sm={5} key={AmenitiesId}>
          <label className="mb-2" htmlFor={amenityName}>
            {amenityName}
          </label>
          <InputSwitch
            id={amenityName}
            checked={amenityStatus}
            onChange={handleUpdateSwitch}
          />
          {amenityStatus ? (
            <Form.Control
              as="textarea"
              rows={3}
              value={amenityDescription}
              onChange={handleUpdateDescription}
            />
          ) : (
            []
          )}
        </Col>
      </>
    );
  }
);

const AmenitiesGroup = ({ amenities, handleUpdateAmenities }) => {
  return (
    <>
      <Row className="justify-content-between mt-4 gy-2">
        {amenities?.length
          ? amenities.map((item, index) => (
              <SingleAmenity
                key={item.AmenitiesId}
                {...item}
                currentNumber={index}
                handleUpdateAmenities={handleUpdateAmenities}
              />
            ))
          : []}
      </Row>
    </>
  );
};

export default AmenitiesGroup;
