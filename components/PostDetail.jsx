import React, { useState, useEffect } from 'react';

import moment from 'moment';

const PostDetail = ({ post }) => {

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <>
     <section className="dark:text-slate-50 text-gray-800 rounded-lg  container py-8 mx-auto mt-8">
  <div className="items-center  object-fill w-11/12 h-96 mx-auto rounded-lg shadow-lg">
  <img src={post.featuredimage.url} alt="" className="object-top h-full w-full object-cover  shadow-lg rounded-b-lg mb-6" />
  </div>
  <div className=" bg-white dark:bg-slate-800 -mt-24 mx-auto items-center w-5/6 z-50 rounded-lg px-4 py-4 shadow-lg">
    <div type="button" className="w-full my-4 sm:w-auto inline-flex items-center justify-center text-white font-medium bg-slate-600 rounded-lg 
    shadow-sm py-2 px-5 border border-white border-opacity-10 transform-gpu hover:-translate-y-0.5 transition-all duration-300
    text-sm sm:text-base">
      Kategori
    </div>
    <h1 className="font-display text-center mt-5 font-semibold text-3xl sm:text-4xl md:tracking-wide 
    break-words sm:text-left">
      {post.title}
    </h1>
    <div className="select-none flex items-center p-2 sm:p-4">
      <div
        className="flex flex-col w-8 h-8 justify-center items-center mr-4 hover:-translate-y-0.5 transition-all duration-150">
        <div className="block relative">
            <img
                alt={post.author.name}
                height="30px"
                width="30px"
                className="opacity-75 mx-auto object-cover rounded-full h-8 w-8"
                src={post.author.photo.url}
              />
        </div>
      </div>
      <div className="opacity-75 flex-1 pl-1 mr-4 sm:mr-16">
        <div className="font-medium">{post.author.name}</div>
        <div className="text-gray-600 text-sm">{moment(post.createdAt).format('MMM DD, YYYY')}</div>
      </div>
      <div className="text-gray-600 hover:text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
        </svg>
      </div>
    </div>
    <div className="text-base tracking-wider p-6 mt-4 rounded-xl indent-6 text-justify sm:text-lg">
    {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
    </div>
  </div>
</section>
<div className="py-4"></div>

    </>
  );
};

export default PostDetail;