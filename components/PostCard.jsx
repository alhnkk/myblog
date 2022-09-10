import React from "react";
import moment from "moment";
import "moment/locale/tr";
moment.locale("tr");
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <section>
      <Link href={`/post/${post.slug}`}>
      <div className="my-9 space-y-8 lg:divide-y lg:divide-gray-100 group cursor-pointer rounded-lg">
        <div className="sm:flex group">
          <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
            <img
              src={post.featuredimage.url}
              alt={post.title}
              className="w-full lg:w-96 h-56 object-cover "
            />
          </div>
          <div>
            <span className="text-sm flex text-slate-500">
              {moment(post.createdAt).format("D MMMM, YYYY")}
            </span>
            <h1 className="mt-7 font-medium leading-6">
              <Link href={`/post/${post.slug}`}>
                <a
                  href="./blog-post.html"
                  className="text-2xl font-semibold bg-gradient-to-r from-green-200 to-green-100 dark:from-purple-800 dark:to-purple-900
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

            <div className="dark:text-violet-300 opacity-50 text-xs">
              {post.tags}
            </div>
          </div>
        </div>
      </div>
      </Link>
    </section>
  );
};

export default PostCard;
