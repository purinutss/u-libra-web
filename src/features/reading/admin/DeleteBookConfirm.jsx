import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as bookApi from "../../../apis/book-api";

export default function DeleteBookConfirm({ onClose }) {
  const { bookId } = useParams();
  const navigate = useNavigate();

  const handleDeleteBook = async (bookId) => {
    try {
      await bookApi.deleteBook(bookId);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="text-center text-black-400 font-black text-lg">
        <h1>Are you sure to delete this book?</h1>
      </div>
      <div className="flex justify-center gap-3">
        <div>
          <button
            type="button"
            className=" rounded-xl bg-gray-200 p-1.5 w-32 font-bold text-xl hover:bg-gray-300"
            onClick={() => {
              handleDeleteBook(bookId);
            }}
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
