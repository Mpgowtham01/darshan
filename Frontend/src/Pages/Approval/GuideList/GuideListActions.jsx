import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import GuideListModal from "./GuideListModal";
import GuideRejectModal from "./GuideRejectModal";

const btnStyles = { fontSize: "0.7rem" };

const GuideListActions = ({ record }) => {
    const [approve, setApproved] = useState(false);
    const [reject, setRejected] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [rejectModalOpen, setRejectModalOpen] = useState(false);
    const statusText = record?.isApproved == 1 || approve ? "Approved" : record?.isApproved === 2 || reject ? "Rejected" : [];

    const handleApprove = async () => {
        try {
            const result = await axios.put(`${process.env.REACT_APP_DEV_BASE_URL}/approval/updateguide/${record?.guide_id}`, { status: "1" });
            if (result.data) {
                setApproved(true);
            }
        } catch (error) {
            console.log("Error", error);
        }
    };

    return (
        <>
            <GuideListModal guide_id={record?.guide_id} show={modalOpen} handleClose={() => setModalOpen(false)} />
            <GuideRejectModal guide_id={record?.guide_id} show={rejectModalOpen} handleClose={() => setRejectModalOpen(false)} handleReject={() => setRejected(true)} />

            <Button style={btnStyles} variant='primary' onClick={() => setModalOpen(true)}>View</Button>
            {
                record?.isApproved || approve || reject ? <span className="ms-2">{statusText}</span> :
                    <>
                        <Button style={btnStyles} className="mx-3" variant='success' onClick={handleApprove}>Approve</Button>
                        <Button style={btnStyles} variant='danger' onClick={() => setRejectModalOpen(true)}>Reject</Button>
                    </>
            }
        </>
    );
};



export default GuideListActions;