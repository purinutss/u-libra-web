import React from "react";

export default function ShowComment() {
  return (
    <>
      <div className="">
        <div className="flex items-start p-2">
          <div className="items-center mx-4">
            <img
              src="https://picsum.photos/80/80"
              alt="avatar"
              className="rounded-full"
            />
          </div>
          <div className="mr-4">
            <h1 className="font-bold text-lg">Purinut</h1>
            <h1 className="font-extralight text-xs">2m ago</h1>
          </div>
          <div className="w-full mr-4">
            <h1>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
              quaerat iste voluptatibus atque laboriosam odio reiciendis
              voluptatem illum saepe similique.
            </h1>
          </div>
          <div className="flex mr-4">
            <div className="">
              <i type="button" className="fa-lg fa-solid fa-pencil mr-2"></i>
            </div>
            <div>
              <i type="button" className="fa-lg fa-regular fa-trash-can"></i>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
