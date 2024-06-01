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
        setPost(post);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <h1>Error: {error.message}</h1>
  }

  return (
        <>
        <MyNavbar />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="md:col-span-2">
                <div className=" shadow-md rounded-lg overflow-hidden">
                    <div className="content">
                        <div className="container mx-auto p-4">
                            <h1>{post.judul}</h1>
                            <p>{post.konten}</p>
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