import React, { useEffect, useRef, useState } from "react";
import Avatar from "../components/Avatar";
import useAuth from "../hooks/useAuth";
import * as userApi from "../apis/user-api";
import { useNavigate, useParams } from "react-router-dom";
import useLoading from "../hooks/useLoading";

export default function ProfilePart() {
  const { authenticatedUser, setAuthenticatedUser } = useAuth();
  const initialEditInput = {
    username: authenticatedUser.username,
    bio: authenticatedUser.bio
  };
  const [edit, setEdit] = useState(initialEditInput);
  const [image, setImage] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const { userId } = useParams();
  const navigate = useNavigate();
  const inputEl = useRef();

  const { startLoading, stopLoading } = useLoading();

  // useEffect for get data from api after change and set it to authenticated
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await userApi.getProfileById(userId);
        setAuthenticatedUser(response.data.user);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
    return () => setIsEdit(false);
  }, [isEdit]);

  // useEffect for refresh
  useEffect(() => {
    setEdit({
      username: authenticatedUser.username,
      bio: authenticatedUser.bio
    });
  }, [authenticatedUser]);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    startLoading();
    try {
      const formData = new FormData();
      formData.append("profileImage", image);
      formData.append("username", edit.username);
      formData.append("bio", edit.bio);
      await userApi.editProfile(formData);
    } catch (err) {
      console.log(err?.response?.data?.message);
    } finally {
      setIsEdit(true);
      stopLoading();
      navigate(-1);
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
                className=" bg-gray-200 p-1.5 rounded-lg hover:bg-gray-300"
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
                  className="border-black border-2 rounded-xl mt-2 mb-4 w-full"
                  name="username"
                  value={edit.username}
                  onChange={handleChangeProfile}
                />
              </div>
              <div>
                <h1 className="font-bold text-xl">Tell Something</h1>
                <textarea
                  type="text"
                  className="border-black border-2 rounded-xl mt-2 mb-4 w-full h-36"
                  name="bio"
                  value={edit.bio}
                  onChange={handleChangeProfile}
                />
              </div>
              {/* {authenticatedUser.id === user.id ? (
                <div className="grid justify-end mb-2">
                  <button
                    type="submit"
                    className="rounded-xl bg-emerald-200 p-1.5 w-32 font-bold text-2xl"
                  >
                    Save
                  </button>
                </div>
              ) : (
                ""
              )} */}
              <div className="grid justify-end mb-2">
                <button
                  type="submit"
                  className="rounded-xl bg-emerald-200 p-1.5 w-32 font-bold text-2xl hover:bg-emerald-300"
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
