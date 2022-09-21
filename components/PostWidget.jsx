import React, { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/tr";
moment.locale("tr");
import Link from "next/link";

import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  console.log(relatedPosts);

  return (
    <div className="shadow-md border-b-4 border-b-gray-300 rounded-lg  bg-white dark:bg-slate-800 dark:border-none mb-8">
      <div className="flex items-center bg-gray-200 dark:bg-gray-900 w-full h-16 rounded-b rounded-lg">
        <h3 className="text-xl text-headline dark:text-slate-300  font-medium pb-1 ml-6">
          {slug ? "İlgili İçerikler" : "Son Gönderiler"}
        </h3>
      </div>

      {relatedPosts.map((post) => (
        <div
          key={post.title}
          className="text-headline dark:text-slate-300 pb-2 font-semibold p-8 flex items-center w-full dark:border-none"
        >
          <div className="w-16 flex-none">
            <img
              src={post.featuredimage.url}
              width="60px"
              height="60px"
              alt={post.title}
              className="align-middle rounded-sm"
            />
          </div>

          <div className="flex-grow ml-4">
            <Link
              href={`/post/${post.slug}`}
              key={post.title}
              className="text-md"
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
