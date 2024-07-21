import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Modal } from 'react-bootstrap';
import { Row } from 'antd';

const IyerDetailsModal = ({ id, show, handleClose }) => {
    const [details, setDetails] = useState(null);

    const getIyerDetails = async () => {
        try {
            const result = await axios.get(`${process.env.REACT_APP_DEV_BASE_URL}/iyer/getOneIyer/${id}`);
            if (result.data?.length) {
                setDetails(result.data[0]);
            }
        } catch (error) {
            console.log("Error", error);
        }
    };

    useEffect(() => {
        if (show) {
            getIyerDetails();
        }
    }, [show]);

    const result = [
        { key: "Name", value: details?.iyername },
        { key: "Email", value: details?.iyerEmail },
        { key: "Phone", value: details?.iyerPhone },
        { key: "Secondary Number", value: details?.iyerSecondarynumber },
        { key: "Whatsapp Number", value: details?.iyerWhatsappnumber },
        { key: "Country", value: details?.iyerCountry },
        { key: "State", value: details?.iyerState },
        { key: "District", value: details?.iyerDistrict },
        { key: "City", value: details?.iyerCity },
        { key: "Area", value: details?.iyerArea },
        { key: "Pincode", value: details?.iyerPincode },
    ];

    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Priest Details</Modal.Title>
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

export default IyerDetailsModal;