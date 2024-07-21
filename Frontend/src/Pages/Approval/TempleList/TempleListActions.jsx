import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import TempleListModal from "./TempleListModal";
import TempleRejectModal from "./TempleRejectModal";

const btnStyles = { fontSize: "0.7rem" };

const TempleListActions = ({ record }) => {
    const [approve, setApproved] = useState(false);
    const [reject, setRejected] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [rejectModalOpen, setRejectModalOpen] = useState(false);
    const statusText = record?.templeApproveStatus == 1 || approve ? "Approved" : record?.templeApproveStatus == 2 || reject ? "Rejected" : [];

    const handleApprove = async () => {
        try {
            const result = await axios.put(`${process.env.REACT_APP_DEV_BASE_URL}/temple/updateStatus/${record?.id}`, { templeApproveStatus: "1" });
            if (result.data) {
                setApproved(true);
            }
        } catch (error) {
            console.log("Error", error);
        }
    };

    return (
        <>
            <TempleListModal id={record?.id} show={modalOpen} handleClose={() => setModalOpen(false)} />
            <TempleRejectModal id={record?.id} show={rejectModalOpen} handleClose={() => setRejectModalOpen(false)} handleReject={() => setRejected(true)} />

            <Button style={btnStyles} variant='primary' onClick={() => setModalOpen(true)}>View</Button>
            {
                record?.templeApproveStatus || approve || reject ? <span className="ms-2">{statusText}</span> :
                    <>
                        <Button style={btnStyles} className="mx-3" variant='success' onClick={handleApprove}>Approve</Button>
                        <Button style={btnStyles} variant='danger' onClick={() => setRejectModalOpen(true)}>Reject</Button>
                    </>
            }
        </>
    );
};



export default TempleListActions;