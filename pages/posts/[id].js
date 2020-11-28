import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { NextSeo } from 'next-seo';

const Post = ({ post }) => {
  return (
    <>
      <NextSeo title={post.title} />
      <div className="mt-32 max-w-2xl mx-auto">
        <img src={post.picture} />
        <div className="mt-16 text-4xl font-bold">{post.title}</div>
        <div className="mt-4 mb-24">Written by {post.author}</div>
        <div className="markdown">
          <ReactMarkdown source={post.post} />
        </div>
      </div>
    </>
  );
};

Post.getInitialProps = async ({ query }) => {
  const id = query.id;
  const res = await axios(`/api/posts/${id}`);
  const post = await res.data;

  return {
    post: post
  };
};

export default Post;
