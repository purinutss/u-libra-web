import React from "react";
import Avatar from "../../components/Avatar";
import useAuth from "../../hooks/useAuth";

export default function ShowComment() {
  const authenticatedUser = useAuth();
  return (
    <>
      <div className="my-3">
        <div className="flex items-start p-2">
          <div className="items-center mx-4">
            <Avatar src={authenticatedUser.profileImage} size={50} />
          </div>
          <div className="mr-4">
            <h1 className="font-bold text-lg">{authenticatedUser.firstName}</h1>
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
      <hr className="mx-3" />
    </>
  );
}
