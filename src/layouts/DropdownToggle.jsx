import React from "react";
import Avatar from "../components/Avatar";

export default function DropdownToggle({ onClick }) {
  return (
    <div onClick={onClick}>
      <Avatar src={"https://picsum.photos/50/50"} />
    </div>
  );
}
