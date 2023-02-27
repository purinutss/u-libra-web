import React, { useState } from "react";
import Input from "../../components/Input";
import MeAction from "../../features/profile/MeAction";
import Button from "../../layouts/admin/Button";
import * as bookApi from "../../apis/book-api";

export default function CreateBookPage() {
  const [input, setInput] = useState("");
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await bookApi.createBook(input);
    } catch (err) {
      console.log(err?.response?.data?.message);
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
                <Input
                  placeholder="Summary"
                  name="summary"
                  value={input.summary}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="mb-2">
                <Input
                  placeholder="University Id"
                  name="universityId"
                  value={input.university_id}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="mb-2">
                <Input
                  placeholder="Category Id"
                  name="categoryId"
                  value={input.category_id}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <div className="flex justify-center">
                  <img
                    className="h-60 w-40 border-solid border-2 border-black"
                    src=""
                    alt="book cover"
                  />
                </div>
                <div className="self-center my-3">
                  <MeAction logo="fa-book" title="Book Cover" />
                </div>
              </div>
              <div className="flex justify-center gap-3">
                <div>
                  <Button title="Create" type="submit" />
                </div>
                <div>
                  <Button
                    title="Reset"
                    type="reset"
                    className="rounded-xl bg-gray-200 p-1.5 w-32 font-medium text-lg"
                    onClick={() => setInput("")}
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
