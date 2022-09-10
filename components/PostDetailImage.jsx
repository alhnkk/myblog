import React from "react";

const PostDetailImage = ({ post }) => {
  return (
    <div>
      <div className="relative overflow-hidden shadow-md">
        <img
          src={post.featuredimage.url}
          alt=""
          className="object-center h-96 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
    </div>
  );
};

export default PostDetailImage;
