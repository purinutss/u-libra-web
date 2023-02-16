import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ReadingContainer from "../features/reading/ReadingContainer";
import axios from "../config/axios";

export default function SummaryBookPart() {
  const [books, setBooks] = useState({});
  const { bookId } = useParams();
  // console.log(bookId);
  const fetchBook = async () => {
    try {
      const response = await axios.get(`/book/get/${bookId}`);
      console.log(response.data.books);
      // const bookInfo = response.data.books;
      setBooks(response.data.book);
      // console.log(bookInfo);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(books);

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <>
      <div className="flex justify-evenly mx-4 mt-4">
        <div key={books.id} className="flex w-full">
          <div>
            <im
              src={books.bookCover}
              alt="bookCover"
              className="borer-2 border-black"
            />
          </div>
          <div className="w-full ml-10 ">
            <div className="flex justify-between">
              <div>
                <div>
                  <h1 className="text-3xl font-extrabold">{books.title}</h1>
                </div>
                <div>
                  <h1 className="text-sm font-bold">
                    {books.University?.name} / {books.Category?.title}
                  </h1>
                </div>
              </div>
              <div className="grid items-center">
                <ReadingContainer />
              </div>
            </div>
            <div className=" self-center mt-4">
              <h1 className="self-center font-light text-xs w-10/12">
                {books.summary}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
