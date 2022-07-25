import React,  {useState} from 'react'
import moment from 'moment'
import 'moment/locale/tr'  
moment.locale('tr')
import Link from 'next/link'
import Image from 'next/image';
import { AiFillAccountBook, AiFillAndroid , AiOutlineArrowRight} from "react-icons/ai";

const PostCard = ({post}) => {
  
  const maxLength = 100;

  return (

<section>
  <div className="relative mt-3">
    <div className="relative flex justify-start">
    </div>
  </div>
  <div className="space-y-8 lg:divide-y lg:divide-gray-100">
    <div className="pt-8 sm:flex group">
      <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
        <img 
          src={post.featuredimage.url}
          alt={post.title}
          className="w-full h-56 lg:w-96 object-cover" />
      </div>
      <div>
        <span className="text-sm flex text-gray-500">{moment(post.createdAt).format('D MMMM, YYYY')}</span>
        <h1 className="mt-3 font-medium leading-6">
          <Link href={`/post/${post.slug}`}>
            <a href="./blog-post.html" className="dark:text-slate-50 text-xl font-medium text-gray-800 hover:text-gray-600 dark:hover:text-slate-600">{post.title}</a>
          </Link>
        </h1>

        <div className='dark:text-violet-100 opacity-25 text-xs mt-5'>{post.author.name}</div>
      </div>  
    </div>
    
  </div>


</section>


  )}


export default PostCard