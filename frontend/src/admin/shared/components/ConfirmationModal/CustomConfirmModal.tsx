import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { TailSpin } from 'react-loader-spinner';

const CustomConfirmModal: React.FC<{
  handleCloseModal: () => void;
  handleConfirm: () => void;
  isOpen: boolean;
  message: string;
  title: string;
  loading?: boolean;
}> = ({ handleCloseModal, handleConfirm, isOpen, message, title, loading = false }) => {
  return (
    <>
      <Modal show={isOpen} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Annuler
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            {loading ? <TailSpin height="25" width="30" color="#fff" ariaLabel="loading" /> : 'Confirmer'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomConfirmModal;
