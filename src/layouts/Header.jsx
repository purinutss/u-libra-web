import React from "react";
import LoginContainer from "../features/auth/LoginContainer";

export default function Header() {
  return (
    <>
      <div className="mb-5">
        <div className="flex justify-between text-lg shadow-lg p-3">
          <div className="text-emerald-400 font-black text-4xl text-center ml-10 ">
            <h1>U-LIBRA</h1>
          </div>
          <div className="flex">
            <input
              className="w-72 mr-5 bg-slate-100 rounded-xl p-1 placeholder-slate-400"
              type="text"
              placeholder="Search..."
            />
            <div className="p-2">
              <i className="fa-solid fa-bars fa-xl"></i>
            </div>
            <div className="flex items-center">
              <LoginContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
