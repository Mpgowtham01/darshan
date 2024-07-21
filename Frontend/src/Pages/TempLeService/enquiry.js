import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Form, FloatingLabel } from "react-bootstrap";

function VendorEnquiry() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div style={{ width: "100%" }}>
      <Button className=" mr-2 w-100 contact" onClick={handleShow}>
        Enquiry
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{ width: "100%" }}
      >
        <div className="p-1">
          <Modal.Header closeButton>
            <Modal.Title className="d-block p-2" style={{ fontSize: "20px" }}>
              Send enquiry
              <br />
              <p style={{ fontSize: "14px" }}>
                Please Fill the all the Details
              </p>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Row className="g-4 ">
              <div>
                <Col lg={4} className="col">
                  <label>Full Name</label>
                  <FloatingLabel controlId="floatingInputGrid">
                    <Form.Control
                      type="text"
                      style={{ width: "450px" }}
                      required
                    />
                  </FloatingLabel>
                </Col>
                <Col lg={4} className="col">
                  <label>Email</label>
                  <FloatingLabel controlId="floatingInputGrid">
                    <Form.Control
                      type="email"
                      style={{ width: "450px" }}
                      required
                    />
                  </FloatingLabel>
                </Col>
                <Col lg={4} className="col">
                  <label>Mobile Number</label>
                  <FloatingLabel controlId="floatingInputGrid">
                    <Form.Control
                      type="number"
                      style={{ width: "450px" }}
                      required
                    />
                  </FloatingLabel>
                </Col>
                <Col lg={4} className="col">
                  <label>Date</label>
                  <FloatingLabel controlId="floatingInputGrid">
                    <Form.Control
                      type="date"
                      style={{ width: "450px" }}
                      required
                    />
                  </FloatingLabel>
                </Col>
              </div>
            </Row>
            <Row className="g-4 mt-2">
              <Col>
                <label>Comments</label>
                <FloatingLabel controlId="floatingInputGrid">
                  <textarea
                    className="form-control"
                    rows="4"
                    cols="50"
                    required
                  ></textarea>
                </FloatingLabel>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer className="footer-btn">
            <Button
              type="reset"
              value="Reset"
              variant="btn btn-outline-secondary"
            >
              Reset
            </Button>
            <Button className="check-btn">submit</Button>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
}

export default VendorEnquiry;
