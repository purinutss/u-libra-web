import React from "react";
import Comment from "../features/comment/Comment";
import SummaryBookPart from "../layouts/SummaryBookPart";

export default function SummaryBookPage() {
  return (
    <>
      <div className="">
        <SummaryBookPart />
        <Comment />
      </div>
    </>
  );
}
