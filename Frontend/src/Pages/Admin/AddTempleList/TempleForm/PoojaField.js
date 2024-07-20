import { Dropdown } from "primereact/dropdown";
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Calendar } from "primereact/calendar";

const PoojaField = ({
  currentNumber,
  poojaMenuOptions,
  handlePoojaFields,
  handleRemovePoojaField,
  id,
  frequent,
  poojaName,
  timings,
  description,
}) => {
  const frequentOptions = [
    "Daily",
    "Weekly",
    "2 Weeks",
    "Monthly",
    "Quarterly",
    "Half Yearly",
    "Yearly",
  ];

  const handlePoojaChange = (e) => {
    if (e.value) {
      handlePoojaFields(currentNumber, "poojaName", e.value.FunctionName);
      handlePoojaFields(currentNumber, "poojaNameId", e.value.FunctionID);
    } else {
      // Handle the case where e.value is undefined or null
      // You might want to clear the poojaName and poojaNameId fields or handle it as per your requirements
      handlePoojaFields(currentNumber, "poojaName", null);
      handlePoojaFields(currentNumber, "poojaNameId", null);
    }
  };
  

  const selectPoojaTemplate = (option, props) => {
    console.log("Pooja Template option", option);
    console.log("Pooja Template props", props);
    if (option) {
      return (<div className="country-item country-item-value"><div>{option}</div></div>);
    }

    if (props.value) {
      return <span>{props.value}</span>;
    }

    return <span>{props.placeholder}</span>;
  };

  return (
    <>
      {currentNumber >= 1 && (
        <Button variant="danger" className="mb-3" onClick={() => { handleRemovePoojaField(id); }}>
          Remove
        </Button>
      )}

      <Row>
        <Col md={4} xl={3}>
          <Form.Group controlId="poojaField">
            <Form.Label>Pooja Name</Form.Label>
            <Dropdown filter value={poojaName} id="poojaField" onChange={handlePoojaChange} placeholder="Select a Pooja field" options={poojaMenuOptions} optionLabel="FunctionName" className="primeSelect" valueTemplate={selectPoojaTemplate} showClear />
          </Form.Group>
        </Col>

        <Col md={4} xl={3}>
          <Form.Group controlId="frequent">
            <Form.Label>Frequent</Form.Label>
            <Dropdown filter value={frequent} className="primeSelect" placeholder="Select how frequent pooja will occur" onChange={(e) => handlePoojaFields(currentNumber, "frequent", e.value)} options={frequentOptions}
            />
          </Form.Group>
        </Col>

        <Col md={4} xl={3}>
          <Form.Group controlId="timings">
            <Form.Label>Timings</Form.Label>
            <input value={timings} className="form-control" placeholder="Enter pooja timings" id="timings" onChange={(e) => handlePoojaFields(currentNumber, "timings", e.target.value)}></input>
          </Form.Group>
        </Col>

        <Col md={4} xl={3}>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <textarea value={description} id="description" rows={4} onChange={(e) => handlePoojaFields(currentNumber, "description", e.target.value)}></textarea>
          </Form.Group>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(PoojaField);
