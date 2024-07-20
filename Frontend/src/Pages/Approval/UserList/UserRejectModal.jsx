import axios from 'axios';
import { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';


const UserRejectModal = ({ show, handleClose, handleReject, id }) => {
    const [rejectReason, setRejectReason] = useState("");

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const result = await axios.put(`${process.env.REACT_APP_DEV_BASE_URL}/approval/updateuser/${id}`, { status: "2", rejectedReasonByAdmin: JSON.stringify(rejectReason || "") });
            if (result.data) {
                handleReject();
                handleClose();
            }
        } catch (error) {
            console.log("Error", error);
        }
        handleReject();
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Reject User</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={handleSubmit}>

                    <Form.Group controlId='rejectReason'>
                        <Form.Label>Reason to reject  </Form.Label>
                        <Form.Control as="textarea" rows={5} value={rejectReason} onChange={e => setRejectReason(e.target.value)} />
                    </Form.Group>

                    <div className="btnContainer text-center mt-5">
                        <button className="customBtn bg small" type='reset' onClick={handleClose}>Cancel</button>
                        <button className="customBtn small dark-text ms-3" type='submit'>Submit</button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default UserRejectModal;