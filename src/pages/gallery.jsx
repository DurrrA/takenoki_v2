import React from 'react';
import MyNavbar from '../components/navbar';
import  { useState, useEffect } from 'react';
import TanamanGallery from '../card/tanamanGallery';
import Footer from '../components/footer';
import './App.css';

const Gallery = () => {
  // Fetch and display gallery images
  return (
    <>
    <MyNavbar />
    <div className='content'>

    </div>
    <div className="box mx-auto p-4 justify-content-center">
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      {/* Display images with popups */}
    </div>
    <TanamanGallery />
    </div>
    <Footer />
    </>
  );
};

export default Gallery;