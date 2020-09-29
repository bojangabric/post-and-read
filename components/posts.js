import { Component } from 'react';
import axios from 'axios';
import Link from 'next/link';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  async componentDidMount() {
    try {
      const res = await axios('/api/posts');
      this.setState({ posts: res.data });
    } catch (error) {
      throw error;
    }
  }

  render() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 md:gap-10 lg:gap-16 justify-between">
        {this.state.posts.map(post => (
          <Link key={post._id} prefetch={false} href="/posts/[id]" as={`/posts/${post._id}`}>
            <a className="flex">
              <div className="shadow-md hover:shadow-lg flex flex-col max-w-xs mx-auto sm:max-w-none rounded overflow-hidden transform hover:-translate-y-1 transition duration-150 ease-in animate-fade-in">
                <img className="w-full" src={post.picture} alt={post.title} />
                <div className="text-xl font-bold p-6 flex-grow">{post.title}</div>
                <div className="px-6 text-gray-600 mb-6">{post.author}</div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    );
  }
}

export default Posts;
