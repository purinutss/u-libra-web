import React from "react";
import Comment from "../features/comment/Comment";
import Header from "../layouts/Header";
import SummaryBookPart from "../layouts/SummaryBookPart";

export default function SummaryBookPage() {
  return (
    <>
      <div className="">
        <Header />
        <SummaryBookPart />
        <Comment />
      </div>
      <div></div>
      <div></div>
    </>
  );
}
