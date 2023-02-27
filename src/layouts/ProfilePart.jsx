import React from "react";
import Avatar from "../components/Avatar";
import MeAction from "../features/profile/MeAction";
import useAuth from "../hooks/useAuth";

export default function ProfilePart() {
  const { authenticatedUser } = useAuth();
  return (
    <>
      <div className="w-[100%]">
        <div className="flex flex-col justify-center">
          <div className="grid justify-center mt-10">
            <Avatar src={authenticatedUser.profileImage} size={250} />
          </div>

          <div className="mt-3">
            <MeAction title="Edit Profile" />
          </div>

          <div className="p-10">
            <div>
              <h1 className="font-bold text-xl">Display Name</h1>
              <input type="text" className="border-black border-2 rounded-3xl mt-2 mb-4 w-full" />
            </div>
            <div>
              <h1 className="font-bold text-xl">Tell Something</h1>
              <input
                type="text"
                className="border-black border-2 rounded-3xl mt-2 mb-4 w-full h-36"
              />
            </div>
            <div>
              <h1 className="font-bold text-xl">Facebook URL</h1>
              <input type="text" className="border-black border-2 rounded-3xl mt-2 mb-4 w-full" />
            </div>
            <div className="grid justify-end mb-2">
              <button
                type="button"
                className="rounded-xl bg-emerald-200 p-1.5 w-32 font-bold text-2xl"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
