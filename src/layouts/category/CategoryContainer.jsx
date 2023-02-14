import React, { useState } from "react";
import RightSideBar from "../../components/RightSideBar";
import CategoryFormat from "./CategoryFormat";

export default function CategoryContainer() {
  const [open, setOpen] = useState(false);
  return (
    <div type="button">
      <i
        className="fa-solid fa-bars fa-xl"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
        onClick={() => setOpen(true)}
      ></i>
      <RightSideBar
        title={"Category Lists"}
        open={open}
        onClose={() => setOpen(false)}
      >
        <CategoryFormat onClose={() => setOpen(false)} />
      </RightSideBar>
    </div>
  );
}
