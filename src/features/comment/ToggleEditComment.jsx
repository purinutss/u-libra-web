import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../config/axios";

export default function ToggleEditComment({
  setShowComment,
  comment,
  commentId,
  setIsUpdateComment,
  setOpenEdit
}) {
  console.log(comment);
  const [title, setTitle] = useState(comment);
  //   const { commentId } = useParams();
  const handleEditComment = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`/comment/${commentId}`, {
        detail: title
      });
      setShowComment(response.data.response);
      setIsUpdateComment(true);
      setOpenEdit(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleEditComment}>
      <div className="w-[100%] items-start">
        <div className="flex items-center my-4">
          <div className="mx-3 w-full ">
            <textarea
              type="text"
              className="border-2 border-black rounded-3xl w-[100%] h-28"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="">
            <button type="submit">
              <i className="fa-2x fa-regular fa-circle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
