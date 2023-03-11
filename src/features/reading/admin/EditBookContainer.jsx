import React, { useState } from "react";
import Modal from "../../../components/Modal";
import EditBookForm from "./EditBookForm";

export default function EditBookContainer({ books, setBooks }) {
  const [open, setOpen] = useState();
  return (
    <div>
      <button
        type="button"
        className=" rounded-xl bg-gray-200 p-1.5 w-32 font-bold text-xl hover:bg-gray-300"
        onClick={() => setOpen(true)}
      >
        Edit
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <EditBookForm onClose={() => setOpen(false)} books={books} setBooks={setBooks} />
      </Modal>
    </div>
  );
}
