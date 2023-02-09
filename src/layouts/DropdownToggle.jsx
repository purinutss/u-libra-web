import React from "react";
import Avatar from "../components/Avatar";
import useAuth from "../hooks/useAuth";

export default function DropdownToggle({ onClick }) {
  const { authenticatedUser } = useAuth();
  return (
    <div onClick={onClick}>
      <Avatar src={authenticatedUser.profileImage} size={50} />
    </div>
  );
}
