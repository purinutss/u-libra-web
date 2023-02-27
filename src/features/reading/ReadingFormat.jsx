import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../../config/axios";

export default function ReadingFormat({ onClose }) {
  const [showChapter, setShowChapter] = useState([]);
  const { bookId } = useParams();

  const fetchChapter = async () => {
    try {
      const response = await axios.get(`/chapter/get/chapter/${bookId}`);
      const showChapter = response.data.chapters;
      setShowChapter(showChapter);
      console.log(showChapter);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchChapter();
  }, []);
  return (
    <>
      {showChapter?.map((chapter) => {
        return (
          <Link to="/read/:bookId/:chapterId">
            <div onClose={onClose}>
              <span>{chapter.title}</span>
              <hr className="my-2" />
            </div>
          </Link>
        );
      })}
    </>
  );
}
