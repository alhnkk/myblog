import React from "react";
import moment from "moment";
import "moment/locale/tr";
moment.locale("tr");
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <section>
      <Link href={`/post/${post.slug}`}>
        <div className="my-9 space-y-8 lg:divide-y lg:divide-gray-100 group cursor-pointer rounded-lg dark:border-none border-b">
          <div className="sm:flex group">
            <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
              <img
                src={post.featuredimage.url}
                alt={post.title}
                className="w-full lg:w-80 h-52 object-cover rounded-md group-hover:opacity-75"
              />
            </div>
            <div>
              <span className="text-xs flex text-paraghraph dark:text-darkParaghraph">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="14px"
                  height="16px"
                  className="text-paraghraph opacity-50 mr-0.5 dark:text-white"
                >
                  <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z" />
                </svg>
                {moment(post.createdAt).format("D MMMM YY - HH:mm")}
              </span>
              <h1 className="mt-7 font-medium leading-6">
                <Link href={`/post/${post.slug}`}>
                  <a
                    href="./blog-post.html"
                    className="text-2xl text-headline dark:text-darkHeadline font-semibold bg-gradient-to-r from-green-200 to-green-100 dark:from-purple-800 dark:to-purple-900
          bg-[length:0px_10px]
          bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-500
          hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]"
                  >
                    {post.title}
                  </a>
                </Link>
              </h1>

              <div className="dark:text-darkParaghraph opacity-50 text-xs mt-6 text-paraghraph">
                <p>{post.excerpt}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default PostCard;
