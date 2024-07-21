import { useState } from "react";
import IyerApproveModal from "./IyerApproveModal";
import IyerDetailsModal from "./UserDetailsModal";
import IyerRejectModal from "./IyerRejectModal";

const btnStyles = { fontSize: "0.7rem" };


const IyerActions = ({ record }) => {
    const [openViewModal, setOpenViewModal] = useState(false);
    const [openApproveModal, setOpenApproveModal] = useState(false);
    const [openRejectModal, setOpenRejectModal] = useState(false);
    const [approve, setApprove] = useState(false);
    const [reject, setRejected] = useState(false);

    const handleClose = () => setOpenViewModal(false);
    const handleShow = () => setOpenViewModal(true);

    const handleApproveModalClose = () => setOpenApproveModal(false);
    const handleApproveModalShow = () => setOpenApproveModal(true);
    const handleApprove = () => setApprove(true);

    const handleRejectModalClose = () => setOpenRejectModal(false);
    const handleRejectModalShow = () => setOpenRejectModal(true);
    const handleReject = () => setRejected(true);

    const statusText = record?.isAdmin_Approved == 1 || approve ? "Approved" : record?.isAdmin_Approved === 2 || reject ? "Rejected" : [];

    return <>
        <IyerDetailsModal id={record?.iyer_booking_id} show={openViewModal} handleClose={handleClose} />
        <IyerApproveModal handleApprove={handleApprove} show={openApproveModal} handleClose={handleApproveModalClose} cityid={record?.cityId} iyer_booking_id={record?.iyer_booking_id} />
        <IyerRejectModal handleClose={handleRejectModalClose} handleReject={handleReject} show={openRejectModal} iyer_booking_id={record?.iyer_booking_id} />

        <button className="btn btn-primary" style={btnStyles} onClick={handleShow}>View</button>
        {record?.isAdmin_Approved || approve || reject ? <span className="ms-4">{statusText}</span> :
            <>
                <button className="btn btn-success mx-3" style={btnStyles} onClick={handleApproveModalShow}>Approved</button>
                <button className="btn btn-danger" style={btnStyles} onClick={handleRejectModalShow}>Reject</button>
            </>
        }
    </>;
};


export default IyerActions;