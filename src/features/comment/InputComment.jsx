import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Avatar from "../../components/Avatar";
import axios from "../../config/axios";
import useAuth from "../../hooks/useAuth";

export default function InputComment({ setShowComment, showComment }) {
  const [title, setTitle] = useState("");
  const { bookId } = useParams();

  const { authenticatedUser } = useAuth();

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`/comment/${bookId}`, {
        detail: title
      });
      setShowComment([...showComment, response.data.response]);
      // Update the comments on the page by calling fetchComments() from the parent component
    } catch (error) {
      console.error(error);
    }

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="flex justify-center items-center my-4">
        <div className="">
          <Avatar src={authenticatedUser.profileImage} size={70} />
        </div>
        <div className="mx-3">
          <input
            type="text"
            className="border-2 border-black rounded-3xl w-96"
            placeholder="Comments..."
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
    </form>
  );
}
