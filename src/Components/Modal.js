import React from "react";
import Modal  from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ModalDialog = ({currendBand,show,handleClose}) => {
  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{currendBand.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{currendBand.info}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
  );
};

export default ModalDialog;
