import React, { useState } from "react";
import Modal from "../../components/Modal";

import DeleteCommentConfirm from "./DeleteCommentConfirm";

export default function DeleteCommentContainer({ onClick }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <i type="button" className="fa-lg fa-regular fa-trash-can" onClick={() => setOpen(true)}></i>
      <Modal open={open} onClose={() => setOpen(false)}>
        <DeleteCommentConfirm onClose={() => setOpen(false)} onClick={onClick} />
      </Modal>
    </div>
  );
}
