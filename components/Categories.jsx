import React, { useEffect, useState } from "react";
import { getCategories } from "../services";
import Link from "next/link";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className="">
      <div className="flex items-center bg-gray-200 dark:bg-gray-900 w-full h-16 rounded-b rounded-lg">
        <h3 className="text-xl text-headline dark:text-slate-300 font-medium pb-1 ml-6">
          Kategoriler
        </h3>
      </div>
      <div className="border bg-white dark:bg-slate-800 dark:border-none shadow-sm rounded-md p-8 mb-8 pb-12 border-b-4 border-b-gray-300">
        {categories.map((category) => (
          <ul>
            <li className="">
              <Link href={`/category/${category.slug}`} key={category.slug}>
                <span className="cursor-pointer block pb-3 dark:text-slate-300 mb-3 font-semibold text-headline">
                  {category.name}
                </span>
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Categories;
