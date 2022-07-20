import React from 'react'
import moment from 'moment'
import 'moment/locale/tr'  
moment.locale('tr')
import Link from 'next/link'
import Image from 'next/image';
import { AiFillAccountBook, AiFillAndroid , AiOutlineArrowRight} from "react-icons/ai";

const PostCard = ({post}) => {
  return (
    <div className="rounded-lg shadow-lg grid-rows-2 bg-white dark:bg-slate-800  dark:border-none mb-8 p-3 border border-slate-200">
      <div>
      <div>
        <h1 className='pt-5 ml-4'>
        <Link href={`/post/${post.slug}`}><a className='font-medium dark:text-slate-300 text-4xl text-blue-900 hover:text-black dark:hover:text-white '>{post.title}</a></Link>
        </h1>
      </div>

      <div className='flex items-center ml-4 mt-2.5 text-sm text-gray-500 dark:text-slate-300'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>      
        < span className="align-middle mr-4">{moment(post.createdAt).format('MMMM DD, YYYY')}</span>

        <Image
          unoptimized
          alt={post.author.name}
          height="25px"
          width="25px"
          className=" align-middle rounded-full"
          src={post.author.photo.url}
        />
        <p>
        {post.author.name}

        </p>
      </div>
      
      </div>
   
    <div className="grid lg:grid-cols-12 ">
      <div className='col-span-1 lg:col-span-5 lg:p-4'>
      <Link href={`/post/${post.slug}`}>
        <a>
          <img className='pb-5 pt-2   rounded-2xl' src={post.featuredimage.url} />
        </a>
      </Link >
      </div>
    
      <div className='col-span-1 lg:col-span-7' >
              <p className='font-light pt-5 ml-2 text-gray-700 dark:text-slate-300'>
                {post.excerpt}
              </p>

              <div className='flex justify-end mt-6 mr-7 ml-2'>
              <Link href={`/post/${post.slug}`}>
                  <div className='text-slate-800 transition duration-500 transform hover:-translate-y-1   cursor-pointer text-lg font-medium rounded-md p-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mb-1 ml-1 inline-block text-red-700 hover:text-black dark:hover:text-white dark:text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
              </Link>

              </div>
      </div>

    </div>
    </div>
  )}


export default PostCard