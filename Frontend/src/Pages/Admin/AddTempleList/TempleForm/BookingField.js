import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { MultiSelect } from "primereact/multiselect";

const BookingFields = ({
  currentNumber,
  handleBookingFields,
  handleRemoveBookingField,
  id,
  morningTime,
  eveningTime,
  price,
  bookingMenuOptions,
  bookingField,
  days,
}) => {
  const daysOptions = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <>
      {currentNumber >= 1 && (
        <Button
          variant="danger"
          className="mb-3"
          onClick={() => {
            handleRemoveBookingField(id);
          }}>
          {" "}
          Remove
        </Button>
      )}

      <Row>
        <Col md={4} xl={3}>
          <Form.Group controlId="bookingField">
            <Form.Label>Booking Field</Form.Label>
            <Dropdown
              filter
              value={bookingField}
              id="bookingField"
              onChange={(e) => {
                handleBookingFields(currentNumber, "bookingField", e.value);
              }}
              placeholder="Select a booking field"
              options={bookingMenuOptions}
              optionLabel="name"
              className="primeSelect"
              showClear
            />
          </Form.Group>
        </Col>

        <Col md={4} xl={3}>
          <Form.Group controlId="days">
            <Form.Label>Day(s)</Form.Label>
            <MultiSelect
              value={days}
              options={daysOptions}
              className="primeSelect"
              onChange={(e) =>
                handleBookingFields(currentNumber, "days", e.value)
              }
            />
          </Form.Group>
        </Col>

        <Col md={4} xl={2}>
          <Form.Group controlId="morningTime">
            <Form.Label>Morning Time</Form.Label>
            <Calendar
                className="primeSelect"
                id="morningTime"
                value={morningTime ? new Date(morningTime) : morningTime}
                timeOnly
                placeholder="Please choose"
                hourFormat="12"
                onChange={(e) =>
                  handleBookingFields(currentNumber, "morningTime", e.value)
                }
              />
          </Form.Group>
        </Col>

        <Col md={4} xl={2}>
          <Form.Group controlId="eveningTime">
            <Form.Label>Evening Time</Form.Label>
            <Calendar
                className="primeSelect"
                id="eveningTime"
                value={eveningTime ? new Date(eveningTime) : eveningTime}
                timeOnly
                placeholder="Please choose"
                hourFormat="12"
                onChange={(e) =>
                  handleBookingFields(currentNumber, "eveningTime", e.value)
                }
              />
          </Form.Group>
        </Col>

        <Col md={4} xl={2}>
          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              value={price}
              type="number"
              onChange={(e) => {
                handleBookingFields(currentNumber, "price", e.target.value);
              }}
            />
          </Form.Group>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(BookingFields);
