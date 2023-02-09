import React from "react";
import Avatar from "../components/Avatar";
import LoginContainer from "../features/auth/LoginContainer";
import useAuth from "../hooks/useAuth";
import Brand from "./Brand";
import DropdownProfile from "./DropdownProfile";

export default function Header() {
  const authenticatedUser = useAuth();
  return (
    <>
      <nav>
        <div className="">
          <div className="flex justify-between text-lg shadow-lg p-3 w-full">
            <Brand />
            <div className="flex">
              <input
                className="w-72 mr-5 bg-slate-100 rounded-xl p-1 placeholder-slate-400"
                type="text"
                placeholder="Search..."
              />
              <div className="p-2 mr-5">
                <i className="fa-solid fa-bars fa-xl"></i>
              </div>
              <div className="dropdown" type="button">
                <DropdownProfile />

                {/* <div>
                  <LoginContainer authenticatedUser={authenticatedUser} />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
