import React, { useState, useEffect, useRef } from "react";
import DropdownProfileMenu from "./DropdownProfileMenu";
import DropdownToggle from "./DropdownToggle";

export default function DropdownProfile() {
  const [open, setOpen] = useState(false);
  const dropdownEl = useRef(); //25 morning 2.19.28

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownEl.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="d-flex justify-content-end">
      <div className="dropdown" ref={dropdownEl}>
        <DropdownToggle onClick={() => setOpen(!open)} />
        <DropdownProfileMenu open={open} onClose={() => setOpen(false)} />
      </div>
    </div>
  );
}
