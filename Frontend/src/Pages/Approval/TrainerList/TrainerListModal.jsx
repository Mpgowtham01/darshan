import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Modal } from 'react-bootstrap';
import { Row } from 'antd';

const TrainerListModal = ({ id, show, handleClose }) => {
    const [details, setDetails] = useState(null);
//   console.log('details@@@@@@@', details)
    const getSingleUser = async () => {
        try {
            const result = await axios.get(`${process.env.REACT_APP_DEV_BASE_URL}/approval/singleUser/${id}`);
            if (result.data?.length) {
                setDetails(result.data[0]);
            }
        } catch (error) {
            console.log("Error", error);
        }
    };

    useEffect(() => {
        if (show) {
            getSingleUser();
        }
    }, [show]);

    const result = [
        { key: "Name", value: details?.UserName },
        { key: "Email", value: details?.EmailId },
        { key: "Phone", value: details?.Phone },
        { key: "Country", value: details?.country },
        { key: "State", value: details?.state },
        { key: "District", value: details?.district },
        { key: "City", value: details?.city },
        { key: "Area", value: details?.area_name },
        { key: "Pincode", value: details?.Pincode },
    ];

    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>User Details</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {result.map((item, index) =>
                        <Row className="mb-3" key={index}>
                            <Col className='fw-bold'>{item.key}</Col>
                            <Col>{item.value}</Col>
                        </Row>
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
};

export default TrainerListModal;