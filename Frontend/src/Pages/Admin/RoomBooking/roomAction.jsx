import { useState } from "react";
import RoomDetailsModal from "./roomDetails";

const btnStyles = { fontSize: "0.7rem" };

const IyerActions = ({ record }) => {
  const [openViewModal, setOpenViewModal] = useState(false);

  const handleClose = () => setOpenViewModal(false);
  const handleShow = () => setOpenViewModal(true);

  return (
    <>
      <RoomDetailsModal
        id={record?.id}
        show={openViewModal}
        handleClose={handleClose}
      />

      <button
        className="btn btn-primary"
        style={btnStyles}
        onClick={handleShow}
      >
        View
      </button>
    </>
  );
};

export default IyerActions;
