import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import LoginContainer from "../features/auth/LoginContainer";
import useAuth from "../hooks/useAuth";
import Brand from "./Brand";
import CategoryContainer from "./category/CategoryContainer";
import DropdownProfile from "./DropdownProfile";
import Button from "../layouts/admin/Button";
import * as bookApi from "../apis/book-api";

export default function Header() {
  const [bookTitle, setBookTitle] = useState([]);

  useEffect(() => {
    const fetchBookTitle = async () => {
      try {
        const response = await bookApi.getAllBooks();
        console.log("---------------->response header", response);
        // setBookTitle()
      } catch (err) {
        console.log(err);
      }
      fetchBookTitle();
    };
  }, []);

  const { authenticatedUser } = useAuth();
  return (
    <>
      <nav>
        <div className="">
          <div className="flex justify-between text-lg shadow-md p-3 w-full">
            <Brand />
            <div className="flex items-center">
              <div>
                <input
                  className="w-72 mr-5 bg-slate-100 rounded-xl p-1 placeholder-slate-400"
                  type="text"
                  placeholder="Search..."
                />
              </div>
              {authenticatedUser.role === "admin" ? (
                <div className="flex items-center mr-5">
                  <Link to="/create-book">
                    <Button title="Create Book" />
                  </Link>
                </div>
              ) : null}
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
