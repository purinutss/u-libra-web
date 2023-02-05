import React from "react";

export default function Modal({ open, onClose, children }) {
  return (
    <>
      <div
        className={`modal fade show ${open ? "d-block" : ""}`}
        tabIndex="-1"
        onMouseDown={onClose}
      >
        <div
          className="modal-dialog modal-dialog-centered"
          onMouseDown={(e) => e.stopPropagation()}
        >
          <div className="relative modal-content">
            {/* <div className="p-2 mr-2">
              <i
                type="button"
                className="fa-solid fa-xmark"
                onClick={onClose}
              ></i>
            </div> */}
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
      {open && <div className="modal-backdrop fade show" />}
    </>
  );
}
