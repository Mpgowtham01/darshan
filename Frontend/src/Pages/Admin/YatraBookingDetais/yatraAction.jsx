import { useState } from "react";
import YatraDetailsModal from "./yatraDetails";

const btnStyles = { fontSize: "0.7rem" };

const IyerActions = ({ record }) => {
  const [openViewModal, setOpenViewModal] = useState(false);
  const handleClose = () => setOpenViewModal(false);
  const handleShow = () => setOpenViewModal(true);

  return (
    <>
      <YatraDetailsModal
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
