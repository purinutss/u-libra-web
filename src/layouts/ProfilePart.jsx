import React from "react";

export default function ProfilePart() {
  return (
    <>
      <div className="w-[70%]">
        <div className="flex flex-col justify-center">
          <div className="grid justify-center mt-10">
            <img
              src="https://picsum.photos/250/250"
              alt=""
              className="rounded-full"
            />
          </div>

          <div className="p-10">
            <div>
              <h1 className="font-bold text-xl">Display Name</h1>
              <input
                type="text"
                className="border-black border-2 rounded-3xl mt-2 mb-4 w-full"
              />
            </div>
            <div>
              <h1 className="font-bold text-xl">Tell Something</h1>
              <input
                type="text"
                className="border-black border-2 rounded-3xl mt-2 mb-4 w-full h-36"
              />
            </div>
            <div>
              <h1 className="font-bold text-xl">Facebook URL</h1>
              <input
                type="text"
                className="border-black border-2 rounded-3xl mt-2 mb-4 w-full"
              />
            </div>
            <div className="grid justify-end mb-2">
              <button
                type="button"
                className="rounded-xl bg-emerald-200 p-1.5 w-32 font-bold text-2xl"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
