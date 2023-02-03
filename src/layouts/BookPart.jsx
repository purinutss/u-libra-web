import React from "react";

export default function BookPart() {
  return (
    <>
      <div>
        <div>
          <div className="">
            <h1 className=" w-1/5 text-left font-bold text-2xl p-10 hover:text-blue-800 hover:underline cursor-pointer">
              New Arrival
            </h1>
          </div>
          <div className="flex justify-center gap-16">
            <div>
              <img src="https://picsum.photos/200/300" alt="" />
            </div>
            <div>
              <img src="https://picsum.photos/200/300" alt="" />
            </div>
            <div>
              <img src="https://picsum.photos/200/300" alt="" />
            </div>
            <div>
              <img src="https://picsum.photos/200/300" alt="" />
            </div>
            <div>
              <img src="https://picsum.photos/200/300" alt="" />
            </div>
          </div>
        </div>
        <hr className="mt-20 shadow-lg" />
        <div>
          <div className="">
            <h1 className=" w-1/5 text-left font-bold text-2xl p-10 hover:text-blue-800 hover:underline cursor-pointer">
              IT
            </h1>
          </div>
          <div className="flex justify-center gap-x-16">
            <div>
              <img src="https://picsum.photos/200/300" alt="" />
            </div>
            <div>
              <img src="https://picsum.photos/200/300" alt="" />
            </div>
            <div>
              <img src="https://picsum.photos/200/300" alt="" />
            </div>
            <div>
              <img src="https://picsum.photos/200/300" alt="" />
            </div>
            <div>
              <img src="https://picsum.photos/200/300" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
