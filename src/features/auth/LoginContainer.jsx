import React, { useState } from "react";
import LoginForm from "./LoginForm";
import Modal from "../../components/Modal";

export default function LoginContainer() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        className="ml-5 rounded-xl bg-emerald-200 p-1.5 w-24 font-bold"
        onClick={() => setOpen(true)}
      >
        Login
      </button>
      <Modal open={open} title="Login">
        <LoginForm open={open} />
      </Modal>
    </div>
  );
}
