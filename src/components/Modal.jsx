import React from "react";
import useLoading from "../hooks/useLoading";

export default function Modal({ open, onClose, children }) {
  const { loading } = useLoading();

  return (
    <>
      <div
        className={`modal fade show absolute ${open ? "d-block" : ""}`}
        tabIndex="-1"
        style={loading ? { zIndex: 99 } : {}}
        onMouseDown={onClose}
      >
        <div
          // style={{ zIndex: 99 }}
          className="modal-dialog modal-dialog-centered"
          onMouseDown={(e) => e.stopPropagation()}
        >
          <div className="relative modal-content">
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
      {open && <div className="modal-backdrop fade show" />}
    </>
  );
}
