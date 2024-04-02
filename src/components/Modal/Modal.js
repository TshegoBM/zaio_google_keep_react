import "./Modal.css";
import React from "react";
import Form from "../Form/Form";

const Modal = (props) => {
  const { isModalOpen, selectedNote, toggleModal} = props;
  //const {edit} = props;
  return (
    <div className={`modal ${isModalOpen ? "open-modal" : ""}`}>
      <div className="modal-content">
      <Form selectedNote={selectedNote} toggleModal={toggleModal} edit />
    </div>
    </div>
  );
};

export default Modal;
