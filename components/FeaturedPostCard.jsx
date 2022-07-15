import React, {useState, useEffect} from 'react'
import moment from 'moment'
import 'moment/locale/tr'  
moment.locale('tr')
import Image from 'next/image';
import Link from 'next/link';


const FeaturedPostCard = ({ post }) => {



return (
  <section className="py-12  ">
  <div>
    <div className='grid md:grid-cols-2 '>
      
      {/* Başlık */}
      <Link href={`/post/${post.slug}`} >
        <a>
          <div
          className="bg-center rounded-sm bg-no-repeat bg-cover shadow-md inline-block w-full  h-96 "
          style={{ backgroundImage: `url('${post.featuredimage.url}')` }}
          width={600} 
          height={600} 
          />
        </a>
      </Link>

      <div className="info flex justify-center flex-col  lg:ml-2">
        <div className="cat">
          <Link href={`/post/${post.slug}`}>
            <a className="text-orange-600 hover:text-orange-800">
              {moment(post.createdAt).format('DD MMMM  dddd')}
            </a>
          </Link>
        </div>

        <div className="title">
          <Link href={`/post/${post.slug}`}>
            <a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
              {post.title}

            </a> 
            </Link>
            </div>
            
            
            <div className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8' >
              <p>
                {post.excerpt}
              </p>
            </div>

            <div className="flex items-center mb-12  w-full lg:w-auto mr-8 ">
              <Image
                unoptimized
                alt={post.author.name}
                height="30px"
                width="30px"
                className="align-middle rounded-full"
                src={post.author.photo.url}
              />
              <p className="inline  text-gray-700 ml-2 font-medium text-lg">{post.author.name}</p>
            </div>
            
      </div>
      
    </div>
  </div>
</section>
)

 
};



export default FeaturedPostCard;