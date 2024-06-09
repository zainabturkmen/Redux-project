import React from "react";

const Modal = () => {
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button className="btn confirm-btn" type="button">
            confirm
          </button>
          <button className="btn clear-btn" type="button">
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
