import React, { useState } from "react";
import Avatar from "../../components/Avatar";
import useAuth from "../../hooks/useAuth";
import * as commentApi from "../../apis/comment-api";

export default function InputComment() {
  const [title, setTitle] = useState("");

  const authenticatedUser = useAuth();

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (title) {
      formData.append("title", title);
    }
    await commentApi.createComment(formData);
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <div className="flex justify-center items-center my-4">
        <div className="">
          <Avatar src={authenticatedUser.profileImage} size={50} />
        </div>
        <div className="mx-3">
          <input
            type="text"
            className="border-2 border-black rounded-3xl w-96"
            placeholder="Comments..."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="">
          <button>
            <i type="submit" className="fa-2x fa-regular fa-circle-right"></i>
          </button>
        </div>
      </div>
    </form>
  );
}
