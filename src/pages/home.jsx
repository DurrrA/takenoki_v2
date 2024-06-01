import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MyNavbar from '../components/navbar'
import Tanaman from '../card/tanaman';
import Footer from '../components/footer';
import './App.css';


const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  // useEffect(() => {
  //   // Fetch 3-4 blogs from API
  //   fetch('/api/blogs?limit=4')
  //     .then(response => response.json())
  //     .then(data => setBlogs(data));
  // }, []);

  return (
    <>
      <div className="content">
        <MyNavbar />

        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Home</h1>
          {blogs.map(blog => (
            <div key={blog.id} className="mb-4">
              <h2 className="text-2xl">{blog.title}</h2>
              <p>{blog.summary}</p>
            </div>
          ))}
        </div>
        <Tanaman />
      <Footer />
      </div>
    </>
  );
};

export default Home;