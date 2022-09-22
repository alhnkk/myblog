import React from "react";
import moment from "moment";

const PostDetailImage = ({ post }) => {
  return (
    <div className="px-4 md:px-0">
      <div className="relative overflow-hidden shadow-md bg-gradient-to-b from-black via-gray-700 to-black rounded-t-lg z-1">
        <img
          src={post.featuredimage.url}
          alt=""
          className="object-center h-96 w-full object-cover  shadow-lg rounded-t-lg opacity-80"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="absolute ml-3 bottom-72 text-4xl flex font-extrabold text-white dark:text-darkHeadline z-20 px-4 md:px-0">
          {post.title}
        </h1>
        <div className="font-sm ml-4 text-sm text-gray-700 absolute top-28 bg-gray-200 rounded-lg p-1 z-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline mr-2 text-purple-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="align-middle dark:text-darkParaghraph">
            {moment(post.createdAt).format("D MMMM YYYY")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostDetailImage;
