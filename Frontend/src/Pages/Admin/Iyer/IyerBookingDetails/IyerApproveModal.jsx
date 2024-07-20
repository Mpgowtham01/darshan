import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';


const IyerApproveModal = ({ show, handleClose, cityid, handleApprove, iyer_booking_id }) => {
    const [iyerList, setIyerList] = useState([]);
    const [iyer, setIyer] = useState(null);

    const getIyerList = async () => {
        try {
            const result = await axios.get(`${process.env.REACT_APP_DEV_BASE_URL}/iyer/getIyerListCity/${cityid}`);
            if (result.data.length) {
                setIyerList(result.data);
            }
        } catch (error) {
            console.log("Error", error);
        }
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const result = await axios.put(`${process.env.REACT_APP_DEV_BASE_URL}/iyerbooking/updateAssignIyer/${iyer_booking_id}`, { iyer_id: iyer });
            if (result.data) {
                handleApprove();
                handleClose();
            }

        } catch (error) {
            console.log("Error", error);
        }
        handleApprove();
    };

    useEffect(() => { if (show) { getIyerList(); } }, [show]);


    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Approve Iyer</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <select showSearch placeholder="Select Iyer" className="w-100 mb-5 form-select" value={iyer} onChange={e => setIyer(e.target.value)} >
                        {iyerList.length ? iyerList.map((item) => <option key={item?.iyer_id} value={item?.iyer_id}>{item.name}</option>) : []}
                    </select>

                    <div className="btnContainer text-center">
                        <button className="customBtn bg small" type='reset' onClick={handleClose}>Cancel</button>
                        <button className="customBtn small dark-text ms-3" type='submit'>Submit</button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default IyerApproveModal;