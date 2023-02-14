import React from "react";
import { Link } from "react-router-dom";

export default function ReadingFormat({ onClose }) {
  return (
    <Link to="/read/:bookId/:chapterId">
      <div onClose={onClose}>
        <span>CHAPTER1 : Lorem ipsum dolor sit amet.</span>
        <hr className="my-2" />
      </div>
    </Link>
  );
}
