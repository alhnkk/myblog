import React, {useState, useEffect} from 'react'
import moment from 'moment'
import 'moment/locale/tr'  
moment.locale('tr')
import Link from 'next/link'

import { getRecentPosts, getSimilarPosts } from '../services'



const PostWidget = ({categories, slug}) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if(slug) {
      getSimilarPosts(categories , slug)
        .then((result) => setRelatedPosts(result))
    } else {
      getRecentPosts()
        .then((result) => setRelatedPosts(result))
    }
  
  
  }, [slug])

  console.log(relatedPosts);
  
  return (
    <div className='border rounded-lg widgetClass shadow p-8 mb-10'>
        
        <h3 className='text-xl card-title  mb-8 font-semibold pb-1'> 
          {slug ? "İlgili İçerikler" : "Son Gönderiler"}
        </h3>
        
        {relatedPosts.map((post) => (
          <div key={post.title} className='pb-2 flex items-center w-full'>
            <div className='w-16 flex-none'>
            <img 
            src={post.featuredimage.url}
            width="60px"
            height= "60px"
            alt={post.title}
            className='align-middle rounded-full '
            />
            </div>
            
            <div className="flex-grow ml-4">
            <p className='text-gray-500 font-xs'>
              {moment(post.createdAt).format('DD/MM/YYYY')}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title} className="text-md">
              {post.title}
            </Link>
            </div>
          </div>
          

        ))}
    </div>
  )
}

export default PostWidget

