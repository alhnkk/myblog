import React,  {useState} from 'react'
import Head from 'next/head';
import {PostCard, Categories, PostWidget, Footer} from '../components'
import {getPosts} from '../services';
import { FeaturedPosts } from '../sections'
import postcss from 'postcss';

export default function Home({ posts }) {
  const [visible, setVisible] = useState(6);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };
  return (
    <div className='dark:bg-neutral-900  '>
      <Head>
        <title>MyBlog</title>
        <link rel="icon" href="/favicon.ico"  />
      </Head>

      <FeaturedPosts />



      
        <div className="container mx-auto px-4  lg:px-32  grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className='lg:col-span-8 col-span-1 '>

          {posts?.reverse().slice(0, visible).map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
          <div className="content-between flex flex-col pt-8	pb-10">
              <button
                className="bg-transparent hover:text-slate-700 dark:text-slate-50 hover:dark:text-slate-400 content-between
                text-slate-800 font-semibold py-2 px-4  rounded"
                onClick={showMoreItems} >
                    Daha Fazla
              </button>
          </div>
            
          </div>


          <div className="text-slate-400 lg:col-span-4  col-span-1">

              <div className="top-8">
                <PostWidget />
                <Categories />

              </div>
          </div>          

        </div>
        <Footer />

      </div>

  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}