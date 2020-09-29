import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const Post = ({ post }) => {
  return (
    <div className="markdown mt-32">
      <ReactMarkdown source={post.post} />
    </div>
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
