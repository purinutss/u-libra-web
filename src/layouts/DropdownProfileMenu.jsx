import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";
import useAuth from "../hooks/useAuth";

export default function DropdownProfileMenu({ open, onClose }) {
  const { logout } = useAuth();

  return (
    <div className={`dropdown-menu end-0 px-2 ${open ? "d-block" : ""}`}>
      <Link to="/profile/:userId" className="dropdown-item" onClick={onClose}>
        <div className="flex justify-center">
          <Avatar src={"https://picsum.photos/60/60"} />
        </div>
        <div>
          <span className="text-lg font-bold">Purinut Seesen</span>
        </div>
      </Link>
      <hr className="dropdown-divider" />
      <button className="d-flex align-items-center" onClick={logout}>
        <i className="fa-solid fa-sign-out-alt rounded-circle p-2 text-black text-5 bg-gray-300 mr-3 " />
        <h1 className="fs-5 fw-semibold">Log Out</h1>
      </button>
    </div>
  );
}
