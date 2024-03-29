import React from 'react'

import {getPosts, getPostDetails} from '../../services';
import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm,Loader, PostDetailImage} from '../../components';

import {useRouter} from 'next/router'

const PostDetails = ({ post }) => {
    const router = useRouter();

    if(router.isFallback) {
        return <Loader/>
    }
    return (
        <div className="container mx-auto lg:px-36 mb-8 mt-24 dark:bg-darkBground">
        <div className="grid grid-cols-1 grid-rows-1 lg:grid-rows lg:grid-cols-12 gap-12">
            <div className='grid col-span-1 lg:col-span-12'>
              <PostDetailImage post={post} />
            </div>
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
            <Author author={post.author} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relatives top-8">
              <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    )
}

export default PostDetails

export async function getStaticProps({ params }) {
    const data = await getPostDetails(params.slug)
    return {
      props: { post: data },
    };
  }

  export async function getStaticPaths() {
    const posts = await getPosts();

    return {
        paths: posts.map(({node : { slug }}) => ({ params: { slug } }) ),
        fallback: true,
    }
  }