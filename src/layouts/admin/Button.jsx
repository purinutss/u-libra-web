import React from "react";

export default function Button({ title, type, className, style }) {
  return (
    <>
      <div>
        <button
          type={type || "button"}
          className={
            className ||
            " rounded-xl bg-emerald-200 p-1.5 w-32 font-medium text-lg hover:bg-emerald-300"
          }
        >
          {title}
        </button>
      </div>
    </>
  );
}
