import React from "react";
import moment from "moment";
import "moment/locale/tr";
moment.locale("tr");
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <section>
      <Link href={`/post/${post.slug}`}>
        <div className="my-9 space-y-8 lg:divide-y lg:divide-gray-100 group cursor-pointer rounded-lg border-b">
          <div className="sm:flex group">
            <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
              <img
                src={post.featuredimage.url}
                alt={post.title}
                className="w-full lg:w-80 h-52 object-cover rounded-lg group-hover:opacity-75"
              />
            </div>
            <div>
              <span className="text-xs flex text-paraghraph dark:text-darkParaghraph">
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
