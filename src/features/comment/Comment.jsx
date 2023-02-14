import React from "react";
import InputComment from "./InputComment";
import ShowComment from "./ShowComment";

export default function Comment() {
  return (
    <div className="my-4">
      <div className="mb-2">
        <h1 className="text-center text-3xl font-bold">Comment</h1>
      </div>
      <hr className="mx-3" />
      <ShowComment />
      {/* <InputComment /> */}
    </div>
  );
}
