import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Avatar from "../components/Avatar";
import * as userApi from "../apis/user-api";

export default function ShowProfilePart() {
  const [user, setUser] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await userApi.getProfileById(userId);
        setUser(response.data.user);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, [userId]);

  return (
    <div className="w-[100%] flex justify-center">
      <div className="w-[50%]">
        <div className="flex flex-col justify-center">
          <div className="grid justify-center mt-10">
            <Avatar src={user.profileImage} size={250} />
          </div>

          <div className="p-10">
            <div>
              <h1 className="font-bold text-xl">Display Name</h1>
              <div className="border-black border-2 rounded-xl mt-2 mb-4 w-full">
                <div className="p-2">
                  <p>{user.username}</p>
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-xl">Tell Something</h1>
              <div className="border-black border-2 rounded-xl mt-2 mb-4 w-full">
                <div className="p-2">
                  <p>{user.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
