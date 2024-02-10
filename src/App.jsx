import { useState } from "react";
import { createPortal } from "react-dom";

import "./App.css";
import { Modal } from "./components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleButtonClick = (value) => {
    setModalOpen(false);
    setMessage(value);
  };

  return (
    <div className="App">
      {message}
      <button className="btn btn-open" onClick={() => setModalOpen(true)}>
        Open
      </button>
      {modalOpen &&
        createPortal(
          <Modal
            closeModal={handleButtonClick}
            onSubmit={handleButtonClick}
            onCancel={handleButtonClick}
          >
            <h1>This is a modal. Hello World!</h1>
            <br />
            <p>This is the modal description. Hello World and Digital City!</p>
          </Modal>,
          document.body
        )}
    </div>
  );
}

export default App;