import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MyNavbar from '../components/navbar';
import Footer from '../components/footer';
import './App.css';

function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    fetchPost();
  }, [id]);

  if (loading) {
    return <span className="loading loading-ring loading-lg"></span>
  }
  if (error) {
    return <h1>Error: {error.message}</h1>
  }

  return (
    <>
      <MyNavbar />
      <div className="content">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="md:col-span-2">
            <div className="shadow-md rounded-lg overflow-hidden">
              <div className="container mx-auto p-4">
                <h1 className='mb-5'>{post.judul}</h1>
                <p className='gap-4'>
                  {post.konten}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BlogPost;