import React, { useEffect, useState } from "react";
import axios from "../../config/axios";
import Avatar from "../../components/Avatar";
import { useParams } from "react-router-dom";
import InputComment from "./InputComment";
import ToggleEditComment from "./ToggleEditComment";
import useAuth from "../../hooks/useAuth";
import DeleteCommentContainer from "./DeleteCommentContainer";

export default function ShowComment() {
  const [showComment, setShowComment] = useState([]);
  const [openEdit, setOpenEdit] = useState(false);
  const [isUpdateComment, setIsUpdateComment] = useState(false);
  const { bookId } = useParams();
  const { authenticatedUser } = useAuth();

  const fetchComments = async () => {
    try {
      const response = await axios.get(`/comment/${bookId}/comments`);
      const commentShow = response.data.comments;
      setShowComment(commentShow);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(`/comment/${commentId}`);
      fetchComments();
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickEdit = (commentId) => {
    if (openEdit !== false) {
      setOpenEdit(false);
    } else {
      setOpenEdit(commentId);
    }
  };

  useEffect(() => {
    fetchComments();
    setIsUpdateComment(false);
  }, [isUpdateComment]);

  return (
    <>
      {showComment?.map((el) => {
        return (
          <>
            <div className="my-3 w-[100%]">
              <div className="flex p-2 ">
                <div className="items-center ml-4 mr-6">
                  <Avatar src={el.User.profileImage} size={50} />
                </div>
                <div className="mr-4 w-[25%] flex flex-col justify-start">
                  <h1 className="font-bold text-lg">{el.User.username}</h1>
                  <h1 className="font-extralight text-xs">2m ago</h1>
                </div>
                <div className="w-[65%] ">
                  {openEdit === el.id ? (
                    <ToggleEditComment
                      setShowComment={setShowComment}
                      comment={el.detail}
                      commentId={el.id}
                      setIsUpdateComment={setIsUpdateComment}
                      setOpenEdit={setOpenEdit}
                    />
                  ) : (
                    <h1>{el.detail}</h1>
                  )}
                </div>
                {authenticatedUser.id === el.User.id ? (
                  <div className="flex justify-center w-[15px]">
                    <div className="">
                      <i
                        type="button"
                        className="fa-lg fa-solid fa-pencil mr-2"
                        onClick={() => handleClickEdit(el.id)}
                      ></i>
                    </div>
                    <div>
                      <DeleteCommentContainer onClick={() => handleDeleteComment(el.id)} />
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
