import React, { useState } from "react";
import Modal from "../../components/Modal";
import CategoryFormat from "./CategoryFormat";

export default function CategoryContainer() {
  const [open, setOpen] = useState(false);
  return (
    <div type="button">
      <i className="fa-solid fa-bars fa-xl" onClick={() => setOpen(true)}></i>
      <Modal open={open} onClose={() => setOpen(false)}>
        <CategoryFormat onClose={() => setOpen(false)} />
      </Modal>
    </div>
  );
}
