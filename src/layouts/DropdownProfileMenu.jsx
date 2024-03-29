import React from "react";
import { Link, useParams } from "react-router-dom";
import Avatar from "../components/Avatar";
import useAuth from "../hooks/useAuth";

export default function DropdownProfileMenu({ open, onClose }) {
  const { logout, authenticatedUser } = useAuth();
  return (
    <div className={`dropdown-menu end-0 px-2 ${open ? "d-block" : ""}`}>
      <Link to={`/profile/${authenticatedUser.id}`} className="dropdown-item" onClick={onClose}>
        <div className="flex justify-center">
          <Avatar src={authenticatedUser.profileImage} size={60} />
        </div>
        <div className="text-center">
          <span className="text-lg font-bold">{authenticatedUser.username}</span>
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
