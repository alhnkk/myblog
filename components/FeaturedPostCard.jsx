import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => (
    <div className="relative h-96">
      <div className="absolute bg-center rounded-sm bg-no-repeat bg-cover shadow-md inline-block w-full  h-96" style={{ backgroundImage: `url('${post.featuredimage.url}')` }} />
      <div className="absolute  bg-center bg-gradient-to-b opacity-0 from-gray-100 via-gray-700 to-black w-full h-72" />
      <div className="flex flex-col rounded-sm p-4 items-center justify-center absolute w-full h-full">
        <p className="text-white mb-4 text-shadow font-semibold text-xs">{moment(post.createdAt).format('DD/MM/YY dddd')}</p>
        <p className="text-white mb-4  text-shadow font-semibold text-5xl text-center bg-gray-100 bg-opacity-25">{post.title}</p>
        <div className="flex items-center absolute bottom-5 w-full justify-center">
          <Image
            unoptimized
            alt={post.author.name}
            height="30px"
            width="30px"
            className="align-middle drop-shadow-lg rounded-full"
            src={post.author.photo.url}
          />
          {/* <p className="inline align-middle text-white text-shadow ml-2 font-medium">{post.author.name}</p> */}
        </div>
      </div>
      <Link href={`/post/${post.slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link>
    </div>
);

export default FeaturedPostCard;