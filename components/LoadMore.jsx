import React from "react";

const LoadMore = ({ showMoreItems }) => {
  return (
    <div>
      <div className="block py-9">
        <button
          className="bg-transparent hover:text-slate-700 dark:text-slate-50 hover:dark:text-slate-400 content-between
                text-slate-800 font-semibold py-2 px-4 rounded-full"
          onClick={showMoreItems}
        >
          <span className="bg-button dark:bg-slate-800 hover:dark:bg-slate-900 p-2 rounded-full hover:bg-gray-500 hover:text-white">
            Daha Fazla
          </span>
        </button>
      </div>
    </div>
  );
};

export default LoadMore;
