import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import LoginContainer from "../features/auth/LoginContainer";
import useAuth from "../hooks/useAuth";
import Brand from "./Brand";
import CategoryContainer from "./category/CategoryContainer";
import DropdownProfile from "./DropdownProfile";
import Button from "../layouts/admin/Button";
import axios from "../config/axios";

export default function Header() {
  const [bookData, setBookData] = useState([]);
  const [titlesFilter, setTitlesFilter] = useState("");
  const [isSearchResultOpen, setIsSearchResultOpen] = useState(true);

  useEffect(() => {
    const fetchBookTitle = async () => {
      try {
        const response = await axios.get(`/book/get/book/title?bookTitle=${titlesFilter}`);
        const allBookTitles = response.data.bookTitles;
        setBookData(allBookTitles);
      } catch (err) {
        console.log(err);
      }
    };
    const idTimeout = setTimeout(() => {
      titlesFilter !== "" && fetchBookTitle();
    }, 500);
    return () => clearTimeout(idTimeout);
  }, [titlesFilter]);

  const handleChangeInput = (e) => {
    setTitlesFilter(e.target.value);
    setIsSearchResultOpen(true);
  };

  const handleSearchResult = (e) => {
    setTitlesFilter("");
    setIsSearchResultOpen(false);
  };

  const { authenticatedUser } = useAuth();
  return (
    <>
      <nav>
        <div className="">
          <div className="flex justify-between text-lg shadow-md p-3 w-full">
            <Brand />
            <div className="flex items-center">
              <div>
                <div>
                  <input
                    className="w-72 mr-5 bg-slate-100 rounded-xl p-1 placeholder-slate-400"
                    type="text"
                    placeholder="Search..."
                    onChange={handleChangeInput}
                    value={titlesFilter}
                  />
                </div>
                <div className="absolute">
                  {titlesFilter !== "" && bookData.length !== 0 && isSearchResultOpen && (
                    <div className="mt-2">
                      {bookData.map((book) => (
                        <Link to={`/summary/${book.id}`}>
                          <div
                            className="w-72 mr-5 border bg-gray-50 border-gray-200 p-1 hover:bg-emerald-100 rounded-sm"
                            onClick={handleSearchResult}
                          >
                            {book.title}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
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
