import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MyNavbar from '../components/navbar';
import Tanaman from '../card/tanaman';
import Footer from '../components/footer';
import './App.css';
import BtnFeedback from '../card/btnFeedback';
import HomeCarousel from '../components/HomeCarousel';
import FAQ from '../components/faq';

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
      <MyNavbar />
          <HomeCarousel/>
        <div className="container mx-auto p-4">
        <div className="content">
          {blogs.map(blog => (
            <div key={blog.id} className="mb-4 p-4 bg-gray-100 rounded shadow">
              <h2 className="text-2xl mb-2">{blog.title}</h2>
              <p>{blog.summary}</p>
            </div>
          ))}
          <Tanaman />
          <FAQ/>
        </div>
        <BtnFeedback style={{ position: 'absolute', bottom: '150px', right: '170px' }} />
      </div>
      <Footer />
    </>
  );
};

export default Home;