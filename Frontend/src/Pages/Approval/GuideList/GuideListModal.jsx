import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Modal } from 'react-bootstrap';
import { Row } from 'antd';

const GuideListModal = ({ guide_id, show, handleClose }) => {
    const [details, setDetails] = useState(null);
//   console.log('details@@@@@@@', details)
    const getSingleGuide = async () => {
        try {
            const result = await axios.get(`${process.env.REACT_APP_DEV_BASE_URL}/approval/singleguide/${guide_id}`);
            if (result.data?.length) {
                setDetails(result.data[0]);
            }
        } catch (error) {
            console.log("Error", error);
        }
    };

    useEffect(() => {
        if (show) {
            getSingleGuide();
        }
    }, [show]);

    const result = [
        { key: "Name", value: details?.guideName },
        { key: "Email", value: details?.emailId },
        { key: "Phone", value: details?.phone },
        { key: "Country", value: details?.country },
        { key: "State", value: details?.state },
        { key: "District", value: details?.district },
        { key: "City", value: details?.city },
        { key: "Area", value: details?.area_name },
        { key: "Pincode", value: details?.pincode },
        { key: "Language Knows", value: details?.language_knows },
    ];

    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Guide Details</Modal.Title>
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

export default GuideListModal;