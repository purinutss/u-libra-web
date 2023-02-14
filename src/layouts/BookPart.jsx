import axios from "../config/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BookPart() {
  const [books, setBooks] = useState([]);

  const fetchBook = async () => {
    try {
      const response = await axios.get("/book");
      const bookCovers = response.data.books;
      setBooks(bookCovers);
      // console.log(typeof bookCovers);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(books);

  const bookSD = books.filter(
    (books) => books.Category.title === "Self-Development"
  );
  console.log(bookSD);

  useEffect(() => {
    fetchBook();
  }, []);
  return (
    <>
      <div>
        <div>
          <div className="asdfsadf">
            <Link to="/category/:catId">
              <h1 className=" fit-content text-left font-bold text-2xl p-10 hover:text-blue-800 hover:underline cursor-pointer">
                New Arrivals
              </h1>
            </Link>
          </div>
          <div className="gap-4 mx-5 flex flex-wrap">
            {books?.map((el) => {
              return (
                <div key={el.id}>
                  <Link to={`/summary/${el.id}`}>
                    <div className="">
                      <img
                        className="h-60 w-40 border-solid border-2 border-black"
                        src={el.bookCover}
                      />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <hr className="mt-20 shadow-lg" />

        <div>
          <div className="">
            <h1 className="fit-content text-left font-bold text-2xl p-10 hover:text-blue-800 hover:underline cursor-pointer">
              Self-Development
            </h1>
          </div>
          <div className="gap-4 mx-5 flex flex-wrap">
            {bookSD?.map((el) => {
              return (
                <div key={el.id}>
                  <Link to={`/summary/${el.id}`}>
                    <div className="">
                      <img
                        className="h-60 w-40 border-solid border-2 border-black"
                        src={el.bookCover}
                      />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
