import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReadingContainer from "../features/reading/ReadingContainer";
import axios from "../config/axios";
import DeleteBookContainer from "../features/reading/admin/DeleteBookContainer";
import EditBookContainer from "../features/reading/admin/EditBookContainer";
import useAuth from "../hooks/useAuth";

export default function SummaryBookPart() {
  const { authenticatedUser } = useAuth();
  const [books, setBooks] = useState({});
  const [isUpdate, setIsUpdate] = useState(false);
  const { bookId } = useParams();
  const fetchBook = async () => {
    try {
      const response = await axios.get(`/book/get/${bookId}`);
      setBooks(response.data.book);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBook();
    setIsUpdate(false);
  }, [isUpdate]);

  return (
    <>
      <div className="flex justify-evenly mx-4 mt-4">
        <div key={books.id} className="flex w-full">
          <div className="border-2 border-black">
            <img src={books.bookCover} alt="bookCover" className="borer-2 border-black" />
          </div>
          <div className="w-full ml-10 ">
            <div className="flex justify-between">
              <div>
                <div>
                  <h1 className="text-3xl font-extrabold w-11/12">{books.title}</h1>
                </div>
                <div>
                  <h1 className="text-sm font-bold">
                    {books.University?.name} / {books.Category?.title}
                  </h1>
                </div>
                <div className=" self-center mt-4">
                  <h1 className="self-center font-light text-xs w-11/12">{books.summary}</h1>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="grid items-center">
                  <ReadingContainer />
                </div>
                {authenticatedUser.role === "admin" && (
                  <>
                    <div className="grid items-center">
                      <EditBookContainer
                        books={books}
                        setBooks={setBooks}
                        setIsUpdate={setIsUpdate}
                      />
                    </div>
                    <div className="grid items-center">
                      <DeleteBookContainer />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
