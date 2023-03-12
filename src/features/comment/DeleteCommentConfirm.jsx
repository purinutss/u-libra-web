import React from "react";

export default function DeleteCommentConfirm({ onClick, onClose }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-center text-black-400 font-black text-lg">
        <h1>Are you sure to delete this comment?</h1>
      </div>
      <div className="flex justify-center gap-3">
        <div>
          <button
            type="button"
            className=" rounded-xl bg-gray-200 p-1.5 w-32 font-bold text-xl hover:bg-gray-300"
            onClick={onClick}
          >
            Yes
          </button>
        </div>
        <div>
          <button
            type="button"
            className=" rounded-xl bg-emerald-200 p-1.5 w-32 font-bold text-xl hover:bg-emerald-300"
            onClick={onClose}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
