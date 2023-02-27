import React from "react";
// import LoginContainer from "../features/auth/LoginContainer";
import useAuth from "../hooks/useAuth";
import Brand from "./Brand";
import CategoryContainer from "./category/CategoryContainer";
import DropdownProfile from "./DropdownProfile";
import Button from "../layouts/admin/Button";
import { Link } from "react-router-dom";

export default function Header() {
  const { authenticatedUser } = useAuth();
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
              {authenticatedUser.role === "admin" ? (
                <div className="flex items-center mr-5">
                  <Link to="/create-book">
                    <Button title="Create Book" />
                  </Link>
                </div>
              ) : (
                ""
              )}
              {/* {authenticatedUser.role && authenticatedUser.role === "admin" && (
                <div className="flex items-center mr-5">
                  <Link to="/create-book">
                    <Button title="Create Book" />
                  </Link>
                </div>
              )} */}
              <div className="p-2 mr-5">
                <CategoryContainer />
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
