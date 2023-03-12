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
        <div className="flex items-center w-[80%]">
          <div className="mr-3 w-full ">
            <textarea
              type="text"
              className=" rounded-lg w-[100%]"
              value={title}
              rows={2}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">
              <i className="fa-2x fa-regular fa-circle-right"></i>
            </button>
          </div>
          <div>
            <button type="button" onClick={() => setOpenEdit(false)}>
              <i className="fa-2x fa-regular fa-circle-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
