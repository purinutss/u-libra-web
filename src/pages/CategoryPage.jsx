import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import * as categoryApi from "../apis/category-api";

export default function CategoryPage() {
  const [title, setTitle] = useState([]);
  const [bookCat, setBookCat] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchCategoryId = async () => {
      try {
        const response = await categoryApi.getCategoryById(categoryId);
        const catTitle = response.data.category.title;
        const bookInCat = response.data.category.Books;
        setTitle(catTitle);
        setBookCat(bookInCat);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategoryId();
  }, [categoryId]);
  return (
    <div>
      <div>
        <div className="asdfsadf">
          <h1 className=" fit-content text-left font-bold text-2xl p-10">{title}</h1>
        </div>
        <div className="gap-4 mx-5 flex flex-wrap">
          {bookCat?.map((el) => {
            return (
              <div key={el.id}>
                <Link to={`/summary/${el.id}`}>
                  <div className="">
                    <img
                      className="h-60 w-40 border-solid border-2 border-black"
                      src={el.bookCover}
                    />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
