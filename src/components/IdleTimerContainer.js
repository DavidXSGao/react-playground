import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import IdleTimer from "react-idle-timer";
import Modal from "react-modal";

// https://github.com/supremetechnopriest/react-idle-timer

Modal.setAppElement("#idle-timer");
function IdleTimerContainer() {
  const idleTimerRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // second ref so that the onIdle event doesn't trigger again after already logged out
  const sessionTimeoutRef = useRef(null);

  const onIdle = () => {
    setIsModalOpen(true);
    sessionTimeoutRef.current = setTimeout(logOut, 2 * 1000);
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setIsModalOpen(false);
  };

  const stayActive = () => {
    setIsModalOpen(false);
  };

  return ReactDOM.createPortal(
    <>
      <button onClick={() => setIsLoggedIn((prevState) => !prevState)}>
        {isLoggedIn ? "Log out" : "Log in"}
      </button>
      {isLoggedIn ? <div>Logged In</div> : <div>Logged Out</div>}
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
        <h2>You've been idle for awhile!</h2>
        <p>You will be logged out soon.</p>
        <div>
          <button onClick={logOut}>Log me out</button>
          <button onClick={stayActive}>Keep me signed in</button>
        </div>
      </Modal>
      <IdleTimer
        ref={idleTimerRef}
        timeout={5 * 1000}
        onIdle={onIdle}
      ></IdleTimer>
    </>,
    document.getElementById("idle-timer")
  );
}

export default IdleTimerContainer;
