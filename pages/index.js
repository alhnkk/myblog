import React, { useState } from "react";
import {
  PostCard,
  Categories,
  PostWidget,
  Footer,
  CategoryIcon,
  LoadMore,
  EmailSubs,
} from "../components";
import { getPosts } from "../services";
import { FeaturedPosts } from "../sections";

export default function Home({ posts }) {
  const [visible, setVisible] = useState(8);

  const showMoreItems = () => { 
    setVisible((prevValue) => prevValue + 5);
  };

  return (
    <div className="dark:bg-neutral-900 bg-gray-100">
      <FeaturedPosts />
      {/* <CategoryIcon /> */}
      <div className="container mx-auto px-4  lg:px-32  grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1 ">
          <span className="flex text-xl font-semibold underline decoration-blue-600  text-transparent bg-clip-text bg-gradient-to-br from-black to-blue-900 dark:text-slate-200">
          Son Eklenenler  
          </span>
          {posts
            ?.reverse()
            .slice(0, visible)
            .map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          <LoadMore showMoreItems={showMoreItems} />
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
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
