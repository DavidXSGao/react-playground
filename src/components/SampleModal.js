import React, { useState } from "react";
import Modal from "react-modal";

// gets rid of warning in console 'react-modal: App element is not defined'
Modal.setAppElement("#root");
function SampleModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const ToggleModal = () => {
    return (
      <button onClick={() => setModalIsOpen((prevState) => !prevState)}>
        {modalIsOpen
          ? "Click me to close the modal"
          : "Click me to open a modal"}
      </button>
    );
  };

  return (
    <>
      <ToggleModal />
      {/* 
      onRequestClose closes modal when clicking outside or hitting the esc key 
      shouldCloseOnEsc, shouldCloseOnOverlayClick individual checks
      */}
      {/* default styles http://reactcommunity.org/react-modal/styles/ */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen((prevState) => !prevState)}
        style={{
          overlay: {
            backgroundColor: "gray",
          },
          content: {
            color: "blue",
          },
        }}
      >
        <h2>Modal Title</h2>
        <p>Modal Body</p>
        <ToggleModal />
      </Modal>
    </>
  );
}

export default SampleModal;
