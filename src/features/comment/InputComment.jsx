import React from "react";

export default function InputComment() {
  return (
    <>
      <div className="flex justify-center items-center mt-2">
        <div className="">
          <img
            src="https://picsum.photos/50/50"
            alt="avatar"
            className="rounded-full"
          />
        </div>
        <div className="mx-3">
          <input
            type="text"
            className="border-2 border-black rounded-3xl w-96"
            placeholder="Comments..."
          ></input>
        </div>
        <div className="">
          <i type="button" className="fa-2x fa-regular fa-circle-right"></i>
        </div>
      </div>
    </>
  );
}
