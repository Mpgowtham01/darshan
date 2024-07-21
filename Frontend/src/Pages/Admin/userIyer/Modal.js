import React from "react";

const Modal = ({ handleOptionSelect, onClose }) => {
  const handleSelection = (option) => {
    handleOptionSelect(option);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Select your work location</h2>
        <button onClick={() => handleSelection("inside_temple")}>
          Inside the temple
        </button>
        <button onClick={() => handleSelection("outside_temple")}>
          Outside the temple
        </button>
      </div>
    </div>
  );
};

export default Modal;
