import React, { useState } from "react";
import Modal from "../../../components/Modal";
import DeleteBookConfirm from "./DeleteBookConfirm";

export default function DeleteBookContainer() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        className=" rounded-xl bg-gray-200 p-1.5 w-32 font-bold text-xl hover:bg-gray-300"
        onClick={() => setOpen(true)}
      >
        Delete
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <DeleteBookConfirm onClose={() => setOpen(false)} />
      </Modal>
    </div>
  );
}
