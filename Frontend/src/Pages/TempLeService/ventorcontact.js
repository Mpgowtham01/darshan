import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Image } from "react-bootstrap";
import VendorEnquiry from "./enquiry";

function ContactPopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        onClick={handleShow}
        type="button"
        className="btn btn-outline-dark mr-2 w-100 contact contacts-btn"
      >
        Contact
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Contact Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src="https://images.unsplash.com/photo-1617463874381-85..." />
          <h4>Santhose mandapa 11</h4>

          <div className="number">
            <p>Contact</p>
            <p>
              <a href="@mailto:developers@crosshurdle.com" target="_blank">
                developers@crosshurdle.com
              </a>
            </p>
          </div>
          <div className="address">
            <h5>Address</h5>
            <p>48,krishnareddy street,Kutlu Gate,Banglore,India-732 124.</p>
          </div>
        </Modal.Body>
        <Modal.Footer className="model_footer  dis">
          <Button
            variant="btn btn-outline-secondary w-100"
            onClick={handleClose}
          >
            Close
          </Button>
          <br />
          <VendorEnquiry className="w-100" />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContactPopup;
