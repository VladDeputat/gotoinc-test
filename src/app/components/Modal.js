import React from "react";

const Modal = ({ setIsModalOpen, children }) => {
  return (
    <div
      className="modal fade show"
      id="editModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      style={{ display: "block" }}
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Edit request
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setIsModalOpen(false)}
            ></button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
