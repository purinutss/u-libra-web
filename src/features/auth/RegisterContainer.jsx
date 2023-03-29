import React, { useState } from "react";
import Modal from "../../components/Modal";
import RegisterForm from "./RegisterForm";

export default function RegisterContainer() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-center mt-2 font-semibold">
        <h1>Don't have any account?&nbsp;</h1>
        <h1
          type="button"
          className=" hover:text-blue-700 hover:underline"
          onClick={() => setOpen(true)}
        >
          Sign Up Here
        </h1>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <RegisterForm onClose={() => setOpen(false)} />
      </Modal>
    </div>
  );
}
