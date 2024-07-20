import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Modal, Row } from 'react-bootstrap';

const IyerConfirmedModal = ({ id, show, handleClose }) => {
    const [details, setDetails] = useState(null);

    const getPendingDetails = async () => {
        try {
            const result = await axios.get(`${process.env.REACT_APP_DEV_BASE_URL}/iyerbooking/getSingleIyerBookingWithAdminApprove/${id}`);
            if (result.data?.length) {
                setDetails(result.data[0]);
            }
        } catch (error) {
            console.log("Error", error);
        }
    };

    useEffect(() => {
        if (show) {
            getPendingDetails();
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
    ];

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Iyer Confirm</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {result.map((item, index) =>
                    <Row className="mb-3" key={index}>
                        <Col className='fw-bold'>{item.key}</Col>
                        <Col>{item?.value}</Col>
                    </Row>
                )}
            </Modal.Body>
        </Modal>
    );
};

export default IyerConfirmedModal;