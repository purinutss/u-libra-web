import React, { useRef, useState } from "react";
import Input from "../../components/Input";
import MeAction from "../../features/profile/MeAction";
import Button from "../../layouts/admin/Button";
import * as bookApi from "../../apis/book-api";
import useLoading from "../../hooks/useLoading";

const initialInput = {
  title: "",
  summary: "",
  categoryId: "",
  universityId: "",
  bookCover: null
};

export default function CreateBookPage() {
  const [input, setInput] = useState(initialInput);
  const [bookCover, setBookCover] = useState(null);
  console.log(bookCover);
  const inputEl = useRef();

  const { startLoading, stopLoading } = useLoading();

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    startLoading();
    try {
      const formData = new FormData();
      formData.append("title", input.title);
      formData.append("summary", input.summary);
      formData.append("categoryId", input.categoryId);
      formData.append("universityId", input.universityId);
      formData.append("bookCover", bookCover);
      console.log(formData);
      await bookApi.createBook(formData);
      setInput(initialInput);
      setBookCover(null);
    } catch (err) {
      console.log(err?.response?.data?.message);
    } finally {
      stopLoading();
    }
  };
  const handleChangeInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <div className="flex justify-center my-5">
          <div className="h-screen flex items-center w-[30%]">
            <div className="flex flex-col justify-center w-full">
              <span className="font-black text-3xl text-center mb-4">Create Book</span>
              <div className="mb-2">
                <Input
                  placeholder="Title"
                  name="title"
                  value={input.title}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="mb-2">
                <textarea
                  placeholder="Summary"
                  name="summary"
                  value={input.summary}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 resize-y"
                  onChange={handleChangeInput}
                  // rows={3}
                />
              </div>
              <div className="mb-2">
                <Input
                  placeholder="University Id"
                  name="universityId"
                  value={input.universityId}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="mb-2">
                <Input
                  placeholder="Category Id"
                  name="categoryId"
                  value={input.categoryId}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <div className="flex justify-center">
                  <img
                    className="h-60 w-40 border-solid border-2 border-black"
                    src={bookCover ? URL.createObjectURL(bookCover) : null}
                    alt="book cover"
                  />
                </div>
                <div className="self-center my-3 flex justify-center">
                  <input
                    type="file"
                    ref={inputEl}
                    className="hidden"
                    onChange={(e) => {
                      setBookCover(e.target.files[0]);
                    }}
                  />
                  <button
                    type="button"
                    className=" bg-gray-200 p-1.5 rounded-lg"
                    onClick={() => inputEl.current.click()}
                  >
                    <i className="fa-solid fa-book" />
                    <span className="font-semibold">Book Cover</span>
                  </button>
                </div>
              </div>
              <div className="flex justify-center gap-3">
                <div>
                  <Button title="Create" type="submit" />
                </div>
                <div>
                  <Button
                    title="Reset"
                    // type="reset"
                    className="rounded-xl bg-gray-200 p-1.5 w-32 font-medium text-lg"
                    onClick={() => setInput(initialInput)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
