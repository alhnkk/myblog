import Head from 'next/head';
import {PostCard, Categories, PostWidget, Footer} from '../components'
import {getPosts} from '../services';
import { FeaturedPosts } from '../sections'
import postcss from 'postcss';

export default function Home({ posts }) {


  return (
    <div className='dark:bg-neutral-900  '>
      <Head>
        <title>MyBlog</title>
        <link rel="icon" href="/favicon.ico"  />
      </Head>

      <FeaturedPosts/>



      
        <div className="container mx-auto px-4  lg:px-32  grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className='lg:col-span-8 col-span-1 '>

          {posts.slice().reverse().map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
            
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