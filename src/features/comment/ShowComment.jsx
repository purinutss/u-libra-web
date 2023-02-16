import React, { useEffect, useState } from "react";
import axios from "../../config/axios";
import Avatar from "../../components/Avatar";
import { useParams } from "react-router-dom";
import InputComment from "./InputComment";
import ToggleEditComment from "./ToggleEditComment";
import useAuth from "../../hooks/useAuth";

export default function ShowComment() {
  const [showComment, setShowComment] = useState([]);
  const [openEdit, setOpenEdit] = useState(null);
  const { bookId } = useParams();
  const { authenticatedUser } = useAuth();

  console.log(openEdit);
  const fetchComments = async () => {
    try {
      const response = await axios.get(`/comment/${bookId}/comments`);
      const commentShow = response.data.comments;
      setShowComment(commentShow);
      // console.log(commentShow);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log("sdfsdfsdfsdfsd", showComment);

  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(`/comment/${commentId}`);
      fetchComments();
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickEdit = (commentId) => {
    if (openEdit !== null) {
      setOpenEdit(null);
    } else {
      setOpenEdit(commentId);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <>
      {showComment?.map((el) => {
        return (
          <>
            <div className="my-3">
              <div className="flex items-start p-2 ">
                <div className="items-center ml-4 mr-6">
                  <Avatar src={el.User.profileImage} size={50} />
                </div>
                <div className="mr-4 w-60 flex flex-col justify-start">
                  <h1 className="font-bold text-lg">
                    {el.User.firstName} {el.User.lastName}
                  </h1>
                  <h1 className="font-extralight text-xs">2m ago</h1>
                </div>
                <div className="w-96 ">
                  {openEdit === el.id ? (
                    <ToggleEditComment
                      setShowComment={setShowComment}
                      comment={el.detail}
                      commentId={el.id}
                    />
                  ) : (
                    <h1>{el.detail}</h1>
                  )}
                </div>
                {authenticatedUser.id === el.User.id ? (
                  <div className="flex justify-end ml-96 mr-4">
                    <div className="">
                      <i
                        type="button"
                        className="fa-lg fa-solid fa-pencil mr-2"
                        onClick={() => handleClickEdit(el.id)}
                      ></i>
                    </div>
                    <div>
                      <i
                        type="button"
                        className="fa-lg fa-regular fa-trash-can"
                        onClick={() => handleDeleteComment(el.id)}
                      ></i>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <hr className="mx-3" />
          </>
        );
      })}
      {/* {openEdit ? <ToggleEditComment /> : ""} */}
      <InputComment setShowComment={setShowComment} showComment={showComment} />
    </>
  );
}
