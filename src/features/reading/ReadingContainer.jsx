import React, { useState } from "react";
import Modal from "../../components/Modal";
import ReadingFormat from "./ReadingFormat";

export default function ReadingContainer() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        className=" rounded-xl bg-emerald-200 p-1.5 w-32 font-bold text-xl"
        onClick={() => setOpen(true)}
      >
        Read
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ReadingFormat onClose={() => setOpen(false)} />
      </Modal>
    </div>
  );
}
