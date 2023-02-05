import React, { useState } from "react";
import Modal from "../../components/Modal";
import RegisterForm from "./RegisterForm";

export default function RegisterContainer() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1
        type="button"
        className="mt-2 hover:text-blue-700 hover:underline"
        onClick={() => setOpen(true)}
      >
        create new account
      </h1>
      <Modal open={open} onClose={() => setOpen(false)}>
        <RegisterForm onClose={() => setOpen(false)} />
      </Modal>
    </div>
  );
}
