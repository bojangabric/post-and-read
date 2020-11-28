import { Component } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { parse } from 'date-fns';
import distanceInWordsToNow from 'date-fns/formatDistanceToNow';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true
    };
  }

  async componentDidMount() {
    await axios('/api/posts').then(res => this.setState({ posts: res.data, loading: false }));
  }

  render() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 md:gap-10 lg:gap-20 justify-between">
        {this.state.loading && (
          <svg
            className="mt-32 col-span-3 place-self-center animate-spin -ml-1 mr-3 w-10 text-teal-600"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}

        {this.state.posts.map(post => (
          <Link key={post._id} prefetch={false} href="/posts/[id]" as={`/posts/${post._id}`}>
            <a className="flex">
              <div className="bg-white shadow-md hover:shadow-lg w-full flex flex-col max-w-xs mx-auto sm:max-w-none rounded overflow-hidden transform hover:-translate-y-1 transition animate-fade-in">
                <img className="w-full object-cover h-40" src={post.picture} />
                <div className="mx-4 my-4 flex flex-col flex-grow">
                  <div className="text-lg font-bold leading-snug flex-grow">{post.title}</div>
                  <div className="pt-4 flex items-center space-x-2">
                    <div>
                      <img className="rounded-full w-10 h-10" src={post.avatar} />
                    </div>
                    <div className="text-sm leading-snug">
                      <div className="text-gray-700 font-semibold">{post.author}</div>
                      <div className="text-gray-400">
                        {distanceInWordsToNow(parse(post.date, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", new Date()))} ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    );
  }
}

export default Posts;
