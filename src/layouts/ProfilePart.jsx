import React, { useEffect, useRef, useState } from "react";
import Avatar from "../components/Avatar";
import useAuth from "../hooks/useAuth";
import * as userApi from "../apis/user-api";
import { useParams } from "react-router-dom";

export default function ProfilePart() {
  const { authenticatedUser } = useAuth();
  const initialEditInput = {
    username: authenticatedUser.username,
    bio: authenticatedUser.bio
  };
  const [user, setUser] = useState({});
  const [edit, setEdit] = useState(initialEditInput);
  const [image, setImage] = useState(null);
  const inputEl = useRef();
  const { userId } = useParams();

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("profileImage", image);
      formData.append("username", edit.username);
      formData.append("bio", edit.bio);
      await userApi.editProfile(formData);
    } catch (err) {
      console.log(err?.response?.data?.message);
    }
  };

  const handleChangeProfile = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <div className="w-[100%] flex justify-center">
        <div className="w-[50%]">
          <div className="flex flex-col justify-center">
            <div className="grid justify-center mt-10">
              <Avatar
                src={image ? URL.createObjectURL(image) : authenticatedUser.profileImage}
                size={250}
              />
            </div>

            <div className="mt-3 flex justify-center">
              <input
                type="file"
                ref={inputEl}
                className="hidden"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
              />
              <button
                type="button"
                className=" bg-gray-200 p-1.5 rounded-lg"
                onClick={() => inputEl.current.click()}
              >
                <i className="fa-solid fa-pen" />
                <span className="font-semibold">Change Picture</span>
              </button>
            </div>

            <div className="p-10">
              <div>
                <h1 className="font-bold text-xl">Display Name</h1>
                <input
                  type="text"
                  className="border-black border-2 rounded-3xl mt-2 mb-4 w-full"
                  name="username"
                  value={edit.username}
                  onChange={handleChangeProfile}
                />
              </div>
              <div>
                <h1 className="font-bold text-xl">Tell Something</h1>
                <textarea
                  type="text"
                  className="border-black border-2 rounded-3xl mt-2 mb-4 w-full h-36"
                  name="bio"
                  value={edit.bio}
                  onChange={handleChangeProfile}
                />
              </div>
              <div className="grid justify-end mb-2">
                <button
                  type="submit"
                  className="rounded-xl bg-emerald-200 p-1.5 w-32 font-bold text-2xl"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
