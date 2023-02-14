import React from "react";

export default function RightSideBar({ title, children, open }) {
  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        open={open}
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasRightLabel">
            {title}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">{children}</div>
      </div>
    </>
  );
}
