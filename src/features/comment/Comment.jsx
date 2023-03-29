import React from "react";
import ShowComment from "./ShowComment";

export default function Comment() {
  return (
    <div className="my-4">
      <div className="flex justify-center">
        <div className="mb-2 border-b-2 w-[90%]">
          <h1 className="text-center text-3xl font-bold mb-3">Comments</h1>
        </div>
      </div>
      <ShowComment />
    </div>
  );
}
