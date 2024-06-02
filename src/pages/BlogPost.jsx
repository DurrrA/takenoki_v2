import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MyNavbar from '../components/navbar';
import Footer from '../components/footer';
import './BlogPost.css';
import {Typography} from '@material-tailwind/react';
import { Button } from '@material-tailwind/react';
import btnFeedback from '../card/btnFeedback';
import { Link } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);;

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const response = await fetch('/dummydatafinal.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const post = data.find(post => post.id === Number(id));
        if (!post) {
          throw new Error('Post not found');
        }
        // Assuming post.konten is a string
        const formattedContent = post.konten 
        ? post.konten.split('\n').flatMap((line, index) => index !== 0 ? [<br key={index + 'break'} />, <p key={index + 'line'}>{line}</p>] : [<p key={index + 'line'}>{line}</p>])
        : null;
      setPost({...post, konten: formattedContent});
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    const timer = setTimeout(() => {
      setLoading(true);
      fetchPost();
    }, 500);
  
    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
          <span className="loading loading-dots loading-lg"></span>
      </div>
  );
  }
  if (error) {
    return <h1>Error: {error.message}</h1>
  }

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <MyNavbar />
        <div className="content flex-grow">
          <div className='container mx-auto p-4'>
          <Link to="/blog" className="btn btn-transparent px-4 py-2 shadow-md shadow-gray-400">Back to Blog</Link>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="md:col-span-2 bg-transparent rounded-lg flex flex-col md:flex-row shadow-md shadow-gray-400">
              <div className="shadow-md rounded-lg overflow-hidden">
                <div className="container mx-auto p-4">
                  <div className='flex items-center -space-x-3 justify-between'>
                  <h1 className='mb-5 justify-normal font-sans'>{post.judul}</h1>
                  <Typography className="text-sm font-lato"> {post.tanggal} </Typography>
                  </div>
                  <img src={post.gambar} alt={post.nama} className='gap-4 mb-3' />
                  <p className='pl-3 gap-4 font-helvetica'>
                    {post.konten}
                  </p>
                </div>
              </div>
              </div>
              <div className="md:ml-4 bg-transparent p-4">
                <div className='shadow-md rounded-lg mt-8 h-30 text-justify bg-gray-900 p-4'>
                  {post.tag.map((tag, index) => (
                    <span key={index} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                      {tag}
                    </span>
                  ))}
                  </div>
                </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default BlogPost;