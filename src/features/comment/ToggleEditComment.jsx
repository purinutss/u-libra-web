import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../config/axios";

export default function ToggleEditComment({
  setShowComment,
  comment,
  commentId,
}) {
  console.log(comment);
  const [title, setTitle] = useState(comment);
  //   const { commentId } = useParams();
  const handleEditComment = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`/comment/${commentId}`, {
        detail: title,
      });
      //   const response = await axios.patch(`/comment/${commentId}`, {
      //     detail: title,
      //   });
      setShowComment(response.data.response);
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleEditComment}>
      <div className="w-[80%] border-2 items-start">
        <div className="flex items-center my-4">
          <div className="mx-3 w-full">
            <input
              type="text"
              className="border-2 border-black rounded-3xl w-[100%]"
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
