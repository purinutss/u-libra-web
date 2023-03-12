import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CategoryPage from "../../pages/CategoryPage";
import * as categoryApi from "../../apis/category-api";

export default function CategoryFormat() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await categoryApi.getAllCategories();
        const allCategories = response.data.categories;
        setCategory(allCategories);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategory();
  }, []);

  return (
    <div>
      {category.map((category) => {
        return (
          <Link to={`/category/${category.id}`}>
            <div
              // type="button"
              key={category.id}
              className="w-full rounded-lg border shadow-md  text-center flex justify-center font-semibold gap-3 p-2 my-2 hover:bg-emerald-200"
            >
              {category.title}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
