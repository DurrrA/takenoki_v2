import React from 'react';
import MyNavbar from '../components/navbar';
import  { useState, useEffect } from 'react';
import TanamanGallery from '../card/tanamanGallery';
import Footer from '../components/footer';
import './App.css';
import BtnFeedback from '../card/btnFeedback';

const Gallery = () => {
  // Fetch and display gallery images
  return (
    <>
    <MyNavbar />
    <div className='content'>
    <div className="box mx-auto p-4 justify-content-center">
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      {/* Display images with popups */}
    </div>
    <TanamanGallery />
    <BtnFeedback style={{ position: 'fixed', bottom: '150px', right: '170px' }} />
    </div>
    </div>
    <Footer />
    </>
  );
};

export default Gallery;