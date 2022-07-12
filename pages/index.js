import Head from 'next/head';
import {PostCard, Categories, PostWidget, Footer, EmailSubs} from '../components'
import {getPosts} from '../services';
import { FeaturedPosts } from '../sections'
import postcss from 'postcss';

export default function Home({ posts }) {


  return (
    <div>
      <Head>
        <title>MyBlog</title>
        <link rel="icon" href="/favicon.ico"  />
      </Head>

      <FeaturedPosts/>



      
        <div className="  grid grid-cols-1 mx-auto lg:grid-cols-12 gap-12">
          <div className="lg:col-span-1 col-span-1"></div>
          <div className='lg:col-span-7 col-span-1 '>

            {posts.slice(0).reverse().map((post) => (<PostCard post={post.node} key={post.title} />  ) )}
            
          </div>


          <div className="text-slate-400 lg:col-span-3  col-span-1">

              <div className=" lg:sticky relative top-8">
                <PostWidget />
                <EmailSubs />
                <Categories />

              </div>
              <div className="lg:col-span-1 col-span-1"></div>
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