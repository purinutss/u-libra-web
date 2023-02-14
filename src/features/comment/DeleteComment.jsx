import React, { useEffect, useState } from "react";
import * as commentApi from "../../apis/comment-api";
import { useParams } from "react-router-dom";

export default function DeleteComment() {
  const [deleteShowComment, setDeleteShowComment] = useState(null);
  //   const [open, setOpen] = useState(false);
  //   const handleClickDelete = async () => {
  //     await commentApi.deleteComment(showComment.id);
  //     setShowComment((previous) =>
  //       previous.filter((el) => el.id === showComment.id)
  //     );
  //     setOpen(false);
  //   };
  return (
    <div>
      <i type="button" className="fa-lg fa-regular fa-trash-can"></i>
    </div>
  );
}
