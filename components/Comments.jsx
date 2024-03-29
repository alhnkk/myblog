import React, { useEffect, useState } from "react";
import moment from "moment";
import parse from "html-react-parser";

import { getComments } from "../services";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result);
    });
  }, []);

  return (
    <>
      {comments.length > 0 && (
        <div className="bg-white dark:bg-slate-800 shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4 dark:text-slate-300 dark:border-gray-600 ">
            {comments.length} Yorum
          </h3>
          {comments.map((comment, index) => (
            <div
              key={index}
              className="border-b border-gray-100 dark:border-gray-600 mb-4 pb-4"
            >
              <p className="mb-4">
                <span className="font-semibold dark:text-slate-300 ">
                  {comment.name}
                </span>{" "}
                - {moment(comment.createdAt).format("DD MMMM YYYY")}
              </p>
              <p className="whitespace-pre-line dark:text-slate-300 text-gray-600 w-full">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
