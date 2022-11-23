import React from 'react';
import Modal from 'react-modal';

interface Props {
    stackInfo: string;
    modalIsOpen: boolean;
    closeModal: () => void;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    fontSize: 'large',
    fontFamily: 'cursive',
    fontWeight: 'bold',
  },
};

const Overlay: React.FC<Props> = ({stackInfo, modalIsOpen, closeModal}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Overlay"
    >
        <span>{stackInfo}</span>
    </Modal>
  );
};

export default Overlay;
