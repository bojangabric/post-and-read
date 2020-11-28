import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import ReactMarkdown from 'react-markdown';
import { useInput } from '../../hooks/input-hook';
import axios from 'axios';
import Router from 'next/router';
import { NextSeo } from 'next-seo';

const CreatePost = () => {
  const [files, setFiles] = useState([]);
  const onDrop = acceptedFiles => {
    setFiles(
      acceptedFiles.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )
    );
  };
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  const { value: author, bind: bindAuthor, reset: resetAuthor } = useInput('');
  const { value: title, bind: bindTitle, reset: resetTitle } = useInput('');
  const { value: post, bind: bindPost, reset: resetPost } = useInput('');

  const submitForm = async e => {
    e.preventDefault();

    const uploadURL = 'https://api.cloudinary.com/v1_1/dzjr25qbl/image/upload';
    const uploadPreset = 'mndlfvlo';
    const formData = new FormData();

    formData.append('file', files[0]);
    formData.append('upload_preset', uploadPreset);

    const imageUrl = await axios({
      url: uploadURL,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: formData
    }).then(res => res.data.secure_url);

    const res = await axios.post('/api/posts/create', {
      title: title,
      post: post,
      author: author,
      picture: imageUrl,
      avatar: '/images/avatar' + (Math.floor(Math.random() * 9) + 1) + '.png'
    });

    Router.push('/posts/' + res.data.insertedId);
  };

  return (
    <>
      <NextSeo title={'Create a new article'} />
      <div className="mt-32 mx-auto">
        <form className="space-y-8" onSubmit={submitForm}>
          <div className="sm:flex justify-between sm:space-x-8 md:space-x-16">
            <div className="w-full">
              <label htmlFor="title" className="block font-medium text-gray-700">
                Title
              </label>
              <div className="mt-1">
                <input
                  id="title"
                  className="form-input w-full px-2 shadow-sm border rounded"
                  placeholder="My Article"
                  required
                  {...bindTitle}
                />
              </div>
            </div>

            <div className="w-full">
              <label htmlFor="name" className="block font-medium text-gray-700">
                Your name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  className="form-input w-full px-2 shadow-sm border rounded"
                  placeholder="John Doe"
                  required
                  {...bindAuthor}
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="post" className="block font-medium text-gray-700">
              Article
            </label>
            <div className="mt-1 md:flex md:space-x-16">
              <textarea
                name="post"
                className="form-textarea shadow-sm w-full md:w-1/2 border rounded"
                rows="15"
                placeholder="Write your article here..."
                required
                {...bindPost}
              ></textarea>
              <div
                className="markdown border rounded w-full md:w-1/2 px-3 py-2 relative shadow-sm overflow-hidden bg-white"
                style={{ minHeight: '8rem' }}
              >
                <ReactMarkdown source={post} />
                <span className="absolute top-0 md:bottom-0 md:top-auto right-0 italic text-sm text-gray-600 p-2">
                  Markdown preview
                </span>
              </div>
            </div>
          </div>

          <div className="w-full">
            <label className="block font-medium text-gray-700">Cover photo</label>
            <div
              {...getRootProps()}
              className="mt-1 border border-dashed form-input cursor-pointer hover:border-gray-500 transition duration-150"
            >
              <input {...getInputProps()} />
              <p className="text-sm text-center font-medium py-6 text-gray-600">
                <svg className="mx-auto w-10 stroke-current mb-2" fill="none" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-teal-600">Upload a file</span> or drag and drop
              </p>
            </div>
          </div>

          <button className="w-full bg-teal-600 text-white rounded py-4 px-4 hover:bg-teal-700 transition font-medium text-lg">
            Post an article
          </button>
        </form>
      </div>
    </>
  );
};

export default CreatePost;
