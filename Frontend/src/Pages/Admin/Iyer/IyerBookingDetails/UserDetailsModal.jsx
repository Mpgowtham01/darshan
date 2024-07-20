import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Modal } from 'react-bootstrap';
import { Row } from 'antd';

const UserDetailsModal = ({ id, show, handleClose }) => {
    const [details, setDetails] = useState(null);

    const getIyerDetails = async () => {
        try {
            const result = await axios.get(`${process.env.REACT_APP_DEV_BASE_URL}/iyerbooking/getSingleOrder/${id}`);
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
        { key: "Name", value: details?.UserName },
        { key: "Languages Known", value: details?.languagename },
        { key: "Country", value: details?.Countryname },
        { key: "State", value: details?.Statename },
        { key: "District", value: details?.Districtname },
        { key: "City", value: details?.Cityname },
        { key: "Area", value: details?.Areaname },
        { key: "Address", value: details?.Address },
        { key: "iyerdate", value: details?.iyerdate }
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

export default UserDetailsModal;